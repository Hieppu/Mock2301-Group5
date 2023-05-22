import React from 'react'
import { Link } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { validationSchema } from '../ValidationSchema';

import {
    Button,
    TextField,
    Typography,
} from "@mui/material";

import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';

import styles from './Signin2.module.scss'

const Signup2 = (props) => {
    const schema = validationSchema
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        },
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        console.log(data)
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
                                                <Typography className={styles.textSignUp}>
                                                    Sign In
                                                </Typography>
                                            </div>
                                            <div className={styles.formName}>
                                               

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
                                                            autoComplete='username'
                                                            error={!!errors?.username}
                                                            helperText={errors?.username ? errors.username.message : null} />
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
                                                            type='password'
                                                            margin="dense"
                                                            label="Password *"
                                                            autoComplete='password'
                                                            error={!!errors?.password}
                                                            helperText={errors?.password ? errors.password.message : null} />
                                                    )}
                                                />
                                                <Button className={styles.btnSubmit} type='submit' >
                                                    Login
                                                </Button>
                                                <Typography className={styles.textContract}>
                                                    Bằng việc đăng ký, bạn đã đồng ý với TheGioiDiDong về <Link>Điều khoản dịch vụ</Link> & <Link>Chính sách bảo mật</Link>
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
        </div >
    )
}

export default Signup2