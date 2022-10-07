import { Component, Input } from '@angular/core';
import { CardsStatsData } from '../../core/interfaces/card-stats.interface';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.scss']
})
export class CardStatsComponent {

  @Input('cardInfo') cardInfo: CardsStatsData = {
    color: 'card-header-info',
    title: 'Tamaño BD',
    value: '0.125/50',
    prefix: 'GB',
    icon: 'storage',
    footer: {
      icon: 'local_offer',
      label: 'Tracked from Github',
    }
  }

}
