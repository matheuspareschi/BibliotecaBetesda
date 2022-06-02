import React from 'react';

import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Creators as bookActions } from '../../app/actions/bookActions';
import { bindActionCreators } from '@reduxjs/toolkit';

import { CardBook } from '../../components/Common/CardBook/CardBook';

import { PlusCircle } from 'phosphor-react';
import './view.css'
import LoanBook from '../../components/Common/LoanBook/loanBook';

function View({books, deleteBook}){
    const history = useNavigate();
    
    return (
        <div className='booksView'> 

            <button 
                className='addBookButton'
                onClick={() => history("/registration")} > 
                Adicione um livro!
                <PlusCircle className='buttonAddIcon' size={56} color="#122108" />
            </button>
            
            <div className='booksCard'>
                {
                    books.item.map((book) => 
                        <CardBook 
                            title = {book.title}
                            description = {book.description}
                            category = {book.category}
                            author = {book.author}
                            key={book.id}
                            id={book.id}
                            img={book.img}
                            quantity={book.quantity}
                            deleteBook={deleteBook}
                        />
                    )
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
    books: state.book
 }
};

const mapDispatchToProps = dispatch => 
bindActionCreators (bookActions, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(View)