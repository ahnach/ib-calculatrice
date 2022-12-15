const { soustraire } = require("../services/CalculatriceService");
const CalculatriceService = require("../services/CalculatriceService");

module.exports = {

    additionner: function (req, res) {

        let val1 = Number(req.body.val1);
        let val2 = Number(req.body.val2);
        let resultat = CalculatriceService.additionner(val1, val2)
        res.view("pages/Calculatrice/Calculatrice", { result: resultat, layout: null })
    },


    soustraire: function (req, res) {
        let val1 = Number(req.body.val1);
        let val2 = Number(req.body.val2);
        let resultat = CalculatriceService.soustraire(val1, val2)
        res.view("pages/Calculatrice/Calculatrice", { result: resultat, layout: null })
    },

    diviser: function (req, res) {
        let val1 = Number(req.body.val1);
        let val2 = Number(req.body.val2);
        let resultat = CalculatriceService.diviser(val1, val2)
        res.view("pages/Calculatrice/Calculatrice", { result: resultat, layout: null })
    },

    multiplier: function (req, res) {
        let val1 = Number(req.body.val1);
        let val2 = Number(req.body.val2);
        let resultat = CalculatriceService.multiplier(val1, val2)
        res.view("pages/Calculatrice/Calculatrice", { result: resultat, layout: null })
    }
}