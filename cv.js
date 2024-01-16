//turn pages when click next or prev button
//contact me button when click
//create reverse index function
//back profile button when click
//opening animation
//opening animation (cover right animation)
//opening animation (page left or profile page animation)
//opening animation (all page right animation)

const pages = document.querySelectorAll('.nextprev-btn');

pages.forEach((el, index) => {
    el.addEventListener('click', () => {
        const pageId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index
            }, 500);

        }
    });
});

function setFirstLastPage(first = true) {
    pages.forEach((el, index) => {
        const pageId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageId);
        if (first==true) {
            pageTurn.classList.add('turn');
            pageTurn.style.zIndex = 20 + index;
        } else {
            pageTurn.classList.remove('turn');
            pageTurn.style.zIndex = 20 - index;
        }

    });
}


