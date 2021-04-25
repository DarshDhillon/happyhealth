import { useState } from 'react';
import styled from 'styled-components';
import { RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const DropMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setShowMenu((prev) => !prev)} />
      {showMenu && (
        <Main>
          <LinkContainer onClick={() => setShowMenu((prev) => !prev)}>
            <LinkItem to='/workouts'>workouts</LinkItem>
            <LinkItem to='/mealtime'>mealtime</LinkItem>
            <LinkItem to='/take5'>take5</LinkItem>
            <LinkItem to='/shop'>shop</LinkItem>
          </LinkContainer>
        </Main>
      )}
    </>
  );
};

export default DropMenu;

const Hamburger = styled(RiMenu5Fill)`
  font-size: 3rem;
  position: absolute;
  top: 2rem;
  right: 1rem;
  color: darkslategray;
  z-index: 2;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Main = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: #009fe3;
  transition: ease-in-out;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const LinkItem = styled(Link)`
  font-size: 3rem;
  color: #fff;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 3rem;
  user-select: none;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #824998;
  }
`;