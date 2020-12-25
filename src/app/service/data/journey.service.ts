import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Journey} from "../../common/entities/Journey";

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor(private http: HttpClient) {
  }

  getAllJourneys() {
    return this.http.get<Journey[]>(`http://localhost:8010/api/journeys`);
  }

  createJourney(journey: Journey) {
    journey.startAt = new Date(journey.startAt);
    journey.endAt = new Date(journey.endAt);
    return this.http.post<Journey>(`http://localhost:8010/api/journey`, journey);
  }

  deleteById(id: number) {
    return this.http.delete<Journey>(`http://localhost:8010/api/journey/deleteById/${id}`);
  }
}
