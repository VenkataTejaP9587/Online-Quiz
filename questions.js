const quizData = {
    "Python": {
      "Easy": [
        { q: "What is the output of print(2+3)?", options: ["23", "5", "2+3", "Error"], answer: "5" },
        { q: "Which keyword is used for functions?", options: ["def", "func", "function", "define"], answer: "def" },
        { q: "Which symbol is used for comments?", options: ["#", "//", "<!--", "/*"], answer: "#" },
        { q: "What is a correct file extension for Python?", options: [".py", ".python", ".pt", ".pyt"], answer: ".py" }
      ],
      "Medium": [
        { q: "Which of these is immutable?", options: ["List", "Tuple", "Dictionary", "Set"], answer: "Tuple" },
        { q: "What does len() return?", options: ["Size", "Length", "Value", "None"], answer: "Length" },
        { q: "Which function is used for output?", options: ["print()", "input()", "read()", "write()"], answer: "print()" },
        { q: "What is a lambda?", options: ["Keyword", "Function", "Operator", "Class"], answer: "Function" }
      ],
      "Hard": [
        { q: "Which of these is a generator?", options: ["[]", "()", "{}", "<>"], answer: "()" },
        { q: "What is the type of lambda x:x?", options: ["function", "lambda", "generator", "Error"], answer: "function" },
        { q: "What does zip() do?", options: ["Combines iterables", "Splits strings", "Adds items", "None"], answer: "Combines iterables" },
        { q: "Which is not a Python keyword?", options: ["yield", "assert", "none", "pass"], answer: "none" }
      ]
    },
    "AI": {
      "Easy": [
        { q: "AI stands for?", options: ["Artificial Intelligence", "Analog Interface", "App Interface", "None"], answer: "Artificial Intelligence" },
        { q: "Which is a type of AI?", options: ["Narrow AI", "Smart AI", "Core AI", "None"], answer: "Narrow AI" }
      ],
      "Medium": [
        { q: "Which algorithm is used for classification?", options: ["KNN", "DFS", "Dijkstra", "Bellman"], answer: "KNN" },
        { q: "Learning from data is called?", options: ["Deep Learning", "Machine Learning", "Data Mining", "None"], answer: "Machine Learning" }
      ],
      "Hard": [
        { q: "What is Q-Learning?", options: ["Reinforcement", "Clustering", "Classification", "None"], answer: "Reinforcement" },
        { q: "Backpropagation is used for?", options: ["Optimizing weights", "Scaling", "Creating data", "Bias"], answer: "Optimizing weights" }
      ]
    },
    "Web Dev": {
      "Easy": [
        { q: "HTML stands for?", options: ["HyperText Markup Language", "Home Tool Markup", "Hyperlink Text Mark", "None"], answer: "HyperText Markup Language" },
        { q: "CSS is used for?", options: ["Styling", "Scripting", "Markup", "None"], answer: "Styling" }
      ],
      "Medium": [
        { q: "Tag for link in HTML?", options: ["<a>", "<link>", "<href>", "<url>"], answer: "<a>" },
        { q: "Bootstrap is a?", options: ["CSS Framework", "JS Library", "Python Module", "None"], answer: "CSS Framework" }
      ],
      "Hard": [
        { q: "HTTP method to update data?", options: ["PUT", "POST", "GET", "DELETE"], answer: "PUT" },
        { q: "CORS means?", options: ["Cross-Origin Resource Sharing", "Control Origin Request Source", "None", "Custom Origin Role"], answer: "Cross-Origin Resource Sharing" }
      ]
    }
  };
  