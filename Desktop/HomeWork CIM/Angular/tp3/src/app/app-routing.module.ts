import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConsultActiviteComponent } from './consult-activite/consult-activite.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'index.html',
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "consultAct",
    component: ConsultActiviteComponent
  },
  {
    path: "consultAct/:id",
    component: ConsultActiviteComponent
  },
  {
    path: "consultAct/:id/:param2",
    component: ConsultActiviteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
