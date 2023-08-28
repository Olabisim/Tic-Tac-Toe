
const express = require('express') 
const router = express.Router() 
const games = require('../models/games')

router.get('/all', async (req, res) => {

        const all = await games.find({})

        if(!all) return res.status(404).json({status: false, message: "cannot find todo"})

        res.status(200).json({
                status: true,
                data: {
                    all
                }
        })
})



module.exports = router