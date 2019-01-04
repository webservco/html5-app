/* main */

$(document).ready(function() {
    /* history navigation */
    $("nav").historyNavigation({
        linkClass: "app-nav", // class of the links which trigger the navigation
        mainElementId: "main", // id of content wrapper element
        contentElementId: "content", // id of content element
        navigationElementClass: "navbar", // class of the element containing the navigation links
        onLinkClick: function( element ) { // callback
            //console.log("callback: onLinkClick"); //XXX
            //console.log(element); //XXX undefined
        },
        onUrlLoaded: function() { // callback
            //console.log("callback: onUrlLoaded");
        },
        onPopState: function( event ) { // callback
            //console.log("callback: onPopstate");
            //console.log(event); //XXX undefined
        },
    });
});
