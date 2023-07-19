// import { FC } from 'react';
// import { useState, useEffect } from 'react';
import './Search.css';
// import { Link } from 'react-router-dom';

const Search = ({ isOpenSearch }: { isOpenSearch: boolean }) => {
	return (
		<section className={`searchAll ${isOpenSearch && 'search_open'}`}></section>
	);
};

export default Search;
