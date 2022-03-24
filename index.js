/* 

การรวมข้อมูล Aggregation

เมธอดการรวมข้อมูลของไปป์ไลน์
- ใช้เมธอด db.collection.aggregate()
รูปแบบ
db.collection.aggregate([ {<stage>}, ... ])

สเตจ (Stage)
สเตจการทำงานที่ใช้บ่อย

$match กลั่นกรองเอาเฉพาะด็อกคิวเมนต์ที่ตรงตามเงื่อนไขที่ระบุ
$group จัดกลุ่มด็อกคิวเมนต์และสามารถคำนวณค่าเก็บไว้ในเอาต์พุต
$project ส่งผ่านด็อกคิวเมนต์โดยเลือกเอาเฉพาะฟิลด์ที่ระบุ
$sort จัดเรียงด็อกคิวเมนต์ที่ได้รับเข้ามาทั้งหมด
$skip ข้ามด็อกคิวเมนต์ตามจำนวนที่ระบุและส่งที่เหลือออกไป
$limit จำกัดด็อกคิวเมนต์ที่ส่งออกไปตามจำนวนที่ระบุ
$unwind แยกสมาชิกในฟิลด์อาร์เรย์จากอินพุตออกเป็นด็อกคิวเมนต์
$count นับจำนวนด็อกคิวเมนต์ทั้งหมดที่รับเข้ามา
$lookup เรียกดูข้อมูลจากด๊อกคิวเมนต์ที่อยู่คนละคอลเล็กชันกัน


- การจัดกลุ่มข้อมูลด้วย $group
เป็นการรวมกลุ่มด็อกคิวเมนต์ที่ข้อมูลเหมือนกันไว้ในกลุ่มเดียวกัน โดยมีฟิลด์ _id เก็บรายการของข้อมูลในแต่ละกลุ่มที่ไม่ซ้ำกัน
และสามารถเพิ่มฟิลด์ที่ใช้เก็บผลลัพธ์การคำนวณของข้อมูลในแต่ละกลุ่มตามนิพจน์ที่กำหนดไว้ เช่น ผลรวม จำนวน ค่าสูงสุด ค่าต่ำสุด และ ค่าเฉลี่ย

รูปแบบ
{
  $group: 
        {
          _id: <expression>, // Group By Expression
          <field> : { <accumulator1> : <expression1> },
        }
}

- _id จำเป็นต้องมี ใช้กำหนดว่าต้องการแบ่งกลุ่มตามกลุ่มของฟิลด์อะไร หรือหากไม่ต้องการให้กำหนดค่า null

- field สร้างฟิลด์จัดเก็บข้อมูลการคำนวณค่าในกลุ่มด้วยนิพจน์ที่กำหนด เช่น การหาจำนวน, ผลรวม

นิพจน์เพื่อคำนวณข้อมูลในกลุ่ม
$sum หาผลลรวมด็อกคิวเมนต์ภายในกลุ่ม
$avg หาค่าเฉลี่ยจากด็อกคิวเมนต์ภายในกลุ่ม
$min หาค่าต่ำสุดจากด็อกคิวเมนต์ภายในกลุ่ม
$max หาค่าสูงสุดจากด็อกคิวเมนต์ภายในกลุ่ม
$first หาค่าลำดับแรกจากด็อกคิวเมนต์ภายในกลุ่ม
$last หาค่าลำดับสุดท้ายจากด็อกคิวเมนต์ภายในกลุ่ม
$push แทรกค่าไปยังอาร์เรย์ในด็อกคิวเมนต์ผลลัพธ์
$addToSet แทรกค่าไปยังอาร์เรย์ในด็อกคิวเมนต์ผลลัพธ์แต่จะไม่สร้างซ้ำ


*/

// ตัวอย่าง $min หายอดต่ำสุดของ stock แต่ละหมวด
db.stock.aggregate([
  {
    $group: {
      _id: "$name",
      Min: {
        $min: "$stock"
      }
    }
  }
])


