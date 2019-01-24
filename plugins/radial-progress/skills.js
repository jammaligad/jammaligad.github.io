jQuery("#example1").radialProgress("init", {
  'size': 100,
  'fill': 5
}).radialProgress("to", {'perc': 100, 'time': 10000});

// NEEDS TO BE IN ORDER TO SHOW IN HTML 

jQuery("#python").radialPieChart("init", {
  'font-size': 13,
  'fill': 20,
  'data': [
    {'color': "#333333", 'perc': 60},
    {'color': "#bfbfbf", 'perc': 40},
  ]
});

jQuery("#java").radialPieChart("init", {
  'font-size': 13,
  'fill': 20,
  'data': [
    {'color': "#333333", 'perc': 50},
    {'color': "#bfbfbf", 'perc': 60},
  ]
});

jQuery("#js").radialPieChart("init", {
  'font-size': 13,
  'fill': 20,
  'data': [
    {'color': "#333333", 'perc': 35},
    {'color': "#bfbfbf", 'perc': 65},
  ]
});

jQuery("#bootstrap").radialPieChart("init", {
  'font-size': 13,
  'fill': 20,
  'data': [
    {'color': "#333333", 'perc': 75},
    {'color': "#bfbfbf", 'perc': 25},
  ]
});

jQuery("#reactjs").radialPieChart("init", {
  'font-size': 13,
  'fill': 20,
  'data': [
    {'color': "#333333", 'perc': 0},
    {'color': "#bfbfbf", 'perc': 100},
  ]
});

jQuery("#django").radialPieChart("init", {
  'font-size': 13,
  'fill': 20,
  'data': [
    {'color': "#333333", 'perc': 25},
    {'color': "#bfbfbf", 'perc': 75},
  ]
});

jQuery("#ps").radialPieChart("init", {
  'font-size': 13,
  'fill': 20,
  'data': [
    {'color': "#333333", 'perc': 60},
    {'color': "#bfbfbf", 'perc': 40},
  ]
});



