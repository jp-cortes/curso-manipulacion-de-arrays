//some go all the array looking for at least one match returns a boolean

const numbers = [1, 2, 3, 4];
let answer = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 === 0){
        answer = true;
        break;
    }
}
console.log('for loop',answer);
const answer2 = numbers.some((item) => item % 2 === 0);
console.log('some', answer2);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: false,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: false,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
      customerName: "Nicolas",
      total: 2322,
      delivered: false,
    },
  ];
  const answer3 = orders.some((item) => item.delivered);//asig by default the value of true
console.log('some example 2', answer3);

const dates = [
    {
      startDate: new Date(2021, 1, 1, 8),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },

  ];
  
  const newAppointment = {
    startDate: new Date(2021, 1, 1, 14),
    endDate: new Date(2021, 1, 1, 14, 30),
  };

const areIntervalsOverapping = require('date-fns/areIntervalsOverlapping');
const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverapping(
            { start: date.startDate, end: date.endDate},
            { start: newDate.startDate, end: newDate.endDate},
        )
    })
}
console.log('isOverlap', isOverlap(newAppointment));