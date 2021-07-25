import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {
  return (
    <div>
      <div className="services">
        <div className="description">
          <h2>
            Lorem <span>ipsum</span> dolor sit.
          </h2>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={clock} alt="icon" />
                <h3>Fast</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img src={teamwork} alt="icon" />
                <h3>Teamwork</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img src={diaphragm} alt="icon" />
                <h3>Diaphragm</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img src={money} alt="icon" />
                <h3>Cheap</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="camera" />
      </div>
    </div>
  );
};

export default ServicesSection;
