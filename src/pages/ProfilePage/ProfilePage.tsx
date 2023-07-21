import { Link } from 'react-router-dom';

import Form from '../../components/Form/Form';
import { FormTypes } from '../../types/Form.types';

import './ProfilePage.css';

const ProfilePage = () => {
	return (
		<main className="profile" id="profile-page">
			<h1 className="profile__title">Профиль</h1>
			<Form formType={FormTypes.profile} />
		</main>
	);
};

export default ProfilePage;
