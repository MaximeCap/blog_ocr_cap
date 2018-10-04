import { Component } from '@angular/core';
import {Post} from './model/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  posts: Array<Post> = [
    new Post('Mon premier post', 'Ceci est le contenu de mon premier post'),
    new Post('Mon deuxieme post', 'Ceci est le contenu de mon deuxième post'),
    new Post('Mon troisième post', 'Ceci est le contenu de mon troisième post')
  ];


}


