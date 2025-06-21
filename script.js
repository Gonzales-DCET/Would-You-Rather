const coreQuestions = [
  // Funny & Silly
  "Would you rather always talk in rhymes or sing everything you say?",
  "Would you rather have spaghetti hair or maple syrup sweat?",
  "Would you rather fight 1 horse-sized duck or 100 duck-sized horses?",
  "Would you rather only be able to whisper or only be able to shout?",
  "Would you rather wear clown shoes every day or a clown nose forever?",
  "Would you rather sneeze glitter or fart bubbles?",
  "Would you rather have a tail like a dog or ears like an elephant?",
  "Would you rather hiccup every time you laugh or burp every time you speak?",
  "Would you rather have noodles for fingers or balloons for toes?",
  "Would you rather be chased by angry bees or a slow zombie for 24 hours?",

  // Personal & Deep
  "Would you rather be loved by many or truly understood by a few?",
  "Would you rather live a long life without excitement or a short one full of adventure?",
  "Would you rather forget your most cherished memory or never make new ones?",
  "Would you rather know the date of your death or the cause?",
  "Would you rather always say what you think or never be able to speak again?",
  "Would you rather be completely alone forever or always surrounded by people you dislike?",
  "Would you rather find true love or win the lottery?",
  "Would you rather relive your worst day or forget your best?",
  "Would you rather be famous but hated or unknown but loved by all you meet?",
  "Would you rather give up your dreams or your family?",

  // Fantasy & Fictional
  "Would you rather live in a zombie apocalypse or a robot uprising?",
  "Would you rather be a wizard or a superhero?",
  "Would you rather breathe underwater or fly?",
  "Would you rather have a dragon or be a dragon?",
  "Would you rather visit Hogwarts or Middle Earth?",
  "Would you rather time travel to the past or the future?",
  "Would you rather be able to pause time or rewind time?",
  "Would you rather be a vampire or a werewolf?",
  "Would you rather live in a video game or a movie?",
  "Would you rather be trapped in a horror movie or a romantic comedy?",

  // Thought-Provoking
  "Would you rather always know the truth or be blissfully ignorant?",
  "Would you rather change one thing about the world or about yourself?",
  "Would you rather lose all your money or all your memories?",
  "Would you rather be feared or respected?",
  "Would you rather be stuck in a simulation or not know if life is real?",
  "Would you rather learn every language or master every instrument?",
  "Would you rather be able to read minds or control emotions?",
  "Would you rather save 100 strangers or 1 loved one?",
  "Would you rather have more time or more money?",
  "Would you rather be forgotten or remembered for something bad?",

  // Career & Life
  "Would you rather have your dream job with low pay or a boring job with high pay?",
  "Would you rather be your own boss or work for someone you admire?",
  "Would you rather be famous in your field or unknown but influential?",
  "Would you rather work 4 days a week for 10 hours or 6 days for 6 hours?",
  "Would you rather always work indoors or outdoors?",
  "Would you rather retire early and live simply or work longer and live luxuriously?",
  "Would you rather fail at something you love or succeed at something you hate?",
  "Would you rather lead or follow?",
  "Would you rather be the smartest person in the room or the most charming?",
  "Would you rather commute 2 hours to your dream job or work from home at a boring one?",

  // Relationships & Social
  "Would you rather be ghosted or rejected directly?",
  "Would you rather date someone with no sense of humor or no ambition?",
  "Would you rather find love online or through friends?",
  "Would you rather date someone exactly like you or your total opposite?",
  "Would you rather never be lied to or never be jealous?",
  "Would you rather have a partner who’s extremely rich or extremely kind?",
  "Would you rather be heartbroken once or never fall in love?",
  "Would you rather have no social media or no real-life friends?",
  "Would you rather go on a blind date or a group date?",
  "Would you rather marry your best friend or someone you’re insanely attracted to?",

  // Travel & Adventure
  "Would you rather travel the world for free or eat at any restaurant for free?",
  "Would you rather hike a mountain or dive in the ocean?",
  "Would you rather visit every country once or one favorite place multiple times?",
  "Would you rather travel alone or with a group of strangers?",
  "Would you rather live abroad or take a world tour?",
  "Would you rather live in a cabin in the woods or a high-rise in a city?",
  "Would you rather experience new cultures or new cuisines?",
  "Would you rather go skydiving or scuba diving?",
  "Would you rather backpack or cruise?",
  "Would you rather travel back to your favorite trip or to a place you’ve never been?",

  // Chill & Lifestyle
  "Would you rather always have slow internet or low phone battery?",
  "Would you rather never watch TV again or never listen to music again?",
  "Would you rather have unlimited clothes or unlimited gadgets?",
  "Would you rather always be 10 minutes late or 30 minutes early?",
  "Would you rather live without coffee or without soda?",
  "Would you rather binge-watch forever or read forever?",
  "Would you rather be too hot or too cold?",
  "Would you rather do all the cooking or all the cleaning?",
  "Would you rather sleep for 4 hours and feel rested or 10 hours and feel tired?",
  "Would you rather have a robot assistant or a self-driving car?",

  // Just for Fun & Random
  "Would you rather always win arguments or always win games?",
  "Would you rather teleport anywhere or be invisible at will?",
  "Would you rather be stuck in a mall or on an island for 24 hours?",
  "Would you rather be a famous TikToker or a YouTuber?",
  "Would you rather be rich and lonely or poor and popular?",
  "Would you rather have your dream house or your dream car?",
  "Would you rather never age physically or mentally?",
  "Would you rather get free snacks forever or free clothes forever?",
  "Would you rather be really tall or really short?",
  "Would you rather swap lives with a celebrity or a historical figure?",

  // Challenge & Extreme
  "Would you rather give up your phone for a year or take cold showers for a year?",
  "Would you rather lose all your teeth or all your hair?",
  "Would you rather go a week without eating or a week without sleeping?",
  "Would you rather live without light or without sound?",
  "Would you rather walk barefoot on Legos or on hot sand?",
  "Would you rather eat only spicy food or only sweet food?",
  "Would you rather be stuck in traffic for 5 hours or lose all your emails?",
  "Would you rather go viral for something embarrassing or never go viral at all?",
  "Would you rather live with no technology or no human contact?",
  "Would you rather have to always say what you think or never speak again?"
];

function isValidQuestion(question) {
  const lowerQuestion = question.toLowerCase();
  return lowerQuestion.startsWith("would you rather") && 
         lowerQuestion.replace("would you rather", "").trim().length > 0;
}

function getAllQuestions() {
  const userQuestions = JSON.parse(localStorage.getItem("userQuestions")) || [];
  return [...coreQuestions, ...userQuestions];
}

function getRandomQuestion() {
  const allQuestions = getAllQuestions();
  const randomIndex = Math.floor(Math.random() * allQuestions.length);
  return allQuestions[randomIndex];
}

function saveUserQuestion(question) {
  if (!isValidQuestion(question)) {
    return false;
  }
  const questions = JSON.parse(localStorage.getItem("userQuestions")) || [];
  questions.push(question);
  localStorage.setItem("userQuestions", JSON.stringify(questions));
  return true;
}
