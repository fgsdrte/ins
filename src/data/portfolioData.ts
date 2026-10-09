// ─── Portfolio Data ──────────────────────────────────────────────────────────

export const personalInfo = {
  name: 'Vanniya Raj S',
  title: 'Aspiring AI Engineer | Generative AI Developer',
  location: 'Kovilpatti, Tamil Nadu, India',
  email: '2317020@nec.edu.in',
  linkedin: 'https://linkedin.com/in/vanniya-raj-s-7b0b4a2b7/',
  github: 'https://github.com/VanniyaRaj-2005',
  intro:
    'AI & Data Science student exploring Generative AI, LLMs, and Multimodal RAG to build practical, data-grounded AI applications.',
  heroTags: [
    'Generative AI',
    'Large Language Models',
    'Retrieval-Augmented Generation',
    'Python',
    'Prompt Engineering',
  ],
};

export const aboutParagraphs = [
  "I'm a B.Tech student in Artificial Intelligence and Data Science at National Engineering College, Kovilpatti, currently in my second year. My interest lies in building practical AI applications — systems that are grounded in real information and designed to solve specific, well-defined problems.",
  "I have hands-on experience developing a multimodal RAG-based agent chatbot that enables natural-language access to organizational information, and an AI-enabled RoboCar that integrates decision-making concepts for autonomous operation.",
  "My current focus areas include LLM-powered application development, retrieval-based knowledge systems, multimodal AI, prompt engineering, and AI-driven decision-making. I am actively building skills that will allow me to contribute meaningfully to entry-level AI engineering roles.",
];

export const skills = [
  {
    category: 'Programming Languages',
    icon: 'Code2',
    items: ['Python', 'SQL'],
  },
  {
    category: 'Generative AI',
    icon: 'Sparkles',
    items: [
      'Generative AI',
      'Large Language Models',
      'Retrieval-Augmented Generation (RAG)',
      'Multimodal RAG',
      'Prompt Engineering',
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: 'Brain',
    items: ['Artificial Intelligence', 'Machine Learning'],
  },
  {
    category: 'Technical Exposure',
    icon: 'Radio',
    items: ['Radar Signal Processing', 'Direction of Arrival (DoA) Estimation', 'Embedded Systems'],
  },
];

export const projects = [
  {
    id: 'rag-chatbot',
    title: 'Multimodal RAG Agent Chatbot',
    category: 'Generative AI · LLM · RAG',
    summary:
      'A multimodal RAG-based agent chatbot that enables users to query organizational information using natural language, grounding responses in retrieved source documents to reduce hallucinations.',
    tags: ['Generative AI', 'LLM', 'RAG', 'Prompt Engineering', 'Python'],
    featured: true,
    problem:
      'Organizational knowledge is often siloed across documents and databases. Direct LLM responses carry the risk of generating unsupported or hallucinated information. There was a need for a conversational interface that answers questions based on verified organizational data.',
    objective:
      'Build an agent chatbot that retrieves relevant context from organizational sources and feeds it to an LLM to generate grounded, accurate responses.',
    implementation: [
      'Designed a retrieval pipeline that identifies and returns relevant documents for each user query.',
      'Applied prompt engineering techniques to provide the retrieved context to the LLM alongside the user question.',
      'Built a conversational interface allowing users to query organizational information in natural language.',
      'Focused on source-grounded generation to reduce the risk of unsupported LLM output.',
    ],
    outcome:
      'A functional multimodal RAG agent chatbot providing natural-language access to organizational information, with responses grounded in retrieved source documents.',
    workflow: [
      { step: 'User Query', desc: 'Natural language question input' },
      { step: 'Retrieval', desc: 'Relevant documents fetched from knowledge base' },
      { step: 'Context Injection', desc: 'Retrieved context combined with query' },
      { step: 'LLM Generation', desc: 'Language model generates response' },
      { step: 'Grounded Response', desc: 'Answer backed by source documents' },
    ],
  },
  {
    id: 'robocar',
    title: 'AI-Enabled RoboCar',
    category: 'AI · Robotics · Embedded Systems',
    summary:
      'An AI-enabled RoboCar integrating artificial intelligence concepts for autonomous vehicle functionality, awarded first place at the Project Expo, BIT Erode.',
    tags: ['Artificial Intelligence', 'Embedded Systems', 'Decision Making', 'Robotics'],
    featured: true,
    award: 'Winner – Project Expo, BIT Erode',
    problem:
      'Designing a compact vehicle system that could incorporate AI-based decision-making capabilities for autonomous operation in a controlled environment.',
    objective:
      'Develop and demonstrate a robotic car that integrates AI concepts to support autonomous decision-making and navigation.',
    implementation: [
      'Integrated AI-based decision-making logic into the RoboCar control system.',
      'Explored autonomous operation as a key aspect of the project design.',
      'Combined AI concepts with embedded systems to produce a functional autonomous vehicle prototype.',
    ],
    outcome:
      'Successfully demonstrated at the Project Expo, BIT Erode, where the project received first place recognition for its implementation of AI in a robotics context.',
  },
  {
    id: 'doa-radar',
    title: 'Direction of Arrival Using Radars',
    category: 'Signal Processing · Radar · Technical Training',
    summary:
      'A technical training project at Mistral Solutions covering radar signal processing and Direction of Arrival (DoA) estimation techniques.',
    tags: ['Radar Signal Processing', 'DoA Estimation', 'Embedded Systems', 'Signal Analysis'],
    featured: false,
    note: 'This was completed as part of technical training at Mistral Solutions Pvt. Ltd., Bangalore.',
    problem:
      'Understanding how incoming signal direction can be estimated using radar-based systems — a fundamental concept in sensing and communication.',
    objective:
      'Gain practical exposure to radar signal analysis and direction-estimation techniques through structured technical training.',
    implementation: [
      'Studied radar-based signal analysis and DoA estimation fundamentals.',
      'Explored direction-estimation algorithms used in radar systems.',
      'Received technical training on signal processing concepts applicable to sensing domains.',
    ],
    outcome:
      'Developed a working understanding of radar signal processing and DoA estimation techniques through hands-on technical training.',
  },
];

export const experiences = [
  {
    id: 'daimler',
    organization: 'Daimler India Commercial Vehicles Pvt. Ltd.',
    role: 'Inplant Trainee – Operations & Logistics',
    duration: 'December 2025 (8 Dec – 24 Dec)',
    type: 'Industry Training',
    description:
      'Completed inplant training in the Operations and Logistics department, gaining exposure to manufacturing systems, process workflows, and industrial operations at one of India\'s leading commercial vehicle manufacturers.',
    tags: ['Operations', 'Logistics', 'Manufacturing Systems'],
  },
  {
    id: 'mistral',
    organization: 'Mistral Solutions Pvt. Ltd., Bangalore',
    role: 'Technical Training – Signal Processing',
    duration: 'Duration not specified',
    type: 'Technical Training',
    description:
      'Received technical exposure to radar signal processing and Direction of Arrival (DoA) estimation. Studied radar-based signal analysis and direction-estimation concepts as part of structured technical training.',
    tags: ['Radar Signal Processing', 'DoA Estimation', 'Signal Analysis'],
  },
];

export const achievements = [
  {
    id: 'robocar-win',
    title: 'Winner – Project Expo, BIT Erode',
    description:
      'First place at the Project Expo held at BIT Erode for the AI-Enabled RoboCar project, which demonstrated AI-based decision-making in an autonomous vehicle prototype.',
    icon: 'Trophy',
    highlight: true,
    type: 'Award',
  },
  {
    id: 'pragyan',
    title: 'Participant – PRAGYAN \'25 National Hackathon',
    description:
      'Selected to participate in PRAGYAN \'25, the national-level hackathon organised by NIT Trichy — one of India\'s premier technical fests.',
    icon: 'Users',
    highlight: false,
    type: 'Participation',
  },
  {
    id: 'samgatha',
    title: 'Participant – Samgatha × Vashisht, Pitch-In',
    description:
      'Participated in the Pitch-In event at Samgatha × Vashisht hosted by IIIT Kancheepuram, gaining experience presenting technical ideas to an evaluating panel.',
    icon: 'Presentation',
    highlight: false,
    type: 'Participation',
  },
];

export const certifications = [
  {
    title: 'Internet of Things',
    badge: 'Elite + Silver',
    badgeColor: 'silver',
  },
  {
    title: 'Industrial 4.0 of Things',
    badge: 'Elite + Silver',
    badgeColor: 'silver',
  },
  {
    title: 'Cloud Computing',
    badge: 'Elite',
    badgeColor: 'gold',
  },
  {
    title: 'DBMS',
    badge: 'Infosys Springboard',
    badgeColor: 'blue',
  },
  {
    title: 'Technical English for Engineers',
    badge: 'Certified',
    badgeColor: 'green',
  },
];

export const education = [
  {
    institution: 'National Engineering College, Kovilpatti',
    degree: 'B.Tech – Artificial Intelligence and Data Science',
    duration: '2023 – 2027',
    score: 'CGPA: 7.02 / 10.00',
    scoreNote: 'Up to the fifth semester',
    current: true,
  },
  {
    institution: 'Esaki Vidhyashram, Tenkasi',
    degree: 'Higher Secondary Certificate (HSC)',
    duration: 'Completed 2023',
    score: '65%',
    scoreNote: '',
    current: false,
  },
];
