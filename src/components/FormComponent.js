import React from 'react';
import { Formik, Form, Field } from 'formik';
import {Input, Checkbox, Select} from 'antd'
import * as Yup from 'yup';

export const personalInfoInitialValues = {
	firstName: 'Initial',
	lastName: '',
	email: '',
};

export const professionalInfoInitialValues = {
	jobType: '',
	acceptedTerms: false,
};

export const feedbackInitialValues = {
	...personalInfoInitialValues,
	rating: 1,
	remarks: ''
};

const initialValues = {
	...personalInfoInitialValues,
	...professionalInfoInitialValues
};

export const personalInfoValidationSchema = Yup.object({
	firstName: Yup.string()
		.max(15, 'Must be 15 characters or less')
		.required('Required'),
	lastName: Yup.string()
		.max(20, 'Must be 20 characters or less')
		.required('Required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Required'),
});

export const professionalInfoValidationSchema = Yup.object({
	jobType: Yup.string()
		.oneOf(
			['designer', 'development', 'product', 'other'],
			'Invalid Job Type'
		)
		.required('Required'),
	acceptedTerms: Yup.boolean()
		.required('Required')
		.oneOf([true], 'You must accept the terms and conditions.'),
});

const validationSchema = Yup.object().concat(personalInfoValidationSchema).concat(professionalInfoValidationSchema);

const onSubmit = (values, { setSubmitting }) => {
	setTimeout(() => {
		alert(JSON.stringify(values, null, 2));
		setSubmitting(false);
	}, 400);
};

const style = {
	label: {
		display: 'block',
		fontWeight: 'bold',
	},
	field: {
		display: 'block'
	},
	error: {
		display: 'block',
		color: '#ff4d4d',
	}
};

export const ProfessionalInfoSubForm = () => (
	<>
		<Select label="Job Type" name="jobType">
			<option value="">Select a job type</option>
			<option value="designer">Designer</option>
			<option value="development">Developer</option>
			<option value="product">Product Manager</option>
			<option value="other">Other</option>
		</Select>
		<Checkbox name="acceptedTerms">
			I accept the terms and conditions
		</Checkbox>
	</>
);

export const PersonalInfoSubForm = () => (
	<>
		<Input
			label="First Name"
			name="firstName"
			type="text"
			placeholder="Jane"
		/>
		<Input
			label="Last Name"
			name="lastName"
			type="text"
			placeholder="Doe"
		/>
		<Input
			label="Email Address"
			name="email"
			type="email"
			placeholder="jane@formik.com"
		/>
	</>
);

export const FeedbackSubform = () => (
	<>
		<PersonalInfoSubForm />
		<label style={style.label} htmlFor="rating">How good?</label>
		<Select style={style.field} component="select" name="rating" >
			<option value={0}>Bad</option>
			<option value={1}>Neutral</option>
			<option value={2}>Good</option>
		</Select>
		<label style={style.label} htmlFor="remarks">Why so good?</label>
		<Field style={style.field} component={Input} name="remarks" />
	</>
);

export const SignupForm = () => {
	return (
		<>
			<h1>Subscribe!</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				<Form>
					<PersonalInfoSubForm />
					<ProfessionalInfoSubForm />
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	);
};