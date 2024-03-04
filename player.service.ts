import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:3000/players'; // Adjust if your API URL is different

  constructor(private http: HttpClient) { }

  addPlayer(player: any) {
    return this.http.post(this.apiUrl, player);
  }

  updatePlayer(id: string, player: any) {
    return this.http.put(`${this.apiUrl}/${id}`, player);
  }

  deletePlayer(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Methods for the 5 queries
  findPlayersByTeam(team: string) {
    return this.http.get(`${this.apiUrl}/team/${team}`);
  }

  findPlayersByAgeRange(min: number, max: number) {
    return this.http.get(`${this.apiUrl}/age/${min}/${max}`);
  }

  findPlayersByPosition(position: string) {
    return this.http.get(`${this.apiUrl}/position/${position}`);
  }

  getPlayersSortedByName() {
    return this.http.get(`${this.apiUrl}/sortedByName`);
  }

  findPlayersWithSpecificAttributes(age: number, team: string) {
    return this.http.get(`${this.apiUrl}/specific/${age}/${team}`);
  }
}
