import { Component } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {
  playerData = { /* player fields */ };

  constructor(private playerService: PlayerService) { }

  addPlayer() {
    this.playerService.addPlayer(this.playerData).subscribe(
      response => {
        console.log('Player added', response);
      },
      error => {
        console.error('Error adding player', error);
      }
    );
  }
}
