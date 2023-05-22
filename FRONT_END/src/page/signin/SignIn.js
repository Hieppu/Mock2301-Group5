import React from 'react'
import { Formik } from "formik";
import { Link } from 'react-router-dom';
import './SignIn.scss'
import { validationSchema } from '../ValidationSchema';
import {
    Button,
    TextField,
    Typography,
    Box
} from "@mui/material";
import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';
// eslint-disable-next-line no-lone-blocks
{/* <p>{props.errorMessageRegister}</p> */ }

const Signup = (props) => {
    return (
        <div className='signup-container'>
            <Header />
            <div className='signup-body'>
                <div className='content-container'>
                    <div className='content-body'>
                        <div className='form-signup'>
                            <div>
                                <img src="../../../image/logomobilepart2.png" alt="" />
                            </div>
                            <div className='form'>
                                <Formik
                                    initialValues={{
                                        username: '',
                                        password: '',
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { setSubmitting, resetForm }) => {
                                        alert(JSON.stringify(values, null, 2));
                                        resetForm({ values: '' })
                                        setSubmitting(false);
                                    }}
                                >
                                    {({ values, initialValues, touched, handleChange, errors, handleBlur }) => {
                                        return (
                                            <form>
                                                <Box className='form-signup'>
                                                    <Box className='form-parent'>
                                                        <Typography className='text-signup'>
                                                            Sign In
                                                        </Typography>
                                                       
                                                        <div className='form-group'>
                                                            <TextField
                                                                className='form-input'
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
                                                                className='form-input'
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
                                                            <Button className='btn-submit' type='submit'>
                                                                Login
                                                            </Button>
                                                            <Box>
                                                                <Typography className='text-contract'>
                                                                    Bằng việc đăng ký, bạn đã đồng ý với TheGioiDiDong về <Link>Điều khoản dịch vụ</Link> & <Link>Chính sách bảo mật</Link>
                                                                </Typography>
                                                            </Box>
                                                        </div>
                                                    </Box>
                                                </Box>
                                            </form>
                                        )
                                    }}
                                </Formik>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Signup