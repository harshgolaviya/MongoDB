// {
//     _id: ObjectId("63a6e4e01c7e6f33b2ce8556"),
//     address: {
//       building: '6909',
//       coord: [ -74.0259567, 40.6353674 ],
//       street: '3 Avenue',
//       zipcode: '11209'
//     },
//     borough: 'Brooklyn',
//     cuisine: 'Delicatessen',
//     grades: [
//       {
//         date: ISODate("2014-08-21T00:00:00.000Z"),
//         grade: 'A',
//         score: 4
//       },
//       {
//         date: ISODate("2014-03-05T00:00:00.000Z"),
//         grade: 'A',
//         score: 3
//       },
//       {
//         date: ISODate("2013-01-10T00:00:00.000Z"),
//         grade: 'A',
//         score: 10
//       }
//     ],
//     name: 'Nordic Delicacies',
//     restaurant_id: '40361390'
//   },


// 1. Write a MongoDB query to display all the documents in the collection restaurants.

 db.restaurants.find()          // 3772

// 2. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.

db.restaurants.find(
    {},{restaurant_id:1,name:1,borough:1,cuisine:1}
)                             // 3772

// 3. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.

db.restaurants.find(
    {},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0}
)                             // 3772

// 4. Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant.

db.restaurants.find(
    {},{restaurant_id:1,name:1,borough:1,'address.zipcode':1,_id:0}
)                    // 3772

// 5. Write a MongoDB query to display all the restaurant which is in the borough Bronx.

db.restaurants.find(
    {borough:"Bronx"},
    {_id:1,name:1,borough:1,'address.zipcode':1,restaurant_id:1}
).count()               // 309

// 6. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.

db.restaurants.find(
    {borough:"Bronx"},
    {_id:1,name:1,borough:1,'address.zipcode':1,restaurant_id:1}
).limit(5)               // 5

// 7.Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.

db.restaurants.find(
    {borough:"Bronx"},
    {_id:1,name:1,borough:1,'address.zipcode':1,restaurant_id:1}
).skip(5).limit(5)

// 8. Write a MongoDB query to find the restaurants who achieved a score more than 90.

db.restaurants.find(
    {'grades.score':{$gte:90}},
    {id:1,name:1,borough:1,cuisine:1,'grades.score':1}
).count()            // 3

// 9. Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.

db.restaurants.find(
    {'grades.score':{$gt:80,$lt:100}},
    {id:1,name:1,borough:1,cuisine:1,'grades.score':1}
).count()            // 4

// 10. Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.

db.restaurants.find(
    {'address.coord':{$lte:-95.754168}},
    {_id:0,'address.coord':1,borough:1,cuisine:1,name:1,'grades.score':1}
).count()     // 3

// 11. Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168.

db.restaurants.find(
        {$and:[{cuisine:{$nin:['American ']}},
        {"grades.score":{$gt:70}},
        {"address.coord":{$lt:-65.754168}}
    ]}).count() //5


// 12. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168.
// Note : Do this query without using $and operator.

db.restaurants.find(
       {cuisine:{$nin:['American ']},
       "grades.score":{$gt:70},
       "address.coord":{$lt:-65.754168}
    }).count()


// 13. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.

db.restaurants.find(
       {$and:[{cuisine:{$nin:['American ']}},
       {"grades.grade":{$eq:'A'}},
       {borough:{$nin:['Brooklyn']}}]
    }).sort({"cuisine":-1}).count() //2017


// 14. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.

db.restaurants.find(
           {name:/^Wil/},
           {restaurant_id:1,name:1,borough:1,cuisine:1}
      ).count()   //3


// 15. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.

db.restaurants.find(
    {name:{$regex:"ces$"}},
         {restaurant_id:1,name:1,borough:1,cuisine:1}
     ).count()   //6


// 16. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.

db.restaurants.find(
          {name:{$regex:"Reg"}},
          {restaurant_id:1,name:1,borough:1,cuisine:1}
        ).count()   //7


// 17. Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish.

db.restaurants.find(
           {borough:{$eq:'Bronx'},
           cuisine:{$in:["American ","Chinese"]}},
           {restaurant_id:1,name:1,borough:1,cuisine:1}
      ).count()   //91

   
db.restaurants.find(
        {$and:[{borough:{$eq:'Bronx'}},
        {cuisine:{$in:["American ","Chinese"]}}]},
        {restaurant_id:1,name:1,borough:1,cuisine:1}
    ).count()    //91


// 18. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn.

db.restaurants.find(
      {$or:[{borough:{$eq:'Staten Island'}},
      {borough:{$eq:'Queens'}},
      {borough:{$eq:'Bronxor'}},
    {borough:{$eq:'Brooklyn'}}]},
    {restaurant_id:1,name:1,borough:1,cuisine:1}
).count()        // 1580


db.restaurants.find(
      {borough:{$in:['Staten Island','Queens','Bronxor','Brooklyn']}},
      {restaurant_id:1,name:1,borough:1,cuisine:1}
).count()              // 1580



// 19. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronxor Brooklyn.
db.restaurants.find(
       {$nor:[{borough:{$eq:'Staten Island'}},
       {borough:{$eq:'Queens'}},
       {borough:{$eq:'Bronxor'}},
       {borough:{$eq:'Brooklyn'}}]}
).count()


db.restaurants.find(
      {borough:{$nin:['Staten Island','Queens','Bronxor','Brooklyn']}}
).count()       // 2192


// 20. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score which is not more than 10.

db.restaurants.find(
    {"grades.score":{$not:{$gt:10}}},
    {restaurant_id:1,name:1,borough:1,cuisine:1,grades:1}
).count()          // 340


// 21. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinese' or restaurant's name begins with letter 'Wil'.

db.restaurants.find(
      {$or:[{cuisine:{$in:['American ','Chinese']}},
    {name:/^Wil/}]},
    {restaurant_id:1,name:1,borough:1,cuisine:1}
).count()                     // 1372

// 22. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates..

db.restaurants.find(
    {$and:[{'grades.grade':{$eq:'A'}},
    {'grades.score':{$eq:11}},
    {'grades.date':{$eq:ISODate("2014-08-11T00:00:00Z")}}]},
    {restaurant_id:1,name:1,grades:1}
).count()           //

db.restaurants.find(
    {'grades.grade':{$eq:'A'},
     'grades.score':{$eq:11},
    'grades.date':{$eq:ISODate("2014-08-11T00:00:00Z")}},
    {restaurant_id:1,name:1,grades:1}
).count()        // 8


// 23. Write a MongoDB query to find the restaurant Id, name and grades for those restaurants where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".

db.restaurants.find(
    {'grades.1.grade':{$eq:'A'},
     'grades.1.score':{$eq:9},
    'grades.1.date':{$eq:ISODate("2014-08-11T00:00:00Z")}},
    {restaurant_id:1,name:1,grades:1}
).count()        // 1


db.restaurants.find(
    {$and:[{'grades.1.score':9},
    {'grades.1.grade':'A'},
    {'grades.1.date':ISODate("2014-08-11T00:00:00Z")}]}
).count()                   // 1

// 24. Write a MongoDB query to find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and upto 52..

db.restaurants.find(
    {'address.coord.1':{$gt:42,$lt:52}},
    {restaurant_id:1,name:1,'address.coord':1}
).count()      // 7


// 25. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.

db.restaurants.find(
          {},{name:1}).sort({"name":1}
      ).count() // 3772

// 26. Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns.

db.restaurants.find(
         {},{"name":1}
      ).sort({"name":-1})

// 27. Write a MongoDB query to arranged the name of the cuisine in ascending order and for that same cuisine borough should be in descending order.

db.restaurants.find(
        {},{cuisine:1,borough:1}
    ).sort({cuisine:1,borough:-1})

// 28. Write a MongoDB query to know whether all the addresses contains the street or not.

db.restaurants.find(
      {'address.street':{$exists:true}}
    ).count()   // 3772

// 29. Write a MongoDB query which will select all documents in themongosm restaurants collection where the coord field value is Double.
  
db.restaurants.find(
    {'address.coord':{$type:'double'}}
    ).count()  // 3772

// 30. Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7.

db.restaurants.find(
    {"grades.score":{$mod : [7,0]}},
    {"restaurant_id" : 1,"name":1,"grades":1}
  ).count()   // 1585