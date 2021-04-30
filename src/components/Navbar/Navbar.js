import styled from 'styled-components';
import LogoMain from '../../images/logos/hh_logo_main.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <LogoLink to='/'>
          <Logo src={LogoMain} alt='Main logo' />
        </LogoLink>
        <ListItems>
          <ListItem primary='true' to='/workouts'>
            workouts
          </ListItem>
          <ListItem to='/foodie'>foodie</ListItem>
          <ListItem primary='true' to='/take5'>
            take5
          </ListItem>
          <ListItem to='/shop'>shop</ListItem>
        </ListItems>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  /* height: 320px; */
  /* width: 100vw; */
  padding: 2.5rem;
  background-color: #fff;
  /* border: 1px solid blue; */
`;

const NavContainer = styled.div`
  /* height: 100%; */
  width: 100%;
  /* max-width: 70%; */
  display: flex;
  padding: 0 2rem;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid red; */

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const LogoLink = styled(Link)`
  @media screen and (max-width: 1100px) {
    margin-bottom: 2rem;
  }
`;

const Logo = styled.img`
  height: 220px;
  width: 220px;
  user-select: none;
  /* border: 1px solid black; */
`;

const ListItems = styled.ul`
  /* border: 1px solid red; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  margin-left: 3.5rem;
  font-weight: 600;
  color: ${({ primary }) =>
    primary ? 'var(--mainPurple)' : 'var(--mainBlue)'};
  border-bottom: 4px solid #fff;
  transition: 0.3s ease-in-out;

  &:hover {
    border-bottom: ${({ primary }) =>
      primary ? '4px solid var(--mainPurple)' : '4px solid var(--mainBlue)'};
  }
`;
