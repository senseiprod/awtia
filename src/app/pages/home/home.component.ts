import { Component, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"
import { Mic, Bot, Zap, Shield, Globe, TrendingUp, ArrowRight, MessageSquare } from "lucide-angular"
import { ChatbotModalComponent } from "../../components/chatbot-modal/chatbot-modal.component"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Mic,
    Bot,
    Zap,
    Shield,
    Globe,
    TrendingUp,
    ArrowRight,
    MessageSquare,
    ChatbotModalComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  showChatbotModal = signal(false)

  services = [
    {
      icon: Mic,
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
      icon: Bot,
      title: "Chatbot Vocal IA",
      description: "Assistant vocal intelligent qui comprend et parle le Darija",
      features: ["Compréhension contextuelle", "Réponses en temps réel", "Intégration facile", "Support 24/7"],
      action: "request",
    },
  ]

  features = [
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Traitement ultra-rapide avec une latence minimale pour une expérience fluide",
    },
    {
      icon: Shield,
      title: "Sécurité Garantie",
      description: "Vos données sont protégées avec un chiffrement de bout en bout",
    },
    {
      icon: Globe,
      title: "Darija Authentique",
      description: "Compréhension parfaite des nuances et expressions marocaines",
    },
    {
      icon: TrendingUp,
      title: "Évolution Continue",
      description: "Amélioration constante grâce à l'apprentissage automatique",
    },
    {
      icon: MessageSquare,
      title: "Support Dédié",
      description: "Équipe d'experts disponible pour vous accompagner",
    },
    {
      icon: Bot,
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
