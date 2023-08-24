import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
	Routes,
	Route,
	HashRouter,
	useLocation,
	useNavigate,
	Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './services/redux/store';

import './index.css';

import { FlanksTypes } from './types/Flanks.types';
import { Layout } from './components/Layout/Layout';

import MainPage from './pages/MainPage/MainPage';
import MoviePage from './pages/MoviePage/MoviePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FlanksPage from './pages/FlanksPage/FlanksPage';
import ConfirmEmailPage from './pages/auth/ConfirmEmailPage';
import RecoverPasswordPage from './pages/auth/RecoverPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import PreferencesPage from './pages/PreferencesPage/PreferencesPage';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import { SearchResultPage } from './pages/SearchResultsPage/SearchResultPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { WindowResize } from './components/WindowResize/WindowResize';
import ProtectedRoute from './components/ProtectedRoute';
import { useAppSelector } from './services/typeHooks';
import { selectUser } from './services/redux/slices/user/user';
import { Loader } from './components/Loader/Loader';

const Root: FC = () => {
	const user = useAppSelector(selectUser);

	return (
		<div className="page">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route
						path="/sign-up"
						element={
							user.token ? (
								<>
									<Loader />
									<Navigate to="/" />
								</>
							) : (
								<SignUpPage />
							)
						}
					/>
					<Route
						path="/sign-in"
						element={
							user.token ? (
								<>
									<Loader />
									<Navigate to="/" />
								</>
							) : (
								<SignInPage />
							)
						}
					/>
					<Route
						path="/recover-password"
						element={
							user.token ? (
								<>
									<Loader />
									<Navigate to="/" />
								</>
							) : (
								<RecoverPasswordPage />
							)
						}
					/>
					<Route
						path="/password-recovery/:code"
						element={
							user.token ? (
								<>
									<Loader />
									<Navigate to="/" />
								</>
							) : (
								<ResetPasswordPage />
							)
						}
					/>
					<Route
						path="/confirm-email"
						element={
							user.token ? (
								<>
									<Loader />
									<Navigate to="/" />
								</>
							) : (
								<ConfirmEmailPage />
							)
						}
					/>
					<Route
						path="/profile"
						element={
							<ProtectedRoute>
								<ProfilePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/rated-films"
						element={
							<ProtectedRoute>
								<FlanksPage formName={FlanksTypes.ratedFilms} />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/preferences"
						element={
							<ProtectedRoute>
								<PreferencesPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/will-see"
						element={
							<ProtectedRoute>
								<FlanksPage formName={FlanksTypes.willSee} />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/favorites"
						element={
							<ProtectedRoute>
								<FlanksPage formName={FlanksTypes.favorites} />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/collections"
						element={<FlanksPage formName={FlanksTypes.collections} />}
					/>
					<Route path="/movie-page" element={<MoviePage />} />
					<Route path="/search-result" element={<SearchResultPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
			{/* <WindowResize /> */}
		</div>
	);
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={<div>Loading...</div>} persistor={persistor}>
				<HashRouter>
					<Root />
				</HashRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
