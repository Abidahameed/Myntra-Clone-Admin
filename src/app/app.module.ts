import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewtableComponent } from './viewtable/viewtable.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';

import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SectionComponent } from './section/section.component';
import { BrandComponent } from './brand/brand.component';
import { UpdatecategoryComponent } from './category/updatecategory/updatecategory.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { AllbrandsComponent } from './allbrands/allbrands.component';
import { AllsectionsComponent } from './allsections/allsections.component';



const routes:Routes = [


  {path:'',component:NavbarComponent },
  {path:'addproduct',component:AddproductComponent},
  {path:'viewtable',component:ViewtableComponent },
  {path:'orders',component:OrdersComponent },
  {path:'users',component:UsersComponent },
  {path:'delete',component:DeleteComponent },
  {path:'update',component:UpdateComponent },
  { path: 'product-list', component: DeleteComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'subcategory', component: SubcategoryComponent },
  { path: 'section', component: SectionComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'updatecategory', component: UpdatecategoryComponent },
  { path: 'allcategory', component: AllcategoryComponent },
  { path: 'allsections', component: AllsectionsComponent },
  { path: 'allbrands', component: AllbrandsComponent },
 
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewtableComponent,
    AddproductComponent,
    OrdersComponent,
    UsersComponent,
 
    DeleteComponent,
    UpdateComponent,
    CategoryComponent,
    SubcategoryComponent,
    SectionComponent,
    BrandComponent,
    UpdatecategoryComponent,
    AllcategoryComponent,
    AllbrandsComponent,
    AllsectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
 
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


