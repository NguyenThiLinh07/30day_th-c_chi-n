var images = document.querySelectorAll('.image img')
var close = document.querySelector('.close')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var gallery = document.querySelector('.gallery')
var galleryImg = document.querySelector('.gallery__inner img')
var currentIndex = 0

function showGallery() {
    if (currentIndex == 0) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }

    if (currentIndex == images.length - 1) {
        next.classList.add('hide')
    } else {
        next.classList.remove('hide')
    }

    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index)=> {
    item.addEventListener('click', ()=> {
        currentIndex = index
        showGallery()
    })
})

close.addEventListener('click', ()=> gallery.classList.remove('show'))

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--
        showGallery()
    }
})

next.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++
        showGallery()
    }
})