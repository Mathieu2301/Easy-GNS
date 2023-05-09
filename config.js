require('./envloader');

const config = {
  email: process.env.GNS_EMAIL,
  ipv6: process.env.GNS_IPV6 !== 'false',
  delay: Number(process.env.GNS_DELAY) || 30,
  debug: process.env.GNS_DEBUG,
  domains: {},
};

for (const key in process.env) {
  if (!key.startsWith('GNS_DOMAIN_')) continue;

  const domain = process.env[key].split('@');
  if (domain.length !== 2) {
    console.error('Invalid domain:', key, '=', process.env[key]);
    continue;
  }

  config.domains[domain[1]] = domain[0];
}

module.exports = config;
