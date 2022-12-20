// query:-
// 1. find out the names of all client 
   db.client_master.find({},{"Name":1,"_id":0})

// 2. Retrieve the entire contents of the Client Master table.
   db.client_master.find()

// 3. Retrieve the list of names, city and the sate of all the clients.
   db.client_master.find({},{"Name":1,"city":1,"state":1})

// 4. List the various products available from the Product Master table.
   db.product_master.find()

// 5. List all the clients who are located in bombay.
   db.client_master.find({"city":{$in:["bombay"]}})

// 6. Find the names of salesmen who have a salary equal to Rs.3000.
   db.salesman_master.find({"salamt":{$eq:3000}})




// 4. Exercise on updating records in a table 
// 1. Change the city of ClientNo 'C00005' to 'Bangalore".
   db.client_master.update({Clientno:'C00005'},{$set:{city:"Bangalore"}})


// 2. Change the BalDue of ClientNo 'C00001' to Rs. 1000.
    db.client_master.update({Clientno:'C00001'},{$set:{baldue:1000}})


// 3. Change the cost price of Trousers' to Rs. 950.00.
   db.product_master.update({description:"Monitors"},{$set:{sellprice:950}})

// 4. Change the city of the salesman to Pune.
   db.salesman_master.updateMany({city:'Bombay'},{$set:{city:'pune'}})

