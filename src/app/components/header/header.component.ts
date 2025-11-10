import { Component, HostListener, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink, RouterLinkActive } from "@angular/router"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive]
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
