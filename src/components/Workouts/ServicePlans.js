import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

const ServicePlans = () => {
  const [blurOnHover, setBlurOnHover] = useState(false);

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services:</PricingHeading>
          <PricingContainer>
            <PricingCard blurOnHover={blurOnHover} to='#'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter</PricingCardPlan>
                <PricingCardCost>£7.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>£10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
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
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan main='true'>Diamond</PricingCardPlan>
                <PricingCardCost>£19.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard blurOnHover={blurOnHover} to='#'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold</PricingCardPlan>
                <PricingCardCost>£12.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>£50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
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
  border: 1px solid black;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PricingWrapper = styled.div`
  border: 1px solid red;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0 auto; */
  @media screen and (max-width: 1200px) {
    margin: 0 2rem;
    flex-direction: column;
    align-items: center;
  }
`;

const PricingHeading = styled.h1`
  color: var(--mainPurple);
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const PricingContainer = styled.div`
  border: 1px solid blue;
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
  /* border: 1px solid red; */
  /* background: #f8f8ff; */
  background: black;
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
    -webkit-filter: ${({ blurOnHover }) => (blurOnHover ? 'blur(5px)' : '0px')};
    -moz-filter: ${({ blurOnHover }) => (blurOnHover ? 'blur(5px)' : '0px')};
    -o-filter: ${({ blurOnHover }) => (blurOnHover ? 'blur(5px)' : '0px')};
    -ms-filter: ${({ blurOnHover }) => (blurOnHover ? 'blur(5px)' : '0px')};
    filter: ${({ blurOnHover }) => (blurOnHover ? 'blur(5px)' : '0px')};
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
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
  color: ${({ main }) => (main ? 'var(--mainPurple)' : '#fff')};
  font-style: ${({ main }) => (main ? 'italic' : 'normal')};
`;

const PricingCardCost = styled.h4`
  font-size: 1.4rem;
`;

const PricingCardLength = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;

const PricingCardFeatures = styled.ul`
  margin: 1rem 0 2rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

const PricingCardFeature = styled.li`
  margin-bottom: 0.8rem;
`;

const Button = styled.button`
  border-radius: 4px;
  background: var(--mainBlue);
  white-space: nowrap;
  padding: 0.5rem 1.5rem;
  color: #fff;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: var(--mainPurple);
  }

  @media screen and (max-width: 1200px) {
    width: 65%;
    font-size: 1rem;
  }
`;
