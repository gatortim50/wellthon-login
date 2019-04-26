module.exports = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/wellthon',
  secretOrKey: process.env.SECRET_OR_KEY || 's3cr3t'
};