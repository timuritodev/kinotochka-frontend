export enum ButtonTypes {
	continue = 'continue',
	navigateToSignIn = 'navigateToSignIn',
	navigateToMain = 'navigateToMain',
	saveChanges = 'saveChanges',
	signUp = 'signUp',
	signIn = 'signIn',
	recoverPassword = 'recoverPassword',
	resetPassword = 'resetPassword',
}

export interface IButton {
	buttonType: ButtonTypes;
	step?: number;
	setStep?: React.Dispatch<React.SetStateAction<number>>;
}
