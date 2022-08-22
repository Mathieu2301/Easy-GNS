const request = require('./request');
const config = require('./config');

module.exports = (credentials, host, ip = undefined, offline = undefined) => {
  if (!credentials || !host) {
    throw new Error('Missing username, password or hostname');
  }

  let url = `https://${credentials}@domains.google.com/nic/update?hostname=${host}`;

  if (typeof ip === 'string') url += `&myip=${ip}`;
  if (typeof offline === 'boolean') url += `&offline=${offline ? 'yes' : 'no'}`;

  return request(url, { method: 'POST' }, config.email);
}
