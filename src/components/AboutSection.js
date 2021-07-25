import React from 'react';
import home1 from '../img/home1.png';
//Styles
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <div className="about">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Lorem ipsum dolor sit.</h2>
          </div>
          <div className="hide">
            <h2>
              Lorem <span>ipsum dolor</span> sit.
            </h2>
          </div>
          <div className="hide">
            <h2>Lorem ipsum dolor sit.</h2>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>Contact</button>
      </div>
      <div className="image">
        <img src={home1} alt="professional" />
      </div>
    </div>
  );
};

//Styling

export default AboutSection;
