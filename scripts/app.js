$(document).ready(function() {
	"use strict";

	$('#pagepiling').pagepiling({
		menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#303F9F', '#1976D2', '#0288D1', '#0097A7'],
        anchors: ['intro', 'competences', 'formations', 'contact'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: true,
        loopTop: true,
        css3: true,
        navigation: {
            'textColor': '#cdd',
            'bulletsColor': '#cdd',
            'position': 'right',
            'tooltips': ['Intro', 'Compétences', 'Formation', "Contact"]
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
	});
});