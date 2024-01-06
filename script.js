const btn = document.querySelector('button')
const [form] = document.forms
const fc = document.getElementById('fc')
const cost = document.getElementById('cost')

btn.onclick = calcConsumption

function calcConsumption() {
  const distance = form.distance.value
  const amount = form.amount.value
  const price = form.amount.value
  let consumption = amount / distance * 100
  let costResult = amount * price

  fc.innerText = consumption.toFixed(1) + 'л' + ' на 100км'
  cost.innerText = costResult + ' грн'
}