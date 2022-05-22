const router = require("express").Router();
const Cart = require("../models/Cart");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

//Create Cart
router.post("/create", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try{
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  }catch(err){
    res.status(500).json(err);
  }
});

//Update Cart
router.put("/update/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try{
    const updatedCart = await Cart.findByIdAndUpdate({ userId: req.params.userId }, {
      $set: req.body,
    }, { new: true });
    res.status(200).json(updatedCart);
  }catch(err){
    res.status(500).json(err);
  }
});

//Delete Cart
router.delete("/delete/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try{
    await Cart.findByIdAndDelete({ userId: req.params.userId });
    res.status(200).json("Cart has been deleted");
  }catch(err){
    res.status(500).json(err);
  }
});

//get user Cart
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try{
    const cart = await Cart.findOne({userId: req.params.userId}) ;

    res.status(200).json(cart);
  }catch(err){
    res.status(500).json(err);
  }
});

//Find All
router.get("/find/", verifyTokenAndAdmin, async (req, res) => {
  try{
    const carts = await Cart.find();
    res.status(200).json(carts);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;