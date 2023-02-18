import {
  TopWrapper,
  Box,
  BtnList,
  BtnLink,
  BtnItem,
  BtnWrapper,
  BackspaceVectorIcon,
  FilterWrapper,
  SelectField,
  InputField,
  FormBox,
  FormInputWrapper,
  SecondaryInputWrapper,
  CalculatorIcon,
  InputFieldSecondary,
  BtnSubmitList,
  BtnSubmitItem,
  BtnSubmit,
  BtnSecondary,
} from './MainHome.styled';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { Field, Form, Formik, FormikProps } from 'formik';

export const MainHome = () => {
  return (
    <MainWrapper>
      <TopWrapper></TopWrapper>
      <Box>
        <BackspaceVectorIcon />
        <FilterWrapper>
          <Formik
            initialValues={{
              category: '',
              description: '',
            }}
          >
            <FormBox>
              <FormInputWrapper>
                <InputField
                  as="input"
                  type="text"
                  name="description"
                  placeholder="Product description"
                />
                <SelectField
                  as="select"
                  name="category"
                  placeholder="Product category"
                >
                  <option value="" label="Product category"></option>
                  <option value="transport">Transport</option>
                  <option value="products">Products</option>
                  <option value="health">Health</option>
                  <option value="alcohol">Alcohol</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="housing">Housing</option>
                  <option value="technique">Technique</option>
                  <option value="communal, communication">
                    Communal, communication
                  </option>
                  <option value="sports">Sports</option>
                  <option value="hobbies">Hobbies</option>
                  <option value="others">Others</option>
                </SelectField>
              </FormInputWrapper>
              <SecondaryInputWrapper>
                <InputFieldSecondary
                  as="input"
                  type="text"
                  name="amount"
                  placeholder="00.00 UAH"
                />
                <CalculatorIcon />
              </SecondaryInputWrapper>
              <BtnSubmitList>
                <BtnSubmitItem>
                  <BtnSubmit type="submit">Submit</BtnSubmit>
                </BtnSubmitItem>
                <BtnSubmitItem>
                  <BtnSecondary type="button">Clear</BtnSecondary>
                </BtnSubmitItem>
              </BtnSubmitList>
            </FormBox>
          </Formik>
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
