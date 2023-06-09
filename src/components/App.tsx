import React, { useState, useContext } from 'react';
import '../styles/index.scss';

import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { AboutPageAsync } from '../pages/AboutPage/index.async';
import { MainPageAsync } from '../pages/MainPage/index.async';

import { useTheme } from '../theme/useTheme';
import { classNames } from '../helpers/classNames/classNames';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <button onClick={toggleTheme}>Тема</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
export default App;
