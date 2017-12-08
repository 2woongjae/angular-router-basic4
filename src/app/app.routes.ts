import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DevelperComponent } from './develper/develper.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'developer', component: DevelperComponent},
    {path: 'developer/:name', component: DevelperComponent}
];

export default RouterModule.forRoot(routes);
