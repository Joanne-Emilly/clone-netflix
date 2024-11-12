import { wait } from "@testing-library/user-event/dist/utils";

const API_KEY = 'f095f5543e13ce1bd3313506e7969dc1'
const API_BASE = 'https://api.themoviedb.org/3'

/* - ORIGINAIS DA NETFLIX
   - RECOMENDADOS
   - EM ALTA (TOP RATEDE)
   - AÇÃO 
   - COMÉDIA 
   - TERROR 
   - ROMANCE 
   - DOCUMENTARIOS
*/
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        ''
        return [
            {
                slug: 'originals',
                title: ' Originais do Netflix',
                items: await basicFetch(`/discovery/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`discovery/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            }, {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`discovery/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`discovery/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`discovery/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`discovery/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },

        ]
    }
}