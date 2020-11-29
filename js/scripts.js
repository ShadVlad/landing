const entities = [
  {
    city: "Rostov-on-Don<br />LCD admiral",
    square: "81 m2",
    time: "3.5 months",
    img: "img/project1.png",
  },
  {
    city: "Sochi<br />Thieves",
    square: "105 m2",
    time: "4 months",
    img: "img/project2.png",
  },
  {
    city: "Rostov-on-Don<br />Patriotic",
    square: "93 m2",
    time: "3 months",
    img: "img/project3.png",
  },
];
const img = document.querySelector(".projects-photo");
const city = document.querySelectorAll(".projects-data")[0];
const square = document.querySelectorAll(".projects-data")[1];
const time = document.querySelectorAll(".projects-data")[2];
const prev = document.querySelector(".projects-arrow-left");
const next = document.querySelector(".projects-arrow-right");
const items = document.querySelectorAll(".projects-list-item");
const circles = document.querySelectorAll(".circle");
let currentIndex = 0;
let index = 0;
let entitiesLength = entities.length;

const setEntity = (index) => {
  city.innerHTML = entities[index].city;
  square.innerHTML = entities[index].square;
  time.innerHTML = entities[index].time;
  img.src = entities[index].img;
  items.forEach((item) => {
    item.style.color = "#5a5a5a";
  });
  items[index].style.color = "#e3b873";
};

// clicking on arrows

prev.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = entitiesLength - 1;
  } else {
    currentIndex -= 1;
  }
  setEntity(currentIndex);
  circles.forEach((circle) => {
    circle.className = "circle";
  });
  circles[currentIndex].className += " active";
});

next.addEventListener("click", () => {
  if (currentIndex === entitiesLength - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  setEntity(currentIndex);
  circles.forEach((circle) => {
    circle.className = "circle";
  });
  circles[currentIndex].className += " active";
});

// Clicking on links
items.forEach((item, i) => {
  item.addEventListener("click", () => {
    items.forEach((item) => {
      item.style.color = "#5a5a5a";
    });
    currentIndex = i;
    setEntity(currentIndex);
    circles.forEach((circle) => {
      circle.className = "circle";
    });
    circles[currentIndex].className += " active";
  });
});

// Clicking on dots

circles.forEach((circle, i) => {
  circle.addEventListener("click", () => {
    circles.forEach((circle) => {
      circle.className = "circle";
    });
    circles[i].className += " active";
    currentIndex = i;
    setEntity(currentIndex);
  });
});
