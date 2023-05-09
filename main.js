const config = require('./config');
const ipget = require('./ipget');
const gdomains = require('./gdomains');

let ip = undefined;

async function run() {
  if (config.ipv6) {
    const newip = await ipget();
    if (newip !== ip) {
      if (!ip) console.log(`IP: ${newip}`);
      else console.log(`IP changed: ${ip} -> ${newip}`);
      ip = newip;
    } else return;
  }

  for (const hostname in config.domains) {
    if (config.debug) console.log(`Checking '${hostname}'...`);
    const credentials = config.domains[hostname];
    const res = await gdomains(credentials, hostname, ip);

    if (res.startsWith('good'))
      console.log(`${hostname} updated:`, res);
    else if (config.debug && res.startsWith('nochg'))
      console.log(`${hostname} is up to date:`, res);
    else if (!res.startsWith('nochg'))
      console.error(`${hostname} is not up to date:`, res);
  }
}

console.log(`Starting...`);
console.log(`The script will run every ${config.delay} minutes`);

setInterval(run, config.delay * 60000);
run();
