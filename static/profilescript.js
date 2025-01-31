window.onload = function () {
    Particles.init({
      selector: '.background',
      maxParticles: 30,
      connectParticles: true,
      speed: 2,
      minDistance: 250,
      sizeVariations: 4,
      color: 'd9d9d9',
    });
  };
 
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});


// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})

window.onload = function () {
    Particles.init({
      selector: '.background',
      maxParticles: 30,
      connectParticles: true,
      speed: 2,
      minDistance: 250,
      sizeVariations: 4,
      color: 'd9d9d9',
    });
  };





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})

const editBtn = document.getElementById('edit-btn');
const saveBtn = document.getElementById('save-btn');
const inputs = document.querySelectorAll('input');
const emailInput = document.getElementById('email');

// Initially, disable the Save Changes button
saveBtn.disabled = true;

editBtn.addEventListener('click', () => {
  inputs.forEach(input => {
    if (input !== emailInput) {
      input.disabled = false;
    }
  });
  // inputs.forEach(input => input.disabled = false);
  saveBtn.disabled = false;
  editBtn.disabled = true;
});

saveBtn.addEventListener("click", () => {
    // Disable all input fields
    inputs.forEach(input => {
      input.disabled = true;
    });
  
    // Disable the Save Changes button
    saveBtn.disabled = true;
  
    // Enable the Edit button
    editBtn.disabled = false;

});
