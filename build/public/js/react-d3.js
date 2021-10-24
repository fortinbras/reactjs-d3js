(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.rd3 = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"/home/robson/projetos/rd3/docs/examples/main.js":[function(require,module,exports){
'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var React = window.React;
var ReactDOM = window.ReactDOM;
var d3 = window.d3;
var createReactClass = window.createReactClass;
// const hljs = require('highlight.js');
var rd3 = require('../../src');

var BarChart = rd3.BarChart;
var LineChart = rd3.LineChart;
var CandlestickChart = rd3.CandlestickChart;
var PieChart = rd3.PieChart;
var AreaChart = rd3.AreaChart;
var Treemap = rd3.Treemap;
var ScatterChart = rd3.ScatterChart;

// hljs.initHighlightingOnLoad();

var Demos = createReactClass({
  displayName: 'Demos',
  getInitialState: function getInitialState() {
    return {
      areaData: [],
      ohlcData: []
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    var parseDate = d3.timeFormat('%y-%b-%d').parse;

    /* This function is valid for this dataset only.
      You can provide a dataset already formated and remove this. */
    d3.json('data/stackedAreaData.json').then(function (res) {
      var data = [];
      res[0].values.forEach(function (num0, index) {
        var _data$push;

        var num1 = res[1].values[index];
        data.push((_data$push = {
          "date": new Date(num0[0])
        }, _defineProperty(_data$push, res[0].name, num0[1]), _defineProperty(_data$push, res[1].name, num1[1]), _data$push));
      });
      _this.setState({ areaData: data });
    });

    d3.tsv('data/AAPL_ohlc.tsv').then(function (data) {
      var series = { name: 'AAPL', values: [] };

      data.map(function (d) {
        d.date = new Date(+d.date);
        d.open = +d.open;
        d.high = +d.high;
        d.low = +d.low;
        d.close = +d.close;
        series.values.push({ x: d.date, open: d.open, high: d.high, low: d.low, close: d.close });
      });
      _this.setState({ ohlcData: [series] });
    });
  },
  render: function render() {
    var _React$createElement;

    var lineData = [{
      name: 'series1',
      values: [{ x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 }],
      strokeWidth: 3,
      strokeDashArray: '5,5'
    }, {
      name: 'series2',
      values: [{ x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 }]
    }, {
      name: 'series3',
      values: [{ x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 }]
    }];

    var barData = [{
      name: 'Series A',
      values: [{ x: 1, y: 91 }, { x: 2, y: 290 }, { x: 3, y: -25 }]
    }, {
      name: 'Series B',
      values: [{ x: 1, y: 9 }, { x: 2, y: 49 }, { x: 3, y: -20 }]
    }, {
      name: 'Series C',
      values: [{ x: 1, y: 14 }, { x: 2, y: 77 }, { x: 3, y: -70 }]
    }];

    var pieData = [{ label: 'Margarita', value: 20.0 }, { label: 'John', value: 55.0 }, { label: 'Tim', value: 25.0 }];

    // 2014 Most Populous Countries
    // http://www.prb.org/pdf14/2014-world-population-data-sheet_eng.pdf
    var treemapData = [{ label: 'Origin', parent: '', value: '' }, { label: 'China', parent: 'Origin', value: 1364 }, { label: 'India', parent: 'Origin', value: 1296 }, { label: 'United States', parent: 'Origin', value: 318 }, { label: 'Indonesia', parent: 'Origin', value: 251 }, { label: 'Brazil', parent: 'Origin', value: 203 }];

    var scatterData = [{
      name: 'series1',
      values: [{ x: 0, y: 20 }, { x: 5, y: 7 }, { x: 8, y: 3 }, { x: 13, y: 33 }, { x: 12, y: 10 }, { x: 13, y: 15 }, { x: 24, y: 8 }, { x: 25, y: 15 }, { x: 16, y: 10 }, { x: 16, y: 10 }, { x: 19, y: 30 }, { x: 14, y: 30 }]
    }, {
      name: 'series2',
      values: [{ x: 40, y: 30 }, { x: 35, y: 37 }, { x: 48, y: 37 }, { x: 38, y: 33 }, { x: 52, y: 60 }, { x: 51, y: 55 }, { x: 54, y: 48 }, { x: 45, y: 45 }, { x: 46, y: 50 }, { x: 66, y: 50 }, { x: 39, y: 36 }, { x: 54, y: 30 }]
    }, {
      name: 'series3',
      values: [{ x: 80, y: 78 }, { x: 71, y: 58 }, { x: 78, y: 68 }, { x: 81, y: 47 }, { x: 72, y: 70 }, { x: 70, y: 88 }, { x: 81, y: 90 }, { x: 92, y: 80 }, { x: 81, y: 72 }, { x: 99, y: 95 }, { x: 67, y: 81 }, { x: 96, y: 78 }]
    }];

    return React.createElement('div', { className: 'container' }, React.createElement('a', { href: 'https://github.com/fortinbras/reactjs-d3js' }, React.createElement('img', { style: { position: 'absolute', top: 0, right: 0, border: 0 }, src: 'https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67', alt: 'Fork me on GitHub', 'data-canonical-src': 'https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png' })), React.createElement('div', { className: 'row' }, React.createElement('h3', { className: 'page-header' }, 'reactjs-d3js: Multiple series charts')), React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-md-6' }, React.createElement(LineChart, {
      legend: true,
      data: lineData,
      width: '100%',
      height: 400,
      viewBoxObject: {
        x: 0,
        y: 0,
        width: 500,
        height: 400
      },
      title: 'Line Chart',
      yAxisLabel: 'Altitude',
      xAxisLabel: 'Elapsed Time (sec)',
      domain: { x: [,], y: [,] },
      gridHorizontal: true
    })), React.createElement('div', { className: 'col-md-6' }, React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'js' }, 'var lineData = [\n  {\n    name: "series1",\n    values: [ { x: 0, y: 20 }, ..., { x: 24, y: 10 } ],\n    strokeWidth: 3,\n    strokeDashArray: "5,5",\n  },\n  ....\n  {\n    name: "series2",\n    values: [ { x: 70, y: 82 }, ..., { x: 76, y: 82 } ]\n  }\n];')), React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'html' }, '<LineChart\n  legend={true}\n  data={lineData}\n  width=\'100%\'\n  height={400}\n  viewBoxObject={{\n    x: 0,\n    y: 0,\n    width: 500,\n    height: 400\n  }}\n  title="Line Chart"\n  yAxisLabel="Altitude"\n  xAxisLabel="Elapsed Time (sec)"\n  domain={{x: [,10], y: [-10,]}}\n  gridHorizontal={true}\n/>')))), React.createElement('div', { className: 'row' }, React.createElement('hr', null)), React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-md-6' }, React.createElement(ScatterChart, {
      data: scatterData,
      width: '100%',
      height: 400,
      viewBoxObject: {
        x: 0,
        y: 0,
        width: 500,
        height: 400
      },
      title: 'Scatter Chart',
      domain: { x: [,], y: [,] }
    })), React.createElement('div', { className: 'col-md-6' }, React.createElement('pre', { ref: 'block' }, '__proto__: Object', React.createElement('code', { className: 'js' }, 'var scatterData = [\n  {\n    name: "series1",\n    values: [ { x: 0, y: 20 }, ..__proto__: Object\n., { x: 24, y: 10 } ]\n  },\n  ....\n  {\n    name: "series3",\n    values: [ { x: 70, y: 82 }, ..., { x: 76, y: 82 } ]\n  }\n];')), React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'html' }, '<ScatterChart\n  data={scatterData}\n  width={500}\n  height={400}\n  domain={{y: [-15,], y: [-15,]}}\n  title="Scatter Chart"\n/>')))), React.createElement('div', { className: 'row' }, React.createElement('hr', null)), React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-md-6' }, React.createElement(AreaChart, {
      data: this.state.areaData,
      width: '100%',
      viewBoxObject: {
        x: 0,
        y: 0,
        height: 400,
        width: 500
      },
      height: 400,
      title: 'Area Chart',
      xAxisTickInterval: { unit: 'year', interval: 2 },
      xAxisLabel: 'Year',
      yAxisLabel: 'Share Price',
      xAccessor: function xAccessor(d) {
        return new Date(d[0]);
      },
      yAccessor: function yAccessor(d) {
        return d[1];
      }
      // domain={{ y: [, 60] }}
      , gridHorizontal: true,
      gridVertical: true,
      gridHorizontalStrokeDash: '',
      gridVerticalStrokeDash: ''
    })), React.createElement('div', { className: 'col-md-6' }, React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'js' }, 'var areaData = [\n  {\n    name: "series1",\n    values: [ { x: [object Date], y: 20.5 }, ..., { x: [object Date], y: 4.2 } ]\n  },\n  ...\n  {\n    name: "series2",\n    values: [ { x: [object Date], y: 3.2 }, ..., { x: [object Date], y: 11.2 } ]\n  }\n];')), React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'html' }, '<AreaChart\n  data={areaData}\n  width="100%"\n  height={300}\n  viewBoxObject={{\n    x: 0,\n    y: 0,\n    height: 400,\n    width: 500\n  }}\n  domain={{y: [,60]}}\n  xAxisTickInterval={{unit: \'year\', interval: 2}}\n  title="Area Chart"\n/>')))), React.createElement('div', { className: 'row' }, React.createElement('hr', null)), React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-md-6' }, React.createElement(CandlestickChart, {
      data: this.state.ohlcData,
      width: '100%',
      height: 400,
      viewBoxObject: {
        x: 0,
        y: 0,
        width: 500,
        height: 400
      },
      yAxisOffset: -10,
      title: 'Candlestick Chart',

      gridHorizontal: true,
      gridVertical: true,
      gridHorizontalStrokeDash: true,
      gridVerticalStrokeDash: ''
    })), React.createElement('div', { className: 'col-md-6' }, React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'js' }, 'var ohlcData = [\n  {\n    name: "AAPL",\n    values: [ { x: [object Date], open: 451.69, high: 456.23, low: 435, close: 439.88 },\n              { x: [object Date], open: 437.82, high: 453.21, low: 435.86 , close: 449.83 },\n              ...\n            ]\n  }\n];')), React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'html' }, '<CandlestickChart\n  data={ohlcData}\n  width={500}\n  height={400}\n  xAxisTickInterval={{unit: \'month\', interval: 1}}\n  yAxisOffset={-10}\n  title="Candlestick Chart"\n  domain={{y:[400, 500]}}\n/>')))), React.createElement('div', { className: 'row' }, React.createElement('hr', null)), React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-md-6' }, React.createElement(BarChart, (_React$createElement = {
      data: barData,
      grouped: true,
      width: '100%',
      height: 400,
      viewBoxObject: {
        x: 0,
        y: 0,
        width: 500,
        height: 400
      },
      title: 'Scatter Chart',
      domain: { x: [,], y: [,] }
    }, _defineProperty(_React$createElement, 'title', 'Bar Chart'), _defineProperty(_React$createElement, 'yAxisLabel', 'Label'), _defineProperty(_React$createElement, 'xAxisLabel', 'Value'), _defineProperty(_React$createElement, 'gridHorizontal', true), _defineProperty(_React$createElement, 'gridVertical', true), _React$createElement))), React.createElement('div', { className: 'col-md-6' }, React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'js' }, 'var barData = [\n  {\n    "name": "Series A",\n    "values": [\n      { "x": 1, "y":  91},\n      ...\n  },\n  {\n    "name": "Series B",\n     "values": [ ... ]\n  }\n  ...\n];')), React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'html' }, '<BarChart\n  data={barData}\n  width={500}\n  height={200}\n  fill={\'#3182bd\'}\n  title=\'Bar Chart\'\n  yAxisLabel=\'Label\'\n  xAxisLabel=\'Value\'\n/>'))), React.createElement('div', { className: 'row' }, React.createElement('h3', { className: 'page-header' }, 'reactjs-d3js: Single series charts'))), React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-md-6' }, React.createElement(PieChart, {
      data: pieData,
      width: 450,
      height: 400,
      radius: 110,
      innerRadius: 20,
      sectorBorderColor: 'white',
      title: 'Pie Chart' })), React.createElement('div', { className: 'col-md-6' }, React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'js' }, 'var pieData = [\n  {label: \'Margarita\', value: 20.0},\n  {label: \'John\', value: 55.0},\n  {label: \'Tim\', value: 25.0 }\n];')), React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'html' }, '<PieChart\n  data={pieData}\n  width={400}\n  height={400}\n  radius={100}\n  innerRadius={20}\n  sectorBorderColor="white"\n  title="Pie Chart"\n/>')))), React.createElement('div', { className: 'row' }, React.createElement('hr', null)), React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-md-6' }, React.createElement(Treemap, {
      width: 450,
      height: 250,
      title: 'Treemap',
      data: treemapData,
      textColor: '#484848',
      fontColor: '12px',
      hoverAnimation: false
    })), React.createElement('div', { className: 'col-md-6' }, React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'js' }, '//2014 World Most Populous Countries (millions)\n//http://www.prb.org/pdf14/2014-world-population-data-sheet_eng.pdf\nvar treemapData = [\n  {label: "China", value: 1364},\n  {label: "India", value: 1296},\n...\n  {label: "Brazil", value: 203}\n];')), React.createElement('pre', { ref: 'block' }, React.createElement('code', { className: 'html' }, '<Treemap\n  data={treemapData}\n  width={450}\n  height={250}\n  textColor="#484848"\n  fontSize="12px"\n  title="Treemap"\n  hoverAnimation={false}\n/>')))));
  }
});

ReactDOM.render(React.createElement(Demos, null), document.getElementById('app'));

},{"../../src":"/home/robson/projetos/rd3/src/index.js"}],"/home/robson/projetos/rd3/src/areachart/Area.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({

  displayName: 'Area',

  propTypes: {
    path: PropTypes.string,
    fill: PropTypes.string,
    handleMouseOver: PropTypes.func,
    handleMouseLeave: PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      fill: '#3182bd'
    };
  },
  render: function render() {
    return React.createElement('path', {
      className: 'rd3-areachart-area',
      d: this.props.path,
      fill: this.props.fill,
      onMouseOver: this.props.handleMouseOver,
      onMouseLeave: this.props.handleMouseLeave
    });
  }
});

},{}],"/home/robson/projetos/rd3/src/areachart/AreaChart.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var d3 = window.d3;
var DataSeries = require('./DataSeries');

var _require = require('../common'),
    Chart = _require.Chart,
    XAxis = _require.XAxis,
    YAxis = _require.YAxis,
    XGrid = _require.XGrid,
    YGrid = _require.YGrid;

var _require2 = require('../mixins'),
    CartesianChartPropsMixin = _require2.CartesianChartPropsMixin,
    DefaultAccessorsMixin = _require2.DefaultAccessorsMixin,
    ViewBoxMixin = _require2.ViewBoxMixin;

module.exports = createReactClass({

  displayName: 'AreaChart',

  propTypes: {
    margins: PropTypes.object,
    interpolate: PropTypes.bool,
    interpolationType: PropTypes.string,
    hoverAnimation: PropTypes.bool,
    data: PropTypes.array.isRequired
  },

  mixins: [CartesianChartPropsMixin, DefaultAccessorsMixin, ViewBoxMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      colors: d3.scaleOrdinal(d3.schemeBlues[3].reverse()),
      // colors: d3.scaleOrdinal(d3.schemePastel2),

      margins: { top: 10, right: 20, bottom: 40, left: 45 },
      yAxisTickCount: 4,
      interpolate: false,
      interpolationType: null,
      className: 'rd3-areachart',
      hoverAnimation: true,
      data: []
    };
  },
  render: function render() {
    var props = this.props;
    var data = props.data;
    var interpolationType = props.interpolationType || (props.interpolate ? 'cardinal' : 'linear');

    var _getDimensions = this.getDimensions(),
        innerWidth = _getDimensions.innerWidth,
        innerHeight = _getDimensions.innerHeight,
        trans = _getDimensions.trans,
        svgMargins = _getDimensions.svgMargins;

    var yOrient = this.getYOrient();

    if (!Array.isArray(data)) {
      data = [data];
    }
    if (this.props.data && this.props.data.length < 1) {
      return null;
    }

    var yScale = d3.scaleLinear().range([innerHeight, 0]);

    var xValues = [];
    var yValues = [];
    // const seriesNames = [];
    // const yMaxValues = [];
    var domain = props.domain || {};
    var xDomain = domain.x || [];
    var yDomain = domain.y || [];
    var seriesNames = Object.keys(data[0]).filter(function (f) {
      return f !== 'date';
    }) || [];

    var yMaxValues = d3.sum(seriesNames.map(function (n) {
      return d3.max(data.map(function (d) {
        return d[n];
      }));
    }));

    /* TODO - generalize. Only acceptint field date for x axis*/
    data.map(function (d) {
      xValues.push(d.date);
    });

    var xScale = void 0;
    if (xValues.length > 0 && Object.prototype.toString.call(xValues[0]) === '[object Date]' && props.xAxisTickInterval) {
      xScale = d3.scaleTime().range([0, innerWidth]);
    } else {
      xScale = d3.scaleLinear().range([0, innerWidth]);
    }

    var xdomain = d3.extent(xValues);
    if (xDomain[0] !== undefined && xDomain[0] !== null) xdomain[0] = xDomain[0];
    if (xDomain[1] !== undefined && xDomain[1] !== null) xdomain[1] = xDomain[1];
    xScale.domain(xdomain);
    var ydomain = [0, yMaxValues];
    if (yDomain[0] !== undefined && yDomain[0] !== null) ydomain[0] = yDomain[0];
    if (yDomain[1] !== undefined && yDomain[1] !== null) ydomain[1] = yDomain[1];

    yScale.domain(ydomain);

    var colorsDomain = Array.from(Array(seriesNames.length).keys());
    props.colors.domain(colorsDomain);

    var stack = d3.stack();
    stack.keys(seriesNames);

    var layers = stack(data);
    var dataSeries = layers.map(function (d, idx) {
      return React.createElement(DataSeries, {
        key: idx,
        fill: props.colors(props.colorAccessor(d, idx))
        // seriesName={d.name}
        , index: idx,
        xScale: xScale,
        yScale: yScale,
        data: d,
        xAccessor: props.xAccessor,
        yAccessor: props.yAccessor,
        interpolationType: interpolationType,
        hoverAnimation: props.hoverAnimation
      });
    });

    return React.createElement(Chart, {
      viewBox: this.getViewBox(),
      legend: props.legend,
      data: data,
      margins: props.margins,
      width: props.width,
      height: props.height,
      title: props.title
    }, React.createElement('g', { transform: trans, className: props.className }, React.createElement(XGrid, {
      xAxisClassName: 'rd3-areachart-xaxis',
      xScale: xScale,
      xAxisTickValues: props.xAxisTickValues,
      xAxisTickInterval: props.xAxisTickInterval,
      xAxisTickCount: props.xAxisTickCount,
      xAxisLabel: props.xAxisLabel,
      xAxisLabelOffset: props.xAxisLabelOffset,
      tickFormatting: props.xAxisFormatter,
      tickStroke: props.xAxisTickStroke,
      tickTextStroke: props.xAxisTickTextStroke,
      xOrient: props.xOrient,
      yOrient: yOrient,
      margins: svgMargins,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      gridVertical: props.gridVertical,
      gridVerticalStroke: props.gridVerticalStroke,
      gridVerticalStrokeWidth: props.gridVerticalStrokeWidth,
      gridVerticalStrokeDash: props.gridVerticalStrokeDash
    }), React.createElement(YGrid, {
      yAxisClassName: 'rd3-areachart-yaxis',
      yScale: yScale,
      yAxisTickValues: props.yAxisTickValues,
      yAxisTickInterval: props.yAxisTickInterval,
      yAxisTickCount: props.yAxisTickCount,
      yAxisLabel: props.yAxisLabel,
      yAxisLabelOffset: props.yAxisLabelOffset,
      tickFormatting: props.yAxisFormatter,
      tickStroke: props.yAxisTickStroke,
      tickTextStroke: props.yAxisTickTextStroke,
      xOrient: props.xOrient,
      yOrient: yOrient,
      margins: svgMargins,
      width: innerWidth,
      height: props.height,
      horizontalChart: props.horizontal,
      gridHorizontal: props.gridHorizontal,
      gridHorizontalStroke: props.gridHorizontalStroke,
      gridHorizontalStrokeWidth: props.gridHorizontalStrokeWidth,
      gridHorizontalStrokeDash: props.gridHorizontalStrokeDash
    }), dataSeries, React.createElement(XAxis, {
      xAxisClassName: 'rd3-areachart-xaxis',
      xScale: xScale,
      xAxisTickValues: props.xAxisTickValues,
      xAxisTickInterval: props.xAxisTickInterval,
      xAxisTickCount: props.xAxisTickCount,
      xAxisLabel: props.xAxisLabel,
      xAxisLabelOffset: props.xAxisLabelOffset,
      tickFormatting: props.xAxisFormatter,
      tickStroke: props.xAxisTickStroke,
      tickTextStroke: props.xAxisTickTextStroke,
      xOrient: props.xOrient,
      yOrient: yOrient,
      margins: svgMargins,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      gridVertical: props.gridVertical,
      gridVerticalStroke: props.gridVerticalStroke,
      gridVerticalStrokeWidth: props.gridVerticalStrokeWidth,
      gridVerticalStrokeDash: props.gridVerticalStrokeDash
    }), React.createElement(YAxis, {
      yAxisClassName: 'rd3-areachart-yaxis',
      yScale: yScale,
      yAxisTickValues: props.yAxisTickValues,
      yAxisTickInterval: props.yAxisTickInterval,
      yAxisTickCount: props.yAxisTickCount,
      yAxisLabel: props.yAxisLabel,
      yAxisLabelOffset: props.yAxisLabelOffset,
      tickFormatting: props.yAxisFormatter,
      tickStroke: props.yAxisTickStroke,
      tickTextStroke: props.yAxisTickTextStroke,
      xOrient: props.xOrient,
      yOrient: yOrient,
      margins: svgMargins,
      width: innerWidth,
      height: props.height,
      horizontalChart: props.horizontal,
      gridHorizontal: props.gridHorizontal,
      gridHorizontalStroke: props.gridHorizontalStroke,
      gridHorizontalStrokeWidth: props.gridHorizontalStrokeWidth,
      gridHorizontalStrokeDash: props.gridHorizontalStrokeDash
    })));
  }
});

},{"../common":"/home/robson/projetos/rd3/src/common/index.js","../mixins":"/home/robson/projetos/rd3/src/mixins/index.js","./DataSeries":"/home/robson/projetos/rd3/src/areachart/DataSeries.jsx"}],"/home/robson/projetos/rd3/src/areachart/AreaContainer.jsx":[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var shade = require('../utils').shade;
var Area = require('./Area');

module.exports = createReactClass({

  displayName: 'AreaContainer',

  propTypes: {
    fill: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      fill: '#3182bd'
    };
  },
  getInitialState: function getInitialState() {
    return {
      fill: this.props.fill
    };
  },
  _animateArea: function _animateArea() {
    this.setState({
      fill: shade(this.props.fill, 0.02)
    });
  },
  _restoreArea: function _restoreArea() {
    this.setState({
      fill: this.props.fill
    });
  },
  render: function render() {
    var props = this.props;

    // animation controller
    var handleMouseOver = void 0;
    var handleMouseLeave = void 0;
    if (props.hoverAnimation) {
      handleMouseOver = this._animateArea;
      handleMouseLeave = this._restoreArea;
    } else {
      handleMouseOver = handleMouseLeave = null;
    }

    return React.createElement(Area, _extends({
      handleMouseOver: handleMouseOver,
      handleMouseLeave: handleMouseLeave
    }, props, {
      fill: this.state.fill
    }));
  }
});

},{"../utils":"/home/robson/projetos/rd3/src/utils/index.js","./Area":"/home/robson/projetos/rd3/src/areachart/Area.jsx"}],"/home/robson/projetos/rd3/src/areachart/DataSeries.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var d3 = window.d3;
var AreaContainer = require('./AreaContainer');

module.exports = createReactClass({

  displayName: 'DataSeries',

  propTypes: {
    fill: PropTypes.string,
    interpolationType: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      interpolationType: 'linear'
    };
  },
  render: function render() {
    var props = this.props;

    var area = d3.area().x(function (d) {
      return props.xScale(d.data.date);
    }).y0(function (d) {
      return props.yScale(d[0]);
    }).y1(function (d) {
      return props.yScale(d[1]);
    }).curve(d3.curveCatmullRom.alpha(0.5));

    var path = area(props.data);

    return React.createElement(AreaContainer, {
      fill: props.fill,
      hoverAnimation: props.hoverAnimation,
      path: path
    });
  }
});

},{"./AreaContainer":"/home/robson/projetos/rd3/src/areachart/AreaContainer.jsx"}],"/home/robson/projetos/rd3/src/areachart/index.js":[function(require,module,exports){
'use strict';

exports.AreaChart = require('./AreaChart');

},{"./AreaChart":"/home/robson/projetos/rd3/src/areachart/AreaChart.jsx"}],"/home/robson/projetos/rd3/src/barchart/Bar.jsx":[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({
  displayName: 'exports',

  propTypes: {
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    className: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      offset: 0,
      className: 'rd3-barchart-bar'
    };
  },
  render: function render() {
    return React.createElement('rect', _extends({
      className: 'rd3-barchart-bar'
    }, this.props, {
      fill: this.props.fill
    }));
  }
});

},{}],"/home/robson/projetos/rd3/src/barchart/BarChart.jsx":[function(require,module,exports){
'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var d3 = window.d3;
var DataSeries = require('./DataSeries');

var _require = require('../common'),
    Chart = _require.Chart,
    XAxis = _require.XAxis,
    XGrid = _require.XGrid,
    YGrid = _require.YGrid,
    YAxis = _require.YAxis,
    Tooltip = _require.Tooltip;

var _require2 = require('../mixins'),
    CartesianChartPropsMixin = _require2.CartesianChartPropsMixin,
    DefaultAccessorsMixin = _require2.DefaultAccessorsMixin,
    ViewBoxMixin = _require2.ViewBoxMixin,
    TooltipMixin = _require2.TooltipMixin;

module.exports = createReactClass({

  displayName: 'BarChart',

  propTypes: {
    chartClassName: PropTypes.string,
    data: PropTypes.array.isRequired,
    hoverAnimation: PropTypes.bool,
    margins: PropTypes.object,
    rangeRoundBandsPadding: PropTypes.number,
    // https://github.com/mbostock/d3/wiki/Stack-Layout#offset
    stackOffset: PropTypes.oneOf(['silhouette', 'expand', 'wigget', 'zero']),
    grouped: PropTypes.bool,
    valuesAccessor: PropTypes.func,
    xAccessorBar: PropTypes.func,
    yAccessorBar: PropTypes.func,
    y0Accessor: PropTypes.func,
    title: PropTypes.string,
    xAxisClassName: PropTypes.string,
    yAxisClassName: PropTypes.string,
    yAxisTickCount: PropTypes.number
  },

  mixins: [CartesianChartPropsMixin, DefaultAccessorsMixin, ViewBoxMixin, TooltipMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      chartClassName: 'rd3-barchart',
      colors: d3.scaleOrdinal(d3.schemeGnBu[9].reverse()),
      hoverAnimation: true,
      margins: { top: 10, right: 20, bottom: 40, left: 45 },
      rangeRoundBandsPadding: 0.25,
      stackOffset: 'zero',
      grouped: false,
      valuesAccessor: function valuesAccessor(d) {
        return d;
      },
      y0Accessor: function y0Accessor(d) {
        return d[0];
      },
      xAxisClassName: 'rd3-barchart-xaxis',
      yAxisClassName: 'rd3-barchart-yaxis',
      yAxisTickCount: 4
    };
  },
  _getLabels: function _getLabels(firstSeries) {
    // we only need first series to get all the labels
    var _props = this.props,
        valuesAccessor = _props.valuesAccessor,
        xAccessorBar = _props.xAccessorBar;

    return valuesAccessor(firstSeries).map(xAccessorBar);
  },
  _stack: function _stack(seriesNames) {
    // Only support columns with all positive or all negative values
    // https://github.com/mbostock/d3/issues/2265
    var _props2 = this.props,
        stackOffset = _props2.stackOffset,
        xAccessorBar = _props2.xAccessorBar,
        yAccessorBar = _props2.yAccessorBar,
        valuesAccessor = _props2.valuesAccessor;

    return d3.stack().keys(seriesNames).order(d3.stackOrderNone).offset(d3.stackOffsetNone);
  },
  render: function render() {
    var props = this.props;
    var yOrient = this.getYOrient();

    var domain = props.domain || {};

    if (props.data.length === 0) {
      return null;
    }

    /*
    mudar a orientacao do array pq vem errado
    https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
    Para chegar nisso
    https://github.com/d3/d3-shape/blob/v3.0.1/README.md#stack
    Isso funciona:
    */

    var _array = props.data;
    var data = [];

    _array.map(function (elem, idxE) {
      elem.values.map(function (v, idxV) {
        if (typeof data[idxV] === 'undefined') {
          data[idxV] = _defineProperty({ 'x': v.x }, elem['name'], v.y);
        } else {
          data[idxV][[elem['name']]] = v.y;
        }
      });
    });
    var series = props.data.map(function (item) {
      return item.name;
    });
    var _data = this._stack(series)(data);

    var _getDimensions = this.getDimensions(),
        innerHeight = _getDimensions.innerHeight,
        innerWidth = _getDimensions.innerWidth,
        trans = _getDimensions.trans,
        svgMargins = _getDimensions.svgMargins;

    var xScale = d3.scaleBand().domain(data.map(function (d) {
      return d.x;
    })).paddingInner(0.1).paddingOuter(0.1).range([0, innerWidth]);

    var minYDomain = Math.min(0, d3.min(_data, function (d) {
      return d[1];
    }));
    var maxYDomain = d3.max(_data, function (d) {
      return d[1];
    });
    var yDomain = [d3.min(_data, function (d) {
      return d3.min(d, function (d) {
        return d[1];
      });
    }), d3.max(_data, function (d) {
      return d3.max(d, function (d) {
        return d[1];
      });
    })];
    var yScale = d3.scaleLinear().range([innerHeight, 0]).domain(yDomain);

    return React.createElement('span', null, React.createElement(Chart, {
      viewBox: this.getViewBox(),
      legend: props.legend,
      data: props.data,
      margins: props.margins,
      colors: props.colors,
      colorAccessor: props.colorAccessor,
      width: props.width,
      height: props.height,
      title: props.title,
      shouldUpdate: !this.state.changeState
    }, React.createElement('g', { transform: trans, className: props.chartClassName }, React.createElement(XGrid, {
      xAxisClassName: props.xAxisClassName,
      xAxisTickValues: props.xAxisTickValues,
      xAxisLabel: props.xAxisLabel,
      xAxisLabelOffset: props.xAxisLabelOffset,
      xScale: xScale,
      margins: svgMargins,
      tickFormatting: props.xAxisFormatter,
      tickStroke: props.yAxisTickStroke,
      tickTextStroke: props.yAxisTickTextStroke,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      xOrient: props.xOrient,
      yOrient: yOrient,
      gridVertical: props.gridVertical,
      gridVerticalStroke: props.gridVerticalStroke,
      gridVerticalStrokeWidth: props.gridVerticalStrokeWidth,
      gridVerticalStrokeDash: props.gridVerticalStrokeDash
    }), React.createElement(YGrid, {
      yAxisClassName: props.yAxisClassName,
      yAxisTickValues: props.yAxisTickValues,
      yAxisLabel: props.yAxisLabel,
      yAxisLabelOffset: props.yAxisLabelOffset,
      yScale: yScale,
      margins: svgMargins,
      yAxisTickCount: props.yAxisTickCount,
      tickFormatting: props.yAxisFormatter,
      tickStroke: props.xAxisTickStroke,
      tickTextStroke: props.xAxisTickTextStroke,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      xOrient: props.xOrient,
      yOrient: yOrient,
      gridHorizontal: props.gridHorizontal,
      gridHorizontalStroke: props.gridHorizontalStroke,
      gridHorizontalStrokeWidth: props.gridHorizontalStrokeWidth,
      gridHorizontalStrokeDash: props.gridHorizontalStrokeDash
    }), React.createElement(DataSeries, {
      yScale: yScale,
      xScale: xScale,
      margins: svgMargins,
      _data: _data,
      series: series,
      width: innerWidth,
      height: innerHeight,
      grouped: props.grouped,
      colors: props.colors,
      colorAccessor: props.colorAccessor,
      hoverAnimation: props.hoverAnimation,
      valuesAccessor: props.valuesAccessor,
      xAccessorBar: props.xAccessorBar,
      yAccessorBar: props.yAccessorBar,
      y0Accessor: props.y0Accessor,
      onMouseOver: this.onMouseOver,
      onMouseLeave: this.onMouseLeave
    }), React.createElement(YAxis, {
      yAxisClassName: props.yAxisClassName,
      yAxisTickValues: props.yAxisTickValues,
      yAxisLabel: props.yAxisLabel,
      yAxisLabelOffset: props.yAxisLabelOffset,
      yScale: yScale,
      margins: svgMargins,
      yAxisTickCount: props.yAxisTickCount,
      tickFormatting: props.yAxisFormatter,
      tickStroke: props.xAxisTickStroke,
      tickTextStroke: props.xAxisTickTextStroke,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      xOrient: props.xOrient,
      yOrient: yOrient,
      gridHorizontal: props.gridHorizontal,
      gridHorizontalStroke: props.gridHorizontalStroke,
      gridHorizontalStrokeWidth: props.gridHorizontalStrokeWidth,
      gridHorizontalStrokeDash: props.gridHorizontalStrokeDash
    }), React.createElement(XAxis, {
      xAxisClassName: props.xAxisClassName,
      xAxisTickValues: props.xAxisTickValues,
      xAxisLabel: props.xAxisLabel,
      xAxisLabelOffset: props.xAxisLabelOffset,
      xScale: xScale,
      margins: svgMargins,
      tickFormatting: props.xAxisFormatter,
      tickStroke: props.yAxisTickStroke,
      tickTextStroke: props.yAxisTickTextStroke,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      xOrient: props.xOrient,
      yOrient: yOrient,
      gridVertical: props.gridVertical,
      gridVerticalStroke: props.gridVerticalStroke,
      gridVerticalStrokeWidth: props.gridVerticalStrokeWidth,
      gridVerticalStrokeDash: props.gridVerticalStrokeDash
    }))), props.showTooltip ? React.createElement(Tooltip, this.state.tooltip) : null);
  }
});

},{"../common":"/home/robson/projetos/rd3/src/common/index.js","../mixins":"/home/robson/projetos/rd3/src/mixins/index.js","./DataSeries":"/home/robson/projetos/rd3/src/barchart/DataSeries.jsx"}],"/home/robson/projetos/rd3/src/barchart/BarContainer.jsx":[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var _require = window.ReactDOM,
    findDOMNode = _require.findDOMNode;

var Bar = require('./Bar');
var shade = require('../utils').shade;

module.exports = createReactClass({
  displayName: 'exports',

  propTypes: {
    fill: PropTypes.string,
    onMouseOver: PropTypes.func,
    onMouseLeave: PropTypes.func
    // dataPoint: PropTypes.any, // TODO: prop types?
  },

  getDefaultProps: function getDefaultProps() {
    return {
      fill: '#000000'
    };
  },
  getInitialState: function getInitialState() {
    return {
      // fill is named as fill instead of initialFill to avoid
      // confusion when passing down props from top parent
      fill: this.props.fill
    };
  },
  _animateBar: function _animateBar() {
    var rect = findDOMNode(this).getBoundingClientRect();
    this.props.onMouseOver.call(this, rect.right, rect.top, this.props.datapoint);
    this.setState({
      fill: shade(this.props.fill, 0.2)
    });
  },
  _restoreBar: function _restoreBar() {
    this.props.onMouseLeave.call(this);
    this.setState({
      fill: this.props.fill
    });
  },
  render: function render() {
    var props = this.props;

    // animation controller
    var handleMouseOver = void 0;
    var handleMouseLeave = void 0;
    if (props.hoverAnimation) {
      handleMouseOver = this._animateArea;
      handleMouseLeave = this._restoreArea;
    } else {
      handleMouseOver = handleMouseLeave = null;
    }

    return React.createElement(Bar, _extends({}, props, {
      fill: this.state.fill
      // onMouseOver={handleMouseOver}
      // onMouseLeave={handleMouseLeave}


      , onMouseOver: props.hoverAnimation ? this._animateBar : null,
      onMouseLeave: props.hoverAnimation ? this._restoreBar : null
    }));
  }
});

},{"../utils":"/home/robson/projetos/rd3/src/utils/index.js","./Bar":"/home/robson/projetos/rd3/src/barchart/Bar.jsx"}],"/home/robson/projetos/rd3/src/barchart/DataSeries.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var BarContainer = require('./BarContainer');

module.exports = createReactClass({

  displayName: 'DataSeries',

  propTypes: {
    _data: PropTypes.array,
    series: PropTypes.array,
    grouped: PropTypes.bool,
    colors: PropTypes.func,
    colorAccessor: PropTypes.func,
    height: PropTypes.number,
    width: PropTypes.number,
    valuesAccessor: PropTypes.func,
    xAccessorBar: PropTypes.func,
    yAccessorBar: PropTypes.func,
    y0Accessor: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseLeave: PropTypes.func,
    hoverAnimation: PropTypes.bool, // TODO: prop types?
    xScale: PropTypes.any,
    yScale: PropTypes.any
  },

  _renderBarSeries: function _renderBarSeries() {
    var _this = this;

    var _props = this.props,
        _data = _props._data,
        valuesAccessor = _props.valuesAccessor;

    return _data.map(function (layer, seriesIdx) {
      return valuesAccessor(layer).map(function (segment) {
        return _this._renderBarContainer(segment, seriesIdx);
      });
    });
  },
  _renderBarContainer: function _renderBarContainer(segment, seriesIdx) {
    var _props2 = this.props,
        colors = _props2.colors,
        colorAccessor = _props2.colorAccessor,
        grouped = _props2.grouped,
        series = _props2.series,
        xScale = _props2.xScale,
        yScale = _props2.yScale;

    var barHeight = Math.abs(yScale(this.props.y0Accessor(segment)) - yScale(this.props.yAccessorBar(segment)));
    var yWidth = yScale(this.props.y0Accessor(segment) + this.props.yAccessorBar(segment));
    var y = grouped ? yScale(this.props.yAccessorBar(segment)) : yWidth;
    var key = this.props.series[seriesIdx] + segment.data.x + segment[1];

    return React.createElement(BarContainer, {
      key: key,
      height: barHeight,
      width: xScale.bandwidth(),
      x: xScale(this.props.xAccessorBar(segment)),
      y: this.props.yAccessorBar(segment) >= 0 ? y : y - barHeight,
      fill: this.props.colors(this.props.colorAccessor(series, seriesIdx)),
      hoverAnimation: this.props.hoverAnimation,
      onMouseOver: this.props.onMouseOver,
      onMouseLeave: this.props.onMouseLeave,
      datapoint: {
        xValue: this.props.xAccessorBar(segment),
        yValue: this.props.yAccessorBar(segment),
        seriesName: this.props.series[seriesIdx]
      }
    });
  },
  render: function render() {
    return React.createElement('g', null, this._renderBarSeries());
  }
});

},{"./BarContainer":"/home/robson/projetos/rd3/src/barchart/BarContainer.jsx"}],"/home/robson/projetos/rd3/src/barchart/index.js":[function(require,module,exports){
'use strict';

exports.BarChart = require('./BarChart');

},{"./BarChart":"/home/robson/projetos/rd3/src/barchart/BarChart.jsx"}],"/home/robson/projetos/rd3/src/candlestick/Candle.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({

  displayName: 'Candle',

  propTypes: {
    className: PropTypes.string,
    shapeRendering: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'rd3-candlestick-candle',
      shapeRendering: 'crispEdges',
      stroke: '#000',
      strokeWidth: 1
    };
  },
  render: function render() {
    var props = this.props;

    return React.createElement('rect', {
      className: props.className,
      fill: props.candleFill,
      x: props.candleX,
      y: props.candleY,
      stroke: props.candleFill,
      strokeWidth: props.strokeWidth,
      style: { shapeRendering: props.shapeRendering },
      width: props.candleWidth,
      height: props.candleHeight,
      onMouseOver: props.handleMouseOver,
      onMouseLeave: props.handleMouseLeave
    });
  }
});

},{}],"/home/robson/projetos/rd3/src/candlestick/CandlestickChart.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var d3 = window.d3;
var utils = require('../utils');
var DataSeries = require('./DataSeries');

var _require = require('../common'),
    Chart = _require.Chart,
    XAxis = _require.XAxis,
    YAxis = _require.YAxis,
    XGrid = _require.XGrid,
    YGrid = _require.YGrid;

var _require2 = require('../mixins'),
    ViewBoxMixin = _require2.ViewBoxMixin,
    CartesianChartPropsMixin = _require2.CartesianChartPropsMixin;

module.exports = createReactClass({

  displayName: 'CandleStickChart',

  propTypes: {
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    fillUp: PropTypes.func,
    fillUpAccessor: PropTypes.func,
    fillDown: PropTypes.func,
    fillDownAccessor: PropTypes.func,
    hoverAnimation: PropTypes.bool,
    xAxisFormatter: PropTypes.func,
    xAxisTickInterval: PropTypes.object,
    xAxisTickValues: PropTypes.array,
    yAxisFormatter: PropTypes.func,
    yAxisTickCount: PropTypes.number,
    yAxisTickValues: PropTypes.array
  },

  mixins: [CartesianChartPropsMixin, ViewBoxMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'rd3-candlestick',
      xAxisClassName: 'rd3-candlestick-xaxis',
      yAxisClassName: 'rd3-candlestick-yaxis',
      data: [],
      fillUp: function fillUp() {
        return '#009900';
      },
      fillUpAccessor: function fillUpAccessor(d, idx) {
        return idx;
      },
      // fillDown: d3.scaleOrdinal(d3.schemeCategory10),
      fillDown: function fillDown() {
        return '#FF3300';
      },
      fillDownAccessor: function fillDownAccessor(d, idx) {
        return idx;
      },
      hoverAnimation: true,
      margins: { top: 10, right: 20, bottom: 30, left: 45 },
      xAccessor: function xAccessor(d) {
        return d.x;
      },
      yAccessor: function yAccessor(d) {
        return { open: d.open, high: d.high, low: d.low, close: d.close };
      }
    };
  },
  render: function render() {
    var props = this.props;

    var _getDimensions = this.getDimensions(),
        innerWidth = _getDimensions.innerWidth,
        innerHeight = _getDimensions.innerHeight,
        trans = _getDimensions.trans,
        svgMargins = _getDimensions.svgMargins;

    var yOrient = this.getYOrient();
    var domain = props.domain || {};

    if (!Array.isArray(props.data)) {
      props.data = [props.data];
    }
    if (this.props.data && this.props.data.length < 1) {
      return null;
    }
    var flattenedData = utils.flattenData(props.data, props.xAccessor, props.yAccessor);

    var xValues = flattenedData.xValues;
    var yValues = flattenedData.yValues;
    var scales = utils.calculateScales(innerWidth, innerHeight, xValues, yValues, domain.x, domain.y);

    var dataSeries = props.data.map(function (series, idx) {
      return React.createElement(DataSeries, {
        key: idx,
        seriesName: series.name,
        index: idx,
        xScale: scales.xScale,
        yScale: scales.yScale,
        data: series.values,
        fillUp: props.fillUp(props.fillUpAccessor(series, idx)),
        fillDown: props.fillDown(props.fillDownAccessor(series, idx)),
        xAccessor: props.xAccessor,
        yAccessor: props.yAccessor,
        hoverAnimation: props.hoverAnimation
      });
    });

    return React.createElement(Chart, {
      viewBox: this.getViewBox(),
      width: props.width,
      height: props.height,
      margins: props.margins,
      title: props.title
    }, React.createElement('g', { transform: trans, className: props.className }, React.createElement(XGrid, {
      xAxisClassName: props.xAxisClassName,
      xAxisTickValues: props.xAxisTickValues,
      xAxisTickCount: props.xAxisTickCount,
      xAxisTickInterval: props.xAxisTickInterval,
      xAxisOffset: props.xAxisOffset,
      xScale: scales.xScale,
      xAxisLabel: props.xAxisLabel,
      xAxisLabelOffset: props.xAxisLabelOffset,
      tickFormatting: props.xAxisFormatter,
      tickStroke: props.xAxisTickStroke,
      tickTextStroke: props.xAxisTickTextStroke,
      xOrient: props.xOrient,
      yOrient: yOrient,
      data: props.data,
      margins: svgMargins,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      stroke: props.axesColor,
      gridVertical: props.gridVertical,
      gridVerticalStroke: props.gridVerticalStroke,
      gridVerticalStrokeDash: props.gridVerticalStrokeDash
    }), React.createElement(YGrid, {
      yAxisClassName: props.yAxisClassName,
      yScale: scales.yScale,
      yAxisTickValues: props.yAxisTickValues,
      yAxisTickCount: props.yAxisTickCount,
      yAxisOffset: props.yAxisOffset,
      yAxisLabel: props.yAxisLabel,
      yAxisLabelOffset: props.yAxisLabelOffset,
      tickFormatting: props.yAxisFormatter,
      tickStroke: props.yAxisTickStroke,
      tickTextStroke: props.yAxisTickTextStroke,
      xOrient: props.xOrient,
      yOrient: yOrient,
      margins: svgMargins,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      stroke: props.axesColor,
      gridHorizontal: props.gridHorizontal,
      gridHorizontalStroke: props.gridHorizontalStroke,
      gridHorizontalStrokeWidth: props.gridHorizontalStrokeWidth,
      gridHorizontalStrokeDash: props.gridVerticalStrokeDash
    }), dataSeries, React.createElement(XAxis, {
      xAxisClassName: props.xAxisClassName,
      xScale: scales.xScale,
      xAxisTickValues: props.xAxisTickValues,
      xAxisTickInterval: props.xAxisTickInterval,
      xAxisOffset: props.xAxisOffset,
      tickFormatting: props.xAxisFormatter,
      tickStroke: props.xAxisTickStroke,
      tickTextStroke: props.xAxisTickTextStroke,
      xAxisLabel: props.xAxisLabel,
      xAxisLabelOffset: props.xAxisLabelOffset,
      xOrient: props.xOrient,
      yOrient: yOrient,
      margins: svgMargins,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal
    }), React.createElement(YAxis, {
      yAxisClassName: props.yAxisClassName,
      yScale: scales.yScale,
      yAxisTickValues: props.yAxisTickValues,
      yAxisOffset: props.yAxisOffset,
      yAxisTickCount: props.yAxisTickCount,
      tickFormatting: props.yAxisFormatter,
      tickStroke: props.yAxisTickStroke,
      tickTextStroke: props.yAxisTickTextStroke,
      yAxisLabel: props.yAxisLabel,
      yAxisLabelOffset: props.yAxisLabelOffset,
      xOrient: props.xOrient,
      yOrient: yOrient,
      margins: svgMargins,
      width: innerWidth,
      height: props.height,
      horizontalChart: props.horizontal
    })));
  }
});

},{"../common":"/home/robson/projetos/rd3/src/common/index.js","../mixins":"/home/robson/projetos/rd3/src/mixins/index.js","../utils":"/home/robson/projetos/rd3/src/utils/index.js","./DataSeries":"/home/robson/projetos/rd3/src/candlestick/DataSeries.jsx"}],"/home/robson/projetos/rd3/src/candlestick/CandlestickContainer.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var utils = require('../utils');
var Candle = require('./Candle');
var Wick = require('./Wick');

module.exports = createReactClass({

  displayName: 'CandleStickContainer',

  propTypes: {
    candleX: PropTypes.number,
    candleY: PropTypes.number,
    className: PropTypes.string,
    candleFill: PropTypes.string,
    candleHeight: PropTypes.number,
    candleWidth: PropTypes.number,
    wickX1: PropTypes.number,
    wickX2: PropTypes.number,
    wickY1: PropTypes.number,
    wickY2: PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'rd3-candlestick-container'
    };
  },
  getInitialState: function getInitialState() {
    // state for animation usage
    return {
      candleWidth: this.props.candleWidth,
      candleFill: this.props.candleFill
    };
  },
  _animateCandle: function _animateCandle() {
    this.setState({
      candleWidth: this.props.candleWidth * 1.5,
      candleFill: utils.shade(this.props.candleFill, -0.2)
    });
  },
  _restoreCandle: function _restoreCandle() {
    this.setState({
      candleWidth: this.props.candleWidth,
      candleFill: this.props.candleFill
    });
  },
  render: function render() {
    var props = this.props;
    var state = this.state;

    // animation controller
    var handleMouseOver = void 0;
    var handleMouseLeave = void 0;
    if (props.hoverAnimation) {
      handleMouseOver = this._animateCandle;
      handleMouseLeave = this._restoreCandle;
    } else {
      handleMouseOver = handleMouseLeave = null;
    }

    return React.createElement('g', { className: props.className }, React.createElement(Wick, {
      wickX1: props.wickX1,
      wickX2: props.wickX2,
      wickY1: props.wickY1,
      wickY2: props.wickY2
    }), React.createElement(Candle, {
      candleFill: state.candleFill,
      candleWidth: state.candleWidth,
      candleX: props.candleX - (state.candleWidth - props.candleWidth) / 2,
      candleY: props.candleY,
      candleHeight: props.candleHeight,
      handleMouseOver: handleMouseOver,
      handleMouseLeave: handleMouseLeave
    }));
  }
});

},{"../utils":"/home/robson/projetos/rd3/src/utils/index.js","./Candle":"/home/robson/projetos/rd3/src/candlestick/Candle.jsx","./Wick":"/home/robson/projetos/rd3/src/candlestick/Wick.jsx"}],"/home/robson/projetos/rd3/src/candlestick/DataSeries.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var CandlestickContainer = require('./CandlestickContainer');

module.exports = createReactClass({

  displayName: 'DataSeries',

  propTypes: {
    fillUp: PropTypes.string.isRequired,
    fillDown: PropTypes.string.isRequired
  },

  render: function render() {
    var props = this.props;

    var xRange = props.xScale.range();
    var width = Math.abs(xRange[0] - xRange[1]);
    var candleWidth = width / (props.data.length + 2) * 0.5;

    var dataSeriesArray = props.data.map(function (d, idx) {
      // Candles
      var ohlc = props.yAccessor(d);
      var candleX = props.xScale(props.xAccessor(d)) - 0.5 * candleWidth;
      var candleY = props.yScale(Math.max(ohlc.open, ohlc.close));
      var candleHeight = Math.abs(props.yScale(ohlc.open) - props.yScale(ohlc.close));
      var wickY2 = props.yScale(ohlc.low);
      var candleFill = ohlc.open <= ohlc.close ? props.fillUp : props.fillDown;

      // Wicks
      var wickX1 = props.xScale(props.xAccessor(d));
      var wickY1 = props.yScale(ohlc.high);
      var wickX2 = wickX1;

      return React.createElement(CandlestickContainer, {
        key: idx,
        candleFill: candleFill,
        candleHeight: candleHeight,
        candleWidth: candleWidth,
        candleX: candleX,
        candleY: candleY,
        wickX1: wickX1,
        wickX2: wickX2,
        wickY1: wickY1,
        wickY2: wickY2,
        hoverAnimation: props.hoverAnimation
      });
    }, this);

    return React.createElement('g', null, dataSeriesArray);
  }
});

},{"./CandlestickContainer":"/home/robson/projetos/rd3/src/candlestick/CandlestickContainer.jsx"}],"/home/robson/projetos/rd3/src/candlestick/Wick.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({

  displayName: 'Wick',

  propTypes: {
    className: PropTypes.string,
    shapeRendering: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'rd3-candlestick-wick',
      stroke: '#666666',
      strokeWidth: 1,
      shapeRendering: 'crispEdges'
    };
  },
  render: function render() {
    var props = this.props;
    return React.createElement('line', {
      stroke: props.stroke,
      strokeWidth: props.strokeWidth
      // style={{ shapeRendering: props.shapeRendering }}
      , className: props.className,
      x1: props.wickX1,
      y1: props.wickY1,
      x2: props.wickX2,
      y2: props.wickY2
    });
  }
});

},{}],"/home/robson/projetos/rd3/src/candlestick/index.js":[function(require,module,exports){
'use strict';

exports.CandlestickChart = require('./CandlestickChart');

},{"./CandlestickChart":"/home/robson/projetos/rd3/src/candlestick/CandlestickChart.jsx"}],"/home/robson/projetos/rd3/src/common/Legend.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var d3 = window.d3;

module.exports = createReactClass({

  displayName: 'Legend',

  propTypes: {
    className: PropTypes.string,
    colors: PropTypes.func,
    colorAccessor: PropTypes.func,
    data: PropTypes.array.isRequired,
    itemClassName: PropTypes.string,
    margins: PropTypes.object,
    text: PropTypes.string,
    width: PropTypes.number.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'rd3-legend',
      color: d3.scaleOrdinal(d3.schemeCategory10),
      colorAccessor: function colorAccessor(d, idx) {
        return idx;
      },
      itemClassName: 'rd3-legend-item',
      text: '#000'
    };
  },
  render: function render() {
    var props = this.props;

    var textStyle = {
      color: 'black',
      fontSize: '50%',
      verticalAlign: 'top'
    };

    var legendItems = [];

    props.data.forEach(function (series, idx) {
      var itemStyle = {
        color: props.colors(props.colorAccessor(series, idx)),
        lineHeight: '60%',
        fontSize: '200%'
      };

      legendItems.push(React.createElement('li', {
        key: idx,
        className: props.itemClassName,
        style: itemStyle
      }, React.createElement('span', {
        style: textStyle
      }, series.name)));
    });

    var topMargin = props.margins.top;

    var legendBlockStyle = {
      wordWrap: 'break-word',
      width: props.width,
      paddingLeft: 0,
      marginBottom: 0,
      marginTop: topMargin,
      listStylePosition: 'inside'
    };

    return React.createElement('ul', {
      className: props.className,
      style: legendBlockStyle
    }, legendItems);
  }
});

},{}],"/home/robson/projetos/rd3/src/common/Polygon.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({
  displayName: 'exports',

  // TODO: PropTypes.any
  propTypes: {
    structure: PropTypes.any,
    id: PropTypes.any,
    vnode: PropTypes.any
  },

  _animateCircle: function _animateCircle() {
    this.props.structure.cursor('voronoi').cursor(this.props.id).update(function () {
      return 'active';
    });
    // this.props.pubsub.emit('animate', this.props.id);
  },
  _restoreCircle: function _restoreCircle() {
    this.props.structure.cursor('voronoi').cursor(this.props.id).update(function () {
      return 'inactive';
    });
    // this.props.pubsub.emit('restore', this.props.id);
  },
  _drawPath: function _drawPath(d) {
    if (d === undefined) {
      return '';
    }
    return 'M' + d.join(',') + 'Z';
  },
  render: function render() {
    return React.createElement('path', {
      onMouseOver: this._animateCircle,
      onMouseOut: this._restoreCircle,
      fill: 'white',
      opacity: '0',
      d: this._drawPath(this.props.vnode)
    });
  }
});

},{}],"/home/robson/projetos/rd3/src/common/Tooltip.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({
  displayName: 'exports',

  propTypes: {
    x: PropTypes.number,
    y: PropTypes.number,
    child: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
    show: PropTypes.bool
  },

  render: function render() {
    var props = this.props;
    var display = this.props.show ? 'inherit' : 'none';
    var containerStyles = {
      position: 'fixed',
      top: props.y,
      left: props.x,
      display: display,
      opacity: 0.8
    };

    // TODO: add 'right: 0px' style when tooltip is off the chart
    var tooltipStyles = {
      position: 'absolute',
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: '#ddd',
      borderRadius: '2px',
      padding: '10px',
      marginLeft: '10px',
      marginRight: '10px',
      marginTop: '-15px'
    };
    return React.createElement('div', { style: containerStyles }, React.createElement('div', { style: tooltipStyles }, props.child));
  }
});

},{}],"/home/robson/projetos/rd3/src/common/Voronoi.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;
var d3 = window.d3;
var Polygon = require('./Polygon');

module.exports = createReactClass({

  displayName: 'Voronoi',

  // TODO: PropTypes.any
  propTypes: {
    xScale: PropTypes.any,
    yScale: PropTypes.any,
    width: PropTypes.any,
    height: PropTypes.any,
    structure: PropTypes.any,
    data: PropTypes.any
  },

  render: function render() {
    var _this = this;

    var xScale = this.props.xScale;
    var yScale = this.props.yScale;

    var voronoi = d3.geom.voronoi().x(function (d) {
      return xScale(d.coord.x);
    }).y(function (d) {
      return yScale(d.coord.y);
    }).clipExtent([[0, 0], [this.props.width, this.props.height]]);

    var regions = voronoi(this.props.data).map(function (vnode, idx) {
      return React.createElement(Polygon, { structure: _this.props.structure, key: idx, id: vnode.point.id, vnode: vnode });
    });

    return React.createElement('g', null, regions);
  }
});

},{"./Polygon":"/home/robson/projetos/rd3/src/common/Polygon.jsx"}],"/home/robson/projetos/rd3/src/common/axes/AxisLine.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({

  displayName: 'AxisLine',

  propTypes: {
    scale: PropTypes.func.isRequired,
    innerTickSize: PropTypes.number,
    outerTickSize: PropTypes.number,
    tickPadding: PropTypes.number,
    tickArguments: PropTypes.array,
    fill: PropTypes.string,
    stroke: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      innerTickSize: 6,
      outerTickSize: 6,
      tickPadding: 3,
      fill: 'none',
      tickArguments: [10],
      tickValues: null,
      tickFormat: null
    };
  },
  _d3_scaleExtent: function _d3_scaleExtent(domain) {
    var start = domain[0];
    var stop = domain[domain.length - 1];
    return start < stop ? [start, stop] : [stop, start];
  },
  _d3_scaleRange: function _d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : this._d3_scaleExtent(scale.range());
  },
  render: function render() {
    var props = this.props;
    var sign = props.orient === 'top' || props.orient === 'left' ? -1 : 1;

    var range = this._d3_scaleRange(props.scale);

    var d = void 0;
    if (props.orient === 'bottom' || props.orient === 'top') {
      d = 'M' + range[0] + ',' + sign * props.outerTickSize + 'V0H' + range[1] + 'V' + sign * props.outerTickSize;
    } else {
      d = 'M' + sign * props.outerTickSize + ',' + range[0] + 'H0V' + range[1] + 'H' + sign * props.outerTickSize;
    }

    return React.createElement('path', {
      className: 'domain',
      d: d,
      style: { shapeRendering: 'crispEdges'
        // fill={props.fill}
      }, fill: 'none',
      stroke: '#000000',
      strokeWidth: '0.5'

      // stroke={props.stroke}
      // strokeWidth={props.strokeWidth}
    });
  }
});

},{}],"/home/robson/projetos/rd3/src/common/axes/AxisTicks.jsx":[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var React = window.React;
var PropTypes = window.PropTypes;
var createReactClass = window.createReactClass;

module.exports = createReactClass({

  displayName: 'AxisTick',

  propTypes: {
    scale: PropTypes.func.isRequired,
    orient: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
    orient2nd: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    horizontal: PropTypes.bool,
    tickArguments: PropTypes.array,
    tickValues: PropTypes.array,
    innerTickSize: PropTypes.number,
    outerTickSize: PropTypes.number,
    tickPadding: PropTypes.number,
    tickFormat: PropTypes.func,
    tickStroke: PropTypes.string,
    tickTextStroke: PropTypes.string,
    gridHorizontal: PropTypes.bool,
    gridVertical: PropTypes.bool,
    gridHorizontalStroke: PropTypes.string,
    gridVerticalStroke: PropTypes.string,
    gridHorizontalStrokeWidth: PropTypes.number,
    gridVerticalStrokeWidth: PropTypes.number,
    gridHorizontalStrokeDash: PropTypes.string,
    gridVerticalStrokeDash: PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      innerTickSize: 6,
      outerTickSize: 6,
      tickStroke: '#000',
      tickPadding: 3,
      tickArguments: [10],
      tickValues: null,
      gridHorizontal: false,
      gridVertical: false,
      gridHorizontalStroke: '#D8D7D7',
      gridVerticalStroke: '#D8D7D7',
      gridHorizontalStrokeWidth: 0.4,
      gridVerticalStrokeWidth: 0.4,
      gridHorizontalStrokeDash: '5, 5',
      gridVerticalStrokeDash: '5, 5'
    };
  },
  render: function render() {
    var props = this.props;

    var tr = void 0;
    var textAnchor = void 0;
    var textTransform = void 0;
    var tickFormat = void 0;
    var y1 = void 0;
    var y2 = void 0;
    var dy = void 0;
    var x1 = void 0;
    var x2 = void 0;

    var gridStrokeWidth = void 0;
    var gridStroke = void 0;
    var gridStrokeDashArray = void 0;
    var x2grid = void 0;
    var y2grid = void 0;
    var gridOn = false;

    var sign = props.orient === 'top' || props.orient === 'right' ? -1 : 1;
    var tickSpacing = Math.max(props.innerTickSize, 0) + props.tickPadding;

    var scale = props.scale;

    var ticks = void 0;
    if (props.tickValues) {
      ticks = props.tickValues;
    } else if (scale.ticks) {
      ticks = scale.ticks.apply(scale, props.tickArguments);
    } else {
      ticks = scale.domain();
    }

    if (props.tickFormatting) {
      tickFormat = props.tickFormatting;
    } else if (scale.tickFormat) {
      tickFormat = scale.tickFormat.apply(scale, props.tickArguments);
    } else {
      tickFormat = function tickFormat(d) {
        return d;
      };
    }

    var adjustedScale = scale.bandwidth ? function (d) {
      return scale(d) + scale.bandwidth() / 2;
    } : scale;

    // Still working on this
    // Ticks and lines are not fully aligned
    // in some orientations
    switch (props.orient) {
      case 'top':
        tr = function tr(tick) {
          return 'translate(' + adjustedScale(tick) + ',0)';
        };
        textAnchor = 'middle';
        y2 = props.innerTickSize * sign;
        y1 = tickSpacing * sign;
        dy = sign < 0 ? '0em' : '.71em';
        x2grid = 0;
        y2grid = -props.height;
        break;
      case 'bottom':
        tr = function tr(tick) {
          return 'translate(' + adjustedScale(tick) + ',0)';
        };
        textAnchor = 'middle';
        y2 = props.innerTickSize * sign;
        y1 = tickSpacing * sign;
        dy = sign < 0 ? '0em' : '.71em';
        x2grid = 0;
        y2grid = -props.height;
        break;
      case 'left':
        tr = function tr(tick) {
          return 'translate(0,' + adjustedScale(tick) + ')';
        };
        textAnchor = 'end';
        x2 = props.innerTickSize * -sign;
        x1 = tickSpacing * -sign;
        dy = '.32em';
        x2grid = props.width;
        y2grid = 0;
        break;
      case 'right':
        tr = function tr(tick) {
          return 'translate(0,' + adjustedScale(tick) + ')';
        };
        textAnchor = 'start';
        x2 = props.innerTickSize * -sign;
        x1 = tickSpacing * -sign;
        dy = '.32em';
        x2grid = -props.width;
        y2grid = 0;
        break;
      default:
        break;
    }

    if (props.horizontalChart) {
      textTransform = 'rotate(-90)';
      var _ref = [x1, -y1 || 0];
      y1 = _ref[0];
      x1 = _ref[1];

      switch (props.orient) {
        case 'top':
          textAnchor = 'start';
          dy = '.32em';
          break;
        case 'bottom':
          textAnchor = 'end';
          dy = '.32em';
          break;
        case 'left':
          textAnchor = 'middle';
          dy = sign < 0 ? '.71em' : '0em';
          break;
        case 'right':
          textAnchor = 'middle';
          dy = sign < 0 ? '.71em' : '0em';
          break;
        default:
          break;
      }
    }

    if (props.gridHorizontal) {
      gridOn = true;
      gridStrokeWidth = props.gridHorizontalStrokeWidth;
      gridStroke = props.gridHorizontalStroke;
      gridStrokeDashArray = props.gridHorizontalStrokeDash;
    } else if (props.gridVertical) {
      gridOn = true;
      gridStrokeWidth = props.gridVerticalStrokeWidth;
      gridStroke = props.gridVerticalStroke;
      gridStrokeDashArray = props.gridVerticalStrokeDash;
    }

    // return grid line if grid is enabled and grid line is not on at same position as other axis.
    var gridLine = function gridLine(pos) {
      if (gridOn && !(props.orient2nd === 'left' && pos === 0) && !(props.orient2nd === 'right' && pos === props.width) && !((props.orient === 'left' || props.orient === 'right') && pos === props.height)) {
        return React.createElement('line', { style: {
            strokeWidth: gridStrokeWidth,
            shapeRendering: 'crispEdges',
            stroke: gridStroke,
            strokeDasharray: gridStrokeDashArray
          }, x2: x2grid, y2: y2grid
        });
      }
      return null;
    };

    var optionalTextProps = textTransform ? {
      transform: textTransform
    } : {};

    return React.createElement('g', null, ticks.map(function (tick, idx) {
      return React.createElement('g', { key: idx, className: 'tick', transform: tr(tick) }, gridLine(adjustedScale(tick)), React.createElement('line', {
        style: {
          shapeRendering: 'crispEdges',
          opacity: '1',
          stroke: props.tickStroke,
          strokeWidth: '0.5'
        },
        x2: x2,
        y2: y2
      }), React.createElement('text', _extends({
        strokeWidth: '0.01',
        dy: dy, x: x1, y: y1,
        style: { stroke: props.tickTextStroke, fill: props.tickTextStroke },
        textAnchor: textAnchor
      }, optionalTextProps), ('' + tickFormat(tick)).split('\n').map(function (tickLabel, index) {
        return React.createElement('tspan', { x: x1 || 0, dy: dy, key: index }, tickLabel);
      })));
    }));
  }
});

},{}],"/home/robson/projetos/rd3/src/common/axes/Label.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({

  displayName: 'Label',

  propTypes: {
    height: PropTypes.number,
    horizontalChart: PropTypes.bool,
    horizontalTransform: PropTypes.string,
    label: PropTypes.string.isRequired,
    width: PropTypes.number,
    strokeWidth: PropTypes.number,
    textAnchor: PropTypes.string,
    verticalTransform: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      horizontalTransform: 'rotate(270)',
      strokeWidth: 0.01,
      textAnchor: 'middle',
      verticalTransform: 'rotate(0)'
    };
  },
  render: function render() {
    var props = this.props;

    if (!props.label) {
      return React.createElement('text', null);
    }

    var transform = void 0;
    var x = void 0;
    var y = void 0;
    if (props.orient === 'top' || props.orient === 'bottom') {
      transform = props.verticalTransform;
      x = props.width / 2;
      y = props.offset;

      if (props.horizontalChart) {
        transform = 'rotate(180 ' + x + ' ' + y + ') ' + transform;
      }
    } else {
      // left, right
      transform = props.horizontalTransform;
      x = -props.height / 2;
      if (props.orient === 'left') {
        y = -props.offset;
      } else {
        y = props.offset;
      }
    }

    return React.createElement('text', {
      strokeWidth: props.strokeWidth.toString(),
      textAnchor: props.textAnchor,
      transform: transform,
      y: y,
      x: x
    }, props.label);
  }
});

},{}],"/home/robson/projetos/rd3/src/common/axes/XAxis.jsx":[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;
var d3 = window.d3;
var AxisTicks = require('./AxisTicks');
var AxisLine = require('./AxisLine');
var Label = require('./Label');

module.exports = createReactClass({

  displayName: 'XAxis',

  propTypes: {
    fill: PropTypes.string,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    horizontalChart: PropTypes.bool,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.string,
    tickStroke: PropTypes.string,
    tickTextStroke: PropTypes.string,
    xAxisClassName: PropTypes.string,
    xAxisLabel: PropTypes.string,
    xAxisTickValues: PropTypes.array,
    xAxisOffset: PropTypes.number,
    xScale: PropTypes.func.isRequired,
    xOrient: PropTypes.oneOf(['top', 'bottom']),
    yOrient: PropTypes.oneOf(['left', 'right']),
    gridVertical: PropTypes.bool,
    gridVerticalStroke: PropTypes.string,
    gridVerticalStrokeWidth: PropTypes.number,
    gridVerticalStrokeDash: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      fill: 'none',
      stroke: 'none',
      strokeWidth: '1',
      tickStroke: '#000',
      xAxisClassName: 'rd3-x-axis',
      xAxisLabel: '',
      xAxisLabelOffset: 10,
      xAxisOffset: 0,
      xOrient: 'bottom',
      yOrient: 'left'
    };
  },
  render: function render() {
    var props = this.props;

    var t = 'translate(0 ,' + (props.xAxisOffset + props.height) + ')';

    var tickArguments = void 0;
    if (typeof props.xAxisTickCount !== 'undefined') {
      tickArguments = [props.xAxisTickCount];
    }

    if (typeof props.xAxisTickInterval !== 'undefined') {
      // tickArguments = [d3.time[props.xAxisTickInterval.unit], props.xAxisTickInterval.interval];
    }

    return React.createElement('g', {
      className: props.xAxisClassName,
      transform: t
    }, React.createElement(AxisLine, _extends({
      scale: props.xScale,
      stroke: props.stroke,
      orient: props.xOrient,
      outerTickSize: props.tickSize
    }, props)), React.createElement(Label, {
      horizontalChart: props.horizontalChart,
      label: props.xAxisLabel,
      offset: props.xAxisLabelOffset,
      orient: props.xOrient,
      margins: props.margins,
      width: props.width
    }));
  }
});

},{"./AxisLine":"/home/robson/projetos/rd3/src/common/axes/AxisLine.jsx","./AxisTicks":"/home/robson/projetos/rd3/src/common/axes/AxisTicks.jsx","./Label":"/home/robson/projetos/rd3/src/common/axes/Label.jsx"}],"/home/robson/projetos/rd3/src/common/axes/XGrid.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;
var d3 = window.d3;
var AxisTicks = require('./AxisTicks');
var AxisLine = require('./AxisLine');
var Label = require('./Label');

module.exports = createReactClass({

  displayName: 'XGrid',

  propTypes: {
    fill: PropTypes.string,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    horizontalChart: PropTypes.bool,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.string,
    tickStroke: PropTypes.string,
    tickTextStroke: PropTypes.string,
    xAxisClassName: PropTypes.string,
    xAxisLabel: PropTypes.string,
    xAxisTickValues: PropTypes.array,
    xAxisOffset: PropTypes.number,
    xScale: PropTypes.func.isRequired,
    xOrient: PropTypes.oneOf(['top', 'bottom']),
    yOrient: PropTypes.oneOf(['left', 'right']),
    gridVertical: PropTypes.bool,
    gridVerticalStroke: PropTypes.string,
    gridVerticalStrokeWidth: PropTypes.number,
    gridVerticalStrokeDash: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      fill: 'none',
      stroke: 'none',
      strokeWidth: '1',
      tickStroke: '#000',
      xAxisClassName: 'rd3-x-axis',
      xAxisLabel: '',
      xAxisLabelOffset: 10,
      xAxisOffset: 0,
      xOrient: 'bottom',
      yOrient: 'left'
    };
  },
  render: function render() {
    var props = this.props;

    var t = 'translate(0 ,' + (props.xAxisOffset + props.height) + ')';

    var tickArguments = void 0;
    if (typeof props.xAxisTickCount !== 'undefined') {
      tickArguments = [props.xAxisTickCount];
    }

    if (typeof props.xAxisTickInterval !== 'undefined') {
      // tickArguments = [d3.time[props.xAxisTickInterval.unit], props.xAxisTickInterval.interval];
    }

    return React.createElement('g', {
      className: props.xAxisClassName,
      transform: t
    }, React.createElement(AxisTicks, {
      tickValues: props.xAxisTickValues,
      tickFormatting: props.tickFormatting,
      tickArguments: tickArguments,
      tickStroke: props.tickStroke,
      tickTextStroke: props.tickTextStroke,
      innerTickSize: props.tickSize,
      scale: props.xScale,
      orient: props.xOrient,
      orient2nd: props.yOrient,
      height: props.height,
      width: props.width,
      horizontalChart: props.horizontalChart,
      gridVertical: props.gridVertical,
      gridVerticalStroke: props.gridVerticalStroke,
      gridVerticalStrokeWidth: props.gridVerticalStrokeWidth,
      gridVerticalStrokeDash: props.gridVerticalStrokeDash
    }));
  }
});

},{"./AxisLine":"/home/robson/projetos/rd3/src/common/axes/AxisLine.jsx","./AxisTicks":"/home/robson/projetos/rd3/src/common/axes/AxisTicks.jsx","./Label":"/home/robson/projetos/rd3/src/common/axes/Label.jsx"}],"/home/robson/projetos/rd3/src/common/axes/YAxis.jsx":[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var PropTypes = window.PropTypes;
var createReactClass = window.createReactClass;
var React = window.React;
var d3 = window.d3;
var AxisLine = require('./AxisLine');
var Label = require('./Label');

module.exports = createReactClass({

  displayName: 'YAxis',

  propTypes: {
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.string,
    tickStroke: PropTypes.string,
    tickTextStroke: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    horizontalChart: PropTypes.bool,
    yAxisClassName: PropTypes.string,
    yAxisLabel: PropTypes.string,
    yAxisOffset: PropTypes.number,
    yAxisTickValues: PropTypes.array,
    xOrient: PropTypes.oneOf(['top', 'bottom']),
    yOrient: PropTypes.oneOf(['left', 'right']),
    yScale: PropTypes.func.isRequired,
    gridVertical: PropTypes.bool,
    gridVerticalStroke: PropTypes.string,
    gridVerticalStrokeWidth: PropTypes.number,
    gridVerticalStrokeDash: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      fill: 'none',
      stroke: '#000',
      strokeWidth: '1',
      tickStroke: '#000',
      yAxisClassName: 'rd3-y-axis',
      yAxisLabel: '',
      yAxisOffset: 0,
      xOrient: 'bottom',
      yOrient: 'left'
    };
  },
  render: function render() {
    var props = this.props;

    var t = void 0;
    if (props.yOrient === 'right') {
      t = 'translate(' + (props.yAxisOffset + props.width) + ', 0)';
    } else {
      t = 'translate(' + props.yAxisOffset + ', 0)';
    }

    var tickArguments = void 0;
    if (props.yAxisTickCount) {
      tickArguments = [props.yAxisTickCount];
    }

    if (props.yAxisTickInterval) {
      tickArguments = [d3.time[props.yAxisTickInterval.unit], props.yAxisTickInterval.interval];
    }

    return React.createElement('g', {
      className: props.yAxisClassName,
      transform: t
    }, React.createElement(AxisLine, _extends({
      orient: props.yOrient,
      outerTickSize: props.tickSize,
      scale: props.yScale,
      stroke: props.stroke
    }, props)), React.createElement(Label, {
      height: props.height,
      horizontalChart: props.horizontalChart,
      label: props.yAxisLabel,
      margins: props.margins,
      offset: props.yAxisLabelOffset,
      orient: props.yOrient
    }));
  }
});

},{"./AxisLine":"/home/robson/projetos/rd3/src/common/axes/AxisLine.jsx","./Label":"/home/robson/projetos/rd3/src/common/axes/Label.jsx"}],"/home/robson/projetos/rd3/src/common/axes/YGrid.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var createReactClass = window.createReactClass;
var React = window.React;
var d3 = window.d3;
var AxisTicks = require('./AxisTicks');
var AxisLine = require('./AxisLine');
var Label = require('./Label');

module.exports = createReactClass({

  displayName: 'YGrid',

  propTypes: {
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.string,
    tickStroke: PropTypes.string,
    tickTextStroke: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    horizontalChart: PropTypes.bool,
    yAxisClassName: PropTypes.string,
    yAxisLabel: PropTypes.string,
    yAxisOffset: PropTypes.number,
    yAxisTickValues: PropTypes.array,
    xOrient: PropTypes.oneOf(['top', 'bottom']),
    yOrient: PropTypes.oneOf(['left', 'right']),
    yScale: PropTypes.func.isRequired,
    gridVertical: PropTypes.bool,
    gridVerticalStroke: PropTypes.string,
    gridVerticalStrokeWidth: PropTypes.number,
    gridVerticalStrokeDash: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      fill: 'none',
      stroke: '#000',
      strokeWidth: '1',
      tickStroke: '#000',
      yAxisClassName: 'rd3-y-axis',
      yAxisLabel: '',
      yAxisOffset: 0,
      xOrient: 'bottom',
      yOrient: 'left'
    };
  },
  render: function render() {
    var props = this.props;

    var t = void 0;
    if (props.yOrient === 'right') {
      t = 'translate(' + (props.yAxisOffset + props.width) + ', 0)';
    } else {
      t = 'translate(' + props.yAxisOffset + ', 0)';
    }

    var tickArguments = void 0;
    if (props.yAxisTickCount) {
      tickArguments = [props.yAxisTickCount];
    }

    if (props.yAxisTickInterval) {
      tickArguments = [d3.time[props.yAxisTickInterval.unit], props.yAxisTickInterval.interval];
    }

    return React.createElement('g', {
      className: props.yAxisClassName,
      transform: t
    }, React.createElement(AxisTicks, {
      innerTickSize: props.tickSize,
      orient: props.yOrient,
      orient2nd: props.xOrient,
      tickArguments: tickArguments,
      tickFormatting: props.tickFormatting,
      tickStroke: props.tickStroke,
      tickTextStroke: props.tickTextStroke,
      tickValues: props.yAxisTickValues,
      scale: props.yScale,
      height: props.height,
      width: props.width,
      horizontalChart: props.horizontalChart,
      gridHorizontal: props.gridHorizontal,
      gridHorizontalStroke: props.gridHorizontalStroke,
      gridHorizontalStrokeWidth: props.gridHorizontalStrokeWidth,
      gridHorizontalStrokeDash: props.gridHorizontalStrokeDash
    }));
  }
});

},{"./AxisLine":"/home/robson/projetos/rd3/src/common/axes/AxisLine.jsx","./AxisTicks":"/home/robson/projetos/rd3/src/common/axes/AxisTicks.jsx","./Label":"/home/robson/projetos/rd3/src/common/axes/Label.jsx"}],"/home/robson/projetos/rd3/src/common/axes/index.js":[function(require,module,exports){
'use strict';

exports.XAxis = require('./XAxis');
exports.YAxis = require('./YAxis');
exports.XGrid = require('./XGrid');
exports.YGrid = require('./YGrid');

},{"./XAxis":"/home/robson/projetos/rd3/src/common/axes/XAxis.jsx","./XGrid":"/home/robson/projetos/rd3/src/common/axes/XGrid.jsx","./YAxis":"/home/robson/projetos/rd3/src/common/axes/YAxis.jsx","./YGrid":"/home/robson/projetos/rd3/src/common/axes/YGrid.jsx"}],"/home/robson/projetos/rd3/src/common/charts/BasicChart.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({

  displayName: 'BasicChart',

  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    svgClassName: PropTypes.string,
    title: PropTypes.node,
    titleClassName: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'rd3-basic-chart',
      svgClassName: 'rd3-chart',
      titleClassName: 'rd3-chart-title',
      title: ''
    };
  },
  _renderTitle: function _renderTitle() {
    var props = this.props;

    if (props.title !== '') {
      return React.createElement('h4', {
        className: props.titleClassName
      }, props.title);
    }
    return null;
  },
  _renderChart: function _renderChart() {
    var props = this.props;

    return React.createElement('svg', {
      className: props.svgClassName,
      height: props.height,
      viewBox: props.viewBox,
      width: props.width
    }, props.children);
  },
  render: function render() {
    var props = this.props;

    return React.createElement('div', {
      className: props.className
    }, this._renderTitle(), this._renderChart());
  }
});

},{}],"/home/robson/projetos/rd3/src/common/charts/Chart.jsx":[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var LegendChart = require('./LegendChart');
var BasicChart = require('./BasicChart');

module.exports = createReactClass({

  displayName: 'Chart',

  propTypes: {
    legend: PropTypes.bool,
    svgClassName: PropTypes.string,
    titleClassName: PropTypes.string,
    shouldUpdate: PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      legend: false,
      svgClassName: 'rd3-chart',
      titleClassName: 'rd3-chart-title',
      shouldUpdate: true
    };
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return nextProps.shouldUpdate;
  },
  render: function render() {
    var props = this.props;

    if (props.legend) {
      return React.createElement(LegendChart, _extends({
        svgClassName: props.svgClassName,
        titleClassName: props.titleClassName
      }, this.props));
    }
    return React.createElement(BasicChart, _extends({
      svgClassName: props.svgClassName,
      titleClassName: props.titleClassName
    }, this.props));
  }
});

},{"./BasicChart":"/home/robson/projetos/rd3/src/common/charts/BasicChart.jsx","./LegendChart":"/home/robson/projetos/rd3/src/common/charts/LegendChart.jsx"}],"/home/robson/projetos/rd3/src/common/charts/LegendChart.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var Legend = require('../Legend');
var d3 = window.d3;

module.exports = createReactClass({

  displayName: 'LegendChart',

  propTypes: {
    children: PropTypes.node,
    createClass: PropTypes.string,
    colors: PropTypes.func,
    colorAccessor: PropTypes.func,
    data: PropTypes.array,
    height: PropTypes.node,
    legend: PropTypes.bool,
    legendPosition: PropTypes.string,
    margins: PropTypes.object,
    sideOffset: PropTypes.number,
    svgClassName: PropTypes.string,
    title: PropTypes.node,
    titleClassName: PropTypes.string,
    viewBox: PropTypes.string,
    width: PropTypes.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'rd3-legend-chart',
      colors: d3.scaleOrdinal(d3.schemeCategory10),
      colorAccessor: function colorAccessor(d, idx) {
        return idx;
      },
      data: [],
      legend: false,
      legendPosition: 'right',
      sideOffset: 90,
      svgClassName: 'rd3-chart',
      titleClassName: 'rd3-chart-title',
      title: ''
    };
  },
  _renderLegend: function _renderLegend() {
    var props = this.props;

    if (props.legend) {
      return React.createElement(Legend, {
        colors: props.colors,
        colorAccessor: props.colorAccessor,
        data: props.data,
        legendPosition: props.legendPosition,
        margins: props.margins,
        width: props.sideOffset
      });
    }

    return null;
  },
  _renderTitle: function _renderTitle() {
    var props = this.props;

    if (props.title !== '') {
      return React.createElement('h4', {
        className: props.titleClassName
      }, props.title);
    }
    return null;
  },
  _renderChart: function _renderChart() {
    var props = this.props;

    return React.createElement('svg', {
      className: props.svgClassName,
      height: '100%',
      viewBox: props.viewBox,
      width: '100%'
    }, props.children);
  },
  render: function render() {
    var props = this.props;

    return React.createElement('div', {
      className: props.className,
      style: { width: props.width, height: props.height }
    }, this._renderTitle(), React.createElement('div', { style: { display: 'table', width: '100%', height: '100%' } }, React.createElement('div', { style: { display: 'table-cell', width: '100%', height: '100%' } }, this._renderChart()), React.createElement('div', { style: { display: 'table-cell', width: props.sideOffset, verticalAlign: 'top' } }, this._renderLegend())));
  }
});

},{"../Legend":"/home/robson/projetos/rd3/src/common/Legend.jsx"}],"/home/robson/projetos/rd3/src/common/charts/index.js":[function(require,module,exports){
'use strict';

exports.BasicChart = require('./BasicChart');
exports.Chart = require('./Chart');
exports.LegendChart = require('./LegendChart');

},{"./BasicChart":"/home/robson/projetos/rd3/src/common/charts/BasicChart.jsx","./Chart":"/home/robson/projetos/rd3/src/common/charts/Chart.jsx","./LegendChart":"/home/robson/projetos/rd3/src/common/charts/LegendChart.jsx"}],"/home/robson/projetos/rd3/src/common/index.js":[function(require,module,exports){
'use strict';

exports.XAxis = require('./axes').XAxis;
exports.YAxis = require('./axes').YAxis;
exports.XGrid = require('./axes').XGrid;
exports.YGrid = require('./axes').YGrid;
exports.Chart = require('./charts').Chart;
exports.LegendChart = require('./charts').LegendChart;
exports.Legend = require('./Legend');
exports.Tooltip = require('./Tooltip');
exports.Voronoi = require('./Voronoi');

},{"./Legend":"/home/robson/projetos/rd3/src/common/Legend.jsx","./Tooltip":"/home/robson/projetos/rd3/src/common/Tooltip.jsx","./Voronoi":"/home/robson/projetos/rd3/src/common/Voronoi.jsx","./axes":"/home/robson/projetos/rd3/src/common/axes/index.js","./charts":"/home/robson/projetos/rd3/src/common/charts/index.js"}],"/home/robson/projetos/rd3/src/index.js":[function(require,module,exports){
'use strict';

exports.BarChart = require('./barchart').BarChart;
exports.LineChart = require('./linechart').LineChart;
exports.PieChart = require('./piechart').PieChart;
exports.AreaChart = require('./areachart').AreaChart;
exports.Treemap = require('./treemap').Treemap;
exports.ScatterChart = require('./scatterchart').ScatterChart;
exports.CandlestickChart = require('./candlestick').CandlestickChart;

},{"./areachart":"/home/robson/projetos/rd3/src/areachart/index.js","./barchart":"/home/robson/projetos/rd3/src/barchart/index.js","./candlestick":"/home/robson/projetos/rd3/src/candlestick/index.js","./linechart":"/home/robson/projetos/rd3/src/linechart/index.js","./piechart":"/home/robson/projetos/rd3/src/piechart/index.js","./scatterchart":"/home/robson/projetos/rd3/src/scatterchart/index.js","./treemap":"/home/robson/projetos/rd3/src/treemap/index.js"}],"/home/robson/projetos/rd3/src/linechart/DataSeries.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var d3 = window.d3;
var VoronoiCircleContainer = require('./VoronoiCircleContainer');
var Line = require('./Line');

module.exports = createReactClass({

  displayName: 'DataSeries',

  propTypes: {
    color: PropTypes.func,
    colorAccessor: PropTypes.func,
    data: PropTypes.array,
    interpolationType: PropTypes.string,
    xAccessor: PropTypes.func,
    yAccessor: PropTypes.func,
    hoverAnimation: PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      data: [],
      xAccessor: function xAccessor(d) {
        return d.x;
      },
      yAccessor: function yAccessor(d) {
        return d.y;
      },
      interpolationType: 'linear',
      hoverAnimation: false
    };
  },
  _isDate: function _isDate(d, accessor) {
    return Object.prototype.toString.call(accessor(d)) === '[object Date]';
  },
  render: function render() {
    var props = this.props;
    var xScale = props.xScale;
    var yScale = props.yScale;
    var xAccessor = props.xAccessor;
    var yAccessor = props.yAccessor;

    var interpolatePath = d3.line().x(function (d) {
      return props.xScale(xAccessor(d));
    }).y(function (d) {
      return props.yScale(yAccessor(d));
    }).curve(d3.curveMonotoneX);

    if (this._isDate(props.data[0].values[0], xAccessor)) {
      interpolatePath.x(function (d) {
        return props.xScale(props.xAccessor(d).getTime());
      });
    } else {
      interpolatePath.x(function (d) {
        return props.xScale(props.xAccessor(d));
      });
    }

    var lines = props.data.map(function (series, idx) {
      return React.createElement(Line, {
        path: interpolatePath(series.values),
        stroke: props.colors(props.colorAccessor(series, idx)),
        strokeWidth: series.strokeWidth,
        strokeDashArray: series.strokeDashArray,
        seriesName: series.name,
        key: idx
      });
    });

    var voronoi = d3.voronoi().x(function (d) {
      return xScale(d.coord.x);
    }).y(function (d) {
      return yScale(d.coord.y);
    }).extent([[0, 0], [props.width, props.height]]);

    var cx = void 0;
    var cy = void 0;
    var circleFill = void 0;

    var regions = voronoi(props.value).polygons().map(function (polygon, idx) {
      var point = polygon.data;
      delete polygon.data;
      var vnode = polygon;
      // debugger;

      cx = props.xScale(point.coord.x);
      cy = props.yScale(point.coord.y);

      circleFill = props.colors(props.colorAccessor(vnode, point.seriesIndex));

      return React.createElement(VoronoiCircleContainer, {
        key: idx,
        circleFill: circleFill,
        vnode: vnode,
        hoverAnimation: props.hoverAnimation,
        cx: cx, cy: cy,
        circleRadius: props.circleRadius,
        onMouseOver: props.onMouseOver,
        dataPoint: {
          xValue: point.coord.x,
          yValue: point.coord.y,
          seriesName: point.series.name
        }
      });
    });

    return React.createElement('g', null, React.createElement('g', null, regions), React.createElement('g', null, lines));
  }
});

},{"./Line":"/home/robson/projetos/rd3/src/linechart/Line.jsx","./VoronoiCircleContainer":"/home/robson/projetos/rd3/src/linechart/VoronoiCircleContainer.jsx"}],"/home/robson/projetos/rd3/src/linechart/Line.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({

  displayName: 'Line',

  propTypes: {
    fill: PropTypes.string,
    path: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDashArray: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      stroke: '#3182bd',
      fill: 'none',
      strokeWidth: 1,
      className: 'rd3-linechart-path'
    };
  },
  render: function render() {
    var props = this.props;
    return React.createElement('path', {
      d: props.path,
      stroke: props.stroke,
      strokeWidth: props.strokeWidth,
      strokeDasharray: props.strokeDashArray,
      fill: props.fill,
      className: props.className
    });
  }
});

},{}],"/home/robson/projetos/rd3/src/linechart/LineChart.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var _require = require('../common'),
    Chart = _require.Chart,
    XAxis = _require.XAxis,
    YAxis = _require.YAxis,
    XGrid = _require.XGrid,
    YGrid = _require.YGrid,
    Tooltip = _require.Tooltip;

var DataSeries = require('./DataSeries');
var utils = require('../utils');

var _require2 = require('../mixins'),
    CartesianChartPropsMixin = _require2.CartesianChartPropsMixin,
    DefaultAccessorsMixin = _require2.DefaultAccessorsMixin,
    ViewBoxMixin = _require2.ViewBoxMixin,
    TooltipMixin = _require2.TooltipMixin;

module.exports = createReactClass({

  displayName: 'LineChart',

  propTypes: {
    circleRadius: PropTypes.number,
    hoverAnimation: PropTypes.bool,
    margins: PropTypes.object,
    data: PropTypes.array.isRequired
  },

  mixins: [CartesianChartPropsMixin, DefaultAccessorsMixin, ViewBoxMixin, TooltipMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      colors: d3.scaleOrdinal(d3.schemeCategory10),
      circleRadius: 3,
      className: 'rd3-linechart',
      hoverAnimation: true,
      margins: { top: 10, right: 20, bottom: 50, left: 45 },
      xAxisClassName: 'rd3-linechart-xaxis',
      yAxisClassName: 'rd3-linechart-yaxis',
      data: []
    };
  },

  _calculateScales: utils.calculateScales,

  render: function render() {
    var props = this.props;

    if (this.props.data && this.props.data.length < 1) {
      return null;
    }

    var _getDimensions = this.getDimensions(),
        innerWidth = _getDimensions.innerWidth,
        innerHeight = _getDimensions.innerHeight,
        trans = _getDimensions.trans,
        svgMargins = _getDimensions.svgMargins;

    var yOrient = this.getYOrient();
    var domain = props.domain || {};

    if (!Array.isArray(props.data)) {
      props.data = [props.data];
    }

    // Returns an object of flattened allValues, xValues, and yValues
    var flattenedData = utils.flattenData(props.data, props.xAccessor, props.yAccessor);

    var allValues = flattenedData.allValues;
    var xValues = flattenedData.xValues;
    var yValues = flattenedData.yValues;
    var scales = this._calculateScales(innerWidth, innerHeight, xValues, yValues, domain.x, domain.y);

    return React.createElement('span', { onMouseLeave: this.onMouseLeave }, React.createElement(Chart, {
      viewBox: this.getViewBox(),
      legend: props.legend,
      sideOffset: props.sideOffset,
      data: props.data,
      margins: props.margins,
      colors: props.colors,
      colorAccessor: props.colorAccessor,
      width: props.width,
      height: props.height,
      title: props.title,
      shouldUpdate: !this.state.changeState
    }, React.createElement('g', { transform: trans, className: props.className }, React.createElement(XGrid, {
      xAxisClassName: props.xAxisClassName,
      xAxisTickValues: props.xAxisTickValues,
      xAxisTickCount: props.xAxisTickCount,
      xAxisTickInterval: props.xAxisTickInterval,
      xAxisOffset: props.xAxisOffset,
      xScale: scales.xScale,
      xAxisLabel: props.xAxisLabel,
      xAxisLabelOffset: props.xAxisLabelOffset,
      tickFormatting: props.xAxisFormatter,
      tickStroke: props.xAxisTickStroke,
      tickTextStroke: props.xAxisTickTextStroke,
      xOrient: props.xOrient,
      yOrient: yOrient,
      data: props.data,
      margins: svgMargins,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      stroke: props.axesColor,
      gridVertical: props.gridVertical,
      gridVerticalStroke: props.gridVerticalStroke,
      gridVerticalStrokeDash: props.gridVerticalStrokeDash
    }), React.createElement(YGrid, {
      yAxisClassName: props.yAxisClassName,
      yScale: scales.yScale,
      yAxisTickValues: props.yAxisTickValues,
      yAxisTickCount: props.yAxisTickCount,
      yAxisOffset: props.yAxisOffset,
      yAxisLabel: props.yAxisLabel,
      yAxisLabelOffset: props.yAxisLabelOffset,
      tickFormatting: props.yAxisFormatter,
      tickStroke: props.yAxisTickStroke,
      tickTextStroke: props.yAxisTickTextStroke,
      xOrient: props.xOrient,
      yOrient: yOrient,
      margins: svgMargins,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      stroke: props.axesColor,
      gridHorizontal: props.gridHorizontal,
      gridHorizontalStroke: props.gridHorizontalStroke,
      gridHorizontalStrokeWidth: props.gridHorizontalStrokeWidth,
      gridHorizontalStrokeDash: props.gridHorizontalStrokeDash
    }), React.createElement(DataSeries, {
      xScale: scales.xScale,
      yScale: scales.yScale,
      xAccessor: props.xAccessor,
      yAccessor: props.yAccessor,
      hoverAnimation: props.hoverAnimation,
      circleRadius: props.circleRadius,
      data: props.data,
      value: allValues,
      interpolationType: props.interpolationType,
      colors: props.colors,
      colorAccessor: props.colorAccessor,
      width: innerWidth,
      height: innerHeight,
      onMouseOver: this.onMouseOver
    }), React.createElement(XAxis, {
      xAxisClassName: props.xAxisClassName,
      xAxisTickValues: props.xAxisTickValues,
      xAxisTickCount: props.xAxisTickCount,
      xAxisTickInterval: props.xAxisTickInterval,
      xAxisOffset: props.xAxisOffset,
      xScale: scales.xScale,
      xAxisLabel: props.xAxisLabel,
      xAxisLabelOffset: props.xAxisLabelOffset,
      tickFormatting: props.xAxisFormatter,
      tickStroke: props.xAxisTickStroke,
      tickTextStroke: props.xAxisTickTextStroke,
      xOrient: props.xOrient,
      yOrient: yOrient,
      data: props.data,
      margins: svgMargins,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      stroke: props.axesColor,
      gridVertical: props.gridVertical,
      gridVerticalStroke: props.gridVerticalStroke,
      gridVerticalStrokeDash: props.gridVerticalStrokeDash
    }), React.createElement(YAxis, {
      yAxisClassName: props.yAxisClassName,
      yScale: scales.yScale,
      yAxisTickValues: props.yAxisTickValues,
      yAxisTickCount: props.yAxisTickCount,
      yAxisOffset: props.yAxisOffset,
      yAxisLabel: props.yAxisLabel,
      yAxisLabelOffset: props.yAxisLabelOffset,
      tickFormatting: props.yAxisFormatter,
      tickStroke: props.yAxisTickStroke,
      tickTextStroke: props.yAxisTickTextStroke,
      xOrient: props.xOrient,
      yOrient: yOrient,
      margins: svgMargins,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      stroke: props.axesColor,
      gridHorizontal: props.gridHorizontal,
      gridHorizontalStroke: props.gridHorizontalStroke,
      gridHorizontalStrokeWidth: props.gridHorizontalStrokeWidth,
      gridHorizontalStrokeDash: props.gridHorizontalStrokeDash
    }))), props.showTooltip ? React.createElement(Tooltip, this.state.tooltip) : null);
  }
});

},{"../common":"/home/robson/projetos/rd3/src/common/index.js","../mixins":"/home/robson/projetos/rd3/src/mixins/index.js","../utils":"/home/robson/projetos/rd3/src/utils/index.js","./DataSeries":"/home/robson/projetos/rd3/src/linechart/DataSeries.jsx"}],"/home/robson/projetos/rd3/src/linechart/VoronoiCircle.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({

  displayName: 'VoronoiCircle',

  // TODO: Check prop types
  propTypes: {
    handleMouseOver: PropTypes.any,
    handleMouseLeave: PropTypes.any,
    voronoiPath: PropTypes.any,
    cx: PropTypes.any,
    cy: PropTypes.any,
    circleRadius: PropTypes.any,
    circleFill: PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      circleRadius: 3,
      circleFill: '#1f77b4'
    };
  },
  render: function render() {
    return React.createElement('g', null, React.createElement('path', {
      onMouseOver: this.props.handleMouseOver,
      onMouseLeave: this.props.handleMouseLeave,
      fill: 'transparent',
      stroke: '#F5F5F5',
      d: this.props.voronoiPath
    }), React.createElement('circle', {
      onMouseOver: this.props.handleMouseOver,
      onMouseLeave: this.props.handleMouseLeave,
      cx: this.props.cx,
      cy: this.props.cy,
      r: this.props.circleRadius,
      fill: this.props.circleFill,
      className: 'rd3-linechart-circle'
    }));
  }
});

},{}],"/home/robson/projetos/rd3/src/linechart/VoronoiCircleContainer.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var _require = window.ReactDOM,
    findDOMNode = _require.findDOMNode;

var shade = require('../utils').shade;
var VoronoiCircle = require('./VoronoiCircle');

module.exports = createReactClass({

  displayName: 'VornoiCircleContainer',

  propTypes: {
    circleRadius: PropTypes.any,
    circleFill: PropTypes.any,
    onMouseOver: PropTypes.any,
    dataPoint: PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      circleRadius: 3,
      circleFill: '#1f77b4',
      hoverAnimation: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      circleRadius: this.props.circleRadius,
      circleFill: this.props.circleFill
    };
  },
  _animateCircle: function _animateCircle() {
    var rect = findDOMNode(this).getElementsByTagName('circle')[0].getBoundingClientRect();
    this.props.onMouseOver.call(this, rect.right, rect.top, this.props.dataPoint);
    this.setState({
      circleRadius: this.props.circleRadius * (5 / 4),
      circleFill: shade(this.props.circleFill, 0.2)
    });
  },
  _restoreCircle: function _restoreCircle() {
    this.setState({
      circleRadius: this.props.circleRadius,
      circleFill: this.props.circleFill
    });
  },
  _drawPath: function _drawPath(d) {
    if (d === undefined) {
      return 'M Z';
    }
    return 'M' + d.join(',') + 'Z';
  },
  render: function render() {
    var props = this.props;

    // animation controller
    var handleMouseOver = void 0;
    var handleMouseLeave = void 0;
    if (props.hoverAnimation) {
      handleMouseOver = this._animateCircle;
      handleMouseLeave = this._restoreCircle;
    } else {
      handleMouseOver = handleMouseLeave = null;
    }

    return React.createElement('g', null, React.createElement(VoronoiCircle, {
      handleMouseOver: handleMouseOver,
      handleMouseLeave: handleMouseLeave,
      voronoiPath: this._drawPath(props.vnode),
      cx: props.cx,
      cy: props.cy,
      circleRadius: this.state.circleRadius,
      circleFill: this.state.circleFill
    }));
  }
});

},{"../utils":"/home/robson/projetos/rd3/src/utils/index.js","./VoronoiCircle":"/home/robson/projetos/rd3/src/linechart/VoronoiCircle.jsx"}],"/home/robson/projetos/rd3/src/linechart/index.js":[function(require,module,exports){
'use strict';

exports.LineChart = require('./LineChart');

},{"./LineChart":"/home/robson/projetos/rd3/src/linechart/LineChart.jsx"}],"/home/robson/projetos/rd3/src/mixins/CartesianChartPropsMixin.js":[function(require,module,exports){
'use strict';

var d3 = window.d3;
var PropTypes = window.PropTypes;

module.exports = {

  propTypes: {
    axesColor: PropTypes.string,
    colors: PropTypes.func,
    colorAccessor: PropTypes.func,
    data: PropTypes.array.isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    horizontal: PropTypes.bool,
    legend: PropTypes.bool,
    legendOffset: PropTypes.number,
    title: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xAccessor: PropTypes.func,
    xAxisFormatter: PropTypes.func,
    xAxisLabel: PropTypes.string,
    xAxisLabelOffset: PropTypes.number,
    xAxisTickCount: PropTypes.number,
    xAxisTickInterval: PropTypes.object,
    xAxisTickValues: PropTypes.array,
    xAxisTickStroke: PropTypes.string,
    xAxisTickTextStroke: PropTypes.string,
    xAxisOffset: PropTypes.number,
    xOrient: PropTypes.oneOf(['top', 'bottom']),
    xScale: PropTypes.func,
    yAccessor: PropTypes.func,
    yAxisFormatter: PropTypes.func,
    yAxisLabel: PropTypes.string,
    yAxisLabelOffset: PropTypes.number,
    yAxisTickCount: PropTypes.number,
    yAxisTickInterval: PropTypes.object,
    yAxisTickValues: PropTypes.array,
    yAxisTickStroke: PropTypes.string,
    yAxisTickTextStroke: PropTypes.string,
    yAxisOffset: PropTypes.number,
    yOrient: PropTypes.oneOf(['default', 'left', 'right']),
    yScale: PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      axesColor: '#000',
      // colors: d3.scaleOrdinal(d3.schemeCategory10),
      colorAccessor: function colorAccessor(d, idx) {
        return idx;
      },
      height: 200,
      horizontal: false,
      legend: false,
      legendOffset: 120,
      title: '',
      width: 400,
      // xAxisFormatter: no predefined value right now
      xAxisLabel: '',
      xAxisLabelOffset: 38,
      xAxisOffset: 0,
      // xAxisTickCount: no predefined value right now
      // xAxisTickInterval: no predefined value right now
      // xAxisTickValues: no predefined value right now
      xAxisTickStroke: '#000',
      xAxisTickTextStroke: '#000',
      xOrient: 'bottom',
      // xScale: no predefined value right now
      // yAxisFormatter: no predefined value right now
      yAxisLabel: '',
      yAxisLabelOffset: 35,
      yAxisOffset: 0,
      // yAxisTickCount: no predefined value right now
      // yAxisTickInterval: no predefined value right now
      // yAxisTickValues: no predefined value right now
      yAxisTickStroke: '#000',
      yAxisTickTextStroke: '#000',
      yOrient: 'default'
      // yScale: no predefined value right now
    };
  },
  getYOrient: function getYOrient() {
    var yOrient = this.props.yOrient;

    if (yOrient === 'default') {
      return this.props.horizontal ? 'right' : 'left';
    }

    return yOrient;
  }
};

},{}],"/home/robson/projetos/rd3/src/mixins/DefaultAccessorsMixin.js":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;

module.exports = {
  propTypes: {
    xAccessor: PropTypes.func,
    yAccessor: PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      xAccessorBar: function xAccessorBar(d) {
        return d.data.x;
      },
      yAccessorBar: function yAccessorBar(d) {
        return d[1];
      },

      xAccessor: function xAccessor(d) {
        return d.x;
      },
      yAccessor: function yAccessor(d) {
        return d.y;
      }
    };
  }
};

},{}],"/home/robson/projetos/rd3/src/mixins/TooltipMixin.js":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;

module.exports = {

  propTypes: {
    showTooltip: PropTypes.bool,
    tooltipFormat: PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      showTooltip: true,
      tooltipFormat: function tooltipFormat(d) {
        return String(d.yValue);
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      tooltip: {
        x: 0,
        y: 0,
        child: '',
        show: false
      },
      changeState: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps() {
    this.setState({
      changeState: false
    });
  },
  onMouseOver: function onMouseOver(x, y, dataPoint) {
    if (!this.props.showTooltip) {
      return;
    }
    this.setState({
      tooltip: {
        x: x,
        y: y,
        child: this.props.tooltipFormat.call(this, dataPoint),
        show: true
      },
      changeState: true
    });
  },
  onMouseLeave: function onMouseLeave() {
    if (!this.props.showTooltip) {
      return;
    }
    this.setState({
      tooltip: {
        x: 0,
        y: 0,
        child: '',
        show: false
      },
      changeState: true
    });
  }
};

},{}],"/home/robson/projetos/rd3/src/mixins/ViewBoxMixin.js":[function(require,module,exports){

'use strict';

var PropTypes = window.PropTypes;

module.exports = {

  propTypes: {
    viewBox: PropTypes.string,
    viewBoxObject: PropTypes.object
  },

  getViewBox: function getViewBox() {
    if (this.props.viewBoxObject) {
      var v = this.props.viewBoxObject;
      return [v.x, v.y, v.width, v.height].join(' ');
    } else if (this.props.viewBox) {
      return this.props.viewBox;
    }
    return null;
  },
  getDimensions: function getDimensions() {
    var props = this.props;
    var horizontal = props.horizontal,
        margins = props.margins,
        viewBoxObject = props.viewBoxObject,
        xOrient = props.xOrient;

    var yOrient = this.getYOrient();

    var width = void 0;
    var height = void 0;
    if (viewBoxObject) {
      width = viewBoxObject.width;
      height = viewBoxObject.height;
    } else {
      width = props.width;
      height = props.height;
    }

    var svgWidth = void 0;
    var svgHeight = void 0;
    var svgMargins = void 0;
    var trans = void 0;
    if (horizontal) {
      var center = width / 2;
      trans = 'rotate(90 ' + center + ' ' + center + ') ';
      svgWidth = height;
      svgHeight = width;
      svgMargins = {
        left: margins.top,
        top: margins.right,
        right: margins.bottom,
        bottom: margins.left
      };
    } else {
      trans = '';
      svgWidth = width;
      svgHeight = height;
      svgMargins = margins;
    }

    var xAxisOffset = Math.abs(props.xAxisOffset || 0);
    var yAxisOffset = Math.abs(props.yAxisOffset || 0);

    var xOffset = svgMargins.left + (yOrient === 'left' ? yAxisOffset : 0);
    var yOffset = svgMargins.top + (xOrient === 'top' ? xAxisOffset : 0);
    trans += 'translate(' + xOffset + ', ' + yOffset + ')';

    return {
      innerHeight: svgHeight - svgMargins.top - svgMargins.bottom - xAxisOffset,
      innerWidth: svgWidth - svgMargins.left - svgMargins.right - yAxisOffset,
      trans: trans,
      svgMargins: svgMargins
    };
  }
};

},{}],"/home/robson/projetos/rd3/src/mixins/index.js":[function(require,module,exports){
'use strict';

exports.CartesianChartPropsMixin = require('./CartesianChartPropsMixin');
exports.DefaultAccessorsMixin = require('./DefaultAccessorsMixin');
exports.ViewBoxMixin = require('./ViewBoxMixin');
exports.TooltipMixin = require('./TooltipMixin');

},{"./CartesianChartPropsMixin":"/home/robson/projetos/rd3/src/mixins/CartesianChartPropsMixin.js","./DefaultAccessorsMixin":"/home/robson/projetos/rd3/src/mixins/DefaultAccessorsMixin.js","./TooltipMixin":"/home/robson/projetos/rd3/src/mixins/TooltipMixin.js","./ViewBoxMixin":"/home/robson/projetos/rd3/src/mixins/ViewBoxMixin.js"}],"/home/robson/projetos/rd3/src/piechart/Arc.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var d3 = window.d3;

module.exports = createReactClass({

  displayName: 'Arc',

  propTypes: {
    fill: PropTypes.string,
    d: PropTypes.string,
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    labelTextFill: PropTypes.string,
    valueTextFill: PropTypes.string,
    sectorBorderColor: PropTypes.string,
    showInnerLabels: PropTypes.bool,
    showOuterLabels: PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      labelTextFill: 'black',
      valueTextFill: 'white',
      showInnerLabels: true,
      showOuterLabels: true
    };
  },
  renderInnerLabel: function renderInnerLabel(props, arc) {
    // make value text can be formatted
    var formattedValue = props.valueTextFormatter(props.value);
    return React.createElement('text', {
      className: 'rd3-piechart-value',
      transform: 'translate(' + arc.centroid() + ')',
      dy: '.35em',
      style: {
        shapeRendering: 'crispEdges',
        textAnchor: 'middle',
        fill: props.valueTextFill
      }
    }, formattedValue);
  },
  renderOuterLabel: function renderOuterLabel(props) {
    var rotate = 'rotate(' + (props.startAngle + props.endAngle) / 2 * (180 / Math.PI) + ')';
    var radius = props.outerRadius;
    var dist = radius + 35;
    var angle = (props.startAngle + props.endAngle) / 2;
    var x = dist * (1.2 * Math.sin(angle));
    var y = -dist * Math.cos(angle);
    var t = 'translate(' + x + ',' + y + ')';

    return React.createElement('g', null, React.createElement('line', {
      x1: '0',
      x2: '0',
      y1: -radius - 2,
      y2: -radius - 26,
      stroke: props.labelTextFill,
      transform: rotate,
      style: {
        fill: props.labelTextFill,
        strokeWidth: 2
      }
    }), React.createElement('text', {
      className: 'rd3-piechart-label',
      transform: t,
      dy: '.35em',
      style: {
        textAnchor: 'middle',
        fill: props.labelTextFill,
        shapeRendering: 'crispEdges'
      }
    }, props.label));
  },
  render: function render() {
    var props = this.props;

    var arc = d3.arc().innerRadius(props.innerRadius).outerRadius(props.outerRadius).startAngle(props.startAngle).endAngle(props.endAngle);

    return React.createElement('g', { className: 'rd3-piechart-arc' }, React.createElement('path', {
      d: arc(),
      fill: props.fill,
      stroke: props.sectorBorderColor,
      onMouseOver: props.handleMouseOver,
      onMouseLeave: props.handleMouseLeave
    }), props.showOuterLabels ? this.renderOuterLabel(props, arc) : null, props.showInnerLabels ? this.renderInnerLabel(props, arc) : null);
  }
});

},{}],"/home/robson/projetos/rd3/src/piechart/ArcContainer.jsx":[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var _require = window.ReactDOM,
    findDOMNode = _require.findDOMNode;

var shade = require('../utils').shade;
var Arc = require('./Arc');

module.exports = createReactClass({

  displayName: 'ArcContainer',

  propTypes: {
    fill: PropTypes.string,
    onMouseOver: PropTypes.func,
    onMouseLeave: PropTypes.func,
    dataPoint: PropTypes.any // TODO prop type?
  },

  getInitialState: function getInitialState() {
    return {
      // fill is named as fill instead of initialFill to avoid
      // confusion when passing down props from top parent
      fill: this.props.fill
    };
  },
  _animateArc: function _animateArc() {
    var rect = findDOMNode(this).getBoundingClientRect();
    this.props.onMouseOver.call(this, rect.right, rect.top, this.props.dataPoint);
    this.setState({
      fill: shade(this.props.fill, 0.2)
    });
  },
  _restoreArc: function _restoreArc() {
    this.props.onMouseLeave.call(this);
    this.setState({
      fill: this.props.fill
    });
  },
  render: function render() {
    var props = this.props;

    return React.createElement(Arc, _extends({}, this.props, {
      fill: this.state.fill,
      handleMouseOver: props.hoverAnimation ? this._animateArc : null,
      handleMouseLeave: props.hoverAnimation ? this._restoreArc : null
    }));
  }
});

},{"../utils":"/home/robson/projetos/rd3/src/utils/index.js","./Arc":"/home/robson/projetos/rd3/src/piechart/Arc.jsx"}],"/home/robson/projetos/rd3/src/piechart/DataSeries.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var d3 = window.d3;
var ArcContainer = require('./ArcContainer');

module.exports = createReactClass({

  displayName: 'DataSeries',

  propTypes: {
    data: PropTypes.array,
    values: PropTypes.array,
    labels: PropTypes.array,
    transform: PropTypes.string,
    innerRadius: PropTypes.number,
    radius: PropTypes.number,
    colors: PropTypes.func,
    colorAccessor: PropTypes.func,
    showInnerLabels: PropTypes.bool,
    showOuterLabels: PropTypes.bool,
    sectorBorderColor: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      data: [],
      innerRadius: 0,
      colors: d3.scaleOrdinal(d3.schemeCategory10),
      colorAccessor: function colorAccessor(d, idx) {
        return idx;
      }
    };
  },
  render: function render() {
    var props = this.props;

    var pie = d3.pie().sort(null);

    var arcData = pie(props.values);

    var arcs = arcData.map(function (arc, idx) {
      return React.createElement(ArcContainer, {
        key: idx,
        startAngle: arc.startAngle,
        endAngle: arc.endAngle,
        outerRadius: props.radius,
        innerRadius: props.innerRadius,
        labelTextFill: props.labelTextFill,
        valueTextFill: props.valueTextFill,
        valueTextFormatter: props.valueTextFormatter,
        fill: props.colors(props.colorAccessor(props.data[idx], idx)),
        value: props.values[idx],
        label: props.labels[idx],
        width: props.width,
        showInnerLabels: props.showInnerLabels,
        showOuterLabels: props.showOuterLabels,
        sectorBorderColor: props.sectorBorderColor,
        hoverAnimation: props.hoverAnimation,
        onMouseOver: props.onMouseOver,
        onMouseLeave: props.onMouseLeave,
        dataPoint: { yValue: props.values[idx], seriesName: props.labels[idx] }
      });
    });
    return React.createElement('g', { className: 'rd3-piechart-pie', transform: props.transform }, arcs);
  }
});

},{"./ArcContainer":"/home/robson/projetos/rd3/src/piechart/ArcContainer.jsx"}],"/home/robson/projetos/rd3/src/piechart/PieChart.jsx":[function(require,module,exports){
'use strict';

var d3 = window.d3;
var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var DataSeries = require('./DataSeries');

var _require = require('../common'),
    Chart = _require.Chart,
    Tooltip = _require.Tooltip;

var TooltipMixin = require('../mixins').TooltipMixin;

module.exports = createReactClass({

  displayName: 'PieChart',

  propTypes: {
    data: PropTypes.array,
    radius: PropTypes.number,
    cx: PropTypes.number,
    cy: PropTypes.number,
    labelTextFill: PropTypes.string,
    valueTextFill: PropTypes.string,
    valueTextFormatter: PropTypes.func,
    colors: PropTypes.func,
    colorAccessor: PropTypes.func,
    title: PropTypes.string,
    showInnerLabels: PropTypes.bool,
    showOuterLabels: PropTypes.bool,
    sectorBorderColor: PropTypes.string,
    hoverAnimation: PropTypes.bool
  },

  mixins: [TooltipMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      data: [],
      title: '',
      colors: d3.scaleOrdinal(d3.schemeCategory10),
      colorAccessor: function colorAccessor(d, idx) {
        return idx;
      },
      valueTextFormatter: function valueTextFormatter(val) {
        return val + '%';
      },
      hoverAnimation: true
    };
  },
  render: function render() {
    var props = this.props;

    if (props.data && props.data.length < 1) {
      return null;
    }
    var transform = 'translate(' + (props.cx || props.width / 2) + ',' + (props.cy || props.height / 2) + ')';

    var values = props.data.map(function (item) {
      return item.value;
    });
    var labels = props.data.map(function (item) {
      return item.label;
    });

    return React.createElement('span', null, React.createElement(Chart, {
      width: props.width,
      height: props.height,
      title: props.title,
      shouldUpdate: !this.state.changeState
    }, React.createElement('g', { className: 'rd3-piechart' }, React.createElement(DataSeries, {
      labelTextFill: props.labelTextFill,
      valueTextFill: props.valueTextFill,
      valueTextFormatter: props.valueTextFormatter,
      data: props.data,
      values: values,
      labels: labels,
      colors: props.colors,
      colorAccessor: props.colorAccessor,
      transform: transform,
      width: props.width,
      height: props.height,
      radius: props.radius,
      innerRadius: props.innerRadius,
      showInnerLabels: props.showInnerLabels,
      showOuterLabels: props.showOuterLabels,
      sectorBorderColor: props.sectorBorderColor,
      hoverAnimation: props.hoverAnimation,
      onMouseOver: this.onMouseOver,
      onMouseLeave: this.onMouseLeave
    }))), props.showTooltip ? React.createElement(Tooltip, this.state.tooltip) : null);
  }
});

},{"../common":"/home/robson/projetos/rd3/src/common/index.js","../mixins":"/home/robson/projetos/rd3/src/mixins/index.js","./DataSeries":"/home/robson/projetos/rd3/src/piechart/DataSeries.jsx"}],"/home/robson/projetos/rd3/src/piechart/index.js":[function(require,module,exports){
'use strict';

exports.PieChart = require('./PieChart');

},{"./PieChart":"/home/robson/projetos/rd3/src/piechart/PieChart.jsx"}],"/home/robson/projetos/rd3/src/scatterchart/DataSeries.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var d3 = window.d3;
var VoronoiCircleContainer = require('./VoronoiCircleContainer');

module.exports = createReactClass({

  displayName: 'DataSeries',

  propTypes: {
    circleRadius: PropTypes.number.isRequired,
    className: PropTypes.string,
    colors: PropTypes.func.isRequired,
    colorAccessor: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    height: PropTypes.number.isRequired,
    xAccessor: PropTypes.func.isRequired,
    xScale: PropTypes.func.isRequired,
    yAccessor: PropTypes.func.isRequired,
    yScale: PropTypes.func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'rd3-scatterchart-dataseries'
    };
  },
  render: function render() {
    var props = this.props;
    var xScale = props.xScale;
    var yScale = props.yScale;
    var xAccessor = props.xAccessor;
    var yAccessor = props.yAccessor;

    var voronoi = d3.voronoi().x(function (d) {
      return xScale(d.coord.x);
    }).y(function (d) {
      return yScale(d.coord.y);
    }).extent([[0, 0], [props.width, props.height]]);

    var regions = voronoi(props.data).polygons().map(function (polygon, idx) {
      var point = polygon.data;
      delete polygon.data;

      var vnode = polygon;
      var coord = point.coord;

      var x = xAccessor(coord);
      var y = yAccessor(coord);

      // The circle coordinates
      var cx = void 0;
      var cy = void 0;

      if (Object.prototype.toString.call(x) === '[object Date]') {
        cx = xScale(x.getTime());
      } else {
        cx = xScale(x);
      }

      if (Object.prototype.toString.call(y) === '[object Date]') {
        cy = yScale(y.getTime());
      } else {
        cy = yScale(y);
      }

      return React.createElement(VoronoiCircleContainer, {
        key: idx,
        circleFill: props.colors(props.colorAccessor(point.d, point.seriesIndex)),
        circleRadius: props.circleRadius,
        cx: cx,
        cy: cy,
        vnode: vnode,
        onMouseOver: props.onMouseOver,
        dataPoint: { xValue: x, yValue: y, seriesName: point.series.name }
      });
    });

    return React.createElement('g', {
      className: props.className
    }, regions);
  }
});

},{"./VoronoiCircleContainer":"/home/robson/projetos/rd3/src/scatterchart/VoronoiCircleContainer.jsx"}],"/home/robson/projetos/rd3/src/scatterchart/ScatterChart.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var _require = require('../common'),
    Chart = _require.Chart,
    XAxis = _require.XAxis,
    YAxis = _require.YAxis,
    XGrid = _require.XGrid,
    YGrid = _require.YGrid,
    Tooltip = _require.Tooltip;

var DataSeries = require('./DataSeries');
var utils = require('../utils');

var _require2 = require('../mixins'),
    CartesianChartPropsMixin = _require2.CartesianChartPropsMixin,
    DefaultAccessorsMixin = _require2.DefaultAccessorsMixin,
    ViewBoxMixin = _require2.ViewBoxMixin,
    TooltipMixin = _require2.TooltipMixin;

module.exports = createReactClass({

  displayName: 'ScatterChart',

  propTypes: {
    circleRadius: PropTypes.number,
    className: PropTypes.string,
    hoverAnimation: PropTypes.bool,
    margins: PropTypes.object,
    xAxisClassName: PropTypes.string,
    yAxisClassName: PropTypes.string
  },

  mixins: [CartesianChartPropsMixin, DefaultAccessorsMixin, ViewBoxMixin, TooltipMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      colors: d3.scaleOrdinal(d3.schemeBlues[6].reverse()),
      circleRadius: 3,
      className: 'rd3-scatterchart',
      hoverAnimation: true,
      margins: { top: 10, right: 20, bottom: 50, left: 45 },
      xAxisClassName: 'rd3-scatterchart-xaxis',
      yAxisClassName: 'rd3-scatterchart-yaxis'
    };
  },

  _calculateScales: utils.calculateScales,

  render: function render() {
    var props = this.props;
    var data = props.data;

    if (!data || data.length < 1) {
      return null;
    }

    var _getDimensions = this.getDimensions(),
        innerWidth = _getDimensions.innerWidth,
        innerHeight = _getDimensions.innerHeight,
        trans = _getDimensions.trans,
        svgMargins = _getDimensions.svgMargins;

    var yOrient = this.getYOrient();
    var domain = props.domain || {};

    // Returns an object of flattened allValues, xValues, and yValues
    var flattenedData = utils.flattenData(data, props.xAccessor, props.yAccessor);

    var allValues = flattenedData.allValues;
    var xValues = flattenedData.xValues;
    var yValues = flattenedData.yValues;

    var scales = this._calculateScales(innerWidth, innerHeight, xValues, yValues, domain.x, domain.y);
    var xScale = scales.xScale;
    var yScale = scales.yScale;

    return React.createElement('span', { onMouseLeave: this.onMouseLeave }, React.createElement(Chart, {
      colors: props.colors,
      colorAccessor: props.colorAccessor,
      data: data,
      height: props.height,
      legend: props.legend,
      sideOffset: props.sideOffset,
      margins: props.margins,
      title: props.title,
      viewBox: this.getViewBox(),
      width: props.width,
      shouldUpdate: !this.state.changeState
    }, React.createElement('g', {
      className: props.className,
      transform: trans
    }, React.createElement(XGrid, {
      xAxisClassName: props.xAxisClassName,
      xAxisTickValues: props.xAxisTickValues,
      xAxisTickCount: props.xAxisTickCount,
      xAxisTickInterval: props.xAxisTickInterval,
      xAxisOffset: props.xAxisOffset,
      xScale: scales.xScale,
      xAxisLabel: props.xAxisLabel,
      xAxisLabelOffset: props.xAxisLabelOffset,
      tickFormatting: props.xAxisFormatter,
      tickStroke: props.xAxisTickStroke,
      tickTextStroke: props.xAxisTickTextStroke,
      xOrient: props.xOrient,
      yOrient: yOrient,
      data: props.data,
      margins: svgMargins,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      stroke: props.axesColor,
      gridVertical: props.gridVertical,
      gridVerticalStroke: props.gridVerticalStroke,
      gridVerticalStrokeDash: props.gridVerticalStrokeDash
    }), React.createElement(YGrid, {
      yAxisClassName: props.yAxisClassName,
      yScale: scales.yScale,
      yAxisTickValues: props.yAxisTickValues,
      yAxisTickCount: props.yAxisTickCount,
      yAxisOffset: props.yAxisOffset,
      yAxisLabel: props.yAxisLabel,
      yAxisLabelOffset: props.yAxisLabelOffset,
      tickFormatting: props.yAxisFormatter,
      tickStroke: props.yAxisTickStroke,
      tickTextStroke: props.yAxisTickTextStroke,
      xOrient: props.xOrient,
      yOrient: yOrient,
      margins: svgMargins,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      stroke: props.axesColor,
      gridHorizontal: props.gridHorizontal,
      gridHorizontalStroke: props.gridHorizontalStroke,
      gridHorizontalStrokeWidth: props.gridHorizontalStrokeWidth,
      gridHorizontalStrokeDash: props.gridHorizontalStrokeDash
    }), React.createElement(DataSeries, {
      circleRadius: props.circleRadius,
      colors: props.colors,
      colorAccessor: props.colorAccessor,
      data: allValues,
      height: innerHeight,
      hoverAnimation: props.hoverAnimation,
      width: innerWidth,
      xAccessor: function xAccessor(coord) {
        return coord.x;
      },
      xScale: xScale,
      yAccessor: function yAccessor(coord) {
        return coord.y;
      },
      yScale: yScale,
      onMouseOver: this.onMouseOver
    }), React.createElement(XAxis, {
      data: data,
      height: innerHeight,
      horizontalChart: props.horizontal,
      margins: svgMargins,
      stroke: props.axesColor,
      tickFormatting: props.xAxisFormatter,
      tickStroke: props.xAxisTickStroke,
      tickTextStroke: props.xAxisTickTextStroke,
      width: innerWidth,
      xAxisClassName: props.xAxisClassName,
      xAxisLabel: props.xAxisLabel,
      xAxisLabelOffset: props.xAxisLabelOffset,
      xAxisOffset: props.xAxisOffset,
      xAxisTickInterval: props.xAxisTickInterval,
      xAxisTickValues: props.xAxisTickValues,
      xOrient: props.xOrient,
      yOrient: yOrient,
      xScale: xScale,
      gridVertical: props.gridVertical,
      gridVerticalStroke: props.gridVerticalStroke,
      gridVerticalStrokeDash: props.gridVerticalStrokeDash
    }), React.createElement(YAxis, {
      data: data,
      width: innerWidth,
      height: innerHeight,
      horizontalChart: props.horizontal,
      margins: svgMargins,
      stroke: props.axesColor,
      tickFormatting: props.yAxisFormatter,
      tickStroke: props.yAxisTickStroke,
      tickTextStroke: props.yAxisTickTextStroke,
      yAxisClassName: props.yAxisClassName,
      yAxisLabel: props.yAxisLabel,
      yAxisLabelOffset: props.yAxisLabelOffset,
      yAxisOffset: props.yAxisOffset,
      yAxisTickValues: props.yAxisTickValues,
      yAxisTickCount: props.yAxisTickCount,
      yScale: yScale,
      xOrient: props.xOrient,
      yOrient: yOrient,
      gridHorizontal: props.gridHorizontal,
      gridHorizontalStroke: props.gridHorizontalStroke,
      gridHorizontalStrokeDash: props.gridHorizontalStrokeDash
    }))), props.showTooltip ? React.createElement(Tooltip, this.state.tooltip) : null);
  }
});

},{"../common":"/home/robson/projetos/rd3/src/common/index.js","../mixins":"/home/robson/projetos/rd3/src/mixins/index.js","../utils":"/home/robson/projetos/rd3/src/utils/index.js","./DataSeries":"/home/robson/projetos/rd3/src/scatterchart/DataSeries.jsx"}],"/home/robson/projetos/rd3/src/scatterchart/VoronoiCircle.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({

  displayName: 'VoronoiCircle',

  propTypes: {
    circleFill: PropTypes.string.isRequired,
    circleRadius: PropTypes.number.isRequired,
    className: PropTypes.string,
    cx: PropTypes.number.isRequired,
    cy: PropTypes.number.isRequired,
    handleMouseLeave: PropTypes.func.isRequired,
    handleMouseOver: PropTypes.func.isRequired,
    pathFill: PropTypes.string,
    voronoiPath: PropTypes.string.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'rd3-scatterchart-voronoi-circle',
      pathFill: 'transparent'
    };
  },
  render: function render() {
    var props = this.props;

    return React.createElement('g', null, React.createElement('path', {
      d: props.voronoiPath,
      fill: props.pathFill,
      stroke: '#DCDCDC',
      onMouseLeave: props.handleMouseLeave,
      onMouseOver: props.handleMouseOver
    }), React.createElement('circle', {
      cx: props.cx,
      cy: props.cy,
      className: props.className,
      fill: props.circleFill,
      onMouseLeave: props.handleMouseLeave,
      onMouseOver: props.handleMouseOver,
      r: props.circleRadius
    }));
  }
});

},{}],"/home/robson/projetos/rd3/src/scatterchart/VoronoiCircleContainer.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var _require = window.ReactDOM,
    findDOMNode = _require.findDOMNode;

var shade = require('../utils').shade;
var VoronoiCircle = require('./VoronoiCircle');

module.exports = createReactClass({

  displayName: 'VornoiCircleContainer',

  propTypes: {
    circleFill: PropTypes.string,
    circleRadius: PropTypes.number,
    circleRadiusMultiplier: PropTypes.number,
    className: PropTypes.string,
    hoverAnimation: PropTypes.bool,
    shadeMultiplier: PropTypes.number,
    vnode: PropTypes.array.isRequired,
    onMouseOver: PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      circleFill: '#1f77b4',
      circleRadius: 3,
      circleRadiusMultiplier: 1.25,
      className: 'rd3-scatterchart-voronoi-circle-container',
      hoverAnimation: true,
      shadeMultiplier: 0.2
    };
  },
  getInitialState: function getInitialState() {
    return {
      circleFill: this.props.circleFill,
      circleRadius: this.props.circleRadius
    };
  },
  _animateCircle: function _animateCircle() {
    var props = this.props;

    if (props.hoverAnimation) {
      var rect = findDOMNode(this).getElementsByTagName('circle')[0].getBoundingClientRect();
      this.props.onMouseOver.call(this, rect.right, rect.top, props.dataPoint);
      this.setState({
        circleFill: shade(props.circleFill, props.shadeMultiplier),
        circleRadius: props.circleRadius * props.circleRadiusMultiplier
      });
    }
  },
  _restoreCircle: function _restoreCircle() {
    var props = this.props;
    if (props.hoverAnimation) {
      this.setState({
        circleFill: props.circleFill,
        circleRadius: props.circleRadius
      });
    }
  },
  _drawPath: function _drawPath(d) {
    if (typeof d === 'undefined') {
      return 'M Z';
    }

    return 'M' + d.join(',') + 'Z';
  },
  render: function render() {
    var props = this.props;
    var state = this.state;

    return React.createElement('g', {
      className: props.className
    }, React.createElement(VoronoiCircle, {
      circleFill: state.circleFill,
      circleRadius: state.circleRadius,
      cx: props.cx,
      cy: props.cy,
      handleMouseLeave: this._restoreCircle,
      handleMouseOver: this._animateCircle,
      voronoiPath: this._drawPath(props.vnode)
    }));
  }
});

},{"../utils":"/home/robson/projetos/rd3/src/utils/index.js","./VoronoiCircle":"/home/robson/projetos/rd3/src/scatterchart/VoronoiCircle.jsx"}],"/home/robson/projetos/rd3/src/scatterchart/index.js":[function(require,module,exports){
'use strict';

exports.ScatterChart = require('./ScatterChart');

},{"./ScatterChart":"/home/robson/projetos/rd3/src/scatterchart/ScatterChart.jsx"}],"/home/robson/projetos/rd3/src/treemap/Cell.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

module.exports = createReactClass({

  displayName: 'Cell',

  propTypes: {
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    label: PropTypes.string
  },

  render: function render() {
    var props = this.props;

    var textStyle = {
      textAnchor: 'middle',
      fill: props.textColor,
      fontSize: props.fontSize,
      fontWeight: '600'
    };

    var t = 'translate(' + props.x + ', ' + props.y + '  )';

    return React.createElement('g', { transform: t }, React.createElement('rect', {
      className: 'rd3-treemap-cell',
      width: props.width,
      height: props.height,
      fill: props.fill,
      onMouseOver: props.handleMouseOver,
      onMouseLeave: props.handleMouseLeave
    }), React.createElement('text', {
      x: props.width / 2,
      y: props.height / 2,
      dy: '.35em',
      style: textStyle,
      className: 'rd3-treemap-cell-text'
    }, props.label));
  }
});

},{}],"/home/robson/projetos/rd3/src/treemap/CellContainer.jsx":[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var shade = require('../utils').shade;
var Cell = require('./Cell');

module.exports = createReactClass({

  displayName: 'CellContainer',

  propTypes: {
    fill: PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      // fill is named as fill instead of initialFill to avoid
      // confusion when passing down props from top parent
      fill: this.props.fill
    };
  },
  _animateCell: function _animateCell() {
    this.setState({
      fill: shade(this.props.fill, 0.05)
    });
  },
  _restoreCell: function _restoreCell() {
    this.setState({
      fill: this.props.fill
    });
  },
  render: function render() {
    var props = this.props;
    return React.createElement(Cell, _extends({}, props, {
      fill: this.state.fill,
      handleMouseOver: props.hoverAnimation ? this._animateCell : null,
      handleMouseLeave: props.hoverAnimation ? this._restoreCell : null
    }));
  }
});

},{"../utils":"/home/robson/projetos/rd3/src/utils/index.js","./Cell":"/home/robson/projetos/rd3/src/treemap/Cell.jsx"}],"/home/robson/projetos/rd3/src/treemap/DataSeries.jsx":[function(require,module,exports){
'use strict';

var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var d3 = window.d3;
var CellContainer = require('./CellContainer');

module.exports = createReactClass({

  displayName: 'DataSeries',

  propTypes: {
    data: PropTypes.array,
    colors: PropTypes.func,
    colorAccessor: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      data: [],
      colors: d3.scaleOrdinal(d3.schemePastel2),
      colorAccessor: function colorAccessor(d, idx) {
        return idx;
      }
    };
  },
  render: function render() {
    var props = this.props;

    var treemap = d3.treemap().size([props.width, props.height]);

    // stratify the data: reformatting for d3.js
    var root = d3.stratify().id(function (d) {
      return d.label;
    }).parentId(function (d) {
      return d.parent;
    })(props.data);

    root.sum(function (d) {
      return +d.value;
    });

    var tree = treemap(root);

    var cells = tree.children.map(function (node, idx) {
      return React.createElement(CellContainer, {
        key: idx,
        x: node.x0,
        y: node.y0,
        width: node.x1 - node.x0,
        height: node.y1 - node.y0,
        fill: props.colors(props.colorAccessor(node, idx)),
        label: node.data.label,
        fontSize: props.fontSize,
        textColor: props.textColor,
        hoverAnimation: props.hoverAnimation
      });
    }, this);

    return React.createElement('g', { transform: props.transform, className: 'treemap' }, cells);
  }
});

},{"./CellContainer":"/home/robson/projetos/rd3/src/treemap/CellContainer.jsx"}],"/home/robson/projetos/rd3/src/treemap/Treemap.jsx":[function(require,module,exports){
'use strict';

var d3 = window.d3;
var PropTypes = window.PropTypes;
var React = window.React;
var createReactClass = window.createReactClass;

var Chart = require('../common').Chart;
var DataSeries = require('./DataSeries');

module.exports = createReactClass({

  displayName: 'Treemap',

  propTypes: {
    data: PropTypes.array,
    margins: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string,
    textColor: PropTypes.string,
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    colors: PropTypes.func,
    colorAccessor: PropTypes.func,
    hoverAnimation: PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      hoverAnimation: true,
      data: [],
      width: 400,
      heigth: 200,
      title: '',
      textColor: '#f7f7f7',
      fontSize: '0.85em',
      // colors: d3.scaleOrdinal(d3.schemeCategory10),
      colorAccessor: function colorAccessor(d, idx) {
        return idx;
      }
    };
  },
  render: function render() {
    var props = this.props;
    if (this.props.data && this.props.data.length < 1) {
      return null;
    }

    return React.createElement(Chart, {
      title: props.title,
      width: props.width,
      height: props.height
    }, React.createElement('g', { className: 'rd3-treemap' }, React.createElement(DataSeries, {
      data: props.data,
      width: props.width,
      height: props.height,
      colors: props.colors,
      colorAccessor: props.colorAccessor,
      textColor: props.textColor,
      fontSize: props.fontSize,
      hoverAnimation: props.hoverAnimation
    })));
  }
});

},{"../common":"/home/robson/projetos/rd3/src/common/index.js","./DataSeries":"/home/robson/projetos/rd3/src/treemap/DataSeries.jsx"}],"/home/robson/projetos/rd3/src/treemap/index.js":[function(require,module,exports){
'use strict';

exports.Treemap = require('./Treemap');

},{"./Treemap":"/home/robson/projetos/rd3/src/treemap/Treemap.jsx"}],"/home/robson/projetos/rd3/src/utils/index.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var d3 = window.d3;

exports.calculateScales = function (width, height, xValues, yValues) {
  var xDomain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var yDomain = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

  var xScale = void 0;
  if (xValues.length > 0 && Object.prototype.toString.call(xValues[0]) === '[object Date]') {
    xScale = d3.scaleTime().range([0, width]);
  } else {
    xScale = d3.scaleLinear().range([0, width]);
  }
  var xdomain = d3.extent(xValues);
  if (xDomain[0] !== undefined && xDomain[0] !== null) xdomain[0] = xDomain[0];
  if (xDomain[1] !== undefined && xDomain[1] !== null) xdomain[1] = xDomain[1];
  xScale.domain(xdomain);

  var yScale = void 0;
  if (yValues.length > 0 && Object.prototype.toString.call(yValues[0]) === '[object Date]') {
    yScale = d3.scaleTime().range([height, 0]);
  } else {
    yScale = d3.scaleLinear().range([height, 0]);
  }

  var ydomain = d3.extent(yValues);
  if (yDomain[0] !== undefined && yDomain[0] !== null) ydomain[0] = yDomain[0];
  if (yDomain[1] !== undefined && yDomain[1] !== null) ydomain[1] = yDomain[1];
  yScale.domain(ydomain);

  return {
    xScale: xScale,
    yScale: yScale
  };
};

// debounce from Underscore.js
// MIT License: https://raw.githubusercontent.com/jashkenas/underscore/master/LICENSE
// Copyright (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative
// Reporters & Editors
exports.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  return function debounce() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

exports.flattenData = function (data, xAccessor, yAccessor) {
  var allValues = [];
  var xValues = [];
  var yValues = [];
  var coincidentCoordinateCheck = {};

  data.forEach(function (series, i) {
    series.values.forEach(function (item, j) {
      var x = xAccessor(item);

      // Check for NaN since d3's Voronoi cannot handle NaN values
      // Go ahead and Proceed to next iteration since we don't want NaN
      // in allValues or in xValues or yValues
      if (isNaN(x)) {
        return;
      }
      xValues.push(x);

      var y = yAccessor(item);
      // when yAccessor returns an object (as in the case of candlestick)
      // iterate over the keys and push all the values to yValues array
      var yNode = void 0;
      if ((typeof y === 'undefined' ? 'undefined' : _typeof(y)) === 'object' && Object.keys(y).length > 0) {
        Object.keys(y).forEach(function (key) {
          // Check for NaN since d3's Voronoi cannot handle NaN values
          // Go ahead and Proceed to next iteration since we don't want NaN
          // in allValues or in xValues or yValues
          if (isNaN(y[key])) {
            return;
          }
          yValues.push(y[key]);
          // if multiple y points are to be plotted for a single x
          // as in the case of candlestick, default to y value of 0
          yNode = 0;
        });
      } else {
        // Check for NaN since d3's Voronoi cannot handle NaN values
        // Go ahead and Proceed to next iteration since we don't want NaN
        // in allValues or in xValues or yValues
        if (isNaN(y)) {
          return;
        }
        yValues.push(y);
        yNode = y;
      }

      var xyCoords = x + '-' + yNode;
      if (coincidentCoordinateCheck.hasOwnProperty(xyCoords)) {
        // Proceed to next iteration if the x y pair already exists
        // d3's Voronoi cannot handle NaN values or coincident coords
        // But we push them into xValues and yValues above because
        // we still may handle them there (labels, etc.)
        return;
      }
      coincidentCoordinateCheck[xyCoords] = '';

      var pointItem = {
        coord: {
          x: x,
          y: yNode
        },
        d: item,
        id: series.name + j,
        series: series,
        seriesIndex: i
      };
      allValues.push(pointItem);
    });
  });

  return { allValues: allValues, xValues: xValues, yValues: yValues };
};

exports.shade = function (hex, percent) {
  var red = void 0;
  var green = void 0;
  var blue = void 0;
  var min = Math.min;
  var round = Math.round;
  if (hex.length !== 7) {
    return hex;
  }
  var number = parseInt(hex.slice(1), 16);
  var R = number >> 16;
  var G = number >> 8 & 0xFF;
  var B = number & 0xFF;
  red = min(255, round((1 + percent) * R)).toString(16);
  if (red.length === 1) red = '0' + red;
  green = min(255, round((1 + percent) * G)).toString(16);
  if (green.length === 1) green = '0' + green;
  blue = min(255, round((1 + percent) * B)).toString(16);
  if (blue.length === 1) blue = '0' + blue;
  return '#' + red + green + blue;
};

},{}]},{},["/home/robson/projetos/rd3/docs/examples/main.js"])("/home/robson/projetos/rd3/docs/examples/main.js")
});

//# sourceMappingURL=react-d3.js.map
