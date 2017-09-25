import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs';

@Injectable()
export class GameService {
  users = [];

  userObserver = new BehaviorSubject(this.users);

  questions = [];

  questionObserver = new BehaviorSubject(this.questions);

  constructor(private _http: Http) { }

  createUser(user) {
    console.log('*** service - createUser ***')
    return this._http.post('/create_user', user)
    .map( data => data.json() )
    .toPromise();
  }

  createQuestion(question) {
    console.log('*** service - createQuestion ***')
    return this._http.post('/create_question', question)
    .map( data => data.json() )
    .toPromise();
  }

  getQuestion() {
    console.log('******** service - getQuestion **********')
    return this._http.get('/create_questionn')
    .map( data => data.json() )
    .toPromise();
  }

  retrieveQuestions() {
    console.log('~~~~ service - retrieve questions ~~~~~')
    return this._http.get('/questions')
    .subscribe(
      (response) => {
        this.questions = response.json();
        this.questionObserver.next(this.questions);
        console.log('*************')
      },
      (err) => {
        console.log('~~~~ service - error ~~~~')
      }
    )
  }

  retrieveUsers() {
    console.log('~~~~~ service - retrieve users ~~~~~')
    return this._http.get('/users')
    .subscribe(
      (response) => {
        this.users = response.json();
        this.userObserver.next(this.users);
        console.log('~~~~~~~~~~~~~')
      },
      (err) => {
        console.log('~~~ service - error ~~~~')
      }
    )
  }
}
