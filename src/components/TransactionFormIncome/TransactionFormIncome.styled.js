import styled from '@emotion/styled';
import { ReactComponent as Calculator } from '../../images/Calculator.svg';
import { Field, Form } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FormInputWrapper = styled.div`
  border: 2px solid #ffffff;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  margin-bottom: 32px;
  width: 100%;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    border-color: #f5f6fb;
  }
`;

export const FlexBox = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const InputField = styled(Field)`
  width: 280px - 20px;
  padding: 10px 0px 10px 20px;
  border: none;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  font-style: regular;
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: 0.02em;
  color: #c7ccdc;
  ::placeholder {
    color: #c7ccdc;
  }
`;

// Secondary input

export const SecondaryInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 183px;
  border-radius: 22px;
  border: 2px solid #ffffff;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TextSecondary = styled.p`
  border: none;
  border-right: 2px solid #ffffff;
  background-color: transparent;
  width: 66.6666%;
  padding: 12px 0 12px 25%;
  font-family: Roboto, sans-serif;
  font-style: regular;
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: 0.02em;
  color: #000000;
`;

export const CalculatorIcon = styled(Calculator)`
  width: 20px;
  height: 20px;
  padding: 12px 20px;
  flex-shrink: 0;
`;

// Buttons for Submit

export const BtnSubmitTopList = styled.ul`
  position: absolute;
  top: -100%;
  left: 0;
  width: 100px;
  height: 20px;
`;

export const BtnSubmitList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const BtnSubmitItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 23px;
  border-radius: 16px;
  background-color: #f5f6fb;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;
export const BtnSubmit = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  color: #52555f;
  width: 130px;
  height: 44px;
  border-radius: 16px;
  font-family: Roboto, sans-serif;
  font-style: bold;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #ff751d;
    color: #ffffff;
  }
`;
export const BtnSecondary = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  color: #52555f;
  width: 130px;
  height: 44px;
  border-radius: 16px;
  font-family: Roboto, sans-serif;
  font-style: bold;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #ff751d;
    color: #ffffff;
  }
`;
