import {
  TopWrapper,
  Box,
  BtnTopList,
  BackspaceVectorIcon,
  FilterWrapper,
  ButtonLink,
  ButtonNavLink,
  ButtonTopList,
} from './MainHome.styled';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { TransactionFormExpences } from '../TransactionFormExpences/TransactionFormExpenses';
import { TransactionFormIncome } from '../TransactionFormIncome/TransactionFormIncome';

export const MainHome = () => {
  return (
    <MainWrapper>
      <TopWrapper />
      <Box>
        <BackspaceVectorIcon />
        <FilterWrapper>
          <ButtonTopList>
            <ButtonNavLink>
              <ButtonLink>Expences</ButtonLink>
            </ButtonNavLink>
            <ButtonNavLink>
              <ButtonLink>Income</ButtonLink>
            </ButtonNavLink>
          </ButtonTopList>
          <TransactionFormExpences />
          {/* <TransactionFormIncome /> */}
        </FilterWrapper>
      </Box>
    </MainWrapper>
  );
};
