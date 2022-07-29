import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// modulo de captura de formularios en angular
import { FormsModule } from '@angular/forms';
//modulo de peticiones http para cliente de http de angular
import { HttpClientModule} from '@angular/common/http'

//componentes generagos con ng g c
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
