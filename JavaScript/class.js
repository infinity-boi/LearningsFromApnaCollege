class Product {
    constructor(itemName, price, discount, productCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
};

let pencil = new Product('Pencil', 20, 2, 'P10');

const Product1 = class {
    constructor(itemName, price, discount, productCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
    get getDiscountValue(){
        return this.discount;
    }
    set setDiscountValue(value){
        this.dsicount = value;
    }
    discountValue(){
        return this.discount * this.price/100;
    }
};

let chair = new Product1('Chair', 499, 15, 'C10');


// // extending class
// class Product {
//     constructor(itemName){
//         this.itemName = itemName;
//     }
//     getItemName(){
//         return this.itemName +" is a product";
//     }
// }
// class Furniture extends Product{
//     constructor(itemName, material) {
//         super(itemName);
//         this.material = material;
//     }
//     getItemName(){
//         return this.itemName +" is a furniture";
//     }
// }
