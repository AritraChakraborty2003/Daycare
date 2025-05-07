import express from "express";
import {
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getTestimonials,
} from "../controllers/TestimonialController.js";
import { uploadSingle } from "../middleware/upload.js";

const router = express.Router();

router.post("/", uploadSingle("image"), createTestimonial);
router.put("/:id", uploadSingle("image"), updateTestimonial);
router.delete("/:id", deleteTestimonial);
router.get("/", getTestimonials);

export default router;
