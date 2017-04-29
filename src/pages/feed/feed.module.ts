import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Feed } from './feed';

@NgModule({
  declarations: [
    Feed,
  ],
  imports: [
    IonicModule.forRoot(Feed),
  ],
  exports: [
    Feed
  ]
})
export class FeedModule {}
