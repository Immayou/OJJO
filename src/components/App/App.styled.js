import styled from '@emotion/styled';
import BCG from '../../images/MainBCG.jpg';

export const HeroWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  background-image: url(${BCG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.25);
`;
export const Container = styled.div`
  padding: 20px;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 50px;
  color: #ffffff;
  font-family: 'Duru sans', 'Roboto', serif;
  font-size: 36px;
  font-weight: bold;
  line-height: 1.5;
`;

export const ProductsListButton = styled.button`
  display: inline-block;
  width: 261px;
  height: 51px;
  background-color: #000000;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-transform: uppercase;
  font-family: 'Duru sans', 'Roboto', serif;
  font-size: 18px;
  line-height: 1;
`;
