import { getRandomPassword } from './HW3JS'
import { generateCombinations } from './HW5JS'
import { getRandomChinese } from './HW11JS'

import './index.css'

document.body.innerHTML = `<table>
<tr>
  <td><button id="genDigitalPasBtn">Generate digital password</button></td>
  <td><button id="genChinesePasBtn">Generate сhinese password</button></td>
</tr>
<tr>
  <td>Legth of password:</td>
  <td><input id="lengthOfPasswordInput" /></td>
</tr>
<tr>
  <td>Result:</td>
  <td id="resultOutput"></td>
</tr>
<tr>
  <td>Other combinations:</td>
  <td id="otherCombinations"></td>
</tr>
</table>`

const showDigitalPassword = () => {
  debugger
  const resultOutput = document.querySelector('#resultOutput')
  const lengthOfPassword = document.querySelector('#lengthOfPasswordInput').value

  resultOutput.textContent = getRandomPassword(lengthOfPassword).toString()

  const otherCombinationsOutput = document.querySelector('#otherCombinations')

  otherCombinationsOutput.textContent = generateCombinations(getRandomPassword(lengthOfPassword).toString())
}

const showChinesePassword = () => {
  debugger
  const resultOutput = document.querySelector('#resultOutput')
  const lengthOfPassword = document.querySelector('#lengthOfPasswordInput').value

  getRandomChinese(lengthOfPassword)
    .then((result) => (resultOutput.textContent = result.toString()))
    .then((result) => {
      const otherCombinationsOutput = document.querySelector('#otherCombinations')

      otherCombinationsOutput.textContent = generateCombinations(result)
    })
}

document.querySelector('#genDigitalPasBtn').addEventListener('click', showDigitalPassword)
document.querySelector('#genChinesePasBtn').addEventListener('click', showChinesePassword)
