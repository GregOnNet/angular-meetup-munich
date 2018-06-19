import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { NoteDetailsComponent } from './note-details/note-details.component';
import { NotesComponent } from './notes.component';
import { NotesDashboardComponent } from './note-dashboard/notes-dashboard.component';

const routes: Route[] = [
  {
    path: '',
    component: NotesComponent,
    children: [
      { path: '', component: NotesDashboardComponent },
      { path: 'note/:guid', component: NoteDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
