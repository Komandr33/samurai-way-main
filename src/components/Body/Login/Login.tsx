import {useFormik} from 'formik';
import {useAppDispatch} from '../../../redux/store-redux';
import React from 'react';
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from '@mui/material';
import {loginTC} from '../../../redux/auth-reducer';
import {AuthRequestType} from '../../../api/api';


export const Login = () => {
  const dispatch = useAppDispatch();


  const formik = useFormik({
    validate: (values) => {
      if (!values.email) {
        return {
          email: 'Email is required'
        };
      }
      if (!values.password) {
        return {
          password: 'Password is required'
        };
      }
    },
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    onSubmit: (values:AuthRequestType) => {
      dispatch(loginTC(values));
    }
  });

  // if (isLoggedIn) {
  //   return <Navigate to={'/'}/>;
  // }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={4}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel>
              <p>
                To log in get registered{' '}
                <a href={'https://social-network.samuraijs.com/'} target={'_blank'}>
                  here
                </a>
              </p>
              <p>log in / register</p>
            </FormLabel>
            <FormGroup>
              <TextField label="Email" margin="normal" {...formik.getFieldProps('email')} />
              {formik.errors.email && <div>{formik.errors.email}</div>}
              <TextField type="password" label="Password" margin="normal" {...formik.getFieldProps('password')} />
              {formik.errors.password && <div>{formik.errors.password}</div>}
              <FormControlLabel
                label={'Remember me'}
                control={<Checkbox {...formik.getFieldProps('rememberMe')} checked={formik.values.rememberMe}/>}
              />
              <Button type={'submit'} variant={'contained'} color={'primary'}>
                Login
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};