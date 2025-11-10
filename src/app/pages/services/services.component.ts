import { Component } from "@angular/core"

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent {
  particles = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    delay: Math.random() * 5,
  }))

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
      icon: "radio",
      title: "Contenu Audio",
      description: "Créez des podcasts, livres audio et contenus éducatifs en Darija",
    },
    {
      icon: "phone",
      title: "Serveurs Vocaux",
      description: "Automatisez vos services clients avec des réponses vocales naturelles",
    },
    {
      icon: "message-square",
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
      icon: "shopping-cart",
      title: "E-commerce",
      description: "Assistez vos clients dans leurs achats avec un conseiller vocal intelligent",
    },
    {
      icon: "building",
      title: "Services Publics",
      description: "Facilitez l'accès aux informations et services administratifs",
    },
    {
      icon: "graduation-cap",
      title: "Éducation",
      description: "Créez des tuteurs virtuels interactifs pour l'apprentissage",
    },
  ]

  comparisonFeatures = [
    { feature: "Voix naturelle en Darija", tts: true, chatbot: true },
    { feature: "Synthèse vocale (Text-to-Speech)", tts: true, chatbot: true },
    { feature: "Reconnaissance vocale (Speech-to-Text)", tts: false, chatbot: true },
    { feature: "Compréhension du langage naturel (NLU)", tts: false, chatbot: true },
    { feature: "Génération de réponses intelligentes", tts: false, chatbot: true },
    { feature: "Analyse conversationnelle", tts: false, chatbot: true },
    { feature: "Gestion du contexte de conversation", tts: false, chatbot: true },
    { feature: "Support multi-accents marocains", tts: true, chatbot: true },
    { feature: "API REST intégrable", tts: true, chatbot: true },
    { feature: "Webhooks pour événements", tts: false, chatbot: true },
    { feature: "Intégration WhatsApp", tts: false, chatbot: true },
    { feature: "Intégration téléphonie", tts: true, chatbot: true },
    { feature: "Intégration site web (Widget)", tts: false, chatbot: true },
    { feature: "Dashboard d'analyse", tts: false, chatbot: true },
    { feature: "Personnalisation des réponses", tts: false, chatbot: true },
    { feature: "Base de connaissances personnalisée", tts: false, chatbot: true },
    { feature: "Apprentissage automatique", tts: false, chatbot: true },
    { feature: "Export audio multiple formats", tts: true, chatbot: false },
    { feature: "Contrôle de la vitesse et tonalité", tts: true, chatbot: false },
    { feature: "SSML (Speech Synthesis Markup)", tts: true, chatbot: false },
    { feature: "Support 24/7 automatisé", tts: false, chatbot: true },
    { feature: "Transfert vers agent humain", tts: false, chatbot: true },
    { feature: "Gestion des intentions utilisateur", tts: false, chatbot: true },
    { feature: "Détection de sentiment", tts: false, chatbot: true },
  ]
}
