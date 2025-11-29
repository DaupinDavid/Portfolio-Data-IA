const portfolioData = {
    // --- TES INFOS PERSONNELLES ---
    personal: {
        name: "TON PRÉNOM NOM",
        title: "DATA ANALYST & AI ENGINEER",
        email: "tonemail@exemple.com",
        linkedin: "https://linkedin.com/in/tonprofil",
        // Ton slogan (Ligne 1, 2 et 3)
        heroLine1: "De la Donnée Brute",
        heroLine2: "à l'Intelligence Créative et",
        heroLine3: "Décisionnelle...",
    },

    // --- TES PROJETS ---
    projects: [
        {
            id: "moto-fusion",
            category: "data",
            title: "Projet Moto-Fusion",
            tag: "BUSINESS INTELLIGENCE & GEN AI",
            shortDescription: "Résolution du conflit 'Désir Client vs Contrainte Industrielle' par l'IA Générative et la Data Viz.",
            
            // DÉTAILS COMPLETS (Ce qui s'affiche dans la fenêtre)
            fullDescription: `
                <h4 class="text-primary font-bold mb-2">Le Problème Business</h4>
                <p class="mb-4">Le marché réclame une 'Moto Hybride' (Look 90s + Fiabilité Moderne), mais les industriels ignorent si c'est rentable. Il faut résoudre l'équation : <strong>Désir Client vs Coût Industriel</strong>.</p>
                
                <h4 class="text-primary font-bold mb-2">La Solution Technique</h4>
                <ul class="list-disc list-inside mb-4 space-y-1">
                    <li><strong>Génération de Données Synthétiques :</strong> Création de 15 400 profils utilisateurs via Gemini pour simuler le marché.</li>
                    <li><strong>Prototypage IA :</strong> Visualisation immédiate des concepts (Text-to-3D) avec Gemini et Tripo3D.</li>
                    <li><strong>Architecture Web :</strong> Interface générée par Stitch (HTML/Tailwind) et logique intégrée par Agent IA.</li>
                </ul>

                <h4 class="text-primary font-bold mb-2">L'Impact Décisionnel</h4>
                <p>Création d'un <strong>Dashboard de Rentabilité (Matrice 10x8)</strong> permettant de valider le lancement de la moto 'Néo-Rétro 90s' avec un score de viabilité de 98/100, minimisant le risque industriel.</p>
            `,
            techStack: ["Python", "Gemini Pro", "Plotly.js", "Stitch", "Tripo3D"]
        }
    ]
};