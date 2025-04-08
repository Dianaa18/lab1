 var tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.classList.remove('active');
            });
            tab.classList.add('active');
        });
    });
  function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }