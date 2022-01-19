import {
  DATA_API_ROOT,
  MAP_STATISTICS,
  PRIMARY_STATISTICS,
  STATE_NAMES,
  STATISTIC_CONFIGS,
  UNKNOWN_DISTRICT_KEY,
} from '../constants';
import useIsVisible from '../hooks/useIsVisible';
import {
  fetcher,
  formatNumber,
  getStatistic,
  parseIndiaDate,
  retry,
} from '../utils/commonFunctions';

import {SmileyIcon} from '@primer/octicons-react';
import classnames from 'classnames';
import {formatISO, max} from 'date-fns';
import {
  memo,
  useMemo,
  useState,
  useEffect,
  lazy,
  Suspense,
  useRef,
} from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import {useSessionStorage} from 'react-use';
import useSWR from 'swr';

const DeltaBarGraph = lazy(() => retry(() => import('./DeltaBarGraph')));
const Footer = lazy(() => retry(() => import('./Footer')));
const Level = lazy(() => retry(() => import('./Level')));
const VaccinationHeader = lazy(() =>
  retry(() => import('./VaccinationHeader'))
);
const MapExplorer = lazy(() => retry(() => import('./MapExplorer')));
const MapSwitcher = lazy(() => retry(() => import('./MapSwitcher')));
const Minigraphs = lazy(() => retry(() => import('./Minigraphs')));
const StateHeader = lazy(() => retry(() => import('./StateHeader')));
const StateMeta = lazy(() => retry(() => import('./StateMeta')));
const TimeseriesExplorer = lazy(() =>
  retry(() => import('./TimeseriesExplorer'))
);

function State() {
  const {t} = useTranslation();

  const stateCode = useParams().stateCode.toUpperCase();

  const [mapStatistic, setMapStatistic] = useSessionStorage(
    'mapStatistic',
    'active'
  );
  const [showAllDistricts, setShowAllDistricts] = useState(false);
  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: stateCode,
    districtName: null,
  });
  const [delta7Mode, setDelta7Mode] = useState(false);

  const {data: timeseries, error: timeseriesResponseError} = useSWR(
    `${DATA_API_ROOT}/timeseries-${stateCode}.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 100000,
    }
  );

  const {data} = useSWR(`${DATA_API_ROOT}/data.min.json`, fetcher, {
    revalidateOnMount: true,
    refreshInterval: 100000,
  });

  const stateData = data?.[stateCode];

  const scatter = (json) => {
    const margin = {top: 60, left: 35, bottom: 40, right: 50};
    const heightValue = 300;
    const widthValue = 600;
    const getCurrentDate = (lastUpdated, separator = ' ') => {
      const newDate = new Date(lastUpdated);

      const month = newDate.toLocaleString('default', {month: 'long'});
      const date = newDate.getDate();

      return `${date < 10 ? `0${date}` : `${date}`}${separator}${month}`;
    };
    const currentdate = getCurrentDate(json[0]?.Date);
    /*
     * The next block of code selects the id scatterplot-stats on the web page
     * and appends an svg object to it of the size
     * that we have set up with our width, height and margin’s.
     */
    d3.selectAll('#scatterplot-stats').selectAll('svg').remove();
    d3.selectAll('#scatterplot-stats').selectAll('#date').remove();
    d3.select('#scatterplot-stats')
      .append('div')
      .attr('id', 'date')
      .attr('class', 'graphtext')
      .html(`${currentdate}`);
    let svg = d3
      .select('#scatterplot-stats')
      .append('svg')
      .attr('viewBox', `0 0 ${widthValue} ${heightValue}`);

    const strokeWidth = 1.5;

    const width = widthValue - margin.left - margin.right - strokeWidth * 2;
    const height = heightValue - margin.top - margin.bottom;

    const y = d3.scale.linear().range([height, 0]);
    const x = d3.scale.linear().range([0, width]);

    // let prefix = d3.formatPrefix(1.21e9);
    const xAxis = d3.svg
      .axis()
      .scale(x)
      .ticks(6)
      .tickFormat(function (d) {
        const prefix = d3.formatPrefix(d);
        return prefix.scale(d) + prefix.symbol;
      })
      .orient('bottom');

    const yAxis = d3.svg
      .axis()
      .scale(y)
      .orient('right')
      .ticks(6)
      .tickFormat(function (d) {
        const prefix = d3.formatPrefix(d);
        return prefix.scale(d) + prefix.symbol;
      });

    svg
      .append('rect')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .attr('x', 0)
      .attr('y', 0)
      .attr('fill', '#E3E2F3')
      .attr('rx', 4)
      .attr('fill-opacity', 1);
    // It also adds a g element that provides a reference point for adding our axes.
    svg = svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    const tooltip = d3
      .select('#scatterplot-stats')
      .append('div')
      .attr('class', 'tooltip');

    // function getColor(arg) {
    //   return getRandomColor()
    // }

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    /*
     * this function is like mouse over.
     * If we place the mouse over a circle the tooltip is going to show up.
     */
    function showToolTip(d, i) {
      tooltip.style({
        display: 'block',
        height: '80px',
        width: '200px',
        padding: '5px',
        opacity: 1,
        'background-color': d.color,
      });

      const tipsize = {
        dx: parseInt(tooltip.style('width')),
        dy: parseInt(tooltip.style('height')),
      };

      tooltip
        .style({
          top: d3.event.pageY - tipsize.dy - 5 + 'px',
          left: d3.event.pageX - tipsize.dx + 100 + 'px',
        })
        .html(
          '<span><b>' +
            d.Name +
            '<br/>' +
            'Vaccine Dose 1: ' +
            d.Vaccine1 +
            '% <br/>' +
            'Vaccine Dose 2: ' +
            d.Vaccine2 +
            '%<br/>' +
            'Total Vaccinations: ' +
            (d.count1 + d.count2)
        );
    }

    /*
     * This function is like mouse out.
     * If we mouse out then the tooltip is hidding
     */
    function hideToolTip(d, i) {
      tooltip.style({
        display: 'none',
      });
    }

    /*
     * d3.json takes the variable url and two more parameters
     * if error, then throw it
     * else map the time-date in the horizontal axis and the rank-position in the verticall axis
     */
    // d3.json(json, (error, data) => {
    const data = json;
    if (!data) {
      throw new Error('d3.json error');
    } else {
      x.domain([0, 100]);
      y.domain([0, 100]);

      svg
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
        .append('text')
        .attr('fill', 'red')
        .attr('transform', 'translate(' + width + ',-30)')
        .attr('dy', '4.5em')
        .attr('text-anchor', 'end')
        .text('Vaccine Dose 1 %');

      svg
        .append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + width + ', 0)')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(0)')
        .attr('dy', '-0.8em')
        .attr('text-anchor', 'end')
        .text('Vaccine Dose 2 %');

      const districts = svg
        .selectAll('.vac-sc-plot')
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'vac-sc-plot')
        .attr('x', (d) => {
          return x(d.Vaccine1);
        })
        .attr('y', (d) => {
          return y(d.Vaccine2);
        });

      districts
        .append('circle')
        .attr('cx', (d) => {
          return x(d.Vaccine1);
        })
        .attr('cy', (d) => {
          return y(d.Vaccine2);
        })
        .attr('r', 5)
        .attr('fill', (d) => {
          const color = getRandomColor();
          d.color = color;
          return color;
        })
        .on('mouseover', showToolTip)
        .on('mouseout', hideToolTip);
    }
  };

  useEffect(() => {
    if (regionHighlighted.stateCode !== stateCode) {
      setRegionHighlighted({
        stateCode: stateCode,
        districtName: null,
      });
      setShowAllDistricts(false);
    }
    if (data?.[stateCode]) {
      const details = [];
      const noPopulation = ['DL', 'LA'];
      if (noPopulation.includes(stateCode)) {
        const obj = {};
        if (
          data[stateCode]?.meta?.population &&
          data[stateCode]?.total?.vaccinated1 &&
          data[stateCode]?.total?.vaccinated2
        ) {
          obj.Name = STATE_NAMES[stateCode];
          obj.Vaccine1 = (
            (data[stateCode]?.total?.vaccinated1 /
              data[stateCode]?.meta.population) *
            100
          ).toFixed(2);
          obj.Vaccine2 = (
            (data[stateCode]?.total?.vaccinated2 /
              data[stateCode]?.meta.population) *
            100
          ).toFixed(2);
          obj.count1 = data[stateCode]?.total?.vaccinated1;
          obj.count2 = data[stateCode]?.total?.vaccinated2;
          obj.Date = data[stateCode]?.meta?.date ?? '';
          if (obj.Vaccine1 > 100) {
            obj.Vaccine1 = 100;
          }
          if (obj.Vaccine2 > 100) {
            obj.Vaccine2 = 100;
          }
          if (
            obj.Vaccine1 &&
            obj.Vaccine2 &&
            obj.Vaccine1 <= 100 &&
            obj.Vaccine2 <= 100
          ) {
            details.push(obj);
          }
        }
      } else {
        Object.keys(data[stateCode].districts).forEach((district) => {
          if (
            data[stateCode].districts?.[district]?.total?.vaccinated1 &&
            data[stateCode].districts?.[district]?.total?.vaccinated2 &&
            data[stateCode].districts?.[district]?.meta?.population
          ) {
            let vaccine1 = (
              (data[stateCode].districts?.[district]?.total?.vaccinated1 /
                data[stateCode].districts?.[district]?.meta?.population) *
              100
            ).toFixed(2);
            let vaccine2 = (
              (data[stateCode].districts?.[district]?.total?.vaccinated2 /
                data[stateCode].districts?.[district]?.meta?.population) *
              100
            ).toFixed(2);
            if (vaccine1 > 100) {
              vaccine1 = 100;
            }
            if (vaccine2 > 100) {
              vaccine2 = 100;
            }
            if (vaccine1 && vaccine2 && vaccine1 <= 100 && vaccine2 <= 100) {
              details.push({
                Vaccine1: vaccine1 ?? 0,
                Vaccine2: vaccine2 ?? 0,
                count1:
                  data[stateCode].districts?.[district]?.total?.vaccinated1,
                count2:
                  data[stateCode].districts?.[district]?.total?.vaccinated2,
                Name: district,
                Date: data[stateCode]?.meta?.date ?? '',
              });
            }
          }
        });
      }
      scatter(details);
    }

    // scatter([
    //     {
    // "Time": 300000,
    // "Place": 10000,
    // "Seconds": 2210,
    // "Name": "Marco Pantani",
    // "Year": 1995,
    // "Nationality": "ITA",
    // "Doping": "Alleged drug use during 1995 due to high hematocrit levels",
    // "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
    //   },
    //           {
    // "Time": 3504,
    // "Place": 3300,
    // "Seconds": 2210,
    // "Name": "Marco Pantani",
    // "Year": 1995,
    // "Nationality": "ITA",
    // "Doping": "Alleged drug use during 1995 due to high hematocrit levels",
    // "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
    //   },
    // {
    // "Time": 55,
    // "Place": 100,
    // "Seconds": 2210,
    // "Name": "Marco Pantani",
    // "Year": 1995,
    // "Nationality": "ITA",
    // "Doping": "Alleged drug use during 1995 due to high hematocrit levels",
    // "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
    // },
    //   ]);
  }, [regionHighlighted.stateCode, stateCode, stateData, data]);

  const toggleShowAllDistricts = () => {
    setShowAllDistricts(!showAllDistricts);
  };

  const handleSort = (districtNameA, districtNameB) => {
    const districtA = stateData.districts[districtNameA];
    const districtB = stateData.districts[districtNameB];
    return (
      getStatistic(districtB, 'total', mapStatistic) -
      getStatistic(districtA, 'total', mapStatistic)
    );
  };

  const gridRowCount = useMemo(() => {
    if (!stateData) return;
    const gridColumnCount = window.innerWidth >= 540 ? 3 : 2;
    const districtCount = stateData?.districts
      ? Object.keys(stateData.districts).filter(
          (districtName) => districtName !== 'Unknown'
        ).length
      : 0;
    const gridRowCount = Math.ceil(districtCount / gridColumnCount);
    return gridRowCount;
  }, [stateData]);

  const stateMetaElement = useRef();
  const isStateMetaVisible = useIsVisible(stateMetaElement);

  const trail = useMemo(() => {
    const styles = [];

    [0, 0, 0, 0].map((element, index) => {
      styles.push({
        animationDelay: `${index * 250}ms`,
      });
      return null;
    });
    return styles;
  }, []);

  const lookback = showAllDistricts ? (window.innerWidth >= 540 ? 10 : 8) : 6;

  const lastDataDate = useMemo(() => {
    const updatedDates = [
      stateData?.meta?.date,
      stateData?.meta?.tested?.date,
      stateData?.meta?.vaccinated?.date,
    ].filter((date) => date);
    return updatedDates.length > 0
      ? formatISO(max(updatedDates.map((date) => parseIndiaDate(date))), {
          representation: 'date',
        })
      : null;
  }, [stateData]);

  const primaryStatistic = MAP_STATISTICS.includes(mapStatistic)
    ? mapStatistic
    : 'confirmed';

  const noDistrictData = useMemo(() => {
    // Heuristic: All cases are in Unknown
    return !!(
      stateData?.districts &&
      stateData.districts?.[UNKNOWN_DISTRICT_KEY] &&
      PRIMARY_STATISTICS.every(
        (statistic) =>
          getStatistic(stateData, 'total', statistic) ===
          getStatistic(
            stateData.districts[UNKNOWN_DISTRICT_KEY],
            'total',
            statistic
          )
      )
    );
  }, [stateData]);

  const statisticConfig = STATISTIC_CONFIGS[primaryStatistic];

  const noRegionHighlightedDistrictData =
    regionHighlighted?.districtName &&
    regionHighlighted.districtName !== UNKNOWN_DISTRICT_KEY &&
    noDistrictData;

  const districts = Object.keys(
    ((!noDistrictData || !statisticConfig.hasPrimary) &&
      stateData?.districts) ||
      {}
  );

  return (
    <>
      <Helmet>
        <title>
          Coronavirus Outbreak in {STATE_NAMES[stateCode]} - incovid19.org
        </title>
        <meta
          name="title"
          content={`Coronavirus Outbreak in ${STATE_NAMES[stateCode]}: Latest Map and Case Count`}
        />
      </Helmet>

      <div className="State">
        <div className="state-left">
          <StateHeader data={stateData} stateCode={stateCode} />

          <div style={{position: 'relative'}}>
            <MapSwitcher {...{mapStatistic, setMapStatistic}} />
            <Level data={stateData} />
            <Minigraphs
              timeseries={timeseries?.[stateCode]?.dates}
              {...{stateCode}}
              forceRender={!!timeseriesResponseError}
            />
          </div>

          {stateData?.total?.vaccinated1 && (
            <VaccinationHeader data={stateData} />
          )}

          {data && (
            <Suspense fallback={<div style={{minHeight: '50rem'}} />}>
              <MapExplorer
                {...{
                  stateCode,
                  data,
                  regionHighlighted,
                  setRegionHighlighted,
                  mapStatistic,
                  setMapStatistic,
                  lastDataDate,
                  delta7Mode,
                  setDelta7Mode,
                  noRegionHighlightedDistrictData,
                  noDistrictData,
                }}
              ></MapExplorer>
            </Suspense>
          )}

          <span ref={stateMetaElement} />

          {isStateMetaVisible && data && (
            <Suspense fallback={<div />}>
              <StateMeta
                {...{
                  stateCode,
                  data,
                }}
                timeseries={timeseries?.[stateCode]?.dates}
              />
            </Suspense>
          )}
        </div>

        <div className="state-right">
          <>
            <div className="district-bar">
              <div
                className={classnames('district-bar-top', {
                  expanded: showAllDistricts,
                })}
              >
                <div className="district-bar-left">
                  <h2
                    className={classnames(primaryStatistic, 'fadeInUp')}
                    style={trail[0]}
                  >
                    {t('Top districts')}
                  </h2>
                  <div
                    className={`districts fadeInUp ${
                      showAllDistricts ? 'is-grid' : ''
                    }`}
                    style={
                      showAllDistricts
                        ? {
                            gridTemplateRows: `repeat(${gridRowCount}, 2rem)`,
                            ...trail[1],
                          }
                        : trail[1]
                    }
                  >
                    {districts
                      .filter((districtName) => districtName !== 'Unknown')
                      .sort((a, b) => handleSort(a, b))
                      .slice(0, showAllDistricts ? undefined : 5)
                      .map((districtName) => {
                        const total = getStatistic(
                          stateData.districts[districtName],
                          'total',
                          primaryStatistic
                        );
                        const delta = getStatistic(
                          stateData.districts[districtName],
                          'delta',
                          primaryStatistic
                        );
                        return (
                          <div key={districtName} className="district">
                            <h2>{formatNumber(total)}</h2>
                            <h5>{t(districtName)}</h5>
                            {primaryStatistic !== 'active' && (
                              <div className="delta">
                                <h6 className={primaryStatistic}>
                                  {delta > 0
                                    ? '\u2191' + formatNumber(delta)
                                    : ''}
                                </h6>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className="district-bar-right fadeInUp" style={trail[2]}>
                  {timeseries &&
                    (primaryStatistic === 'confirmed' ||
                      primaryStatistic === 'deceased') && (
                      <div className="happy-sign">
                        {Object.keys(timeseries[stateCode]?.dates || {})
                          .slice(-lookback)
                          .every(
                            (date) =>
                              getStatistic(
                                timeseries[stateCode].dates[date],
                                'delta',
                                primaryStatistic
                              ) === 0
                          ) && (
                          <div
                            className={`alert ${
                              primaryStatistic === 'confirmed' ? 'is-green' : ''
                            }`}
                          >
                            <SmileyIcon />
                            <div className="alert-right">
                              No new {primaryStatistic} cases in the past five
                              days
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  <DeltaBarGraph
                    timeseries={timeseries?.[stateCode]?.dates}
                    statistic={primaryStatistic}
                    {...{stateCode, lookback}}
                    forceRender={!!timeseriesResponseError}
                  />
                </div>
              </div>

              <div className="district-bar-bottom">
                {districts.length > 5 ? (
                  <button
                    className="button fadeInUp"
                    onClick={toggleShowAllDistricts}
                    style={trail[3]}
                  >
                    <span>
                      {t(showAllDistricts ? 'View less' : 'View all')}
                    </span>
                  </button>
                ) : (
                  <div style={{height: '3.75rem', flexBasis: '15%'}} />
                )}
              </div>
            </div>

            <Suspense fallback={<div />}>
              <TimeseriesExplorer
                {...{
                  stateCode,
                  timeseries,
                  regionHighlighted,
                  setRegionHighlighted,
                  noRegionHighlightedDistrictData,
                }}
                forceRender={!!timeseriesResponseError}
              />
              <div id="scatterplot-stats">
                <h1 lassName="text-center ">{t('Vaccination Coverage')}</h1>
              </div>
            </Suspense>
          </>
        </div>
      </div>
      {/* <div className="chartflex">
        <div className="flex1">&nbsp;</div> */}
      <div></div>
      {/* </div> */}
      <Footer />
    </>
  );
}

export default memo(State);
