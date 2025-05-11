// /api/routes/upload.route.js
import express from "express";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/image", (req, res) => {
  upload.single("image")(req, res, function (err) {
    if (err) {
      console.error("🛑 Multer Error:", err);
      return res.status(500).json({
        message: "Upload middleware failed",
        error: err.message,
      });
    }

    if (!req.file) {
      console.error("🛑 No file uploaded!");
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("✅ File uploaded:", req.file);
    return res.status(200).json({ url: req.file.path });
  });
});


export default router;

