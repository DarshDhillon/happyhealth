import styled from 'styled-components';
import Sections from '../components/Workouts/Sections';
import Hero from '../components/Workouts/Hero';
import ServicePlans from '../components/Workouts/ServicePlans';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations/animationData';
import Testimonials from '../components/Workouts/Testimonials';

const Workouts = () => {
  return (
    <Container
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}
    >
      <Hero />
      <Sections />
      <Testimonials />
      <ServicePlans />
    </Container>
  );
};

export default Workouts;

const Container = styled(motion.main)`
  /* border: 1px solid red; */
  padding-bottom: 2rem;
  background: linear-gradient(#e8f2f7, #f0e9f3);
`;
