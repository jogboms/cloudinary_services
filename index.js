const { uploader, config } = require("cloudinary");
const jsonRes = data => JSON.stringify(data);
const { json, createError } = require("micro");

config(require("./config"));

module.exports = async (req, res) => {
  try {
    const data = await json(req);

    const results = await new Promise((resolve, reject) => {
      uploader.upload(
        data.url,
        response => {
          if (response && response.error) {
            return reject(response.error);
          }
          resolve(response);
        },
        data.public_id ? { public_id: data.public_id } : void 0
      );
    });
    res.end(jsonRes({ url: results.url, public_id: results.public_id }));
  } catch (e) {
    return createError(400, "Invalid parameters");
  }
};
