import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { SearchService } from './search.service';
const appRoutes: Routes = [
    { path: 'test', component: TestComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    TopbarComponent,
    ProductComponent,
    ProductFilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
    ),
    FormsModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
