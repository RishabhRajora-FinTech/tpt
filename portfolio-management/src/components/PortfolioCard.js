import React from 'react';

const PortfolioCard = ({ portfolio, onEdit, onView }) => {
  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title">{portfolio.portfolio_name}</h5>
        <div>
          <button className="btn btn-primary btn-sm me-2" onClick={() => onView(portfolio)}>View</button>
          <button className="btn btn-warning btn-sm" onClick={() => onEdit(portfolio)}>Edit</button>
        </div>
      </div>
      <div className="card-body">
        <p><strong>Code:</strong> {portfolio.portfolio_code}</p>
        <p><strong>School Number:</strong> {portfolio.school_number}</p>
        <p><strong>Full Name:</strong> {portfolio.full_name}</p>
        <p><strong>Type:</strong> {portfolio.portfolio_type}</p>
        <p><strong>Status:</strong> {portfolio.status}</p>
        <p><strong>Employee Type:</strong> {portfolio.type_of_emp}</p>
        <p><strong>Father's Name:</strong> {portfolio.father_name}</p>
        <p><strong>Mother's Name:</strong> {portfolio.mother_name}</p>
        <p><strong>CUSP:</strong> {portfolio.cusp}</p>
        <p><strong>Entered By:</strong> {portfolio.entered_by}</p>
        <p><strong>Confirmed:</strong> {portfolio.confirmed}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
