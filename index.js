/* 
การลบด็อกคิวเมนต์ (Delete)
 - deleteMany()
รูปแบบ
 - db.collection_name.deleteMany(filter)
*/

// ลบ doc ที่ field "programming"
db.writer.deleteMany({ field: "programming" });
