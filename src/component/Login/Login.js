import React, { useState, useEffect } from 'react'
import classes from './login.module.css'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { login,clear} from "../../store/action/user"
import { Formik, Field, useFormik } from 'formik';
import * as Yup from 'yup';
import { useSnackbar } from 'react-simple-snackbar'

const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const data = useSelector(state => state.user)

    useEffect(() => {
        dispatch({ type: "CLEAR" })
    },[])
    return (
        <div>
            <div className="row">
                <div className="col mt-5">
                    <div className={classes.half}>

                    </div>
                    <div className="mt-5">
                        <h1>Welcome</h1>
                        <h1>Login To Explore</h1>
                    </div>
                </div>
                <div className="col">
                    <div className={`${classes.image}`}>

                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            email:'',
                            password:''
                        }}
                        onSubmit={async values => {
                            dispatch({ type: "CLEAR" })
                            const data = {
                                email: values.email,
                                password: values.password
                            }
                            dispatch(login(data, history));
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email().required("Email is required"),
                            password: Yup.string().required("Password is required")
                        })}
                    >{
                            ({ values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting, setFieldValue }) => {
                                return (
                                    <form onSubmit={handleSubmit}>
                                        {data && data.errors && 
                                                    <>
                                                        <p style={{ color: "red" }}>{data.errors}</p>
                                                    </>
                                                
                                        }
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input name="email" type="email" value={values.email} onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.email && touched.email
                                                        ? "text-input error form-control"
                                                        : "text-input form-control"
                                                } 
                                                placeholder="Enter email"    
                                            />
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                            {errors.email && touched.email && (
                                                <div className="input-feedback">{errors.email}</div>
                                            )} 
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input name="password" type="password" value={values.password} onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.password && touched.password
                                                        ? "text-input error form-control"
                                                        : "text-input form-control"
                                                } 
                                                placeholder="Enter email"    
                                            />
                                            {errors.password && touched.password && (
                                                <div className="input-feedback">{errors.password}</div>
                                            )} 
                                        </div>
                                       
                                        <div className="mt-3 text-center">
                                            <button type="submit" className="btn btn-primary">Login</button>
                                        </div>
                                        <div className="mt-2 text-center">
                                            <h6>Need an account?<span><Link to="/register">Sign up</Link></span></h6>
                                        </div>
                                    </form>
                                )
                            }
                        }

                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login
