'use strict';

const Nodal = require('nodal');

class CreateTransactions extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017011621170520;
  }

  up() {

    return [
      this.createTable("transactions", [{"name":"amount","type":"int"}])
    ];

  }

  down() {

    return [
      this.dropTable("transactions")
    ];

  }

}

module.exports = CreateTransactions;
