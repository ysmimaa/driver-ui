import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Journey} from "../../common/entities/Journey";
import {
  DELETE_BY_ID_URI,
  FIND_BY_ID_URI,
  JOURNEY_BASE_URL,
  JOURNEY_URI,
  JOURNEYS_URI
} from "../../common/constants/journey";

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor(private http: HttpClient) {
  }

  getAllJourneys() {
    return this.http.get<Journey[]>(JOURNEY_BASE_URL + JOURNEYS_URI);
  }

  createJourney(journey: Journey) {
    journey.startAt = new Date(journey.startAt);
    journey.endAt = new Date(journey.endAt);
    return this.http.post<Journey>(JOURNEY_BASE_URL + JOURNEY_URI, journey);
  }

  deleteById(id: number) {
    return this.http.delete<Journey>(JOURNEY_BASE_URL + JOURNEY_URI + DELETE_BY_ID_URI + `${id}`);
  }

  update(journey: Journey) {
    journey.startAt = new Date(journey.startAt);
    journey.endAt = new Date(journey.endAt);
    return this.http.put<Journey>(JOURNEY_BASE_URL + JOURNEY_URI, journey);
  }

  findJourneyById(idJourney: number) {
    return this.http.get<Journey>(JOURNEY_BASE_URL + JOURNEY_URI + FIND_BY_ID_URI + `${idJourney}`);

  }
}
