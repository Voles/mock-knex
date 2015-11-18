var makeClient = require('./client'),
    clone = require('clone');

module.exports = {
  mock: function mockDatabase(db) {
    if (! db._oldClient) {
      db._oldClient = clone(db.client);
    }

    makeClient(db);
  },

  unmock: function unmock(db) {
    db.client = db._oldClient;
    delete db._oldClient;
  },
};
