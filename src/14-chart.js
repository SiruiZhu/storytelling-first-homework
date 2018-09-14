import * as d3 from 'd3'
;(function() {
  // Build your SVG here
  // using all of that cut-and-paste magic
  var margin = { top: 50, right: 50, bottom: 50, left: 50 }

  var width = 800 - margin.left - margin.right

  var height = 600 - margin.top - margin.bottom

  var svg = d3
    .select('#chart14')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // Build your scales here
  var yPositionScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([height, 0])

  var colorScale = d3
    .scaleOrdinal()
    .domain(['dog', 'cow', 'cat'])
    .range(['#feebe2', '#fbb4b9', '#f768a1'])

  var xPositionScale = d3.scaleBand().range([0, width])

  d3.csv(require('./eating-data.csv'))
    .then(ready)
    .catch(function(err) {
      console.log('Failed with', err)
    })

  function ready(datapoints) {
    // Add and style your marks here
    var names = datapoints.map(function(d) {
      return d.name
    })

    xPositionScale.domain(names)

    svg
      .selectAll('rect')
      .data(datapoints)
      .enter()
      .append('rect')
      .attr('x', function(d) {
        return xPositionScale(d.name)
      })
      .attr('y', function(d) {
        return yPositionScale(d.hamburgers)
      })
      .attr('fill', function(d) {
        return colorScale(d.animal)
      })
      .attr('width', function(d) {
        return xPositionScale.bandwidth()
      })
      .attr('height', function(d) {
        return height - yPositionScale(d.hamburgers)
      })

    var yAxis = d3.axisLeft(yPositionScale)
    svg
      .append('g')
      .attr('class', 'axis y-axis')
      .call(yAxis)

    var xAxis = d3.axisBottom(xPositionScale)
    svg
      .append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
  }
})()
