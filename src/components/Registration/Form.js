import { bindActionCreators } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Creators as bookActions} from "../../app/actions/bookActions"

import './booksForm.css'

function Form({insertion}) {

    const [book, setBook] = useState({    
        title: '',
        author: '',
        category: '',
        description:'',
    });

    function onChangeTitle(e) {
        setBook({...book, title: e.target.value});
    }

    function onChangeAuthor(e) {
        setBook({...book, author: e.target.value});
    }    

    function onChangeCategory(e) {
        setBook({...book, category: e.target.value});
    }    

    function onChangeDescription(e) {
        setBook({...book, description: e.target.value});
    }  

    function envio(book) {
        clean();
        return insertion(book)
    }

    function clean() {
        setBook({
            title: '',
            author: '',
            category: '',
            description:'',
        });
    }


    return (
        <div> 
            <form className='booksForm'>
                <h3 className="formTitle"> Cadastre um livro </h3>

                <div className='inputDiv'>
                    <p className='textForm'> Titulo </p>
                    <input 
                    className='inputForm'
                    type = "text" 
                    name="title"
                    value={book.title}
                    placeholder='Digite o titulo do livro' 
                    onChange={(e) => onChangeTitle(e)}/>
                </ div>

                <div className='inputDiv'>
                    <p className='textForm'> Autor </p>
                    <input 
                    name="author"
                    className='inputForm'
                    type = "text"
                    value={book.author}
                    placeholder='Digite o autor do livro' 
                    onChange={(e) => onChangeAuthor(e)} 
                    />
                </ div>

                <div className='inputDiv'>
                    <p className='textForm'> Categoria </p>
                    <input 
                    name="category"
                    className='inputForm'
                    type = "text"
                    value={book.category}
                    placeholder='Digite a categoria do livro' 
                    onChange={(e) => onChangeCategory(e)} 
                    />
                </ div>

                <div className='inputDiv'>
                    <p className='textForm'> Descrição </p>
                    <textarea 
                    name="description"
                    className='inputForm'
                    type = "text"
                    value={book.description}
                    placeholder='Digite o titulo do livro' 
                    onChange={(e) => onChangeDescription(e)} 
                    />
                </ div>

                <button 
                className='buttonForm'
                onClick={() => envio(book)}
                type='button'>
                    Cadastrar
                </button>
            </form>
        </div>
    )

}

const mapDispatchToProps = dispatch => 
bindActionCreators (bookActions, dispatch)



export default connect(null, mapDispatchToProps)(Form)