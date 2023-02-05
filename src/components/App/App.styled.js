import styled from '@emotion/styled';
import BCG from '../../images/MainBCG.jpg';

export const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  background-image: url(${BCG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Container = styled.div`
  padding: 20px;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 50px;
  color: #ffffff;
  font-family: 'Noto Serif', 'Roboto', serif;
  font-size: 36px;
  font-weight: bold;
  line-height: 1.5;
`;
