import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './page/home/home.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SkillsComponent } from './page/component/skills/skills.component';
import { BannerComponent } from './page/component/banner/banner.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from './page/component/footer/footer.component';
import { ProjectsComponent } from './page/component/projects/projects.component';
import { WorkExperienceComponent } from './page/component/work-experience/work-experience.component';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './page/component/header/header.component';
import { TagsComponent } from './page/component/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    BannerComponent,
    FooterComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    HeaderComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }
}
