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
    /*
     * The next block of code selects the id scatterplot-stats on the web page
     * and appends an svg object to it of the size
     * that we have set up with our width, height and margin’s.
     */
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

    const tooltip = d3.select(id).append('div').attr('class', 'tooltip');

    // function getColor(arg) {
    //   return getRandomColor()
    // }

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
      // const letters = '0123456789ABCDEF';
      // let color = '#';
      // for (let i = 0; i < 6; i++) {
      //   color += letters[Math.floor(Math.random() * 16)];
      // }
      return colorObj[str];
      // let hash = 0;
      // for (let i = 0; i < str.length; i++) {
      //   hash = str.charCodeAt(i) + ((hash << 5) - hash);
      // }
      // let colour = '#';
      // for (let i = 0; i < 3; i++) {
      //   const value = (hash >> (i * 8)) & 0xFF;
      //   colour += ('00' + value.toString(16)).substr(-2);
      // }
      // return colour;
    }

    /*
     * this function is like mouse over.
     * If we place the mouse over a circle the tooltip is going to show up.
     */
    function showToolTip(d, i) {
      tooltip.style({
        display: 'block',
        'min-height': '100px',
        width: '200px',
        padding: '5px',
        opacity: 1,
        'background-color': d.color,
      });
      // const circle = d3.event.target;
      // const tippadding = 5;
      const tipsize = {
        dx: parseInt(tooltip.style('width')),
        dy: parseInt(tooltip.style('height')),
      };
      if (id === '#scatterplotstate-stats') {
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
      } else if (id === '#scatterplottotal-stats') {
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
        .style('fill', 'red')
        .attr('transform', 'translate(' + (width/2) + ", 30)")
        .attr('text-anchor', 'middle')
        .text('Vaccine Dose 1 %');

      svg
        .append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + width + ', 0)')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr("y", 40)
        .attr("x", 0 - (height / 2))
        .attr('text-anchor', 'middle')
        .style("fill", "red")
        .text('Vaccine Dose 2 %');

      /*
       * we add the cyclists to our scatterplot
       * This block of code creates the cyclists (selectAll(".cyclist"))
       * and associates each of them with a data set (.data(data)).
       * We then append a circle
       * with values for x/y position and height/width as configured in our earlier code.
       * we parse the time and the place
       */
      const districts = svg
        .selectAll('.cyclist')
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'cyclist')
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
      scatter(stateDetails, '#scatterplotstate-stats');
      scatter(details, '#scatterplottotal-stats');
    }
  }, [data]);

  return (
    <div className="Home homegraph">
      <div className="home-left home-left--graphmargin">
        <div id="scatterplotstate-stats">
          <h1 className="text-center ">Vaccination Coverage (States)</h1>
        </div>
      </div>
      <div className="home-right home-right--graphmargin">
        <div id="scatterplottotal-stats">
          <h1 className="text-center ">Vaccination Coverage (Districts)</h1>
        </div>
      </div>
    </div>
  );
};

export default VaccinationScatterPlot;
