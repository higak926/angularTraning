import { Component } from '@angular/core';
import { AliasService } from './alias.service';
import { UseService } from './use.service';

@Component({
  selector: 'my-use',
  providers: [
    // { provide: UseService, useClass: UseService },
    // // { provide: UseService, useValue: new UseService() }
    // { provide: AliasService, useExisting: UseService }
    { provide: UseService, useFactory: () => {
      let service = new UseService();
      service.created.setSeconds(0);
      service.created.setMilliseconds(0);
      return service;
    }}
    
  ],
  templateUrl: './use.component.html'
})
export class UseComponent {
  current: string;
  constructor(private use: UseService) {
    this.current = use.show();
  }
  // constructor(private use: AliasService) {
  //   this.current = use.show();
  // }
}