// smooth scroll effect
document.querySelectorAll('nav a').forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    if (document.getElementById(targetId)) {
        link.onclick = function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        };
    }
});
