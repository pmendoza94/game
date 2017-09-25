import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questions = [];
  question = {
    content: '',
    answer: '',
    fake1: '',
    fake2: ''
  }

  constructor(private _gameservice: GameService, private _router: Router) {
    this._gameservice.questionObserver.subscribe((questions) => {
      this.questions = questions
    })
   }

  ngOnInit() {
  }

  questionSubmit() {
    console.log('*** component - question ***')
    this._gameservice.createQuestion(this.question)
      console.log(this.question, '888888')
      this.questions.push(this.question)
      console.log('*** component ***')
      console.log(this.question)
      this.question = {
        content: '',
        answer: '',
        fake1: '',
        fake2: ''
      }
      this._router.navigate(['/'])
   }
}
