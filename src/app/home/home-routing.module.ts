import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage},

{path: 'table',
component: TableComponent}

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
export const routingComponent = [TableComponent];
