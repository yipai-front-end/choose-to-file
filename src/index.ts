import { chooseToFile } from '../source/index'

let chooseBtn = document.getElementById('chooseBtn')
chooseBtn?.addEventListener('click', () => {
  chooseToFile()
})
