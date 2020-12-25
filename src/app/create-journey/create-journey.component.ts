import {Component, OnInit} from '@angular/core';
import {Journey} from "../common/entities/Journey";
import {JourneyService} from "../service/data/journey.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-journey',
  templateUrl: './create-journey.component.html',
  styleUrls: ['./create-journey.component.css']
})
export class CreateJourneyComponent implements OnInit {

  journey: Journey;

  constructor(private journeyService: JourneyService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.journey = new Journey(null,null, null, null, null,null,null,null,null);
  }

  createJourney() {
    this.journeyService.createJourney(this.journey).subscribe(journey => {
        console.log(`journey with id ${journey.id} has been created`)
        this.router.navigate(['/journey-list']);
      },
      error => {
        console.log(error)
      })
  }

}
