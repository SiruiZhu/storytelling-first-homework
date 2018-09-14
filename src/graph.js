/* global d3 */

var datapoints = [
  { name: 'New York', population: 8 },
  { name: 'Los Angeles', population: 3.9 },
  { name: 'Washington, DC', population: 0.7 }
]

var xPositionScale = d3
  .scaleLinear()
  .domain([0, 8])
  .range([0, 200])
var svg = d3
  .select('body')
  .append('svg')
  .attr('height', 100)
  .attr('width', 400)

svg
  .selectAll('circle')
  .data(datapoints)
  .enter()
  .append('circle')
  .attr('r', 10)
  .attr('cx', function(d) {
    return xPositionScale(d.population)
  })
  .attr('cy', function(d, i) {
    return 100 * i
  })
