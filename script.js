function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#Home .parent .child", { y: "100%" });
  gsap.set("#Home .row img", { opacity: 0 });
}

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    var parent = document.createElement("span");
    var child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.append(child);

    elem.innerHTML = " ";
    elem.appendChild(parent);
  });
}

function loaderAnimation() {
  var tl = gsap.timeline();
  tl.from(" #loader .child span", {
    x: "100",
    stagger: 0.2,
    duration: 1,
    delay: 1,
    ease: Power3.easeInOut,
  })
    .to(" #loader .parent .child", {
      y: "-100%",
      duration: 1,
      delay: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -0.5,
      ease: Circ.easeInOut,
      onComplete: function () {
        animateHomePage();
      },
    })
    .to("#green", {
      height: "0%",
      duration: 1,
      delay: -0.3,
      ease: Circ.easeInOut,
    });
}

function animateHomePage() {
  var tl = gsap.timeline();
  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  })
    .to("#Home .parent .child ", {
      y: 0,
      stagger: 0.1,
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to("#Home .row img ", {
      opacity: 1,
      ease: Expo.easeInOut,
    });
}

function contact() {
  document
    .getElementById("contactform")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const formessage = document.getElementById("formessage");

      if (name === "" || email === "" || message === "") {
        formessage.textContent = "Please fill out all fields.";
        formessage.style.color = "red";
        return;
      }

      formessage.textContent =
        "Thank you for contacting me. I will get back to you soon!";
      formessage.style.color = "green";

      document.getElementById("contactForm").reset();
    });
}

revealToSpan();
valueSetters();
loaderAnimation();
contact();
