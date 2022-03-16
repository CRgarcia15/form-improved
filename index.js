let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0


for(let i = 0; i < weeklyExpensesQuestions.length; i++){
let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
let numberAnswer = parseFloat(stringAnswer)
console.log(numberAnswer)

weeklyExpenses = weeklyExpenses + numberAnswer
}

