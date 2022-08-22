# Auto GNS

Automatic DDNS for GDomains

## Installation

```sh
git clone https://github.com/Mathieu2301/Auto-GNS.git
```

## Configuration

Copy or rename the `config.js.template` file to `config.js` and fill in the values.

## Run

```sh
npm run
```

You should use pm2 to run the script automatically.

```sh
pm2 start main.js --name 'Auto GNS'
```
