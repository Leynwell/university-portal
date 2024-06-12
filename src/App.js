import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contacts from './pages/Contacts';

function App() {
    return (
        <Router>
            <Header/>
            <main className="flex-grow w-full">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;