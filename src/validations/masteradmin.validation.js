import * as Yup from 'yup';

// Inqury
export const GroupSchema = (t) =>
  Yup.object().shape({
    name: Yup.string().max(255).required('グループ名必須'),
    order: Yup.number()
      .required('並び順必須')
      .typeError('並び順必須')
      .positive('数値は正数でなければならない'),
  });

export const GroupSchemaWithTab = (t) =>
  Yup.object().shape({
    name: Yup.string().max(255).required('グループ名必須'),
    order: Yup.number()
      .required('並び順必須')
      .typeError('並び順必須')
      .positive('数値は正数でなければならない'),
    tab: Yup.object().shape({
      value: Yup.string().required('タブ名必須'),
    }),
  });

export const GroupSchemaForOcuupation = (t) =>
  Yup.object().shape({
    name: Yup.string().max(255).required('タブ名必須'),
    order: Yup.number()
      .required('並び順必須')
      .typeError('並び順必須')
      .positive('数値は正数でなければならない'),
  });

export const OccupationSchema = (t) =>
  Yup.object().shape({
    name: Yup.string().max(255).required('資格名必須'),
    // group: Yup.string().max(255).required("グループ必須"),
    order: Yup.number()
      .required('並び順必須')
      .typeError('並び順必須')
      .positive('数値は正数でなければならない'),
    group: Yup.object()
      .shape({
        value: Yup.string().required('グループ名必須'),
      })
      .required('グループ名必須'),
    tab: Yup.object().shape({
      _id: Yup.string().required('タブ名必須'),
    }),
  });

export const QualificationSchema = (t) =>
  Yup.object().shape({
    name: Yup.string().max(255).required('資格名必須'),
    // group: Yup.string().max(255).required("グループ必須"),
    order: Yup.number()
      .required('並び順必須')
      .typeError('並び順必須')
      .positive('数値は正数でなければならない'),
    group: Yup.object()
      .shape({
        value: Yup.string().required('グループ名必須'),
      })
      .required('グループ名必須'),
  });

export const CategorySchema = (t) =>
  Yup.object().shape({
    name: Yup.string().max(255).required('カテゴリ名必須'),
    order: Yup.number()
      .required('並び順必須')
      .typeError('並び順必須')
      .positive('数値は正数でなければならない'),
  });

export const TargetedRegistrationSchema = () =>
  Yup.object().shape({
    goalUserRegistration: Yup.number()
      .required('当月登録数必須')
      .typeError('当月登録数必須')
      .positive('数値は正数でなければならない'),
    date: Yup.string().required('日付必須'),
  });
