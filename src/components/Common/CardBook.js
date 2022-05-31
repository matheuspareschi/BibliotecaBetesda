import React from 'react';
import './cardBook.css';
import { Link } from 'react-router-dom';

import { PencilSimple, TrashSimple } from 'phosphor-react';

export function CardBook({title, author, category, description, img, id}) {
    return (
        <div className='cardBook'>
            <div className='imageDiv'> 
                <img  className="imageCard" alt='capa do livro' src={img} />
            </div>
            <p className ="textCard"> Titulo: {title} </p>
            <p className ="textCard"> Autor: {author} </p>
            <p className ="textCard"> Categoria: {category} </p>
            <p className ="textCard"> Descrição: {description} </p>
            
            <div className='cardBottom'> 
                <button className="buttonCard"> Emprestar </button>
                <Link to={`/book/${id}`} > 
                    <PencilSimple size={30} color="#e3ffd1" />  
                </Link>         
                <TrashSimple size={30} color="#e3ffd1" />
            </div>
        </div >  
    )
}