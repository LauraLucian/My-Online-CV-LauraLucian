  const toTop = document.querySelector('.to-top img');

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  });

  function showMessage() {
    alert("Thank you for your feedback!");
  }

  


