import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskGetComponent } from './task-get/task-get.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TasksService } from './tasks.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskAddComponent,
    TaskGetComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ TasksService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
