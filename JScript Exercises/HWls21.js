let wheight1 = 78
let height1 = 169
let wheight2 = 92
let height2 = 195
let markHigherBMI

BMI1 = wheight1 / height1**2
BMI2 = wheight2 / height2**2

if (BMI1>BMI2)
{
    markHigherBMI = true;
}
else markHigherBMI = false;

if (markHigherBMI == true){
    console.log('Vadim has higher BMI');
}
else console.log('Alex has a higher BMI');

