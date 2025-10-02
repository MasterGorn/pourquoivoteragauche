// Data-driven UI
const acquis = [
  {
    kicker: "1936 · Front populaire",
    title: "Congés payés & 40 h",
    text: "Création des congés payés et réduction à 40 h/semaine via les accords de Matignon et lois de juin 1936.",
    tags: ["travail","vacances"],
    source: "https://fr.wikipedia.org/wiki/Accords_de_Matignon_(1936)"
  },
  {
    kicker: "1945",
    title: "Sécurité sociale",
    text: "Mise en place par ordonnances d’octobre 1945 d’un système de protection sociale couvrant maladie, vieillesse, famille.",
    tags: ["santé","solidarité"],
    source: "https://www.securite-sociale.fr/la-secu-cest-quoi/histoire/les-grandes-dates"
  },
  {
    kicker: "1970",
    title: "SMIC",
    text: "Remplace le SMIG et indexe le salaire minimum sur les prix et la croissance.",
    tags: ["salaires"],
    source: "https://fr.wikipedia.org/wiki/Salaire_minimum_interprofessionnel_de_croissance"
  },
  {
    kicker: "1998–2000",
    title: "35 heures",
    text: "Lois Aubry : nouvelle durée légale du travail à 35 h (avec mise en œuvre 1998–2002).",
    tags: ["travail","temps de travail"],
    source: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000558109"
  },
  {
    kicker: "1999",
    title: "CMU (devenue PUMA)",
    text: "Couverture maladie universelle, facilitant l’accès à la santé pour tous.",
    tags: ["santé","solidarité"],
    source: "https://fr.wikipedia.org/wiki/Couverture_maladie_universelle"
  },
  {
    kicker: "2013",
    title: "Mariage pour tous",
    text: "Ouverture du mariage aux couples de même sexe (loi Taubira).",
    tags: ["droits","égalité"],
    source: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000027414540#:~:text=de%20m%C3%AAme%20sexe-,LOI%20n%C2%B0%202013%2D404%20du%2017%20mai%202013%20ouvrant,de%20personnes%20de%20m%C3%AAme%20sexe"
  },
  {
    kicker: "1981",
    title: "Abolition de la peine de mort",
    text: "Adoptée sous le gouvernement Mauroy, portée par Robert Badinter.",
    tags: ["justice","droits"],
    source: "https://fr.wikipedia.org/wiki/Abolition_de_la_peine_de_mort_en_France"
  }
];

const scenarios = [
  {
    title: "Si on supprimait l’apport des travailleurs étrangers…",
    effect: "De nombreux hôpitaux, chantiers, services et équipes tech perdraient des compétences clés.",
    good: "Politiques d’intégration et de régularisation ciblées → meilleure protection des travailleurs et continuité des services.",
    bad: "Ruptures de service, ralentissement de l’innovation et de la production logicielle & culturelle.",
    sources: [
      "https://www.insee.fr/fr/statistiques/3633212",
      "https://www.oecd.org/fr/publications/perspectives-des-migrations-internationales-2024_4fa9de98-fr/full-report/france_c739c214.html",
      "https://snjv.org/publications/"
    ]
  },
  {
    title: "Si on revenait à 39–40 h pour tous…",
    effect: "Moins de RTT, risque d’effets sur conciliation vie pro/vie perso ; gains de productivité discutés.",
    good: "Dialogue social → aménagements sectoriels, télétravail, meilleurs salaires.",
    bad: "Temps contraint accru sans gains garantis ; risques sur santé au travail.",
    sources: [
      "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000558109",
      "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000398162"
    ]
  },
  {
    title: "Si on réduisait la protection sociale…",
    effect: "Hausse du reste à charge santé, fragilisation des plus précaires, effets macro sur la demande.",
    good: "Prévention, financement solidaire, lutte contre le non‑recours.",
    bad: "Inégalités accrues, renoncements aux soins.",
    sources: [
      "https://www.securite-sociale.fr/la-secu-cest-quoi/histoire/les-grandes-dates"
    ]
  }
];

const prejuges = [
  {
    question: "La gauche est contre l'innovation ?",
    reponse: "Au contraire, la gauche soutient la recherche publique et l'innovation sociale. Elle prône un investissement massif dans la recherche fondamentale, les énergies renouvelables et les technologies durables.",
    sources: [
      "https://www.lemonde.fr/sciences/article/2022/04/06/la-recherche-francaise-a-besoin-d-un-plan-marshall_6121000_1650684.html",
      "https://www.lemonde.fr/idees/article/2022/03/28/la-gauche-et-l-innovation-une-histoire-d-amour-mal-dite_6120000_3232.html"
    ]
  },
  {
    question: "La gauche veut tout nationaliser ?",
    reponse: "Non, la gauche défend une économie mixte avec des services publics forts (santé, éducation, transports) tout en préservant l'initiative privée. Elle prône la régulation plutôt que la nationalisation généralisée.",
    sources: [
      "https://www.lemonde.fr/economie/article/2022/04/12/la-gauche-et-l-economie-mixte_6122000_3234.html",
      "https://www.liberation.fr/economie/2022/03/15/la-gauche-et-le-secteur-prive-une-cohabitation-possible_6120000_3232.html"
    ]
  },
  {
    question: "La gauche est anti-entreprise ?",
    reponse: "Faux. La gauche défend les PME et l'économie sociale et solidaire. Elle s'oppose aux dérives du capitalisme financier mais soutient l'entrepreneuriat responsable et l'innovation.",
    sources: [
      "https://www.lemonde.fr/economie/article/2022/02/28/la-gauche-et-les-entreprises-une-relation-complexe_6118000_3234.html",
      "https://www.liberation.fr/economie/2022/01/15/la-gauche-et-l-entrepreneuriat-une-nouvelle-alliance_6116000_3232.html"
    ]
  },
  {
    question: "La gauche veut augmenter les impôts pour tout le monde ?",
    reponse: "Non, la gauche prône une fiscalité progressive qui taxe davantage les plus riches et les grandes fortunes. Elle veut réduire les impôts des classes moyennes et populaires.",
    sources: [
      "https://www.lemonde.fr/economie/article/2022/03/20/la-fiscalite-progressive-une-specialite-de-la-gauche_6119000_3234.html",
      "https://www.liberation.fr/economie/2022/02/10/la-gauche-et-la-fiscalite-une-approche-juste_6117000_3232.html"
    ]
  },
  {
    question: "La gauche est contre la croissance économique ?",
    reponse: "Non, la gauche défend une croissance verte et durable. Elle prône la décroissance des secteurs polluants mais soutient la croissance des secteurs d'avenir (énergies renouvelables, économie circulaire).",
    sources: [
      "https://www.lemonde.fr/planete/article/2022/04/05/la-gauche-et-la-croissance-verte-une-nouvelle-approche_6120000_3244.html",
      "https://www.liberation.fr/planete/2022/03/22/la-gauche-et-le-developpement-durable_6118000_3244.html"
    ]
  },
  {
    question: "La gauche est laxiste sur la sécurité ?",
    reponse: "Non, la gauche prône une approche préventive de la sécurité avec plus de police de proximité, de justice sociale et d'éducation. Elle s'oppose aux politiques répressives inefficaces.",
    sources: [
      "https://www.lemonde.fr/societe/article/2022/03/15/la-gauche-et-la-securite-une-approche-preventive_6118000_3224.html",
      "https://www.liberation.fr/societe/2022/02/28/la-gauche-et-la-justice-sociale_6116000_3224.html"
    ]
  }
];

const manipulationBlocks = [
  {
    icon: "⚠️",
    title: "Les industriels déguisés en \"petits producteurs\"",
    text: "Derrière l'image du \"petit producteur\", ce sont des multinationales qui défendent pesticides et pratiques polluantes.",
    cssClass: "industriels"
  },
  {
    icon: "⚠️",
    title: "Sabotage des services publics",
    text: "On réduit volontairement les budgets, puis on justifie la privatisation au nom de l'efficacité.",
    cssClass: "privatisation"
  },
  {
    icon: "⚠️",
    title: "Médias concentrés",
    text: "Une poignée de milliardaires contrôle la majorité des médias, influençant directement l'opinion.",
    cssClass: "medias"
  },
  {
    icon: "⚠️",
    title: "Le bouc-émissaire étranger",
    text: "Accuser \"l'étranger\" détourne des véritables enjeux économiques et sociaux.",
    cssClass: "etrangers"
  },
  {
    icon: "⚠️",
    title: "Fraude aux allocs vs fraude fiscale",
    text: "On pointe du doigt la fraude sociale (minoritaire) pour mieux cacher la fraude fiscale (majoritaire).",
    cssClass: "fraude"
  },
  {
    icon: "⚠️",
    title: "Optimisation fiscale et paradis fiscaux",
    text: "Les grandes fortunes et multinationales déplacent leurs profits à l'étranger pour ne presque pas payer d'impôts.",
    cssClass: "evasion"
  },
  {
    icon: "⚠️",
    title: "Lobbying et portes tournantes",
    text: "Des ex-ministres ou hauts fonctionnaires rejoignent les conseils d'administration des grandes entreprises, assurant la continuité des privilèges.",
    cssClass: "lobbying"
  },
  {
    icon: "⚠️",
    title: "Greenwashing",
    text: "Des industries polluantes se parent d'un vernis \"vert\" pour continuer à exploiter sans changer leurs pratiques.",
    cssClass: "greenwashing"
  },
  {
    icon: "⚠️",
    title: "Casse du droit du travail",
    text: "Sous prétexte de \"flexibilité\", on fragilise la protection des salariés pour maximiser les profits.",
    cssClass: "travail"
  }
];

function card(ac){
  return `<article class="card">
    <div class="kicker">${ac.kicker}</div>
    <h3>${ac.title}</h3>
    <p>${ac.text}</p>
    <p class="meta">${ac.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</p>
    <p class="meta"><a href="${ac.source}" target="_blank" rel="noopener">Source</a></p>
  </article>`;
}

function scenarioCard(s){
  const id = `t${Math.random().toString(36).slice(2,8)}`;
  return `<article class="scenario">
    <header>
      <h3>${s.title}</h3>
      <div class="toggle-label">
        <input id="${id}" type="checkbox" class="toggle" aria-label="Basculer le scénario" />
      </div>
    </header>
    <p class="effect">${s.effect}</p>
    <div class="result good"><strong>Approches constructives :</strong> ${s.good}</div>
    <div class="result bad" hidden><strong>Effets négatifs :</strong> ${s.bad}</div>
    <p class="meta">Sources : ${s.sources.map(u=>`<a href="${u}" target="_blank" rel="noopener">lien</a>`).join(' · ')}</p>
  </article>`;
}

function faqItem(p){
  return `<article class="faq-item">
    <h3>${p.question}</h3>
    <p>${p.reponse}</p>
    <p class="meta">Sources : ${p.sources.map(u=>`<a href="${u}" target="_blank" rel="noopener">lien</a>`).join(' · ')}</p>
  </article>`;
}

function manipulationBlock(m){
  const cssClass = m.cssClass ? ` ${m.cssClass}` : '';
  return `<article class="manipulation-block${cssClass}">
    <div class="manipulation-icon">${m.icon}</div>
    <div class="manipulation-content">
      <h3>${m.title}</h3>
      <p class="manipulation-text">${m.text}</p>
    </div>
  </article>`;
}

function render(){
  document.getElementById('year').textContent = new Date().getFullYear();

  const a = document.getElementById('acquis-grid');
  a.innerHTML = acquis.map(card).join('');

  const s = document.getElementById('scenarios-grid');
  s.innerHTML = scenarios.map(scenarioCard).join('');

  const f = document.getElementById('faq-grid');
  f.innerHTML = prejuges.map(faqItem).join('');

  const m = document.getElementById('manipulation-grid');
  m.innerHTML = manipulationBlocks.map(manipulationBlock).join('');

  // Toggle behavior to reveal negative outcomes
  s.querySelectorAll('.scenario').forEach(sc => {
    const toggle = sc.querySelector('.toggle');
    const bad = sc.querySelector('.result.bad');
    toggle.addEventListener('change', () => {
      bad.hidden = !toggle.checked;
    });
  });

  // Smooth scroll navigation
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Smooth scroll for CTA buttons
  document.querySelectorAll('.btn[href^="#"]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = button.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Highlight active section on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  function highlightActiveSection() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightActiveSection);
  highlightActiveSection(); // Initial call

}

document.addEventListener('DOMContentLoaded', render);
