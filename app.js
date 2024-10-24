const button = document.getElementById('generate-color-btn');

const generateRandomNumber = (maxNumber) =>{
    return Math.floor(
        Math.random()* (maxNumber +1)
    )

}


button.addEventListener('click',() =>{
    const randomNumber = generateRandomNumber(255);
    const randomNumber2 = generateRandomNumber(255);
    const randomNumber3 = generateRandomNumber(255);
    document.body.style.backgroundColor = `rgb(${randomNumber}, ${randomNumber2}, ${randomNumber3})`;
})


// const colors =['red','blue','yellow','green','purple','pink','orange']

// button.addEventListener('click', () => {
// //   console.log('Tıkladın');
// //   document.body.style.backgroundColor = colors[6]
// const randomNumber= Math.floor(
//     Math.random()*256
// )
// console.log(randomNumber,randomNumber2,randomNumber3);
// // document.body.style.backgroundColor = colors[randomNumber]

// });
