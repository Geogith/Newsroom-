// // Create a map object
// var myMap = L.map("map", {
//   center: [37.09, -95.71],
//   zoom: 5
// });

// // Add a tile layer
// L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "streets-v11",
//   accessToken: API_KEY
// }).addTo(myMap);

// // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map

// cities.forEach(function(city){
//   L.marker(city.location)
//     .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Population: ${city.population} </h3>`)
//     .addTo(myMap);
// })