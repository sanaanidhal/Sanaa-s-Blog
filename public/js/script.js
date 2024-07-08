document.addEventListener('DOMContentLoaded', function(){
    const  allButtons  = document.querySelectorAll('.searchBtn');
    const  searchBar  = document.querySelectorAll('.searchBar');
    const  searchInput  = document.querySelectorAll('.searchInput');
    const  searchClose  = document.querySelectorAll('.searchClose');

    for (var i = 0 ; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function() {
            searchBar.style.visibility = 'hidden';
            searchBar.classList.add('open') ;
            this.setAttribute('aria-expanded' , 'false');
        });
    }

});