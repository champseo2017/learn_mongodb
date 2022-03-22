/* 

โมเดลโครงสร้างต้นไม้
books
office = books
graphic = books
programming = books


publishing = graphic
multimedia = graphic

photoshop = publishing
illustrator = publishing
indesign = publishing

โหนดบนสุด คือ books
 - id ของโหนดพ่อแม่อยู่ใน field cat

*/

db.books.insertMany([
  {
    _id: "books",
    cat: null,
  },
  {
    _id: "office",
    cat: "books",
  },
  {
    _id: "graphic",
    cat: "books",
  },
  {
    _id: "programming",
    cat: "books",
  },
  {
    _id: "publishing",
    cat: "graphic",
  },
  {
    _id: "multimedia",
    cat: "graphic",
  },
  {
    _id: "photoshop",
    cat: "publishing",
  },
  {
    _id: "illustrator",
    cat: "publishing",
  },
  {
    _id: "indesign",
    cat: "publishing",
  },
]);

// เราสามารถสืบค้นเพื่อดึงข้อมูลพ่อแม่ของลูกได้โดยตรง
db.books.findOne({ _id: "photoshop" }).cat;

// กำหนดค่าให้ฟิลด์ cat เป็นอินเด็กซ์ที่ใช้อ้างอิงข้อมูล ช่วยให้ค้นหาข้อมูลด้วยโหนดพ่อแม่ได้เร็วขึ้น
db.books.createIndex({ cat: 1 })

// สืบค้นด็อกคิวเมนต์ลูกๆ ที่อยู่ภายใต้โหนดพ่อแม่ในฟิลด์ cat ได้อย่างรวดเร็ว
// เช่น สืบค้นรายการหนังสือที่อยู่ในหมวด publishing ดังนี้
db.books.find({ cat: "publishing" })