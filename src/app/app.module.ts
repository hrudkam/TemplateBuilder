import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplatesComponent } from './components/templates/templates.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavComponent } from './components/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question';
import {DynamicCardComponent} from './components/admin/dynamiccard/dynamic-card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule,moveItemInArray } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    AdminComponent,
    NavComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, FormsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
