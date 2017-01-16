'use strict';

const Nodal = require('nodal');

class CreatePets extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017011620565658;
  }

  up() {

    return [
      this.createTable("pets", [{"name":"name","type":"string"},{"name":"goal_amt","type":"int"},{"name":"goal_name","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("pets")
    ];

  }

}

module.exports = CreatePets;
