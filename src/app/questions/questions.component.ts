import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions = [
    {
      id: 1,
      title: 'What does Css stand for?',
      choices: [
        { id: 1, title: 'Common Standard Style', isCorrect: false },
        { id: 2, title: 'Cascading Style Sheets', isCorrect: true },
        { id: 3, title: 'Correct Style Sheets', isCorrect: false },
        { id: 4, title: 'Common Standard Styling', isCorrect: false }
      ]
    },
    {
      id: 1,
      title: 'What does Css stand for?',
      choices: [
        { id: 1, title: 'Common Standard Style', isCorrect: false },
        { id: 2, title: 'Cascading Style Sheets', isCorrect: true },
        { id: 3, title: 'Correct Style Sheets', isCorrect: false },
        { id: 4, title: 'Common Standard Styling', isCorrect: false }
      ]
    },
    {
      id: 1,
      title: 'What does Css stand for?',
      choices: [
        { id: 1, title: 'Common Standard Style', isCorrect: false },
        { id: 2, title: 'Cascading Style Sheets', isCorrect: true },
        { id: 3, title: 'Correct Style Sheets', isCorrect: false },
        { id: 4, title: 'Common Standard Styling', isCorrect: false }
      ]
    },
    {
      id: 1,
      title: 'What does Css stand for?',
      choices: [
        { id: 1, title: 'Common Standard Style', isCorrect: false },
        { id: 2, title: 'Cascading Style Sheets', isCorrect: true },
        { id: 3, title: 'Correct Style Sheets', isCorrect: false },
        { id: 4, title: 'Common Standard Styling', isCorrect: false }
      ]
    }
  ];
  constructor() {

  }

  ngOnInit() {
  }

}
