/* 

QueryBuilder

*/

User.find({ 'name': 'Simon Holmes' })
.wher('age').gt(18)
.sort('-lastLogin')
.select('_id name email')
.exec((err, users) => {
  if (!err) {
    console.log(users) // output array of users found
  }
})

/* 

Or we can create a combination of the previous two:

*/

const myQuery = User.find({'name' : 'Simon Holmes'})
.where('age').gt(18)
.sort('-lastLogin')
.select('_id name email')

myQuery.exec((err, users) => {
  if (!err) {
    console.log(users) // output array of users found
  }
})