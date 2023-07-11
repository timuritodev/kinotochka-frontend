import { useState, useCallback } from 'react';
import { VALIDATION } from '../utils/constants';

export function useFormAndValidation() {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isValid, setIsValid] = useState(true);

	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name === 'email') {
			return e.target.validity.patternMismatch
				? e.target.setCustomValidity(VALIDATION.name.message)
				: e.target.setCustomValidity('');
		}
		if (name === 'password') {
			return e.target.validity.patternMismatch
				? e.target.setCustomValidity(VALIDATION.email.message)
				: e.target.setCustomValidity('');
		}
		if (name === 'repeatPassword') {
			return e.target.value !== e.target.validity.patternMismatch
				? e.target.setCustomValidity(VALIDATION.email.message)
				: e.target.setCustomValidity('');
		}

		setValues({ ...values, [name]: value });
		setErrors({ ...errors, [name]: e.target.validationMessage });
		setIsValid(e.target.closest('form').checkValidity());
	};

	const resetForm = useCallback(
		(newValues = {}, newErrors = {}, newIsValid = false) => {
			setValues(newValues);
			setErrors(newErrors);
			setIsValid(newIsValid);
		},
		[setValues, setErrors, setIsValid]
	);

	return {
		values,
		handleChange,
		errors,
		isValid,
		resetForm,
		setValues,
		setIsValid,
		setErrors,
	};
}

export default useFormAndValidation;
