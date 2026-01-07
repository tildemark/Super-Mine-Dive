import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import healthRoutes from './routes/health';

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());         // Enable CORS for frontend access
app.use(helmet());       // Security headers
app.use(morgan('dev'));  // Logging

// Routes
app.use('/api/health', healthRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`\n🚀 Super Mine Dive API running on http://localhost:${PORT}`);
  console.log(`   Environment: ${process.env.NODE_ENV || 'development'}`);
});