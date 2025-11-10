import { Component, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { RouterLink } from "@angular/router"
import { CheckCircle2, Loader2 } from "lucide-angular"

interface DemoForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  position: string
  industry: string
  companySize: string
  service: string
  useCase: string
  budget: string
  timeline: string
  message: string
}

@Component({
  selector: "app-demo",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CheckCircle2, Loader2],
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"],
})
export class DemoComponent {
  isSubmitting = signal(false)
  isSuccess = signal(false)

  formData: DemoForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    companySize: "",
    service: "",
    useCase: "",
    budget: "",
    timeline: "",
    message: "",
  }

  industries = [
    "E-commerce",
    "Services financiers",
    "Santé",
    "Éducation",
    "Tourisme",
    "Immobilier",
    "Télécommunications",
    "Administration publique",
    "Autre",
  ]

  companySizes = ["1-10 employés", "11-50 employés", "51-200 employés", "201-500 employés", "500+ employés"]

  services = ["TTS Darija", "Chatbot Vocal IA", "Les deux", "Pas encore décidé"]

  budgets = ["Moins de 10,000 MAD", "10,000 - 50,000 MAD", "50,000 - 100,000 MAD", "Plus de 100,000 MAD", "À discuter"]

  timelines = [
    "Immédiat (< 1 mois)",
    "Court terme (1-3 mois)",
    "Moyen terme (3-6 mois)",
    "Long terme (6+ mois)",
    "En exploration",
  ]

  async onSubmit() {
    this.isSubmitting.set(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("[v0] Demo form submitted:", this.formData)

    this.isSubmitting.set(false)
    this.isSuccess.set(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      this.isSuccess.set(false)
      this.resetForm()
    }, 3000)
  }

  resetForm() {
    this.formData = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      industry: "",
      companySize: "",
      service: "",
      useCase: "",
      budget: "",
      timeline: "",
      message: "",
    }
  }
}
