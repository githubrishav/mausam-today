import axios from "axios";
import React, { useEffect, useState } from "react";
import logos from "./../../public/logos.png";

const Homepage = () => {


  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const fetchData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      }).catch((err) => {
        console.log(err.message);
      })
  }

  const HandleChange = (event) => {
    setCity(event.target.value);
  }

  const handleClick = () => {
    fetchData();
  };

  const apiKey = "8e4f3e7e22b3e44fdae6edef09bd3f6a";

  return (
    <div className="container">
      <div className="home-cont">
        <div className="top">
          <p>Date</p>
          <p>Day</p>
        </div>
        <div className="mid">
          <input type="text" placeholder="Search" value={city}
            onChange={HandleChange}
          />
          <div className="c">
            <img onClick={handleClick} src={logos} alt="search"
            />
          </div>
        </div>
        <div className="mid-two">
          <div className="city"> 
            <p>City</p>
            <p className="">{data?.name}</p>
          </div>
          <div className="temp"> Temprature
            <p>{data?.main.temp}</p>
          </div>

          <p>{ }</p>
        </div>
        <div className="end">
          <div className="H">
            <p>Humidity</p>
            <p>{data?.main.humidity}</p>
          </div>
          <div className="w">
            <p>Wind Speed</p>
            <p>{data?.wind.deg}</p>
            <p>{data?.wind.speed}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Homepage;
