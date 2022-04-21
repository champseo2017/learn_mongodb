/* 
ประเภทของอินเด็กซ์ใน MongoDB

MongoDB
จัดให้มีอินเด็กซ์ไว้หลายประเภทที่แตกต่างกันเพื่อสนับสนุนเฉพาะชนิดข้อมูลและการสืบค้นแบบ
ต่างๆ

*/

/* 

อินเด็กซ์ที่ไม่ซ้ำกัน (Unique Indexes)
ฟิลด์ที่จัดทำอินเด็กซ์จะไม่จัดเก็บค่าที่ซ้ำ

รูปแบบ
db.collection.createIndex(<key: index type>, { unique: true })


*/

// ตัวอย่างบนฟิลด์เดียว ต้องการกำหนดคุณสมบัติอินเด็กซ์ที่ไม่ซ้ำกันบนฟิลด์ name ของ
// คอลเล็กชัน customer
db.customer.createIndex({ name: 1 }, { unique: true });

// อินเด็กซ์ที่ไม่ซ้ำกันให้กับอินเด็กซ์ผสม {name: 1, age: -1}
db.customer.createIndex(
  {
    name: 1,
    age: -1,
  },
  {
    unique: true,
  }
);
