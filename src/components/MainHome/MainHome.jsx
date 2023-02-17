import {
  TopWrapper,
  Box,
  BtnList,
  BtnLink,
  BtnItem,
  BtnWrapper,
  BackspaceVectorIcon,
  FilterWrapper,
  SelectBox,
} from './MainHome.styled';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import list from '../../list.json';
import { useState } from 'react';
const styles = {
  placeholder: defaultStyles => {
    return {
      ...defaultStyles,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'Regular',
      fontSize: '12px',
      lineHeight: '1.17',
      letterSpacing: '2%',
    };
  },
};

export const MainHome = () => {
  // const { currentValue, setCurrentValue } = useState('');
  // const getValue = () => {
  //   return currentValue ? Array.from(
  //   list.map(item => {
  //     let result;
  //     if (item.type === 'Категория товара') {
  //       return (result = Object.assign({
  //         value: item.name,
  //         label: item.name,
  //       }));
  //     }
  //     return result;
  //   })
  // );
  // }
  const filtredArray = Array.from(
    list.map(item => {
      let result;
      if (item.type === 'Категория товара') {
        return (result = Object.assign({
          value: item.name,
          label: item.name,
        }));
      }
      return result;
    })
  );
  const options = filtredArray.filter(item => item !== undefined);
  return (
    <MainWrapper>
      <TopWrapper>
        <BackspaceVectorIcon />
        <FilterWrapper>
          <label htmlFor="selectCetegory">
            <select id="selectCetegory" placeholder="Product category" required>
              <option value="" disabled selected>
                Product category...
              </option>
              <option value="grapefruit">Transport</option>
              <option value="lime">Products</option>
              <option value="coconut">Health</option>
            </select>
          </label>
          <input type="submit" value="Отправить" />
        </FilterWrapper>
      </TopWrapper>
      <Box>
        <BtnWrapper>
          <BtnList>
            <BtnItem>
              <BtnLink>Expenses</BtnLink>
            </BtnItem>
            <BtnItem>
              <BtnLink>Income</BtnLink>
            </BtnItem>
          </BtnList>
        </BtnWrapper>
      </Box>
    </MainWrapper>
  );
};
