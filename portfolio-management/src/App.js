import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioTable from './components/PortfolioTable';
import PortfolioForm from './components/PortfolioForm';
import SearchBox from './components/SearchBox';
import './App.css';

axios.defaults.baseURL = 'http://localhost:8000';  // Ensure this points to your backend server

const App = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const response = await axios.get('/api/portfolios/');
      setPortfolios(response.data);
    } catch (error) {
      console.error('Error fetching portfolios:', error);
    }
  };

  const handleSave = async (portfolio) => {
    try {
      if (selectedPortfolio) {
        await axios.put(`/api/portfolios/${selectedPortfolio.portfolio_name}/`, portfolio);
      } else {
        await axios.post('/api/portfolios/', portfolio);
      }
      fetchPortfolios();
      setSelectedPortfolio(null);
    } catch (error) {
      console.error('Error saving portfolio:', error);
    }
  };

  const handleEdit = (portfolio) => {
    setSelectedPortfolio(portfolio);
  };

  const handleDelete = async (portfolio_name) => {
    try {
      await axios.delete(`/api/portfolios/${portfolio_name}/`);
      fetchPortfolios();
    } catch (error) {
      console.error('Error deleting portfolio:', error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredPortfolios = portfolios.filter((portfolio) =>
    Object.values(portfolio).some((value) =>
      value.toString().toLowerCase().includes(searchQuery)
    )
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center d-flex justify-content-between">
          <span className="header-text blue-text">C.W.D International School</span>
          <span className="header-text maroon-text">TPTech</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 box">
          <div className="card">
            <div className="card-header">
              <h2>Portfolios</h2>
              <SearchBox searchQuery={searchQuery} onSearch={handleSearch} />
            </div>
            <div className="card-body">
              <PortfolioTable
                portfolios={filteredPortfolios}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 box">
          <div className="card">
            <div className="card-header">
              <h2>Manage Portfolio</h2>
            </div>
            <div className="card-body form-section">
              <PortfolioForm selectedPortfolio={selectedPortfolio} onSave={handleSave} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
