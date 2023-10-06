import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import { FeedbacksComponent } from './Feedbacks/Feedbacks.component';
import { HotLineComponent } from './hotLine/hotLine.component';
import { AcountComponent } from './acount/acount.component';
import { NewArticleComponent } from './newArticle/newArticle.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { BrandComponent } from './brand/brand.component';
import { SliderComponent } from './slider/slider.component';
import { MenuComponent } from './menu/menu.component';
import { MoreImageComponent } from './moreImage/moreImage.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'danh-muc', component: DanhmucComponent},
  { path: 'feedback', component: FeedbacksComponent},
  { path: 'hotline', component: HotLineComponent},
  { path: 'acount', component: AcountComponent},
  { path: 'newArtile', component: NewArticleComponent},
  { path: 'introduce', component: IntroduceComponent},
  { path: 'brand', component: BrandComponent},
  { path: 'slider', component: SliderComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'more-image/:id', component: MoreImageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
