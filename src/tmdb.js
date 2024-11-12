

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
    try {
        const req = await fetch(`${API_BASE}${endpoint}`);
        // Verifica se a resposta foi bem-sucedida
        if (!req.ok) {
            throw new Error(`Erro na requisição: ${req.status}`);
        }
        const json = req.json();
        return json;
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        return null; // ou algum valor padrão
    }
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: ' Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}&language=pt-BR`)
            },

        ]
    }
}