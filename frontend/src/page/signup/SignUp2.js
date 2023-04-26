import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { validationSchema } from './../ValidationSchema';

import { Button, TextField, Typography } from '@mui/material';

import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';

import styles from './Signup2.module.scss';
import userActions from '~/redux/actions/userActions';

const Signup2 = (props) => {
  const schema = validationSchema;
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      address: '',
      phone: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (values) => {
    props.signup(values);
  };
  return (
    <div className={styles.signUpContainer}>
      <Header />
      <div className={styles.signUpBody}>
        <div className={styles.contentContainer}>
          <div className={styles.contentBody}>
            <div className={styles.formSignUp}>
              <div className={styles.image}>
                <img src="../../../image/logo/logomobilepart3.png" alt="" />
              </div>
              <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.formMain}>
                    <div className={styles.formContainer}>
                      <div className={styles.formText}>
                        <Typography className={styles.textSignUp}>Sign Up</Typography>
                      </div>
                      <div className={styles.formName}>
                        <Controller
                          name="firstName"
                          control={control}
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <div className={styles.formControlInput}>
                              <TextField
                                className={styles.formInput}
                                {...register}
                                fullWidth
                                onChange={onChange}
                                margin="dense"
                                label="First Name *"
                                autoComplete="firstName"
                                error={!!errors?.firstName}
                                helperText={errors?.firstName ? errors.firstName.message : null}
                              />
                            </div>
                          )}
                        />
                        <Controller
                          name="lastName"
                          control={control}
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <div className={styles.formControlInput}>
                              <TextField
                                className={styles.formInput}
                                {...register}
                                fullWidth
                                onChange={onChange}
                                margin="dense"
                                label="Last Name *"
                                autoComplete="lastName"
                                error={!!errors?.lastName}
                                helperText={errors?.lastName ? errors.lastName.message : null}
                              />
                            </div>
                          )}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <Controller
                          name="username"
                          control={control}
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                              className={styles.formInput}
                              {...register}
                              fullWidth
                              onChange={onChange}
                              margin="dense"
                              label="User Name *"
                              autoComplete="username"
                              error={!!errors?.username}
                              helperText={errors?.username ? errors.username.message : null}
                            />
                          )}
                        />
                        <Controller
                          name="email"
                          control={control}
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                              className={styles.formInput}
                              {...register}
                              fullWidth
                              onChange={onChange}
                              margin="dense"
                              label="Email *"
                              autoComplete="email"
                              error={!!errors?.email}
                              helperText={errors?.email ? errors.email.message : null}
                            />
                          )}
                        />
                        <Controller
                          name="address"
                          control={control}
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                              className={styles.formInput}
                              {...register}
                              fullWidth
                              onChange={onChange}
                              margin="dense"
                              label="Address *"
                              autoComplete="address"
                              error={!!errors?.address}
                              helperText={errors?.address ? errors.address.message : null}
                            />
                          )}
                        />
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                              className={styles.formInput}
                              {...register}
                              fullWidth
                              onChange={onChange}
                              margin="dense"
                              label="Phone *"
                              autoComplete="phone"
                              error={!!errors?.phone}
                              helperText={errors?.phone ? errors.phone.message : null}
                            />
                          )}
                        />
                        <Controller
                          name="password"
                          control={control}
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                              className={styles.formInput}
                              {...register}
                              fullWidth
                              onChange={onChange}
                              type="password"
                              margin="dense"
                              label="Password *"
                              autoComplete="password"
                              error={!!errors?.password}
                              helperText={errors?.password ? errors.password.message : null}
                            />
                          )}
                        />
                        <Button className={styles.btnSubmit} type="submit">
                          Submit
                        </Button>
                        <Typography className={styles.textContract}>
                          Bằng việc đăng ký, bạn đã đồng ý với TheGioiDiDong về <Link>Điều khoản dịch vụ</Link> &{' '}
                          <Link>Chính sách bảo mật</Link>
                        </Typography>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.userInfo.isLoading,
    errorMessageRegister: state.userInfo.errorMessageRegister,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    signup: (user) => {
      dispatch(userActions.registerUser(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup2);
