$(document).ready(function(){ 
	AOS.init({
      easing: 'delay-slide'
    });
}) 

function showPage() {
    $(function() {
        AOS.init({
            once: !0,
            disable: function() {
                var e = 768;
                return window.innerWidth < 768
            }
        })
    }), 

    $("#loading").addClass("loaded");
};

window.addEventListener("load", showPage, !1)