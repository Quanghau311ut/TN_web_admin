import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from './services/categories.service';
import { FeedbacksComponent } from './Feedbacks/Feedbacks.component';
import { FeedbackService } from './services/Feedback.service';
import { HotLineComponent } from './hotLine/hotLine.component';
import { HotlinesService } from './services/hotlines.service';
import { AcountComponent } from './acount/acount.component';
import { NewArticleComponent } from './newArticle/newArticle.component';
import { AcountsService } from './services/acounts.service';
import { NewArticleService } from './services/newArticle.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroduceComponent } from './introduce/introduce.component';
import { MenuComponent } from './menu/menu.component';
import { BrandComponent } from './brand/brand.component';
import { SliderComponent } from './slider/slider.component';
import { MenusService } from './services/menus.service';
import { SlidersService } from './services/sliders.service';
import { BrandsService } from './services/brands.service';
import { MoreImageComponent } from './moreImage/moreImage.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    DanhmucComponent,
    FeedbacksComponent,
    HotLineComponent,
    AcountComponent,
    NewArticleComponent,
    IntroduceComponent,
    MenuComponent,
    BrandComponent,
    SliderComponent,
      MoreImageComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    EditorModule,
    FileUploadModule
  ],
  providers: [CategoriesService, FeedbackService, HotlinesService, AcountsService, NewArticleService, MenusService, SlidersService, BrandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
