const storiesContainer = document.querySelector(".stories-container");
const storyFull = document.querySelector(".story-full");
const storyFullImage = document.querySelector(".story-full img");
const storyFullTitle = document.querySelector(".story-full .title");
const closeBtn = document.querySelector(".story-full .close-btn");
const leftArrow = document.querySelector(".story-full .left-arrow");
const rightArrow = document.querySelector(".story-full .right-arrow");

let currentIndex = 0;
let timer;



const allStories = [
  {
    thumbUrl: "images/1-thumb.jpg",
    imageUrl: "images/1.jpg",
    title: "Jane Doe",
  },

  {
    thumbUrl: "images/2-thumb.jpg",
    imageUrl: "images/2.jpg",
    title: "Paino",
  },

  {
    thumbUrl: "images/3-thumb.jpg",
    imageUrl: "images/3.jpg",
    title: "Street in Italy",
  },

  {
    thumbUrl: "images/4-thumb.jpg",
    imageUrl: "images/4.jpg",
    title: "La pa Don Tower",
  },

  {
    thumbUrl: "images/5-thumb.jpg",
    imageUrl: "images/5.jpg",
    title: "Redish Skies",
  },

  {
    thumbUrl: "images/6-thumb.jpg",
    imageUrl: "images/6.jpg",
    title: "Balcony Dog",
    
  },

  {
    thumbUrl: "images/7-thumb.jpg",
    imageUrl: "images/7.jpg",
    title: "Germany",
    
  },

  {
    thumbUrl: "images/8-thumb.jpg",
    imageUrl: "images/8.jpg",
    title: "African Model",
    
  },
  
  {
    thumbUrl: "images/9-thumb.jpg",
    imageUrl: "images/9.jpg",
    title: "Octagon Building",
   
  },
  
  {
    thumbUrl: "images/10-thumb.jpg",
    imageUrl: "images/10.jpg",
    title: "Indian",
  },
  
  {
    thumbUrl: "images/11-thumb.jpg",
    imageUrl: "images/11.jpg",
    title: "Parriot",
  },
  
  {
    thumbUrl: "images/12-thumb.jpg",
    imageUrl: "images/12.jpg",
    title: "Deer",
  },
  
  {
    thumbUrl: "images/13-thumb.jpg",
    imageUrl: "images/13.jpg",
    title: "China Town",
  },
  
  {
    thumbUrl: "images/16-thumb.jpg",
    imageUrl: "images/16.jpg",
    title: "Model",
  },
  
  {
    thumbUrl: "images/15-thumb.jpg",
    imageUrl: "images/15.jpg",
    title: "Actress",
  },
  {
    thumbUrl: "images/16-thumb.jpg",
    imageUrl: "images/16.jpg",
    title: "Actress",
  },
  {
    thumbUrl: "images/17-thumb.jpg",
    imageUrl: "images/17.jpg",
    title: "Actress",
  },
];


allStories.forEach((s, i) => {
  const content = document.createElement("div");
  content.classList.add("content");

  const img = document.createElement("img");
  img.setAttribute("src", s.thumbUrl);

  storiesContainer.appendChild(content);
  content.appendChild(img);

  content.addEventListener("click", () => {
    currentIndex = i;
    storyFull.classList.add("active");
    storyFullImage.setAttribute("src", s.imageUrl);

    if (!s.title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = s.title;
    }

    clearInterval(timer);
    timer = setInterval(nextStory, 5000);
  });
});

closeBtn.addEventListener("click", () => {
  storyFull.classList.remove("active");
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;

    storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);

    if (!allStories[currentIndex].title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = allStories[currentIndex].title;
    }

    clearInterval(timer);
    timer = setInterval(nextStory, 5000);
  }
});

const nextStory = () => {
  if (currentIndex < allStories.length - 1) {
    currentIndex += 1;

    storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);

    if (!allStories[currentIndex].title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = allStories[currentIndex].title;
    }
  }
};

rightArrow.addEventListener("click", () => {
  nextStory();
  clearInterval(timer);
  timer = setInterval(nextStory, 5000);
});
