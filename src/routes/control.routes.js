import { Router } from "express";
const router = Router();

import * as robotCtrl from "../controllers/control.controller";

router.post('/', robotCtrl.move)

export default router;
