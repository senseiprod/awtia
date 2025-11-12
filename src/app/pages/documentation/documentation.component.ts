import { Component } from "@angular/core"

@Component({
  selector: "app-documentation",
  templateUrl: "./documentation.component.html",
  styleUrls: ["./documentation.component.css"],
})
export class DocumentationComponent {
  activeSection = "introduction"

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
}
