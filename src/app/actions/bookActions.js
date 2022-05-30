export const Types = { 
    INSERTION: 'book/INSERTION',
    GET_IMAGE_SUCCESS: 'book/GET_IMAGE_SUCCESS',
    GET_IMAGE_FAILURE: 'book/GET_IMAGE_FAILURE'
}

export const Creators = {
    insertion: (books) => ({
        type:  Types.INSERTION,
        books
    }),
    getImageSuccess: (books, img) => ({
        type: Types.GET_IMAGE_SUCCESS,
        books,
        img
    }),
    getImageFailure: (books, img) => ({
        type: Types.GET_IMAGE_FAILURE,
        books,
        img
    })
}

export default Creators;