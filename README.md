NodeJs BMI Calculator


Application Setup

Install the application using the follwing commnad
```
npm install
```

Then just start the server with

```
npm run start
```
Running Test cases

npm run test
Access the End point using the follwoing url

http://localhost:8080/bmi/calculate


PCF Deployment

point to correspnsing org and space

Starting app

cf push bmi-calculator

Stopping app

cf stop




**Sample Input:**

[
{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 },
{"Gender": "Male", "HeightCm": 161, "WeightKg": 85 },
{"Gender": "Male", "HeightCm": 180, "WeightKg": 77 },
{"Gender": "Female", "HeightCm": 166, "WeightKg": 62},
{"Gender": "Female", "HeightCm": 150, "WeightKg": 70},
{"Gender": "Female", "HeightCm": 167, "WeightKg": 82}
]

**Sample Output:**


{
"bmiOutput": {
"bmiInfo": [
{
"height": 171,
"weight": 96,
"gender": "Male",
"bmiCategory": "Moderately obese",
"healthRisk": "Medium risk"
},
{
"height": 161,
"weight": 85,
"gender": "Male",
"bmiCategory": "Moderately obese",
"healthRisk": "Medium risk"
},
{
"height": 180,
"weight": 77,
"gender": "Male",
"bmiCategory": "Normal weight",
"healthRisk": "Low risk"
},
{
"height": 166,
"weight": 62,
"gender": "Female",
"bmiCategory": "Normal weight",
"healthRisk": "Low risk"
},
{
"height": 150,
"weight": 70,
"gender": "Female",
"bmiCategory": "Moderately obese",
"healthRisk": "Medium risk"
},
{
"height": 167,
"weight": 82,
"gender": "Female",
"bmiCategory": "Overweight",
"healthRisk": "Enhanced risk"
}
],
"numberOfOWPersons": 1
}
}

