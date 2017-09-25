import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  questions = [];

  users = [];

  constructor(private _gameservice: GameService, private _route: ActivatedRoute) {
    this._gameservice.questionObserver.subscribe((questions) => {
      this.questions = questions
    })
    this._gameservice.retrieveQuestions();
   }

  ngOnInit() {

  }

}
