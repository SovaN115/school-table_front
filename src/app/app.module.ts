import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/main/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminModule } from './pages/admin/admin.module';
import { TemplateModule } from './pages/admin/template/template.module';
import { HttpClientModule } from '@angular/common/http';
import { TemplateService } from './services/template/template.service';
import { MainModule } from './pages/main/main.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    TemplateModule,
    HttpClientModule,
    MainModule,
    ReactiveFormsModule
  ],
  providers: [
    TemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
