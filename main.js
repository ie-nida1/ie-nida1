/*SEARCH*/
const searchButton = document.getElementById('search-button')
      searchClose = document.getElementById('search-close')
      searchContent = document.getElementById('search-content')

/*MENU*/
if(searchButton) {
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/*MENU HIDDEN*/
if(searchClose) {
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

/*LOGIN PAGE*/
const loginButton = document.getElementById('login-button')
      loginClose = document.getElementById('login-close')
      loginContent = document.getElementById('login-content')

/*LOGIN*/
if(loginButton) {
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/*LOGIN HIDDEN*/
if(loginClose) {
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}


/* CART PAGE */
const cartButton = document.getElementById('cart-button')
      cartClose = document.getElementById('cart-close')
      cartContent = document.getElementById('cart-content')

/*LOGIN*/
if(cartButton) {
    cartButton.addEventListener('click', () =>{
        cartContent.classList.add('show-cart')
    })
}

/*LOGIN HIDDEN*/
if(cartClose) {
    cartClose.addEventListener('click', () =>{
        cartContent.classList.remove('show-cart')
    })
}



/*SWIPER CSS*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween:-24,
    gradCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,

    },
    
    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
})

/*SHADOW HEADER*/
const shadowHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')

}

window.addEventListener('scroll' , shadowHeader)

/*FEATURED SWIPER*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    gradCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides:false,
        }
    }
})


/*NEW SWIPER*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,

    },
    
    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
})

/*RATINGS AND REVIEWS */
const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelectorAll('rating input')
allStar.forEach((item, idx)=>{
    item.addEventListener('click', function () {
        let click = 0
        ratingValue.value = idx + 1
        console.log(ratingValue.value)

        allStar.forEach(i=>  {
            i.classList.replace('ri-star-fill','ri-star-line')
            i.classList.remove('active')
        })
        for(let i=0; i<allStar.length; i++) {
            if(i <= idx) {
                allStar[i].classList.replace('ri-star-line', 'ri-star-fill')
                allStar[i].classList.add('active')
            } else {
                allStar[i+1].computedStyleMap.setProperty('--i', click)
                click++
            }
        }
    })
})

/*SCROLL UP BUTTON*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
               : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*SCROLL UP SECTIONS*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*DARK LIGHT THEME */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*SCROLL ANIMATION*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    //reset: true,// Animations repeat

})

sr.reveal(`.home__data, .featured__container, .new__container ,
          .looking__data, .ratings, .footer`)
sr.reveal(`.home__images`, {delay:600})
sr.reveal(`.services__card`, {interval:100})
sr.reveal(`.discount__data`, {origin:'left'})
sr.reveal(`.discount__images`, {origin:'right'})