const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const apiBanner = require('../controllers/banner');
const quemSomos = require("../controllers/QuemSomos");
const apiProposito = require("../controllers/proposito");
const apiRobos = require("../controllers/robos")
const redesSociais = require("../controllers/RedesSociais")
const apiParceiros = require('../controllers/parceiros');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/banner', apiBanner.getBanner);
  app.get("/api/quemSomos", quemSomos.getWhoWeAre);
  app.get("/api/proposito", apiProposito.getProposito);
  app.get("/api/redesSociais", redesSociais.getSocialMedias);
  app.get('/api/robos', apiRobos.getRobo);
  app.get('/api/parceiros', apiParceiros.getParceiros);

  app.get('*', (req, res) => {
		res.redirect('/');
	});
};