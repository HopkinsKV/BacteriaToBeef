d3.json("samples.json").then(function(data){
  console.log(data);
});

// weekly washing frequency for all entries
d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person => person.wfreq);
  console.log(wfreq);
});

// same as above, but in desc order
d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
  console.log(wfreq);
});

//same as above, but filter out nulls
d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
  filteredWfreq = wfreq.filter(element => element !=
null);
  console.log(filteredWfreq);
});


// Print all the metadata of the first person in the samples.json() dataset (ID 940).
d3.json("samples.json").then(function(data){
  firstPerson = data.metadata[0];
  Object.entries(firstPerson).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});