// SECTION IMAGE SWIPER JS

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  loop: true,

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// HEADER ITEMS RANDOM COLOR

function getRandomDarkColor() {
  const letters = "01234abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 9)];
  }
  return color;
}
document.addEventListener("DOMContentLoaded", (event) => {
  const textElement = document.getElementById("header-sup");
  textElement.style.color = getRandomDarkColor();
});


//CHECK CONNECTION

function checkConnection() {
  if (!navigator.onLine) {
    document.getElementById("main-loader").style.display = "block";
  } else {
    fetchData();
  }
}

setInterval(() => {
  checkConnection();
}, 100);


//FETCH DATA USING API

function fetchData() {
  fetch("https://fakestoreapi.in/api/products/category?type=mobile&limit=6")
    .then((response) => response.json())
    .then((data) => {
      let output = "";
      data.products.map((data, index) => {
        output += `
      <div class="mobile-cont item${index + 1}" loading="lazy">
        <div class="gaming-cont-image">
          <img src="${data.image}">
        </div>
        <p>${data.title}</p>
        <div class="mobile-section-price">
          <p>From ₹${data.price * 100}*</p>
        </div>
      </div>`;
      });
      document.querySelector(".mobile-section-row").innerHTML = output;
      document.getElementById("main-loader").style.display = "none";
      document.getElementById("section-one").style.display = "block";
      document.getElementById("main-footer").style.display = "block";
    })
    .catch((error) => console.error("Error fetching data:", error));

  fetch(
    "https://fakestoreapi.in/api/products/category?type=laptop&limit=6&skip=4"
  )
    .then((response) => response.json())
    .then((data) => {
      let output = "";
      data.products.map((data, index) => {
        output += `
      <div class="laptop-cont item${index + 1}" loading="lazy">
        <div class="gaming-cont-image">
           <img loading="lazy" src="${data.image}">
        </div>
        <p>${data.title}</p>
        <div class="mobile-section-price">
          <p>From ₹${data.price * 100}*</p>
        </div>
      </div>`;
      });

      document.querySelector(".laptop-section-row").innerHTML = output;
    })
    .catch((error) => console.error("Error fetching data:", error));

  fetch("https://fakestoreapi.in/api/products/category?type=audio&limit=6")
    .then((response) => response.json())
    .then((data) => {
      let output = "";
      data.products.map((data, index) => {
        output += `
          <div class="audio-cont item${index + 1}" loading="lazy">
            <div class="gaming-cont-image">
              <img loading="lazy" src="${data.image}">
            </div>
            <p>${data.title}</p>
            <div class="mobile-section-price">
              <p>From ₹${data.price * 100}*</p>
            </div>
          </div>`;
      });

      document.querySelector(".audio-section-row").innerHTML = output;
    })
    .catch((error) => console.error("Error fetching data:", error));

  fetch("https://fakestoreapi.in/api/products/category?type=tv&limit=6")
    .then((response) => response.json())
    .then((data) => {
      let output = "";
      data.products.map((data, index) => {
        output += `
          <div class="tv-cont item${index + 1}" loading="lazy">
           <div class="gaming-cont-image">
              <img loading="lazy" src="${data.image}">
            </div>
            <p>${data.title}</p>
            <div class="mobile-section-price">
             <p>From ₹${data.price * 100}*</p>
            </div>
          </div>`;
      });

      document.querySelector(".tv-section-row").innerHTML = output;
    })
    .catch((error) => console.error("Error fetching data:", error));

  fetch("https://fakestoreapi.in/api/products/category?type=appliances&limit=6")
    .then((response) => response.json())
    .then((data) => {
      let output = "";
      data.products.map((data, index) => {
        output += `
          <div class="gaming-cont item${index + 1}" loading="lazy">
            <div class="gaming-cont-image">
               <img src="${data.image}">
            </div>
            <p>${data.title}</p>
            <div class="mobile-section-price">
              <p>From ₹${data.price * 100}*</p>
            </div>
          </div>`;
      });

      document.querySelector(".gaming-section-row").innerHTML = output;
    })
    .catch((error) => console.error("Error fetching data:", error));
}


//OFFER SECTION
document.getElementById("offer-section-icon").addEventListener("click", () => {
  document.getElementById("offer-section").style.display = "none";
});

window.addEventListener("scroll", (event) => {
  if(window.scrollY>2200){
    document.getElementById("offer-section").style.display = "none";
  }
});


//SCROLL TO TOP

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

