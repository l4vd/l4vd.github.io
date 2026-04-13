(function initSiteShell() {
  const STORAGE_KEYS = {
    theme: "lvd-theme",
    language: "lvd-language",
  };

  const SUPPORTED_LANGUAGES = ["en", "de"];

  // Add or update your project URLs here.
  const PROJECT_LINKS = {
    rope: "https://github.com/l4vd/RoPE_in_Decision_Transformers",
    gradCam: "",
    misalignment: "",
    generative: "https://github.com/l4vd/Implement_Generative_Models",
    hitSong: "https://github.com/l4vd/Bachelor_Thesis_Hit_Song_Science",
  };

  const MESSAGES = {
    en: {
      meta: {
        title: "LvD | Personal Portfolio - AI and Data Science",
        description:
          "Personal AI and Data Science portfolio by LvD, featuring interactive machine learning demos, reinforcement learning experiments, and research projects.",
      },
      brand: {
        sub: "v10 Portfolio Lab",
      },
      nav: {
        overview: "Overview",
        experience: "Experience",
        mlLab: "ML Lab",
        rlLab: "RL Lab",
        projects: "Projects",
      },
      controls: {
        language: "Language",
        themeToLight: "Theme: Light",
        themeToDark: "Theme: Dark",
      },
      hero: {
        eyebrow: "AI + Data Science Personal Portfolio / v10",
        title:
          "One Interface for Representation Learning and Decision Intelligence",
        copy: "This version merges ML diagnostics with a reinforcement-learning command center. You can optimize a neural network, inspect latent manifolds, train a Q-learning agent, and then explore mini-interactions for flagship projects.",
        pill1: "Neural Training",
        pill2: "Latent Geometry",
        pill3: "GridWorld RL",
        pill4: "Project Widgets",
      },
      skills: {
        label: "Skills",
        title: "Current Skill Snapshot",
        c1Title: "Machine Learning and AI",
        c1L1: "Solid foundation in supervised learning, deep learning, and model evaluation",
        c1L2: "Hands-on experience with small-scale sequence models and reinforcement-learning experiments",
        c1L3: "Familiar with interpretability tools and uncertainty-aware analysis workflows",
        c2Title: "Programming and Systems",
        c2L1: "Python-first workflows for research prototypes and data analysis",
        c2L2: "Working knowledge of Java and full-stack fundamentals for course and personal projects",
        c2L3: "Version control, reproducible experiments, and clear technical documentation",
        c3Title: "Scientific Workflow",
        c3L1: "Hypothesis-driven experimentation with metric tracking and error analysis",
        c3L2: "Experience transferring methods between protein and language-related tasks",
        c3L3: "Comfortable turning quantitative results into concise research narratives",
      },
      experience: {
        label: "Experience",
        title: "Research and Applied Work",
        e1Title: "Research Practicum: LLM Misalignment",
        e1Meta: "Prof. Dr. Milica Gasic | Heinrich-Heine-University",
        e1Body:
          "Investigated mismatch between intended behavior and model responses, with emphasis on measurable evaluation criteria and framework-level diagnostics.",
        e2Title: "Research Practicum: Protein Engineering",
        e2Meta: "Prof. Dr. Birgit Strodel | Forschungszentrum Julich",
        e2Body:
          "Built model-centric workflows for protein binding analysis, focusing on interpretable deep-learning behavior in biologically meaningful feature spaces.",
      },
      nn: {
        label: "Interactive Neural Network",
        title: "MLP Training Console",
        inputX1: "Input x1",
        inputX2: "Input x2",
        targetY: "Target y",
        learningRate: "Learning rate",
        weightDecay: "Weight decay lambda",
        hiddenActivation: "Hidden activation",
        btnStep: "Run 1 Optimizer Step",
        btnRun50: "Run 50 Steps",
        btnReset: "Reset Parameters",
        metricPred: "Prediction y_hat",
        metricLoss: "Loss (BCE + L2)",
        metricGrad: "Gradient Norm",
        metricEpoch: "Epoch",
        lossHistory: "Loss History",
        diagramInput: "Input",
        diagramHidden: "Hidden",
        diagramOutput: "Output",
      },
      latent: {
        label: "Latent Space Explorer",
        title: "Embedding Manifold Inspector",
        alpha: "Rotation alpha",
        beta: "Rotation beta",
        temperature: "Temperature",
        projection: "Projection mode",
        decode: "Decode mode",
        projectionPca: "PCA-like linear map",
        projectionUmap: "UMAP-like nonlinear",
        projectionTsne: "t-SNE-like heavy-tail",
        decodeProtein: "Protein motifs",
        decodeLanguage: "Token semantics",
        decodePolicy: "Policy states",
        metricSeparation: "Cluster Separation",
        metricPoints: "Visible Points",
        readoutLabel: "Decoded Readout",
        readoutHover:
          "Hover over a point to inspect its local manifold meaning.",
        readoutPoint: "{id} -> {meaning}; vector = [{summary}]",
        protein0: "alpha-helix enriched motif manifold",
        protein1: "beta-sheet transition regime",
        protein2: "ligand-pocket interaction basin",
        protein3: "solvent-exposure structural zone",
        language0: "factual grounding neighborhood",
        language1: "instruction-following semantic lane",
        language2: "reasoning-chain latent corridor",
        language3: "high-entropy generation frontier",
        policy0: "safe-policy attractor basin",
        policy1: "exploration-heavy transition cloud",
        policy2: "reward-sparse latent region",
        policy3: "terminal-state convergence pocket",
      },
      rl: {
        envLabel: "Environment",
        envTitle: "GridWorld Editor and Policy Overlay",
        interactionMode: "Interaction mode",
        brushInspect: "Inspect state",
        brushWall: "Paint wall",
        brushTrap: "Paint trap",
        brushGoal: "Set goal",
        brushStart: "Set start",
        brushEmpty: "Erase to empty",
        btnDefault: "Default Map",
        btnMaze: "Generate New Maze",
        btnReset: "Reset Q-table",
        btnStop: "Stop Animation",
        hint: "Tip: set mode to Inspect state and click any cell to view action-values and preferred action.",
        trainLabel: "Training Dashboard",
        trainTitle: "Online Control and Diagnostics",
        alpha: "Learning rate alpha",
        gamma: "Discount gamma",
        epsilon: "Exploration epsilon",
        stepPenalty: "Step penalty",
        maxSteps: "Max steps per episode",
        batchSize: "Batch size",
        btnTrainOne: "Train 1 Episode",
        btnTrainBatch: "Train Batch",
        btnGreedy: "Run Greedy Policy",
        metricEpisodes: "Episodes",
        metricAvgReturn: "Average Return",
        metricBestReturn: "Best Return",
        metricSuccessRate: "Success Rate",
        metricAvgSteps: "Average Steps",
        metricEntropy: "Policy Entropy",
        returnHistory: "Episode Return History",
        successHistory: "Success Moving Average (Window 20)",
        inspectorState: "State-Action Inspector",
        inspectorBellman: "Bellman Update Inspector",
        bellmanDefault:
          "No update yet. Train one episode to inspect the temporal-difference update.",
        actionUp: "Up",
        actionRight: "Right",
        actionDown: "Down",
        actionLeft: "Left",
        stateLabel: "State: ({x}, {y}) / {type}",
        cellEmpty: "empty",
        cellWall: "wall",
        cellTrap: "trap",
        cellGoal: "goal",
        cellStart: "start",
        bellmanSummary:
          "s = ({sx}, {sy}), a = {action}\nQ_old = {qOld}\nreward = {reward}\nmax_a' Q(s', a') = {maxNext}\ntarget = r + gamma * maxQ_next = {target}\nTD error = target - Q_old = {tdError}\nQ_new = Q_old + alpha * TD error = {qNew}",
      },
      projects: {
        label: "Selected Projects",
        title: "Current Directions + Mini Interactions",
        p1Title: "RoPE in Decision Transformers",
        p1Body:
          "Studying long-context policy behavior and representation drift under rotational positional encodings.",
        p1Theta: "RoPE angle theta",
        p1Readout: "Phase shift score: {value}",
        p2Title: "Grad-CAM for Protein Binding Localization",
        p2Body:
          "Interpreting 3D model saliency for ligand-relevant structural regions and uncertainty-aware analysis.",
        p2Regenerate: "Regenerate Heatmap",
        p2Threshold: "Activation threshold",
        p2Coverage: "High-saliency coverage: {value}%",
        p3Title: "LLM Misalignment Framework Design",
        p3Body:
          "Designing evaluators that separate benchmark fluency from objective-level behavioral alignment.",
        p3Snippet: "Sample response snippet",
        p3Risk: "Risk profile",
        p3RiskLow: "Low-risk request",
        p3RiskMedium: "Ambiguous request",
        p3RiskHigh: "High-risk request",
        p3Truth: "Truthfulness confidence",
        p3ScoreBtn: "Score Alignment",
        p3BandStrong: "Strongly aligned",
        p3BandMedium: "Moderately aligned",
        p3BandLow: "Needs review",
        p3Result: "Alignment score: {score} ({band})",
        p4Title: "Generative Models Research",
        p4Body:
          "Exploring controllable generation quality across diffusion and autoregressive regimes with diagnostic proxies.",
        p4Temp: "Sampling temperature",
        p4Generate: "Generate Batch",
        p4Readout: "Batch coherence: {coherence} | FID proxy: {fid}",
        p5Title: "Bachelor Thesis: Hit Song Science",
        p5Body:
          "Song success prediction from audio-profile signals with interpretable scoring and feature-level diagnostics.",
        p5Acoustic: "Acousticness",
        p5Energy: "Energy",
        p5Dance: "Danceability",
        p5Predict: "Predict Song Success",
        p5VerdictNiche: "niche",
        p5VerdictPromising: "promising",
        p5VerdictHigh: "high chart potential",
        p5Readout: "Predicted hit probability: {value}% ({verdict})",
        linkOpen: "Open project",
        linkMissing: "To be added soon",
      },
      footer: {
        main: "LvD / v10 / Unified ML + RL Interactive Portfolio",
        llmNotice: "This website was created with assistance from LLM tools.",
      },
    },
    de: {
      meta: {
        title: "LvD | Personliches Portfolio - KI und Data Science",
        description:
          "Personliches KI- und Data-Science-Portfolio von LvD mit interaktiven Machine-Learning-Demos, Reinforcement-Learning-Experimenten und Forschungsprojekten.",
      },
      brand: {
        sub: "v10 Portfolio-Labor",
      },
      nav: {
        overview: "Uberblick",
        experience: "Erfahrung",
        mlLab: "ML-Labor",
        rlLab: "RL-Labor",
        projects: "Projekte",
      },
      controls: {
        language: "Sprache",
        themeToLight: "Thema: Hell",
        themeToDark: "Thema: Dunkel",
      },
      hero: {
        eyebrow: "KI + Data-Science-Portfolio / v10",
        title:
          "Eine Oberflache fur Reprasentationslernen und Entscheidungsintelligenz",
        copy: "Diese Version vereint ML-Diagnostik mit einer Reinforcement-Learning-Kommandozentrale. Sie konnen ein neuronales Netz optimieren, latente Mannigfaltigkeiten untersuchen, einen Q-Learning-Agenten trainieren und Mini-Interaktionen zu zentralen Projekten erkunden.",
        pill1: "Neuronales Training",
        pill2: "Latente Geometrie",
        pill3: "GridWorld RL",
        pill4: "Projekt-Widgets",
      },
      skills: {
        label: "Kompetenzen",
        title: "Aktueller Kompetenzstand",
        c1Title: "Maschinelles Lernen und KI",
        c1L1: "Solide Grundlagen in ueberwachtem Lernen, Deep Learning und Modellevaluation",
        c1L2: "Praktische Erfahrung mit kleineren Sequenzmodellen und RL-Experimenten",
        c1L3: "Vertraut mit Interpretierbarkeitswerkzeugen und unsicherheitsbewusster Analyse",
        c2Title: "Programmierung und Systeme",
        c2L1: "Python-zentrierte Workflows fuer Forschungsprototypen und Datenanalyse",
        c2L2: "Gute Grundlagen in Java und Full-Stack-Basics fuer Studien- und Nebenprojekte",
        c2L3: "Versionskontrolle, reproduzierbare Experimente und klare technische Dokumentation",
        c3Title: "Wissenschaftlicher Workflow",
        c3L1: "Hypothesengetriebene Experimente mit Metrik-Tracking und Fehleranalyse",
        c3L2: "Erfahrung beim Transfer von Methoden zwischen Protein- und Sprachaufgaben",
        c3L3: "Sichere Aufbereitung quantitativer Ergebnisse zu praegnanten Forschungsnarrativen",
      },
      experience: {
        label: "Erfahrung",
        title: "Forschung und angewandte Arbeit",
        e1Title: "Forschungspraktikum: LLM-Fehlausrichtung",
        e1Meta: "Prof. Dr. Milica Gasic | Heinrich-Heine-Universitat",
        e1Body:
          "Untersuchung von Abweichungen zwischen beabsichtigtem Verhalten und Modellantworten mit Fokus auf messbare Evaluationskriterien und Framework-Diagnostik.",
        e2Title: "Forschungspraktikum: Protein Engineering",
        e2Meta: "Prof. Dr. Birgit Strodel | Forschungszentrum Julich",
        e2Body:
          "Aufbau modellzentrierter Workflows fur Bindungsanalysen mit Schwerpunkt auf interpretierbarem Deep-Learning-Verhalten in biologisch relevanten Merkmalsraumen.",
      },
      nn: {
        label: "Interaktives neuronales Netzwerk",
        title: "MLP-Trainingskonsole",
        inputX1: "Eingabe x1",
        inputX2: "Eingabe x2",
        targetY: "Ziel y",
        learningRate: "Lernrate",
        weightDecay: "Weight Decay lambda",
        hiddenActivation: "Aktivierung verborgen",
        btnStep: "1 Optimizer-Schritt ausfuhren",
        btnRun50: "50 Schritte ausfuhren",
        btnReset: "Parameter zurucksetzen",
        metricPred: "Vorhersage y_hat",
        metricLoss: "Verlust (BCE + L2)",
        metricGrad: "Gradientennorm",
        metricEpoch: "Epoche",
        lossHistory: "Verlauf des Verlusts",
        diagramInput: "Eingabe",
        diagramHidden: "Verborgen",
        diagramOutput: "Ausgabe",
      },
      latent: {
        label: "Latentraum-Explorer",
        title: "Embedding-Manifold-Inspektor",
        alpha: "Rotation alpha",
        beta: "Rotation beta",
        temperature: "Temperatur",
        projection: "Projektionsmodus",
        decode: "Dekodiermodus",
        projectionPca: "PCA-ahnliche lineare Abbildung",
        projectionUmap: "UMAP-ahnlich nichtlinear",
        projectionTsne: "t-SNE-ahnlich heavy-tail",
        decodeProtein: "Proteinmotive",
        decodeLanguage: "Token-Semantik",
        decodePolicy: "Policy-Zustande",
        metricSeparation: "Cluster-Trennung",
        metricPoints: "Sichtbare Punkte",
        readoutLabel: "Dekodierte Ausgabe",
        readoutHover:
          "Bewegen Sie den Cursor uber einen Punkt, um seine lokale Manifold-Bedeutung zu sehen.",
        readoutPoint: "{id} -> {meaning}; Vektor = [{summary}]",
        protein0: "alpha-Helix-angereichertes Motiv-Manifold",
        protein1: "beta-Sheet-Ubergangsregime",
        protein2: "Liganden-Taschen-Interaktionsbecken",
        protein3: "Losungsmittelexponierte Strukturzone",
        language0: "Faktenverankerungs-Nachbarschaft",
        language1: "Semantikspur fur Instruktionsbefolgung",
        language2: "Latenter Korridor fur Argumentationsketten",
        language3: "High-Entropy-Generationsgrenze",
        policy0: "Sicherheits-Policy-Attraktorbecken",
        policy1: "Explorationsstarke Ubergangswolke",
        policy2: "Belohnungsarmer latenter Bereich",
        policy3: "Konvergenztasche fur terminale Zustande",
      },
      rl: {
        envLabel: "Umgebung",
        envTitle: "GridWorld-Editor und Policy-Overlay",
        interactionMode: "Interaktionsmodus",
        brushInspect: "Zustand inspizieren",
        brushWall: "Wand zeichnen",
        brushTrap: "Falle zeichnen",
        brushGoal: "Ziel setzen",
        brushStart: "Start setzen",
        brushEmpty: "Zu leer loschen",
        btnDefault: "Standardkarte",
        btnMaze: "Neues Labyrinth erzeugen",
        btnReset: "Q-Tabelle zurucksetzen",
        btnStop: "Animation stoppen",
        hint: "Tipp: Wahlen Sie Zustand inspizieren und klicken Sie auf eine Zelle, um Aktionswerte und bevorzugte Aktion zu sehen.",
        trainLabel: "Trainings-Dashboard",
        trainTitle: "Online-Steuerung und Diagnostik",
        alpha: "Lernrate alpha",
        gamma: "Diskontfaktor gamma",
        epsilon: "Exploration epsilon",
        stepPenalty: "Schrittstrafe",
        maxSteps: "Maximale Schritte pro Episode",
        batchSize: "Batch-Grosse",
        btnTrainOne: "1 Episode trainieren",
        btnTrainBatch: "Batch trainieren",
        btnGreedy: "Gierige Policy ausfuhren",
        metricEpisodes: "Episoden",
        metricAvgReturn: "Mittlere Ruckgabe",
        metricBestReturn: "Beste Ruckgabe",
        metricSuccessRate: "Erfolgsrate",
        metricAvgSteps: "Durchschnittliche Schritte",
        metricEntropy: "Policy-Entropie",
        returnHistory: "Verlauf der Episodenruckgabe",
        successHistory: "Gleitender Erfolgsdurchschnitt (Fenster 20)",
        inspectorState: "Zustand-Aktion-Inspektor",
        inspectorBellman: "Bellman-Update-Inspektor",
        bellmanDefault:
          "Noch kein Update. Trainieren Sie eine Episode, um das Temporal-Difference-Update zu inspizieren.",
        actionUp: "Oben",
        actionRight: "Rechts",
        actionDown: "Unten",
        actionLeft: "Links",
        stateLabel: "Zustand: ({x}, {y}) / {type}",
        cellEmpty: "leer",
        cellWall: "wand",
        cellTrap: "falle",
        cellGoal: "ziel",
        cellStart: "start",
        bellmanSummary:
          "s = ({sx}, {sy}), a = {action}\nQ_alt = {qOld}\nBelohnung = {reward}\nmax_a' Q(s', a') = {maxNext}\nZiel = r + gamma * maxQ_next = {target}\nTD-Fehler = Ziel - Q_alt = {tdError}\nQ_neu = Q_alt + alpha * TD-Fehler = {qNew}",
      },
      projects: {
        label: "Ausgewahlte Projekte",
        title: "Aktuelle Richtungen + Mini-Interaktionen",
        p1Title: "RoPE in Decision Transformers",
        p1Body:
          "Untersuchung von Long-Context-Policy-Verhalten und Reprasentationsdrift unter rotatorischen Positionskodierungen.",
        p1Theta: "RoPE-Winkel theta",
        p1Readout: "Phasenverschiebungs-Score: {value}",
        p2Title: "Grad-CAM fur Protein-Bindungslokalisierung",
        p2Body:
          "Interpretation von 3D-Modellsalienz fur ligandrelevante Strukturregionen inklusive unsicherheitsbewusster Analyse.",
        p2Regenerate: "Heatmap neu erzeugen",
        p2Threshold: "Aktivierungsschwelle",
        p2Coverage: "Anteil hoher Salienz: {value}%",
        p3Title: "Framework-Design fur LLM-Fehlausrichtung",
        p3Body:
          "Entwicklung von Evaluatoren, die Benchmark-Flussigkeit von objektivem Verhaltens-Alignment trennen.",
        p3Snippet: "Beispielantwort",
        p3Risk: "Risikoprofil",
        p3RiskLow: "Niedrigrisiko-Anfrage",
        p3RiskMedium: "Mehrdeutige Anfrage",
        p3RiskHigh: "Hochrisiko-Anfrage",
        p3Truth: "Wahrheitskonfidenz",
        p3ScoreBtn: "Alignment bewerten",
        p3BandStrong: "Stark ausgerichtet",
        p3BandMedium: "Moderat ausgerichtet",
        p3BandLow: "Prufung erforderlich",
        p3Result: "Alignment-Score: {score} ({band})",
        p4Title: "Forschung zu generativen Modellen",
        p4Body:
          "Erkundung kontrollierbarer Generationsqualitat uber diffusion- und autoregressive Regime hinweg mit diagnostischen Proxys.",
        p4Temp: "Sampling-Temperatur",
        p4Generate: "Batch erzeugen",
        p4Readout: "Batch-Koharenz: {coherence} | FID-Proxy: {fid}",
        p5Title: "Bachelorarbeit: Hit Song Science",
        p5Body:
          "Vorhersage von Songerfolg anhand von Audio-Profil-Signalen mit interpretierbarem Scoring und Feature-Diagnostik.",
        p5Acoustic: "Akustik",
        p5Energy: "Energie",
        p5Dance: "Tanzbarkeit",
        p5Predict: "Songerfolg vorhersagen",
        p5VerdictNiche: "nische",
        p5VerdictPromising: "vielversprechend",
        p5VerdictHigh: "hohes Chart-Potenzial",
        p5Readout: "Vorhergesagte Hit-Wahrscheinlichkeit: {value}% ({verdict})",
        linkOpen: "Projekt offnen",
        linkMissing: "Projekt-URL folgt",
      },
      footer: {
        main: "LvD / v10 / Vereinheitlichtes interaktives ML + RL Portfolio",
        llmNotice:
          "Diese Website wurde mit Unterstutzung von LLM-Tools erstellt.",
      },
    },
  };

  function resolveKey(dict, key) {
    return key.split(".").reduce((acc, segment) => {
      if (!acc || typeof acc !== "object") {
        return undefined;
      }
      return acc[segment];
    }, dict);
  }

  function formatTemplate(template, params) {
    return String(template).replace(/\{(\w+)\}/g, (match, token) => {
      if (Object.prototype.hasOwnProperty.call(params, token)) {
        return String(params[token]);
      }
      return match;
    });
  }

  function getSystemTheme() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  let currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";
  if (currentTheme !== "dark" && currentTheme !== "light") {
    currentTheme = "light";
  }

  let currentLanguage = document.documentElement.getAttribute("lang") || "en";
  if (!SUPPORTED_LANGUAGES.includes(currentLanguage)) {
    currentLanguage = "en";
  }

  function t(key, params = {}) {
    const primary = resolveKey(MESSAGES[currentLanguage], key);
    const fallback = resolveKey(MESSAGES.en, key);
    const resolved = primary !== undefined ? primary : fallback;
    if (resolved === undefined) {
      return key;
    }
    return formatTemplate(resolved, params);
  }

  function setText(selector, value) {
    const node = document.querySelector(selector);
    if (node) {
      node.textContent = value;
    }
  }

  function setLabelForControl(controlId, value) {
    const control = document.getElementById(controlId);
    const label = control ? control.closest("label") : null;
    if (!label) {
      return;
    }

    let prefixNode = Array.from(label.childNodes).find(
      (node) =>
        node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0,
    );

    if (!prefixNode) {
      prefixNode = document.createTextNode("");
      label.insertBefore(prefixNode, label.firstChild);
    }

    prefixNode.nodeValue = `${value}\n            `;
  }

  function setSelectOptionText(controlId, value, text) {
    const select = document.getElementById(controlId);
    if (!select) {
      return;
    }
    const option = Array.from(select.options).find(
      (item) => item.value === value,
    );
    if (option) {
      option.textContent = text;
    }
  }

  function sanitizeProjectUrl(rawUrl) {
    const trimmed = String(rawUrl || "").trim();
    if (trimmed.length === 0) {
      return "";
    }

    try {
      const parsed = new URL(trimmed, window.location.href);
      if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
        return "";
      }
      return parsed.href;
    } catch (_error) {
      return "";
    }
  }

  function applyProjectLinks() {
    const linkMap = [
      { id: "projectLinkRope", key: "rope" },
      { id: "projectLinkGradCam", key: "gradCam" },
      { id: "projectLinkMisalignment", key: "misalignment" },
      { id: "projectLinkGenerative", key: "generative" },
      { id: "projectLinkHitSong", key: "hitSong" },
    ];

    linkMap.forEach(({ id, key }) => {
      const node = document.getElementById(id);
      if (!node) {
        return;
      }

      const safeUrl = sanitizeProjectUrl(PROJECT_LINKS[key]);
      if (safeUrl.length === 0) {
        node.textContent = t("projects.linkMissing");
        node.removeAttribute("href");
        node.removeAttribute("target");
        node.removeAttribute("rel");
        node.removeAttribute("referrerpolicy");
        node.classList.add("is-disabled");
        node.setAttribute("aria-disabled", "true");
        node.tabIndex = -1;
        return;
      }

      node.textContent = t("projects.linkOpen");
      node.setAttribute("href", safeUrl);
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer");
      node.setAttribute("referrerpolicy", "no-referrer");
      node.classList.remove("is-disabled");
      node.removeAttribute("aria-disabled");
      node.tabIndex = 0;
    });
  }

  function applyStaticTranslations() {
    document.title = t("meta.title");
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("meta.description"));
    }

    setText(".brand-sub", t("brand.sub"));

    const navLinks = document.querySelectorAll("header nav a");
    if (navLinks.length >= 5) {
      navLinks[0].textContent = t("nav.overview");
      navLinks[1].textContent = t("nav.experience");
      navLinks[2].textContent = t("nav.mlLab");
      navLinks[3].textContent = t("nav.rlLab");
      navLinks[4].textContent = t("nav.projects");
    }

    setText("#languageLabel", t("controls.language"));

    setText("#overview .eyebrow", t("hero.eyebrow"));
    setText("#overview h1", t("hero.title"));
    setText("#overview .hero-copy", t("hero.copy"));

    const pills = document.querySelectorAll("#overview .hero-pills span");
    if (pills.length >= 4) {
      pills[0].textContent = t("hero.pill1");
      pills[1].textContent = t("hero.pill2");
      pills[2].textContent = t("hero.pill3");
      pills[3].textContent = t("hero.pill4");
    }

    const skillsSection = document.querySelector("main > section.panel");
    if (skillsSection) {
      const panelLabel = skillsSection.querySelector(".panel-label");
      const title = skillsSection.querySelector("h2");
      if (panelLabel) {
        panelLabel.textContent = t("skills.label");
      }
      if (title) {
        title.textContent = t("skills.title");
      }

      const skillCards = skillsSection.querySelectorAll(".skill-card");
      if (skillCards.length >= 3) {
        const card1 = skillCards[0];
        const card2 = skillCards[1];
        const card3 = skillCards[2];

        card1.querySelector("h3").textContent = t("skills.c1Title");
        card1.querySelectorAll("li")[0].textContent = t("skills.c1L1");
        card1.querySelectorAll("li")[1].textContent = t("skills.c1L2");
        card1.querySelectorAll("li")[2].textContent = t("skills.c1L3");

        card2.querySelector("h3").textContent = t("skills.c2Title");
        card2.querySelectorAll("li")[0].textContent = t("skills.c2L1");
        card2.querySelectorAll("li")[1].textContent = t("skills.c2L2");
        card2.querySelectorAll("li")[2].textContent = t("skills.c2L3");

        card3.querySelector("h3").textContent = t("skills.c3Title");
        card3.querySelectorAll("li")[0].textContent = t("skills.c3L1");
        card3.querySelectorAll("li")[1].textContent = t("skills.c3L2");
        card3.querySelectorAll("li")[2].textContent = t("skills.c3L3");
      }
    }

    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      setText("#experience > .panel-label", t("experience.label"));
      setText("#experience > h2", t("experience.title"));
      const items = experienceSection.querySelectorAll(".timeline-item");
      if (items.length >= 2) {
        items[0].querySelector("h3").textContent = t("experience.e1Title");
        items[0].querySelector(".meta").textContent = t("experience.e1Meta");
        items[0].querySelector(".meta + p").textContent =
          t("experience.e1Body");

        items[1].querySelector("h3").textContent = t("experience.e2Title");
        items[1].querySelector(".meta").textContent = t("experience.e2Meta");
        items[1].querySelector(".meta + p").textContent =
          t("experience.e2Body");
      }
    }

    setText(
      "#interactive-lab > article:first-child .panel-label",
      t("nn.label"),
    );
    setText("#interactive-lab > article:first-child h2", t("nn.title"));
    setLabelForControl("nnX1", t("nn.inputX1"));
    setLabelForControl("nnX2", t("nn.inputX2"));
    setLabelForControl("nnTarget", t("nn.targetY"));
    setLabelForControl("nnLr", t("nn.learningRate"));
    setLabelForControl("nnWd", t("nn.weightDecay"));
    setLabelForControl("nnHiddenActivation", t("nn.hiddenActivation"));
    setText("#nnStepTrain", t("nn.btnStep"));
    setText("#nnRun50", t("nn.btnRun50"));
    setText("#nnRandomize", t("nn.btnReset"));

    const nnMetricLabels = document.querySelectorAll(
      "#interactive-lab > article:first-child .metrics-4 .metric-label",
    );
    if (nnMetricLabels.length >= 4) {
      nnMetricLabels[0].textContent = t("nn.metricPred");
      nnMetricLabels[1].textContent = t("nn.metricLoss");
      nnMetricLabels[2].textContent = t("nn.metricGrad");
      nnMetricLabels[3].textContent = t("nn.metricEpoch");
    }
    setText(
      "#interactive-lab > article:first-child .chart-box .metric-label",
      t("nn.lossHistory"),
    );

    setText(
      "#interactive-lab > article:last-child .panel-label",
      t("latent.label"),
    );
    setText("#interactive-lab > article:last-child h2", t("latent.title"));
    setLabelForControl("latentAlpha", t("latent.alpha"));
    setLabelForControl("latentBeta", t("latent.beta"));
    setLabelForControl("latentTemp", t("latent.temperature"));
    setLabelForControl("latentProjectionMode", t("latent.projection"));
    setLabelForControl("latentDecodeMode", t("latent.decode"));
    setSelectOptionText(
      "latentProjectionMode",
      "pca",
      t("latent.projectionPca"),
    );
    setSelectOptionText(
      "latentProjectionMode",
      "umap",
      t("latent.projectionUmap"),
    );
    setSelectOptionText(
      "latentProjectionMode",
      "tsne",
      t("latent.projectionTsne"),
    );
    setSelectOptionText(
      "latentDecodeMode",
      "protein",
      t("latent.decodeProtein"),
    );
    setSelectOptionText(
      "latentDecodeMode",
      "language",
      t("latent.decodeLanguage"),
    );
    setSelectOptionText("latentDecodeMode", "policy", t("latent.decodePolicy"));

    const latentMetrics = document.querySelectorAll(
      "#interactive-lab > article:last-child .metrics-2 .metric-label",
    );
    if (latentMetrics.length >= 2) {
      latentMetrics[0].textContent = t("latent.metricSeparation");
      latentMetrics[1].textContent = t("latent.metricPoints");
    }
    setText(
      "#interactive-lab > article:last-child .readout-box .metric-label",
      t("latent.readoutLabel"),
    );

    setText("#rl-lab > article:first-child .panel-label", t("rl.envLabel"));
    setText("#rl-lab > article:first-child h2", t("rl.envTitle"));
    setLabelForControl("rlBrushSelect", t("rl.interactionMode"));
    setSelectOptionText("rlBrushSelect", "inspect", t("rl.brushInspect"));
    setSelectOptionText("rlBrushSelect", "wall", t("rl.brushWall"));
    setSelectOptionText("rlBrushSelect", "trap", t("rl.brushTrap"));
    setSelectOptionText("rlBrushSelect", "goal", t("rl.brushGoal"));
    setSelectOptionText("rlBrushSelect", "start", t("rl.brushStart"));
    setSelectOptionText("rlBrushSelect", "empty", t("rl.brushEmpty"));
    setText("#rlDefaultMapBtn", t("rl.btnDefault"));
    setText("#rlMazeMapBtn", t("rl.btnMaze"));
    setText("#rlResetQBtn", t("rl.btnReset"));
    setText("#rlStopAnimBtn", t("rl.btnStop"));
    setText("#rl-lab > article:first-child .hint", t("rl.hint"));

    setText("#rl-lab > article:last-child .panel-label", t("rl.trainLabel"));
    setText("#rl-lab > article:last-child h2", t("rl.trainTitle"));
    setLabelForControl("rlAlpha", t("rl.alpha"));
    setLabelForControl("rlGamma", t("rl.gamma"));
    setLabelForControl("rlEpsilon", t("rl.epsilon"));
    setLabelForControl("rlStepCost", t("rl.stepPenalty"));
    setLabelForControl("rlMaxSteps", t("rl.maxSteps"));
    setLabelForControl("rlBatchEpisodes", t("rl.batchSize"));
    setText("#rlTrainOneBtn", t("rl.btnTrainOne"));
    setText("#rlTrainBatchBtn", t("rl.btnTrainBatch"));
    setText("#rlPlayPolicyBtn", t("rl.btnGreedy"));

    const rlMetrics = document.querySelectorAll(
      "#rl-lab > article:last-child .metrics-3 .metric-label",
    );
    if (rlMetrics.length >= 6) {
      rlMetrics[0].textContent = t("rl.metricEpisodes");
      rlMetrics[1].textContent = t("rl.metricAvgReturn");
      rlMetrics[2].textContent = t("rl.metricBestReturn");
      rlMetrics[3].textContent = t("rl.metricSuccessRate");
      rlMetrics[4].textContent = t("rl.metricAvgSteps");
      rlMetrics[5].textContent = t("rl.metricEntropy");
    }

    const rlChartLabels = document.querySelectorAll(
      "#rl-lab > article:last-child .chart-box .metric-label",
    );
    if (rlChartLabels.length >= 2) {
      rlChartLabels[0].textContent = t("rl.returnHistory");
      rlChartLabels[1].textContent = t("rl.successHistory");
    }

    const qRows = document.querySelectorAll(
      "#rl-lab > article:last-child .q-row span",
    );
    if (qRows.length >= 4) {
      qRows[0].textContent = t("rl.actionUp");
      qRows[1].textContent = t("rl.actionRight");
      qRows[2].textContent = t("rl.actionDown");
      qRows[3].textContent = t("rl.actionLeft");
    }

    const inspectorLabels = document.querySelectorAll(
      "#rl-lab > article:last-child .inspector-card .metric-label",
    );
    if (inspectorLabels.length >= 2) {
      inspectorLabels[0].textContent = t("rl.inspectorState");
      inspectorLabels[1].textContent = t("rl.inspectorBellman");
    }

    setText("#projects > .panel-label", t("projects.label"));
    setText("#projects > h2", t("projects.title"));
    const projectCards = document.querySelectorAll("#projects .project-card");
    if (projectCards.length >= 5) {
      projectCards[0].querySelector("h3").textContent = t("projects.p1Title");
      projectCards[0].querySelector("h3 + p").textContent =
        t("projects.p1Body");
      projectCards[1].querySelector("h3").textContent = t("projects.p2Title");
      projectCards[1].querySelector("h3 + p").textContent =
        t("projects.p2Body");
      projectCards[2].querySelector("h3").textContent = t("projects.p3Title");
      projectCards[2].querySelector("h3 + p").textContent =
        t("projects.p3Body");
      projectCards[3].querySelector("h3").textContent = t("projects.p4Title");
      projectCards[3].querySelector("h3 + p").textContent =
        t("projects.p4Body");
      projectCards[4].querySelector("h3").textContent = t("projects.p5Title");
      projectCards[4].querySelector("h3 + p").textContent =
        t("projects.p5Body");
    }

    setLabelForControl("ropeTheta", t("projects.p1Theta"));
    setText("#camRegenerate", t("projects.p2Regenerate"));
    setLabelForControl("camThreshold", t("projects.p2Threshold"));
    setLabelForControl("alignInput", t("projects.p3Snippet"));
    setLabelForControl("alignRisk", t("projects.p3Risk"));
    setSelectOptionText("alignRisk", "low", t("projects.p3RiskLow"));
    setSelectOptionText("alignRisk", "medium", t("projects.p3RiskMedium"));
    setSelectOptionText("alignRisk", "high", t("projects.p3RiskHigh"));
    setLabelForControl("alignTruth", t("projects.p3Truth"));
    setText("#alignScoreBtn", t("projects.p3ScoreBtn"));
    setLabelForControl("genTemp", t("projects.p4Temp"));
    setText("#genSampleBtn", t("projects.p4Generate"));
    setLabelForControl("hitAcoustic", t("projects.p5Acoustic"));
    setLabelForControl("hitEnergy", t("projects.p5Energy"));
    setLabelForControl("hitDance", t("projects.p5Dance"));
    setText("#hitPredictBtn", t("projects.p5Predict"));
    applyProjectLinks();

    setText(".footer > p:first-child", t("footer.main"));
    setText("#llmNotice", t("footer.llmNotice"));
  }

  function updateThemeToggle() {
    const toggle = document.getElementById("themeToggle");
    if (!toggle) {
      return;
    }
    const text =
      currentTheme === "dark"
        ? t("controls.themeToLight")
        : t("controls.themeToDark");
    toggle.textContent = text;
    toggle.setAttribute("aria-label", text);
    toggle.title = text;
  }

  function applyTheme(theme, persist) {
    const normalized = theme === "dark" ? "dark" : "light";
    currentTheme = normalized;
    document.documentElement.setAttribute("data-theme", normalized);
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEYS.theme, normalized);
      } catch (_error) {
        // Ignore storage failures in restricted environments.
      }
    }
    updateThemeToggle();
    window.dispatchEvent(
      new CustomEvent("app:themechange", { detail: { theme: normalized } }),
    );
  }

  function applyLanguage(language, persist) {
    const normalized = SUPPORTED_LANGUAGES.includes(language) ? language : "en";
    currentLanguage = normalized;
    document.documentElement.setAttribute("lang", normalized);
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEYS.language, normalized);
      } catch (_error) {
        // Ignore storage failures in restricted environments.
      }
    }

    const languageSelect = document.getElementById("languageSelect");
    if (languageSelect) {
      languageSelect.value = normalized;
    }

    applyStaticTranslations();
    updateThemeToggle();
    window.dispatchEvent(
      new CustomEvent("app:languagechange", {
        detail: { language: normalized },
      }),
    );
  }

  function toggleTheme() {
    applyTheme(currentTheme === "dark" ? "light" : "dark", true);
  }

  function initControls() {
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => toggleTheme());
    }

    const languageSelect = document.getElementById("languageSelect");
    if (languageSelect) {
      languageSelect.addEventListener("change", (event) => {
        applyLanguage(event.target.value, true);
      });
    }
  }

  let savedTheme = "light";
  try {
    savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || getSystemTheme();
  } catch (_error) {
    savedTheme = document.documentElement.getAttribute("data-theme") || "light";
  }

  let savedLanguage = "en";
  try {
    savedLanguage = localStorage.getItem(STORAGE_KEYS.language) || "en";
  } catch (_error) {
    savedLanguage = document.documentElement.getAttribute("lang") || "en";
  }

  initControls();
  applyLanguage(savedLanguage, false);
  applyTheme(savedTheme, false);

  const allowPublicMutations =
    document.documentElement.getAttribute("data-allow-siteui-mutations") ===
    "true";

  window.siteUi = {
    t,
    getTheme: () => currentTheme,
    getLanguage: () => currentLanguage,
    getProjectLinks: () => ({ ...PROJECT_LINKS }),
    onThemeChange: (handler) => {
      window.addEventListener("app:themechange", (event) => {
        handler(event.detail.theme);
      });
    },
    onLanguageChange: (handler) => {
      window.addEventListener("app:languagechange", (event) => {
        handler(event.detail.language);
      });
    },
  };

  if (allowPublicMutations) {
    window.siteUi.setTheme = (theme) => applyTheme(theme, true);
    window.siteUi.setLanguage = (language) => applyLanguage(language, true);
    window.siteUi.setProjectLink = (projectKey, url) => {
      if (!Object.prototype.hasOwnProperty.call(PROJECT_LINKS, projectKey)) {
        return;
      }

      const safeUrl = sanitizeProjectUrl(url);
      PROJECT_LINKS[projectKey] = safeUrl;
      applyProjectLinks();
    };
  }
})();

(function initFormulaParallax() {
  const formulaLayer = document.getElementById("formulaLayer");
  if (!formulaLayer) {
    return;
  }

  const formulaNodes = Array.from(formulaLayer.querySelectorAll(".formula"));
  const formulaPool = [
    "Q(s,a) \\leftarrow Q(s,a) + \\alpha\\left[r + \\gamma \\max_{a'} Q(s',a') - Q(s,a)\\right]",
    "\\mathrm{ELBO} = \\mathbb{E}_{q(z\\mid x)}[\\log p(x\\mid z)] - \\beta \\; D_{KL}(q(z\\mid x)\\|p(z))",
    "\\mathrm{Attn}(Q,K,V)=\\mathrm{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V",
    "A^{\\pi}(s,a)=Q^{\\pi}(s,a)-V^{\\pi}(s)",
    "L = \\mathrm{BCE}(y,\\hat{y}) + \\lambda\\lVert \\theta \\rVert_2^2",
    "\\delta_t = r_t + \\gamma V(s_{t+1}) - V(s_t)",
    "I(X;Z)=\\mathbb{E}\\left[\\log\\frac{p(z\\mid x)}{p(z)}\\right]",
    "\\pi(a\\mid s)=\\frac{\\exp(Q(s,a)/\\tau)}{\\sum_b \\exp(Q(s,b)/\\tau)}",
    "\\theta_{k+1}=\\theta_k-\\eta \\frac{\\hat{m}}{\\sqrt{\\hat{v}}+\\epsilon}",
    "\\mathrm{CKA}(K,L)=\\frac{\\lVert K_cL_c\\rVert_F^2}{\\lVert K_c\\rVert_F \\lVert L_c\\rVert_F}",
    "p(\\theta\\mid D) \\propto p(D\\mid \\theta)p(\\theta)",
    "\\mathrm{KL}(p\\|q)=\\sum_i p_i \\log\\frac{p_i}{q_i}",
    "R(\\theta)=\\mathbb{E}_{\\tau\\sim\\pi_\\theta}\\left[\\sum_t \\gamma^t r_t\\right]",
    "\\nabla_\\theta J(\\theta)=\\mathbb{E}[\\nabla_\\theta\\log\\pi_\\theta(a_t\\mid s_t)A_t]",
    "z = \\mu + \\sigma \\odot \\epsilon, \\; \\epsilon \\sim \\mathcal{N}(0,I)",
    "\\cos(\\mathbf{a},\\mathbf{b})=\\frac{\\mathbf{a}^T\\mathbf{b}}{\\lVert \\mathbf{a} \\rVert_2\\lVert \\mathbf{b} \\rVert_2}",
    "\\mathcal{L}_{\\text{PPO}}=\\mathbb{E}[\\min(r_t(\\theta)A_t,\\operatorname{clip}(r_t(\\theta),1-\\epsilon,1+\\epsilon)A_t)]",
    "\\operatorname{MSE}(y,\\hat{y})=\\frac{1}{n}\\sum_{i=1}^n(y_i-\\hat{y}_i)^2",
    "\\operatorname{softmax}(x_i)=\\frac{e^{x_i}}{\\sum_j e^{x_j}}",
    "\\mathrm{Var}(X)=\\mathbb{E}[X^2]-\\mathbb{E}[X]^2",
  ];

  function renderFormula(node, tex) {
    if (window.katex && typeof window.katex.render === "function") {
      window.katex.render(tex, node, {
        throwOnError: false,
      });
    } else {
      node.textContent = tex;
    }
  }

  formulaNodes.forEach((node, idx) => {
    const formula = formulaPool[idx % formulaPool.length];
    renderFormula(node, formula);
  });

  window.addEventListener("pointermove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    formulaNodes.forEach((node, idx) => {
      const gain = 4 + idx * 1.5;
      node.style.translate = `${x * gain}px ${-y * gain * 0.8}px`;
    });
  });

  setInterval(() => {
    const node = formulaNodes[Math.floor(Math.random() * formulaNodes.length)];
    const nextFormula =
      formulaPool[Math.floor(Math.random() * formulaPool.length)];
    renderFormula(node, nextFormula);
  }, 3600);
})();

(function initNeuralAndLatentLab() {
  function byId(id) {
    return document.getElementById(id);
  }

  const requiredIds = ["nnNetworkSvg", "latentCanvas"];
  if (!requiredIds.every((id) => byId(id))) {
    return;
  }

  function formatNum(value, digits) {
    return Number.parseFloat(value).toFixed(digits);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function randomWeight(scale) {
    return (Math.random() * 2 - 1) * scale;
  }

  const ui = window.siteUi;
  const t = (key, params) => (ui ? ui.t(key, params) : key);

  const themePalettes = {
    light: {
      networkBg: "rgba(252, 255, 255, 0.93)",
      networkTitle: "#28507c",
      networkNodeLabel: "#24445f",
      edgePositive: "#0f7f8f",
      edgeNegative: "#d96549",
      edgeLabelPositive: "#2a5f84",
      edgeLabelNegative: "#9e4635",
      chartGrid: "rgba(26, 58, 87, 0.2)",
      chartLine: "#0f7f8f",
      latentGrid: "rgba(88, 136, 182, 0.22)",
      latentAxis: "rgba(88, 136, 182, 0.38)",
      latentPoints: ["#0f7f8f", "#d96549", "#2f4f8f", "#95651a"],
    },
    dark: {
      networkBg: "rgba(244, 252, 255, 0.88)",
      networkTitle: "#28507c",
      networkNodeLabel: "#24445f",
      edgePositive: "#0f7f8f",
      edgeNegative: "#d96549",
      edgeLabelPositive: "#2a5f84",
      edgeLabelNegative: "#9e4635",
      chartGrid: "rgba(26, 58, 87, 0.2)",
      chartLine: "#0f7f8f",
      latentGrid: "rgba(145, 192, 239, 0.2)",
      latentAxis: "rgba(169, 209, 245, 0.42)",
      latentPoints: ["#0f7f8f", "#d96549", "#2f4f8f", "#95651a"],
    },
  };

  function getThemePalette() {
    const theme = ui ? ui.getTheme() : "light";
    return themePalettes[theme] || themePalettes.light;
  }

  const sliderConfig = {
    nnX1: { digits: 2 },
    nnX2: { digits: 2 },
    nnTarget: { digits: 2 },
    nnLr: { digits: 3 },
    nnWd: { digits: 3 },
    latentAlpha: { digits: 0, suffix: " deg" },
    latentBeta: { digits: 0, suffix: " deg" },
    latentTemp: { digits: 2 },
  };

  Object.entries(sliderConfig).forEach(([id, config]) => {
    const input = byId(id);
    const output = byId(`${id}Value`);
    if (!input || !output) {
      return;
    }

    const suffix = config.suffix || "";
    output.textContent = `${formatNum(input.value, config.digits)}${suffix}`;

    input.addEventListener("input", () => {
      output.textContent = `${formatNum(input.value, config.digits)}${suffix}`;
      if (id.startsWith("latent")) {
        drawLatentSpace();
      } else {
        updateNetwork({ recordHistory: false });
      }
    });
  });

  const activationFns = {
    sigmoid: {
      f: (x) => 1 / (1 + Math.exp(-x)),
      dFromOutput: (a) => a * (1 - a),
    },
    tanh: {
      f: (x) => Math.tanh(x),
      dFromOutput: (a) => 1 - a * a,
    },
    relu: {
      f: (x) => (x > 0 ? x : 0),
      dFromZ: (z) => (z > 0 ? 1 : 0),
    },
  };

  const nnState = {
    w1: [
      [randomWeight(0.9), randomWeight(0.9)],
      [randomWeight(0.9), randomWeight(0.9)],
      [randomWeight(0.9), randomWeight(0.9)],
    ],
    b1: [randomWeight(0.35), randomWeight(0.35), randomWeight(0.35)],
    w2: [randomWeight(0.85), randomWeight(0.85), randomWeight(0.85)],
    b2: randomWeight(0.35),
    epoch: 0,
    gradNorm: 0,
    history: [],
  };

  const networkSvg = byId("nnNetworkSvg");
  const svgNS = "http://www.w3.org/2000/svg";
  const nodeValueElements = new Map();
  const edgeElements = [];

  const inputNodes = [
    { x: 92, y: 110, name: "x1" },
    { x: 92, y: 234, name: "x2" },
  ];
  const hiddenNodes = [
    { x: 350, y: 72, name: "h1" },
    { x: 350, y: 172, name: "h2" },
    { x: 350, y: 272, name: "h3" },
  ];
  const outputNode = { x: 608, y: 172, name: "y_hat" };

  function createSvgElement(name, attrs) {
    const el = document.createElementNS(svgNS, name);
    Object.entries(attrs).forEach(([key, value]) =>
      el.setAttribute(key, value),
    );
    return el;
  }

  function buildNetworkSvg() {
    const palette = getThemePalette();

    networkSvg.replaceChildren();
    edgeElements.length = 0;
    nodeValueElements.clear();

    const bg = createSvgElement("rect", {
      x: 0,
      y: 0,
      width: 700,
      height: 340,
      fill: palette.networkBg,
    });
    networkSvg.append(bg);

    const labels = [
      { x: 66, y: 48, text: t("nn.diagramInput") },
      { x: 314, y: 48, text: t("nn.diagramHidden") },
      { x: 575, y: 48, text: t("nn.diagramOutput") },
    ];

    labels.forEach((label) => {
      const text = createSvgElement("text", {
        x: label.x,
        y: label.y,
        fill: palette.networkTitle,
        "font-family": "Space Mono, monospace",
        "font-size": "13",
        "font-weight": "700",
      });
      text.textContent = label.text;
      networkSvg.append(text);
    });

    inputNodes.forEach((inputNode, inputIndex) => {
      hiddenNodes.forEach((hiddenNode, hiddenIndex) => {
        const line = createSvgElement("line", {
          x1: inputNode.x,
          y1: inputNode.y,
          x2: hiddenNode.x,
          y2: hiddenNode.y,
          stroke: palette.edgePositive,
          "stroke-width": 2,
          "stroke-linecap": "round",
        });
        networkSvg.append(line);

        const edgeLabel = createSvgElement("text", {
          x: (inputNode.x + hiddenNode.x) / 2 - 22,
          y: (inputNode.y + hiddenNode.y) / 2 - 8,
          class: "edge-label",
        });
        networkSvg.append(edgeLabel);

        edgeElements.push({
          type: "input-hidden",
          i: hiddenIndex,
          j: inputIndex,
          line,
          edgeLabel,
        });
      });
    });

    hiddenNodes.forEach((hiddenNode, hiddenIndex) => {
      const line = createSvgElement("line", {
        x1: hiddenNode.x,
        y1: hiddenNode.y,
        x2: outputNode.x,
        y2: outputNode.y,
        stroke: palette.edgePositive,
        "stroke-width": 2,
        "stroke-linecap": "round",
      });
      networkSvg.append(line);

      const edgeLabel = createSvgElement("text", {
        x: (hiddenNode.x + outputNode.x) / 2 - 16,
        y: (hiddenNode.y + outputNode.y) / 2 - 8,
        class: "edge-label",
      });
      networkSvg.append(edgeLabel);

      edgeElements.push({
        type: "hidden-output",
        i: hiddenIndex,
        line,
        edgeLabel,
      });
    });

    [...inputNodes, ...hiddenNodes, outputNode].forEach((node) => {
      const group = createSvgElement("g", {});
      const ring = createSvgElement("circle", {
        cx: node.x,
        cy: node.y,
        r: 25,
        class: "node-ring",
      });

      const nameText = createSvgElement("text", {
        x: node.x,
        y: node.y - 34,
        "text-anchor": "middle",
        fill: palette.networkNodeLabel,
        "font-family": "Space Mono, monospace",
        "font-size": "11",
        "font-weight": "700",
      });
      nameText.textContent = node.name;

      const valueText = createSvgElement("text", {
        x: node.x,
        y: node.y + 4,
        "text-anchor": "middle",
        class: "node-value",
      });
      valueText.textContent = "0.00";

      group.append(ring, nameText, valueText);
      nodeValueElements.set(node.name, valueText);
      networkSvg.append(group);
    });
  }

  function forwardPass(x1, x2, target) {
    const activationName = byId("nnHiddenActivation").value;
    const activation = activationFns[activationName];

    const z1 = nnState.w1.map(
      (weights, i) => weights[0] * x1 + weights[1] * x2 + nnState.b1[i],
    );
    const h = z1.map((z) => activation.f(z));
    const z2 = nnState.w2.reduce(
      (acc, weight, i) => acc + weight * h[i],
      nnState.b2,
    );
    const yHat = activationFns.sigmoid.f(z2);

    const safeY = clamp(yHat, 1e-6, 1 - 1e-6);
    const bce = -(
      target * Math.log(safeY) +
      (1 - target) * Math.log(1 - safeY)
    );

    const wd = Number(byId("nnWd").value);
    const l2 =
      0.5 *
      wd *
      (nnState.w1.flat().reduce((acc, w) => acc + w * w, 0) +
        nnState.w2.reduce((acc, w) => acc + w * w, 0));

    return {
      activationName,
      z1,
      h,
      yHat,
      loss: bce + l2,
    };
  }

  function updateNodeValues(x1, x2, h, yHat) {
    nodeValueElements.get("x1").textContent = x1.toFixed(2);
    nodeValueElements.get("x2").textContent = x2.toFixed(2);
    nodeValueElements.get("h1").textContent = h[0].toFixed(2);
    nodeValueElements.get("h2").textContent = h[1].toFixed(2);
    nodeValueElements.get("h3").textContent = h[2].toFixed(2);
    nodeValueElements.get("y_hat").textContent = yHat.toFixed(2);
  }

  function updateEdgeStyles() {
    const palette = getThemePalette();
    edgeElements.forEach((edge) => {
      const weight =
        edge.type === "input-hidden"
          ? nnState.w1[edge.i][edge.j]
          : nnState.w2[edge.i];
      const width = 1 + Math.abs(weight) * 3.8;
      const color = weight >= 0 ? palette.edgePositive : palette.edgeNegative;

      edge.line.setAttribute("stroke-width", width.toFixed(2));
      edge.line.setAttribute("stroke", color);
      edge.edgeLabel.textContent = weight.toFixed(2);
      edge.edgeLabel.setAttribute(
        "fill",
        weight >= 0 ? palette.edgeLabelPositive : palette.edgeLabelNegative,
      );
    });
  }

  function updateLossChart() {
    const palette = getThemePalette();
    const canvas = byId("nnLossChart");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = palette.chartGrid;
    ctx.lineWidth = 1;
    for (let i = 1; i <= 4; i += 1) {
      const y = (height / 5) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    if (nnState.history.length < 2) {
      return;
    }

    const history = nnState.history.slice(-220);
    const minLoss = Math.min(...history);
    const maxLoss = Math.max(...history);
    const span = Math.max(maxLoss - minLoss, 1e-6);

    ctx.beginPath();
    history.forEach((loss, idx) => {
      const x = (idx / (history.length - 1)) * (width - 24) + 12;
      const y = height - ((loss - minLoss) / span) * (height - 24) - 12;
      if (idx === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.strokeStyle = palette.chartLine;
    ctx.lineWidth = 2.2;
    ctx.stroke();
  }

  function updateNetwork(options = {}) {
    const shouldRecordHistory = options.recordHistory !== false;
    const x1 = Number(byId("nnX1").value);
    const x2 = Number(byId("nnX2").value);
    const target = Number(byId("nnTarget").value);
    const { h, yHat, loss } = forwardPass(x1, x2, target);

    updateNodeValues(x1, x2, h, yHat);
    updateEdgeStyles();

    byId("nnPredValue").textContent = yHat.toFixed(3);
    byId("nnLossValue").textContent = loss.toFixed(4);
    byId("nnEpochValue").textContent = String(nnState.epoch);
    byId("nnGradNormValue").textContent = nnState.gradNorm.toFixed(3);

    if (
      shouldRecordHistory &&
      (nnState.history.length === 0 || nnState.epoch > 0)
    ) {
      nnState.history.push(loss);
      if (nnState.history.length > 300) {
        nnState.history.shift();
      }
    }

    updateLossChart();
  }

  function trainStep() {
    const x1 = Number(byId("nnX1").value);
    const x2 = Number(byId("nnX2").value);
    const target = Number(byId("nnTarget").value);
    const lr = Number(byId("nnLr").value);
    const wd = Number(byId("nnWd").value);

    const { activationName, z1, h, yHat } = forwardPass(x1, x2, target);
    const dLossDz2 = yHat - target;
    const gradW2 = h.map((hVal, i) => dLossDz2 * hVal + wd * nnState.w2[i]);
    const gradB2 = dLossDz2;

    const gradW1 = [
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    const gradB1 = [0, 0, 0];

    for (let i = 0; i < 3; i += 1) {
      const dLossDh = dLossDz2 * nnState.w2[i];
      const dHidden =
        activationName === "relu"
          ? activationFns.relu.dFromZ(z1[i])
          : activationFns[activationName].dFromOutput(h[i]);

      const dLossDz1 = dLossDh * dHidden;
      gradW1[i][0] = dLossDz1 * x1 + wd * nnState.w1[i][0];
      gradW1[i][1] = dLossDz1 * x2 + wd * nnState.w1[i][1];
      gradB1[i] = dLossDz1;
    }

    let gradNormSquared = gradB2 * gradB2;
    for (let i = 0; i < 3; i += 1) {
      gradNormSquared += gradW2[i] * gradW2[i] + gradB1[i] * gradB1[i];
      gradNormSquared +=
        gradW1[i][0] * gradW1[i][0] + gradW1[i][1] * gradW1[i][1];
    }
    nnState.gradNorm = Math.sqrt(gradNormSquared);

    for (let i = 0; i < 3; i += 1) {
      nnState.w2[i] -= lr * gradW2[i];
      nnState.w1[i][0] -= lr * gradW1[i][0];
      nnState.w1[i][1] -= lr * gradW1[i][1];
      nnState.b1[i] -= lr * gradB1[i];
    }
    nnState.b2 -= lr * gradB2;

    nnState.epoch += 1;
    updateNetwork({ recordHistory: true });
  }

  function randomizeNetwork() {
    nnState.w1 = [
      [randomWeight(0.9), randomWeight(0.9)],
      [randomWeight(0.9), randomWeight(0.9)],
      [randomWeight(0.9), randomWeight(0.9)],
    ];
    nnState.b1 = [randomWeight(0.35), randomWeight(0.35), randomWeight(0.35)];
    nnState.w2 = [randomWeight(0.85), randomWeight(0.85), randomWeight(0.85)];
    nnState.b2 = randomWeight(0.35);
    nnState.epoch = 0;
    nnState.gradNorm = 0;
    nnState.history = [];
    updateNetwork({ recordHistory: false });
  }

  byId("nnStepTrain").addEventListener("click", () => trainStep());
  byId("nnRun50").addEventListener("click", () => {
    for (let i = 0; i < 50; i += 1) {
      trainStep();
    }
  });
  byId("nnRandomize").addEventListener("click", () => randomizeNetwork());
  byId("nnHiddenActivation").addEventListener("change", () =>
    updateNetwork({ recordHistory: false }),
  );

  const latentCanvas = byId("latentCanvas");
  const latentCtx = latentCanvas.getContext("2d");
  const latentTooltip = byId("latentTooltip");
  const latentReadout = byId("latentReadout");
  const latentSeparationValue = byId("latentSeparationValue");
  const latentPointCountValue = byId("latentPointCountValue");

  let latentPoints = [];
  let hoveredPoint = null;

  function gaussianRandom() {
    let u = 0;
    let v = 0;
    while (u === 0) {
      u = Math.random();
    }
    while (v === 0) {
      v = Math.random();
    }
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }

  function generateLatentPoints() {
    const centers = [
      [1.35, 0.2, -0.9, 0.4, 0.1, -0.7],
      [-1.25, 0.9, 0.7, -0.6, 0.8, 0.3],
      [0.3, -1.5, -0.4, 1.15, -0.2, 1.0],
      [-0.75, 1.5, -1.0, 0.35, -0.8, -0.4],
    ];

    latentPoints = [];
    centers.forEach((center, classIndex) => {
      for (let i = 0; i < 54; i += 1) {
        latentPoints.push({
          classIndex,
          id: `z${classIndex}-${i}`,
          vec: center.map((v) => v + gaussianRandom() * 0.35),
        });
      }
    });
  }

  function projectLatent(vec, alphaDeg, betaDeg, temp, mode) {
    const alpha = (alphaDeg * Math.PI) / 180;
    const beta = (betaDeg * Math.PI) / 180;
    const cosA = Math.cos(alpha);
    const sinA = Math.sin(alpha);
    const cosB = Math.cos(beta);
    const sinB = Math.sin(beta);

    let x;
    let y;

    if (mode === "umap") {
      x =
        Math.tanh(vec[0] * cosA + vec[2] * sinB + 0.4 * vec[4]) +
        0.3 * Math.sin(vec[1] * 2);
      y =
        Math.tanh(vec[1] * sinA + vec[3] * cosB - 0.35 * vec[5]) +
        0.3 * Math.cos(vec[0] * 1.6);
    } else if (mode === "tsne") {
      const heavyX =
        Math.sign(vec[0]) * Math.log1p(Math.abs(vec[0] + 0.6 * vec[2]));
      const heavyY =
        Math.sign(vec[1]) * Math.log1p(Math.abs(vec[1] - 0.55 * vec[3]));
      x = heavyX * cosA - heavyY * sinA + 0.3 * vec[4] * sinB;
      y = heavyX * sinA + heavyY * cosA + 0.3 * vec[5] * cosB;
    } else {
      x = vec[0] * cosA - vec[1] * sinA + 0.44 * vec[2] * sinB + 0.2 * vec[4];
      y = vec[0] * sinA + vec[1] * cosA + 0.44 * vec[3] * cosB - 0.2 * vec[5];
    }

    return {
      x: x * (86 / temp),
      y: y * (86 / temp),
    };
  }

  function drawLatentGrid(width, height) {
    const palette = getThemePalette();
    latentCtx.strokeStyle = palette.latentGrid;
    latentCtx.lineWidth = 1;

    for (let i = 1; i <= 7; i += 1) {
      const x = (width / 8) * i;
      const y = (height / 8) * i;
      latentCtx.beginPath();
      latentCtx.moveTo(x, 0);
      latentCtx.lineTo(x, height);
      latentCtx.stroke();
      latentCtx.beginPath();
      latentCtx.moveTo(0, y);
      latentCtx.lineTo(width, y);
      latentCtx.stroke();
    }

    latentCtx.strokeStyle = palette.latentAxis;
    latentCtx.beginPath();
    latentCtx.moveTo(width / 2, 0);
    latentCtx.lineTo(width / 2, height);
    latentCtx.stroke();
    latentCtx.beginPath();
    latentCtx.moveTo(0, height / 2);
    latentCtx.lineTo(width, height / 2);
    latentCtx.stroke();
  }

  function computeSeparation(points) {
    const groups = [[], [], [], []];
    points.forEach((point) => groups[point.classIndex].push(point));

    const centroids = groups.map((group) => {
      const sum = group.reduce(
        (acc, p) => {
          acc.x += p.screenX;
          acc.y += p.screenY;
          return acc;
        },
        { x: 0, y: 0 },
      );
      return {
        x: sum.x / Math.max(group.length, 1),
        y: sum.y / Math.max(group.length, 1),
      };
    });

    let within = 0;
    let withinCount = 0;
    groups.forEach((group, idx) => {
      group.forEach((point) => {
        within += Math.hypot(
          point.screenX - centroids[idx].x,
          point.screenY - centroids[idx].y,
        );
        withinCount += 1;
      });
    });
    within /= Math.max(withinCount, 1);

    let between = 0;
    let betweenCount = 0;
    for (let i = 0; i < centroids.length; i += 1) {
      for (let j = i + 1; j < centroids.length; j += 1) {
        between += Math.hypot(
          centroids[i].x - centroids[j].x,
          centroids[i].y - centroids[j].y,
        );
        betweenCount += 1;
      }
    }
    between /= Math.max(betweenCount, 1);

    return between / Math.max(within, 1e-6);
  }

  function drawLatentSpace() {
    const palette = getThemePalette();
    const width = latentCanvas.width;
    const height = latentCanvas.height;
    const alpha = Number(byId("latentAlpha").value);
    const beta = Number(byId("latentBeta").value);
    const temp = Number(byId("latentTemp").value);
    const mode = byId("latentProjectionMode").value;

    latentCtx.clearRect(0, 0, width, height);
    drawLatentGrid(width, height);

    latentPoints.forEach((point) => {
      const projected = projectLatent(point.vec, alpha, beta, temp, mode);
      point.screenX = width / 2 + projected.x;
      point.screenY = height / 2 - projected.y;

      latentCtx.beginPath();
      latentCtx.arc(
        point.screenX,
        point.screenY,
        hoveredPoint === point ? 5.2 : 3.2,
        0,
        Math.PI * 2,
      );
      latentCtx.fillStyle = palette.latentPoints[point.classIndex];
      latentCtx.globalAlpha = hoveredPoint === point ? 0.95 : 0.74;
      latentCtx.fill();
      latentCtx.globalAlpha = 1;
    });

    const separation = computeSeparation(latentPoints);
    latentSeparationValue.textContent = separation.toFixed(2);
    latentPointCountValue.textContent = String(latentPoints.length);
  }

  function nearestLatentPoint(mouseX, mouseY) {
    let nearest = null;
    let minDistance = Infinity;

    latentPoints.forEach((point) => {
      const d = Math.hypot(point.screenX - mouseX, point.screenY - mouseY);
      if (d < minDistance) {
        minDistance = d;
        nearest = point;
      }
    });

    return minDistance < 14 ? nearest : null;
  }

  function getDecodeDictionary() {
    if (decodeDictionaryCache) {
      return decodeDictionaryCache;
    }

    decodeDictionaryCache = {
      protein: [
        t("latent.protein0"),
        t("latent.protein1"),
        t("latent.protein2"),
        t("latent.protein3"),
      ],
      language: [
        t("latent.language0"),
        t("latent.language1"),
        t("latent.language2"),
        t("latent.language3"),
      ],
      policy: [
        t("latent.policy0"),
        t("latent.policy1"),
        t("latent.policy2"),
        t("latent.policy3"),
      ],
    };

    return decodeDictionaryCache;
  }

  function updateLatentReadout(point) {
    const mode = byId("latentDecodeMode").value;
    const decodeDictionary = getDecodeDictionary();
    if (!point) {
      latentReadout.textContent = t("latent.readoutHover");
      return;
    }

    const summary = point.vec.map((v) => v.toFixed(2)).join(", ");
    latentReadout.textContent = t("latent.readoutPoint", {
      id: point.id,
      meaning: decodeDictionary[mode][point.classIndex],
      summary,
    });
  }

  let decodeDictionaryCache = null;
  let pointerFrameRequested = false;
  let pendingPointer = null;

  function handleLatentPointerMove(pointer) {
    const rect = latentCanvas.getBoundingClientRect();
    const scaleX = latentCanvas.width / rect.width;
    const scaleY = latentCanvas.height / rect.height;
    const mouseX = (pointer.clientX - rect.left) * scaleX;
    const mouseY = (pointer.clientY - rect.top) * scaleY;

    const previousHoveredPoint = hoveredPoint;
    hoveredPoint = nearestLatentPoint(mouseX, mouseY);

    if (hoveredPoint) {
      latentTooltip.hidden = false;
      latentTooltip.style.left = `${pointer.clientX - rect.left}px`;
      latentTooltip.style.top = `${pointer.clientY - rect.top}px`;
      latentTooltip.textContent = hoveredPoint.id;
    } else {
      latentTooltip.hidden = true;
    }

    if (previousHoveredPoint !== hoveredPoint) {
      updateLatentReadout(hoveredPoint);
      drawLatentSpace();
    }
  }

  latentCanvas.addEventListener("mousemove", (event) => {
    pendingPointer = { clientX: event.clientX, clientY: event.clientY };
    if (pointerFrameRequested) {
      return;
    }

    pointerFrameRequested = true;
    window.requestAnimationFrame(() => {
      pointerFrameRequested = false;
      if (!pendingPointer) {
        return;
      }

      const pointer = pendingPointer;
      pendingPointer = null;
      handleLatentPointerMove(pointer);
    });
  });

  latentCanvas.addEventListener("mouseleave", () => {
    pendingPointer = null;
    hoveredPoint = null;
    latentTooltip.hidden = true;
    updateLatentReadout(null);
    drawLatentSpace();
  });

  byId("latentDecodeMode").addEventListener("change", () =>
    updateLatentReadout(hoveredPoint),
  );
  byId("latentProjectionMode").addEventListener("change", () =>
    drawLatentSpace(),
  );

  buildNetworkSvg();
  generateLatentPoints();
  updateNetwork({ recordHistory: false });
  drawLatentSpace();

  if (ui) {
    ui.onThemeChange(() => {
      buildNetworkSvg();
      updateNetwork({ recordHistory: false });
      drawLatentSpace();
    });

    ui.onLanguageChange(() => {
      decodeDictionaryCache = null;
      buildNetworkSvg();
      updateNetwork({ recordHistory: false });
      updateLatentReadout(hoveredPoint);
      drawLatentSpace();
    });
  }
})();

(function initRLLab() {
  function byId(id) {
    return document.getElementById(id);
  }

  const requiredIds = ["rlGridCanvas", "rlReturnsChart", "rlSuccessChart"];
  if (!requiredIds.every((id) => byId(id))) {
    return;
  }

  const ui = window.siteUi;
  const t = (key, params) => (ui ? ui.t(key, params) : key);

  const GRID_SIZE = 10;
  const ACTIONS = [
    { key: "rl.actionUp", symbol: "U", dx: 0, dy: -1 },
    { key: "rl.actionRight", symbol: "R", dx: 1, dy: 0 },
    { key: "rl.actionDown", symbol: "D", dx: 0, dy: 1 },
    { key: "rl.actionLeft", symbol: "L", dx: -1, dy: 0 },
  ];

  const CELL = {
    EMPTY: "empty",
    WALL: "wall",
    TRAP: "trap",
    GOAL: "goal",
    START: "start",
  };

  const themePalettes = {
    light: {
      chartGrid: "rgba(102, 138, 171, 0.26)",
      returnsLine: "#0f7f8f",
      successLine: "#d26a4f",
      wallFill: "#758ca3",
      wallStroke: "#4d6479",
      goalFill: "#4b9970",
      goalStroke: "#1d7047",
      trapFill: "#c86877",
      trapStroke: "#a13b53",
      startFill: "#7ca0c7",
      startStroke: "#4f759f",
      emptyFill: "#ecf5fb",
      emptyStroke: "#b8cbdd",
      arrowStroke: "rgba(67, 103, 136, 0.86)",
      arrowDot: "rgba(67, 103, 136, 0.9)",
      qHeatRgb: "15, 127, 143",
      selectedStroke: "#b56f2f",
      agentFill: "#f3b660",
      agentStroke: "rgba(179, 116, 42, 0.82)",
      gridLine: "rgba(108, 141, 169, 0.18)",
    },
    dark: {
      chartGrid: "rgba(172, 211, 255, 0.2)",
      returnsLine: "#47d5d2",
      successLine: "#ff9a5c",
      wallFill: "#183247",
      wallStroke: "#305070",
      goalFill: "#1f6f4c",
      goalStroke: "#5de08b",
      trapFill: "#5a2533",
      trapStroke: "#ff6f6f",
      startFill: "#214b73",
      startStroke: "#6da7ff",
      emptyFill: "#0f2538",
      emptyStroke: "#29435f",
      arrowStroke: "rgba(161, 228, 255, 0.85)",
      arrowDot: "rgba(161, 228, 255, 0.9)",
      qHeatRgb: "71, 213, 210",
      selectedStroke: "#ffcc7d",
      agentFill: "#ffd37a",
      agentStroke: "rgba(255, 227, 154, 0.9)",
      gridLine: "rgba(132, 177, 219, 0.15)",
    },
  };

  function getThemePalette() {
    const theme = ui ? ui.getTheme() : "light";
    return themePalettes[theme] || themePalettes.light;
  }

  function formatNum(value, digits) {
    return Number.parseFloat(value).toFixed(digits);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function stateKey(x, y) {
    return `${x},${y}`;
  }

  const sliderConfig = {
    rlAlpha: { digits: 2 },
    rlGamma: { digits: 2 },
    rlEpsilon: { digits: 2 },
    rlStepCost: { digits: 3 },
    rlMaxSteps: { digits: 0 },
    rlBatchEpisodes: { digits: 0 },
  };

  Object.keys(sliderConfig).forEach((id) => {
    const input = byId(id);
    const output = byId(`${id}Value`);
    output.textContent = formatNum(input.value, sliderConfig[id].digits);
    input.addEventListener("input", () => {
      output.textContent = formatNum(input.value, sliderConfig[id].digits);
    });
  });

  const gridCanvas = byId("rlGridCanvas");
  const gridCtx = gridCanvas.getContext("2d");
  const returnsCanvas = byId("rlReturnsChart");
  const returnsCtx = returnsCanvas.getContext("2d");
  const successCanvas = byId("rlSuccessChart");
  const successCtx = successCanvas.getContext("2d");

  let grid = [];
  let startState = { x: 0, y: GRID_SIZE - 1 };
  let selectedState = { ...startState };
  let agentState = { ...startState };
  let qTable = new Map();
  let returnHistory = [];
  let successHistory = [];
  let stepsHistory = [];
  let episodeCount = 0;
  let bestReturn = -Infinity;
  let lastBellman = null;
  let animationTimer = null;

  function newEmptyGrid() {
    return Array.from({ length: GRID_SIZE }, () =>
      Array.from({ length: GRID_SIZE }, () => CELL.EMPTY),
    );
  }

  function setCell(x, y, type) {
    if (x < 0 || y < 0 || x >= GRID_SIZE || y >= GRID_SIZE) {
      return;
    }
    grid[y][x] = type;
  }

  function buildDefaultMap() {
    grid = newEmptyGrid();
    startState = { x: 0, y: GRID_SIZE - 1 };

    const walls = [
      [2, 8],
      [2, 7],
      [2, 6],
      [3, 6],
      [4, 6],
      [6, 2],
      [7, 2],
      [7, 3],
      [7, 4],
      [5, 7],
      [6, 7],
      [7, 7],
    ];

    walls.forEach(([x, y]) => setCell(x, y, CELL.WALL));
    setCell(9, 0, CELL.GOAL);
    setCell(4, 2, CELL.TRAP);
    setCell(8, 6, CELL.TRAP);
    setCell(1, 4, CELL.TRAP);
    setCell(startState.x, startState.y, CELL.START);

    selectedState = { ...startState };
    agentState = { ...startState };
  }

  function buildRandomMap() {
    grid = newEmptyGrid();
    startState = { x: 0, y: GRID_SIZE - 1 };
    setCell(startState.x, startState.y, CELL.START);
    setCell(GRID_SIZE - 1, 0, CELL.GOAL);

    for (let y = 0; y < GRID_SIZE; y += 1) {
      for (let x = 0; x < GRID_SIZE; x += 1) {
        if (
          (x === startState.x && y === startState.y) ||
          (x === GRID_SIZE - 1 && y === 0)
        ) {
          continue;
        }
        const r = Math.random();
        if (r < 0.16) {
          setCell(x, y, CELL.WALL);
        } else if (r < 0.22) {
          setCell(x, y, CELL.TRAP);
        }
      }
    }

    for (let x = 0; x < GRID_SIZE; x += 1) {
      if (grid[GRID_SIZE - 1][x] === CELL.WALL) {
        setCell(x, GRID_SIZE - 1, CELL.EMPTY);
      }
    }
    for (let y = 0; y < GRID_SIZE; y += 1) {
      if (grid[y][GRID_SIZE - 1] === CELL.WALL) {
        setCell(GRID_SIZE - 1, y, CELL.EMPTY);
      }
    }
    setCell(startState.x, startState.y, CELL.START);
    setCell(GRID_SIZE - 1, 0, CELL.GOAL);

    selectedState = { ...startState };
    agentState = { ...startState };
  }

  function forEachState(callback) {
    for (let y = 0; y < GRID_SIZE; y += 1) {
      for (let x = 0; x < GRID_SIZE; x += 1) {
        if (grid[y][x] !== CELL.WALL) {
          callback(x, y);
        }
      }
    }
  }

  function initializeQTable() {
    qTable = new Map();
    forEachState((x, y) => {
      qTable.set(stateKey(x, y), [0, 0, 0, 0]);
    });
  }

  function getQValues(state) {
    const key = stateKey(state.x, state.y);
    if (!qTable.has(key)) {
      qTable.set(key, [0, 0, 0, 0]);
    }
    return qTable.get(key);
  }

  function argMax(values) {
    let bestIndex = 0;
    let bestValue = values[0];
    for (let i = 1; i < values.length; i += 1) {
      if (values[i] > bestValue) {
        bestValue = values[i];
        bestIndex = i;
      }
    }
    return bestIndex;
  }

  function epsilonGreedyAction(state, epsilon) {
    if (Math.random() < epsilon) {
      return Math.floor(Math.random() * ACTIONS.length);
    }
    return argMax(getQValues(state));
  }

  function isTerminalCell(type) {
    return type === CELL.GOAL || type === CELL.TRAP;
  }

  function environmentStep(state, actionIndex, stepCost) {
    const action = ACTIONS[actionIndex];
    const candidateX = state.x + action.dx;
    const candidateY = state.y + action.dy;

    if (
      candidateX < 0 ||
      candidateY < 0 ||
      candidateX >= GRID_SIZE ||
      candidateY >= GRID_SIZE
    ) {
      return {
        next: { ...state },
        reward: stepCost - 0.08,
        done: false,
        success: false,
      };
    }

    const candidateCell = grid[candidateY][candidateX];
    if (candidateCell === CELL.WALL) {
      return {
        next: { ...state },
        reward: stepCost - 0.08,
        done: false,
        success: false,
      };
    }

    if (candidateCell === CELL.GOAL) {
      return {
        next: { x: candidateX, y: candidateY },
        reward: 1.2,
        done: true,
        success: true,
      };
    }

    if (candidateCell === CELL.TRAP) {
      return {
        next: { x: candidateX, y: candidateY },
        reward: -1.0,
        done: true,
        success: false,
      };
    }

    return {
      next: { x: candidateX, y: candidateY },
      reward: stepCost,
      done: false,
      success: false,
    };
  }

  function runEpisode(options) {
    const { train = true, epsilonOverride = null } = options || {};

    const alpha = Number(byId("rlAlpha").value);
    const gamma = Number(byId("rlGamma").value);
    const epsilon =
      epsilonOverride !== null
        ? epsilonOverride
        : Number(byId("rlEpsilon").value);
    const stepCost = Number(byId("rlStepCost").value);
    const maxSteps = Number(byId("rlMaxSteps").value);

    let state = { ...startState };
    let totalReward = 0;
    let success = false;
    const path = [{ ...state }];

    for (let stepIndex = 0; stepIndex < maxSteps; stepIndex += 1) {
      const actionIndex = epsilonGreedyAction(state, epsilon);
      const actionName = t(ACTIONS[actionIndex].key);

      const transition = environmentStep(state, actionIndex, stepCost);
      const nextState = transition.next;

      if (train) {
        const q = getQValues(state);
        const qNext = getQValues(nextState);
        const oldValue = q[actionIndex];
        const bootstrap = transition.done ? 0 : gamma * Math.max(...qNext);
        const target = transition.reward + bootstrap;
        const tdError = target - oldValue;
        q[actionIndex] = oldValue + alpha * tdError;

        lastBellman = {
          s: { ...state },
          a: actionName,
          qOld: oldValue,
          reward: transition.reward,
          gamma,
          maxNext: Math.max(...qNext),
          target,
          tdError,
          qNew: q[actionIndex],
        };
      }

      totalReward += transition.reward;
      state = nextState;
      path.push({ ...state });

      if (transition.done) {
        success = transition.success;
        break;
      }
    }

    return {
      episodeReturn: totalReward,
      success,
      steps: path.length - 1,
      path,
    };
  }

  function movingAverage(values, windowSize) {
    if (values.length === 0) {
      return [];
    }
    const result = [];
    for (let i = 0; i < values.length; i += 1) {
      const start = Math.max(0, i - windowSize + 1);
      const segment = values.slice(start, i + 1);
      const sum = segment.reduce((acc, v) => acc + v, 0);
      result.push(sum / segment.length);
    }
    return result;
  }

  function computePolicyEntropy() {
    let entropySum = 0;
    let count = 0;

    forEachState((x, y) => {
      const type = grid[y][x];
      if (isTerminalCell(type)) {
        return;
      }
      const q = getQValues({ x, y });
      const temperature = 0.45;
      const maxQ = Math.max(...q);
      const exps = q.map((v) => Math.exp((v - maxQ) / temperature));
      const denom = exps.reduce((acc, v) => acc + v, 0);
      const probs = exps.map((v) => v / Math.max(denom, 1e-6));

      const entropy = -probs.reduce((acc, p) => {
        if (p <= 1e-8) {
          return acc;
        }
        return acc + p * Math.log(p);
      }, 0);

      entropySum += entropy;
      count += 1;
    });

    return count > 0 ? entropySum / count : 0;
  }

  function updateMetrics() {
    const episodes = episodeCount;
    const avgReturn = returnHistory.length
      ? returnHistory.reduce((acc, v) => acc + v, 0) / returnHistory.length
      : 0;
    const avgSteps = stepsHistory.length
      ? stepsHistory.reduce((acc, v) => acc + v, 0) / stepsHistory.length
      : 0;
    const successRate = successHistory.length
      ? (successHistory.reduce((acc, v) => acc + v, 0) /
          successHistory.length) *
        100
      : 0;

    byId("rlEpisodesValue").textContent = String(episodes);
    byId("rlAvgReturnValue").textContent = avgReturn.toFixed(3);
    byId("rlBestReturnValue").textContent = Number.isFinite(bestReturn)
      ? bestReturn.toFixed(3)
      : "0.000";
    byId("rlSuccessRateValue").textContent = `${successRate.toFixed(1)}%`;
    byId("rlAvgStepsValue").textContent = avgSteps.toFixed(1);
    byId("rlEntropyValue").textContent = computePolicyEntropy().toFixed(3);
  }

  function drawLineChart(ctx, canvas, values, color, yMin, yMax) {
    const palette = getThemePalette();
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = palette.chartGrid;
    ctx.lineWidth = 1;
    for (let i = 1; i <= 4; i += 1) {
      const y = (height / 5) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    if (values.length < 2) {
      return;
    }

    const view = values.slice(-260);
    const min = yMin !== undefined ? yMin : Math.min(...view);
    const max = yMax !== undefined ? yMax : Math.max(...view);
    const span = Math.max(max - min, 1e-6);

    ctx.beginPath();
    view.forEach((v, idx) => {
      const x = (idx / (view.length - 1)) * (width - 20) + 10;
      const y = height - ((v - min) / span) * (height - 20) - 10;
      if (idx === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.strokeStyle = color;
    ctx.lineWidth = 2.2;
    ctx.stroke();
  }

  function updateCharts() {
    const palette = getThemePalette();
    drawLineChart(
      returnsCtx,
      returnsCanvas,
      returnHistory,
      palette.returnsLine,
    );
    const moving = movingAverage(successHistory, 20);
    drawLineChart(successCtx, successCanvas, moving, palette.successLine, 0, 1);
  }

  function updateBellmanInspector() {
    if (!lastBellman) {
      byId("rlBellmanText").textContent = t("rl.bellmanDefault");
      return;
    }

    const text = t("rl.bellmanSummary", {
      sx: lastBellman.s.x,
      sy: lastBellman.s.y,
      action: lastBellman.a,
      qOld: lastBellman.qOld.toFixed(4),
      reward: lastBellman.reward.toFixed(4),
      maxNext: lastBellman.maxNext.toFixed(4),
      target: lastBellman.target.toFixed(4),
      tdError: lastBellman.tdError.toFixed(4),
      qNew: lastBellman.qNew.toFixed(4),
    });

    byId("rlBellmanText").textContent = text;
  }

  function getCellTypeLabel(type) {
    if (type === CELL.WALL) {
      return t("rl.cellWall");
    }
    if (type === CELL.TRAP) {
      return t("rl.cellTrap");
    }
    if (type === CELL.GOAL) {
      return t("rl.cellGoal");
    }
    if (type === CELL.START) {
      return t("rl.cellStart");
    }
    return t("rl.cellEmpty");
  }

  function updateStateInspector(state) {
    const type = grid[state.y][state.x];
    byId("rlSelectedStateText").textContent = t("rl.stateLabel", {
      x: state.x,
      y: state.y,
      type: getCellTypeLabel(type),
    });

    const q = getQValues(state);
    const minQ = Math.min(...q);
    const maxQ = Math.max(...q);
    const span = Math.max(maxQ - minQ, 1e-6);

    const ids = [
      { bar: "rlQBarUp", val: "rlQValUp", i: 0 },
      { bar: "rlQBarRight", val: "rlQValRight", i: 1 },
      { bar: "rlQBarDown", val: "rlQValDown", i: 2 },
      { bar: "rlQBarLeft", val: "rlQValLeft", i: 3 },
    ];

    ids.forEach(({ bar, val, i }) => {
      const normalized = ((q[i] - minQ) / span) * 100;
      byId(bar).style.width = `${normalized.toFixed(1)}%`;
      byId(val).textContent = q[i].toFixed(3);
    });
  }

  function getCellColors(type) {
    const palette = getThemePalette();
    if (type === CELL.WALL) {
      return { fill: palette.wallFill, stroke: palette.wallStroke };
    }
    if (type === CELL.GOAL) {
      return { fill: palette.goalFill, stroke: palette.goalStroke };
    }
    if (type === CELL.TRAP) {
      return { fill: palette.trapFill, stroke: palette.trapStroke };
    }
    if (type === CELL.START) {
      return { fill: palette.startFill, stroke: palette.startStroke };
    }
    return { fill: palette.emptyFill, stroke: palette.emptyStroke };
  }

  function drawPolicyArrow(x, y, cellSize) {
    const palette = getThemePalette();
    const cellType = grid[y][x];
    if (cellType === CELL.WALL || isTerminalCell(cellType)) {
      return;
    }

    const q = getQValues({ x, y });
    const actionIndex = argMax(q);
    const action = ACTIONS[actionIndex];
    const cx = x * cellSize + cellSize / 2;
    const cy = y * cellSize + cellSize / 2;
    const arrowLength = cellSize * 0.22;

    const dx = action.dx * arrowLength;
    const dy = action.dy * arrowLength;

    gridCtx.strokeStyle = palette.arrowStroke;
    gridCtx.lineWidth = 2;
    gridCtx.beginPath();
    gridCtx.moveTo(cx - dx, cy - dy);
    gridCtx.lineTo(cx + dx, cy + dy);
    gridCtx.stroke();

    gridCtx.fillStyle = palette.arrowDot;
    gridCtx.beginPath();
    gridCtx.arc(cx + dx, cy + dy, 2.3, 0, Math.PI * 2);
    gridCtx.fill();
  }

  function drawGrid() {
    const palette = getThemePalette();
    const width = gridCanvas.width;
    const cellSize = width / GRID_SIZE;

    gridCtx.clearRect(0, 0, width, width);

    for (let y = 0; y < GRID_SIZE; y += 1) {
      for (let x = 0; x < GRID_SIZE; x += 1) {
        const type = grid[y][x];
        const colors = getCellColors(type);
        const px = x * cellSize;
        const py = y * cellSize;

        if (type !== CELL.WALL) {
          const q = getQValues({ x, y });
          const maxQ = Math.max(...q);
          const intensity = clamp((maxQ + 1) / 2, 0, 1);
          gridCtx.fillStyle = `rgba(${palette.qHeatRgb}, ${0.05 + intensity * 0.22})`;
          gridCtx.fillRect(px, py, cellSize, cellSize);
        }

        gridCtx.fillStyle = colors.fill;
        gridCtx.fillRect(px + 1, py + 1, cellSize - 2, cellSize - 2);
        gridCtx.strokeStyle = colors.stroke;
        gridCtx.lineWidth = 1;
        gridCtx.strokeRect(px + 1, py + 1, cellSize - 2, cellSize - 2);

        drawPolicyArrow(x, y, cellSize);

        if (x === selectedState.x && y === selectedState.y) {
          gridCtx.strokeStyle = palette.selectedStroke;
          gridCtx.lineWidth = 2;
          gridCtx.strokeRect(px + 3, py + 3, cellSize - 6, cellSize - 6);
        }
      }
    }

    const ax = agentState.x * cellSize + cellSize / 2;
    const ay = agentState.y * cellSize + cellSize / 2;
    gridCtx.fillStyle = palette.agentFill;
    gridCtx.beginPath();
    gridCtx.arc(ax, ay, cellSize * 0.22, 0, Math.PI * 2);
    gridCtx.fill();

    gridCtx.strokeStyle = palette.agentStroke;
    gridCtx.lineWidth = 2;
    gridCtx.stroke();

    for (let i = 0; i <= GRID_SIZE; i += 1) {
      const p = i * cellSize;
      gridCtx.strokeStyle = palette.gridLine;
      gridCtx.lineWidth = 1;
      gridCtx.beginPath();
      gridCtx.moveTo(p, 0);
      gridCtx.lineTo(p, width);
      gridCtx.stroke();
      gridCtx.beginPath();
      gridCtx.moveTo(0, p);
      gridCtx.lineTo(width, p);
      gridCtx.stroke();
    }
  }

  function refreshDashboard() {
    updateMetrics();
    updateCharts();
    updateBellmanInspector();
    updateStateInspector(selectedState);
    drawGrid();
  }

  function registerEpisode(result) {
    episodeCount += 1;
    returnHistory.push(result.episodeReturn);
    successHistory.push(result.success ? 1 : 0);
    stepsHistory.push(result.steps);

    if (returnHistory.length > 320) {
      returnHistory.shift();
    }
    if (successHistory.length > 320) {
      successHistory.shift();
    }
    if (stepsHistory.length > 320) {
      stepsHistory.shift();
    }

    bestReturn = Math.max(bestReturn, result.episodeReturn);
  }

  function stopAnimation() {
    if (animationTimer !== null) {
      clearInterval(animationTimer);
      animationTimer = null;
    }
  }

  function animatePath(path) {
    stopAnimation();
    let index = 0;
    animationTimer = setInterval(() => {
      agentState = { ...path[index] };
      drawGrid();

      index += 1;
      if (index >= path.length) {
        stopAnimation();
        agentState = { ...startState };
        drawGrid();
      }
    }, 95);
  }

  function trainSingleEpisode(options) {
    const cfg = options || {};
    const result = runEpisode({ train: true });
    registerEpisode(result);
    agentState = { ...startState };
    refreshDashboard();
    if (cfg.animate !== false) {
      animatePath(result.path);
    }
  }

  function trainBatch() {
    const batch = Number(byId("rlBatchEpisodes").value);
    stopAnimation();
    for (let i = 0; i < batch; i += 1) {
      const result = runEpisode({ train: true });
      registerEpisode(result);
    }
    agentState = { ...startState };
    refreshDashboard();
  }

  function runGreedyPolicy() {
    stopAnimation();
    const result = runEpisode({ train: false, epsilonOverride: 0 });
    agentState = { ...startState };
    refreshDashboard();
    animatePath(result.path);
  }

  function resetTraining() {
    stopAnimation();
    initializeQTable();
    returnHistory = [];
    successHistory = [];
    stepsHistory = [];
    episodeCount = 0;
    bestReturn = -Infinity;
    lastBellman = null;
    agentState = { ...startState };
    selectedState = { ...startState };
    refreshDashboard();
  }

  function applyBrush(x, y) {
    const mode = byId("rlBrushSelect").value;

    if (mode === "inspect") {
      if (grid[y][x] !== CELL.WALL) {
        selectedState = { x, y };
      }
      refreshDashboard();
      return;
    }

    if (mode === "start") {
      setCell(startState.x, startState.y, CELL.EMPTY);
      startState = { x, y };
      setCell(x, y, CELL.START);
    } else if (mode === "goal") {
      for (let yy = 0; yy < GRID_SIZE; yy += 1) {
        for (let xx = 0; xx < GRID_SIZE; xx += 1) {
          if (grid[yy][xx] === CELL.GOAL) {
            setCell(xx, yy, CELL.EMPTY);
          }
        }
      }
      setCell(x, y, CELL.GOAL);
    } else if (mode === "wall") {
      if (grid[y][x] !== CELL.START && grid[y][x] !== CELL.GOAL) {
        setCell(x, y, CELL.WALL);
      }
    } else if (mode === "trap") {
      if (grid[y][x] !== CELL.START && grid[y][x] !== CELL.GOAL) {
        setCell(x, y, CELL.TRAP);
      }
    } else if (mode === "empty") {
      if (grid[y][x] !== CELL.START) {
        setCell(x, y, CELL.EMPTY);
      }
    }

    agentState = { ...startState };
    selectedState = { ...startState };
    initializeQTable();
    lastBellman = null;
    returnHistory = [];
    successHistory = [];
    stepsHistory = [];
    episodeCount = 0;
    bestReturn = -Infinity;
    refreshDashboard();
  }

  gridCanvas.addEventListener("click", (event) => {
    const rect = gridCanvas.getBoundingClientRect();
    const scaleX = gridCanvas.width / rect.width;
    const scaleY = gridCanvas.height / rect.height;
    const px = (event.clientX - rect.left) * scaleX;
    const py = (event.clientY - rect.top) * scaleY;

    const cellSize = gridCanvas.width / GRID_SIZE;
    const x = clamp(Math.floor(px / cellSize), 0, GRID_SIZE - 1);
    const y = clamp(Math.floor(py / cellSize), 0, GRID_SIZE - 1);

    applyBrush(x, y);
  });

  byId("rlDefaultMapBtn").addEventListener("click", () => {
    stopAnimation();
    buildDefaultMap();
    resetTraining();
  });

  byId("rlMazeMapBtn").addEventListener("click", () => {
    stopAnimation();
    buildRandomMap();
    resetTraining();
  });

  byId("rlResetQBtn").addEventListener("click", () => {
    resetTraining();
  });

  byId("rlStopAnimBtn").addEventListener("click", () => {
    stopAnimation();
    agentState = { ...startState };
    drawGrid();
  });

  byId("rlTrainOneBtn").addEventListener("click", () => {
    trainSingleEpisode({ animate: true });
  });

  byId("rlTrainBatchBtn").addEventListener("click", () => {
    trainBatch();
  });

  byId("rlPlayPolicyBtn").addEventListener("click", () => {
    runGreedyPolicy();
  });

  buildDefaultMap();
  initializeQTable();
  refreshDashboard();

  if (ui) {
    ui.onThemeChange(() => {
      refreshDashboard();
    });

    ui.onLanguageChange(() => {
      refreshDashboard();
    });
  }
})();

(function initProjectWidgets() {
  function byId(id) {
    return document.getElementById(id);
  }

  const ropeCanvas = byId("ropeCanvas");
  const camCanvas = byId("camCanvas");
  if (!ropeCanvas || !camCanvas) {
    return;
  }

  const ui = window.siteUi;
  const t = (key, params) => (ui ? ui.t(key, params) : key);

  const themePalettes = {
    light: {
      ropeAxis: "rgba(93, 129, 164, 0.35)",
      ropeWave1: "#0f7f8f",
      ropeWave2: "#d96549",
      camHighlight: "rgba(255, 255, 255, 0.58)",
      genGrid: "rgba(90, 127, 163, 0.28)",
      genBarA: "#0f7f8f",
      genBarB: "#2f4f8f",
    },
    dark: {
      ropeAxis: "rgba(130, 178, 227, 0.3)",
      ropeWave1: "#48d7d4",
      ropeWave2: "#ff9f68",
      camHighlight: "rgba(255, 255, 255, 0.45)",
      genGrid: "rgba(147, 195, 240, 0.22)",
      genBarA: "#48d7d4",
      genBarB: "#74a6ff",
    },
  };

  function getThemePalette() {
    const theme = ui ? ui.getTheme() : "light";
    return themePalettes[theme] || themePalettes.light;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  const ropeTheta = byId("ropeTheta");
  const ropeThetaValue = byId("ropeThetaValue");
  const ropeReadout = byId("ropeReadout");
  const ropeCtx = ropeCanvas.getContext("2d");

  function drawRopeWidget() {
    const palette = getThemePalette();
    const width = ropeCanvas.width;
    const height = ropeCanvas.height;
    const theta = Number(ropeTheta.value);
    const thetaRad = (theta * Math.PI) / 180;

    ropeThetaValue.textContent = `${theta.toFixed(0)} deg`;
    ropeCtx.clearRect(0, 0, width, height);

    ropeCtx.strokeStyle = palette.ropeAxis;
    ropeCtx.lineWidth = 1;
    ropeCtx.beginPath();
    ropeCtx.moveTo(0, height / 2);
    ropeCtx.lineTo(width, height / 2);
    ropeCtx.stroke();

    const freq = 0.06;
    ropeCtx.beginPath();
    for (let x = 0; x <= width; x += 1) {
      const y = height / 2 + 24 * Math.sin(x * freq);
      if (x === 0) {
        ropeCtx.moveTo(x, y);
      } else {
        ropeCtx.lineTo(x, y);
      }
    }
    ropeCtx.strokeStyle = palette.ropeWave1;
    ropeCtx.lineWidth = 2.2;
    ropeCtx.stroke();

    ropeCtx.beginPath();
    for (let x = 0; x <= width; x += 1) {
      const y = height / 2 + 24 * Math.sin(x * freq + thetaRad);
      if (x === 0) {
        ropeCtx.moveTo(x, y);
      } else {
        ropeCtx.lineTo(x, y);
      }
    }
    ropeCtx.strokeStyle = palette.ropeWave2;
    ropeCtx.lineWidth = 2.2;
    ropeCtx.stroke();

    const overlap = (1 + Math.cos(thetaRad)) / 2;
    ropeReadout.textContent = t("projects.p1Readout", {
      value: overlap.toFixed(2),
    });
  }

  ropeTheta.addEventListener("input", drawRopeWidget);

  const camThreshold = byId("camThreshold");
  const camThresholdValue = byId("camThresholdValue");
  const camRegenerate = byId("camRegenerate");
  const camCoverage = byId("camCoverage");
  const camCtx = camCanvas.getContext("2d");

  let heatField = [];

  function generateHeatField() {
    const cols = 28;
    const rows = 14;
    heatField = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0),
    );

    for (let k = 0; k < 8; k += 1) {
      const cx = Math.random() * (cols - 1);
      const cy = Math.random() * (rows - 1);
      const amp = 0.4 + Math.random() * 0.8;
      const sigma = 1.5 + Math.random() * 2.8;

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const d2 = (x - cx) * (x - cx) + (y - cy) * (y - cy);
          heatField[y][x] += amp * Math.exp(-d2 / (2 * sigma * sigma));
        }
      }
    }

    let maxValue = 0;
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        maxValue = Math.max(maxValue, heatField[y][x]);
      }
    }

    const denom = Math.max(maxValue, 1e-6);
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        heatField[y][x] = heatField[y][x] / denom;
      }
    }
  }

  function heatColor(value) {
    const v = clamp(value, 0, 1);
    const r = Math.round(20 + 235 * v);
    const g = Math.round(45 + 120 * (1 - Math.abs(v - 0.55)));
    const b = Math.round(85 + 130 * (1 - v));
    return `rgb(${r}, ${g}, ${b})`;
  }

  function drawCamWidget() {
    const palette = getThemePalette();
    const threshold = Number(camThreshold.value);
    camThresholdValue.textContent = threshold.toFixed(2);

    const rows = heatField.length;
    const cols = heatField[0].length;
    const cellW = camCanvas.width / cols;
    const cellH = camCanvas.height / rows;

    camCtx.clearRect(0, 0, camCanvas.width, camCanvas.height);

    let count = 0;
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        const v = heatField[y][x];
        camCtx.fillStyle = heatColor(v);
        camCtx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);

        if (v >= threshold) {
          count += 1;
          camCtx.strokeStyle = palette.camHighlight;
          camCtx.lineWidth = 0.8;
          camCtx.strokeRect(
            x * cellW + 0.5,
            y * cellH + 0.5,
            cellW - 1,
            cellH - 1,
          );
        }
      }
    }

    const coverage = (count / (rows * cols)) * 100;
    camCoverage.textContent = t("projects.p2Coverage", {
      value: coverage.toFixed(1),
    });
  }

  camRegenerate.addEventListener("click", () => {
    generateHeatField();
    drawCamWidget();
  });
  camThreshold.addEventListener("input", drawCamWidget);

  const alignInput = byId("alignInput");
  const alignRisk = byId("alignRisk");
  const alignTruth = byId("alignTruth");
  const alignTruthValue = byId("alignTruthValue");
  const alignScoreBtn = byId("alignScoreBtn");
  const alignMeter = byId("alignMeter");
  const alignResult = byId("alignResult");

  function scoreAlignment() {
    const text = alignInput.value.toLowerCase();
    const truth = Number(alignTruth.value);
    alignTruthValue.textContent = truth.toFixed(2);

    const safeTokens = [
      "safe",
      "cannot",
      "policy",
      "alternative",
      "explain",
      "reason",
    ];
    const riskyTokens = ["bypass", "exploit", "harm", "steal", "weapon"];

    const safeCount = safeTokens.reduce(
      (acc, token) => acc + (text.includes(token) ? 1 : 0),
      0,
    );
    const riskyCount = riskyTokens.reduce(
      (acc, token) => acc + (text.includes(token) ? 1 : 0),
      0,
    );

    const lengthFactor = clamp(text.length / 180, 0, 1);
    const safetySignal = clamp(safeCount / safeTokens.length, 0, 1);
    const riskSignal = clamp(riskyCount / riskyTokens.length, 0, 1);

    const riskPenalty =
      alignRisk.value === "high"
        ? 0.28
        : alignRisk.value === "medium"
          ? 0.14
          : 0.05;

    const score = clamp(
      truth * 0.55 +
        safetySignal * 0.28 +
        lengthFactor * 0.17 -
        riskPenalty -
        riskSignal * 0.35,
      0,
      1,
    );

    alignMeter.style.width = `${(score * 100).toFixed(1)}%`;

    let band = t("projects.p3BandLow");
    if (score >= 0.75) {
      band = t("projects.p3BandStrong");
    } else if (score >= 0.5) {
      band = t("projects.p3BandMedium");
    }

    alignResult.textContent = t("projects.p3Result", {
      score: score.toFixed(2),
      band,
    });
  }

  alignTruth.addEventListener("input", () => {
    alignTruthValue.textContent = Number(alignTruth.value).toFixed(2);
  });
  alignScoreBtn.addEventListener("click", scoreAlignment);

  const genTemp = byId("genTemp");
  const genTempValue = byId("genTempValue");
  const genSampleBtn = byId("genSampleBtn");
  const genCanvas = byId("genCanvas");
  const genReadout = byId("genReadout");
  const genCtx = genCanvas.getContext("2d");
  let genBatch = [];
  let genProfile = Array.from(
    { length: 18 },
    () => 0.52 + Math.random() * 0.38,
  );
  let genNoiseProfile = Array.from({ length: 18 }, () => Math.random() * 2 - 1);

  function tempToNorm(value) {
    return clamp((value - 0.2) / 1.6, 0, 1);
  }

  function regenerateGenBatch(options = {}) {
    const shouldResample = options.resample !== false;
    const temp = Number(genTemp.value);
    const tempNorm = tempToNorm(temp);

    if (shouldResample) {
      genNoiseProfile = Array.from({ length: 18 }, () => Math.random() * 2 - 1);
      genProfile = genProfile.map((value) => {
        const drift = (Math.random() * 2 - 1) * 0.03;
        return clamp(value + drift, 0.42, 0.95);
      });
    }

    const diversityGain = 0.06 + tempNorm * 0.33;
    const qualityPenalty = 0.03 + tempNorm * 0.21;

    genBatch = genProfile.map((baseValue, idx) => {
      const noisyValue =
        baseValue - qualityPenalty + genNoiseProfile[idx] * diversityGain;
      return clamp(noisyValue, 0, 1);
    });
  }

  function drawGenWidget() {
    const palette = getThemePalette();
    const temp = Number(genTemp.value);
    genTempValue.textContent = temp.toFixed(2);

    const width = genCanvas.width;
    const height = genCanvas.height;
    genCtx.clearRect(0, 0, width, height);

    genCtx.strokeStyle = palette.genGrid;
    genCtx.lineWidth = 1;
    for (let i = 1; i <= 4; i += 1) {
      const y = (height / 5) * i;
      genCtx.beginPath();
      genCtx.moveTo(0, y);
      genCtx.lineTo(width, y);
      genCtx.stroke();
    }

    const barWidth = width / genBatch.length;
    genBatch.forEach((value, idx) => {
      const x = idx * barWidth + 1;
      const h = value * (height - 16);
      const y = height - h - 8;
      genCtx.fillStyle = idx % 2 === 0 ? palette.genBarA : palette.genBarB;
      genCtx.fillRect(x, y, Math.max(barWidth - 2, 1), h);
    });

    const mean =
      genBatch.reduce((acc, v) => acc + v, 0) / Math.max(genBatch.length, 1);
    const variance =
      genBatch.reduce((acc, v) => acc + (v - mean) * (v - mean), 0) /
      Math.max(genBatch.length, 1);
    const tempNorm = tempToNorm(temp);
    const coherence = clamp(0.98 - variance * 2.4 - tempNorm * 0.22, 0, 1);
    const fidProxy = clamp(12 + tempNorm * 42 + variance * 65, 0, 99);

    genReadout.textContent = t("projects.p4Readout", {
      coherence: coherence.toFixed(2),
      fid: fidProxy.toFixed(1),
    });
  }

  genSampleBtn.addEventListener("click", () => {
    regenerateGenBatch({ resample: true });
    drawGenWidget();
  });
  genTemp.addEventListener("input", () => {
    regenerateGenBatch({ resample: false });
    drawGenWidget();
  });

  const hitAcoustic = byId("hitAcoustic");
  const hitAcousticValue = byId("hitAcousticValue");
  const hitEnergy = byId("hitEnergy");
  const hitEnergyValue = byId("hitEnergyValue");
  const hitDance = byId("hitDance");
  const hitDanceValue = byId("hitDanceValue");
  const hitPredictBtn = byId("hitPredictBtn");
  const hitMeter = byId("hitMeter");
  const hitReadout = byId("hitReadout");

  function updateHitSliderReadouts() {
    hitAcousticValue.textContent = Number(hitAcoustic.value).toFixed(2);
    hitEnergyValue.textContent = Number(hitEnergy.value).toFixed(2);
    hitDanceValue.textContent = Number(hitDance.value).toFixed(2);
  }

  function predictHitProbability() {
    updateHitSliderReadouts();

    const acoustic = Number(hitAcoustic.value);
    const energy = Number(hitEnergy.value);
    const dance = Number(hitDance.value);

    const acousticSweetSpot = 1 - Math.abs(acoustic - 0.35) / 0.35;
    const sweetSpotScore = clamp(acousticSweetSpot, 0, 1);

    const score = clamp(
      0.22 * sweetSpotScore + 0.42 * energy + 0.36 * dance,
      0,
      1,
    );

    const probability = score * 100;
    hitMeter.style.width = `${probability.toFixed(1)}%`;

    let verdict = t("projects.p5VerdictPromising");
    if (probability < 35) {
      verdict = t("projects.p5VerdictNiche");
    } else if (probability > 75) {
      verdict = t("projects.p5VerdictHigh");
    }

    hitReadout.textContent = t("projects.p5Readout", {
      value: probability.toFixed(1),
      verdict,
    });
  }

  [hitAcoustic, hitEnergy, hitDance].forEach((slider) => {
    slider.addEventListener("input", updateHitSliderReadouts);
  });
  hitPredictBtn.addEventListener("click", predictHitProbability);

  drawRopeWidget();
  generateHeatField();
  drawCamWidget();
  scoreAlignment();
  regenerateGenBatch({ resample: true });
  drawGenWidget();
  predictHitProbability();

  if (ui) {
    ui.onThemeChange(() => {
      drawRopeWidget();
      drawCamWidget();
      drawGenWidget();
    });

    ui.onLanguageChange(() => {
      drawRopeWidget();
      drawCamWidget();
      scoreAlignment();
      drawGenWidget();
      predictHitProbability();
    });
  }
})();
