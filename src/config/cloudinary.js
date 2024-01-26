const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'dqytvb95j', 
  api_key: '791436971989239', 
  api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = cloudinary;
