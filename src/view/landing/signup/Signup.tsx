import React from 'react';
import Link from 'next/link';
import {
  BaseButton,
  BaseContainer,
  BaseInput,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './Signup.module.scss';
import { FirstStep, SecondStep } from '@content/index';

interface Props {}

const Signup: React.FC<Props> = () => {
  const [step, setStep] = React.useState(1);

  const [formData, setFormData] = React.useState({
    email: '',
    phone: '',
    password: '',
    personalData: {
      sex: '',
      firstName: '',
      lastName: '',
      date: '',
    },
    personalAdress: {
      country: '',
      postcode: '',
      city: '',
      adress1: '',
      adress2: '',
    },
    business: {
      countryOfIncorporation: '',
      legalName: '',
      registerNumber: '',
      incorporationDate: '',
      businessType: '',
    },
  });

  // обрабатываем входные данные формы и, приминая значение данных формы, обновляем наше предыдущее состояние
  const handleInputData =
    (input) => (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      console.log('input: ', input);
      // input value из инпутов с каждой страницы формы
      const { value } = e.target;

      //обновление состояния данных, принимая предыдущее состояние, а затем добавляя новое значение для создания нового объекта
      setFormData((prevState) => ({
        ...prevState,
        [input]: value,
      }));
      console.log('formData: ', formData);
    };

  const nextStep = () => {
    setStep(step + 1);
  };

  switch (step) {
    case 1:
      return (
        <BaseContainer>
          <FirstStep
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </BaseContainer>
      );
    case 2:
      return (
        <SecondStep
          nextStep={nextStep}
          handleFormData={handleInputData}
          values={formData}
        />
      );

    default:
      return null;
  }
};

export default Signup;
