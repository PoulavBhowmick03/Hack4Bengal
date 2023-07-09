//change navbar on scroll

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle
    ('window-scroll', window.scrollY > 150)})


    //show/hide faqs

    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("open");
        })
    })

    const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('mouseenter', () => {
    dropdown.querySelector('.dropdown-menu').style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdown.querySelector('.dropdown-menu').style.display = 'none';
  });
});
