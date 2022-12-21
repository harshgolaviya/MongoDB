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


   db.books.find({"author.profile.exp":{$eq:8}})

// Q1) Select all documents from books collection, where no_of_reviews  is 3.
   db.books.find({no_of_reviews:{$eq:3}})

// Q2) Select all documents from the books collection where author profile contains 2 courses?
    db.books.find({"author.profile.courses":{$eq:2}})

// Q3) Read all documents from the books collection where 'tags' array contains 'database' element?
    db.books.find({tags:{$eq:"database"}})

// Q4) Select all documents from books collection where tags array is exactly equal to ["language","freeware","programming"].
    db.books.find({tags:{$eq: ["language","freeware","programming"]}})

// Q5) To select all documents from books collection where no_of_reviews is not equal to 3.
    db.books.find({no_of_reviews:{$ne:3}})

// Q6) Select all documents from books collection where the no_of_reviews is greater than 3.
    db.books.find({no_of_reviews:{$gt:3}})

// Q7) Select all documents from books collection where the no_of_reviews is greater than or equal to 3.
    db.books.find({no_of_reviews:{$gte:3}})

// Q8) Select all documents from books collection where the no_of_reviews is less than 3.
    db.books.find({no_of_reviews:{$lt:3}})

// Q9) Select all documents from the books collection where the no_of_reviews is 1 or 4 or 5?
    db.books.find({$or:[{"no_of_reviews":{$eq:1}},{"no_of_reviews":{$eq:4}},{"no_of_reviews":{$eq:5}}]})

// Q10) Select all documents where either no_of_reviews >3 or tags array contains programming element?
   db.books.find({$or:[{"no_of_reviews":{$gt:3}},{"tags":{$in:["programming"]}}]})


// Q11) Select all documents where either no_of_reviews is less than 3 or downloadable is true or author profile contains atleast 2 books?
   db.books.find({$or:[{"no_of_reviews":{$lt:3}},{"downloadable":{$eq:true}},{"author.profile.books":{lte:2}}]})    

// Q12) Select all documents does not conain no_of_reviews and downloadable fields Note: $or results + $nor results = total no of documents
    db.books.find({$or:[{"no_of_reviews":{$eq:0}},{"downloadable_fields":{$eq:0}}]}).count()             // 0
    db.books.find({$or: [{no_of_reviews: {$exists: true}}, {downloadable: {$exists: true}}]}).count();   // 7
    db.books.find({$nor: [{no_of_reviews: {$exists: true}}, {downloadable: {$exists: true}}]}).count();  // 0
    db.books.find({$and: [{no_of_reviews: {$exists: false}}, {downloadable: {$exists: true}}]}).count(); // 0
    db.books.find({$and: [{no_of_reviews: {$exists: false}}, {downloadable: {$exists: true}}]}).count(); 
    db.books.find({no_of_reviews: {$exists: false}}).count()                                             // 7
   

// Q13) Select all documents where the no_of_reviews is greater than or equals to 3 and downloadable is true?
    db.books.find({$or:[{"no_of_reviews":{$gte:3}},{"downloadable":{$eq:true}}]})

//  Q14) update no_of_reviews to 10 where isbn no is 6677
     db.books.updateMany({isbn:{$eq:6677}},{$set:{no_of_reviews:10}})

//  Q15) update profile to 8 of books Oracle in simple way
     db.books.update({title:{$eq:'Oracle in simple way'}},{$set:{"author.profile.books":10}})