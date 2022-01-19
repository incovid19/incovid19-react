import {STATE_NAMES} from '../constants';

import {useEffect} from 'react';

const VaccinationScatterPlot = (props) => {
  const {data} = props;
  const scatter = (json, id) => {
    const margin = {top: 60, left: 35, bottom: 35, right: 50};
    const heightValue = 400;
    const widthValue = 800;
    const getCurrentDate = (lastUpdated, separator = ' ') => {
      const newDate = new Date(lastUpdated);

      const month = newDate.toLocaleString('default', {month: 'long'});
      const date = newDate.getDate();

      return `${date < 10 ? `0${date}` : `${date}`}${separator}${month}`;
    };

    const currentdate = getCurrentDate(json[0]?.Date ?? json[1]?.Date);

    d3.selectAll(id).selectAll('svg').remove();
    d3.selectAll(id).selectAll('#date').remove();
    d3.select(id)
      .append('div')
      .attr('id', 'date')
      .attr('class', 'graphtext')
      .html(`${currentdate}`);
    let svg = d3
      .select(id)
      .append('svg')
      .attr('viewBox', `0 0 ${widthValue} ${heightValue}`);

    const strokeWidth = 1.5;

    const width = widthValue - margin.left - margin.right - strokeWidth * 2;
    const height = heightValue - margin.top - margin.bottom;

    const y = d3.scale.linear().range([height, 0]);
    const x = d3.scale.linear().range([0, width]);

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
      .attr('fill', 'none')
      .attr('rx', 4)
      .attr('fill-opacity', 1);
    svg = svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    const tooltip = d3.select(id).append('div').attr('class', 'tooltip');

    function getRandomColor(str) {
      const colorObj = {
        AN: 'rgb(128,0,0)',
        AP: 'rgb(165,42,42)',
        AR: 'rgb(220,20,60)',
        AS: 'rgb(255,0,0)',
        BR: 'rgb(134,134,20)',
        CH: 'rgb(255,140,0)',
        CT: 'rgb(255,165,0)',
        DL: 'rgb(255,215,0)',
        DN: 'rgb(184,134,11)',
        GA: 'rgb(218,165,32)',
        GJ: 'rgb(189,183,107)',
        HP: 'rgb(240,230,140)',
        HR: 'rgb(154,205,50)',
        JH: 'rgb(85,107,47)',
        JK: 'rgb(124,252,0)',
        KA: 'rgb(152,251,152)',
        KL: 'rgb(143,188,143)',
        LA: 'rgb(47,79,79)',
        LD: 'rgb(0,139,139)',
        MH: 'rgb(0,255,255)',
        ML: 'rgb(70,130,180)',
        MN: 'rgb(0,191,255)',
        MP: 'rgb(30,144,255)',
        MZ: 'rgb(135,206,250)',
        NL: 'rgb(25,25,112)',
        OR: 'rgb(0,0,205)',
        PB: 'rgb(138,43,226)',
        PY: 'rgb(139,0,139)',
        RJ: 'rgb(186,85,211)',
        SK: 'rgba(238,130,238)',
        TG: 'rgb(199,21,133)',
        TN: 'rgb(139,69,19)',
        TR: 'rgb(210,105,30)',
        TT: 'rgb(255,228,181)',
        UP: 'rgb(218,112,214)',
        UT: 'rgb(128,128,128)',
        WB: 'rgb(255,218,185)',
      };

      return colorObj[str];
    }

    function showToolTip(d, i) {
      tooltip.style({
        display: 'block',
        'min-height': '100px',
        width: '200px',
        padding: '5px',
        opacity: 1,
        'background-color': d.color,
      });
      const tipsize = {
        dx: parseInt(tooltip.style('width')),
        dy: parseInt(tooltip.style('height')),
      };
      if (id === '.sc-plot-state') {
        tooltip
          .style({
            top: d3.event.pageY - tipsize.dy - 5 + 'px',
            left: d3.event.pageX - tipsize.dx + 100 + 'px',
          })
          .html(
            '<span><b>State: ' +
              STATE_NAMES[d.state] +
              '<br/>' +
              'Vaccine Dose 1: ' +
              d.Vaccine1 +
              '% <br/>' +
              'Vaccine Dose 2: ' +
              d.Vaccine2 +
              '%<br/>' +
              'Total Vaccinations: ' +
              d.Total
          );
      } else if (id === '.sc-plot-total') {
        tooltip
          .style({
            top: d3.event.pageY - tipsize.dy - 5 + 'px',
            left: d3.event.pageX - tipsize.dx + 100 + 'px',
          })
          .html(
            '<span><b>District: ' +
              d.district +
              '<br/>' +
              'State: ' +
              STATE_NAMES[d.state] +
              '<br/>' +
              'Vaccine Dose 1: ' +
              d.Vaccine1 +
              '% <br/>' +
              'Vaccine Dose 2: ' +
              d.Vaccine2 +
              '%<br/>' +
              'Total Vaccinations: ' +
              d.Total
          );
      }
    }

    function hideToolTip(d, i) {
      tooltip.style({
        display: 'none',
      });
    }
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
        .style('fill', 'red')
        .attr('transform', 'translate(' + width / 2 + ', 30)')
        .attr('text-anchor', 'middle')
        .text('Vaccine Dose 1 %');

      svg
        .append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + width + ', 0)')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 40)
        .attr('x', 0 - height / 2)
        .attr('text-anchor', 'middle')
        .style('fill', 'red')
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
        .attr('class', 'circlegraph')
        .attr('fill', (d) => {
          const color = getRandomColor(d.state);
          d.color = color;
          return color;
        })
        .on('mouseover', showToolTip)
        .on('mouseout', hideToolTip);
    }
  };

  useEffect(() => {
    const details = [];
    const stateDetails = [];
    if (data) {
      Object.keys(data).forEach((state) => {
        if (state) {
          const obj = {};
          if (
            data[state]?.meta?.population &&
            data[state]?.total?.vaccinated1 &&
            data[state]?.total?.vaccinated2
          ) {
            obj.state = state;
            obj.district = '';
            obj.Vaccine1 = (
              (data[state]?.total?.vaccinated1 / data[state]?.meta.population) *
              100
            ).toFixed(2);
            obj.Vaccine2 = (
              (data[state]?.total?.vaccinated2 / data[state]?.meta.population) *
              100
            ).toFixed(2);
            obj.Total =
              data[state]?.total?.vaccinated1 + data[state]?.total?.vaccinated2;
            obj.Date = data[state]?.meta?.date ?? '';
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
              stateDetails.push(obj);
            }
          }
        }
        Object.keys(data[state].districts).forEach((district) => {
          const obj = {};
          if (
            data[state]?.districts?.[district]?.meta.population &&
            data[state]?.districts?.[district]?.total?.vaccinated1 &&
            data[state]?.districts?.[district]?.total?.vaccinated2
          ) {
            obj.state = state;
            obj.district = district;
            obj.Vaccine1 = (
              (data[state]?.districts?.[district]?.total?.vaccinated1 /
                data[state]?.districts?.[district]?.meta.population) *
              100
            ).toFixed(2);
            obj.Vaccine2 = (
              (data[state]?.districts?.[district]?.total?.vaccinated2 /
                data[state]?.districts?.[district]?.meta.population) *
              100
            ).toFixed(2);
            obj.Total =
              data[state]?.districts?.[district]?.total?.vaccinated1 +
              data[state]?.districts?.[district]?.total?.vaccinated2;
            obj.Date = data[state]?.meta?.date ?? '';
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
        });
      });
      scatter(stateDetails, '.sc-plot-state');
      scatter(details, '.sc-plot-total');
    }
  }, [data]);

  return (
    <div className="Home homegraph">
      <div className="home-left home-left--graphmargin">
        <div className="scatterplot">
          <h1 className="text-center ">Vaccination Coverage (States)</h1>
          <div className="sc-plot sc-plot-state"></div>
        </div>
      </div>
      <div className="home-right home-right--graphmargin">
        <div className="scatterplot">
          <h1 className="text-center ">Vaccination Coverage (Districts)</h1>
          <div className="sc-plot sc-plot-total"></div>
        </div>
      </div>
    </div>
  );
};

export default VaccinationScatterPlot;
