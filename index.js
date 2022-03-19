/* 
การลบด็อกคิวเมนต์ (Delete)
 - deleteOne()
 - deleteMany()
รูปแบบ
 - db.collection_name.deleteOne(filter)
*/

// เช่น เราจะลบ doc ข้อมูลผู้เขียนที่ฟิลด์ name ชื่อ "Puri" โดยใช้เมธอด deleteOne()
db.writer.deleteOne({ name: "Puri" });
