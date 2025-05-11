import User from '../models/user.model.js';

export const test = (req, res) => {
  res.json({ message: 'User route working' });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, avatar } = req.body;

  try {
    // Check if the user exists first
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Perform the update
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          username,
          email,
          ...(password && { password }),
          ...(avatar && { avatar }),
        },
      },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};
