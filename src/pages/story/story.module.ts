import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Story } from './story';

@NgModule({
  declarations: [
    Story,
  ],
  imports: [
    IonicModule.forChild(Story),
  ],
  exports: [
    Story
  ]
})
export class StoryModule {}
