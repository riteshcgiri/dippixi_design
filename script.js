

const animeStart = document.querySelector('#animeStart');
//reload page on click so animation can restart
animeStart.addEventListener('click', ()=>{
    location.reload();
});


// created a timeline from gsap
const tl = gsap.timeline();

tl
.from('.head',{
    opacity: 0,
    y:-50,
    ease: 'Expo.easeInOut',
    duration: 1.5,
})
.from('.link-item', {
    stagger: .3,
    opacity: 0,
    x:-100,
    ease: 'Expo.easeInOut',
    duration: 1,
}, '-=.5')
.from('.left-item', {
    stagger: .3,
    opacity: 0,
    y:70,
    ease: 'Expo.easeInOut',
    duration: 2.5,
}, '-=.5')
.fromTo('.btn-primary', {
    opacity: 0,
    y:70,
},{
    opacity: 1,
    y:0,
    ease: 'Expo.easeInOut',
    duration: 1,
}, '-=1.8')
.from('.btn-sec', {
    opacity: 0,
    y:70,
    ease: 'Expo.easeInOut',
    duration: 2,
}, '-=2.11')
.from('.right img', {
    opacity: 0,
    y:100,
    scale: '1.05',
    ease: 'Expo.easeInOut',
    duration: 1,
}, '-=1.2')
