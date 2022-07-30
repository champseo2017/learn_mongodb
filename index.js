/* 

Creating a new static find method
dding it to the statics after the schema is declared

*/
projectSchema.statics.findByUserID = function (userid, callback) {
  this.find(
    { createdBy: userid },
    '_id projectName',
    {sort: 'modifiedOn'}
    callback);
}
// user method
Project.findByUserID(
  req.params.userid,
  function (err, projects) {
    if(!err){
      console.log(projects);
    }
  }
)