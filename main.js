const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseFloat(document.getElementById('height').value)/100.0;
    const weight = parseFloat(document.getElementById('weight').value);
    const results = document.getElementById('results');
    if(height == '' || height <0 || isNaN(height)){
        results.innerHTML = "Please enter a valid height";
        results.style.color = 'orange';
    }
    else if(weight == '' || weight <0 || isNaN(weight)){
        results.innerHTML = "Please enter a valid weight";
        results.style.color = 'orange';
    }
    else{
        const bmi = (weight/(height*height)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}`;
        results.style.color = 'green';
    }
})