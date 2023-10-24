let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinsks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinsks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .hading", { orign: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { orign: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { orign: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { orign: "right" });

//

let MyForm = document.querySelector(".myform");
let ElName = document.getElementById("name");
let ElEmail = document.getElementById("email");
let ElMessage = document.getElementById("message");

MyForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let params = {
    name: ElName.value,
    email: ElEmail.value,
    message: ElMessage.value,
  };
  emailjs.send("service_pevaq6p", "template_9jzraa3", params).then((res) => {
    swal("Success!", " Send your message!", "success");
  }).catch((err) => alert(err),
 
  );

  ElMessage.value = "";
  ElEmail.value = "";
  ElName.value = "";

 
});
