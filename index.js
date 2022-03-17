/* 
$nin ไม่มีค่าอยู่ในอาร์เรย์ รวมทั้งไม่มีฟิลด์นั้นรวมอยู่ด้วย 
เช่น เราจะสืบค้นด็อกคิวเมนต์ที่ฟิลด์ field มีค่าไม่ตรงกับค่าใดค่าหนึ่งใน ["programming", "hardware"] รวมทั้งไม่มีฟิลด์ field

data
{
    "_id": "key",
    "name": "test",
    "age": 46,
    "field": ["programming", "hardware"]
}

*/
db.writer.find({ field: { $nin: ["programming", "hardware"] } });
