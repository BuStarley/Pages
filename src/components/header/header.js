import React from 'react';
import './header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h1>Мой проект</h1>
                </div>
                <nav className="nav">
                    <ul type="square" className="nav-list">
                        <li><a href="#home">Главная</a></li>
                        <li><a href="#news">Новости</a></li>
                        <li><a href="#profile">Профиль</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header