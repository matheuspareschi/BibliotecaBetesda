import React from 'react';
import { useParams } from 'react-router-dom';

import {Creators as bookActions} from '../../app/actions/bookActions';
import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

import Form from '../../components/Common/BookForm/Form.js'
import {CardBook} from '../../components/Common/CardBook/CardBook.js'

const BookEdition = ({editBook, books}) => {

    const {id} = useParams();
    console.log(id);
    const book = books.item.find(item => item.id === id);
    console.log(book)

    return (
        <div> 
            <Form action={editBook} item={book}/>
            {book &&
             <CardBook 
                title = {book.title}
                description = {book.description}
                category = {book.category}
                author = {book.author}
                key={book.id}
                img={book.img}
                quantity={book.quantity}
             />
            }
        </div>
    );
}

const mapStateToProps = state => {
 return {
    books: state.book,
 }
}

const mapDispatchToProps = dispatch => 
bindActionCreators (bookActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BookEdition);