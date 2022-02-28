const mongoose= require('mongoose');
const Schema= mongoose.Schema;

let productSchema=new Schema({
    name:{type: String, required: true, max: 50},
    price:{type: Number, required: true},
    quantity:{type: Number, required:true },
    sellingPrice:{type:Number, default:function(){
        return this.price*this.quantity;
    }}
    

    
    
});

module.exports= mongoose.model('Product', productSchema);
