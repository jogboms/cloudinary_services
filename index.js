import { uploader, config } from "cloudinary";
const json = data => JSON.stringify(data);

config(require("./config"));

export default async function(req, res) {
  const results = await new Promise((resolve, reject) => {
    uploader.upload(
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
      // "https://images.pexels.com",
      response => {
        if (response && response.error) {
          return reject(response.error);
        }
        resolve(response);
      },
      { public_id: "newformattedId" }
    );
  });
  res.end(json(results));
}
