import {React , useState} from 'react';
import "./Welcome.css";
import { CircleSlider } from "react-circle-slider";

const Welcome = () => {

  const initial = {
      temperature : "",
      humidity : "",
      airQuality :"",
  }
  
  return (
    <div className="welcome-page">
      <div className="first">
        
        <div className="details">
          <div className="head1">Welcome to HVAC System</div>
          <div className="head2">Enter the required details to continue</div>
          <div className="input-fields">
            <div className="input-head"> Enter Temperature in °C </div>
            <input
              type="text"
              id="temperature"
              name="temperature"
              placeholder="Allowed range is -50 °C to 50 °C"
            />
          </div>
          <div className="input-fields">
            <div className="input-head" htmlFor="pass">
              Enter Humidity
            </div>
            <input
              type="text"
              id="humidity"
              name="humidity"
              placeholder="Allowed Range is 0 to 100%"
              
            />
          </div>
          <div className="input-fields">
            <div className="input-head" htmlFor="pass">
              Enter Air Quality
            </div>
            <input
              type="text"
              id="airQuality"
              name="airQuality"
              placeholder="Allowed Range is 0 to 500"
            />
          </div>
        </div>
      </div>
      <div className="second">
        <div className="mode">
          <div className="mode-head">Set Mode</div>
          <div className="mode-btns">
            <button className="modes" name="auto">Auto</button>
            <button className="modes" name="winter">Winter</button>
            <button className="modes" name="summer">Summer</button>
          </div>
        </div>
        <div className="fan-status">
          <div className="status-head">Fan Status</div>
          <div className="status-btns">
            <button className="stat">Off</button>
            <button className="stat">On</button>
          </div>
        </div>
        <div>
          <div className="fan">
            <div className="fan-speed">Set Fan Speed</div>
            <CircleSlider
              size={200}
              stepSize={1}
              knobRadius={15}
              progressWidth={15}
              circleWidth={15}
              progressColor="#1684F8"
              tooltipColor="#ffffff"
              showTooltip={true}
              tooltipSize={20}
              gradientColorFrom="#1684F8"
              gradientColorTo="#0838E1"
            />
          </div>
        </div>
      </div>
      <button className="submit-btn">Submit</button>
    </div>
  );
}

export default Welcome;