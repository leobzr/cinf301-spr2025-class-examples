// App.js
import React, { useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);
  const [protectedData, setProtectedData] = useState(null);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Create an Axios instance for API calls.
  const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true, // Ensure cookies are included in requests.
  });

  // Update Axios default header when accessToken changes.
  useEffect(() => {
    if (accessToken) {
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      localStorage.setItem('accessToken', accessToken); // Store access token in localStorage.
    } else {
      delete api.defaults.headers.common['Authorization'];
      localStorage.removeItem('accessToken'); // Remove access token from localStorage.
    }
  }, [accessToken, api]);

  // Handle form field changes.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Login form submission.
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await api.post('/auth/login', credentials);
      setAccessToken(response.data.accessToken);
      console.log('Access token received:', response.data.accessToken);
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid credentials or login failed.');
    }
  };

  // Fetch protected data.
  const fetchProtectedData = async () => {
    setError('');
    try {
      const response = await api.get('/protected');
      setProtectedData(response.data);
    } catch (err) {
      console.error('Error fetching protected data:', err);
      setError('Error fetching protected data.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <div>
        <h2>Search</h2>
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Type something..."
        />
        <p>Search Result:</p>
        {/* Vulnerable to XSS as it directly renders user input */}
        <div dangerouslySetInnerHTML={{ __html: searchQuery }} style={{ background: '#f9f9f9', padding: '10px' }}></div>
      </div>
      {!accessToken ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="test@example.com"
              required
            />
          </div>
          <div>
            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="password"
              required
            />
          </div>
          <button type="submit" style={{ marginTop: '10px' }}>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      ) : (
        <div>
          <h2>Welcome!</h2>
          <p>Your access token is active.</p>
          <button onClick={fetchProtectedData}>Get Protected Data</button>
          {protectedData && (
            <div>
              <h3>Protected Data</h3>
              <pre style={{ background: '#f4f4f4', padding: '10px' }}>
                {JSON.stringify(protectedData, null, 2)}
              </pre>
            </div>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
