import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todos/todo.component';
import { HomeComponent } from './home/home.component';

const appRouters: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todos', component: TodoComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);