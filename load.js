// db.createCollection("client_master")
// db.client_master.insertMany([
//     {Clientno:'C00001',Name:'ivan',city:'bombay',pincode:400054,state:'maharashtra',baldue:15000},
//     {Clientno:'C00002',Name:'vandana',city:'madras',pincode:780001,state:'tamilnadu',baldue:0},
//     {Clientno:'C00003',Name:'pramada',city:'bombay',pincode:400057,state:'maharashtra',baldue:5000},
//     {Clientno:'C00004',Name:'basu',city:'bombay',pincode:400056,state:'maharashtra',baldue:0},
//     {Clientno:'C00005',Name:'ravi',city:'delhi',pincode:100001,state:'',baldue:2000},
//     {Clientno:'C00006',Name:'rukmini',city:'bombay',pincode:400050,state:'maharashtra',baldue:0}
// ])


// db.createCollection("salesman_master")
// db.salesman_master.insertMany([
//     {salesman_no:'S00001', salesmanname:'Kiran', address:'A/14 worli', city:'Bombay', pincode:400002, state:'Mah', salamt:3000, tgttoget:100, ytdsale:50, remark:'Good'},
//     {salesman_no:'S00002', salesmanname:'Manish', address:'65, nariman', city:'Bombay', pincode:400001, state:'Mah', salamt:3000, tgttoget:200, ytdsale:100, remark:'Good'},
//     {salesman_no:'S00003', salesmanname:'Ravi', address:'P-7 Bandra', city:'Bombay', pincode:400032, state:'Mah', salamt:3000, tgttoget:200, ytdsale:100, remark:'Good'},
//     {salesman_no:'S00004', salesmanname:'Ashish', address:'A/5 Juhu', city:'Bombay', pincode:400044, state:'Mah', salamt:3500, tgttoget:200, ytdsale:150, remark:'Good'}
//    ])


// db.createCollection("product_master")
// db.product_master.insertMany([
//     {productno:'P00001',description:'1.44floppies',profitpercent:5,unitmeasured:'piece',qtyonhand:100, recorderlvl:20, sellprice:525,costprice:500},
//     {productno:'P03453',description:'Monitors', profitpercent:6, unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:12000, costprice:11200},
//     {productno:'P06734',description:'Mouse',profitpercent:5, unitmeasured:'piece', qtyonhand:20, recorderlvl:5, sellprice:1050, costprice:500},
//     {productno:'P07865',description:'1.22 floppies',profitpercent:5, unitmeasured:'piece', qtyonhand:100, recorderlvl:20, sellprice:525, costprice:500},
//     {productno:'P07868',description:'Keyboards',profitpercent:2, unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:3150, costprice:3050},
//     {productno:'P07885',description:'CD Drive',profitpercent:2.50, unitmeasured:'piece',qtyonhand:10,recorderlvl:3,sellprice:5250,costprice:5100},
//     {productno:'P07965',description:'540 HDD',profitpercent:4, unitmeasured:'piece',qtyonhand:10,recorderlvl:3,sellprice:8400, costprice:8000},
//     {productno:'P07975',description:'1.44 Drive',profitpercent:5,unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:1050, costprice:1000},
//     {productno:'P08865',description:'1.22 Drive',profitpercent:5,unitmeasured:'piece',qtyonhand:2,recorderlvl:3, sellprice:1050, costprice:1000},
// ])


// show.collections
// db.client_master.find()


// drop databases:-
// db.dropDatabase();


// drop collections:-
// db.client_master.drop()
// db.product_master.drop()



// remove:-
// db.client_master.remove({})
// db.product_master.find({qtyonhand:{$eq:10}}).count()
// db.product_master.remove({qtyonhand:{$eq:10}})


// update:-
// db.product_master.update({productno:'P08865'},{$set:{description:'Laptop'}})
// db.product_master.update({productno:'P08865'},{$set:{GST:20}})


// db.product_master.updateMany({},{$set:{Tax:200}})



