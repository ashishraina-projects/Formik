import React from 'react';
import { Formik, Form , Field, ErrorMessage} from 'formik'
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

	// const formik = useFormik({
	// 	initialValues ,
	// 	onSubmit ,
	// 	validationSchema
	// 	// validate 
	// })

	// console.log('formik Values', formik.values);
	// console.log('formik Errors', formik.errors);
	// console.log('formik touched', formik.touched);

    return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form>
				<div className="formfield">
					<label htmlFor="firstname">Name</label>
					<Field 
						type="text" 
						name='firstname' 
					/>
					<ErrorMessage name='firstname' />
				</div>

				<div className="formfield">
					<label htmlFor="lastname">Lastname</label>
					<Field 
						type="text" 
						name='lastname' 
					/>
					<ErrorMessage name='lastname' />
				</div>

				<div className="formfield">
					<label htmlFor="password">Password</label>
					<Field 
						type="password" 
						name='password' 
					/>
					<ErrorMessage name='password' />
				</div>

				<button type='submit'>Submit</button> 
			</Form>
		</Formik>
	)
}

export default FormComponent

