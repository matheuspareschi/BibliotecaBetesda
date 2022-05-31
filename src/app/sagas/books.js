import {call, put } from 'redux-saga/effects';
import {services} from '../service';
import {Creators as bookActions} from '../actions/bookActions'

const genericImg = 'https://th.bing.com/th/id/R.611e284ee2f1f28206369e7cfa02c6ba?rik=fW3nnzc%2fsI5oHQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fbook%2fbook_PNG50988.png&ehk=1bMaQu7woPpmgAFAv3Kq%2bN61L6WGwV2ZxFweSp5BB8g%3d&risl=1&pid=ImgRaw&r=0'

export function* getImageRequest(action) {
    try{
        const img = yield call(services.getImages, action.book.title, action.book.author);
        yield put(bookActions.getImageSuccess(action.book, img))
    } catch(err) {
        console.log(err, 'oi');
        yield put(bookActions.getImageFailure(action.book, genericImg))
    }
}