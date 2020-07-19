const basket = ['apples', 'oranges', 'grapes'];

//method1
for (let i = 0; i < basket.length; i++) { 
    console.log(basket[i]);
}

//method2
basket.forEach (item => console.log(item));

//method3: for of
for (item of basket) console.log(item);
for (item of 'basket') console.log(item);

//method4: for in obj// properties of an obj
//enumerating for object vs iterating for array/string
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};

for (item in detailedBasket) console.log(item);
for (item in basket) console.log(item);
for (item of basket) console.log(item);
