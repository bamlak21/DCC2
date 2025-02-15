import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      message: "updated Successfully",
      success: true,
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id, { $set: req.body }, { new: true });

    res.status(200).json({
      message: "Deleted Successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({
      message: "Found user",
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Failed to find user" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    res.status(200).json({
      message: "Found users",
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Failed to find users" });
  }
};
