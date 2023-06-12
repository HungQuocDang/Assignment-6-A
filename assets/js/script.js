


var data1=0;
var data2=0;
var data3=0;
var temperature1=0;
var weather=0;
var windSpeed=0;
var humidity=0;
var cityName=0;
var temperature2=0;
var usersContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');
const part0="https:";
const part1="//api.openweathermap.org/data/2.5/weather?q=";
const part2="Ottawa";
const part3=",ca&APPID=072c5a4ab04eb390a91ac908259464d0";
var weatherUrl=part0+part1+part2+part3;
console.log(weatherUrl);
//weatherUrl=JSON.parse(weatherUrl);
console.log(weatherUrl);
const thisUrl="https://api.openweathermap.org/data/2.5/weather?q=Ottawa,ca&units=metric&APPID=072c5a4ab04eb390a91ac908259464d0";
var requestUrl = weatherUrl;
//var requestUrl = thisUrl;
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Ottawa,ca&units=metric&APPID=072c5a4ab04eb390a91ac908259464d0';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      data1=data;
     
      data2=JSON.stringify(data1);
      data3=JSON.parse(data2);
    
      console.log("data1",data1);
      console.log("data2",data2);
      console.log("data3",data3);
      
     
     


      temperature1=data1.main.temp;
      weather=data1.weather[0].main;
      windSpeed=data1.wind.speed;
      humidity=data1.main.humidity;
      cityName=data1.name;
    
      console.log("temperature1", temperature1);
      console.log("weather", weather);
      console.log("windSpeed", windSpeed);
      console.log("humidity", humidity);
      console.log("cityName", cityName);


      //for (var i = 0; i < data.length; i++) {
        //Creating a h3 element and a p element
     //   var userName = document.createElement('h3');
      //  var userUrl = document.createElement('p');

        //Setting the text of the h3 element and p element.
     //   userName.textContent = data[i].main;
     //   userUrl.textContent = data[i].url;

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
      //  usersContainer.append(userName);
     //   usersContainer.append(userUrl);
     // }
    });



