'use strict';

const Nodal = require('nodal');

class CreateItems extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017011621105322;
  }

  up() {

    return [
      this.createTable("items", [{"name":"type","type":"string"},{"name":"name","type":"string"},{"name":"cost","type":"int"},{"name":"effect","type":"int"}])
    ];

  }

  down() {

    return [
      this.dropTable("items")
    ];

  }

}

module.exports = CreateItems;
