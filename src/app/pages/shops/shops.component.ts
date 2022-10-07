import { Component } from '@angular/core';
import { ShopService } from '../../core/services/shop.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent {

  shops$ = this.shopService.shops$;

  constructor(private shopService: ShopService) { }

}
