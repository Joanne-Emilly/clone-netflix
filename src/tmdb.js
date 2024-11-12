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
    const req = await fetch(`${API_BASE}${endpoint}}`)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        ''
        return [
            {
                slug: 'originals',
                title: ' Originais do Netflix',
                items: []
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            }, {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: []
            },

        ]
    }
}