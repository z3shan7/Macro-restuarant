const dropDown = document.querySelectorAll('.drop-down-menu')
const dropDownList = document.querySelectorAll('.navbar__drop-down-list')

console.log(dropDownList)
dropDown.forEach((menu) => {
    menu.addEventListener('click', () => {
        dropDownList.forEach((list) => {
            list.classList.remove('active')
        })





    })
})