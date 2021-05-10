import styled from 'styled-components';
import CreditCardLogos from '../../images/shop/credit_cards.svg';

const PaymentSection = () => {
  return (
    <Main>
      <Heading>Payment Info.</Heading>
      <TestDiv>
        <PersonalInfo>
          <label>Name on card: </label>
          <input type='text' autoComplete='cc-csc' />
          <label>Address: </label>
          <textarea cols='30' rows='4' autoComplete='none'></textarea>
          <label>Postcode: </label>
          <input type='text' autoComplete='cc-csc' />
          <label>Contact number: </label>
          <input type='text' autoComplete='cc-csc' />
        </PersonalInfo>
        <PaymentInfo>
          <TestDiv2>
            <label>Card number: </label>
            <input type='text' autoComplete='cc-csc' maxLength='16' />
            <label>CVV:</label>
            <input type='password' maxLength='3' />
          </TestDiv2>
          <TestDiv3>
            <label>Expiration date: </label>
            <select>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
            <select>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <select>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
          </TestDiv3>
        </PaymentInfo>
        <BuyButton>BUY NOW</BuyButton>
        <PaymentLogos src={CreditCardLogos} alt='card logos' />
      </TestDiv>
    </Main>
  );
};

export default PaymentSection;

const Main = styled.div`
  border: 1px solid red;
  height: 700px;
  width: 40%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
  padding: 2rem 0;
  background-color: #f8f8ff;
  border-radius: 0 1rem 1rem 0;

  * {
    outline: none;
  }

  @media screen and (max-width: 1200px) {
    min-width: 65%;
    padding: 1rem;
    border-radius: 1rem;
  }

  @media screen and (max-width: 768px) {
    /* height: 800px; */
    min-width: 90%;
  }
`;

const TestDiv = styled.div`
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
`;

const Heading = styled.h1`
  text-align: center;
`;

const PaymentLogos = styled.img`
  width: 100px;
`;

const PersonalInfo = styled.div`
  /* padding: 2rem; */
  height: 50%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  textarea {
    resize: none;
  }
`;

const PaymentInfo = styled.div`
  /* border: 1px solid black; */
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  height: 20%;
  align-items: center;
  justify-content: space-between;
`;

const TestDiv2 = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestDiv3 = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  * {
    cursor: pointer;
  }
`;

const BuyButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: var(--mainPurple);
  color: #fff;
  /* border-radius: 0.5rem; */
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: var(--mainPurple);
    background-color: #fff;
    border-radius: 0.5rem;
    outline: 1px solid var(--mainPurple);
  }
`;
