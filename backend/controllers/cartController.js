import userModel from "../models/userModels.js";

// Add items to user cart 
const addToCart = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData}); 
        return res.json({success: true, message: "Item added to cart successfully"});
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: "Error occurred while adding item to cart"});
    }
}

// Remove items from user cart
const removeFromCart = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        return res.json({success: true, message: "Item removed from cart successfully"});
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: "Error occurred while removing item from cart"});
    }
}

// Fetch user cart items
const getCart = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        return res.json({success: true, cartData});
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: "Error occurred while fetching cart items"});
    }
}

export { addToCart, removeFromCart, getCart }