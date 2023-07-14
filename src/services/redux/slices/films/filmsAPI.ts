import { IFilms } from "src/types/Film.types";

// const API_URL = 'http://127.0.0.1:3000';

// const checkRes = (res: Response) => {
//     if (res.ok) {
//         return res.json();
//     } else {
//         return Promise.reject(res);
//     }
// };

// const fetchData = (url: string, data?: IData) => {
// 	return fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		...(!!data && { body: JSON.stringify(data) }),
// 	}).then((res) => checkRes(res));
// };

export const getFilms = (): Array<IFilms> => {
    // return fetchData(`${API_URL}/signin`, data);

    const mymovie = [
        {
            id: "101",
            title: "Переводчик",
            rating: {
                kinopoisk: 7.1,
                imdb: 7.1
            },
            shortDescription: "Афганистан, март 2018 года. Во время спецоперации по поиску оружия талибов отряд сержанта армии США Джона Кинли попадает в засаду. В живых остаются...",
            imageUrl: "https://imagestorage.ru/JoseCanyon.img",
            movieCardUrl: "https://kinotochka.ru/movie/101",
            index: 1
        },
        {
            id: "102",
            title: "Переводчик",
            rating: {
                kinopoisk: 7.2,
                imdb: 7.2
            },
            shortDescription: "Во время спецоперации по поиску оружия талибов отряд сержанта армии США Джона Кинли попадает в засаду. В живых остаются...",
            imageUrl: "https://imagestorage.ru/JoseCanyon.img",
            movieCardUrl: "https://kinotochka.ru/movie/102",
            index: 2
        },
        {
            id: "103",
            title: "Переводчик",
            rating: {
                kinopoisk: 7.3,
                imdb: 7.3
            },
            shortDescription: "В живых остаются...",
            imageUrl: "https://imagestorage.ru/JoseCanyon.img",
            movieCardUrl: "https://kinotochka.ru/movie/103",
            index: 3
        },
        {
            id: "104",
            title: "Переводчик",
            rating: {
                kinopoisk: 7.4,
                imdb: 7.4
            },
            shortDescription: "март 2018 года. тся...",
            imageUrl: "https://imagestorage.ru/JoseCanyon.img",
            movieCardUrl: "https://kinotochka.ru/movie/104",
            index: 4
        },
        {
            id: "105",
            title: "Переводчик",
            rating: {
                kinopoisk: 7.5,
                imdb: 7.5
            },
            shortDescription: "отряд сержанта армии США...",
            imageUrl: "https://imagestorage.ru/JoseCanyon.img",
            movieCardUrl: "https://kinotochka.ru/movie/105",
            index: 5
        },
        {
            id: "106",
            title: "Переводчик",
            rating: {
                kinopoisk: 7.6,
                imdb: 7.6
            },
            shortDescription: "спецоперации по поиску оружия талибов...",
            imageUrl: "https://imagestorage.ru/JoseCanyon.img",
            movieCardUrl: "https://kinotochka.ru/movie/106",
            index: 6
        }
    ]

    return mymovie
};
