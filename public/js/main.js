// Données pour les conquêtes sociales
const conquetesSociales = [
    {
        annee: "1936",
        titre: "Congés payés",
        description: "Instauration des congés payés sous le Front Populaire"
    },
    // Ajoutez les autres conquêtes sociales ici
];

// Données pour les raisons
const raisons = [
    {
        titre: "Diversité dans les Jeux Vidéo",
        description: "Les jeux vidéo sont créés par des personnes de toutes origines, enrichissant la créativité et la diversité des contenus"
    },
    // Ajoutez les autres raisons ici
];

// Données pour les préjugés
const prejuges = [
    {
        question: "La gauche est contre l'innovation?",
        reponse: "Au contraire, la gauche soutient la recherche publique et l'innovation sociale"
    },
    // Ajoutez les autres Q/R ici
];

// Données ressources avec des images
const ressources = [
    {
        nom: "Usul",
        lien: "https://www.youtube.com/c/UsulMaster",
        description: "Analyses politiques et sociales",
        image: "https://www.radiofrance.fr/s3/cruiser-production-eu3/2024/10/cdc013f1-18d4-4d25-9793-2dfe75563201/560x315_sc_castets-6715ddefa6eed926608720.webp"
    },
    // Ajoutez d'autres ressources avec leurs images
];

// Fonction pour générer la timeline
function genererTimeline() {
    const timeline = document.querySelector('.timeline');
    conquetesSociales.forEach(conquete => {
        const element = document.createElement('div');
        element.className = 'timeline-item';
        element.innerHTML = `
            <h3>${conquete.annee} - ${conquete.titre}</h3>
            <p>${conquete.description}</p>
        `;
        timeline.appendChild(element);
    });
}

// Fonction pour générer les cartes de raisons
function genererRaisons() {
    const container = document.querySelector('.cards-container');
    raisons.forEach(raison => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${raison.titre}</h3>
            <p>${raison.description}</p>
        `;
        container.appendChild(card);
    });
}

// Fonction pour générer la FAQ
function genererFAQ() {
    const container = document.querySelector('.faq-container');
    prejuges.forEach(prejuge => {
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.innerHTML = `
            <h3>${prejuge.question}</h3>
            <p>${prejuge.reponse}</p>
        `;
        container.appendChild(item);
    });
}

// Fonction pour générer les ressources
function genererRessources() {
    const container = document.querySelector('.resources-grid');
    ressources.forEach(ressource => {
        const item = document.createElement('div');
        item.className = 'resource-item';
        item.innerHTML = `
            <h3><a href="${ressource.lien}" target="_blank">${ressource.nom}</a></h3>
            <p>${ressource.description}</p>
        `;
        container.appendChild(item);
    });
}

// Fonction mise à jour pour générer le carrousel
function genererRessources() {
    const container = document.querySelector('.carousel-track');
    ressources.forEach(ressource => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <img src="${ressource.image}" alt="${ressource.nom}">
            <div class="content">
                <h3><a href="${ressource.lien}" target="_blank">${ressource.nom}</a></h3>
                <p>${ressource.description}</p>
            </div>
        `;
        container.appendChild(item);
    });

    // Gestion du carrousel
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const itemWidth = 300; // Largeur d'un item + gap

    prevButton.addEventListener('click', () => {
        track.scrollLeft -= itemWidth;
    });

    nextButton.addEventListener('click', () => {
        track.scrollLeft += itemWidth;
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    genererTimeline();
    genererRaisons();
    genererFAQ();
    genererRessources();
});