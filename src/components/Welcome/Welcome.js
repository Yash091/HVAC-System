import {React , useState} from 'react';
import "./Welcome.css";
import { CircleSlider } from "react-circle-slider";

const Welcome = () => {

  const initial = {
      temperature : "",
      humidity : "",
      airQuality :"",
      mode:"auto",
      status:"on",
      speed:"0",
  };

  const handleChange=(e)=>{
      setInput({...input,[e.target.name]:e.target.value})
  }
  const [input , setInput] = useState(initial);

  const [value , setValue] = useState(0);
  const handleChangeRange = (e) => {
    // setValue(e.target.stepSize)
    console.log(e.target);
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
              value={input.temperature}
              onChange={(e) => handleChange(e)}
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
              value={input.humidity}
              onChange={(e) => handleChange(e)}
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
              value={input.airQuality}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
      <div className="second">
        <div className="mode">
          <div className="mode-head">Set Mode</div>
          <div className="mode-btns">
            <button className={`modes auto ${input.mode==="auto" ? "color" : ""}`} name="auto" onClick={() => {
              setInput({...input , mode:"auto"})
              console.log(input);
            }}>Auto</button>
            <button className={`modes winter ${input.mode==="winter" ? "color" : ""}`} name="winter" onClick={() => {
              setInput({...input , mode:"winter"})
              console.log(input);
            }}>Winter</button>
            <button className={`modes summer ${input.mode==="summer" ? "color" : ""}`} name="summer" onClick={() => {
              setInput({...input , mode:"summer"})
              console.log(input);
            }}>Summer</button>
          </div>
        </div>
        <div className="fan-status">
          <div className="status-head">Fan Status</div>
          <div className="status-btns">
            <button className={`stat ${input.status==="off" ? "color" : ""}`} onClick={() => {
              setInput({...input, status:"off"})
            }}>Off</button>
            <button className={`stat ${input.status==="on" ? "color" : ""}`} onClick={() => {
              setInput({...input, status:"on"})
            }}>On</button>
          </div>
        </div>
        <div>
          <div className={`fan ${input.status==="off" ? "hidden" : ""}`}>
            <div className="fan-speed">Set Fan Speed{value}</div>
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
              value={value}
              onChange={(e) => {handleChangeRange(e)}}
            />
          </div>
        </div>
      </div>
      <button className="submit-btn">Submit</button>
    </div>
  );
}

export default Welcome;
