import styled from 'styled-components';
import HomePageData from '../../data/HomepageSections/HomePageSections';

const HomeSections = () => {
  return (
    <>
      {HomePageData.map((section) => (
        <SectionContainer reverse={section.reverse} key={section.id}>
          <SectionWrapper reverse={section.reverse}>
            <SectionDescription reverse={section.reverse}>
              <h1>
                {section.title}{' '}
                <span>
                  <button>Testing</button>
                </span>{' '}
              </h1>
              <p>{section.description}</p>
            </SectionDescription>
            <SectionImage src={section.image} alt={section.alt} />
          </SectionWrapper>
        </SectionContainer>
      ))}
    </>
  );
};

export default HomeSections;

const SectionContainer = styled.section`
  background-color: ${({ reverse }) => (reverse ? '#e8f2f7' : '#f0e9f3')};
  /* display: flex; */
  padding: 2rem;
`;

const SectionWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionDescription = styled.div`
  max-width: 40%;
  /* border: 1px solid blue; */

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    /* text-align: ${({ reverse }) => (reverse ? 'right' : '')}; */
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const SectionImage = styled.img`
  /* border: 1px solid black; */
  height: 350px;
  width: 350px;
`;
