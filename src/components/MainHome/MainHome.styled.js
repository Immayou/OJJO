import styled from '@emotion/styled';
import BCGImageTopTablet from '../../images/TopLogoTablet.png';
import BCGImageBottom from '../../images/BottomLogo.png';
import { ReactComponent as BackspaceIcon } from '../../images/KeyboardBackspace.svg';
import Select from 'react-select';

// main container //

export const TopWrapper = styled.section`
  position: relative;
  padding: 56px 20px 0 20px;
  min-height: 258px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 80px;
  overflow-x: hidden;
  overflow-y: visible;
  @media screen and (min-width: 768px) {
    padding: 0 32px;
    min-height: 526px;
    border-bottom-left-radius: 180px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 91px;
    border-bottom-left-radius: 110px;
  }
`;

export const TopBalanceWrapper = styled.section`
  position: relative;
  padding: 0 20px;
  min-height: 258px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    padding: 0 32px;
    min-height: 526px;
    border-bottom-left-radius: 180px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 91px;
    border-bottom-left-radius: 110px;
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    background-image: url(${BCGImageBottom});
    background-position: 90% 90%;
    background-repeat: no-repeat;
    background-size: 183px 146px;
  }
  @media screen and (min-width: 1280px) {
    background: url(${BCGImageTopTablet});
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: auto auto;
  }
`;

export const BackspaceVectorIcon = styled(BackspaceIcon)`
  position: absolute;
  top: 5%;
  left: 8%;
  &:hover {
    fill: #ffffff;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

// Form //

export const FilterWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  @media screen and (min-width: 768px) {
    top: 184px;
    left: 50%;
    transform: translateX(-50%);
    width: 704px;
    background-color: #fff;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    border-top-left-radius: 0px;
    box-shadow: 0px 10px 60px 0px rgba(170, 178, 197, 0.2);
    padding: 24px 40px;
  }
`;

// Bottom buttons

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BtnList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnItem = styled.li`
  display: flex;
  width: 100%;
  font-size: 23px;
  background-color: #f5f6fb;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :not(:last-child) {
    margin-right: 2px;
  }
  &:hover {
    background-color: #ff751d;
  }
`;
export const BtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 53px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  font-style: bold;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 2%;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #ff751d;
    color: #ffffff;
  }
`;
