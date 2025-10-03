import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import './layout.css';

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;