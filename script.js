var request =  new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
var res = JSON.parse(request.response);
console.log(res);

// A.Get all the countries from Asia continent /region using Filter function:
var result_asia = res.filter((ele)=>ele.region=="Asia")
console.log(result_asia);
var country_names = result_asia.map((ele)=>ele.name)
console.log(country_names);

// B.Get all the countries with a population of less than 2 lakhs using Filter function:
var popu = res.filter((ele)=>ele.population<200000)
console.log(popu);
var country_names = popu.map((ele)=>ele.name)
console.log(country_names);

// C.Print the following details name, capital, flag, using forEach function:
res.forEach((ele)=>console.log(ele.name,ele.capital,ele.flags))

// D.Print the total population of countries using reduce function:
var total_popu = res.reduce((acc,cv)=>acc+cv.population,0)
console.log("Total Population ="+total_popu);

// E.Print the country that uses US dollars as currency:

var USD = (res).filter((ele)=>ele.currencies==Object.values.USD)
console.log(USD);
var country_names = USD.map((ele)=>ele.name)
console.log(country_names);
}
                  