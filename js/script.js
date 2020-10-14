

// Sticky navbar
// =========================
$(document).ready(function () {
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});

// carousel
$('.carousel').carousel({
    interval: 4000
})



// --------------------- rupiah
var rupiah = document.getElementById("rupiah");
rupiah.addEventListener("keyup", function(e) {
    rupiah.value = formatRupiah(this.value, "");
});

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "" + rupiah : "";
}
