import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TableListComponent } from '../../pages/table-list/table-list.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { UsersComponent } from '../../pages/users/users.component';
import { ShopsComponent } from 'app/pages/shops/shops.component';
import { MetricsComponent } from '../../pages/metrics/metrics.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'users',          component: UsersComponent },
    { path: 'shops',          component: ShopsComponent },
    { path: 'metrics',          component: MetricsComponent },
];
