/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'POST /calculatrice/additionner': 'CalculatriceController.additionner',
  'POST /calculatrice/soustraire': 'CalculatriceController.soustraire',
  'POST /calculatrice/diviser': 'CalculatriceController.diviser',
  'POST /calculatrice/multiplier': 'CalculatriceController.multiplier',
  'GET /calculatrice': {
    view: 'pages/calculatrice/calculatrice',
    locals: {
      layout: null
    }
  },
};
