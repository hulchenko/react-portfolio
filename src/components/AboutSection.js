import React from 'react';
import home1 from '../img/home1.png';
//Styles
import styled from 'styled-components';

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

//Styling
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
