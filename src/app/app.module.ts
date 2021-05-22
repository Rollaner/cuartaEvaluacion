import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotasViewComponent } from './components/notas-view/notas-view.component';
import { NotasCreateComponent } from './components/notas-create/notas-create.component';
import { NotasUpdateComponent } from './components/notas-update/notas-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { NotasServiceService } from './services/notas-service.service';
import { HttpClientModule } from "@angular/common/http";
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotasViewComponent,
    NotasCreateComponent,
    NotasUpdateComponent,
  ],
  imports: [
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [
    NotasServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
