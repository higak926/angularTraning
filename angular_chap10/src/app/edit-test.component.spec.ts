import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from '@angular/platform-browser';
import { Book } from "./book";
import { EditComponent } from "./edit.component";


@Component({
  selector: 'my-app',
  template: `
  <edit-book [item]='selected' (edited)="onedited($event)"></edit-book>
  `
})
export class EditTestComponent {
  selected = <Book> {
    isbn: '978-4-7741-8411-1',
    title: '改訂新版JavaScript本格入門',
    price: 2980,
    publisher: '技術評論社',
  };

  update: Book;

  onedited(book: Book) {
    this.update = book;
  }
}

describe('EditTestComponent', function() {
  let de: DebugElement;
  let comp: EditTestComponent;
  let fixture: ComponentFixture<EditTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [EditTestComponent, EditComponent]
    });
    fixture = TestBed.createComponent(EditTestComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ISBNの確認', () => {
    let de = fixture.debugElement.query(By.css('#isbn'));
    expect(de.nativeElement.textContent).toEqual(comp.selected.isbn);
  });

  it('editedイベントの確認', () => {
    let de = fixture.debugElement.query(By.css('form'));
    de.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    expect(comp.update).toEqual(comp.selected);
  });
});