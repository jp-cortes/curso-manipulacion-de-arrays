const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
  const myProducts = [];
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  const newMap = products.slice(1);
  //.slice() return a shallow copy of the array
  //can be a portion or  the complete array
  //may be  necessary include the position of the item .slice(1)
  //if the parenthesys is empty .slice() the array will not be modified
  console.log(newMap);

  const productIndex = products.findIndex(item => item.id === '🍔');
  if (productIndex !== -1) {
      myProducts.push(products[productIndex]);
      products.splice(productIndex, 1);
      //.splice() return an array removing and/or adding new elements 
      // .splice(position,quantity,) to remove
      // .splice(position,quantity, element) to add elements
  }
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  
  // Update
  
  const productsV2 = [
      { title: "Pizza", price: 121, id: "🍕" },
      { title: "Burger", price: 121, id: "🍔" },
      { title: "Hot cakes", price: 121, id: "🥞" },
    ];
  const update = {
      id: "🥞",
      changes: {
          price: 200,
          description: 'delicioso'
      }
  }
  const productIndexV2 = productsV2.map(item => {
    if(item.id === update.id) {
        return {
            ...item,
            ...update.changes,
        }
    }
        return {...item};
  });
//   productsV2[productIndexV2] = {
//       ...productsV2[productIndexV2],
//       ...update.changes,
//   };
  console.log(productIndexV2);
  //mutable methods
//   .push();
//   .unshift();
//   .pop();
//   .shift();
//   .splice();
//   .sort();

