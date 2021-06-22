import React from 'react';
import { useFormik } from 'formik'

const FormComponent = () => {

	const initialValues = {
		firstname : '',
		lastname : '',
		password: ''
	}

	const onSubmit = values => {
		console.log('On Submit', values)
	}

	const validate =  values => {
		//value.firstname , values.lastname , values.password
		//errors.firstname , errors.lastname , errors.password

		let errors = {}

		if(!values.firstname){
			errors.firstname = 'This Field is required'
		}

		if(!values.lastname){
			errors.lastname = 'This Field is required'
		}

		if(!values.password){
			errors.password = 'This Field is required'
		} else if (/^[a-z0-9]+$/i.test(values.password)) {
			errors.password = 'Invalid format'
		}
		return errors
	}

	const formik = useFormik({
		initialValues ,
		onSubmit ,
		validate 
	})

	// console.log('formik Values', formik.values);
	// console.log('formik Errors', formik.errors);
	console.log('formik touched', formik.touched);

    return (
		<form onSubmit={formik.handleSubmit}>
			<div className="formfield">
				<label htmlFor="firstname">Name</label>
				<input 
					type="text" 
					name='firstname' 
					onChange={formik.handleChange} 
					onBlur={formik.handleBlur}
					value={formik.values.firstname} 
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
					onChange={formik.handleChange} 
					onBlur={formik.handleBlur}
					value={formik.values.lastname}
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
					onChange={formik.handleChange}
					onBlur={formik.handleBlur} 
					value={formik.values.password} 
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

