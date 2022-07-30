/* 

QueryBuilder

*/

/* 

Single query operation

Model.find(conditions, [fields], [options], [callback])

*/

User.find(
  {
    'name' : 'Simon Holmes'
  },
  (err, users) => {
    if (!err) {
      console.log(users)
    }
  }
)

/* 

returned specifying which fields

*/
User.find(
  {
    'name': 'Simon Holmes'
  },
  (err, users) => {
    if (!err) {
      console.log(users)
    }
  }
)

/* 

options to specify a sort order

*/
User.find(
  {
    'name': 'Simon Holmes'
  },
  {
    sort: {
      lastLogin: -1
    }
  },
  (err, users) => {
    if (!err) {
      console.log(users)
    }
  }
)