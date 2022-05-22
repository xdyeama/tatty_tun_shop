const router = require("express").Router();
const Order = require("../models/Order");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

//Create Order
router.post("/create", verifyTokenAndAuthorization, async (req, res) => {
  const newOrder = new Order(req.body);
  try{
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  }catch(err){
    res.status(500).json(err);
  }
});

//Update Order
router.put("/update/:userId", verifyTokenAndAdmin, async (req, res) => {
  try{
    const updatedOrder = await Order.findByIdAndUpdate({ userId: req.params.userId }, {
      $set: req.body,
    }, { new: true });

    res.status(200).json(updatedOrder);
  }catch(err){
    res.status(500).json(err);
  }
});

//Delete Order
router.delete("/delete/:userId", verifyTokenAndAdmin, async (req, res) => {
  try{
    await Order.findByIdAndDelete({ userId: req.params.userId });
    
    res.status(200).json("Order has been deleted");
  }catch(err){
    res.status(500).json(err);
  }
});

//Get user Order
router.get("/find/:userId", verifyTokenAndAdmin, async (req, res) => {
  try{
    const orders = await Order.find({ userId: req.params.userId })
    res.status(200).json(orders);
  }catch(err){
    res.status(500).json(err);
  }
});


//Get All orders
router.get("/find/", verifyTokenAndAdmin, async (req, res) => {
  try{
    const orders = await Order.find();
  }catch(err){
    res.status(500).json(err);
  }
});

// Get monhtly income

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth - 1));
  const previousMonth = new Date( new Date().setMonth(lastMonth.getMonth() - 1));
  try{
    const income = await Order.aggregate([
      { 
        $match: 
        {
          createdAt: 
            {
              $gte: previousMonth
            }
        },
        $project: {
          month: {
            $month: "$createdAt"
          },
          sales: "$amount"
        },
        $group: {
            _id: "$month",
            total: { 
              $sum: "$sales"
            }
          }
        }
    ]);
    res.status(200).json(income);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;