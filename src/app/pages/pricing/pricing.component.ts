import { Component } from "@angular/core"

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.css"],
})
export class PricingComponent {
  particles = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    delay: Math.random() * 5,
  }))
}
