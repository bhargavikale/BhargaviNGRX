
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import { NgModule, isDevMode, EnvironmentInjector } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ParentCounterComponent } from './counter/parent-counter/parent-counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';

import { counterReducer } from './counter-state/counter.reducer';
import { CounterCustomInputComponent } from './counter/counter-custom-input/counter-custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { appReducer } from './store/app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentCounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterCustomInputComponent,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(), 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
