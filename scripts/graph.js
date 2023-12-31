var width = 700;
var height = 600;

var svg = d3.select("#sketch").append("svg").attr("height",height).attr("width",width);

var data = [{ "name": "Electricidad", "group": 1 }, 
            { "name": "Renovables", "group": 1 },
            { "name": "Programación", "group": 1 }, 
            { "name": "Data", "group": 1 },
            { "name": "Python", "group": 2 }, 
            { "name": "R", "group": 2 }, 
            { "name": "SQL", "group": 2 }, 
            { "name": "C#", "group": 2 }, 
            { "name": "Javascript", "group": 2 },
            { "name": "Power BI", "group": 3 },
            { "name": "PowerFactory", "group": 3 },]


var color = d3.scaleOrdinal()
      .domain([1, 2, 3])
      .range([ "#be95ff", "#78a9ff", "#08bdba"])

var circles = svg.append("g")
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 60)
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .style("fill", function(d){ return color(d.group)})
      .style("fill-opacity", 0.9)
      .attr("stroke", "none");


var textArray = svg.append("text")
      .selectAll("tspan")
      .data(data)
      .enter()
      .append("tspan")
      .attr("x", width / 2)
      .attr("y", height / 2)
      .attr("fill", "black")
      .attr("dominant-baseline","middle")
      .attr("text-anchor","middle")
      .attr("font-size","16")
      .text(function(d) { return d.name; });


var simulation = d3.forceSimulation()
      .force("center", d3.forceCenter().x(width / 2).y(height / 2))
      .force("charge", d3.forceManyBody().strength(0.5))
      .force("collide", d3.forceCollide().strength(0.01).radius(75).iterations(1))


simulation
      .nodes(data)
      .on("tick", function(d){
            circles
            .attr("cx", function(d){ return d.x; })
            .attr("cy", function(d){ return d.y; })

            textArray
            .attr("x", function(d){ return d.x; })
            .attr("y", function(d){ return d.y; })            
      });
