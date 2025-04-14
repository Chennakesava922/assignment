// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Banking Assignment Portal</span>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 bg-light vh-100 p-3 border-end">
            <h5 className="text-center mb-4">Assignment Days</h5>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary" onClick={() => navigate('/day1')}>Day 1</button>
              <button className="btn btn-outline-primary" onClick={() => navigate('/day2')}>Day 2</button>
              <button className="btn btn-outline-primary" onClick={() => navigate('/day3')}>Day 3</button>
              <button className="btn btn-outline-primary" onClick={() => navigate('/day4')}>Day 4</button>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-10 p-5">
            <h2 className="mb-4">Welcome to the React Assignments</h2>
            <p className="lead">Click any day on the left sidebar to see the assignment components rendered beautifully.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
