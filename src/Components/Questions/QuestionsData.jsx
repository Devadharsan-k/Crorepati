export const QuestionsData = [
  {
    id: 1,
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Highly Typed Machine Learning", correct: false },
      { text: "Home Tool Management Language", correct: false },
      { text: "Hyperlink and Text Management Language", correct: false },
    ],
  },
  {
    id: 2,
    question: "Which HTML tag is used for creating a hyperlink?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false },
    ],
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    answers: [
      { text: "Counter Strike: Source", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Creative Style Sheets", correct: false },
    ],
  },
  {
    id: 4,
    question: "Which CSS property is used to change the text color?",
    answers: [
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "font-color", correct: false },
      { text: "style-color", correct: false },
    ],
  },
  {
    id: 5,
    question: "In HTML, what does the 'DOCTYPE' declaration do?",
    answers: [
      { text: "Defines the document type and version of HTML", correct: true },
      { text: "Declares a new HTML element", correct: false },
      { text: "Specifies the document's title", correct: false },
      { text: "Includes an external JavaScript file", correct: false },
    ],
  },
  {
    id: 6,
    question: "What is the purpose of the 'display' property in CSS?",
    answers: [
      { text: "Controls the visibility of an element", correct: false },
      {
        text: "Specifies the positioning method of an element",
        correct: false,
      },
      { text: "Defines how an element should be displayed", correct: true },
      { text: "Sets the background color of an element", correct: false },
    ],
  },
  {
    id: 7,
    question: "What is the primary role of React in web development?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: "Handling server-side logic", correct: false },
      { text: "Building user interfaces", correct: true },
      { text: "Managing databases", correct: false },
    ],
  },
  {
    id: 8,
    question: "In React, what is the purpose of 'props'?",
    answers: [
      { text: "To store component styles", correct: false },
      { text: "To manage component state", correct: false },
      {
        text: "To pass data from a parent component to a child component",
        correct: true,
      },
      { text: "To define component structure", correct: false },
    ],
  },
  {
    id: 9,
    question: "Which CSS selector has the highest specificity?",
    answers: [
      { text: "Class selector (e.g., .example)", correct: false },
      { text: "ID selector (e.g., #myElement)", correct: true },
      { text: "Element selector (e.g., p)", correct: false },
      { text: "Attribute selector (e.g., [type='text'])", correct: false },
    ],
  },
  {
    id: 10,
    question: "What is the purpose of the 'useEffect' hook in React?",
    answers: [
      { text: "To handle user input events", correct: false },
      { text: "To manage component state", correct: false },
      {
        text: "To perform side effects in functional components",
        correct: true,
      },
      { text: "To define the layout of a component", correct: false },
    ],
  },
  {
    id: 11,
    question: "How can you center an element horizontally in CSS?",
    answers: [
      { text: "text-align: center;", correct: false },
      { text: "margin: auto;", correct: true },
      { text: "float: center;", correct: false },
      { text: "position: center;", correct: false },
    ],
  },
  {
    id: 12,
    question: "What is the purpose of the 'aria-roles' attribute in HTML?",
    answers: [
      {
        text: "To specify the role of an HTML element for accessibility",
        correct: true,
      },
      {
        text: "To define the alignment of text within an element",
        correct: false,
      },
      { text: "To declare a custom attribute for styling", correct: false },
      { text: "To indicate the order of elements in the DOM", correct: false },
    ],
  },
  {
    id: 13,
    question: "In React, what is a controlled component?",
    answers: [
      { text: "A component that is managed by the React team", correct: false },
      {
        text: "A component with internal state managed by React",
        correct: true,
      },
      { text: "A component that is displayed conditionally", correct: false },
      { text: "A component that is rendered without JSX", correct: false },
    ],
  },
  {
    id: 14,
    question: "What is the purpose of the 'z-index' property in CSS?",
    answers: [
      { text: "To control the order of elements in the z-axis", correct: true },
      { text: "To set the font size of an element", correct: false },
      { text: "To define the spacing between elements", correct: false },
      { text: "To adjust the opacity of an element", correct: false },
    ],
  },
  {
    id: 15,
    question: "What is the purpose of the 'key' prop in React lists?",
    answers: [
      { text: "To identify elements in a list uniquely", correct: true },
      { text: "To set the initial state of a component", correct: false },
      { text: "To specify the order of elements in a list", correct: false },
      { text: "To apply conditional rendering to list items", correct: false },
    ],
  },
];
