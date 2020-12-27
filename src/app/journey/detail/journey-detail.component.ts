import {Component, OnInit} from '@angular/core';
import {Journey} from "../../common/entities/Journey";
import {JourneyService} from "../../service/data/journey.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-journey',
  templateUrl: './journey-detail.component.html',
  styleUrls: ['./journey-detail.component.css']
})
export class JourneyDetailComponent implements OnInit {

  journey: Journey;
  updateMessage: string;

  constructor(private journeyService: JourneyService,
              private activatedRoute: ActivatedRoute,
              private router:Router) {
  }

  ngOnInit(): void {
    this.journey=new Journey(null,null,null,null,null,null,null,null,null)
    let idJourney = this.activatedRoute.snapshot.params['idJourney'];
    this.journeyService.findJourneyById(idJourney).subscribe(journey => this.journey = journey, error => console.log(error));
  }

  updateJourney(journey: Journey) {
    this.journeyService.update(journey).subscribe(
      journey => {
        console.log(journey);
        this.updateMessage = `Journey with id ${journey.id} has been updated`;
        this.router.navigate(['/journey-list']);
      },
      error => {
        console.log(error);
      });
  }

}
