/* 
การอัปเดตด็อกคิวเมนต์ (Update)
- อัปเดตหลายด็อกคิวเมนต์ในครั้งเดียว
รูปแบบ 
db.collection_name.updateMany(filter, Update, Options)
*/
db.product.updateMany({ cat: "office" }, { $set: { cat: "msoffice" } });

// เมื่อเรียกดูด็อกคิวเมนต์ด้วยเมธอด find() จะเห็นค่าในฟิลด์ cat เปลี่ยนใหม่
// ฟิลด์ cat ในด็อกคิวเมนต์ที่เลือกทั้งหมดเปลี่ยนค่าเป็น msOffice