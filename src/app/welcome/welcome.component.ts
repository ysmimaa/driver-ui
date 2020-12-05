import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { threadId } from 'worker_threads';
import { MyMessageService } from '../service/data/my-message.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username: string = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['username'];
  }

  showTheMessage(){
    
  }

}
