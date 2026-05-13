let leftArrow = document.getElementById('leftArrow')
let rightArrow = document.getElementById('rightArrow')
let slidePictures = document.querySelectorAll('.slider')

function toggleHidden(element) {
    element.classList.toggle('hero__slide-inactive')
    element.classList.toggle('hero__slide')
}

function slideHandler(event, direction) {
    let current = i
    switch (direction) {
        case 'left':
            if (i > 0) {
                let previous = i - 1
                toggleHidden(slidePictures[current])
                toggleHidden(slidePictures[previous])
                i = previous
            }
        break
        case 'right':
            if (i < slidePictures.length - 1) {
                let next = i + 1
                toggleHidden(slidePictures[current])
                toggleHidden(slidePictures[next])
                i = next
            }
        break
    }
    console.log(slidePictures[i].className)
}

let i = 0
leftArrow.addEventListener('click', e => slideHandler(e.target, 'left'))
rightArrow.addEventListener('click', e => slideHandler(e.target, 'right'))

