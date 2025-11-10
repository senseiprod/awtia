import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"
import { Mail, Linkedin, Twitter, Facebook } from "lucide-angular"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, RouterLink, Mail, Linkedin, Twitter, Facebook],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {
  currentYear = new Date().getFullYear()
}
