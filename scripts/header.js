const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = '<header>\
<h1 id="big-head">Tannlege Heidi Dalåmo</h1>\
<nav id="navbar-container">\
<button type="button" class="nav-btn" onclick="window.location.href=\'about.html\';">About Us</button>\
<button type="button" class="nav-btn" onclick="window.location.href=\'treatments.html\';">Treatments</button>\
<button type="button" class="nav-btn" onclick="window.location.href=\'prices.html\';">Prices</button></a>\
<button type="button" class="nav-btn" onclick="window.location.href=\'booking.html\';">Booking</button></a>\
<button type="button" class="nav-btn" onclick="window.location.href=\'about.html\';">Contact Us</button></a>\
</nav>\
</header>'
document.getElementById("header").appendChild(headerTemplate.content);

