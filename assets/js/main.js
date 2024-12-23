  
  // filter__sidebar Active()
  var fltBtn = document.querySelector('.Filter__btn')
  var fltClose = document.querySelector('.fltClose')
  var fltSideBar = document.querySelector('.filter__sidebar')
  var body = document.querySelector('body')

  fltBtn.addEventListener('click', () => {
    fltSideBar.classList.add('show')
    body.classList.add('overflow-hidden')
  })

  fltClose.addEventListener('click', () => {
    fltSideBar.classList.remove('show')
    body.classList.remove('overflow-hidden')
  })
  
  

  
  

