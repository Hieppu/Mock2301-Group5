import React from 'react'
import { validationSchema } from './../ValidationSchema';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import './Signup2.scss'
import {
    Button,
    TextField,
    Typography,
} from "@mui/material";
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
// import { Button } from '../../custom/ImportCustom';
const Signup = (props) => {
    const schema = validationSchema
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            address: '',
            phone: '',
            password: '',
        },
        resolver: yupResolver(schema)
    });
    const onSubmit = data => {
        console.log(data)

    };
    return (
        <div className='signup-container'>
            <div className="signup-header">
                <div className='form-text'>
                    <div className='link-content'>
                        <Link className='logo-mobile'>
                            <img src="../../../image/logomobile.png" alt="" />
                        </Link>
                        <div className='text'>Đăng ký</div>
                    </div>
                    <div className='helper'>
                        <Link>Bạn cần giúp đỡ?</Link>
                    </div>
                </div>
            </div>
            <div className='signup-body'>
                <div className='content-container'>
                    <div className='content-body'>
                        <div className='form-signup'>
                            <div className='image'>
                                <img src="../../../image/logomobilepart3.png" alt="" />
                            </div>
                            <div className='form'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='form-main'>
                                        <div className='form-container'>
                                            <div className='form-text'>
                                                <Typography className='text-signup'>
                                                    Sign Up
                                                </Typography>
                                            </div>
                                            <div className='form-name'>
                                                <Controller
                                                    name="firstName"
                                                    control={control}
                                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                                        <div className='formcontrol-input'>
                                                            <TextField
                                                                className='form-input'
                                                                {...register}
                                                                fullWidth
                                                                onChange={onChange}
                                                                margin="dense"
                                                                label="First Name *"
                                                                autoComplete='firstName'
                                                                autoFocus
                                                                error={!!errors?.firstName}
                                                                helperText={errors?.firstName ? errors.firstName.message : null} />
                                                        </div>
                                                    )}
                                                />
                                                <Controller
                                                    name="lastName"
                                                    control={control}
                                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                                        <div className='formcontrol-input'>
                                                            <TextField
                                                                className='formcontrol-input'
                                                                {...register}
                                                                fullWidth
                                                                onChange={onChange}
                                                                margin="dense"
                                                                label="Last Name *"
                                                                autoComplete='lastName'
                                                                autoFocus
                                                                error={!!errors?.lastName}
                                                                helperText={errors?.lastName ? errors.lastName.message : null} />
                                                        </div>
                                                    )}
                                                />

                                            </div>
                                            <div className='form-group'>
                                                <Controller
                                                    name="username"
                                                    control={control}
                                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                                        <TextField
                                                            className='form-input'
                                                            {...register}
                                                            fullWidth
                                                            onChange={onChange}
                                                            margin="dense"
                                                            label="User Name *"
                                                            autoComplete='username'
                                                            autoFocus
                                                            error={!!errors?.username}
                                                            helperText={errors?.username ? errors.username.message : null} />
                                                    )}
                                                />
                                                <Controller
                                                    name="email"
                                                    control={control}
                                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                                        <TextField
                                                            className='form-input'
                                                            {...register}
                                                            fullWidth
                                                            onChange={onChange}
                                                            margin="dense"
                                                            label="Email *"
                                                            autoComplete='email'
                                                            autoFocus
                                                            error={!!errors?.email}
                                                            helperText={errors?.email ? errors.email.message : null} />
                                                    )}
                                                />
                                                <Controller
                                                    name="address"
                                                    control={control}
                                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                                        <TextField
                                                            className='form-input'
                                                            {...register}
                                                            fullWidth
                                                            onChange={onChange}
                                                            margin="dense"
                                                            label="Address *"
                                                            autoComplete='address'
                                                            autoFocus
                                                            error={!!errors?.address}
                                                            helperText={errors?.address ? errors.address.message : null} />
                                                    )}
                                                />
                                                <Controller
                                                    name="phone"
                                                    control={control}
                                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                                        <TextField
                                                            className='form-input'
                                                            {...register}
                                                            fullWidth
                                                            onChange={onChange}
                                                            margin="dense"
                                                            label="Phone *"
                                                            autoComplete='phone'
                                                            autoFocus
                                                            error={!!errors?.phone}
                                                            helperText={errors?.phone ? errors.phone.message : null} />
                                                    )}
                                                />
                                                <Controller
                                                    name="password"
                                                    control={control}
                                                    render={({ field: { onChange, onBlur, value, ref } }) => (

                                                        <TextField
                                                            className='form-input'
                                                            {...register}
                                                            fullWidth
                                                            onChange={onChange}
                                                            type='password'
                                                            margin="dense"
                                                            label="Password *"
                                                            autoComplete='password'
                                                            autoFocus
                                                            error={!!errors?.password}
                                                            helperText={errors?.password ? errors.password.message : null} />
                                                    )}
                                                />
                                                <Button className='btn-submit' type='submit'>
                                                    Submit
                                                </Button>
                                                <Typography className='text-contract'>
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

export default Signup