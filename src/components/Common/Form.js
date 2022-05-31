import { CircleWavyCheck, X } from 'phosphor-react';
import React, { useEffect, useState } from 'react';

import './booksForm.css'

function Form({action, item = 0}) {

    const [book, setBook] = useState({    
        title: '',
        author: '',
        category: '',
        description:'',
    });
    const [show, setShow] = useState('hide')

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

    useEffect (() => {
        setBook(item)
    }, [item])

    function envio(book) {
        console.log(book)
        clean();
        return action(book)
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

            <div className={`alert ${show}`}>
                <span >  
                 <CircleWavyCheck className='check' size={35} color="#c1ddaf" /> 
                </span>
                <span className='msg'> Livro cadastrado! </span>
                <span> 
                    <button
                     onClick={() => setShow('hide')}
                     className='close-btn'>
                        <span> 
                            <X className='close' size={20} color="#c1ddaf" />
                        </span>
                    </button>
                </span>
            </div>

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
                onClick={() => {
                    envio(book)
                    setShow('show')
                }}
                type='button'>
                    Cadastrar
                </button>
            </form>
        </div>
    )

}

export default (Form)