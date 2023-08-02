const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        // badgeEl.style.display = 'none'
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        }) //요소, 지속시간(초), 옵션
    } else {
        // badgeEl.style.display = 'block'
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        }) //요소, 지속시간(초), 옵션
    }
}, 300))