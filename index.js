/* 
ประเภทของอินเด็กซ์ใน MongoDB

MongoDB
จัดให้มีอินเด็กซ์ไว้หลายประเภทที่แตกต่างกันเพื่อสนับสนุนเฉพาะชนิดข้อมูลและการสืบค้นแบบ
ต่างๆ

*/

/* 
อินเด็กซ์หลายคีย์ (Multikey Index)

MongoDB จะสร้างอินเด็กซ์ให้กับสมาชิกของอาร์เรย์ และ อินเด็กซ์หลายคีีย์จะรองรับการสืบค้นด้วยฟิลด์อาร์เรย์ได้อย่างมีประสิทธิภาพ อินเด็กซ์หลายคีย์จะถูกสร้างโดยอัตโนมัติถ้าฟิลด์ที่ใช้สร้างอินเด็กซ์อยู่ในอาร์เรย์

{
  shop: "mqr",
  product: [
    { name: "word", qty: 20 },
    { name: "excel", qty: 30 }
  ]
}
(Index{ "product.qty": 1 })
*/

// เริ่มต้นเพิ่มข้อมูลสินค้า
db.ship.insertMany([
  {
    shop: "mqr",
    product: [
      { name: "word", qty: 20 },
      { name: "excel", qty: 30 }
    ],
  },
  {
    shop: "txy",
    product: [
      { name: "access", qty: 15 },
      { name: "visio", qty: 20 }
    ],
  },
  {
    shop: "naq",
    product: [
      { name: "PHP", qty: 10 },
      { name: "HTML", qty: 15 }
    ],
  },
]);

// สร้างอินเด็กซ์หลายคีย์ { "product.qty" : 1 }
db.ship.createIndex({ "product.qty": 1 })

// เข้าไปดูรายการอินเด็กซ์ที่สร้างใหม่ด้วยเมธอด getIndexes() จะเห็นอินเด็กซ์หลายคีย์ { "product.qty" : 1 }

db.ship.getIndexes()

// ใช้ประโยชน์ของอินเด็กซ์หลายคีย์ ด้วยเมธอด find() พร้อมกับเรียงลำดับ "product.qty" 
// จากน้อยไปหามาก
db.ship.find().sort({ "product.qty": 1 })