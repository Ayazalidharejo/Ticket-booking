import React, { useState } from 'react';
import api from '../api/Api';

const ApiTest = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const testServerConnection = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get('/');
      setResult(`Server connection successful! Response: ${response.data}`);
    } catch (err) {
      console.error('Server connection error:', err);
      setError(`Failed to connect to server: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>API Connection Test</h2>
      <button 
        className="btn btn-primary my-3" 
        onClick={testServerConnection} 
        disabled={loading}
      >
        {loading ? 'Testing...' : 'Test Server Connection'}
      </button>
      
      {result && (
        <div className="alert alert-success mt-3">
          {result}
        </div>
      )}
      
      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}
      
      <div className="card mt-4">
        <div className="card-header">
          <h4>Troubleshooting Tips</h4>
        </div>
        <div className="card-body">
          <ol>
            <li>Make sure your server is running at <code>http://localhost:5000</code></li>
            <li>Check for CORS issues in your browser's console</li>
            <li>Verify backend API routes are correct</li>
            <li>Ensure your server is properly handling requests</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ApiTest;