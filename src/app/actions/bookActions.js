export const Types = { 
    INSERTION: 'book/INSERTION',
    UPDATE_BOOK: 'book/UPDATE_BOOK',
    DELETE_BOOK: 'book/DELETE_BOOK',
    GET_IMAGE_SUCCESS: 'book/GET_IMAGE_SUCCESS',
    GET_IMAGE_FAILURE: 'book/GET_IMAGE_FAILURE',
}

export const Creators = {
    insertion: (book) => ({
        type:  Types.INSERTION,
        book
    }),
    editBook: (book) => ({
        type: Types.UPDATE_BOOK,
        book
    }),
    deleteBook: (book) => ({
        type: Types.DELETE_BOOK,
        book
    }),
    getImageSuccess: (book, img) => ({
        type: Types.GET_IMAGE_SUCCESS,
        book,
        img
    }),
    getImageFailure: (book, img) => ({
        type: Types.GET_IMAGE_FAILURE,
        book,
        img
    })
}

export default Creators;