import { Types } from '../actions/bookActions'
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
    item: []
}

export default function book(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.INSERTION:
            return {
                ...state.item,
                    item: [
                        ...state.item,
                    ]
            };
        case Types.UPDATE_BOOK:
            return {
                item: updateBook(state.item, action.book)

            };
        case Types.DELETE_BOOK:
            return {
                item: deleteBook(state.item, action.book)
            };
        case Types.GET_IMAGE_FAILURE:
        case Types.GET_IMAGE_SUCCESS:
            return {
                item: [
                    ...state.item,
                    {
                        ...action.book,
                        id: nanoid(),
                        img: action.img,
                    }
                ]
            }

            default:
                return state;
    }
}


// HELP FUNCTION

function updateBook(item, book) {
    const index = item.findIndex(search => search.id === book.id);
    return [
        ...item.slice(0, index),
        {
            ...book
        },
        ...item.slice(index + 1),
    ]
}

function deleteBook(item, book) {
    console.log (book)
    return [
        ...item.filter(items => items.id !== book)
    ]
}