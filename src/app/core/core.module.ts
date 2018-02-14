import { NgModule,SkipSelf,Optional } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.util';
import { MatIconRegistry } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import {
    BrowserAnimationsModule
} from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
  iconRegistry: MatIconRegistry,
  sanitizer: DomSanitizer) {
    if(parent){
      throw new Error('Module exist, can not load twice!');
    }
    loadSvgResources(iconRegistry, sanitizer);
  }
}
