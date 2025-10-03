import React, {useState} from 'react';
import './header.css';
import Auth from './auth.js';

function Header() {
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    return (
        <>
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h1>Мой проект</h1>
                </div>
                <nav className="nav">
                    <ul type="square" className="nav-list">
                        <li><a href="#home">Главная</a></li>
                        <li><a href="#about">О нас</a></li>
                        <li><a href="#services">Услуги</a></li>
                        <li>
                            <button
                                className="profile-btn"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Профиль
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <Auth
            isOpen={isAuthOpen}
            onClose={() => setIsAuthOpen(false)}
        />
    </>
    );
}

export default Header