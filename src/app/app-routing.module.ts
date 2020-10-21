import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: HomeComponent,
    data: { state: 'home' }
  },{
    path: 'about',
    component: AboutComponent,
    data: { state: 'about' }
  }]
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
