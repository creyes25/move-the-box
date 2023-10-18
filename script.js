const clickBtn = document.querySelector('.click')
const box = document.querySelector('.box')


function moveBox () {
  if (box.className.includes('right')) {
    box.classList.remove('right')
    box.classList.add('left')
  }else {
    box.classList.remove('left')
    box.classList.add('right')
  }
}


clickBtn.addEventListener('click', moveBox)