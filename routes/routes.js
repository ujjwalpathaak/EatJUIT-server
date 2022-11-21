const router = express.Router()
import express from "express"

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.send(" somehow worked :) ")
})
export default router;
