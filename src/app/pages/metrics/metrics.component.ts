import { Component } from '@angular/core';
import { ShopService } from '../../core/services/shop.service';
import { UsersService } from '../../core/services/users.service';
import { ProfilesService } from '../../core/services/profiles.service';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent {

  totalShops$ = this.shopService.totalShops$;
  totalUsers$ = this.usersService.totalUsers$;
  totalProfiles$ = this.profilesService.totalProfiles$;
  totalShopsVerified$ = this.shopService.totalShopsVerified$;
  totalShopsBanned$ = this.shopService.totalShopsBanned$;
  totalUsersVerified$ = this.usersService.totalUsersVerified$;
  totalUsersBanned$ = this.usersService.totalUsersBanned$;
  totalProducts$ = this.productsService.totalProducts$;
  constructor(
    private shopService: ShopService,
    private usersService: UsersService,
    private profilesService: ProfilesService,
    private productsService: ProductsService,
    ) { }
}
