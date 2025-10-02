import React from 'react';
import './app.css';
import Layout from './components/layout/layout.js';

function App() {
  return (
    <div className="App">
      <Layout>
        <main className="main-content">
          <h1>Добро пожаловать в мой учебный проект</h1>
          <p>Это главная страница моего React-приложения</p>
        </main>
      </Layout>
    </div>
  );
}

export default App;