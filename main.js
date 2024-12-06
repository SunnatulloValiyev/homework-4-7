// Boshlang‘ich darajadagi masalalar

// 1-misol

// Berilgan massivdagi barcha elementlarni konsolga chiqaring.

// let element = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let i = element; i <= element; i++){
//     console.log(i);
// }

// ===================

// 2-misol

// Massiv elementlarining yig‘indisini hisoblang.

// let total = [10, 10, 10, 10, 10]

// let counter = 0;

// for (let i = 0; i < total.length; i++){
//     counter += total[i]
// }
// console.log(counter);

// ===================

// 3-misol

// Massivdagi eng katta elementni toping.

// let max_num = [10, 220, 230, 430, 50];

// let num = max_num[0];

// for (let i = 0; i < max_num.length; i++){
//     if (max_num[i] > num) {
//         num = max_num[i];
//     }
// }
// console.log(num);

// ===================

// 4-misol

// Massivdagi eng kichik elementni toping.

// let min_num = [234, 45, 76, 54, 12]
// let num = min_num[0]

// for (let i = 0; i < min_num.length; i++){
//     if (min_num[i] < num) {
//         num = min_num[i]
//     }
// }
// console.log(num);

// ===================

// 5-misol

// Massivdagi barcha juft sonlarni konsolga chiqaring.

// let couple = [12, 3, 5, 7, 6, 8]

// for (let i = 0; i < couple.length; i++){
//     if (couple[i] % 2 == 0) {
//         console.log(couple[i]);
//     }
// }

// ===================

// 6-misol

// Massivdagi barcha toq sonlarni konsolga chiqaring.

// let toq_num = [34, 5, 7, 9, 5, 6]

// for (let i = 0; i < toq_num.length; i++){
//     if (toq_num[i] % 2 == 1) {
//         console.log(toq_num[i]);
//     }
// }

// ===================

// 7-misol

// Massivdagi manfiy sonlar sonini hisoblang.

// let manfiy = [-2, -4, 2, 5, -6]

// let sum = 0;

// for (let i = 0; i < manfiy.length; i++){
//     if (manfiy[i] < 0) {
//         sum += manfiy[i]
//     }
// }
// console.log(sum);

// ===================

// 8-misol

// Massivdagi musbat sonlar sonini hisoblang.

// let musbat = [-2, 3, 4, -5, 5]

// let sum = 0;

// for (let i = 0; i < musbat.length; i++){
//     if (musbat[i] > 0) {
//         sum += musbat[i]
//     }
// }
// console.log(sum);

// ===================

// 9-misol

// Massivdagi elementlarning o‘rtacha qiymatini toping.

// let num = [12, 34, 67, 34, 98, 24]

// let sum = 0;

// for (let i = 0; i < num.length; i++){
//     sum += num[i];
// }
// console.log(Math.trunc(sum / num.length));

// ===================

// 10-misol

// Massivdagi barcha elementlarni teskari tartibda joylashtiring (massivni o‘zgartirmasdan).

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let i = 0; i < num.length; i++){
// }

// console.log(num.reverse());   

// ===================

// 11-misol

// Massivning teskari nusxasini yarating.   

// let num = [10, 20, 30, 40, 50, 60]

// for (let i = 0; i < num.length; i++){
// }
// console.log(num);
// console.log(num.reverse());

// ===================

// 12-misol

// Massivning har bir elementini 2 ga ko‘paytiring va natijani yangi massivga saqlang.


// let num = [10, 20, 30, 40, 50]
// let num2 = [];

// for (let i = 0; i < num.length; i++){
//     num2.push(num[i]*2)
// }

// console.log(num2);

// ===================

// 13-misol

// Massiv elementlari orasidan 0 qiymatlari sonini hisoblang.

// let num = [22, 0, 20, 20, 0, 44, 0, 40]
// let counter = 0;

// for (let i = 0; i < num.length; i++){
//     if (num[i] == 0) {
//         counter++;
//     }
// }
// console.log(`${counter} - ta 0 bor`);

// ===================

// 14-misol

// Massiv elementlari ichida 5 ga karrali bo‘lgan sonlarni konsolga chiqaring.

// let num = [20, 33, 10, 44, 63, 5]

// for (let i = 0; i < num.length; i++){
//     if (num[i] % 5 == 0) {
//         console.log(num[i]);
//     }
// }

// ===================

// 15-misol

// Massivni tartiblang (o‘sish bo‘yicha).

// let num = [2, 4, 6, 3, 5, 10, 7, 8, 1, 9]
// console.log(num.sort((a,b)=> a-b));

// ===================

// 16-misol

// Massivni tartiblang (kamayish bo‘yicha).

// let num = [2, 4, 6, 3, 5, 10, 7, 8, 1, 9]
// console.log(num.sort((a,b)=> b-a));

// ===================

// 17-misol

// Massivning har bir elementiga 3 qo‘shing va natijani yangi massivga saqlang.

// let num = [10, 20, 30, 40, 50]

// let num2 = []

// for (let i = 0; i < num.length; i++){
//     num2.push(num[i]+3)
// }
// console.log(num2);

// ===================

// 18-misol

// Massivdagi barcha musbat sonlarni alohida massivga ajrating.

// let num = [12, -23, 34, -45, 56, -67]

// let arr = []

// for (let i = 0; i < num.length; i++){
//     if (num[i] > 0) {
//         arr.push(num[i])
//     }
// }
// console.log(arr);

// ===================

// 19-misol

// Massivdagi barcha manfiy sonlarni alohida massivga ajrating.

// let num = [12, -23, 34, -45, 56, -67]

// let arr = [];

// for (let i = 0; i < num.length; i++){
//     if (num[i] < 0) {
//         arr.push(num[i])
//     }
// }
// console.log(arr);

// ===================

// 20-misol

// Massivning faqat toq indeksdagi elementlarini konsolga chiqaring.

// let num = [12, 3, 4, 6, 9, 4, 35, 543]

// for (let i = 0; i < num.length; i++){
//     if (num[i] % 2 == 1) {
//         console.log(num[i]);
//     }
// }

// ===================

// 21-misol

// Massivni ikkiga bo‘ling: birinchi va ikkinchi yarmalarini alohida massivlarga ajrating.

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let arr2 = [];
let massiv = [];

if (arr.length % 2 == 0){
    for(let i = 0; i < arr.length; i++){
        arr2.push(arr[i])
    }

    for(let i = arr.length/2; i < arr.length; i++){
        massiv.push(arr[i])
    }
}

console.log(arr2);
console.log(massiv);



// ===================

// 22-misol

// for (let i = 0; i < arr.length; i++){
//     if (i < arr3) {
//         arr2.push(arr[i])
//     }
//     else {
//         massiv.push(arr[i])
//     }
// }
// console.log(arr2);
// console.log(massiv);

// ===================

// 23-misol

// Massivdagi barcha elementlarni 0 ga almashtiring.

// let arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = 0;
// }
// console.log(arr);

// ===================

// 24-misol

// Massivning birinchi elementini oxiriga o‘tkazing.

// let arr = [1, 23, 323, 23];
// let first = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = first;
// console.log(arr);

// ===================

// 25-misol

// Massivning oxirgi elementini boshiga o‘tkazing.

// let arr = [7, 4, 1, 6];
// let last = arr[arr.length - 1];
// let i = arr.length - 1;
// while (i > 0) {
//     arr[i] = arr[i - 1];
//     i--;
// }
// arr[0] = last;
// console.log(arr);

// ===================

// 26-misol

// Massivdan har ikkinchi elementni o‘chiring.

// let arr = [1, 2, 3, 4, 5, 6];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         result.push(arr[i]);
//     }
// }
// console.log(result);

// ===================

// 27-misol

// Massivdagi faqat manfiy elementlarni 0 bilan almashtiring.

// let arr = [-1, 2, -3, 4];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         arr[i] = 0;
//     }
// }
// console.log(arr);

// ===================

// 28-misol

// Massivdagi har bir elementni uning indeksiga ko‘paytiring va natijani yangi massivga saqlang.

// let arr = [1, 2, 3, 4];
// let newArr = [];
// let i = 0;
// while (i < arr.length) {
//     newArr.push(arr[i] * i);
//     i++;
// }
// console.log(newArr);

// ===================

// 29-misol

// Massivdan 3 ga bo‘linmaydigan barcha elementlarni o‘chiring.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         result.push(arr[i]);
//     }
// }
// console.log(result);

// ===================

// 30-misol

// Massivdagi barcha bir xil elementlarni o‘chiring (bir marta qolishi kerak).

// ishlolmadim bu misolni domla

// ===================

// 31-misol

// Massiv elementlari orasidan faqat juft indeksdagi sonlarni yangi massivga saqlang.

// let arr = [3, 4, 6, 8, 5];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// ===================

// 32-misol

// Massivdan 2 ga karrali sonlarni olib tashlang.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         result.push(arr[i]);
//     }
// }
// console.log(result);

// ===================

// 33-misol

// Massivning faqat o‘rtadagi elementlarini olib tashlang (elementlar soni juft bo‘lsa, o‘rtadagi ikkitasini olib tashlang).

// bu misolga ham qiynaldim domla juma kuni tushunib olaman

// ===================

// 34-misol

// Massivning birinchi va oxirgi elementlarini almashtiring.

// let arr = [1, 2, 3, 4, 5];
// let temp = arr[0];
// arr[0] = arr[arr.length - 1];
// arr[arr.length - 1] = temp;
// console.log(arr);

// ===================

// 35-misol

// Massivni boshqa massiv bilan birlashtiring.

// let arr1 = [12, 56, 33];
// let arr2 = [678, 45, 23];
// let result = [];

// for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i]);
// }
// for (let i = 0; i < arr2.length; i++) {
//     result.push(arr2[i]);
// }
// console.log(result);

// ===================

// 36-misol

// Massivdagi barcha elementlarni 3 ga bo‘lingan holatda yangi massivga saqlang.

// let arr = [3, 6, 9, 12, 4, 8];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] / 3);
// }
// console.log(newArr);

// ===================

// 37-misol

// Massivdan manfiy sonlarni olib tashlang.

// let arr = [-1, 2, -3, 4, 5];
// let result = [];
// let i = 0;

// while (i < arr.length) {
//     if (arr[i] >= 0) {
//         result.push(arr[i]);
//     }
//     i++;
// }
// console.log(result);

// ===================

// 38-misol

// Massivdagi juft indeksdagi elementlarni 0 ga almashtiring.

// let arr = [10, 27, 30, 43, 50, 60];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         arr[i] = 0;
//     }
// }
// console.log(arr);

// ===================

// 40-misol

// Massivning o‘rta indeksiga yangi element qo‘shing.

// let arr = [1, 2, 4, 5];
// let Element = 3;
// let mid = Math.floor(arr.length / 2);

// arr.splice(mid, 0, Element);
// console.log(arr);

// ===================

// 41-misol

// Massivni ikkiga ajratib, ikkala yarmni teskari tartibda saqlang.

// let arr = [1, 2, 3, 4, 5, 6];
// let mid = Math.floor(arr.length / 2);
// let Half = [];
// let half = [];

// for (let i = 0; i < mid; i++) {
//     Half.unshift(arr[i]);
// }

// for (let i = mid; i < arr.length; i++) {
//     half.unshift(arr[i]);
// }

// let result = Half.concat(half);
// console.log(result);

// ===================

// 42-misol

// Massivni aylantiring (so‘nggi elementni boshiga qo‘ying).

// let arr = [1, 2, 3, 4];
// let last = arr[arr.length - 1];

// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }

// arr[0] = last;
// console.log(arr);

// ===================

// 43-misol

// Massivni aylantiring (birinchi elementni oxiriga qo‘ying).

// let arr = [1, 2, 3, 4];
// let first = arr[0];

// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }

// arr[arr.length - 1] = first;
// console.log(arr);

// ===================

// 44-misol

// Massivni barcha musbat va manfiy elementlarga ajratib, musbatlarini boshiga, manfiylarini oxiriga joylashtiring.

// let arr = [-1, 2, -3, 4, 5, -6];
// let pos = [];
// let neg = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//         pos.push(arr[i]);
//     } else {
//         neg.push(arr[i]);
//     }
// }

// let result = pos.concat(neg);
// console.log(result);

// ===================

// 45-misol

// Massivning eng kichik elementini o‘chiring.

// let arr = [4, 2, 3, 1, 5];
// let min = Math.min(...arr);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === min) {
//         arr.splice(i, 1);
//         break;
//     }
// }
// console.log(arr);

// ===================

// 46-misol

// Massivning eng katta elementini o‘chiring.

// let arr = [4, 2, 3, 1, 5];
// let max = Math.max(...arr);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === max) {
//         arr.splice(i, 1);
//         break;
//     }
// }
// console.log(arr);

// ===================

// 47-misol

// Massivdagi barcha sonlarni 2 ga karrali bo‘lgan sonlar bilan almashtiring.

// let arr = [1, 3, 5, 6, 8];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 2;
// }
// console.log(arr);

// ===================

// 48-misol

// Massivdan bir xil qiymatlarni olib tashlab, faqat noyob qiymatlarni qaytaring.

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let Arr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//         Arr.push(arr[i]);
//     }
// }
// console.log(Arr);

// ===================

// 50-misol

// Massivni aylantirish (rotation) orqali 3 marta oldinga suring.

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < 3; i++) {
//     let first = arr.shift();
//     arr.push(first);
// }
// console.log(arr);
