import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//Styles
import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          Lorem <span>ipsum</span> dolor sit.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Fast</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Cheap</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
