
function myFunction(){
    let height = parseInt(document.getElementById("height").value);

    let weight = parseInt(document.getElementById("weight").value)

    let result = document.getElementById("result")
  
    if (height === "" || isNaN(height)) result.innerHTML = "Please provide a valid height.";
    
    else if (weight === "" || isNaN(weight)) result.innerHTML = "Please provide a valid weight.";

    else{
        let bmi = ((weight / (height)**2)*703);

        if (bmi < 18.6) result.innerHTML = `You are Under Weight : <span>${bmi}</span>`;

        else if (bmi >= 18.6 && bmi < 24.9) result.innerHTML = `You are of a normal weight : <span>${bmi}</span>`;

        else result.innerHTML = `You are Over Weight : <span>${bmi}</span>`;
    }
}


function buttonClear(){
   let clear = document.getElementById('myInput').value = ''

}