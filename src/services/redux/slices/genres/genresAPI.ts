
import { IGenres } from 'src/types/Genres.types';

export const getGenres = (): IGenres[] => {
    // return fetchData(`${API_URL}/signin`, data);

    const mymovie: IGenres[] = [
        {
            name: 'хоррор',
            whiteImg: 'https://cdn-icons-png.flaticon.com/512/149/149452.png'
        }
    ]
    
    return mymovie;
};
