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
        <div>
            <h1>Portfolios</h1>
            <ul>
                {portfolios.map(portfolio => (
                    <li key={portfolio.id}>{portfolio.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
