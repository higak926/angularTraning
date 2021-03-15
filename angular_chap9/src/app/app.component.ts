import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  msg = '  WINGS　Project　　　';

  data = ['あいうえお', 'かきくけ', 'さしす', 'たちつてと', 'な']
  myFilter(value: string) {
    return String(value).length < 5;
  }

  onclick(txt: string) {
    this.data.push(txt);
    console.log(this.data)
  }

  data2 = {
    zip: '673-0121'
  };

  end = new Date(2022, 2, 31)

}
