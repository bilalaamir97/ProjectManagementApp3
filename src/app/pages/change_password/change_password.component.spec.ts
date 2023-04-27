import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NgbdChangePasswordBasic } from "./change_password.component";

describe("change_passwordComponent", () => {
  let component: NgbdChangePasswordBasic;
  let fixture: ComponentFixture<NgbdChangePasswordBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgbdChangePasswordBasic]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdChangePasswordBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
