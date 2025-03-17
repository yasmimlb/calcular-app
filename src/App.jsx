import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <PostList />
                <Sidebar />
            </div>
        </div>
    );
}

export default App;
