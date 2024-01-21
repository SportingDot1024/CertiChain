const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useUnifiedTopology: true});

// Step 3: Define your data schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

// Step 4: Create model
const User = mongoose.model('User', UserSchema);

// Step 5: Implement CRUD operations
// Create a new user
const createUser = async (username, password, email) => {
  const user = new User({ username, password, email });
  await user.save();
};

// Retrieve a user
const getUser = async (username) => {
  const user = await User.findOne({ username });
  return user;
};

// Update a user
const updateUser = async (username, password, email) => {
  const user = await User.findOne({ username });
  user.password = password;
  user.email = email;
  await user.save();
};

// Delete a user
const deleteUser = async (username) => {
  await User.deleteOne({ username });
};