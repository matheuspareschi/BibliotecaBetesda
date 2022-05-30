import {Types} from '../actions/bookActions'
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
    item: []
}

export default function book(state = INITIAL_STATE, action) {
    switch(action.type) {
        case Types.INSERTION:
        return {
            ...state,
            item: [
                ...state.item,
            ]               
        };
        
        case Types.GET_IMAGE_FAILURE:
        case Types.GET_IMAGE_SUCCESS:
            return {
                ...state,
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