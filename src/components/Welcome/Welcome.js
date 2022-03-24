import {React  , useState , useRef} from 'react';
import "./Welcome.css";
import { CircleSlider } from "react-circle-slider";
import Final from '../final/Final';
import { useNavigate } from 'react-router';

const Welcome = () => {

  const toFinal = useNavigate();

  const initial = {
      temperature : "",
      humidity : "",
      airQuality :"",
      mode: "auto",
      status: "on",
      speed: "0",
  };

  const handleChange = (e) => {
      setInput({...input,[e.target.name]:e.target.value})
  }
  const [input , setInput] = useState(initial);
  const [value, changeValue] = useState(0);
  
  const check = () => {

    if(!input.temperature || input.temperature < -50 || input.temperature > 50) {
      window.alert("Invalid Temperature Details");
      setInput({...input, temperature :""} )
    } else if(!input.humidity || input.humidity < 0 || input.humidity > 100){
      window.alert("Invalid Humidity Details");
      setInput({...input,humidity :""} )
    } else if(!input.airQuality || input.airQuality < 0 || input.airQuality > 500){
      window.alert("Invalid Air Quality Details");
      setInput({...input,airQuality :""} )
    } else {
      // console.log("Hello");
      toFinal(`/final/?temp=${input.temperature}&humidity=${input.humidity}&airQuality=${input.airQuality}&mode=${input.mode}&status=${input.status}&speed=${input.speed}`);
    } 
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
              type="number"
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
              type="number"
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
              type="number"
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
              // console.log(input);
            }}>Auto</button>
            <button className={`modes winter ${input.mode==="winter" ? "color" : ""}`} name="winter" onClick={() => {
              setInput({...input , mode:"winter"})
              // console.log(input);
            }}>Winter</button>
            <button className={`modes summer ${input.mode==="summer" ? "color" : ""}`} name="summer" onClick={() => {
              setInput({...input , mode:"summer"})
              // console.log(input);
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
              value={value}
              onChange={value =>{ changeValue(value) ; setInput({...input,speed:value})}}
            />
          </div>
        </div>
      </div>
      <button className="submit-btn" onClick={() => {check()}}>Submit</button>
      {/* <Final input={input}/> */}
    </div>
  );
}

export default Welcome;