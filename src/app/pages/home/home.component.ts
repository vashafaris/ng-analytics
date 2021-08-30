import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isCreatingAccount: boolean;

  constructor() {
    this.isCreatingAccount = false;
  }

  ngOnInit() {}

  handleClickCreateAccount(): void {
    this.setIsShowCreatingAccount();
    this.createAccountTracker();
  }

  loginTracker(): void {
    (<any>window).dataLayer.push({
      event: "click_login",
    });
  }

  createAccountTracker(): void {
    (<any>window).dataLayer.push({
      event: "click_create_account",
    });
  }

  userTypeTracker(type: string): void {
    (<any>window).dataLayer.push({
      event: "submit_create_account",
      label: type,
    });
  }

  private setIsShowCreatingAccount(): void {
    this.isCreatingAccount = true;
  }
}
