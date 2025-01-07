/**********************************************
 * TIMELINE
 **********************************************/
// More interactive timeline using a full-width carousel.
// We’ll dynamically add slides to #timelineCarousel
const timelineData = [
  {
    year: "1950",
    title: "Constitution of India",
    text: "Guarantees equality before the law and equal protection of laws to all Indian citizens, including women.",
    image:
      "https://via.placeholder.com/1200x400?text=1950+-+Constitution+of+India",
  },
  {
    year: "1956",
    title: "Hindu Succession Act",
    text: "Gives women property rights and the right to inherit ancestral property.",
    image:
      "https://via.placeholder.com/1200x400?text=1956+-+Hindu+Succession+Act",
  },
  {
    year: "1975",
    title: "First National Policy for Women",
    text: "Focus on education, health, and welfare initiatives for women in rural and urban India.",
    image: "https://via.placeholder.com/1200x400?text=1975+-+Policy+for+Women",
  },
  {
    year: "1992",
    title: "73rd and 74th Amendments",
    text: "Ensures one-third reservation of seats for women in local governance (panchayats & municipalities).",
    image:
      "https://via.placeholder.com/1200x400?text=1992+-+Women+in+Local+Governance",
  },
  {
    year: "2013",
    title: "Criminal Law Amendment",
    text: "Stricter laws against sexual assault and harassment, a step forward in ensuring women’s safety.",
    image:
      "https://via.placeholder.com/1200x400?text=2013+-+Criminal+Law+Amendment",
  },
  {
    year: "2016",
    title: "Maternity Benefit Act",
    text: "Extended maternity leave to 26 weeks, making it one of the most progressive policies globally.",
    image:
      "https://via.placeholder.com/1200x400?text=2016+-+Maternity+Benefit+Act",
  },
];

function initTimeline() {
  const carouselInner = document.getElementById("timeline-carousel-inner");
  timelineData.forEach((item, index) => {
    // Create carousel item
    const carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;

    carouselItem.innerHTML = `
        <img src="${item.image}" class="d-block w-100" alt="${item.title}">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
          <h5>${item.year} - ${item.title}</h5>
          <p>${item.text}</p>
        </div>
      `;
    carouselInner.appendChild(carouselItem);
  });
}

/**********************************************
 * FLASHCARD QUIZ
 **********************************************/
const quizData = [
  {
    question:
      "What percentage of seats in local panchayats is reserved for women under the 73rd amendment?",
    answer: "Ans: At least 33% reservation for women.",
  },
  {
    question: "Which act extended maternity leave to 26 weeks in India?",
    answer: "Ans: The Maternity Benefit (Amendment) Act, 2016.",
  },
  {
    question: "Name the first woman IPS officer in India.",
    answer: "Ans: Kiran Bedi.",
  },
  {
    question:
      "Which constitutional article ensures equality for women in India?",
    answer: "Ans: Article 14 of the Indian Constitution.",
  },
  {
    question:
      "Which Indian leader spearheaded the women's education movement in Maharashtra?",
    answer: "Ans: Savitribai Phule.",
  },
];

function initFlashcardQuiz() {
  const quizCarouselInner = document.querySelector(
    "#quizCarousel .carousel-inner"
  );

  // Dynamically create flashcard carousel items
  quizData.forEach((card, index) => {
    const carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`; // First item is active

    carouselItem.innerHTML = `
        <div class="flashcard">
          <div class="flashcard-question">${card.question}</div>
          <div class="flashcard-answer">${card.answer}</div>
        </div>
      `;

    quizCarouselInner.appendChild(carouselItem);
  });

  // Add event listener to toggle answers
  const toggleAnswerBtn = document.getElementById("toggleAnswerBtn");
  toggleAnswerBtn.addEventListener("click", toggleAnswers);
}

// Toggle visibility of answers
function toggleAnswers() {
  const answers = document.querySelectorAll(".flashcard-answer");
  answers.forEach((answer) => {
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
}

// Initialize Flashcard Quiz
document.addEventListener("DOMContentLoaded", initFlashcardQuiz);

/**********************************************

 * GAMIFIED CHALLENGES
 **********************************************/
const userChallenges = {
  businessSupport: false,
  educationSponsor: false,
};

function updateChallenge(challengeKey) {
  userChallenges[challengeKey] = !userChallenges[challengeKey];
  // Example: update scoreboard or show popup
  console.log("Updated challenges:", userChallenges);
}

/**********************************************
 * VIDEO MODAL
 **********************************************/
function playVideo() {
  const modal = document.getElementById("video-modal");
  modal.style.display = "block";
}
function closeVideo() {
  const modal = document.getElementById("video-modal");
  modal.style.display = "none";
}

/**********************************************
 * ON LOAD
 **********************************************/
window.addEventListener("DOMContentLoaded", () => {
  initTimeline();
  initQuizCarousel();
});
