import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { ImPower } from 'react-icons/im';
import { FaCog } from 'react-icons/fa';
import { GiRock } from 'react-icons/gi';

const ServicePlans = () => {
  const [blurOnHover, setBlurOnHover] = useState(false);

  return (
    <IconContext.Provider value={{ color: 'var(--mainPurple', size: '3rem' }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our personal training plans:</PricingHeading>
          <PricingContainer>
            <PricingCard $blur={blurOnHover} to='#'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaCog />
                </PricingCardIcon>
                <PricingCardPlan>Core</PricingCardPlan>
                <PricingCardCost>£4.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Core Programme</PricingCardFeature>
                  <PricingCardFeature>50 training videos</PricingCardFeature>
                  <PricingCardFeature>Nutrition planner</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard
              onMouseEnter={() => setBlurOnHover((prev) => !prev)}
              onMouseLeave={() => setBlurOnHover((prev) => !prev)}
              main='true'
              to='#'
            >
              <PricingCardInfo>
                <PricingCardIcon>
                  <ImPower />
                </PricingCardIcon>
                <PricingCardPlan main='true'>Elite</PricingCardPlan>
                <PricingCardCost>£12.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Customised Programme</PricingCardFeature>
                  <PricingCardFeature>
                    Unlimited training videos
                  </PricingCardFeature>
                  <PricingCardFeature>1-on-1 video coaching</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard $blur={blurOnHover} to='#'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Advanced</PricingCardPlan>
                <PricingCardCost>£7.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Core Programme</PricingCardFeature>
                  <PricingCardFeature>
                    Unlimited training videos
                  </PricingCardFeature>
                  <PricingCardFeature>Video coaching</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};
export default ServicePlans;

const PricingSection = styled.div`
  margin-top: 8rem;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PricingWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    margin: 0 2rem;
    flex-direction: column;
    align-items: center;
  }
`;

const PricingHeading = styled.h1`
  color: #000;
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const PricingCard = styled(Link)`
  background: #f8f8ff;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 350px;
  height: ${({ main }) => (main ? '550px' : '500px')};
  text-decoration: none;
  border-radius: 0.5rem;
  &:nth-child(even) {
    margin: 1.5rem;
  }

  &:nth-child(odd) {
    -webkit-filter: ${({ $blur }) => ($blur ? 'blur(5px)' : '0px')};
    -moz-filter: ${({ $blur }) => ($blur ? 'blur(5px)' : '0px')};
    -o-filter: ${({ $blur }) => ($blur ? 'blur(5px)' : '0px')};
    -ms-filter: ${({ $blur }) => ($blur ? 'blur(5px)' : '0px')};
    filter: ${({ $blur }) => ($blur ? 'blur(5px)' : '0px')};
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 6px 20px rgba(56, 125, 255, 0.6);
  }
  @media screen and (max-width: 1200px) {
    width: 60%;
    &:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 1.5rem;
  align-items: center;
  color: #fff;
`;

const PricingCardIcon = styled.div`
  margin: 1.5rem 0;
`;

const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: ${({ main }) => (main ? '2.5rem' : '2.3rem')};
  color: var(--mainBlue);
  font-style: ${({ main }) => (main ? 'italic' : 'normal')};
`;

const PricingCardCost = styled.h4`
  font-size: 1.4rem;
  color: #000;
`;

const PricingCardLength = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
  color: gray;
`;

const PricingCardFeatures = styled.ul`
  margin: 1rem 0 2rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
`;

const PricingCardFeature = styled.li`
  margin-bottom: 0.8rem;
`;

const Button = styled.button`
  border-radius: 4px;
  background: var(--mainPurple);
  white-space: nowrap;
  padding: 0.5rem 1.5rem;
  color: #fff;
  font-size: 1.2rem;
  outline: none;
  border: 1px solid var(--mainPurple);
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: var(--mainPurple);
    background: #fff;
  }

  @media screen and (max-width: 1200px) {
    width: 65%;
    font-size: 1rem;
  }
`;
