
let weatherData = [
    { cityName: "New York", temperature: 22, condition: "Sunny" },
    { cityName: "London", temperature: 16, condition: "Cloudy" },
    { cityName: "Mumbai", temperature: 30, condition: "Rainy" }
];



const addCityWeather = (cityName, temperature, condition) => {
    weatherData.push({ cityName, temperature, condition });
};
console.log(weatherData);



const findHottestCity = () => {
    return weatherData.reduce((hottest, city) => 
        city.temperature > hottest.temperature ? city : hottest, weatherData[0]);
};
console.log(findHottestCity())
// console.log()


const filterByCondition = (condition) => {
    return weatherData.filter(city => city.condition === condition);
};
console.log(filterByCondition("Sunny"))



const listCityTemperatures = () => {
    return weatherData.map(city => `City: [${city.cityName}], Temp: [${city.temperature}]°C`);
};
console.log(listCityTemperatures())



const logWeatherSummary = () => {
    weatherData.forEach(({ cityName, temperature, condition }) => {
        console.log(`City: [${cityName}], Temp: [${temperature}]°C, Condition: [${condition}]`);});
};


