import React, { useState } from 'react';
import './cardBook.css';
import { Link } from 'react-router-dom';

import { PencilSimple, TrashSimple } from 'phosphor-react';
import LoanBook from '../LoanBook/loanBook';

export function CardBook({title, author, category, description, img, id, deleteBook, quantity}) {
    const [viewLoan, setViewLoan] = useState(false);
    
    return (
        <div className='cardBookDiv'> 
            <div className='cardBook'>
                <div className='imageDiv'> 
                    <img  className="imageCard" alt='capa do livro' src={img} />
                </div>
                <p className ="textCard"> Titulo: {title} </p>
                <p className ="textCard"> Autor: {author} </p>
                <p className ="textCard"> Categoria: {category} </p>
                <p className ="textCard"> Descrição: {description} </p>
                <p className ="textCard"> Quantidade: {quantity} </p>

                <div className='cardBottom'> 
                    <button 
                    onClick={() => setViewLoan(true)}
                    className="buttonCard"> Emprestar 
                    </button>
                    
                    <Link to={`/book/${id}`} > 
                        <PencilSimple size={30} color="#e3ffd1" />  
                    </Link> 

                    <button 
                        onClick={()=>deleteBook(id)}
                        className="deleteButton"
                    >     
                        <TrashSimple   size={30} color="#e3ffd1" />
                    </button>
                </div>
            </div >

            {viewLoan && <LoanBook setViewLoan={setViewLoan} id={id}/>}
        </div>
    )
}