
function toggleStyle() {
    document.getElementById("burger").classList.toggle("burgeractive");
    document.getElementById("floating-menu").classList.toggle("hidden");

}
function toggleStyleMobile() {
    document.getElementById("burger-mobile").classList.toggle("burgeractive-mobile");
    document.getElementById("mobile-menu").classList.toggle("open");
}
function toggleGallery(e) {
    Array.from(document.getElementsByClassName('gallery-button')).forEach((item) => {
        item.classList.replace('text-teal-500', 'text-neutral-500')
    })
    e.target.classList.add('text-teal-500')
}

function init() {
    document.getElementById("burger").addEventListener("click", toggleStyle);
    document.getElementById("burger-mobile").addEventListener("click", toggleStyleMobile);
    document.getElementById("closeMenu").addEventListener("click", toggleStyleMobile);
    let activeTab = 'gallery'
    Array.from(document.getElementsByClassName('gallery-button')).forEach((item) => {
        item.addEventListener('click', toggleGallery)
    })
}

init();