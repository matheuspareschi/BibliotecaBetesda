import { takeLatest, all } from 'redux-saga/effects';

import { Types as BookTypes} from '../actions/bookActions';
import {getImageRequest} from './books'

export default function* rootSaga(){
    return yield all([
        takeLatest(BookTypes.INSERTION, getImageRequest)
    ])
}