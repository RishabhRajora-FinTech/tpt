import React from 'react';

const PortfolioTable = ({ portfolios, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Portfolio Name</th>
            <th>Portfolio Code</th>
            <th>School Number</th>
            <th>Full Name</th>
            <th>Portfolio Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {portfolios.map(portfolio => (
            <tr key={portfolio.portfolio_name}>
              <td>{portfolio.portfolio_name}</td>
              <td>{portfolio.portfolio_code}</td>
              <td>{portfolio.school_number}</td>
              <td>{portfolio.full_name}</td>
              <td>{portfolio.portfolio_type}</td>
              <td>{portfolio.status}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => onEdit(portfolio)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(portfolio.portfolio_name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
