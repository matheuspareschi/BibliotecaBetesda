import axios from 'axios';

export const services = {
    getImages: (title, author) => {
        const params = {
            key:'AIzaSyCxr6qgSbnoBsLPkJo-7bRdLBpnMs6-3Os',
            cx:'f2c18c493f784ed6f',
            searchType:'image',
            lr: 'lang_pt',
            num: 1,
            q: {title, author}
        }

        return  axios.get('https://www.googleapis.com/customsearch/v1', { params })
            .then(resp => resp.data.items[0].link)
            .catch(err=> err);
    }
}

