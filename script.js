function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

function attendancePage() {
    location.replace("attendance.html")
}

function leavePage() {
    location.replace("leave.html")
}

function uploadSales(){
    location.replace("uploadSales.html")
}

function outReach(){
    location.replace("outReach.html")
}

let slides = document.querySelector(".slides");
        let slideIndex = 0;

        function showSlide(index) {
            slides.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            slideIndex = (slideIndex + 1) % slides.children.length;
            showSlide(slideIndex);
        }

        setInterval(nextSlide, 2500); // Change slide every 3 seconds  