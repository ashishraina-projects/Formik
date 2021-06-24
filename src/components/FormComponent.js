import React from 'react';
import { Formik, Form , Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Error from './Error.js'

const FormComponent = () => {

	const initialValues = {
		firstname : '',
		lastname : '',
		password: '',
		comment: '',
		address:'',
		social: {
			facebook:'',
			twitter: ''
		}
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
						placeholder='First Name'
					/>
					<ErrorMessage name='firstname' component={Error} />
				</div>

				<div className="formfield">
					<label htmlFor="lastname">Lastname</label>
					<Field 
						type="text" 
						name='lastname'
						placeholder='Last Name'
					>
					</Field>
					<ErrorMessage name='lastname' >
						{
							(errorMsg) => <div className='error'>{errorMsg}</div>
						}
					</ErrorMessage>
				</div>

				<div className="formfield">
					<label htmlFor="password">Password</label>
					<Field 
						type="password" 
						name='password' 
						placeholder='Password'
					/>
					<ErrorMessage name='password' component={Error}/>
				</div>

				<div className="formfield">
					<label htmlFor="comment">Comments: </label>
					<Field 
						as="textarea" 
						name='comment' 
						placeholder='Type your comment here...'
					/>
					<ErrorMessage name='comment' component={Error} />
				</div>


				<div className="formfield">
					<label htmlFor="comment">Address: </label>
					<Field name='address'> 
						{props => {
							const {field, form, meta } = props
							return (
								<div>
									<input type='text' {...field} />
									{meta.touched && meta.error ? <div>{meta.error}</div> : null}
								</div>
							)
						}}
					</Field>
					<ErrorMessage name='address' />

				<div className="formfield">
					<label htmlFor="facebook">Facebook: </label>
					<Field 
						name='social.facebook' 
					/>
					<ErrorMessage name='social.twitter' component={Error} />
				</div>

				<div className="formfield">
					<label htmlFor="twitter">Comments: </label>
					<Field 
						name='social.twitter' 
					/>
					<ErrorMessage name='social.twitter' component={Error} />
				</div>
				</div>

				<button type='submit'>Submit</button> 
			</Form>
		</Formik>
	)
}

export default FormComponent

