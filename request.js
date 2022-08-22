const https = require('https');

/**
 * @param {string} url
 * @param {https.RequestOptions} options
 * @param {*} data
 */
module.exports = (url, options = {}, data = undefined) => {
  return new Promise((cb, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (c) => { data += c; });
      res.on('end', () => { cb(data); });
    });

    req.on('error', (e) => { reject(e); });
    req.end(data);
  });
};
