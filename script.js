//Get all the countries from Asia continent /region using Filter function

var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data1 = request1.response;
  var results = JSON.parse(data1);
  var asianCountries = results.filter((country1) => {
    return country1.region === "Asia";
  });
  var asianCountryNames = asianCountries.map((country) => country.name.common);
  console.log(asianCountryNames);
};

// Get all the countries with a population of less than 2 lakhs using Filter function

var request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function () {
  var data2 = request2.response;
  var result2 = JSON.parse(data2);
  var countriesWithLowPopulation = result2.filter((country2) => {
    return country2.population < 200000;
  });
  var countryNames = countriesWithLowPopulation.map(
    (country) => country.name.common
  );
  console.log(countryNames);
};

// Print the following details name, capital, flag, using forEach function

var request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v3.1/all", true);
request3.send();
request3.onload = function () {
  var data3 = request3.response;
  var result4 = JSON.parse(data3);
  result4.forEach((country) => {
    var name = country.name.common;
    var capital = Array.isArray(country.capital) ? country.capital[0] : "N/A";
    var flag = country.flags.png;
    console.log("Name: " + name);
    console.log("Capital: " + capital);
    console.log("Flag: " + flag);
  });
};

// Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = () => {
  var data1 = request.response;
  var result = JSON.parse(data1);
  var totalPopulation = result.reduce(
    (accumulator, country) => accumulator + (country.population || 0),
    0
  );
  console.log("Total Population: " + totalPopulation);
};

//  Print the country that uses US dollars as currency.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = () => {
  var data = request.response;
  var result = JSON.parse(data);
  var USD = result.filter((country) => {
    return country.currencies && country.currencies.USD;
  });
  var countryNames = USD.map((country) => country.name.common);
  console.log("Countries that use US dollars as currency:");
  console.log(countryNames);
};
