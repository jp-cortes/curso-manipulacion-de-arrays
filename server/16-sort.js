const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);//[ 'Dec', 'Feb', 'Jan', 'March' ]
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a);
console.log(numbers);//[ 100000, 30, 21, 4, 1 ]
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);//['adieu','banana','café','communiqué',éclair','premier','réservé']
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date(2022, 07, 10,),
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date(2022, 04, 10,),
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date(2022, 05, 10,),
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date(2022, 06, 10,),
    },
  ];
//   orders.sort((a,b) => b.total - a.total);
  orders.sort((a,b) => a.date - b.date);
  console.log(orders);