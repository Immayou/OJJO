import { Formik, useFormik } from 'formik';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import {
  InputField,
  FormBox,
  FormInputWrapper,
  SecondaryInputWrapper,
  CalculatorIcon,
  TextSecondary,
  BtnSubmitList,
  BtnSubmitItem,
  BtnSubmit,
  BtnSecondary,
  FlexBox,
  BtnSubmitTopList,
} from './TransactionFormIncome.styled';

const options = [
  { value: 'salary', label: 'Salary' },
  { value: 'add income', label: 'Add income' },
];

const validate = values => {
  const errors = {};
  if (!values.description) {
    errors.description = 'Description is required';
  }
  if (!values.category) {
    errors.category = 'Category is required';
  }
  return errors;
};

export const TransactionFormIncome = () => {
  const formik = useFormik({
    initialValues: {
      category: '',
      description: '',
    },
    validate,
    onSubmit: value => {
      console.log(value);
    },
  });

  return (
    <Formik>
      <FormBox onSubmit={formik.handleSubmit}>
        <FlexBox>
          <div style={{ width: '100px' }}></div>
          <FormInputWrapper>
            <InputField
              as="input"
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              onChange={formik.handleChange}
              values={formik.values.description}
              required
            />
            {/* {formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null} */}
            <CustomSelect
              options={options}
              value={formik.values.category}
              type="Category"
              onChange={value => formik.setFieldValue('category', value.value)}
            ></CustomSelect>
            {/* {formik.errors.category ? <div>{formik.errors.category}</div> : null} */}
          </FormInputWrapper>
        </FlexBox>
        <SecondaryInputWrapper>
          <TextSecondary>00.00 UAH</TextSecondary>
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
  );
};
