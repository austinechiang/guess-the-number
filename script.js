let secretNumber = Math.floor(Math.random() *100) + 1;
let attemptsLeft = 5;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const resultText = document.getElementById("resultText");
const attemptCount = document.getElementById("attemptCount");
const restartButton = document.getElementById("restartButton");

function handleGuess() {
    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 100) {
        resultText.textContent = "bro i say enter a number between 1 and 100 >:("
        return;
    }

    if (guess === secretNumber) {
        resultText.textContent = "you are right :D!!";
        guessButton.disabled = true;
        restartButton.style.display = "block";
    } else {
        attemptsLeft--;
        if (attemptsLeft <=0) {
            resultText.textContent = `hahahaha u didn't get it, the answer is ${secretNumber}`;
            guessButton.disabled = true;
            restartButton.style.display = "block";
        } else {
            resultText.textContent = guess < secretNumber ? "too small, try again ><" : "too big, try again ><";
            attemptCount.textContent = `still have ${attemptsLeft} chance(s)`
        }
    }

    guessInput.value = "";
    guessInput.focus();
}

guessButton.addEventListener("click", handleGuess);

// Add Enter key support
guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleGuess();
    }
});

restartButton.addEventListener("click", function () {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 5;
    resultText.textContent = "plz start";
    attemptCount.textContent = "still have 5 chances";
    guessButton.disabled = false;
    restartButton.style.display = "none";
});