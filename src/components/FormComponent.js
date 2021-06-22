import React from 'react';
import { useFormik } from 'formik'

const FormComponent = () => {

	const formik = useFormik({
		initialValues : {
			firstname : '',
			lastname : '',
			password: ''
		},
		onSubmit : () => {
			console.log('On Submit', formik.values)
		}
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

