/* 
การอัปเดตด็อกคิวเมนต์ (Update)
- แทนที่ด็อกคิวเมนต์เดียว
 - รูปแบบ
   db.collection_name.replaceOne(filter, replacement, options)
   - replacement ฟิลด์และค่าที่ต้องการกำหนดแทนที่ลงในด็อกคิวเมนต์
*/

// แทนที่ด๊อกคิวเมนต์ที่ชื่อ Puri
db.writer.replaceOne(
  { name: "Puri" },
  { name: "Puri", field: "Programming", phone: "089432423432" }
);
