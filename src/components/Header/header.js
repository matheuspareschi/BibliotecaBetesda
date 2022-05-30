import React from 'react';
import { useNavigate } from 'react-router-dom';

import './header.css'
import { Books } from 'phosphor-react';

export function Header() {
    const history = useNavigate();

    return (
        <div className="headerContainer">
            <div className='left'> 
                <Books size={50} color="#bdb76b" weight="duotone" />
                <h2 onClick={() => history('')} className="headerTitle"> biblioteca betesda </h2>
            </div>
            <div className='right'> 
                <p onClick={() => history('')} className="headerLink"> Livros </p>
                <p onClick={() => history('/registration')} className="headerLink"> Cadastro de Livros </p>
            </div>
        </div>
    )
} 