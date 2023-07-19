import { FC } from 'react';
import { useState, useEffect } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';

const Search = ({ isOpenSearch }: { isOpenSearch: boolean }) => {
	const [isOpen, setIsOpen] = useState(false);

	return <section className={`search ${isOpen && 'search_open'}`}></section>;
};

export default Search;
