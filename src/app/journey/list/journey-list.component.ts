import {Component, OnInit} from '@angular/core';
import {Journey} from "../../common/entities/Journey";
import {JourneyService} from "../../service/data/journey.service";

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.css']
})
export class JourneyListComponent implements OnInit {

  journeys: Journey[];
  journeyDeleteMsg: string;
  availability: string='test';

  constructor(private journeyService: JourneyService) {
  }

  ngOnInit(): void {
    this.getJourneys();
  }

  getJourneys() {
    this.journeyService.getAllJourneys().subscribe(
      journey => {
        console.log(journey)
        journey.forEach(journey => {
          console.log(' # ***** # ' + journey.driverId);
        });
        this.journeys = journey;
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteJourneyById(id: number) {
    this.journeyService.deleteById(id).subscribe(journey => {
        console.log(journey);
        this.journeyDeleteMsg = `Journey with the id ${journey.id} has been deleted`;
        this.getJourneys();

      },
      error => {
        console.log(error);
      });
  }

  checkAvailability(idDriver: number) {
    if (idDriver !== null) {
      return this.availability = `assigned`
    } else {
      return this.availability = `available`
    }
  }

}
