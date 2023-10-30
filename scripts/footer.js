const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = '<footer> \
<img src="./images/logo.png" alt="logo">\
<div>\
    <p>E-post: <a href="mailto:heidi@example.com">heidi@example.com</a></p>\
    <p>Adresse: </p>\
    <p>Telefon: </p>\
</div>\
</footer>'

document.getElementById("footer").appendChild(footerTemplate.content);
