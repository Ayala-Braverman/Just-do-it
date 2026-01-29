import { Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth';
import { TeamsComponent } from './component/teams/teams';
import { ProjectsComponent } from './component/projects/projects';
import { TasksComponent } from './component/tasks/tasks';
import { TaskDetailsComponent } from './component/task-details/task-details';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:teamId', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'task-details', component: TaskDetailsComponent },
  { path: 'tasks/:projectId', component: TasksComponent },
];