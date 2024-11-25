// List of words and their corresponding Malayalam translations and audio files
const lessons = [
  { english: "Hello", malayalam: "നമസ്കാരം (Namaskaaram)", audio: "lesson1audio/Hello.mp3" },
  { english: "How are you", malayalam: "സുഖമാണോ? (Sukhamaano?)", audio: "lesson1audio/how_are_you.mp3" },
  { english: "Good morning", malayalam: "സുപ്രഭാതം (Suprabhaatham)", audio: "lesson1audio/good_morning.mp3" },
  { english: "Good night", malayalam: "ശുഭ രാത്രി (Shubha raathri)", audio: "lesson1audio/good_night.mp3" },
  { english: "Please", malayalam: "ദയവായി (Dayavaayi)", audio: "lesson1audio/please.mp3" },
  { english: "Thank you", malayalam: "നന്ദി (Nandi)", audio: "lesson1audio/thank_you.mp3" },
  { english: "Excuse me / Sorry", malayalam: "ക്ഷമിക്കണം (Kshamikkanam)", audio: "lesson1audio/excuse_me.mp3" },
  { english: "Welcome", malayalam: "സുഖമായിരിക്കുക (Sukhamaayirikkuka)", audio: "lesson1audio/welcome.mp3" },
  { english: "Goodbye", malayalam: "വിട (Vida)", audio: "lesson1audio/goodbye.mp3" },
  { english: "Best wishes", malayalam: "ആശംസകൾ (Aashamsakal)", audio: "lesson1audio/best_wishes.mp3" },
  { english: "Be Healthy", malayalam: "ആരോഗ്യം (Arogyam)", audio: "lesson1audio/health.mp3" },
  { english: "Yes", malayalam: "അതെ (Athe)", audio: "lesson1audio/yes.mp3" },
  { english: "No", malayalam: "ഇല്ല (Illa)", audio: "lesson1audio/no.mp3" },
  { english: "Do you know where the bathroom is?", malayalam: "കുളിമുറി എവിടെയാണെന്ന് അറിയാമോ (Kulimuri evideyanennu ariyamo?)", audio: "lesson1audio/restroom.mp3" }
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

// Function to load the next word
function nextWord() {
  currentIndex++;
  if (currentIndex < lessons.length) {
    updateLesson();
  } else {
    showCongratulationsMessage();
  }
}

// Function to update the lesson content
function updateLesson() {
  englishWordElement.textContent = lessons[currentIndex].english;
  malayalamWordElement.textContent = lessons[currentIndex].malayalam;
}

// Function to show a congratulations message
function showCongratulationsMessage() {
  const container = document.querySelector(".lesson-container");
  container.innerHTML = `<p class="congratulations-message">Congratulations! You have completed your very first lesson in Malayalam!</p>`;
}

// Event listeners
playAudioButton.addEventListener("click", playAudio);
nextWordButton.addEventListener("click", nextWord);

// Initialize the first word
updateLesson();
