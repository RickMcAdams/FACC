import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './mock-players';
import { PlayerService } from './player.service';


@Component({
  selector: 'facc-app',  
  template: `<h2>FACC Admin</h2>
  <div>
    <a href="" ng-click="allStats(this)">Stats</a>
    <a href="" ng-click="accStats(this)">ACC Stats</a>
      <table class="sorting-table">
      <thead class="header">
      <th>Rank</th>
      <th><a href="" ng-click="predicate = 'team'; reverse=false">Team</a></th>
      <th><a href="" ng-click="predicate = 'name'; reverse=false">Name</a></th>
      <th><a href="" ng-click="predicate = 'minutes'; reverse=true">Minutes</a></th>
      <th><a href="" ng-click="predicate = 'points'; reverse=true">Points</a></th>
      <th><a href="" ng-click="predicate = 'rebounds'; reverse=true">Rebounds</a></th>
      <th><a href="" ng-click="predicate = 'assists'; reverse=true">Assists</a></th>
      <th><a href="" ng-click="predicate = 'steals'; reverse=true">Steals</a></th>
      <th><a href="" ng-click="predicate = 'threes'; reverse=true">Threes</a></th>
      <th><a href="" ng-click="predicate = 'blocks'; reverse=true">Blocks</a></th>
      <th><a href="" ng-click="predicate = 'rating'; reverse=true">Rating</a></th>
      </thead>
      <tbody>
        <tr *ngFor="let player of players">
        <td></td>
        <td>{{player.team}}</td>
        <td><a href="http://espn.go.com/ncb/player/profile?playerId={{player.id}}" target="_blank">{{player.name}}</a></td>
        <td>{{player.minutes}}</td>
        <td>{{player.points}}</td>
        <td>{{player.rebounds}}</td>
        <td>{{player.assists}}</td>
        <td>{{player.steals}}</td>
        <td>{{player.threes}}</td>
        <td>{{player.blocks}}</td>
        <td>{{player.rating}}</td>
        </tr>  
        </tbody>        
      </table>
    </div>`,
    styles: [`
  	.sorting-table tr td {  		 
  		border-style: solid; 
  		border-width: 2px; 
	}
	.header th {
		color: blue;  
		border-style: solid; 
		border-width: 2px;
	}
	.row {
		font-size: 18px;
	}
	`]	
})
export class FACCComponent implements OnInit{ 
	name = 'FACC'; 
	players: Player[];

	constructor (private playerService: PlayerService) { }

	getPlayers(): void {
		this.playerService.getPlayers().then(players => this.players = players);
	}

	ngOnInit(): void {
		this.getPlayers();
		console.log('Got Players ');

	}
}


