/* 

โมเดลโครงสร้างต้นไม้

การอ้างอิงด้วยบรรพบุรุษ (Array of Ancestors)
 - เก็บเส้นทางไว้ในโหนดเด็ก child ว่าสืบเชื้อสายมาจากใครบบ้าง

*/

// เราจะเพิ่มด็อกคิวเมนต์ในคอลเล็กชัน books ที่เก็บเชื้อสายบรรพบุรุษเป็นอาร์เรย์ไว้ในฟิลด์ family และ เก็บหมวดหมู่พ่อแม่ไว้ในฟิลด์ cat
db.books.update({ _id: "books" }, { $set: { family: [] } });
db.books.update({ _id: "office" }, { $set: { family: ["books"] } });
db.books.update({ _id: "graphic" }, { $set: { family: ["books"] } });
db.books.update({ _id: "programming" }, { $set: { family: ["books"] } });
db.books.update(
  { _id: "publishing" },
  { $set: { family: ["books", "graphic"] } }
);
db.books.update(
  { _id: "multimedia" },
  { $set: { family: ["books", "graphic"] } }
);
db.books.update(
  { _id: "photoshop" },
  { $set: { family: ["books", "graphic", "publishing"] } }
);
db.books.update(
  { _id: "illustrator" },
  { $set: { family: ["books", "graphic", "publishing"] } }
);
db.books.update(
  { _id: "indesign" },
  { $set: { family: ["books", "graphic", "publishing"] } }
);

// เราสามารถดูเส้นทางการสืบเชื้อสายของข้อมูลที่สืบค้นได้ว่ามาจากไหน
db.books.findOne({ _id: "photoshop" }).family
// แสดงเส้นทางการสืบเชื้อสายหรือโครงสร้างลำดับชั้น

// เราสามารถกำหนดให้ฟิลด์ family เป็นอินเด็กซ์ที่ใช้อ้างอิงข้อมูลโดยกำหนดค่าเป็น 1 ซึ้งจะช่วยให้ค้นหาข้อมูลด้วยโหนดบรรพบุรุษได้เร็วขึ้น
db.books.createIndex({ family: 1 })

// เราสามารถสืบค้นด็อกคิวเมนต์ลูกหลานที่อ้างอิงโหนดบรรพบุรุษในฟิลด์ family ได้อย่างรวดเร็ว เช่น สืบค้นด๊อกคิวเมนต์ลูกหลานที่อยู่ภายใต้ โหนด family ฟิลด์ graphic
db.books.find({ family: "graphic" })
// ด็อกคิวเมนต์หนังสือที่อยู่ภายใต้ graphic