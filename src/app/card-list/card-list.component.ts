import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getCards();
  }

getCards(): void {
    const newCards: Card[] = [
      // Ajoutez ici des données réelles pour les cartes
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        date: new Date(),
        title: 'Exemple de titre',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        date: new Date(),
        title: 'Exemple de titre',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        date: new Date(),
        title: 'Exemple de titre',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        date: new Date(),
        title: 'Exemple de titre',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        date: new Date(),
        title: 'Exemple de titre',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        date: new Date(),
        title: 'Exemple de titre',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        date: new Date(),
        title: 'Exemple de titre',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        date: new Date(),
        title: 'Exemple de titre',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        date: new Date(),
        title: 'Exemple de titre',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      }
    ];

    this.cards = [...this.cards, ...newCards];
  }

  loadMoreCards(): void {
    const newCards: Card[] = [ 
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        date: new Date(),
        title: 'Exemple de titre',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        date: new Date(),
        title: 'Exemple de titre',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        date: new Date(),
        title: 'Exemple de titre',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      }
     ];
    this.cards = [...this.cards, ...newCards];
  }
}