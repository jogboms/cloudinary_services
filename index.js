const json = data => JSON.stringify(data);
var cloudinary = require("cloudinary");
var config = require("config");

module.exports = (req, res) => {
  cloudinary.config(config);

  const promise = new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
      function(result) {
        console.log(result);
        resolve(result);
      },
      { public_id: "newformattedId" }
    );
  });

  res.end(json(promise));
};
