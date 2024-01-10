import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17';
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.getData();
  }

  getData() {
    // Création de l'observable
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      // Abonnement à l'observable (et donc déclenchement de la requête)
      .subscribe((data) => {
        // Réponse du serveur
        console.log('Data received :', data);
      });
  }
}
