import { Link, useLocation } from 'react-router-dom';
import { BaseSyntheticEvent, useState } from 'react';
import './ProfilePage.css';
import Input from 'src/components/Input/Input';
import { InputColors, InputTypes } from 'src/types/Input.types';
import { useAppDispatch, useAppSelector } from 'src/services/typeHooks';
import { selectUser, setUser } from 'src/services/redux/slices/user/user';
import Button from 'src/components/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IEditProfileFields } from 'src/types/Auth.types';
import { selectGenres } from 'src/services/redux/slices/genres/genres';
import GenreCheckbox from 'src/components/GenreCheckbox/GenreCheckbox';
import {
	DATE_OF_BIRTH_VALIDATION_CONFIG,
	NICKNAME_VALIDATION_CONFIG,
} from 'src/utils/constants';

const ProfilePage = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const genres = useAppSelector(selectGenres);

	const [selectedSex, setSelectedSex] = useState(user.sex);

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<IEditProfileFields>({ mode: 'onChange' });

	// console.log(errors.nickname);
	// console.log(getValues('nickname'));
	// console.log('genres.length', user.fav_genres.length);

	const handleRadioChange = (event: BaseSyntheticEvent) => {
		const newValue = event.target.value;
		setSelectedSex(newValue);
	};

	const onSubmit: SubmitHandler<IEditProfileFields> = (data) => {
		console.log(
			'data.nickname',
			// data.nickname,
			// 'data.dateOfBirth',
			// data.dateOfBirth,
			'data.sex',
			data.sex
		);

		dispatch(
			setUser({
				nickname: getValues('nickname'),
				dateOfBirth: getValues('dateOfBirth'),
				sex: selectedSex,
			})
		);
	};

	return (
		<main className="profile" id="profile-page">
			<div className="profile__container">
				<div className="profile__form-container">
					<h1 className="profile__title">Профиль</h1>
					<form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
						<Input
							inputType={InputTypes.email}
							color={InputColors.black}
							labelText="Электронная почта"
							readOnly
							value={user.email}
						/>
						<div className="profile__pseudo-input-container">
							<Input
								inputType={InputTypes.password}
								color={InputColors.black}
								labelText="Пароль"
								readOnly
								value=".........."
							/>
							<Link to={'/reset-password'} className="profile__input-link">
								Изменить пароль
							</Link>
						</div>
						<Input
							inputType={InputTypes.text}
							color={InputColors.black}
							labelText="Никнейм"
							value={user.nickname}
							validation={{
								...register('nickname', NICKNAME_VALIDATION_CONFIG),
							}}
							error={errors?.nickname?.message}
						/>
						<Input
							inputType={InputTypes.date}
							color={InputColors.black}
							labelText="Дата рождения"
							value={user.dateOfBirth}
							validation={{
								...register('dateOfBirth', DATE_OF_BIRTH_VALIDATION_CONFIG),
							}}
							error={errors?.dateOfBirth?.message}
						/>
						<div>
							<p className="profile__radio-title">Пол</p>
							<div className="profile__radio-buttons">
								<label htmlFor="male" className="profile__radio-label">
									<input
										type="radio"
										className="profile__radio-button"
										id="male"
										value="male"
										checked={user.sex === 'male' || selectedSex === 'male'}
										onChange={handleRadioChange}
									/>
									<span className="profile__radio-pseudo-item"></span>
									<span className="profile__radio-text">Мужской</span>
								</label>
								<label htmlFor="female" className="profile__radio-label">
									<input
										type="radio"
										className="profile__radio-button"
										id="female"
										value="female"
										checked={user.sex === 'female' || selectedSex === 'female'}
										onChange={handleRadioChange}
									/>
									<span className="profile__radio-pseudo-item"></span>
									<span className="profile__radio-text">Женский</span>
								</label>
							</div>
						</div>
					</form>
				</div>
				<div className="profile__avatar-container">
					<div className="profile__avatar">
						<p className="profile__user-first-letter">
							{user.nickname ? user.nickname[0] : user.email[0]}
						</p>
					</div>
					<div className="profile__buttons">
						<Button
							buttonText={'Сохранить'}
							type="submit"
							disabled={!isDirty || !isValid}
						/>
						<Link
							className="profile__delete-button"
							to={'/profile/delete'}
							state={{ backgroundLocation: location }}
						>
							Удалить профиль
						</Link>
					</div>
				</div>
			</div>
			<div className="profile__genres-container">
				<h3 className="profile__genres-title">Избранные жанры</h3>
				<ul className="profile__genres">
					{user.fav_genres &&
						genres
							.filter((genre) => user.fav_genres.includes(genre.id))
							.map((genre) => (
								<li className="profile__genre" key={genre.id}>
									<GenreCheckbox
										text={genre.title}
										id={genre.id}
										color="yellow"
										checked={true}
										readOnly={true}
									/>
								</li>
							))}
				</ul>
				<Link
					className="profile__genres-link"
					style={!user.fav_genres?.length ? { margin: 0 } : undefined}
					to="/preferences"
				>
					Редактировать жанры
				</Link>
			</div>
		</main>
	);
};

export default ProfilePage;
