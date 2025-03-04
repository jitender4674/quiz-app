# quiz-app

# Quiz App

## 📌 Overview
This is a simple **Quiz Application** built using **HTML, CSS, and JavaScript**. The app fetches quiz questions from a `data.json` file and allows users to answer multiple-choice questions. The score is displayed at the end of the quiz, and users can restart the quiz to play again.

## 🚀 Features
- Start Quiz functionality
- Displays questions with multiple-choice answers
- Highlights correct and incorrect answers
- Tracks and displays the final score
- Ability to restart the quiz
- Simple and clean UI design

## 📂 Project Structure
```
├── index.html        # Main HTML file
├── style.css         # Stylesheet
├── script.js         # JavaScript logic
├── data.json         # JSON file containing quiz questions (not included here)
```

## 🛠️ How to Use
### 1️⃣ Clone the repository
```sh
git clone <repository_url>
cd quiz-app
```

### 2️⃣ Open the project in VS Code
You can open it manually or run:
```sh
code .
```

### 3️⃣ Start a Local Server
Since the app fetches data from `data.json`, it requires a local server. You can use:
#### VS Code Live Server Extension (Recommended)
- Install the **Live Server** extension in VS Code.
- Right-click `index.html` → **Open with Live Server**.

#### OR Using Python (Alternative Method)
Run this command in the project folder:
```sh
python -m http.server
```
Then open `http://localhost:8000/` in your browser.

## 🎮 How to Play
1. Click **Start Quiz**.
2. Select an answer for each question.
3. Click **Next** to move to the next question.
4. The final score is displayed at the end.
5. Click **Restart Quiz** to play again!

## 📌 Technologies Used
- **HTML** – For structuring the web page.
- **CSS** – For styling and layout.
- **JavaScript** – For dynamic quiz logic.

## 📜 License
This project is open-source and available under the **MIT License**.

---
Feel free to contribute and improve this project! 😊

