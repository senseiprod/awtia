import { Component, HostListener, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink, RouterLinkActive } from "@angular/router"
import { Menu, X } from "lucide-angular"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, Menu, X],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  isScrolled = signal(false)
  isMobileMenuOpen = signal(false)

  @HostListener("window:scroll")
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20)
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((value) => !value)
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false)
  }
}
