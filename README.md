# Wellthon

## Quick Start

```bash
# the back end requires mongodb

# clone repo
git clone git@github.com:gatortim50/wellthon-login.git
cd wellthon-login

# Install dependencies for server
yarn install

# Install dependencies for client
yarn run client-install

# Run the client & server with concurrently
yarn run dev

# Run the Express server only
yarn run server

# Run the React client only
yarn run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```
keys_dev.js in the server config folder with mongodb creds

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```


