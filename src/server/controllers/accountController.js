const express = require('express');
const router = express.Router();

router.get("/test", async (req,res) => {
    const test = {response: "test succefull"}
    res.json(test);
});

module.exports = router;