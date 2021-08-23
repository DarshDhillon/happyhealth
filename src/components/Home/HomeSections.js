import styled from 'styled-components';
import homePageData from '../../data/HomepageSections/homePageSections';
import { BsBoxArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HomeSections = () => {
  return (
    <>
      {homePageData.map((section) => (
        <SectionContainer reverse={section.reverse} key={section.id}>
          <WrapperLink to={section.to}>
            <SectionWrapper reverse={section.reverse}>
              <SectionDescription reverse={section.reverse}>
                <h1>
                  {section.title}
                  <span>
                    <i>
                      <GoToIcon $reverse={section.reverse} />
                    </i>
                  </span>
                </h1>
                <p>{section.description}</p>
              </SectionDescription>
              <SectionImage src={section.image} alt={section.alt} />
            </SectionWrapper>
          </WrapperLink>
        </SectionContainer>
      ))}
    </>
  );
};

export default HomeSections;

const SectionContainer = styled.section`
  background-color: ${({ reverse }) => (reverse ? '#e8f2f7' : '#f0e9f3')};
  padding: 2rem;
`;

const SectionWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionDescription = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
    color: #000;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: #000;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }

  span {
    margin-left: 1rem;
    opacity: 0;
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    span {
      opacity: 1;
      transition: all 0.4s ease-in-out;
    }
  }
`;

const SectionImage = styled.img`
  height: 350px;
  width: 350px;

  @media screen and (max-width: 500px) {
    max-width: 300px;
  }
`;

const GoToIcon = styled(BsBoxArrowRight)`
  height: 25px;
  width: 25px;
  font-weight: bold;
  color: ${({ $reverse }) =>
    $reverse ? 'var(--mainBlue)' : 'var(--mainPurple)'};
`;

const WrapperLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`;
