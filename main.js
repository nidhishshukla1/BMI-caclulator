const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = document.getElementById('height').value/100.0;
    const weight = document.getElementById('weight').value;
    const bmi = weight/(height*height);
    // console.log(bmi)
    const textNode = document.createTextNode(`Your BMI is ${bmi}`);
    // console.log(textNode)
    document.getElementById('results').appendChild(textNode)
})