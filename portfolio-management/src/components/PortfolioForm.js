import React, { useState, useEffect } from 'react';

const PortfolioForm = ({ selectedPortfolio, onSave }) => {
  const [portfolio, setPortfolio] = useState({
    portfolio_name: '',
    portfolio_code: '',
    school_number: '',
    full_name: '',
    portfolio_type: '',
    status: '',
    type_of_emp: '',
    father_name: '',
    mother_name: '',
    cusp: '',
    entered_by: '',
    confirmed: ''
  });

  useEffect(() => {
    if (selectedPortfolio) {
      setPortfolio(selectedPortfolio);
    }
  }, [selectedPortfolio]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortfolio((prevPortfolio) => ({
      ...prevPortfolio,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(portfolio);
    setPortfolio({
      portfolio_name: '',
      portfolio_code: '',
      school_number: '',
      full_name: '',
      portfolio_type: '',
      status: '',
      type_of_emp: '',
      father_name: '',
      mother_name: '',
      cusp: '',
      entered_by: '',
      confirmed: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(portfolio).map((key) => (
        <div className="form-group" key={key}>
          <label htmlFor={key}>{key.replace('_', ' ').toUpperCase()}</label>
          <input
            type="text"
            className="form-control"
            id={key}
            name={key}
            value={portfolio[key]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary">Save</button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() =>
          setPortfolio({
            portfolio_name: '',
            portfolio_code: '',
            school_number: '',
            full_name: '',
            portfolio_type: '',
            status: '',
            type_of_emp: '',
            father_name: '',
            mother_name: '',
            cusp: '',
            entered_by: '',
            confirmed: ''
          })
        }
      >
        Clear
      </button>
    </form>
  );
};

export default PortfolioForm;
