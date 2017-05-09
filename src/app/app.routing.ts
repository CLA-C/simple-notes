import { RouterModule, Routes } from '@angular/router';

import { AllNotesComponent } from './all-notes/all-notes.component';
import { SingleNoteComponent } from './single-note/single-note.component';

//just one route
const routes: Routes = [
  { path: '', component: AllNotesComponent },
  { path: 'edit/:id', component: SingleNoteComponent}
];

export const routing = RouterModule.forRoot(routes);
