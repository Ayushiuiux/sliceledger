$(function () {
	var navbar = $('.navbar');

	$(window).scroll(function () {
		if ($(window).scrollTop() <= 40) {
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
});
// $(document).ready(function () {
// 	$(".dropdown").hover(
// 		function () {
// 			$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
// 			$(this).toggleClass('open');
// 		},
// 		function () {
// 			$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
// 			$(this).toggleClass('open');
// 		}
// 	);
// });
document.addEventListener('click',function(e){
	// Hamburger menu
	if(e.target.classList.contains('hamburger-toggle')){
	  e.target.children[0].classList.toggle('active');
	}
  })
// nav js close here

// *************************************************
$('.choose_carousel').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	autoplay:true,
    autoplayTimeout:5000,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: false
		}
	}
})
// owl carousel js close here


// *************************************************
var input = document.querySelector("#phone");
window.intlTelInput(input, {
	// allowDropdown: false,
	// autoHideDialCode: false,
	// autoPlaceholder: "off",
	// dropdownContainer: document.body,
	// excludeCountries: ["us"],
	// formatOnDisplay: false,
	// geoIpLookup: function(callback) {
	//   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
	//     var countryCode = (resp && resp.country) ? resp.country : "";
	//     callback(countryCode);
	//   });
	// },
	// hiddenInput: "full_number",
	// initialCountry: "auto",
	localizedCountries: { 'de': 'Deutschland' },
	// nationalMode: false,
	onlyCountries: ['in', 'us', 'gb', 'ch', 'ca', 'do'],
	// placeholderNumberType: "MOBILE",
	preferredCountries: ['in', 'us'],
	separateDialCode: true,
	utilsScript: "build/js/utils.js",
});
// countries code js close here

// *************************************************
$(function () {
	$('#wtsappmyButton').floatingWhatsApp({
		phone: '9770477239',
		popupMessage: 'Hello, how can we help you?',
		message: "Type your message here",
		showPopup: true,
		showOnIE: false,
		headerTitle: 'Welcome!',
		headerColor: '#25d366',
		backgroundColor: '#25d366',
		buttonImage: '<img src="assets/images/whatsapp.svg" />'
	});
});
// whatsapp floting js close here


$(function() {
	var pos = document.getElementById('targetId').scrollHeight;
	console.log(pos);
	
	if(pos>="75"){
	
	  function count($this){
		  var current = parseInt($this.html(), 10);
		  $this.html(++current);
		  if(current !== $this.data('count')){
			  setTimeout(function(){count($this)}, 50);
		  }
	  }        
	$(".counter-value").each(function() {
		$(this).data('count', parseInt($(this).html(), 10));
		$(this).html('0');
		count($(this));
	});
	}
  });
  //counter js close here
  