const dropDown = document.querySelectorAll('.drop-down-menu')
const dropDownList = document.querySelectorAll('.navbar__drop-down-list')
const levelTwo = document.querySelector('.navbar__dropdown-level-2')
const subList = document.querySelector('.navbar__sub-list')
const heroSection = document.querySelector('.hero-section')
const navBtns = document.querySelectorAll('[dropdown-btn]')
const hamIcon = document.querySelector('.navbar__ham')
const navContent = document.querySelector('.navbar__content')

console.log(hamIcon)

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