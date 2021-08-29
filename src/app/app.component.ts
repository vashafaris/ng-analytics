import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

declare var gtag;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(router: Router) {
    const navEndEvents = router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      console.log(event);
      gtag("config", "UA-186912778-1", {
        page_path: event.urlAfterRedirects,
      });
    });
  }

  tracking(): void {
    (<any>window).dataLayer.push({
      event: "submit_create_account",
    });
  }

  trackingRef(): void {
    (<any>window).dataLayer.push({
      event: "create_account_reason",
      label: "123123 | internet",
    });
  }
}
