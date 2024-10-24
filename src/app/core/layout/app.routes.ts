import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('src/app/core/components/errors/404/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'page-not-found',
  },
];

/**
 * @description Módulo de roteamento do sistema.
 * Ele que define quem e o que pode acessar, através de qual URL.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
