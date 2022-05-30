import React from 'react';
import './cardBook.css';

import { PencilSimple } from 'phosphor-react';

export function CardBook({title, author, category, description, img}) {
    return (
        <div className='cardBook'>
            <img  className="imageCard" alt='capa do livro' src={img} />
            <p className ="textCard"> Titulo: {title} </p>
            <p className ="textCard"> Autor: {author} </p>
            <p className ="textCard"> Categoria: {category} </p>
            <p className ="textCard"> Descrição: {description} </p>
            
            <div className='cardBottom'> 
                <button className="buttonCard"> Emprestar </button>
                <PencilSimple size={30} color="#e3ffd1" />           
            </div>
        </div >  
    )
}