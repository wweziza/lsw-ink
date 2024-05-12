const jwt = require('jsonwebtoken');
const config = require('../../config.json');

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers or query parameters
  const token = req.headers.authorization?.split(' ')[1] || req.query.token;

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, config.jwtSecret);

    // Attach the decoded user information to the request object for further use
    req.user = decoded;

    // Call next middleware or route handler
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
