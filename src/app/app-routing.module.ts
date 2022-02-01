import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NotFoundComponent} from "./website/pages/not-found/not-found.component";
import {QuicklinkStrategy} from "ngx-quicklink";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
    data: {
      preload: true
    }
  },
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
  },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
