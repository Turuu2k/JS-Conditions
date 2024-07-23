// 1. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
// a=85 b=75 c=96 d=69
// 80-аас их тоонуудын нийлбэрийг: 181

// let a = 79;
// let b = 86;
// let c = 96;
// let d = 86;
// let sum = 0;

// if (a > 80) sum += a;
// if (b > 80) sum += b;
// if (c > 80) sum += c;
// if (d > 80) sum += d;
// console.log(sum)

// 2. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:
// a=3 b=7 c=2 d=4
// 5-аас бага тоонуудын үржвэр: 24

// let a = 3;
// let b = 7;
// let c = 2;
// let d = 4;
// let multi = 1;

// if (a < 5) multi *= a;
// if (b < 5) multi *= b;
// if (c < 5) multi *= c;
// if (d < 5) multi *= d;
// console.log(multi)

// 3.if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул. Харьцуулалт дээр үндэслэн үр дүнг консол руу хөгшин (би эсвэл та) гэж тэмдэглэнэ үү. Насыг оруулахын тулд prompt("Насаа оруулна уу:")-г ашиглана уу.

// let myAge = 17;
// let yourAge = prompt("Насаа оруулна уу:");

// if (myAge > yourAge){
//     console.log('bi hugshin');
// }else if (myAge < yourAge){
//     console.log('ta hugshin');
// }

// 4. Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай.

// let day = 2;
// if (day == 1 || day == 2){
//     console.log("today is workday")
// }else if (day == 3 || day == 4){
//     console.log("today is workday")
// }else if (day == 5){
//     console.log("today is workday")
// }else if (day == 6 || day == 7){
//     console.log("today is weekend")
// }

// 5. Өгөгдсөн жилийг өндөр жил мөн эсэхийг шалгаад хэрвээ мөн бол өндөр жил мөн үгүй бол үгүй гэж хариулна уу.
// Өндөр жил гэдэг нь 4 жилд нэг удаа болдог бөгөөд тэр нь 2-р сар 29 хоногтой үед тохиолддог. Энэ нь 4-д хуваагдаж байвал мөн, 100 хуваагдаж байвал өндөр жил биш. Харин 400 жилд бүтнээрээ хуваагдаж байвал мөн.

// let leapYear = 2028;
// if (leapYear % 4 === 0) {
//   console.log("a leap year");
// } else if (leapYear % 100) {
//   console.log("not a leap year");
// } else if (leapYear % 400 === 0) {
//   console.log("a leap year");
// }

// 6. Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
// 6.1 Бат - 67 оноо, Болд - 59 оноо авчээ.
// 6.2 Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
//   a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
//   b. Хэрвээ оноо 60 - 70 (70 орохгүй) хооронд байвал - Хангалттай
//   c. Хэрвээ оноо 70 - 80 (80 орохгүй) хооронд байвал - Дунд
//   d. Хэрвээ оноо 80 - 90 (90 орохгүй) хооронд байвал - Сайн
//   e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм байна.
// 6.3 Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
// НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.

// const namae = 'Bat';
// const batPoint = 100;

// if (batPoint < 60){
//     console.log(namae +" - "+ batPoint +" - "+ "Mash muu")
// }else if (60 <= batPoint && batPoint <= 69){
//     console.log(namae +" - "+ batPoint +" - "+ "Hangalttai")
// }else if (70 <= batPoint && batPoint <= 79){
//     console.log(namae +" - "+ batPoint +" - "+ "Dund")
// }else if (80 <= batPoint && batPoint <= 89){
//     console.log(namae +" - "+ batPoint +" - "+ "Sain")
// }else if (90 <= batPoint && batPoint <= 100){
//     console.log(namae +" - "+ batPoint +" - "+ "Mash sain")
// }

// const namae2 = 'Bold';
// const boldPoint = 59;

// if (boldPoint < 60){
//     console.log(namae2 +" - "+ boldPoint +" - "+ "Mash muu")
// }else if (60 <= boldPoint && boldPoint <= 69){
//     console.log(namae2 +" - "+ boldPoint +" - "+ "Hangalttai")
// }else if (70 <= boldPoint && boldPoint <= 79){
//     console.log(namae2 +" - "+ boldPoint +" - "+ "Dund")
// }else if (80 <= boldPoint && boldPoint <= 89){
//     console.log(namae2 +" - "+ boldPoint +" - "+ "Sain")
// }else if (90 <= boldPoint && boldPoint <= 100){
//     console.log(namae2 +" - "+ boldPoint +" - "+ "Mash sain")
// }

// 7. Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
// 7.1 Багийн дундаж нөгөө багийхаас их бол тэр баг түрүүлсэн гэж хэвлэнэ үү. Багуудын оноо тэнцсэн тохиолдолд багууд тэнцсэн гэж хэвлэнэ үү.
// Энэ дүрэм нь зөвхөн багийн дундаж 100 аас багагүй тохиолдолд энэхүү дүрэм хэрэгжэхийг анхаарна уу. Хэрвээ 2 баг 2 уулаа 100 аас бага тохиолдолд ялагч байхгүй. Тус бүрийн нөхцөлийг оноог өөрчилж туршиж үзээрэй.

// let a = 111,
//   b = 111,
//   c = 110;
// let aTeam = a + b + c;
// let aTeamAvaerage = aTeam / 3;

// let x = 100,
//   y = 111,
//   z = 110;
// let bTeam = x + y + z;
// let bTeamAvaerage = bTeam / 3;

// if (bTeamAvaerage < 100 && aTeamAvaerage < 100){
//   console.log("No winner");
// } else if (aTeam > bTeam) {
//   console.log("A Team win");
// } else if (aTeam < bTeam) {
//   console.log("B Team win");
// } else{
//   console.log("Draw");
// }

// 8.Write conditional expressions to satisfy the following safety rules:
// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".

// let crewStatus = true;
// let computerStatusCode = 400;
// let shuttleSpeed = 17500;

// if (crewStatus == true){
//     console.log("Crew Ready");
// }else {
//     console.log("Crew Not Ready")
// }

// if (computerStatusCode == 200){
//     console.log("Please stand by. Computer is rebooting.");
// }else if (computerStatusCode == 400){
//     console.log("Success! Computer online.");
// }else {
//     console.log("ALERT: Computer offline!");
// }

// if (shuttleSpeed >= 17500){
//     console.log("ALERT: Escape velocity reached!");
// }else if (shuttleSpeed < 8000){
//     console.log("ALERT: Cannot maintain orbit!")
// }else {
//     console.log("Stable speed")
// }

// 9.Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.

// Sample numbers : 3, -7, 2
// Output : The sign is -

// let a = 3, b = -1, c = 2;
// let sample = a * b * c;

// if (sample > 0){
//     console.log("The sign is +")
// }else {
//     console.log("The sign is -")
// }