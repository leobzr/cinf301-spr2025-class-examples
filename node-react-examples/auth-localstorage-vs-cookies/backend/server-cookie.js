import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors'; // Import the CORS middleware

const app = express();

// Use middleware to parse JSON bodies and cookies.
app.use(express.json()); 
app.use(cookieParser());

// Enable CORS for the frontend origin.
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin.
  credentials: true,              // Allow cookies to be sent with requests.
}));

// Secret keys and token lifetimes.
const ACCESS_TOKEN_SECRET = 'youraccesstokensecret';
const REFRESH_TOKEN_SECRET = 'yourrefreshtokensecret';
const ACCESS_TOKEN_LIFE = '1m'; // Access token expires after 1 minute.
const REFRESH_TOKEN_LIFE = '7d'; // Refresh token expires after 7 days.

// Dummy user store for demonstration.
const users = [
  { id: 1, email: 'test@example.com', password: 'password' }
];

// Dummy protected data.
const protectedData = {
  message: "This is protected data only for authenticated users.",
  items: [1, 2, 3, 4, 5],
};

// Helper functions to generate tokens.
const generateAccessToken = (payload) =>
  jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_LIFE });

const generateRefreshToken = (payload) =>
  jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_LIFE });

// Middleware to validate access tokens.
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401); // no token

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401); // invalid token
    req.user = user;
    next();
  });
};

// Login endpoint that issues access and refresh tokens.
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', email, password);
  // Validate credentials against dummy user data.
  const user = users.find(u => u.email === email);
  if (!user || user.password !== password) {
    return res.sendStatus(401);
  }

  // Create payload and tokens.
  const payload = { id: user.id, email: user.email };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // For security, set refresh token in an HttpOnly cookie (httpOnly: true)
  // and set sameSite to 'lax' or 'strict' to prevent CSRF attacks,
  // and set secure to true if using HTTPS.
  res.cookie('refreshToken', refreshToken, {
    httpOnly: false,              // Make the cookie inaccessible to client-side JavaScript.
    secure: false,               // Set to true if using HTTPS.
    sameSite: 'lax',             // Allow cookies for cross-origin navigation.
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds.
  });

  // Return the access token.
  res.json({ accessToken });
});

// Refresh endpoint to issue a new access token.
app.post('/auth/refresh', (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  console.log('Refresh token');

  if (!refreshToken) return res.sendStatus(401);

  // Verify refresh token.
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, payload) => {
    if (err) return res.sendStatus(403);
    // Issue a new access token.
    const newAccessToken = generateAccessToken({ id: payload.id, email: payload.email });
    res.json({ accessToken: newAccessToken });
  });
});

// Protected endpoint which only responds when a valid access token is provided.
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ user: req.user, ...protectedData });
});

// Start the server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

