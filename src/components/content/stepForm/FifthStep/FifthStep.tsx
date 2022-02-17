import React from 'react';
import Link from 'next/link';
import { BaseButton, BaseInput, BaseText, BaseTitle } from '@base/index';
import styles from './FifthStep.module.scss';
import { LinkHome, ValidItem } from '@content/index';

interface Props {
  nextStep: () => void;
}

const FifthStep: React.FC<Props> = ({ nextStep }) => {
  const [password, setPassword] = React.useState<number | string>('');
  const changeHandlerPassword = (value: number) => {
    setPassword(value);
  };

  const [repeatPassword, setRepeatPassword] = React.useState<number | string>(
    ''
  );
  const changeHandlerRepeatPassword = (value: number) => {
    setRepeatPassword(value);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('phone: ', password);
    console.log('repeatPassword: ', repeatPassword);
    nextStep();
  };

  return (
    <div className={styles.Container}>
      <div className={styles.LeftBlock}>
        <div className={styles.CreatePassword}>
          <form action='' method='post'>
            <BaseTitle className={styles.Title}>Create your password</BaseTitle>
            <BaseText className={styles.Subtitle}>
              And start using Esoque
            </BaseText>

            <BaseInput
              name='password'
              placeholder='Password'
              type='password'
              required
              autocomplete='on'
              value={password}
              onChange={changeHandlerPassword}
              className={styles.Input}
            />

            <BaseInput
              name='password'
              placeholder='Repeat Password'
              type='password'
              required
              autocomplete='on'
              value={repeatPassword}
              onChange={changeHandlerRepeatPassword}
              className={styles.Input}
              error='Your passwords did not match'
            />

            <div className={styles.Btns}>
              <BaseButton onClick={submitFormData} className={styles.BtnLogin}>
                Continue
              </BaseButton>

              <LinkHome className={styles.LinkHome} />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.RightBlock}>
        <div className={styles.ValidationPassword}>
          <ValidItem
            done={true}
            text='Passwords must contain at least one digit'
            className={styles.ValidItem}
          />

          <ValidItem
            done={true}
            text='Passwords must contain at least one lowercase letter'
            className={styles.ValidItem}
          />
          <ValidItem
            done={true}
            text='Passwords must contain at least one uppercase letter'
            className={styles.ValidItem}
          />
          <ValidItem
            done={true}
            text='Passwords must have a minimal length of 8 characters'
            className={styles.ValidItem}
          />
          <ValidItem
            done={true}
            text='Passwords must contain at least one special character'
            className={styles.ValidItem}
          />
          <ValidItem
            done={false}
            text='Passwords must match'
            className={styles.ValidItem}
          />
        </div>
      </div>
    </div>
  );
};

export default FifthStep;
