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
		console.log( 'errors' , errors)
		return errors
	}

	const formik = useFormik({
		initialValues ,
		onSubmit ,
		validate 
	})

    return (
		<form onSubmit={formik.handleSubmit}>
			<div className="formfield">
				<label htmlFor="firstname">Name</label>
				<input type="text" name='firstname' onChange={formik.handleChange} value={formik.values.firstname} />
			</div>

			<div className="formfield">
				<label htmlFor="lastname">Lastname</label>
				<input type="text" name='lastname' onChange={formik.handleChange} value={formik.values.lastname} />
			</div>

			<div className="formfield">
				<label htmlFor="password">Password</label>
				<input type="password" name='password' onChange={formik.handleChange} value={formik.values.password} />
			</div>

			<button type='submit'>Submit</button> 
		</form>
	)
}

export default FormComponent

