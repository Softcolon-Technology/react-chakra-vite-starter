/* eslint-disable no-useless-escape */
import * as Yup from 'yup';

export const AdminUpdateSchema = (t) =>
  Yup.object().shape({
    email: Yup.string()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        t('form_errors.invalid_email')
      )
      .max(255)
      .required(t('form_errors.required_email')),
    password: Yup.string()
      .min(6, t('form_errors.password_minimum_characters'))
      .max(255)
      .required(t('form_errors.required_password')),
  });

export const AddAdminSchema = (t) =>
  Yup.object().shape({
    // email: Yup.string().email(t("form_errors.invalid_email")).max(255).required(t("form_errors.required_email"))
    email: Yup.string()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        t('form_errors.invalid_email')
      )
      .max(255)
      .required('メールアドレス必須'),
  });
