
// -- /client_master/
// -- create table client_master(
// --    Clientno varchar(50) ,
// --    Name varchar(50),
// --    address1 varchar(15),
// --    city varchar(50),
// --    pincode numeric(38),
// --    state varchar(50),
// --    baldue numeric(38),
// --    constraint pk_clientmaster primary key(Clientno)
// -- );

// -- insert into client_master values('C00001', 'Ivan','varachha','Bombay', 400054, 'Maharashtra', 15000);
// -- insert into client_master values('C00002', 'Vandana','motavarachha', 'Madras', 780001, 'Tamilnadu', 0);
// -- insert into client_master values('C00003', 'Pramada','yogichowk','Bombay', 400057, 'Maharashtra', 5000);
// -- insert into client_master values('C00004', 'Basu','kamrej', 'Bombay', 400056, 'Maharashtra', 0);
// -- insert into client_master values('C00005', 'Ravi','rajkort','Delhi', 100001, '', 2000);
// -- insert into client_master values('C00006', 'Rukmini','goa','Bombay', 400050, 'Maharashtra', 0);
// -- select * from client_master;


// -- /product_master/
// -- create table product_master(
// --     productno varchar(20),
// --     description varchar(20),
// --     profitpercent numeric(38,2),
// --     unitmeasured varchar(50),
// --     qtyonhand numeric(38),
// --     recorderlvl numeric(38),
// --     sellprice numeric(38),
// --     costprice numeric(38),
// --     constraint pk_productmaster primary key(productno)
// -- );

// -- insert into product_master values('P00001', '1.44floppies',5, 'piece', 100, 20, 525,500);
// -- insert into product_master values('P0345', 'Monitors',6, 'piece',10,3,12000,11200); 
// -- insert into product_master values('P06734', 'Mouse',5, 'piece',28,5,1050, 500);
// -- insert into product_master values('P07885', '1.22 floppies',5, 'piece',108,20,525, 500);
// -- insert into product_master values('P07868', 'Keyboards',2, 'piece', 18, 3, 3150, 3050);
// -- insert into product_master values('P07965', '540 HDD',4, 'piece',10,3,8400, 8000); 
// -- insert into product_master values('P07975', '1.44 Drive',5, 'piece', 10,3, 1858, 1800);
// -- insert into product_master values('P08865', '1.22 Drive',5, 'piece',2,3,1050, 1000);
// -- insert into product_master values('P03453', '1.22 Drive',5, 'piece',2,3,1050, 1000);
// -- select * from product_master;



// --  /salesman_master/
// -- create table salesman_master(
// --               salesman_no varchar(50),
// --               salesmannane varchar(50),
// --               address1 varchar(50),
// --               address2 varchar(50),
// --               city varchar(50),
// --               pincode numeric(38),
// --               state varchar(50),
// --               salamt numeric(38),
// --               tgttoget numeric(38),
// --               ytdsale numeric(38),
// --               remark varchar(50),
// --               constraint pk_salesmanmaster primary key(salesman_no)
// -- );              

// -- insert into salesman_master values ('S00001', 'Kiran', 'A/14 worli', 'worli', 'Bombay', 400002, 'Mah', 3000, 100, 50, 'Good');
// -- insert into salesman_master values ('S00002', 'Manish', '65 nariman','nariman', 'Bombay',480001, 'Mah', 3000, 200, 100, 'Good');
// -- insert into salesman_master values ('S00003', 'Ravi', 'P-7 Bandra', 'Bandra', 'Bombay', 400032, 'Mah', 3000, 200, 100, 'Good');
// -- insert into salesman_master values ('S00004', 'Ashish', 'A/5 Juhu','Juhu', 'Bombay', 400044, 'Mah', 3500, 200, 150, 'Good');
// -- select * from salesman_master;



// Client_master:-
// db.client_master.insertMany([
//     {Clientno:'C00001',Name:'ivan',city:'bombay',pincode:400054,state:'maharashtra',baldue:15000},
//     {Clientno:'C00002',Name:'vandana',city:'madras',pincode:780001,state:'tamilnadu',baldue:0},
//     {Clientno:'C00003',Name:'pramada',city:'bombay',pincode:400057,state:'maharashtra',baldue:5000},
//     {Clientno:'C00004',Name:'basu',city:'bombay',pincode:400056,state:'maharashtra',baldue:0},
//     {Clientno:'C00005',Name:'ravi',city:'delhi',pincode:100001,state:'',baldue:2000},
//     {Clientno:'C00006',Name:'rukmini',city:'bombay',pincode:400050,state:'maharashtra',baldue:0}
// ])


// salesman_master:-
// db.salesman_master.insertMany([
//     {salesman_no:'S00001', salesmanname:'Kiran', address:'A/14 worli', city:'Bombay', pincode:400002, state:'Mah', salamt:3000, tgttoget:100, ytdsale:50, remark:'Good'},
//     {salesman_no:'S00002', salesmanname:'Manish', address:'65, nariman', city:'Bombay', pincode:400001, state:'Mah', salamt:3000, tgttoget:200, ytdsale:100, remark:'Good'},
//     {salesman_no:'S00003', salesmanname:'Ravi', address:'P-7 Bandra', city:'Bombay', pincode:400032, state:'Mah', salamt:3000, tgttoget:200, ytdsale:100, remark:'Good'},
//     {salesman_no:'S00004', salesmanname:'Ashish', address:'A/5 Juhu', city:'Bombay', pincode:400044, state:'Mah', salamt:3500, tgttoget:200, ytdsale:150, remark:'Good'}
   
//    ])


// product_master:-
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


skip:-
db.client_master.find({}).skip(3) //skip first three data

sort:-
// by default in acsending order
db.client_master.find({}).sort({"Name":1})   // in ascending order
db.client_master.find({}).sort({"Name":-1})   // in descending order

count:-
db.client_master.find({}).count()        // will be the count the data

find:-
db.collection_name.find({"key":"value"})
db.client_master.find({"Name":'basu'})   // one data will be selected


comparison_query_operators:- 

db.client_master.find({"baldue":{$eq:0}})          // equal to

db.client_master.find({"baldue":{$ne:0}})          // not equal to
 
db.client_master.find({"baldue":{$gt:12000}})      // greater then

db.client_master.find({"baldue":{$gte:12000}})     // greater then equal to 

db.client_master.find({"baldue":{$lt:1000}})       // less then 

db.client_master.find({"baldue":{$lte:1000}})      // less then equal to 

db.client_master.find({"baldue":{$in:[2000,0]}})   // in 

db.client_master.find({"baldue":{$nin:[2000,0]}})  // not in 



logical_query_operators:-

db.collection.find({$and:[{"field":"value"},{"field":"value"}]})

db.client_master.find({$and:[{"Name":{$eq:"basu"}},{"state":{$eq:'maharashtra'}}]}) // and

db.client_master.find({$or:[{"baldue":{$ne:0}},{"state":{$in:['maharashtra']}}]})   // or

db.client_master.find({"baldue":{$not:{$lt:1000}}})                                 //note


// query:-
// 1. find out the names of all client 
   db.client_master.find()

// 2. Retrieve the entire contents of the Client Master table.
   db.client_master.find()

// 3. Retrieve the list of names, city and the sate of all the clients.
   db.client_master.find()

// 4. List the various products available from the Product Master table.
   db.product_master.find()

// 5. List all the clients who are located in bombay.
   db.client_master.find({"city":{$eq:"bombay"}})

// 6. Find the names of salesmen who have a salary equal to Rs.3000.
   db.salesman_master.find({"salamt":{$eq:3000}})

// 4. Exercise on updating records in a table 
// 1. Change the city of ClientNo 'C00005' to 'Bangalore".

// 2. Change the BalDue of ClientNo 'C00001' to Rs. 1000.

// 3. Change the cost price of Trousers' to Rs. 950.00.

// 4. Change the city of the salesman to Pune.


 






