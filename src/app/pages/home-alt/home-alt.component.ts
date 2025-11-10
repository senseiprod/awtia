import { Component } from "@angular/core"

@Component({
  selector: "app-home-alt",
  templateUrl: "./home-alt.component.html",
  styleUrls: ["./home-alt.component.css"],
})
export class HomeAltComponent {
  // Features for the three cards
  features = [
    {
      icon: "globe",
      title: "Support Multilingue",
      description: "Plus de 50 langues supportées pour vos conversations globales",
    },
    {
      icon: "file-text",
      title: "Transcription Automatique",
      description: "Convertissez automatiquement chaque appel en texte recherchable",
    },
    {
      icon: "phone",
      title: "Dashboard Complet",
      description: "Gérez tous vos appels depuis une interface intuitive et puissante",
    },
  ]

  services = [
    {
      icon: "mic",
      title: "TTS Darija",
      description: "Voix-off professionnelle en dialecte marocain pour vos contenus multimédias",
      features: [
        "Voix naturelles et authentiques",
        "Plusieurs dialectes marocains",
        "Qualité studio professionnelle",
        "API facile à intégrer",
      ],
      link: "https://castingvoixoff.ma",
      isExternal: true,
    },
    {
      icon: "bot",
      title: "Chatbot Vocal IA",
      description: "Assistant intelligent capable de comprendre et répondre en Darija",
      features: ["Compréhension du contexte", "Réponses en temps réel", "Apprentissage continu", "Support multicanal"],
      action: "request",
      isExternal: false,
    },
  ]

  openChatbotModal() {
    // This will be implemented to open the chatbot request modal
    console.log("[v0] Opening chatbot modal")
  }
}
