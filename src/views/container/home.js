import React, { Component } from 'react';
import City from '../component/city.js';
import Weather from  '../component/weather.js'
import "./home.styl"
const API_KEY = "e5e297850c4b9e39acf86406b1d3d663";
function MaysPrimera(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
class Home extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    items:undefined,
    message:undefined
  }

  getWeather = (e) => {

     e.preventDefault();
      const city = e.target.elements.city.value;
      // const country = e.target.elements.country.value;
      let cityUpercase =  MaysPrimera(city);
      console.log(cityUpercase);
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityUpercase}&appid=${API_KEY}&units=metric`).then(results => {
            return results.json()
        })
        .then( data => {
          console.log(data);
           this.setState({message:data.message });
          if (city) {
              this.setState({ 
                items: data,
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: "",
               });
              
          }
          else{
            this.setState({ 
              temperature: undefined,
              city: undefined,
              country: undefined,
              humidity: undefined,
              description: undefined,
              error: "Please enter the values.",
              items:data,
            });
          }
       
     
    });
  }
  render() {
     console.log("Message "+this.state.message);
     console.log(this.state.items);
    let Container;
     if (this.state.message === "Nothing to geocode") {
      Container = <p>city not found</p>
     
    }
    else if(this.state.message === undefined){
        Container =<Weather
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                    message={this.state.message}
                  />;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
              <header>
                <h1>Weather Finder</h1>
                <h3>Find out temperature, conditions and more...</h3>
                  <City  getWeather={this.getWeather}  />
              </header>
              <div className="wrapper">
                
                  {Container}
                </div>
              
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
