import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.route.js';

dotenv.config();

// Express app initialization
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS handling
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// API routes
app.use('/api/contact', contactRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Centro Milele - Contact Form API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Validate environment variables
const validateEnvironmentVariables = () => {
  console.log('🔍 Validating environment variables...'); const requiredEnvVars = {
    MONGODB_URI: process.env.MONGODB_URI,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL
  };

  const missingVars = [];
  const presentVars = [];

  for (const [key, value] of Object.entries(requiredEnvVars)) {
    if (!value || value.trim() === '') {
      missingVars.push(key);
    } else {
      presentVars.push(key);
    }
  }

  if (presentVars.length > 0) {
    console.log('✅ Present environment variables:', presentVars.join(', '));
  }

  if (missingVars.length > 0) {
    console.warn('❌ Missing environment variables:', missingVars.join(', '));
    console.warn('💡 Please set these variables in your .env file');
    return false;
  }

  console.log('✅ All required environment variables are present');
  return true;
};

// Connect to MongoDB and start server
if (!process.env.MONGODB_URI) {
  console.error('❌ MONGODB_URI environment variable is not set');
  console.error('💡 Please set MONGODB_URI in your .env file');
  process.exit(1);
}

console.log('🔗 Attempting to connect to MongoDB...');
console.log(`📡 Connection URI: ${process.env.MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, '//*****:*****@')}`);

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('🔗 Connected to MongoDB (milele database)');

    // Validate environment variables
    const envValid = validateEnvironmentVariables();
    if (!envValid) {
      console.warn('⚠️ Some environment variables are missing. Email functionality may not work properly.');
    }

    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`🌐 API available at: http://localhost:${PORT}`);
      console.log(`📝 Contact form endpoint: http://localhost:${PORT}/api/contact`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
    console.error('💡 Please check your MONGODB_URI and ensure MongoDB is running');
    process.exit(1);
  });

export default app;