import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { FACCComponent }  from './facc.component';
import { PlayerService } from './player.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ FACCComponent ],
  bootstrap:    [ FACCComponent ],
  providers: [PlayerService]
})
export class AppModule { }
