'use strict';

const Nodal = require('nodal');
const Item = Nodal.require('app/models/item.js');

class ItemsController extends Nodal.Controller {

  index() {

    Item.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Item.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Item.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Item.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Item.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = ItemsController;
