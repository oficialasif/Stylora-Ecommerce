// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}


// searchbox

// Toggle search box on click
const searchIconBtn = document.querySelector('.search-icon-btn');
const navBtns = document.querySelector('.nav-btns');
const searchBox = document.querySelector('.search-box');

searchIconBtn.addEventListener('click', function() {
    navBtns.classList.toggle('active');
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) {
        searchBox.querySelector('.search-input').focus();
    }
});
