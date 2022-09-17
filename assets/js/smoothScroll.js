/* const scrollContainer = document.querySelector('.scroll-container');
const skewConfigs = {
    ease: 0.5,
    current: 0,
    previous: 0,
    rounded: 0,
};
const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 60) / 60;

    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / getSize().width;
    const velocity = +acceleration;
    //const skew = getSize().width < 1024 ? velocity * 7.5 : velocity * 10;

    scrollContainer.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0)`;
    requestAnimationFrame(skewScrolling);
}
document.body.style.height = `${scrollContainer.getBoundingClientRect().height}px`;
function getSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}

skewScrolling();*/

const app = document.querySelector('.App');
const container = document.querySelector('.scroll-container');
let current = 0;
    target = 0;
    ease = 0.25;

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
    el.style.transform = transform;
}

function smoothScroll() {
    let getDeviceWidth = window.innerWidth;
    if (getDeviceWidth > 1024) {
        let containerHeight = container.getBoundingClientRect().height;
        app.classList.add('smooth-scroll');
        document.body.style.height = `${containerHeight}px`;
        current = lerp(current, target, ease);
        current = parseFloat(current.toFixed(2));
        target = window.scrollY;
        setTransform(container, `translate3d(0, ${-current}px, 0)`);
    } else {
        app.classList.remove('smooth-scroll');
        setTransform(container, `translate3d(0, 0, 0)`);
        document.body.style.height = `${100}%`;
    }
    requestAnimationFrame(smoothScroll)
}

smoothScroll();
