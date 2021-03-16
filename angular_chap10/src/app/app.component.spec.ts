import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HatenaService } from './hatena.service';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let des: DebugElement[];
  let service: HatenaService;

  beforeEach(async(() => {
    let serviceStub = {
      requestGet(url: string) {
        return Promise.resolve({
          count: 5,
          bookmarks: [
            {user: 'yamada', comment: ''},
            {user: 'satoh', comment: 'comment1'},
            {user: 'ohashi', comment: ''},
            {user: 'tanabe', comment: 'comment2'},
            {user: 'gondo', comment: 'comment3'},
          ]
        })
      }
    };

    TestBed.configureTestingModule({
      imports: [FormsModule, JsonpModule],
      declarations: [ AppComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .overrideComponent(AppComponent, {
      set: {
        providers: [
          {provide: HatenaService, useValue: serviceStub}
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   declarations: [AppComponent]
    // }).compileComponents();

    // let serviceStub = {
    //   requestGet(url: string) {
    //     return Promise.resolve({
    //       count: 5,
    //       bookmarks: [
    //         {user: 'yamada', comment: ''},
    //         {user: 'satoh', comment: 'comment1'},
    //         {user: 'ohashi', comment: ''},
    //         {user: 'tanabe', comment: 'comment2'},
    //         {user: 'gondo', comment: 'comment3'},
    //       ]
    //     });
    //   }
    // };
    // TestBed.configureTestingModule({
    //   imports: [FormsModule],
    //   declarations: [AppComponent],
    // })
    // .overrideComponent(AppComponent, {
    //   set: {
    //     providers: [
    //       {provide: HatenaService, useValue: serviceStub}
    //     ]
    //   }
    // });
    
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(HatenaService);
  });

  it('<h1>要素のテキストを確認', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i);
  });

  it('nameプロパティの変化を確認', () => {
    comp.name = 'JavaScript';
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/javascript/i);
  });

  it('テーブルの行数を確認', () => {
    fixture.detectChanges();

    des = fixture.debugElement.queryAll(By.css('tr'));
    expect(des.length).toEqual(6);
  })

  xit('whenStableを使ったテスト', async(() => {
    comp.onclick();
    fixture.detectChanges();

    let des = fixture.debugElement.queryAll(By.css('li'));

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      des = fixture.debugElement.queryAll(By.css('li'));
      expect(des.length).toEqual(3);
    });
  }));

  it('<a>要素の個数を確認', () => {
    fixture.detectChanges();
    expect(des.length).toEqual(6);
  });

  // it('should create component', () => expect(comp).toBeDefined() );

  // it('should have expected <h1> text', () => {
  //   fixture.detectChanges();
  //   const h1 = de.nativeElement;
  //   expect(h1.innerText).toMatch(/angular/i,
  //     '<h1> should say something about "Angular"');
  // });
});
