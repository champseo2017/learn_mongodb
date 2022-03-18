/* 
การสืบค้นด็อกคิวเมนต์ตามชนิดข้อมูล
MongoDB มีตัวดำเนินการ $type เข้ามาช่วยสืบค้นด็อกคิวเมนต์ที่ฟิลด์มีชนิดข้อมูลตรงตามที่ระบุ

รูปแบบ
{field: { $type: [<BSON type1>, <BSON type2>, ...] }}

Data
{
    name: "nida",
    phone: "789456123",
},
{
    name: "siwa",
    phone: ["081455665456"]
}

จากนั้นให้เราสืบค้นด็อกคิวเมนต์ที่มีเบอร์โทรหลายเบอร์หรือฟิลด์ phone ที่มีค่าเป็นชนิดข้อมูล array

*/
// insert data
db.tphone.insertMany([
  { name: "nida", phone: "456123789" },
  { name: "siwa", phone: ["123456789", "456123789"] },
]);
db.tphone.find({ phone: { $type: 4 } });
// นามแฝง array
db.tphone.find({ phone: { $type: "array" } });
