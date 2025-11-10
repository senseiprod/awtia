import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"
import {
  Mic,
  Bot,
  Zap,
  Code,
  Headphones,
  MessageSquare,
  Phone,
  ShoppingCart,
  Building,
  GraduationCap,
  ArrowRight,
  Check,
} from "lucide-angular"

@Component({
  selector: "app-services",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Mic,
    Bot,
    Zap,
    Code,
    Headphones,
    MessageSquare,
    Phone,
    ShoppingCart,
    Building,
    GraduationCap,
    ArrowRight,
    Check,
  ],
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent {
  ttsFeatures = [
    "Voix naturelles et expressives en Darija",
    "Support de plusieurs accents marocains",
    "API REST simple et documentée",
    "Latence ultra-faible (<200ms)",
    "Qualité audio professionnelle",
    "Tarification flexible au volume",
  ]

  ttsUseCases = [
    {
      icon: Headphones,
      title: "Contenu Audio",
      description: "Créez des podcasts, livres audio et contenus éducatifs en Darija",
    },
    {
      icon: Phone,
      title: "Serveurs Vocaux",
      description: "Automatisez vos services clients avec des réponses vocales naturelles",
    },
    {
      icon: MessageSquare,
      title: "Assistants Virtuels",
      description: "Donnez une voix à vos applications et assistants intelligents",
    },
  ]

  chatbotFeatures = [
    "Compréhension contextuelle avancée",
    "Réponses en temps réel",
    "Apprentissage continu",
    "Intégration multi-canal",
    "Analyse des conversations",
    "Support 24/7 automatisé",
  ]

  chatbotUseCases = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Assistez vos clients dans leurs achats avec un conseiller vocal intelligent",
    },
    {
      icon: Building,
      title: "Services Publics",
      description: "Facilitez l'accès aux informations et services administratifs",
    },
    {
      icon: GraduationCap,
      title: "Éducation",
      description: "Créez des tuteurs virtuels interactifs pour l'apprentissage",
    },
  ]

  comparisonFeatures = [
    { feature: "Voix naturelle en Darija", tts: true, chatbot: true },
    { feature: "Compréhension du langage", tts: false, chatbot: true },
    { feature: "Génération de réponses", tts: false, chatbot: true },
    { feature: "API REST", tts: true, chatbot: true },
    { feature: "Synthèse vocale", tts: true, chatbot: true },
    { feature: "Analyse conversationnelle", tts: false, chatbot: true },
  ]
}
