let borderRange = 20

// box 1
const boxOneControl = document.querySelector(`input[name="box1"]`)
const boxOne = document.querySelector('div.box1')

boxOneControl.addEventListener('input', function () {
  boxOne.style.borderTopLeftRadius = this.value * borderRange + "px"
})

// box 2
const boxTwoControl = document.querySelector(`input[name="box2"]`)
const boxTwo = document.querySelector('div.box2')

boxTwoControl.addEventListener('input', function () {
  boxTwo.style.borderTopLeftRadius = this.value * borderRange + "px"
  boxTwo.style.borderBottomLeftRadius = this.value * borderRange + "px"
})

// box 3
const boxThreeControl = document.querySelector(`input[name="box3"]`)
const boxThree = document.querySelector('div.box3')

boxThreeControl.addEventListener('input', function () {
  boxThree.style.borderBottomLeftRadius = this.value * borderRange + "px"
  boxThree.style.borderTopRightRadius = this.value * borderRange + "px"
})

// box 4
const boxFourControl = document.querySelector(`input[name="box4"]`)
const boxFour = document.querySelector('div.box4')

boxFourControl.addEventListener('input', function () {
  boxFour.style.borderBottomRightRadius = this.value * borderRange + "px"
  boxFour.style.borderTopRightRadius = this.value * borderRange + "px"
})

// box 5
const boxFiveControl = document.querySelector(`input[name="box5"]`)
const boxFive = document.querySelector('div.box5')

boxFiveControl.addEventListener('input', function () {
	boxFive.style.borderBottomRightRadius = this.value * borderRange + "px"
})




// change background colour
const bodyTag = document.querySelector('body')
const colorTags = document.querySelectorAll('div.toggle-bg div')
const logoTag = document.querySelectorAll('div.logo div')

colorTags.forEach(tag => {
  
  tag.addEventListener('click', function () {
    bodyTag.style.backgroundColor = this.style.backgroundColor
    
    logoTag.forEach(tag => {
      tag.classList.toggle('selected')
    })
    // reset the classes
      colorTags.forEach(tag => {
        tag.classList.remove("selected")
      })
    	// add to the selected one only
    	this.classList.add('selected')
    	
  })
  
})