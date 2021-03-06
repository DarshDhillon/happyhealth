import styled from 'styled-components';
import HHLogo from '../../images/logos/hh_no_background.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TransactionComplete = ({ checkoutOrderNumber, transactionInfo }) => {
  const date = new Date();
  date.setDate(date.getDate() + 3);

  return (
    <Container>
      <h1>
        Thanks for your order,{' '}
        <span style={{ color: 'var(--mainPurple)' }}>
          {transactionInfo.nameOnCard}
        </span>
        !
      </h1>
      <h1>
        Your order number{' '}
        <span style={{ color: 'var(--mainPurple)', fontWeight: '900' }}>
          {checkoutOrderNumber}
        </span>{' '}
        is scheduled for delivery to{' '}
        <span style={{ color: 'var(--mainPurple)' }}>
          {transactionInfo.postcode}
        </span>{' '}
        on{' '}
        <span style={{ color: 'var(--mainPurple)' }}>
          {date.toLocaleDateString()}
        </span>
      </h1>
      <CloseLink to='/'>
        <Logo src={HHLogo} />
        CLOSE
      </CloseLink>
    </Container>
  );
};

TransactionComplete.propTypes = {
  checkoutOrderNumber: PropTypes.string,
  transactionInfo: PropTypes.object,
};

export default TransactionComplete;

const Container = styled.div`
  height: 100%;
  width: 85%;
  padding: 2rem 2rem;
  background-color: #d9eef7;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 1rem;

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    height: 80%;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

const Logo = styled.img`
  width: 150px;

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

const CloseLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
