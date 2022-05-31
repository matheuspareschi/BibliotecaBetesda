import { bindActionCreators } from '@reduxjs/toolkit';
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Form from '../Common/Form'
import {CardBook} from '../Common/CardBook.js'
import {Creators as bookActions} from '../../app/actions/bookActions';

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