//is exactly like using .map() and .flat together
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };
  
  let startDateArray = [];
   for (elements in calendars) {
    let items = calendars[elements];
    for(dates in items) {    
     let array = calendars[elements][dates];
        startDateArray.push(array.startDate)
    }
    console.log(startDateArray);
    }
   
    const answer2 = Object.values(calendars).flatMap(item => {
        return item.map(date => date.startDate);
    });
    console.log(answer2)