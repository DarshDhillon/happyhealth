import { useState } from 'react';
import styled from 'styled-components';
import { RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { CgGym } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAccessTime } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { TiContacts } from 'react-icons/ti';

const DropMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setShowMenu((prev) => !prev)} />
      <Dropdown showMenu={showMenu}>
        <LinkContainer onClick={() => setShowMenu((prev) => !prev)}>
          <LinkItem to='/'>
            <span>
              <HomeIcon />
            </span>
            home
          </LinkItem>
          <LinkItem to='/workouts'>
            <span>
              <GymIcon />
            </span>
            workouts
          </LinkItem>
          <LinkItem to='/foodie'>
            <span>
              <FoodIcon />
            </span>
            foodie
          </LinkItem>
          <LinkItem to='/take5'>
            {' '}
            <span>
              <Take5Icon />
            </span>{' '}
            take5
          </LinkItem>
          <LinkItem to='/shop'>
            {' '}
            <span>
              <ShopIcon />
            </span>{' '}
            shop
          </LinkItem>
          <LinkItem to='/contact'>
            {' '}
            <span>
              <ContactIcon />
            </span>{' '}
            contact
          </LinkItem>
        </LinkContainer>
      </Dropdown>
    </>
  );
};

export default DropMenu;

const Hamburger = styled(RiMenu5Fill)`
  font-size: 2rem;
  position: fixed;
  top: 2rem;
  right: 1.2rem;
  color: darkslategray;
  z-index: 999;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Dropdown = styled.div`
  z-index: 998;
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? '0' : '-150%')};
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: var(--mainBlue);
  transition: top 500ms ease-in-out;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const HomeIcon = styled(AiOutlineHome)`
  height: 30px;
  width: 30px;
  color: var(--mainPurple);
`;

const GymIcon = styled(CgGym)`
  height: 30px;
  width: 30px;
  color: var(--mainPurple);
`;

const FoodIcon = styled(AiOutlineSearch)`
  height: 30px;
  width: 30px;
  color: var(--mainPurple);
`;

const Take5Icon = styled(MdAccessTime)`
  height: 30px;
  width: 30px;
  color: var(--mainPurple);
`;

const ShopIcon = styled(FiShoppingCart)`
  height: 30px;
  width: 30px;
  color: var(--mainPurple);
`;

const ContactIcon = styled(TiContacts)`
  height: 30px;
  width: 30px;
  color: var(--mainPurple);
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
    color: var(--mainPurple);
  }

  span {
    margin-right: 10px;
  }
`;
