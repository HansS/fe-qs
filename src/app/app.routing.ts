import { QuestionsComponent } from './questions/questions.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions', component: QuestionsComponent },
  { path: '**', redirectTo: 'questions',pathMatch: 'full' }
]

export const appRouting = RouterModule.forRoot(routes);
