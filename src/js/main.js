/* main.js */

/* on document ready (not called on ajax load) */
$( document ).ready(function() {
    /* history navigation */
    $(document).historyNavigation({
        linkClass: "app-nav", // class of the links which trigger the navigation
        mainElementId: "main", // id of content wrapper element
        contentElementId: "content", // id of content element
        navigationElementClass: "navbar", // class of the element containing the navigation links
        onLinkClick: function( element ) { // callback
            //console.log("callback: onLinkClick");
        },
        onUrlLoaded: function( newUrl ) { // callback
            //console.log("callback: onUrlLoaded");

            initialise(); /* on ajax page load */
        },
        onUrlLoadError: function( newUrl, resultObject ) {
            //console.log("callback: onUrlLoadError");
            /* set custom content on error */
            $("#content").html(
                "<div class=\"alert alert-danger\" role=\"alert\"><h1>Error loading page</h1>" +
                "Status: " + resultObject.status + " " + resultObject.statusText +
                "</div>"
            );
        },
        onPopState: function( event ) { // callback
            //console.log("callback: onPopstate");
        },
    });

    initialise(); /* on regular page load */
});

/* on any ajax call completed */
$( document ).ajaxComplete(function( event, xhr, settings ) { //http://api.jquery.com/ajaxcomplete/
    //console.log('ajaxComplete');
});
