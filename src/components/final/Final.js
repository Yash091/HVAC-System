import React from 'react'
import "./Final.css";
import good from "./Good.png"
import bad from "./Bad.png"
import {useEffect} from "react"
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
        status: "on",
        mode: "auto",
        temperature : "",
        airQuality : "",
        humidity: "0",
    }
    
    const search = useLocation().search;
    const temp = new URLSearchParams(search).get('temp');
    const airQuality = new URLSearchParams(search).get('airQuality');
    const mode = new URLSearchParams(search).get('mode');
    const status = new URLSearchParams(search).get('status');
    const speed = new URLSearchParams(search).get('speed');
    const humidity = new URLSearchParams(search).get('humidity');
    
    useEffect(()=>{

        if(airQuality >= 0 && airQuality <= 50) {
            console.log("Good");
        } else if(airQuality >= 51 && airQuality <= 100) {
            console.log("Moderate");
        } else if(airQuality >= 101 && airQuality <= 150) {
            console.log("Unhealthy for Sensitive Groups");
        } else if(airQuality >= 151 && airQuality <= 200) {
            console.log("Unhealthy");
        } else if(airQuality >= 201 && airQuality <= 300) {
            console.log("Very Unhealthy");
        } else if(airQuality >= 301 && airQuality <= 500) {
            console.log("Hazardous");
        }

        if(mode === "winter") {
            console.log("Ac off krdo bhai")
            console.log("Heater on krdo bhai")
            console.log("Heater temp = 24 degree")
        } else if(mode === "summer") {
            console.log("Heater off krdo");
            console.log("AC on krdo bhai")
    
            if(temp < 18){
                console.log("Ac temp - 22 degree");
            }

            else{
                console.log("AC temp - 24 degree");
            }
        } else {
            if(temp < 21){
                console.log("Heater on krdo");
                console.log("Ac off krdo");
                console.log("Exhaust off krdo");
            }
            else if(temp > 29){
                console.log("Heater off krdo");
                console.log("Ac on krdo");
                console.log("Exhaust off krdo");
            }
            else{
                console.log("Heater off krdo");
                console.log("Ac off krdo");
                console.log("Exhaust on krdo");
            }
        }
           
       if(humidity < 60){
         console.log("Humidify controller - Dehumidifying");
       }
       else{
         console.log("Humidify controller - Humidifying");
       }

    },[])

  return (
    <div className='final'>
        <div className="left">
            <div className="heading">
                <div className="heading1">Current Status of CC3 Building</div>
                <div className="heading2">Email the Result using ‘Send on Email Button’</div>
            </div>
            <div className="final-table">
            <table cellSpacing={20}>
                <tr>
                    <td className="table-txt">Air Conditioner</td>
                    <td><button className="table-btn">On</button></td>
                    <td className="table-quantity">34.5 °C</td>
                </tr>
                <tr>
                    <td className="table-txt">Heater</td>
                    <td><button className="table-btn">On</button></td>
                    <td className="table-quantity">34.5 °C</td>
                </tr>
                <tr>
                    <td className="table-txt">Fan</td>
                    <td><button className="table-btn">On</button></td>
                    <td className="table-quantity">80 RPM</td>
                </tr>
                <tr>
                    <td className="table-txt">Exhaust</td>
                    <td><button className="table-btn">On</button></td>
                    <td className="table-quantity">20 RPM</td>
                </tr>
                <br/>
                <br/>
                <br/>
                <tr>
                    <td className="table-txt">Humidity Controller</td>
                    <td><button className="table-btn">Humidifying</button></td>
                    <td className="table-quantity">56 HU</td>
                </tr>
                <tr>
                    <td className="table-txt">Air Quality(in ppm)</td>
                    <td className="table-quantity">123 PPM</td>
                </tr>
            </table>
            </div>
        </div>

        <div className="right">
            <div className='logo-text'>
                <img src={good} alt ="good"/>
                <div className='text'>Good Quality!</div>
            </div>
            <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod consectetur dignissim elit gravida luctus feugiat commodo sed.</div>
            <button className="email-btn">Email Result</button>
        </div>
    </div>
  );
}

export default Final