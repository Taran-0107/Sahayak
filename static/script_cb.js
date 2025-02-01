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

// Toggle Notification Box
document.querySelector(".notification").addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click from propagating to document
    var notifiBox = document.querySelector(".notifi-box");
    notifiBox.classList.toggle("active");
});

// Hide Notification Box when clicking outside
document.addEventListener("click", function (event) {
    var notifiBox = document.querySelector(".notifi-box");
    var notificationIcon = document.querySelector(".notification");

    // Check if the clicked element is not inside the notification box or the icon
    if (!notifiBox.contains(event.target) && !notificationIcon.contains(event.target)) {
        notifiBox.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {
		fetchTodayEvents();
	});

function fetchTodayEvents() {
	
	fetch(`/get_today_events`)
		.then(response => response.json())
		.then(data => {
			const box = document.getElementById("box");
			box.innerHTML = `<h2>Today's Events <span>${data.length}</span></h2>`; // Update count

			const notifspan = document.getElementById("notifspan");
			notifspan.innerText = data.length; 
			
			data.forEach(event => {
				const item = document.createElement("div");
				item.classList.add("notifi-item");

				item.innerHTML = `
					<img src="static/logo3.png" alt="img">
					<div class="text" style="border-left: 5px solid ${event.color}; padding-left: 10px;">
						<h4>${event.event_name}</h4>
						<p>${event.timestamp} - ${event.description}</p>
					</div>
				`;
				box.appendChild(item);
			});
		})
		.catch(error => console.error("Error fetching today's events:", error));
}
			


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
