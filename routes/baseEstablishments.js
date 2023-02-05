import express from "express";

import { getBaseEstablishmentById, createBaseEstablishment, getBaseEstablishments, deleteBaseEstablishment,updateBaseEstablishment } from "../controllers/baseEstablishments.js";

const router = express.Router();

router.get("/:id", getBaseEstablishmentById);
router.post("/",createBaseEstablishment);
router.get("/",getBaseEstablishments);
router.patch("/:id", updateBaseEstablishment);
router.delete("/:id",deleteBaseEstablishment);

export default router;