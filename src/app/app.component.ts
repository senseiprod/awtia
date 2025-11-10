import { Component } from "@angular/core"
import { FooterComponent } from "./components/footer/footer.component"
import { CommonModule } from "@angular/common"
import { HeaderComponent } from "./components/header/header.component"
import { RouterOutlet } from "@angular/router"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterOutlet]
})
export class AppComponent {
  title = "sawtai"
}
