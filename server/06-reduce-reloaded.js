const items = [1, 1, 2, 3, 4, 4, 5, 2];

const answer = items.reduce((object, item) => {
    if(!object[item]) {
        object[item] = 1;
    } else {
        object[item] =  object[item] + 1;
    }
    return object;
}, {});

console.log(answer);

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const answer2 = data.map(item =>
     item.level).reduce((object, item)=>{
        if(!object[item]) {
            object[item] = 1;
        } else {
            object[item] = object[item] + 1
        }
        return object;
     }, {});
     console.log(answer2);


     //counting the quantity of numbers between a rank
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const challenge = numbers.reduce((object, item)=>{
        if(item <= 5) {
            object['1-5'] += 1;
        } else if(item <= 8) {
            object['6-8'] += 1;
        }else {
            object['9-10'] += 1
        }
        return object;
     }, {'1-5':0, '6-8':0, '9-10':0,});
     console.log(challenge);

