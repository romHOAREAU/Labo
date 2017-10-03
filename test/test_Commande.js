const Commande= require('../GestionCommande/commande');
const Produit= require('../GestionCommande/produit');
const assert = require('assert');
describe("Commande",() => {

    describe("ajouterProduitCommande", () => {
        let produit1;
        let commande1;

        before(function() {
            produit1 = new Produit("Sacoche de type pas mal", 5);
            commande1 = new Commande(1, '2010/05/20');
        });

        it("ajout dun produit", () => {
            commande1.ajouterLigne(produit1,1);
            assert.equal(commande1.lignes.length,1, "Ajout non fait" )
        });
    });
});