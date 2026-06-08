// const API_URL = "http://127.0.0.1:8000/predict";

// async function predict() {

//     const data = {
//         age: parseInt(document.getElementById("age").value),
//         weight: parseFloat(document.getElementById("weight").value),
//         height: parseFloat(document.getElementById("height").value),
//         income_lpa: parseFloat(document.getElementById("income").value),
//         smoker: document.getElementById("smoker").value === "true",
//         city: document.getElementById("city").value,
//         occupation: document.getElementById("occupation").value
//     };

//     try {

//         const response = await fetch(API_URL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         });

//         console.log(response);

//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const result = await response.json();

//         document.getElementById("result").innerHTML =
//             `Predicted Category: <strong>${result.predicted_category}</strong>`;

//     }
//     catch (error) {

//         console.error(error);

//         document.getElementById("result").innerHTML =
//             `Error: ${error.message}`;
//     }
// }

const API_URL = "http://127.0.0.1:8000/predict";

async function predict() {

    const resultBox = document.getElementById("result");

    resultBox.innerHTML =
    `
        <div class="loader"></div>
    `;

    const data = {
        age: parseInt(document.getElementById("age").value),
        weight: parseFloat(document.getElementById("weight").value),
        height: parseFloat(document.getElementById("height").value),
        income_lpa: parseFloat(document.getElementById("income").value),
        smoker: document.getElementById("smoker").value === "true",
        city: document.getElementById("city").value,
        occupation: document.getElementById("occupation").value
    };

    try {

        const response = await fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        }

        const result = await response.json();

        resultBox.innerHTML = `
        <div class="result-card">
            <h2>Prediction Result</h2>
            <br>
            <h1>${result.predicted_category}</h1>
        </div>
        `;

    } catch(error){

        resultBox.innerHTML = `
        <div class="result-card">
            <h2>Error</h2>
            <p>${error.message}</p>
        </div>
        `;
    }
}

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});