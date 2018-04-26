const { uploader, config } = require("cloudinary");
const json = data => JSON.stringify(data);

config(require("./config"));

module.exports = async (req, res) => {
  const results = await new Promise((resolve, reject) => {
    uploader.upload(
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
      resolve,
      { public_id: "newformattedId" }
    );
  });
  res.end(json(results));
};
