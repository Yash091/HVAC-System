import {React,useState} from 'react'
import "./Final.css";
import {useLocation} from "react-router-dom"
import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"
import img5 from "./5.png"
import img6 from "./6.png"

const Final = () => {

    const initial = {
        quality: "0",
        status: "On",
        mode: "auto",
        temperature : "",
        airQuality : "",
        humidity: "0",
        acStatus:"0",
        acTemp:"0",
        heaterStatus:"0",
        heaterTemp:"0",
        exhaustStatus:"0",
        humidityStatus:"0",
    }
    const [email,setEmail] = useState("");
    // const [initial,setinitial] = useState(initial);

    const search = useLocation().search;
    const temp = new URLSearchParams(search).get('temp');
    const airQuality = new URLSearchParams(search).get('airQuality');
    const mode = new URLSearchParams(search).get('mode');
    const status = new URLSearchParams(search).get('status');
    const speed = new URLSearchParams(search).get('speed');
    const humidity = new URLSearchParams(search).get('humidity');

    const air = () => {
        if(Number(airQuality) >= 0 && Number(airQuality) <= 50) {
            initial.quality="1";
        } else if(Number(airQuality) >= 51 && Number(airQuality) <= 100) {
            initial.quality="2";
        } else if(Number(airQuality) >= 101 && Number(airQuality) <= 150) {
            initial.quality = "3";
        } else if(Number(airQuality) >= 151 && Number(airQuality) <= 200) {
            initial.quality="4";
        } else if(Number(airQuality) >= 201 && Number(airQuality) <= 300) {
            initial.quality = "5";
        } else if(Number(airQuality) >= 301 && Number(airQuality) <= 500) {
            initial.quality="6";
        }
    }
        
    const weatherMode = () => {
        if(mode === "winter") {
            initial.acStatus="0";
            initial.heaterStatus="1";
            initial.heaterTemp = "24";
        } else if(mode === "summer") {
            initial.heaterStatus = "0";
            initial.acStatus = "1";
    
            if(Number(temp) < 34) {
                initial.acTemp="24";
            } else{
                initial.acTemp = "24";
            }
        } else {
            if(Number(temp) < 21){
                initial.heaterStatus = "1";
                initial.acStatus = "0";
                initial.exhaustStatus="1";
            }
            else if(Number(temp) > 29){
                initial.heaterStatus = "0";
                initial.acStatus = "1";
                initial.exhaustStatus = "0";
            }
            else{
                initial.heaterStatus = "0";
                initial.acStatus = "0";
                initial.exhaustStatus = "1";
            }
        }

    }
    
    const humidityFunc = () => {
        if(Number(humidity) < "60"){
            initial.humidityStatus="0";
        } else{
            initial.humidityStatus = "1";
        }
    }
    
    air();
    weatherMode();
    humidityFunc();
    
  return (
    <div className='final'>
        <div className="left">
            <div className="heading">
                <div className="heading1">Current Status of CC3 Building</div>
                <div className="heading2">Email the result using 'Email Result' button</div>
            </div>
            <div className="final-table">
            <table cellSpacing={20}>
                <tr>
                    <td className="table-txt">Air Conditioner</td>
                    <td><button className={`table-btn ${initial.acStatus==="0" ? "btn-color" : ""}`}>{initial.acStatus==="1"?"On":"Off"}</button></td>
                    <td className="table-quantity">{initial.acStatus==="1"? `${initial.acTemp} °C` :""}</td>
                </tr>
                <tr>
                    <td className="table-txt">Heater</td>
                    <td><button className={`table-btn ${initial.heaterStatus === "0" ? "btn-color" : ""}`}>{initial.heaterStatus==="1"?"On":"Off"}</button></td>
                    <td className="table-quantity">{initial.heaterStatus==="1" ? `${initial.heaterTemp} °C` : ""}</td>
                </tr>
                <tr>
                    <td className="table-txt">Fan</td>
                    <td><button className={`table-btn ${status === "Off" ? "btn-color" : ""}`}>{status}</button></td>
                    <td className="table-quantity">{status === "On" ? `${speed} RPM` : ""} </td>
                </tr>
                <tr>
                    <td className="table-txt">Exhaust</td>
                    <td><button className={`table-btn ${initial.exhaustStatus === "0" ? "btn-color" : ""}`}>{initial.exhaustStatus==="1"?"On":"Off"}</button></td>
                    <td className="table-quantity">{initial.exhaustStatus==="1"?"20 RPM":""}</td>
                </tr>
                <br/>
                <br/>
                <br/>
                <tr>
                    <td className="table-txt">Humidity Controller</td>
                    <td><button className={`table-btn ${initial.humidityStatus === "0" ? "btn-color" : ""}`}>{initial.humidityStatus === "0" ? "Dehumidifying" : "Humidifying"}</button></td>
                    <td className="table-quantity">{humidity} HU</td>
                </tr>
                <tr>
                    <td className="table-tx">Air Quality (in ppm)</td>
                    <td className="table-quantit">{airQuality} PPM</td>
                </tr>
            </table>
            </div>
        </div>

        <div className="right">
            <div className='logo-text'>
                <img className="air-img" src={initial.quality==="1"?img1:(initial.quality==="2"?img2:(initial.quality==="3"?img3:(initial.quality==="4"?img4:(initial.quality==="5"?img5:img6))))} alt ="Status"/>
                <div className='text'>{initial.quality==="1"?"Good Quality!":(initial.quality==="2"?"Moderate!":(initial.quality==="3"?"Unhealthy For Sensitive Groups!":(initial.quality==="4"?"Unhealthy!":(initial.quality==="5"?"Very Unhealthy!":"Hazardous!"))))}</div>
            </div>
            <div className='para'>{initial.quality==="1"?`Air quality is considered satisfactory, and air pollution poses little or no risk`:(initial.quality==="2"?"Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people":(initial.quality==="3"?"Members of sensitive groups may experience health effects. The general public is not likely to be affected":(initial.quality==="4"?"Everyone may begin to experience health effects; members of  sensitive groups may experience more serious health effects":(initial.quality==="5"?"Health alert: everyone may experience more serious health effects":"Health warnings of emergency conditions. The entire population is more likely to be affected"))))}</div>
            <form action={`https://formsubmit.co/${email}`} method="POST" encType="multipart/form-data" >
                <div className="send-mail">
                    <label htmlFor = "email-id">Get result</label>
                    <input className = "receiver-email"
                    type="email"
                    id="email-id"
                    name="email-id"
                    placeholder="Enter email id"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    />
                    <input type="hidden" name="message" value={`AC Status : ${initial.acStatus==="0" ? "Off" : "On"}
AC Temp : ${initial.acTemp === "0" ? "AC is Off" : initial.acTemp} °C
Heater Status : ${initial.heaterStatus==="0" ? "Off" : "On"}
Heater Temp : ${initial.heaterTemp === "0" ? "Heater is Off" : initial.heaterTemp} °C
Fan Speed : ${speed ? speed : "0"} RPM 
Air Quality : ${!airQuality ? "0" : airQuality} PPM
Humidity : ${!humidity ? "0" : humidity} HU
Exhaust Status : ${initial.exhaustStatus==="1"?"On":"Off"}
Description : ${initial.quality==="1"?`Air quality is considered satisfactory, and air pollution poses little or no risk`:(initial.quality==="2"?"Air quality is acceptable; however, for some  pollutants there may be a moderate health concern for a very small number of people":(initial.quality==="3"?"Members of sensitive groups may experience health effects.The general public is not likely to be affected":(initial.quality==="4"?"Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects":(initial.quality==="5"?"Health alert: everyone may experience more serious health effects":"Health warnings of emergency conditions. The entire population is more likely to be affected"))))}`}></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_subject" value="New submission!"></input>
                    <input type="hidden" name="_template" value="table"></input>
                    <input type="hidden" name="_next" value="https://hvac-sys.herokuapp.com/"></input>
                </div>

                <button className="email-btn">Email Result</button>
            </form>
        </div>
    </div>
  );
}

export default Final