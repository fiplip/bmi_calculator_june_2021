document.addEventListener("DOMContentLoaded", () => {
    const weightInput = document.getElementById('weight')
    const heightInput = document.getElementById('height')
    const calculateButton = document.getElementById('calculate')
    const messageDisplayNode = document.getElementById('message')

    calculateButton.addEventListener('click', () =>{
        const weight = parseInt(weightInput.value)
        const height = parseFloat(heightInput.value)
        const bmi = BMICalculator.calculateMetric(height, weight)
        messageDisplayNode.innerText = `Your BMI Value is ${bmi.bmiValue.toFixed(2)}, and you are ${bmi.classification.message}`
        messageDisplayNode.style.color = bmi.classification.color
    })
})