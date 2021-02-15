const express = require("express");
const router = express.Router();
const Note = require("../models/question");
router.route("/").post((req, res)=>{
    const A = req.body.A;
    const B = req.body.B;
    const C = req.body.C;
    const D = req.body.D;
    const newNote= new Note({
        A,
        B,
        C,
        D
    });
    newNote.save();
    console.log(newNote)
})
module.exports = router;
