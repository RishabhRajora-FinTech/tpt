import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/portfolios/')
            .then(response => {
                setPortfolios(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <h1 style={{ textAlign: 'center', color: '#4A90E2' }}>📈 Portfolios 📈</h1>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {portfolios.map(portfolio => (
                    <li
                        key={portfolio.id}
                        style={{
                            padding: '10px',
                            margin: '10px 0',
                            backgroundColor: '#f9f9f9',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'transform 0.2s',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <span style={{ flex: '1', fontWeight: 'bold' }}>{portfolio.name}</span>
                        <span style={{ color: '#888' }}>ID: {portfolio.id}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
