'use strict';

const Nodal = require('nodal');
const PetType = Nodal.require('app/models/pet_type.js');

class PetTypesController extends Nodal.Controller {

  index() {

    PetType.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    PetType.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    PetType.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    PetType.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    PetType.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = PetTypesController;
