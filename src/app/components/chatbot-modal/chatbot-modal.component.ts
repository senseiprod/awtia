import { Component, EventEmitter, Input, Output, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

interface ChatbotForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  industry: string
  useCase: string
  features: string[]
  integrations: string[]
  budget: string
  message: string
}

@Component({
  selector: "app-chatbot-modal",
  templateUrl: "./chatbot-modal.component.html",
  styleUrls: ["./chatbot-modal.component.css"],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ChatbotModalComponent {
  @Input() isOpen = false
  @Output() close = new EventEmitter<void>()

  isSubmitting = signal(false)
  isSuccess = signal(false)

  formData: ChatbotForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    useCase: "",
    features: [],
    integrations: [],
    budget: "",
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

  availableFeatures = [
    { id: "voice", label: "Reconnaissance vocale" },
    { id: "nlp", label: "Compréhension du langage naturel" },
    { id: "multilang", label: "Support multilingue (Darija + Français)" },
    { id: "analytics", label: "Analyse des conversations" },
    { id: "learning", label: "Apprentissage continu" },
    { id: "handoff", label: "Transfert vers agent humain" },
  ]

  availableIntegrations = [
    { id: "whatsapp", label: "WhatsApp" },
    { id: "website", label: "Site web" },
    { id: "facebook", label: "Facebook Messenger" },
    { id: "instagram", label: "Instagram" },
    { id: "phone", label: "Téléphone" },
    { id: "crm", label: "CRM" },
  ]

  budgets = [
    "Moins de 10,000 MAD/mois",
    "10,000 - 30,000 MAD/mois",
    "30,000 - 50,000 MAD/mois",
    "Plus de 50,000 MAD/mois",
    "À discuter",
  ]

  onClose() {
    if (!this.isSubmitting()) {
      this.close.emit()
    }
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose()
    }
  }

  toggleFeature(featureId: string) {
    const index = this.formData.features.indexOf(featureId)
    if (index > -1) {
      this.formData.features.splice(index, 1)
    } else {
      this.formData.features.push(featureId)
    }
  }

  toggleIntegration(integrationId: string) {
    const index = this.formData.integrations.indexOf(integrationId)
    if (index > -1) {
      this.formData.integrations.splice(index, 1)
    } else {
      this.formData.integrations.push(integrationId)
    }
  }

  isFeatureSelected(featureId: string): boolean {
    return this.formData.features.includes(featureId)
  }

  isIntegrationSelected(integrationId: string): boolean {
    return this.formData.integrations.includes(integrationId)
  }

  async onSubmit() {
    this.isSubmitting.set(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("[v0] Chatbot request submitted:", this.formData)

    this.isSubmitting.set(false)
    this.isSuccess.set(true)

    // Close modal after 2 seconds
    setTimeout(() => {
      this.isSuccess.set(false)
      this.resetForm()
      this.onClose()
    }, 2000)
  }

  resetForm() {
    this.formData = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      useCase: "",
      features: [],
      integrations: [],
      budget: "",
      message: "",
    }
  }
}
