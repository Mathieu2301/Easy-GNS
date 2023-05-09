const fs = require('fs');

const envFile = '.env';

if (!fs.existsSync(envFile)) return;

fs.readFileSync(envFile, 'utf8')
  .replace(/\r/g, '')
  .split('\n')
  .filter((line) => line && !line.startsWith('#'))
  .map((line) => line.split('='))
  .forEach(([key, ...value]) => {
    process.env[key] = value.join('=');
  });

console.log(`Loaded env file: '${envFile}'`);
