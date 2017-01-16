'use strict';

const Nodal = require('nodal');
const router = new Nodal.Router();

/* Middleware */
/* executed *before* Controller-specific middleware */

const CORSMiddleware = Nodal.require('middleware/cors_middleware.js');
// const CORSAuthorizationMiddleware = Nodal.require('middleware/cors_authorization_middleware.js');
// const ForceWWWMiddleware = Nodal.require('middleware/force_www_middleware.js');
// const ForceHTTPSMiddleware = Nodal.require('middleware/force_https_middleware.js');

router.middleware.use(CORSMiddleware);
// router.middleware.use(CORSAuthorizationMiddleware);
// router.middleware.use(ForceWWWMiddleware);
// router.middleware.use(ForceHTTPSMiddleware);

/* Renderware */
/* executed *after* Controller-specific renderware */

const GzipRenderware = Nodal.require('renderware/gzip_renderware.js')

router.renderware.use(GzipRenderware);

/* Routes */

const IndexController = Nodal.require('app/controllers/index_controller.js');

/* generator: begin imports */

const UsersController = Nodal.require('app/controllers/users_controller.js');
const PetTypesController = Nodal.require('app/controllers/pet_types_controller.js');
const PetsController = Nodal.require('app/controllers/pets_controller.js');

/* generator: end imports */

router.route('/').use(IndexController);

/* generator: begin routes */

router.route('/users/{id}').use(UsersController);
router.route('/pet_types/{id}').use(PetTypesController);
router.route('/pets/{id}').use(PetsController);

/* generator: end routes */

module.exports = router;
