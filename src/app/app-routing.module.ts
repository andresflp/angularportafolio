import { NgModule} from '@angular/core'; //esto es importante
import {Routes, RouterModule} from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';


// rutas de mi app
// como quieres que funcione las paginas
//en este arreglo guardamos los paths
const app_routes: Routes = [
    {path: 'home', component: PortafolioComponent}, 
    {path: 'about', component: AboutComponent},
    {path: 'item', component:ItemComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
];



@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, {useHash:true})
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule {


}






