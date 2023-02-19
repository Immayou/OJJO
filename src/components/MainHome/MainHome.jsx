import {
  TopWrapper,
  Box,
  BtnList,
  BtnLink,
  BtnItem,
  BtnWrapper,
  BackspaceVectorIcon,
  FilterWrapper,
} from './MainHome.styled';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { TransactionFormExpences } from '../TransactionFormExpences/TransactionFormExpenses';
import { TransactionFormIncome } from '../TransactionFormIncome/TransactionFormIncome';

export const MainHome = () => {
  return (
    <MainWrapper>
      {/* <TopBalanceWrapper> 

        //тут рендеримо обгорнутий у дів баланс і рендеримо увесь компонент TopBalanceWrapper за необхідності// 

      </TopBalanceWrapper> 
       */}

      <TopWrapper />
      <Box>
        <BackspaceVectorIcon />
        {/* <BtnSubmitTopList /> */}
        <FilterWrapper>
          <TransactionFormExpences />
          {/* <TransactionFormIncome /> */}
        </FilterWrapper>
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
