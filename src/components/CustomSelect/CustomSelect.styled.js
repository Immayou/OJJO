import styled from '@emotion/styled';
import Select from 'react-select';

export const SelectField = styled(Select)`
  min-height: 44px;
  width: 100%;
  color: #c7ccdc;
  /* padding-left: 10px; */
  border: none;
  border-top: 2px solid #ffffff;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  font-style: regular;
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: 0.02em;
  border-bottom-right-radius: 12px;
  appearance: none;
  outline: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #ffffff;
  }
`;
