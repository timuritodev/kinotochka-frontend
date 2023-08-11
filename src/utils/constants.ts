export const API_BASE_URL = 'http://kinotochka.acceleratorpracticum.ru/api/v1';

export const GENRESv2 = [
	'Комедия',
	'Ужасы',
	'Мультфильм',
	'Фантастика',
	'Триллер',
	'Боевик',
	'Мелодрама',
	'Приключение',
	'Семейные',
	'Спорт',
	'Аниме',
];

export const VALIDATION_SETTINGS = {
	email: {
		pattern:
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		maxLength: 64,
		messages: {
			noEmail: 'Необходимо ввести email',
			invalid: 'Необходимо ввести email в правильном формате',
			tooLong: 'Слишком длинный email',
		},
	},
	password: {
		// Обязательное поле ввода "Пароль" - задается от 8 до 32 символов.
		// Как минимум один символ - заглавная буква.
		// Пароль состоит из строчных и прописных английских и русских букв, цифр от 0 до 9 и символов.
		// pattern: '^[\\sa-zA-Zа-яА-ЯёЁ-]+$',
		minLength: 8,
		maxLength: 32,
		messages: {
			noPassword: 'Необходимо ввести пароль',
			noRepeatPassword: 'Необходимо повторно ввести пароль',
			invalid: 'Необходимо ввести пароль в правильном формате',
			tooLong: 'Слишком длинный пароль',
			noMatch: 'Пароли не совпадают',
		},
	},
	nickname: {
		// По дефолту поле пустое. Только русские и английские буквы. Длина 0-32 символов включительно
		pattern: /^[a-zа-яё\s]+$/iu,
		maxLength: 32,
		messages: {
			invalid: 'Только кириллица или латинские буквы',
			tooLong: 'Слишком длинный никнейм',
		},
	},
	dateOfBirth: {
		// По дефолту поле пустое.
		// Есть плейсхолдер "ДД.ММ.ГГГГ". длина либо 0 ( не обязательно к заполнению) либо строго 10 символов, жесткое соответствие маске "ДД.ММ.ГГГГ".
		// Только цифры и символ ".". Проверка по календарю - предлагаю минимальное значение - 1 января 1923 года, максимальное значение - 1 января 2018 года.
		// Проверка на реальность даты ( нельзя ввести (60.60.1960).
		min: '1923-01-01',
		max: '2018-01-01',
		messages: {
			invalid: 'Введите корректную дату',
		},
	},

	// По дефолту поле пустое. Есть плейсхолдер "ДД.ММ.ГГГГ". длина либо 0 ( не обязательно к заполнению) либо строго 10 символов, жесткое соответствие маске "ДД.ММ.ГГГГ". Только цифры и символ ".". Проверка по календарю - предлагаю минимальное значение - 1 января 1923 года, максимальное значение - 1 января 2018 года. Проверка на реальность даты ( нельзя ввести (60.60.1960).
};

export const EMAIL_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.email.messages.noEmail,
	},
	pattern: {
		value: VALIDATION_SETTINGS.email.pattern,
		message: VALIDATION_SETTINGS.email.messages.invalid,
	},
	maxLegth: {
		value: VALIDATION_SETTINGS.email.maxLength,
		message: VALIDATION_SETTINGS.email.messages.tooLong,
	},
};

export const PASSWORD_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.password.messages.noPassword,
	},
	minLength: {
		value: VALIDATION_SETTINGS.password.minLength,
		message: VALIDATION_SETTINGS.password.messages.invalid,
	},
	maxLegth: {
		value: VALIDATION_SETTINGS.password.maxLength,
		message: VALIDATION_SETTINGS.password.messages.tooLong,
	},
};

export const NICKNAME_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.password.messages.noPassword,
	},
	pattern: {
		value: VALIDATION_SETTINGS.nickname.pattern,
		message: VALIDATION_SETTINGS.nickname.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.nickname.maxLength,
		message: VALIDATION_SETTINGS.nickname.messages.tooLong,
	},
};

export const DATE_OF_BIRTH_VALIDATION_CONFIG = {
	// valueAsDate: true,
	min: {
		value: VALIDATION_SETTINGS.dateOfBirth.min,
		message: VALIDATION_SETTINGS.dateOfBirth.messages.invalid,
	},
	max: {
		value: VALIDATION_SETTINGS.dateOfBirth.max,
		message: VALIDATION_SETTINGS.dateOfBirth.messages.invalid,
	},
};
