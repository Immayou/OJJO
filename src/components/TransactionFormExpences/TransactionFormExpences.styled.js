import styled from '@emotion/styled';
import { ReactComponent as Calculator } from '../../images/Calculator.svg';
import { Field, Form } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* @media screen and (min-width: 768px) {
    width: 480px;
  } */
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
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12),
      0px 4px 10px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;
    border: none;
    width: 370px;
  }
`;

export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 2px solid #f5f6fb;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 16px;
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
  color: #52555f;
  ::placeholder {
    color: #c7ccdc;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    border-right: 2px solid #f5f6fb;
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
    margin-bottom: 0px;
    width: 110px;
    border: none;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: 2px solid #f5f6fb;
  }
`;

export const TextSecondary = styled(Field)`
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
  ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: regular;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    /* color: #000000; */
  }
  &:hover {
    /* color: #52555f; */
  }
  @media screen and (min-width: 768px) {
    padding: 10px 0px 10px 20px;
    border: none;
  }
`;

export const CalculatorIcon = styled(Calculator)`
  width: 20px;
  height: 20px;
  padding: 12px 20px;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    padding: 10px;
  }
`;

// Buttons for Submit

export const BtnSubmitList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 265px;
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
  /* height: 44px; */
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 1px 2px 5px 0px rgba(170, 178, 197, 0.4);
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
  @media screen and (min-width: 768px) {
    width: 125px;
  }
`;
export const BtnSecondary = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  color: #52555f;
  width: 130px;
  /* height: 44px; */
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 1px 2px 5px 0px rgba(170, 178, 197, 0.4);
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
  @media screen and (min-width: 768px) {
    width: 125px;
  }
`;
