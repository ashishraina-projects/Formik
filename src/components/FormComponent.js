import React from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormComponent = () => {

	const initialValues = {
		firstname : '',
		lastname : '',
		password: ''
	}

	const onSubmit = values => {
		console.log('On Submit', values)
	}

	const validationSchema = Yup.object({
		firstname : Yup.string().required('First Name Field is Required'),
		lastname : Yup.string().required('Last Name Field is Required'),
		password : Yup.string().required('Password is required')
	})

	const formik = useFormik({
		initialValues ,
		onSubmit ,
		validationSchema
		// validate 
	})

	// console.log('formik Values', formik.values);
	// console.log('formik Errors', formik.errors);
	// console.log('formik touched', formik.touched);

    return (
		<form onSubmit={formik.handleSubmit}>
			<div className="formfield">
				<label htmlFor="firstname">Name</label>
				<input 
					type="text" 
					name='firstname' 
					{...formik.getFieldProps('firstname')}
				/>
				{formik.touched.firstname && formik.errors.firstname ? (
					<div className="error">{formik.errors.firstname}</div>
				) : null}
			</div>

			<div className="formfield">
				<label htmlFor="lastname">Lastname</label>
				<input 
					type="text" 
					name='lastname' 
					{...formik.getFieldProps('lastname')}
				/>
				{formik.touched.lastname && formik.errors.lastname ? (
					<div className="error">{formik.errors.lastname}</div>
				) : null}
			</div>

			<div className="formfield">
				<label htmlFor="password">Password</label>
				<input 
					type="password" 
					name='password' 
					{...formik.getFieldProps('password')}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="error">{formik.errors.password}</div>
				) : null}
			</div>

			<button type='submit'>Submit</button> 
		</form>
	)
}

export default FormComponent

