// Facility Listing variables/array
var facRow = '<div class="facilities-row">';
var facCell = '<div class="facilities-cell">';
var facDivEnd = '</div>';
var facListingData = [
[random7DigitNumber(), 'Name 01', 'Location 01', 'Manager 01', 'Director 01'],
[random7DigitNumber(), 'Name 02', 'Location 02', 'Manager 02', 'Director 02'],
[random7DigitNumber(), 'Name 03', 'Location 03', 'Manager 03', 'Director 03'],
[random7DigitNumber(), 'Name 04', 'Location 04', 'Manager 04', 'Director 04'],
[random7DigitNumber(), 'Name 05', 'Location 05', 'Manager 05', 'Director 05'],
[random7DigitNumber(), 'Name 06', 'Location 06', 'Manager 06', 'Director 06'],
[random7DigitNumber(), 'Name 07', 'Location 07', 'Manager 07', 'Director 07'],
[random7DigitNumber(), 'Name 08', 'Location 08', 'Manager 08', 'Director 08'],
[random7DigitNumber(), 'Name 09', 'Location 09', 'Manager 09', 'Director 09'],
[random7DigitNumber(), 'Name 10', 'Location 10', 'Manager 10', 'Director 10'],
[random7DigitNumber(), 'Name 11', 'Location 11', 'Manager 11', 'Director 11'],
[random7DigitNumber(), 'Name 12', 'Location 12', 'Manager 12', 'Director 12'],
[random7DigitNumber(), 'Name 13', 'Location 13', 'Manager 13', 'Director 13'],
[random7DigitNumber(), 'Name 14', 'Location 14', 'Manager 14', 'Director 14'],
[random7DigitNumber(), 'Name 15', 'Location 15', 'Manager 15', 'Director 15'],
[random7DigitNumber(), 'Name 16', 'Location 16', 'Manager 16', 'Director 16'],
[random7DigitNumber(), 'Name 17', 'Location 17', 'Manager 17', 'Director 17'],
[random7DigitNumber(), 'Name 18', 'Location 18', 'Manager 18', 'Director 18'],
[random7DigitNumber(), 'Name 19', 'Location 19', 'Manager 19', 'Director 19'],
[random7DigitNumber(), 'Name 20', 'Location 20', 'Manager 20', 'Director 20'],
[random7DigitNumber(), 'Name 21', 'Location 21', 'Manager 21', 'Director 21'],
[random7DigitNumber(), 'Name 22', 'Location 22', 'Manager 22', 'Director 22'],
[random7DigitNumber(), 'Name 23', 'Location 23', 'Manager 23', 'Director 23']
];

// Contacts variables/array
var contactRow = '<div class="contacts-row">'; 
var contactCell = '<div class="contacts-cell">';
var contactDivEnd = '</div>';
var contactData = [
['Contact 01', randomPhoneNumber()],
['Contact 02', randomPhoneNumber()],
['Contact 03', randomPhoneNumber()],
['Contact 04', randomPhoneNumber()],
['Contact 05', randomPhoneNumber()],
['Contact 06', randomPhoneNumber()],
['Contact 07', randomPhoneNumber()],
['Contact 08', randomPhoneNumber()],
['Contact 09', randomPhoneNumber()],
['Contact 10', randomPhoneNumber()],
['Contact 11', randomPhoneNumber()],
['Contact 12', randomPhoneNumber()],
['Contact 13', randomPhoneNumber()],
['Contact 14', randomPhoneNumber()],
['Contact 15', randomPhoneNumber()]
];

// Results variables
var resultsURL = '<a href="'; 
var resultsTitle = '"><div class="border-style button-results">'
var resultsEnd = '</div></a>';
// Quick Note variable
var quicknoteFont = 14; 
// Fade speed Quick
var fadeQuick = 200; 
// Fade speed Slow
var fadeSlow = 400; 

// Hide Buttons and Show Results
function showResults() {
	$('.buttons').fadeOut(fadeQuick, function () {
		$('.results').fadeIn(fadeQuick);
	});
};

// Random 7 Digit Number generator
function random7DigitNumber() {
	var num = Math.floor(Math.random() * 9999999 + 1);
	var numFormated = (num).toLocaleString('en-US', {minimumIntegerDigits: 7, useGrouping:false})
	return numFormated;
}

// Random 10 Digit Phone Number generator
function randomPhoneNumber() {
	var num = Math.floor(Math.random() * 9999 + 1);
	var numFormated = (num).toLocaleString('en-US', {minimumIntegerDigits: 4, useGrouping:false})
	return "1-555-555-" + numFormated;
}

// Themes:  Import CSS file to update theme requested
function theme1() {
	$('head').append('<link rel="stylesheet" href="css/themes/theme1.css">');
}
function theme2() {
	$('head').append('<link rel="stylesheet" href="css/themes/theme2.css">');
}
function theme3() {
	$('head').append('<link rel="stylesheet" href="css/themes/theme3.css">');
}
function theme4() {
	$('head').append('<link rel="stylesheet" href="css/themes/theme4.css">');
}
function theme5() {
	$('head').append('<link rel="stylesheet" href="css/themes/theme5.css">');
}
function theme6() {
	$('head').append('<link rel="stylesheet" href="css/themes/theme6.css">');
}
function theme7() {
	$('head').append('<link rel="stylesheet" href="css/themes/theme7.css">');
}
function theme8() {
	$('head').append('<link rel="stylesheet" href="css/style.css">');
}

// Listener
$(document).ready(function() {

// Increase font-size of quick note textarea when .quick-note-increase class is clicked
	$('.quick-note-increase').click(function () {
		$('#quick-note-textarea').css("font-size", (quicknoteFont+=3) + "px");
	});

// Decrease font-size of quick note textarea when .quick-note-decrease class is clicked
	$('.quick-note-decrease').click(function () {
		$('#quick-note-textarea').css("font-size", (quicknoteFont-=3) + "px");
	});

// Reset font-size of quick note textarea to 14px when .quick-note-reset class is clicked
	$('.quick-note-reset').click(function () {
		quicknoteFont = 14;
		$('#quick-note-textarea').css("font-size", quicknoteFont + "px");
	});

// Load facListingData array data into the .facilities-data <div>
	for (i = 0; i < facListingData.length; i++) {
		$('.facilities-data').append(facRow + facCell + facListingData[i][0] + facDivEnd + facCell + facListingData[i][1] + facDivEnd + facCell + facListingData[i][2] + facDivEnd + facCell + facListingData[i][3] + facDivEnd + facCell + facListingData[i][4] + facDivEnd);
	};

// Load contactData array data into the .contacts-data <div>
	for (i = 0; i < contactData.length; i++) {
		$('.contacts-data').append(contactRow + contactCell + contactData[i][0] + contactDivEnd + contactCell + contactData[i][1] + contactDivEnd);
	};

// Update results <div> HTML, show results <div> and hide all buttons
	$('.button-a').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App A 01' + resultsEnd + resultsURL + '#' + resultsTitle + 'App A 02' + resultsEnd + resultsURL + '#' + resultsTitle + 'App A 03' + resultsEnd);
		showResults();
	});
	$('.button-b').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App B 01' + resultsEnd + resultsURL + '#' + resultsTitle + 'App B 02' + resultsEnd);
		showResults();
	});
	$('.button-c').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App C 01' + resultsEnd + resultsURL + '#' + resultsTitle + 'App C 02' + resultsEnd + resultsURL + '#' + resultsTitle + 'App C 03' + resultsEnd);
		showResults();
	});
	$('.button-f').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App F 01' + resultsEnd);
		showResults();
	});
	$('.button-g').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App G 01' + resultsEnd + resultsURL + '#' + resultsTitle + 'App G 02' + resultsEnd);
		showResults();
	});
	$('.button-h').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App H 01' + resultsEnd + resultsURL + '#' + resultsTitle + 'App H 02' + resultsEnd);
		showResults();
	});
	$('.button-i').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App I 01' + resultsEnd + resultsURL + '#' + resultsTitle + 'App I 02' + resultsEnd + resultsURL + '#' + resultsTitle + 'App I 03' + resultsEnd);
		showResults();
	});
	$('.button-k').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App K 01' + resultsEnd);
		showResults();
	});
	$('.button-l').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App L 01' + resultsEnd + resultsURL + '#' + resultsTitle + 'App L 02' + resultsEnd + resultsURL + '#' + resultsTitle + 'App L03' + resultsEnd);
		showResults();
	});
	$('.button-m').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App M 01' + resultsEnd + resultsURL + '#' + resultsTitle + 'App M 02' + resultsEnd);
		showResults();
	});
	$('.button-n').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App N 01' + resultsEnd + resultsURL + '#' + resultsTitle + 'App N 02' + resultsEnd);
		showResults();
	});
	$('.button-p').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App P 01' + resultsEnd + resultsURL + '#' + resultsTitle + 'App P 02' + resultsEnd + resultsURL + '#' + resultsTitle + 'App P 03' + resultsEnd);
		showResults();
	});
	$('.button-r').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App R 01' + resultsEnd);
		showResults();
	});
	$('.button-s').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App S 01' + resultsEnd + resultsURL + '#' + resultsTitle + 'App S 02' + resultsEnd + resultsURL + '#' + resultsTitle + 'App S 03' + resultsEnd);
		showResults();
	});
	$('.button-w').click(function () {
		$('.results-content').html(resultsURL + '#' + resultsTitle + 'App W 01' + resultsEnd);
		showResults();
	});

// Toggle Navigation drop-down menu
	$('.button-menu').click(function () {
		$('nav').slideToggle(250);
	});

// Hide Results, show Buttons
	$('.results').click(function () {
		$('.results').fadeOut(fadeQuick, function () {
			$('.buttons').fadeIn(fadeQuick);
		});
	});

// Display Contacts Pop-Up
	$('.button-contacts').click(function () {
		$('#sub-container').fadeOut(fadeSlow, function() {
			$('#contacts').fadeIn(fadeSlow);
			$('nav').fadeOut(fadeSlow);
		});
	});

// Close Contacts Pop-Up
	$('.contacts-exit').click(function () {
		$('#contacts').fadeOut(fadeSlow, function () {
			$('#sub-container').fadeIn(fadeSlow);
		});
	});

// Display Facilities Listings Pop-Up
	$('.nav-facilities').click(function () {
		$('#sub-container').fadeOut(fadeSlow, function() {
			$('#facilities').fadeIn(fadeSlow);
			$('nav').fadeOut(fadeSlow);
		});
	});

// Close Facilities Listings Pop-Up
	$('.facilities-exit').click(function () {
		$('#facilities').fadeOut(fadeSlow, function () {
			$('#sub-container').fadeIn(fadeSlow);
		});
	});

// End of Listener
});