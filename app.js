// import drinks from "./drinks"

const menu = [
    {
        id: 1,
        title: 'Cappuccion',
        category: 'breakfast',
        text: 'Usage of the Internet is becoming more common due to rapid advance.',
        price: 49
    },

    {
        id: 2,
        title: 'Macchiato',
        category: 'budget meal',
        text: 'Usage of the Internet is becoming more common due to rapid advance.',
        price: 49
    },
    {
        id: 3,
        title: 'Piccolo Latte',
        category: 'lunch',
        text: 'Usage of the Internet is becoming more common due to rapid advance.',
        price: 49
    },
    {
        id: 4,
        title: 'Americano',
        category: 'dinner',
        text: 'Usage of the Internet is becoming more common due to rapid advance.',
        price: 49
    },
    {
        id: 5,
        title: 'Mocha',
        category: 'breakfast',
        text: 'Usage of the Internet is becoming more common due to rapid advance.',
        price: 49
    },
    {
        id: 6,
        title: 'Ristretto',
        category: 'buffet',
        text: 'Usage of the Internet is becoming more common due to rapid advance.',
        price: 49
    }
]

const menuImg = [
    {
        id: 1,
        title: 'Cappuccion',
        category: 'breakfast',
        text: 'Usage of the Internet is becoming more common due to rapid advance.',
        price: 49
    },

    {
        id: 2,
        title: 'Macchiato',
        category: 'budget meal',
        text: 'Usage of the Internet is becoming more common due to rapid advance.',
        price: 49
    },
    {
        id: 3,
        title: 'Piccolo Latte',
        category: 'lunch',
        text: 'Usage of the Internet is becoming more common due to rapid advance.',
        price: 49
    },
    {
        id: 4,
        title: 'Americano',
        category: 'dinner',
        text: 'Usage of the Internet is becoming more common due to rapid advance.',
        price: 49
    },
    {
        id: 5,
        title: 'Mocha',
        category: 'breakfast',
        text: 'Usage of the Internet is becoming more common due to rapid advance.',
        price: 49
    },
    {
        id: 6,
        img: "./Images/user.png.jpg"

    }

]


const dropDown = document.querySelectorAll('.drop-down-menu')
const dropDownList = document.querySelectorAll('.navbar__drop-down-list')
const levelTwo = document.querySelector('.navbar__dropdown-level-2')
const subList = document.querySelector('.navbar__sub-list')
const heroSection = document.querySelector('.hero-section')
const navBtns = document.querySelectorAll('[dropdown-btn]')
const hamIcon = document.querySelector('.navbar__ham')
const navContent = document.querySelector('.navbar__content')

// console.log(hamIcon)

document.addEventListener('click', e => {
    const isDropdownBtn = e.target.matches('[dropdown-btn]')
    if (!isDropdownBtn && e.target.closest("[data_dropdown]") != null) return

    let currentDropdown
    if (isDropdownBtn) {
        currentDropdown = e.target.closest("[data_dropdown]")
        currentDropdown.classList.toggle("active")

    }

    document.querySelectorAll("[data_dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })

})
levelTwo.addEventListener('click', () => {
    subList.classList.toggle('show')
    levelTwo.classList.toggle('clicked-color')

})
navBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active-color')
    })
})
hamIcon.addEventListener('click', () => {
    hamIcon.classList.toggle('rotate-icon')
    navContent.classList.toggle('show-sidebar')


})

//  Scroll Navbar

const navbar = document.querySelector('.navbar')
// console.log(navbar)

// window.onscroll = function () { scrollFunction() };
window.addEventListener('scroll', scrollFunction)
function scrollFunction() {
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('fixedNav')

    }
    else {
        navbar.classList.remove('fixedNav')
    }
    // if (document.body.scrollTop > 20) {
}

const menuSection = document.querySelector('.drinks__list')
const menuBtns = document.querySelectorAll('.drinks__Btns')
// const 
// console.log(menuBtns)


// load content

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu)

})

//  active button

menuBtns.forEach((button) => {
    button.addEventListener('click', () => {
        menuBtns.forEach((Element) => Element.classList.remove('active'))
        button.classList.add('active')
    })
})

// filter items

menuBtns.forEach((btn => {
    btn.addEventListener('click', (e) => {
        // btn.classList.add('active')


        // btn.classList.remove('active')
        const category = e.currentTarget.dataset.id
        const menuCategory = menu.filter((menuItems) => {
            if (menuItems.category === category) {
                return menuItems;
            }
        })
        if (category === 'All Menu') {
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCategory)
        }

    })

}))

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {

        return `<article class="drinks__blocks">
                    <div class="drinks__header">
                        <h4 class="drinks__heading heading-3">${item.title}</h4>
                        <h4 class="drinks__price">$${item.price}</h4>
                    </div>
                    <p class="paragraph-1 drinks__text">${item.text}</p>
                </article>`;
    })
    displayMenu = displayMenu.join('')
    menuSection.innerHTML = displayMenu

}