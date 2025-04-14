import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();

// Use middleware to parse JSON bodies.
app.use(express.json());

// Enable CORS for the frontend origin.
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin.
  credentials: true,              // Allow cookies to be sent with requests.
}));

// Secret keys and token lifetimes.
const ACCESS_TOKEN_SECRET = 'youraccesstokensecret';
const ACCESS_TOKEN_LIFE = '15m'; // Access token expires after 15 minutes.

// Dummy user store for demonstration.
const users = [
  { id: 1, email: 'test@example.com', password: 'password' }
];

// Dummy protected data.
const protectedData = {
  message: "This is protected data only for authenticated users.",
  items: [1, 2, 3, 4, 5],
};

// Helper function to generate an access token.
const generateAccessToken = (payload) =>
  jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_LIFE });

// Middleware to validate access tokens.
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Login endpoint that issues an access token.
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', email, password);
  // Validate credentials against dummy user data.
  const user = users.find(u => u.email === email);
  if (!user || user.password !== password) {
    return res.sendStatus(401);
  }

  // Create payload and issue an access token.
  const payload = { id: user.id, email: user.email };
  const accessToken = generateAccessToken(payload);

  // Return the access token.
  res.json({ accessToken });
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
