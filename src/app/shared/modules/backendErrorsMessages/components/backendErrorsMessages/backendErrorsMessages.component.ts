import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

@Component({
  selector: "mc-backend-error-messages",
  templateUrl: "./backendErrorsMessages.component.html",
  styleUrls: ["./backendErrorsMessages.component.scss"]
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input("backendErrors") backendErrorsProps: BackendErrorsInterface;

  errorMessages: string[];

  ngOnInit() {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(", ");
        return `${name} ${messages}`;
      }
    );
  }
}
