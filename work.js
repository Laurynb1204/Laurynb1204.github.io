
  
  const buttons = document.querySelectorAll("[data-carousel-button]")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })
  
  
  const hamburger = document.querySelector(".hamburger");
  const files = document.querySelector(".files");
  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  const gridItem= document.querySelector(".grid_container");
  const videoPlayer = document.querySelector(".VideoPlayer");
    hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    files.classList.toggle("active");
    body.classList.toggle("active");
    gridItem.classList.toggle("active");
    //content.classList.toggle("active");
    //videoPlayer.classList.toggle("active");

  });

  document.querySelectorAll(".file_001").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    files.classList.remove("active");
    body.classList.remove("active");
    content.classList.remove("active");
    gridItem.classList.remove("active");
    videoPlayer.classList.remove("active");
  }))