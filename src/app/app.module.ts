// debut du fichier
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from "./app.component";
import { MeteoComponent } from "./meteo/meteo.component";
import { AppRoutingModule } from "./app-routing.module";
import { MeteoDetailComponent } from "./meteo-detail/meteo-detail.component";


const appRoutes: Routes = [
  {
    path: "", 
    component: MeteoComponent,
  },
  {
    path: "meteo/:name", 
    component: MeteoDetailComponent,
  },
  {
    path: "**", 
    redirectTo: "/",
    pathMatch: "full",
  },
];


@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MeteoDetailComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}