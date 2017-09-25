import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [];
  user = {
    name: '',
    score: 0
  }

  constructor(private _gameservice: GameService, private _router: Router) { 
    this._gameservice.userObserver.subscribe((users) => {
      this.users = users
    })
    this._gameservice.retrieveUsers();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('*** onSubmit ***')
    this._gameservice.createUser(this.user)
    this.users.push(this.user)
    console.log('*** component ***')
    console.log(this.users)
    this.user = {
      name: '',
      score: 0
    }

  }
}
