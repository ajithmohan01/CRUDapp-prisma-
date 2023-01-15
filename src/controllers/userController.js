import express from "express";
import userServices  from "../service/userService.js";
import { response } from "../utils/common.js";
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      await userServices.getallusers(req, res);
    } catch (error) {
      res.status(500).json(response("server error", error.message, null));
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      await userServices.deleteuserbyId(req, res)
    } catch (error) {
      res.status(500).json(response("server error", error.message, null));
    }
  });
  
  router.put("/:id", async (req, res) => {
    try {
      await userServices.updateuserbyId(req, res)
    } catch (error) {
      res.status(500).json(response("server error", error.message, null));
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      await userServices.getuserbyId(req, res)
    } catch (error) {
      res.status(500).json(response("server error", error.message, null));
    }
  });
  
  export default router;
  