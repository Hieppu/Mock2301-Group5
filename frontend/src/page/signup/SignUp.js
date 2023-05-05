import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import './SignUp.scss';
import { validationSchema } from './../ValidationSchema';
import { Button, TextField, Typography, Box } from '@mui/material';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';
// eslint-disable-next-line no-lone-blocks
{
  /* <p>{props.errorMessageRegister}</p> */
}

const Signup = (props) => {
  return (
    <div className="signup-container">
      <Header />
      <div className="signup-body">
        <div className="content-container">
          <div className="content-body">
            <div className="form-signup">
              <div>
                <img src="../../../image/logomobilepart2.png" alt="" />
              </div>
              <div className="form">
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    address: '',
                    phoneNumber: '',
                    password: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm({ values: '' });
                    setSubmitting(false);
                  }}
                >
                  {({ values, initialValues, touched, handleChange, errors, handleBlur }) => {
                    return (
                      <form>
                        <Box className="form-signup">
                          <Box className="form-parent">
                            <Typography className="text-signup">Sign Up</Typography>
                            <div className="form-name">
                              <TextField
                                className="form-input"
                                fullWidth
                                margin="dense"
                                id="firstName"
                                name="firstName"
                                label="First Name *"
                                value={values.firstName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.firstName && Boolean(errors.firstName)}
                                helperText={touched.firstName && errors.firstName}
                              />
                              <TextField
                                className="form-input"
                                fullWidth
                                margin="dense"
                                id="lastName"
                                name="lastName"
                                label="Last Name *"
                                value={values.lastName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.lastName && Boolean(errors.lastName)}
                                helperText={touched.lastName && errors.lastName}
                              />
                            </div>
                            <div className="form-group">
                              <TextField
                                className="form-input"
                                fullWidth
                                margin="dense"
                                id="username"
                                name="username"
                                label="User Name *"
                                value={values.username}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.username && Boolean(errors.username)}
                                helperText={touched.username && errors.username}
                              />
                              <TextField
                                className="form-input"
                                fullWidth
                                margin="dense"
                                id="email"
                                name="email"
                                label="Email *"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                              />
                              <TextField
                                className="form-input"
                                fullWidth
                                margin="dense"
                                id="address"
                                name="address"
                                label="Address *"
                                value={values.address}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.address && Boolean(errors.address)}
                                helperText={touched.address && errors.address}
                              />
                              <TextField
                                className="form-input"
                                fullWidth
                                margin="dense"
                                id="phone"
                                name="phone"
                                label="Phone *"
                                value={values.phoneNumber}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                                helperText={touched.phoneNumber && errors.phoneNumber}
                              />
                              <TextField
                                className="form-input"
                                fullWidth
                                margin="dense"
                                id="password"
                                name="password"
                                label="Password *"
                                type="password"
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                              />
                              <Button className="btn-submit" type="submit">
                                Submit
                              </Button>
                              <Box>
                                <Typography className="text-contract">
                                  Bằng việc đăng ký, bạn đã đồng ý với TheGioiDiDong về <Link>Điều khoản dịch vụ</Link>{' '}
                                  & <Link>Chính sách bảo mật</Link>
                                </Typography>
                              </Box>
                            </div>
                          </Box>
                        </Box>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Signup;
