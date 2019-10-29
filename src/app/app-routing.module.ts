import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NodeComponent} from './node/node.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'node/:id',
    component: NodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
