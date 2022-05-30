import axios from 'axios';

export const services = {
    getImages: (book) => {
        const params = {
            key:'AIzaSyCxr6qgSbnoBsLPkJo',
            cx:'f2c18c493f784ed6f',
            searchType:'image',
            lr: 'lang_pt',
            num: 1,
            q: book
        }

        return axios.get('https://www.googleapis.com/customsearch/v1', { params })
            .then(resp => resp.data.items[0].link)
            .catch(err=> err);
    }
}