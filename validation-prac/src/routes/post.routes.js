const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/createpost", (req, res) => {
  
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(401).json({message: "Invalid token"});
        }

        console.log("Decoded JWT:", decoded);
        // You can access the userId from decoded.userId if needed
    });
  
  res.send("Post created successfully");
}); 
module.exports = router;
