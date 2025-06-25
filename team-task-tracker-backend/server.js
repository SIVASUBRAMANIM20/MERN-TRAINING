const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/teamTaskTracker')

.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log("❌ DB connection error:", err));

app.use('/api/tasks', taskRoutes);

app.listen(3003, () => {
  console.log('🚀 Server running at http://localhost:3003');
});
