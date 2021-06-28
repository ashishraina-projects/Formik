import React from 'react';
import { Formik, Form , Field, ErrorMessage, FieldArray , FastField} from 'formik'
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
		},
		phoneNumbers : ['',''],
		phNum: ['']
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
			validateOnChange={false}
			validateOnBlur={false}
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
					<FastField name='address'> 
						{props => {
							console.log("1")
							const {field, form, meta } = props
							return (
								<div>
									<input type='text' {...field} />
									{meta.touched && meta.error ? <div>{meta.error}</div> : null}
								</div>
							)
						}}
					</FastField>
					<ErrorMessage name='address' />
				</div>

				<div className="formfield">
					<label htmlFor="facebook">Facebook: </label>
					<Field 
						name='social.facebook' 
					/>
					<ErrorMessage name='social.twitter' component={Error} />
				</div>

				<div className="formfield">
					<label htmlFor="twitter">Twitter: </label>
					<Field 
						name='social.twitter' 
					/>
					<ErrorMessage name='social.twitter' component={Error} />
				</div>

				<div className="formfield">
					<label htmlFor="phonenumber1">Phone Number One: </label>
					<Field 
						name='phoneNumbers[0]' 
					/>
					<ErrorMessage name='phoneNumbers[0]' component={Error} />
				</div>

				<div className="formfield">
					<label htmlFor="phonenumbers2">Phone Number Two: </label>
					<Field 
						name='phoneNumbers[1]' 
					/>
					<ErrorMessage name='phoneNumbers[1]' component={Error} />
				</div>

				<div className="formfield">
					<label htmlFor="phonenumbers2">Phone Number Special: </label>
						<FieldArray name='phNum' >
							{
								fieldArrayProps => {
									const {push, remove, form} = fieldArrayProps
									const {values} = form
									const {phNum} = values
									console.log("Form Errors : ", form.errors)
									return (
										<div>
											{
												phNum.map((no , index) => (
													<div key={index}>
														<Field name={`phNum[${index}]`}/>
														{index > 0 && (
															<button type='button' onClick={() => remove('')} > - </button>
														)}
														<button type='button' onClick={() => push('')} > + </button>
													</div>
												))
											}
										</div>
									)
								}
							}
						</FieldArray>
				</div>

				<button type='submit'>Submit</button> 
			</Form>
		</Formik>
	)
}

export default FormComponent

