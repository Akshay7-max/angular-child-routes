import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { Routes, RouterModule, Route } from '@angular/router';
import { OnlineShoppingComponent } from './online-shopping/online-shopping.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { LightingComponent } from './lighting/lighting.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

var myroutes:Routes=[
  {path:"", component:OnlineShoppingComponent},
  {path:"electronics", component:ElectronicsComponent,children:[
    {path:"mobiles", component:MobilesComponent},
    {path:"laptops", component:LaptopsComponent}      
  ]},
  {path:"appliances", component:AppliancesComponent,children:[
    {path:"lighting", component:LightingComponent},
    {path:"furniture", component:FurnitureComponent}      
  ]},
  {path:"fashion", component:FashionComponent,children:[
    {path:"men", component:MenComponent},
    {path:"women", component:WomenComponent}      
  ]},
];

var myroutes2 = RouterModule.forRoot(myroutes);

@NgModule({
  declarations: [
    AppComponent,
    OnlineShoppingComponent,
    AppliancesComponent,
    ElectronicsComponent,
    FashionComponent,
    FurnitureComponent,
    LightingComponent,
    MobilesComponent,
    LaptopsComponent,
    MenComponent,
    WomenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    myroutes2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
