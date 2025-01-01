const questions = [
    {
      question: "What is Java?",
      options: ["A programming language", "A database", "A framework", "None of the above"],
      correct: 0
    },
    {
      question: "Which of these is a Python data type?",
      options: ["int", "float", "list", "All of the above"],
      correct: 3
    },
    {
      question: "What is the correct syntax for a C main function?",
      options: ["void main()", "int main()", "function main()", "None of the above"],
      correct: 1
    },
    {
      question: "Which keyword is used to define a class in C++?",
      options: ["class", "define", "struct", "object"],
      correct: 0
    },
    {
      question: "Which of the following is used to compile a Java program?",
      options: ["javac", "python", "gcc", "javap"],
      correct: 0
    },
    {
      question: "In Python, what is the result of 3 ** 2?",
      options: ["6", "9", "27", "3^2"],
      correct: 1
    },
    {
      question: "What is the output of the following C code: printf('%d', 5 + 2 * 3);",
      options: ["11", "21", "15", "5"],
      correct: 0
    },
    {
      question: "Which operator is used for inheritance in C++?",
      options: ["extends", ":", "inherits", "super"],
      correct: 1
    },
    {
      question: "Which data type is used for a decimal number in Java?",
      options: ["int", "float", "double", "char"],
      correct: 2
    },
    {
      question: "In Python, which method is used to add an element to the end of a list?",
      options: ["append()", "add()", "insert()", "extend()"],
      correct: 0
    },
    {
      question: "Which of these is a correct way to define a string in C++?",
      options: ['"Hello"', "Hello", 'String("Hello")', 'String Hello'],
      correct: 0
    },
    {
      question: "Which Java keyword is used to declare a constant?",
      options: ["const", "final", "constant", "static"],
      correct: 1
    },
    {
      question: "Which of the following is a valid way to declare a pointer in C?",
      options: ["int *ptr;", "int ptr;", "pointer int;", "int ptr*;"],
      correct: 0
    },
    {
      question: "In Python, what does the 'len()' function return?",
      options: ["The length of a string", "The sum of a list", "The length of a list", "The last element of a list"],
      correct: 2
    },
    {
      question: "What is the correct way to create a constructor in C++?",
      options: ["void constructor()", "constructor()", "ClassName()", "function ClassName()"],
      correct: 2
    },
    {
      question: "What is the correct syntax for an 'if' statement in Java?",
      options: ["if condition", "if (condition)", "if {condition}", "if [condition]"],
      correct: 1
    },
    {
      question: "Which operator is used to compare two values in C?",
      options: ["==", "=", "===", "!="],
      correct: 0
    },
    {
      question: "What is the default value of an uninitialized local variable in Java?",
      options: ["null", "0", "undefined", "No default value"],
      correct: 3
    }
  ];
  
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").innerText = question.question;
    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
      option.innerText = question.options[index];
      option.style.backgroundColor = "transparent"; // Reset color
    });
    document.getElementById("next-button").disabled = true;
  }
  
  function selectOption(index) {
    const question = questions[currentQuestion];
    const options = document.querySelectorAll(".option");
    options.forEach((option, i) => {
      if (i === index) {
        option.style.backgroundColor = "#FF4081"; // Color change for selected option
      } else {
        option.style.backgroundColor = "transparent"; // Reset others
      }
    });
    if (index === question.correct) {
      score++;
    }
    document.getElementById("next-button").disabled = false;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      const resultText = (score === questions.length)
        ? "Congratulations! You got all answers correct."
        : `You got ${score} out of ${questions.length} correct.`;
      document.getElementById("result").innerText = resultText;
      document.getElementById("result").classList.add(score === questions.length ? "congrats" : "");
    }
  }
  
  window.onload = displayQuestion;
  