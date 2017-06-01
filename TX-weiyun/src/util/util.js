export default {
  addClass () {
    let oLi = document.querySelectorAll('.option')
    
    for (let i = 0; i < oLi.length; i++) {           
      oLi[i].addEventListener('click', function() {
        for (var j = 0; j < oLi.length; j++) {
          oLi[j].classList.remove('active')
        } 
        this.classList.add('active')
      })      
    }
  },
  focus () {
    let search = document.getElementById('search')
    search.addEventListener('focus', function() {
      document.querySelector('.w-header__search').classList.add('active')
      document.querySelector('label').style.display = 'none'
      this.style.opacity = 1
      this.style.width = 150 + 'px'
      document.querySelector('.close').style.display = 'inline-block'
    })
    search.addEventListener('blur', function () {
      document.querySelector('.w-header__search').classList.remove('active')
      document.querySelector('label').style.display = 'inline-block'
      this.style.opacity = 0
      this.style.width = 93 + 'px'
      document.querySelector('.close').style.display = 'none'
    })
  }
}