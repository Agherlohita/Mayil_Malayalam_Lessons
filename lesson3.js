let currentQuestionIndex = 0;
let hearts = 5;

const TICK_MARK = "✔️";
const CROSS_MARK = "❌";

const questions = [
  {
    // Question 1
    question: "Which one of the following audio means 'Please'?",
    options: [
      { text: "ദയവായി (Dayavaayi)", audio: "lesson1audio/please.mp3" },
      { text: "ആശംസകൾ (Aashamsakal)", audio: "lesson1audio/best_wishes.mp3" },
    ],
    correct: 0,
  },
  {
    // Question 2
    question: "What does this audio mean?",
    options: [
      { text: "Goodbye" },
      { text: "Thank You" },
    ],
    audio: "lesson1audio/thank_you.mp3",
    correct: 1,
  },
  {
    // Question 3
    question: "Which one of the following audio means 'No'?",
    options: [
      { text: "ഇല്ല (Illa)", audio: "lesson1audio/no.mp3" },
      { text: "ആരോഗ്യം (Arogyam)", audio: "lesson1audio/health.mp3" },
    ],
    correct: 0,
  },
  {
    // Question 4
    question: "What does this audio mean?",
    options: [
      { text: "Hello" },
      { text: "Good Morning" },
    ],
    audio: "lesson1audio/good_morning.mp3",
    correct: 1,
  },
  {
    // Question 5
    question: "Which one of the following audio means 'Do you know where the bathroom is'?",
    options: [
      { text: "കുളിമുറി എവിടെയാണെന്ന് അറിയാമോ (Kulimuri evideyanennu ariyamo?)", audio: "lesson1audio/restroom.mp3" },
      { text: "ക്ഷമിക്കണം (Kshamikkanam)", audio: "lesson1audio/excuse_me.mp3" },
    ],
    correct: 0,
  },
  {
    // Question 6
    question: "What does this audio mean?",
    options: [
      { text: "Grandfather" },
      { text: "Father" },
    ],
    audio: "lesson2audio/father.mp3",
    correct: 1,
  },
  {
    // Question 7
    question: "Which one of the following audio means 'Woman'?",
    options: [
      { text: "സ്ത്രീ (Sthree)", audio: "lesson2audio/woman.mp3" },
      { text: "പെൺകുട്ടി (Pennkuti)", audio: "lesson2audio/girl.mp3" },
    ],
    correct: 0,
  },
  {
    // Question 8
    question: "What does this audio mean?",
    options: [
      { text: "Pen" },
      { text: "Table" },
    ],
    audio: "lesson2audio/table.mp3",
    correct: 1,
  },
  {
    // Question 9
    question: "Which one of the following audio means 'Sugar'?",
    options: [
      { text: "പഞ്ചസാര (Panchasara)", audio: "lesson2audio/sugar.mp3" },
      { text: "കസേര (Kasera)", audio: "lesson2audio/chair.mp3" },
    ],
    correct: 0,
  },
  {
    // Question 10
    question: "What does this audio mean?",
    options: [
      { text: "Butter" },
      { text: "House" },
    ],
    audio: "lesson2audio/house.mp3",
    correct: 1,
  },
];

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const answersContainer = document.getElementById("answers-container");
    const resultMessage = document.getElementById("result-message");
    const nextButton = document.getElementById("next-btn");
  
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = question.question;
    answersContainer.innerHTML = "";
    resultMessage.textContent = "";
  
    // Add audio button for questions with audio
    if (question.audio) {
      const audioButton = document.createElement("button");
      audioButton.textContent = "🔊 Play Audio";
      audioButton.onclick = () => playAudio(question.audio);
      answersContainer.appendChild(audioButton);
    }
  
    // Create answer buttons
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option.text;
      button.classList.add("answer-btn");
  
      // Handle audio for odd-numbered questions
      if (option.audio) {
        button.onclick = () => playAudio(option.audio);
      }
  
      button.addEventListener("click", () => checkAnswer(index, button));
      answersContainer.appendChild(button);
    });
  
    nextButton.style.display = "none"; // Hide Next button initially
  }
  
  function playAudio(audioPath) {
    const audio = new Audio(audioPath);
    audio.play();
  }
  
  function checkAnswer(selectedIndex, button) {
    const question = questions[currentQuestionIndex];
    const resultMessage = document.getElementById("result-message");
    const heartsContainer = document.getElementById("hearts-container");
  
    // Handle correct answer
    if (selectedIndex === question.correct) {
      resultMessage.innerHTML = `<span class="correct">${TICK_MARK} Correct!</span>`;
      button.classList.add("correct-answer");
    } else {
      // Handle incorrect answer
      resultMessage.innerHTML = `<span class="incorrect">${CROSS_MARK} Incorrect!</span>`;
      button.classList.add("wrong-answer");
      hearts--;
      updateHearts(heartsContainer);
    }
  
    // Check if hearts are exhausted
    if (hearts === 0) {
      alert("Uhh oh! Try again please!");
      location.reload(); // Reset the lesson
    }
  
    document.getElementById("next-btn").style.display = "block"; // Show Next button
  }
  
  function updateHearts(container) {
    container.innerHTML = "❤️".repeat(hearts) + "🖤".repeat(5 - hearts);
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert("Congratulations! You have completed the 3rd lesson successfully.");
      location.reload(); // Reset the lesson
    }
  }
  
  // Initialize the lesson
  document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.getElementById("hearts-container");
    updateHearts(heartsContainer);
    loadQuestion();
  });