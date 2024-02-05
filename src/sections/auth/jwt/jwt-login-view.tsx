import { useState } from 'react';
import { Box, Flex, Link, Stack, useToast } from '@chakra-ui/react';

//  redux

import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { LoginSchema } from 'src/validations/login.validation';

import AdminHeader from 'src/components/header/AdminHeader';
import LoginButton from 'src/components/button/LoginButton';
import CustomInputLogin from 'src/components/form/CustomInputLogin';
import CustomPasswordField from 'src/components/form/CustomPasswordField';

const LoginPage = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const toast = useToast();

  // useEffect(() => {
  //     if (user && user.access_token) {
  //         navigate("/dashboard");
  //     }
  // }, []);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // submit handler
  const onSubmit = async () => {
    //
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      email: import.meta.env.VITE_APP_EMAIL ?? '',
      password: import.meta.env.VITE_APP_PASSWORD ?? '',
    },
    validationSchema: LoginSchema(t),
    onSubmit,
  });

  return (
    <Flex align="center" mt={5} flexDir="column">
      <AdminHeader />
      {/* form  */}

      <Box rounded="lg" bg="white" boxShadow="lg" p={8} width="md">
        <form onSubmit={handleSubmit} autoComplete="off">
          <Stack spacing={4}>
            <CustomInputLogin
              label={String(t('login.email'))}
              name="email"
              Type="email"
              values={values.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.email}
              touched={touched.email}
              isMandatory
            />

            <CustomPasswordField
              label={t('login.password')}
              name="password"
              value={values.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.password}
              touched={touched.password}
              isMandatory
            />

            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align="start"
                justify="space-between"
              >
                <Link
                  color="blue.400"
                  textDecoration="none"
                  onClick={() => router.push(paths.auth.forgetPassword)}
                >
                  {`${t('login.forgot_password')}?`}
                </Link>
              </Stack>
            </Stack>

            <Stack spacing={10}>
              <LoginButton label="login.login" isSubmitting={isLoading} />
            </Stack>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginPage;
