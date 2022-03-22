import React from 'react'
import "./Final.css";
import good from "./Good.png"
import bad from "./Bad.png"

function Final() {
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