import { API_BASE_URL } from 'src/utils/constants';
import {
	IResetPasswordData,
	ISignInData,
	ISignUpData,
} from 'src/types/Auth.types';

const API_AUTH_URL = `${API_BASE_URL}/auth`;

const checkRes = (res: Response) => {
	if (res.ok) {
		return res;
	} else {
		return Promise.reject(res);
	}
};

export const fetchData = (
	url: string,
	method: string,
	data?: ISignInData | ISignUpData | { email: string } | IResetPasswordData
) => {
	return fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		...(!!data && { body: JSON.stringify(data) }),
	}).then((res) => checkRes(res));
};

export const fetchSignIn = (data: ISignInData): Promise<Response> => {
	return fetchData(`${API_AUTH_URL}/login/`, 'POST', data).then((res) =>
		checkRes(res)
	);
};

export const fetchCheckEmail = (data: string): Promise<Response> => {
	return fetchData(`${API_AUTH_URL}/verify-email/`, 'POST', {
		email: data,
	}).then((res) => checkRes(res));
};

export const fetchSignUp = (data: ISignUpData): Promise<Response> => {
	return fetchData(`${API_AUTH_URL}/user-registration/`, 'POST', data).then(
		(res) => checkRes(res)
	);
};

export const fetchPasswordRecovery = (data: string): Promise<Response> => {
	return fetchData(`${API_AUTH_URL}/password-recovery/`, 'POST', {
		email: data,
	}).then((res) => checkRes(res));
};

export const fetchResetPassword = (
	data: IResetPasswordData
): Promise<Response> => {
	return fetchData(`${API_AUTH_URL}/reset-password/`, 'PUT', data).then((res) =>
		checkRes(res)
	);
};

export const fetchDeleteUser = (): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/users-me/`, 'DELETE').then((res) =>
		checkRes(res)
	);
};
