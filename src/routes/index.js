const express = require('express')
const res = require('express/lib/response')
const router = express.Router()




router.get('/', async (req, res) => {

    res.json(2);
    })



module.exports = router
