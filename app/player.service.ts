import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Player } from './player';
// import { PLAYERS } from './mock-players';


@Injectable()
export class PlayerService {
  private headers = new Headers({'Content-Type': 'application/json',
'Access-Control-Allow-Origin': '*'});
  private playersUrl = 'http://localhost:8080/seasonStats';  // URL to web api
  constructor(private http: Http) { }
  
  getPlayers(): Promise<Player[]> {
    return this.http.get(this.playersUrl)
               .toPromise()
               .then(response => response.json() as Player[])
  					.catch(this.handleError);             
  }
  // getPlayers(): Promise<Player[]> {
  // 	return Promise.resolve(PLAYERS);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}