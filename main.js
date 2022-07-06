// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

const tvTypes = inventory.map((tv) => {
  return tv.type
})

console.log(tvTypes)

const soldOut = inventory.filter((arr) => {
  if (arr.originalStock === arr.sold) {
    return true
  }
})

console.log(soldOut)

const hasAmbiLight = inventory.filter((arr) => {
  if (arr.options.ambiLight === true) {
    return true
  }
})

console.log(hasAmbiLight)

inventory.sort((a, b) => {
  return  a.price - b.price
})

console.log(inventory)

// OPDRACHT 2

const soldTvsContainer = document.getElementById('sold-tvs');
const boughtTvsContainer = document.getElementById('bought-tvs');
const toBeSoldTvsContainer = document.getElementById('to-be-sold-tvs');

const tvsSold = (arr) => {
  let outcome = 0;
  for (let i = 0; i < arr.length; i++) {
    outcome += arr[i].sold;
  } return outcome
}

const soldTvs = tvsSold(inventory);

const tvsBought = (arr) => {
  let outcome = 0;
  for (let i = 0; i < arr.length; i++) {
    outcome += arr[i].originalStock;
  } return outcome
}

const boughtTvs = tvsBought(inventory)

const toBeSold = () => {
  return boughtTvs - soldTvs
}

soldTvsContainer.textContent = `Amount sold tv's = ${soldTvs}`
boughtTvsContainer.textContent = `Amount bought tv's = ${boughtTvs}`
toBeSoldTvsContainer.textContent = `Amount tv's to be sold = ${toBeSold()}`

// OPDRACHT 3

const tvBrands = inventory.map((tv) => {
  return tv.brand
})

// console.log(tvBrands)

function createList (arr) {
  const tvBrandsContainer = document.getElementById('tv-brands-container');
  arr.map((tv) => {
    tvBrandsContainer.innerHTML += `<li>${tv.brand}</li>`
  })
}

createList(inventory)

// Opdracht 4
const tvContainer = document.getElementById('tv-container');
const tvPriceContainer = document.getElementById('tv-price');
const tvSizeContainer = document.getElementById('tv-screen-size');

// 4a
const tvBrandTypeName = (arr, index) => {
  tvContainer.textContent += `${arr[index].brand} ${arr[index].type} - ${arr[index].name}`;
}

// tvBrandTypeName(inventory, 1);

// 4b
const tvPrice = (arr, index) => {
  tvPriceContainer.textContent += `€${arr[index].price},-`
}

// tvPrice(inventory, 1);

// 4c

const screenSizes = (arr) => {
  let outcome = '';
  for (let i = 0; i < arr.length; i++) {
    const sizeInInch = arr[i];
    const sizeInCm = arr[i] * 2.54;
    outcome += `${sizeInInch} inch | In centimeters that is: ${sizeInCm} cm`
  } tvSizeContainer.textContent += outcome;
}

// screenSizes(inventory[1].availableSizes)


// 4d

function getTvOnScreen (arr, index) {
  tvBrandTypeName(arr, index);
  tvPrice(arr, index);
  screenSizes(arr[index].availableSizes)
}

getTvOnScreen(inventory, 5);



