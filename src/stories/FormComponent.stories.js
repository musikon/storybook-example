import React from 'react';
import { storiesOf } from '@storybook/react';
import withFormik from 'storybook-formik';
import {Input, Checkbox, Select} from 'antd'
import {
	PersonalInfoSubForm,
	personalInfoInitialValues,
	personalInfoValidationSchema,
	ProfessionalInfoSubForm,
	professionalInfoInitialValues,
	professionalInfoValidationSchema,
	SignupForm,
	FeedbackSubform,
	feedbackInitialValues
} from '../components/FormComponent';

const personalInfoParams = {
	formik: {
		initialValues: personalInfoInitialValues,
		validationSchema: personalInfoValidationSchema,
	}
};

const professionalInfoParams = {
	formik: {
		initialValues: professionalInfoInitialValues,
		validationSchema: professionalInfoValidationSchema,
	}
};

const feedbackParams = {
	formik: {
		initialValues: feedbackInitialValues,
		validationSchema: personalInfoValidationSchema,
	}
};

storiesOf('Example/subforms', module)
	.addDecorator(withFormik)
	.add('PersonalInfoSubform', () => (
		<>
			<p>
				The decorator can wrap Components that include Fields (or anything else expecting Formik context).
				This allows us to better componentise our larger forms.
			</p>
			<PersonalInfoSubForm />
		</>
	), personalInfoParams)
	.add('ProfessionalInfoSubform', () => (
		<>
			<p>
				Here we can play with the Professional Info subform as standalone
			</p>
			<ProfessionalInfoSubForm />
		</>
	), professionalInfoParams)
	.add('FeedbackSubform', () => (
		<>
			<p>
				With better tooling it makes it easier for us to componentise and compose our subforms.
				Here we re-use the above PersonalInfoSubform in our FeedbackSubform.
			</p>
			<FeedbackSubform />
		</>
	), feedbackParams);

// You may want to demonstrate a library of your custom-made fields
storiesOf('Example/MyFields', module)
	.addDecorator(withFormik)
	.add('MyCheckbox', () => (<Checkbox name="likeFormik">Do you like formik?</Checkbox>), {
		formik: {
			initialValues: {
				likeFormik: true,
			}
		}
	})
	.add('MySelect', () => (
		<Select name="formikRating" label="How much do you like formik?" >
			<option value="3">I like it</option>
			<option value="4">I really like it</option>
			<option value="5">I absolutely love it</option>
		</Select>
	), {
		formik: {
			initialValues: {
				formikRating: "5",
			}
		}
	})
	.add('MyTextInput', () => (
		<Input name="formikTweet" label="Describe formik in 80 characters" placeholder="I love formik because..." />
	), {
		formik: {
			initialValues: {
				formikTweet: '',
			}
		}
	});

storiesOf('Example/standard', module)
	.add('default', () => (
		<>
			<p>
				This is an entire 'Form'. It has several Fields that are descendants of an overall Formik component.
				There is no need to supply a withFormik decorator here
			</p>
			<SignupForm />
		</>
	));