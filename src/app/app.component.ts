import { Component } from '@angular/core';
import { StarRatingComponent } from './star-rating/star-rating.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [StarRatingComponent],
})
export class AppComponent {
  userRating: number = 0;
}
