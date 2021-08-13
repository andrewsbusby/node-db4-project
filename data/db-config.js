const knex = require('knex');
const configs = require('../knexfile');
const env = process.env.NODE_ENV || 'deployment';

module.exports = knex(configs[env]);