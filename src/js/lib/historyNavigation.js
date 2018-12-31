// ---------- HISTORY NAVIGATION ---------- ---------- ---------- ---------- ----------
$.supportsHistory = function() {
    return !!(window.history && window.history.pushState);
}

$.loadLocation = function(url, bodyElement, mainElement, contentElementId) {
    $("#" + contentElementId).fadeOut(200, function() {
        mainElement
        .hide()
        .load(url + " #" + contentElementId, function(response, status, xhr) {
            mainElement.fadeIn(200, function() {
                if (status == "error") {
                    $("#" + contentElementId)
                    .html("<div class=\"alert alert-danger\" role=\"alert\">Error loading page</div>").show();
                }
                $("nav li.nav-item").removeClass("active");
                var a = $("nav li.nav-item > a.app-nav[href=\""+url+"\"]");
                a.closest("li.nav-item").addClass("active");
            });
        });
    });
}

$(function() {
    if ($.supportsHistory()) {
        var $bodyElement = $("body");
        var $mainElement = $("main");
        var $baseHeight = $bodyElement.height() - $mainElement.height();

        $("nav").delegate("a.app-nav", "click", function(e) {
            e.preventDefault();
            var url = $(this).attr("href");
            if (url != "#") {
                window.history.pushState(null, null, url);
                $.loadLocation(url, $bodyElement, $mainElement, 'content', $baseHeight);
            }
        });

        $(window).bind("popstate", function(e) {
            $.loadLocation(e.target.location.href, $bodyElement, $mainElement, 'content', $baseHeight);
        });
    }
});
// ---------- HISTORY NAVIGATION ---------- ---------- ---------- ---------- ----------
