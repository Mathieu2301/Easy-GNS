# Easy GNS

Simplest DDNS auto updater for Google Domains.
This script will update your domains every `X` minutes.

## Run with Docker

```yml
version: '3'

services:
  easy-gns:
    image: ghcr.io/mathieu2301/easy-gns:latest
    restart: always
    environment:
      GNS_EMAIL: email@example.fr # Your GDomains email
      GNS_IPV6: true # Set this to false if you are sure you don't use ipv6
      GNS_INTERVAL: 30 # Interval in minutes

      # You can add as many domains as you want
      # every variable starting with GNS_ will
      # be parsed as a domain
      GNS_DOMAIN_1: username1:password1@example.com
      GNS_DOMAIN_2: username2:password2@*.example2.fr
      GNS_DOMAIN_3: username3:password3@*.subdomain.example.fr
      # ...
      GNS_DEBUG: 1 # Comment this line to disable debug mode
```

## Run with pm2

### Configuration

Create a `.env` file with the following content:

```sh
GNS_EMAIL=email@example.fr # Your GDomains email
GNS_IPV6=true # Set this to false if you are sure you don't use ipv6
GNS_INTERVAL=30 # Interval in minutes

# You can add as many domains as you want
# every variable starting with GNS_ will
# be parsed as a domain
GNS_DOMAIN_1=username1:password1@example.com
GNS_DOMAIN_2=username2:password2@*.example2.fr
GNS_DOMAIN_3=username3:password3@*.subdomain.example.fr
# ...
GNS_DEBUG=1 # Comment this line to disable debug mode
```

### Run

```sh
pm2 start main.js --name 'Easy GNS'
```
