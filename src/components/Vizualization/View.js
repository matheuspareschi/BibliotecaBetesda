import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { CardBook } from '../Common/CardBook';

import { PlusCircle } from 'phosphor-react';
import './view.css'

function View({books}){
    const history = useNavigate();
    console.log(books.item.id)

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


export default connect(mapStateToProps, null)(View)