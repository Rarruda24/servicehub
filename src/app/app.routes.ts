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
        path: 'clients/:id',
        loadComponent: () =>
          import('./pages/client-detail/client-detail').then(
            (m) => m.ClientDetail
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
      {
        path: 'queue',
        loadComponent: () =>
          import('./pages/queue/queue').then(
            (m) => m.Queue
          ),
      },
      {
        path: 'sla',
        loadComponent: () =>
          import('./pages/sla/sla').then(
            (m) => m.Sla
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/reports/reports').then(
            (m) => m.Reports
          ),
      },
      {
        path: 'indicators',
        loadComponent: () =>
          import('./pages/indicators/indicators').then(
            (m) => m.Indicators
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings').then(
            (m) => m.Settings
          ),
      },
    ],
  },
];