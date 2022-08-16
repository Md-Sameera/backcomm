const express = require ('express')
const dataRoute = require('../Components/keyboard');

const detailRouter = express.Router()
detailRouter.route("/keyboard")
.get(dataRoute.apiController)
module.exports =detailRouter