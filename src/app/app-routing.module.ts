import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./component/home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'candidate', loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule) },
    { path: 'manager', loadChildren: () => import('./program-manager/program-manager.module').then(m => m.ProgramManagerModule) },
    { path: 'evaluate', loadChildren: () => import('./evaluation/evaluation.module').then(m => m.EvaluationModule) },
    { path: 'interview/:id', loadChildren: () => import('./questions-inteface/questions-inteface.module').then(m => m.QuestionsIntefaceModule) },
    { path: '**', redirectTo: 'candidate', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
