import React from 'react';
import home1 from '../img/home1.png';
//Styles
import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Lorem ipsum dolor sit.</h2>
          </Hide>
          <Hide>
            <h2>
              Lorem <span>ipsum dolor</span> sit.
            </h2>
          </Hide>
          <Hide>
            <h2>Lorem ipsum dolor sit.</h2>
          </Hide>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>Contact</button>
      </Description>
      <Image>
        <img src={home1} alt="professional" />
      </Image>
    </About>
  );
};

export default AboutSection;
