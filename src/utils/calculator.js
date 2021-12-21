const canRetire = (calculationOptions, arr) => {

  const enoughMoneyToRetire = "You are currently saving enough money for retirement. Good Job!"
  const notEnoughMoneyToRetire = "You are not saving enough for retirement. Please try to add to your retirement account or increase your savings rate"
  const error = "Please update your inputs to have a retirement age > age"
  const startAge = parseInt(calculationOptions.startAge)
  const retirementAge = parseInt(calculationOptions.retirementAge)
  const yearsRetired = parseInt(calculationOptions.yearsRetired)
   

    //Recommendation styling
    const notEnoughMoneyStyle = {
      color: "white",
      backgroundColor: '#ff3400',
      padding: "10px",
      fontFamily: 'Montserrat',
      fontSize: "1.5rem",
      fontWeight: "bold",
      borderRadius: "10px",
      marginTop: "30px",
      border: "1px solid",
      textAlign: "center",
      textTransform: "uppercase",
    };
    const enoughMoneyStyle = {
      color: "white",
      padding: "10px",
      backgroundColor: '#38A3A5',
      fontFamily: 'Montserrat', 
      fontSize: "1.5rem",
      fontWeight: "bold",
      border: "1px solid",
      borderRadius: "10px",
      marginTop: "30px",
      textAlign: "center",
      textTransform: "uppercase"


    };
    const errorStyle = {
      color: "#000",
      padding: "10px",
      fontFamily: "Monaco",
      borderRadius: "10px",
      marginTop: "30px",
      border: "1px solid",
      textAlign: "center"
    };


  //#3BADEE blue #E37D03 orange

  if (retirementAge <= startAge) {
    return <p style={errorStyle}>{error}</p>
  } else if (retirementAge + yearsRetired >= arr[retirementAge + yearsRetired - startAge - 1].age && arr[retirementAge + yearsRetired - startAge - 1].endingSavings >= 0) {
    return <p style={enoughMoneyStyle}>{enoughMoneyToRetire}</p>
  } else {
    return <p style={notEnoughMoneyStyle}>{notEnoughMoneyToRetire}</p>
  }
  
}

const calculator = (calculationOptions) => {

  let startAge = parseFloat(calculationOptions.startAge)
  let income = parseFloat(calculationOptions.income)
  let spouseIncome = parseFloat(calculationOptions.spouseIncome)
  let amountSaved = parseFloat(calculationOptions.amountSaved)
  let retirementAge = parseFloat(calculationOptions.retirementAge)
  let yearsRetired = parseFloat(calculationOptions.yearsRetired)
  let savingsRate = parseFloat(calculationOptions.savingsRate)
  let inflation = parseFloat(calculationOptions.inflation)
  let preRoi = parseFloat(calculationOptions.preRoi)
  let postRoi = parseFloat(calculationOptions.postRoi)
  let incomeRetirementPercent = parseFloat(calculationOptions.incomeRetirementPercent)
  let salaryIncrease = parseFloat(calculationOptions.salaryIncrease)
  

  const finalSavingsArray = []
  let currentAge = startAge;
  const totalYears = retirementAge + yearsRetired;
  let isRetired = (currentAge <= retirementAge) ? false : true;
  let totalIncome = isRetired ? 0 : income + spouseIncome;
  let savingsBalance = amountSaved;
  let withdrawal = 0;

  for (let i = 0; i < totalYears - startAge; i++) {
    if (currentAge === retirementAge) {
      let accountSavings = postRoi / 100 * savingsBalance
      let totalSavings = accountSavings
      totalIncome = totalIncome / (1 + salaryIncrease / 100)
      totalIncome += inflation / 100 * totalIncome
      withdrawal = incomeRetirementPercent / 100 * totalIncome
      totalIncome = 0
      let totalBalance = savingsBalance + totalSavings - withdrawal
      let returnObject = {
        startingSavings: savingsBalance.toFixed(2),
        age: currentAge,
        income: totalIncome.toFixed(2),
        yearlySavings: accountSavings.toFixed(2),
        withdrawal: withdrawal.toFixed(2),
        endingSavings: totalBalance.toFixed(2)
      }

      finalSavingsArray.push(returnObject)
      savingsBalance = totalBalance
      withdrawal += (withdrawal * inflation / 100)
      currentAge += 1
    } else
    if (currentAge > retirementAge) {

      let accountSavings = postRoi / 100 * savingsBalance
      let totalSavings = accountSavings
      let totalBalance = savingsBalance + totalSavings - withdrawal
      let returnObject = {
        startingSavings: savingsBalance.toFixed(2),
        age: currentAge,
        income: totalIncome.toFixed(2),
        yearlySavings: accountSavings.toFixed(2),
        withdrawal: withdrawal.toFixed(2),
        endingSavings: totalBalance.toFixed(2)
      }

      finalSavingsArray.push(returnObject)
      if(totalBalance > 0 ) {
        withdrawal += (withdrawal * inflation / 100)
      } else { 
        withdrawal = 0 }
      savingsBalance = totalBalance
      currentAge += 1
    } else {
      let incomeSavings = savingsRate / 100 * totalIncome;
      let accountSavings = preRoi / 100 * savingsBalance
      let totalSavings = accountSavings + incomeSavings
      let totalBalance = savingsBalance + totalSavings

      let returnObject = {
        startingSavings: savingsBalance.toFixed(2),
        age: currentAge,
        income: totalIncome.toFixed(2),
        yearlySavings: totalSavings.toFixed(2),
        withdrawal: withdrawal.toFixed(2),
        endingSavings: totalBalance.toFixed(2)
      }

      finalSavingsArray.push(returnObject)

      savingsBalance = totalBalance
      totalIncome += salaryIncrease / 100 * totalIncome
      currentAge += 1
    }
  }
  
  const retirementCheck = canRetire(calculationOptions, finalSavingsArray)
  return { finalSavingsArray, retirementCheck }
}

console.log(calculator({
  startAge: 32, income: 75000, spouseIncome: 65000, amountSaved: 50000, retirementAge: 65, yearsRetired: 20, savingsRate: 20, inflation: 4, preRoi: 8, postRoi: 6, incomeRetirementPercent: 75, salaryIncrease: 3
  }
))

export default calculator