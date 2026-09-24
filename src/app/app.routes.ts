import { Routes } from '@angular/router';

import { Layout } from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard').then(
            (m) => m.Dashboard
          ),
      },
      {
        path: 'clients',
        loadComponent: () =>
          import('./pages/clients/clients').then(
            (m) => m.Clients
          ),
      },
      {
        path: 'tickets',
        loadComponent: () =>
          import('./pages/tickets/tickets').then(
            (m) => m.Tickets
          ),
      },
      {
        path: 'tickets/:id',
        loadComponent: () =>
          import('./pages/ticket-detail/ticket-detail').then(
            (m) => m.TicketDetail
          ),
      },
    ],
  },
];
