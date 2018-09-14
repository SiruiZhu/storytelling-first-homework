import * as d3 from 'd3'
;(function() {
  var margin = { top: 50, right: 50, bottom: 50, left: 50 }

  var width = 400 - margin.left - margin.right

  var height = 200 - margin.top - margin.bottom

  // Delete this line, redo it.
  var svg = d3
    .select('#chart7')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // DO NOT CHANGE THIS SECTION
  svg
    .append('rect')
    .attr('height', 100)
    .attr('width', 300)
    .attr('x', 0)
    .attr('y', 0)
  // DO NOT CHANGE THIS SECTION
})()
