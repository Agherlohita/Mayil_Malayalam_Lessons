// Corrected JavaScript for Lesson 2

const lessons = [
    { english: "Girl", malayalam: "പെൺകുട്ടി (Penkutti)", audio: "lesson2audio/girl.mp3" },
    { english: "Boy", malayalam: "കുട്ടി (Kutti)", audio: "lesson2audio/boy.mp3" },
    { english: "Woman", malayalam: "സ്ത്രീ (Sthree)", audio: "lesson2audio/woman.mp3" },
    { english: "Man", malayalam: "പുരുഷൻ (Purushan)", audio: "lesson2audio/man.mp3" },
    { english: "Father", malayalam: "അച്ഛൻ (Achan)", audio: "lesson2audio/father.mp3" },
    { english: "Mother", malayalam: "അമ്മ (Amma)", audio: "lesson2audio/mother.mp3" },
    { english: "Sister", malayalam: "സഹോദരി (Sahodari)", audio: "lesson2audio/sister.mp3" },
    { english: "Brother", malayalam: "സഹോദരൻ (Sahodaran) or അണ്ണൻ (Annan - for elder brother)", audio: "lesson2audio/brother.mp3" },
    { english: "Grandfather", malayalam: "മുത്തച്ഛൻ (Muthachan)", audio: "lesson2audio/grandfather.mp3" },
    { english: "Grandmother", malayalam: "മുത്തശ്ശി (Muthashi)", audio: "lesson2audio/grandmother.mp3" },
    { english: "Book", malayalam: "പുസ്തകം (Pusthakam)", audio: "lesson2audio/book.mp3" },
    { english: "Pen", malayalam: "പേന (Pena)", audio: "lesson2audio/pen.mp3" },
    { english: "Chair", malayalam: "കസേര (Kasera)", audio: "lesson2audio/chair.mp3" },
    { english: "Table", malayalam: "മേശ (Mesa)", audio: "lesson2audio/table.mp3" },
    { english: "House", malayalam: "വീട് (Veedu)", audio: "lesson2audio/house.mp3" },
    { english: "Cup", malayalam: "കപ്പ് (Kappu)", audio: "lesson2audio/cup.mp3" },
    { english: "Tea", malayalam: "ചായ (Chaaya)", audio: "lesson2audio/tea.mp3" },
    { english: "Sugar", malayalam: "പഞ്ചസാര (Panchasaara)", audio: "lesson2audio/sugar.mp3" },
    { english: "Salt", malayalam: "ഉപ്പ് (Uppu)", audio: "lesson2audio/salt.mp3" },
    { english: "Butter", malayalam: "വെണ്ണ (Venna)", audio: "lesson2audio/butter.mp3" }
  ];
  
  let currentIndex = 0;
  
  const englishWordElement = document.getElementById("english-word");
  const malayalamWordElement = document.getElementById("malayalam-word");
  const playAudioButton = document.getElementById("play-audio-button");
  const nextWordButton = document.getElementById("next-word-button");
  
  // Function to play the audio
  function playAudio() {
    const audio = new Audio(lessons[currentIndex].audio);
    audio.play();
  }
  
  // Function to move to the next word
  function nextWord() {
    currentIndex++;
    if (currentIndex < lessons.length) {
      updateLesson();
    } else {
      showCongratulationsMessage();
    }
  }
  
  // Function to update the displayed word
  function updateLesson() {
    englishWordElement.textContent = lessons[currentIndex].english;
    malayalamWordElement.textContent = lessons[currentIndex].malayalam;
  }
  
  // Function to show congratulations message at the end of the lesson
  function showCongratulationsMessage() {
    const container = document.querySelector(".lesson-container");
    container.innerHTML = `
      <p class="congratulations-message">Congratulations! You have completed Lesson 2: Words for Daily Use!</p>
    `;
  }
  
  // Event listeners
  playAudioButton.addEventListener("click", playAudio);
  nextWordButton.addEventListener("click", nextWord);
  
  // Initialize the first word on page load
  updateLesson();
  