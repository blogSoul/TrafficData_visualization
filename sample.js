d3.csv("result1.csv", function(data) {
  var main = [];
  var count = [];
  var number = [];

  for(var i=0; i< data.length;i ++){
    main.push([data[i].date, data[i].count])
    count.push(data[i].count)
    number.push(data[i].number)
  }

  console.log(main)

  var svgWidth = 320;
  var svgHeight = 240;
  var margin = svgWidth/(count.length - 1);

  var x = d3.time.scale().range([0,svgWidth]);



});
