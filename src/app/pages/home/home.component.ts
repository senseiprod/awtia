import { CommonModule } from "@angular/common"
import { Component, signal } from "@angular/core"
import { ChatbotModalComponent } from "src/app/components/chatbot-modal/chatbot-modal.component"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  standalone: true,
  imports: [CommonModule, ChatbotModalComponent]
})
export class HomeComponent {
  showChatbotModal = signal(false)

  particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    delay: Math.random() * 5,
  }))

  services = [
    {
      icon: "mic",
      title: "TTS Darija",
      description: "Transformez vos textes en voix naturelle en Darija marocain",
      features: [
        "Voix naturelles et expressives",
        "Support multi-accents",
        "API simple et rapide",
        "Qualité studio professionnelle",
      ],
      link: "https://castingvoixoff.ma",
      isExternal: true,
    },
    {
      icon: "bot",
      title: "Chatbot Vocal IA",
      description: "Assistant vocal intelligent qui comprend et parle le Darija",
      features: ["Compréhension contextuelle", "Réponses en temps réel", "Intégration facile", "Support 24/7"],
      action: "request",
    },
  ]

  features = [
    {
      icon: "zap",
      title: "Performance Optimale",
      description: "Traitement ultra-rapide avec une latence minimale pour une expérience fluide",
    },
    {
      icon: "shield",
      title: "Sécurité Garantie",
      description: "Vos données sont protégées avec un chiffrement de bout en bout",
    },
    {
      icon: "globe",
      title: "Darija Authentique",
      description: "Compréhension parfaite des nuances et expressions marocaines",
    },
    {
      icon: "trending-up",
      title: "Évolution Continue",
      description: "Amélioration constante grâce à l'apprentissage automatique",
    },
    {
      icon: "message-square",
      title: "Support Dédié",
      description: "Équipe d'experts disponible pour vous accompagner",
    },
    {
      icon: "bot",
      title: "Intégration Simple",
      description: "API REST facile à intégrer dans vos applications existantes",
    },
  ]

  stats = [
    { value: "10K+", label: "Heures de voix générées" },
    { value: "500+", label: "Entreprises clientes" },
    { value: "99.9%", label: "Disponibilité" },
  ]

  openChatbotModal() {
    this.showChatbotModal.set(true)
  }

  closeChatbotModal() {
    this.showChatbotModal.set(false)
  }
}
