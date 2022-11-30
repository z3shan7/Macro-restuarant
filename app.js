const dropDown = document.querySelectorAll('.drop-down-menu')
const dropDownList = document.querySelectorAll('.navbar__drop-down-list')
const levelTwo = document.querySelector('.dropdown-level-2')
const subList = document.querySelector('.navbar__sub-list')
const heroSection = document.querySelector('.hero-section')

console.log(dropDown)

document.addEventListener('click', e => {
    const isDropdownBtn = e.target.matches('[dropdown-btn]')
    if (!isDropdownBtn && e.target.closest("[data_dropdown]") != null) return

    let currentDropdown
    if (isDropdownBtn) {
        currentDropdown = e.target.closest("[data_dropdown]")
        currentDropdown.classList.toggle("active")
        dropDown.forEach(menu => menu.classList.add('.active-color'))

    }

    document.querySelectorAll("[data_dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")

    })

})
levelTwo.addEventListener('click', () => {
    subList.classList.toggle('show')

})
