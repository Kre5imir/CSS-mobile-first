function toggleNav(){
    const outterGrid = document.querySelector('.outer-grid');
    outterGrid.classList.toggle('outer-grid-expanded');

    const navBarHide = document.querySelector('nav');
    navBarHide.classList.toggle('hide-nav')
}

