/*  
    o que a API do TMDB trará:
    - originais da netflix
    - recomendados
    - em alta
    - ação
    - comédia
    - terror
    - romance
    - documentários
*/

const URL_BASE_API = process.env.URL_BASE_API || 'https://api.themoviedb.org/3';

const API_KEY = process.env.API_KEY || '5f249df4b43b2a445ae7062e32a0e416';

const basicFetch = async (endpoint) => {

    const endpointArray = endpoint.split("");

    endpoint += endpointArray.findIndex((initials) => initials === '?') ? '&language=pt-BR' : '?language=pt-BR'; // trazer as informações em português

    const url = URL_BASE_API + endpoint + '&api_key=' + API_KEY;

    const req = await fetch(url);

    const json = await req.json();

    return json;

};

// Genres
// Action          28
// Comedy          35
// Horror          27
// Romance         10749
// Documentary     99

export const getHomeList = async () => {
    return [
        {
            slug: 'originals',
            title: 'Originais da Netflix',
            items: await basicFetch('/discover/tv?with_network=213') // 213 = id da netflix no TMDB
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await basicFetch('/trending/all/week?')
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch('/movie/top_rated?')
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch('/discover/movie?with_genres=28')
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch('/discover/movie?with_genres=35')
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch('/discover/movie?with_genres=27')
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch('/discover/movie?with_genres=10749')
        },
        {
            slug: 'documentary',
            title: 'Documentário',
            items: await basicFetch('/discover/movie?with_genres=99')
        },
    ]
};

