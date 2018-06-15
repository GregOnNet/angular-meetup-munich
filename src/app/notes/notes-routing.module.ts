import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { NotesComponent } from './notes.component';

const routes: Route[] = [{ path: '', component: NotesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
