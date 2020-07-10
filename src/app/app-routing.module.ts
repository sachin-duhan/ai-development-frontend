import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'candidate', pathMatch: 'full' },
    { path: 'candidate', loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule) },
    { path: 'manager', loadChildren: () => import('./program-manager/program-manager.module').then(m => m.ProgramManagerModule) },
    { path: 'evaluate', loadChildren: () => import('./evaluation/evaluation.module').then(m => m.EvaluationModule) },
    { path: 'interview', loadChildren: () => import('./questions-inteface/questions-inteface.module').then(m => m.QuestionsIntefaceModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
