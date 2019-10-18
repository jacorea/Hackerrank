//constants
const productsTest = ['rice', 'sugar', 'wheat', 'cheese'];
const productPricesTest = [16.89,56.92,20.89,345.99];
const productSoldTest = ['rice', 'cheese'];
const soldPriceTest = [16.89, 400.89];

const priceCheck = (products, productPrices, productSold, soldPrice) => {
    //find index of product bought in productSold array inside products array
    //using that index determine the actualPrice of the item
    //determine the price of the item usind index from poductSold array as its the same as soldPrice array
    //Just need to check it there's a difference. If there is a difference increase counter

    let location = 0;
    let actualPrice = 0;
    let soldItemPrice = 0;
    let incorrectPriceCounter = 0;

    for(let i=0; i<productSold.length;i++) {
        location = products.indexOf(productSold[i]);
        actualPrice = productPrices[location];
        soldItemPrice = soldPrice[i];

        if( actualPrice !== soldItemPrice) {
            incorrectPriceCounter++;
        }
    }
    console.log(incorrectPriceCounter);
}

priceCheck(productsTest,productPricesTest,productSoldTest,soldPriceTest);

