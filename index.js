/* 
ประเภทของอินเด็กซ์ใน MongoDB

MongoDB
จัดให้มีอินเด็กซ์ไว้หลายประเภทที่แตกต่างกันเพื่อสนับสนุนเฉพาะชนิดข้อมูลและการสืบค้นแบบ
ต่างๆ

*/

/* 
อินเด็กซ์พื้นที่ภูมิศาสตร์ (Geospatial Index)
เราสามารถจัดเก็บข้อมูลพิกัดของพื้นที่ทางภูมิศาสตร์บนโลกในรูปออบเจ็กต์ GeoJson

ค่าลองจิจุดที่อยู่ระหว่าง -180 ถึง 180 และ ละติจูดที่อยู่ระหว่าง -90 ถึง 90 โดยจัดเก็บค่าในออบเจ็กต์ GeoJSON

รูปแบบ
 - <field> : {
   type: <GeoJSON type>,
   coordinates: <coordinates>
 }

*/

db.places.insert({
  name: "sira",
  location: {
    type: "Point",
    coordinates: [100.5469319, 13.7925979]
  },
  category: "personal"
});

db.places.insert({
  name: "B2S",
  location: {
    type: "Point",
    coordinates: [100.5820991, 13.7209218]
  },
  category: "shop"
});

db.places.insert({
  name: "se-ed",
  location: {
    type: "Point",
    coordinates: [100.5973672, 13.7047682]
  },
  category: "shop"
});