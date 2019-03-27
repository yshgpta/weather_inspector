import React,{Component} from 'react';

//Components
import Form from './components/form/form';
import Title from './components/title/title';
import Weather from './components/weather/weather';
import WeatherBG from './images/weatherbg.jpg'

//stylesheet
import './App.css'


const API_KEY = '38b6c35c8efd4ffdd42898409dcfc41f';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      temperature:undefined,
      humidity:undefined,
      city:undefined,
      country:undefined,
      description:undefined,
      latitude:undefined,
      longitude:undefined,
      windspeed:undefined,
      pressure:undefined,
      error:undefined
    }

    this.getInput=this.getInput.bind(this);

  }

  getInput(event){
    event.preventDefault();
    const city = event.target.city.value;
    const country = event.target.country.value;
    if(city && country){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`,{
      method:'GET'
    })
    .then(response => response.json())
    .then((json)=>{
      if(json.cod===200){
              this.setState({
                temperature:json.main.temp,
                humidity:json.main.humidity,
                city:json.name,
                country:json.sys.country,
                description:json.weather[0].description,
                latitude:json.coord.lat,
                longitude:json.coord.lon,
                windspeed:json.wind.speed,
                pressure:json.main.pressure,
                error:200
                })
    }else{
      console.log("failure");
      this.setState({
        error:404
      })
    }
    })
  }
  }




  render(){
    return(
      <div>
      <img src={WeatherBG} className="weather__bg" alt=''/>
      <div className="main-block-title">
      <Title/>
      <Form getInput={this.getInput}/>
      </div>
      <Weather  temperature={this.state.temperature}
                humidity={this.state.humidity}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                windspeed={this.state.windspeed}
                pressure={this.state.pressure}
                error={this.state.error}/>
      </div>
    )
  }
}


export default App;
