/* 
ประเภทของอินเด็กซ์ใน MongoDB

MongoDB
จัดให้มีอินเด็กซ์ไว้หลายประเภทที่แตกต่างกันเพื่อสนับสนุนเฉพาะชนิดข้อมูลและการสืบค้นแบบ
ต่างๆ

*/

/* 

อินเด็กซ์ข้อความ (Text Indexes)
เป็นการค้นหาเนื้อหาสตริงที่อยู่ในคอเล็กชัน การจัดทำอินเด็กซ์จะไม่จัดเก็บคำหยุด (Stop words) คือ คำที่พบบ่อยที่สุด เช่น "the", "a", "or" และ คำที่มีรากฐานมาจากคำศัพท์เดียวกัน อินเด็กซ์จะจัดเก็บเฉพาะคำหลักเท่านั้น

รูปแบบ
db.collection.createIndex({ field: "text" })

*/

// ตัวอย่าง เราจะจัดเก็บอินเด็กซ์ไว้บนฟิลด์ subject
db.workshop.insertMany([
  {
    subject: "basic web",
    teacher: "piya",
  },
  {
    subject: "web programming",
    teacher: "sira",
  },
  {
    subject: "web design",
    teacher: "sira",
  },
  {
    subject: "program development",
    teacher: "piya",
  },
  {
    subject: "web master",
    teacher: "nara",
  },
]);

// สร้างอินเด็กซ์ข้อความไว้บนฟิลด์ subject
db.workshop.createIndex({ subject: "text" })

// สืบค้นข้อความที่ทำ Index โดยสืบค้นคำว่า "program" ที่มีอยู่ในคอลเล็กชัน workshop
db.workshop.find({
  $text: {
    $search: "program"
  }
})

// ใช้ตัวดำเนินการ $text จะใช้อินเด็กซ์ข้อความช่วยในการค้นหาข้อความ และ ตัวดำเนินการ $search ใช้สืบค้นด้วยคำที่ระบุ คือ "program" จะได้ ด็อกคิวเมนต์ 2 รายการที่มีหัวเรื่องที่เกี่ยวกับคำว่า "program" คือ program development และ web programming