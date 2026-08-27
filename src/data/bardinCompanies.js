export const companies = [
  {
    slug: "neura",
    name: "NEURA Robotics",
    shortName: "NEURA",
    homepage: "https://neura-robotics.com/de/",
    companyType: "Robotics OEM / Physical AI",
    location: "Germany",
    reviewed: "27 Aug 2026",
    logo: "/bardin/neura-logo.jfif",
    logoPlaceholder: "N",
    totalScore: 81,
    growth: "High",
    complexity: "High",
    urgency: "Med–High",
    rankReason:
      "A fast-moving robotics company integrating new products, partners, and application knowledge at unusually high speed.",
    mainInsight:
      "NEURA is simultaneously expanding its product portfolio, partner ecosystem, and international footprint. That combination may increase pressure on how application-specific technical knowledge is distributed across commercial and technical teams.",
    pressure: [
      {
        label: "Growth pressure",
        value: "High",
        text:
          "Acquisitions, major funding, partnerships, and international expansion are happening simultaneously.",
      },
      {
        label: "Knowledge complexity",
        value: "High",
        text:
          "New robot platforms, navigation technology, software, applications, and acquired know-how all need to become usable across teams.",
      },
      {
        label: "GTM urgency",
        value: "Medium–High",
        text:
          "Rapid expansion increases the value of enabling sales, partners, and service without routing every question through scarce experts.",
      },
    ],
    signals: [
      {
        date: "24 Aug 2026",
        title: "Acquisition: ADLATUS Robotics",
        category: "Portfolio Expansion",
        summary:
          "NEURA acquired ADLATUS Robotics, adding hundreds of installed autonomous cleaning systems, proprietary navigation software, and deep application knowledge.",
        why:
          "More products and inherited application knowledge may make consistent technical enablement across sales and service harder.",
        source:
          "https://neura-robotics.com/neura-acquires-adlatus-robotics/",
      },
      {
        date: "13 Aug 2026",
        title: "Acquisition: Bosch Rexroth ACTIVE Shuttle",
        category: "Portfolio Expansion",
        summary:
          "NEURA is taking over Bosch Rexroth's ACTIVE Shuttle and integrating it into its Physical AI ecosystem.",
        why:
          "A broader intralogistics portfolio increases configuration, integration, and application-specific knowledge requirements.",
        source:
          "https://neura-robotics.com/neura-robotics-acquires-active-shuttle/",
      },
      {
        date: "22 Jul 2026",
        title: "Physical AI Training Expansion",
        category: "Knowledge Scaling",
        summary:
          "NEURA expanded its Physical AI training network, including collaboration around NEURA Gyms and real-world robot training.",
        why:
          "The emphasis on training and distributed learning suggests that scaling knowledge is strategically important.",
        source:
          "https://neura-robotics.com/news/",
      },
      {
        date: "10 Jun 2026",
        title: "Series C of up to $1.4B",
        category: "Growth",
        summary:
          "NEURA announced a Series C financing of up to $1.4 billion to accelerate its Physical AI platform and global rollout.",
        why:
          "Rapid organizational and product scaling can increase pressure to make expert technical judgment reusable.",
        source:
          "https://neura-robotics.com/record-series-c/",
      },
      {
        date: "21 Apr 2026",
        title: "Strategic AWS Collaboration",
        category: "Ecosystem",
        summary:
          "NEURA and AWS announced a strategic collaboration around Physical AI infrastructure, training, and go-to-market expansion.",
        why:
          "More markets, partners, and deployments increase the number of people who need reliable application-specific technical knowledge.",
        source:
          "https://neura-robotics.com/neura-robotics-and-amazon-web-services-enter-collaboration/",
      },
    ],
    scoreBreakdown: [
      {
        label: "Technical product complexity",
        score: 19,
        max: 20,
        reason:
          "Robotics, navigation, software, integrations, and multiple application environments create substantial technical complexity.",
      },
      {
        label: "Application engineering dependency",
        score: 18,
        max: 20,
        reason:
          "Robotics deployments typically require application-specific engineering judgment during scoping, configuration, and implementation.",
      },
      {
        label: "International / partner sales",
        score: 17,
        max: 20,
        reason:
          "NEURA is expanding through international partners, ecosystems, and joint go-to-market activity.",
      },
      {
        label: "Growth and change signals",
        score: 18,
        max: 20,
        reason:
          "Two major portfolio additions, major financing, and ecosystem expansion are occurring within a short period.",
      },
      {
        label: "Evidence of current pain",
        score: 9,
        max: 20,
        reason:
          "The structural indicators are strong, but there is no direct public confirmation of an application-engineering bottleneck.",
      },
    ],
    hypothesis:
      "NEURA's rapid portfolio, ecosystem, and international expansion may make it increasingly difficult to distribute application-specific technical knowledge across sales, partners, service teams, and newly integrated business units without repeatedly involving scarce technical experts.",
    discoveryQuestion:
      "When a new customer or partner needs to configure a robot for a specific application, how much of that process still depends on getting one of your application engineers involved?",
    actions: [
      {
        title: "Identify the likely buyer",
        text:
          "Prioritize Application Engineering, Sales Engineering, Technical Sales, Partner Enablement, and Service leadership.",
      },
      {
        title: "Validate the bottleneck",
        text:
          "Determine whether repeated technical questions or newly acquired product knowledge are consuming engineering capacity or slowing commercial teams.",
      },
      {
        title: "Map where knowledge lives",
        text:
          "Understand whether answers currently depend on individual experts, product documentation, project files, tickets, or informal conversations.",
      },
      {
        title: "Test one narrow use case",
        text:
          "Choose one robot family or newly integrated product area and measure whether reusable engineering judgment can reduce escalations.",
      },
    ],
    outreach: {
      angle:
        "Lead with knowledge integration after rapid expansion, not with generic AI. The acquisitions give Bardin a concrete reason to ask how new technical knowledge reaches sales, partners, and service.",
      targets: [
        "Head of Application Engineering",
        "Sales Engineering leadership",
        "Partner Enablement",
        "Service / Technical Support leadership",
      ],
      firstTouch:
        "You have added major new robotics and intralogistics capabilities very quickly. I am curious how you are making the application knowledge behind those products immediately usable by sales, partners, and service without routing every technical question back to the original experts.",
      pilot:
        "Start with one recently integrated product family. Connect the relevant product data, technical documentation, and a small set of real application cases. Let a limited sales/service group use Bardin for verified application questions and compare escalation rate and response time with the current workflow.",
      caution:
        "Do not claim NEURA has a bottleneck. Use the acquisitions as a discovery trigger and validate the problem first.",
    },
  },

  {
    slug: "kuka",
    name: "KUKA",
    shortName: "KUKA",
    homepage: "https://www.kuka.com/de-de/",
    companyType: "Robotics & Automation OEM",
    location: "Augsburg, Germany",
    reviewed: "27 Aug 2026",
    logo: "/bardin/KUKA-logo.svg",
    logoPlaceholder: "KUKA",
    totalScore: 87,
    growth: "Med–High",
    complexity: "Very High",
    urgency: "High",
    rankReason:
      "A global robotics and automation platform with large partner ecosystems, complex deployment workflows, and application engineers spanning scoping through commissioning and support.",
    mainInsight:
      "KUKA combines industrial robots, AMRs, controls, software, simulation, system partners, and customer-specific applications. Its public application-engineering roles and 2026 ecosystem activity show how much technical judgment sits inside deployment and support workflows.",
    pressure: [
      {
        label: "Deployment complexity",
        value: "Very High",
        text:
          "Robots, AMRs, controllers, software, simulation, integrations, and customer-specific systems must work together across the automation lifecycle.",
      },
      {
        label: "Partner scale",
        value: "High",
        text:
          "System integrators, technology partners, and customers jointly design and deploy solutions across many industries and geographies.",
      },
      {
        label: "GTM urgency",
        value: "High",
        text:
          "KUKA is actively simplifying automation while expanding AI, simulation, and interoperable robotics, increasing the value of scalable technical enablement.",
      },
    ],
    signals: [
      {
        date: "11 Aug 2026",
        title: "End-to-End Automation at AMB 2026",
        category: "Deployment",
        summary:
          "KUKA is presenting a new generation of robots and controls together with partners, including iiQKA.OS2, mxAutomation, and iiQWorks.Sim for planning and virtual commissioning.",
        why:
          "The breadth of hardware, controls, software, and partner combinations creates exactly the kind of application context that can require specialist judgment.",
        source:
          "https://www.kuka.com/de-de/unternehmen/presse/news/2026/08/kuka-auf-der-amb-2026",
      },
      {
        date: "14 Jul 2026",
        title: "AMR Application Engineer Hiring",
        category: "Application Engineering",
        summary:
          "KUKA advertised an AMR Application Engineer role in Augsburg responsible for conceiving and planning customer applications in KUKA software.",
        why:
          "This is direct evidence that customer-specific application work is a specialized commercial and engineering function.",
        source:
          "https://www.kuka.com/de-de/unternehmen/karriere/stellenangebote/application-engineer-amr-mwd-3700",
      },
      {
        date: "5 May 2026",
        title: "Simulation-Driven Automation Push",
        category: "Engineering Workflow",
        summary:
          "KUKA and Visual Components are expanding simulation-driven workflows from planning and virtual commissioning through operations, while emphasizing the partner ecosystem.",
        why:
          "Complex projects generate reusable engineering decisions across planning, commissioning, and lifecycle support that Bardin could help surface.",
        source:
          "https://www.kuka.com/en-de/company/press/news/2026/05/visual-components-simulation-driven-automation",
      },
      {
        date: "20 Apr 2026",
        title: "KUKA + Microsoft AI Collaboration",
        category: "AI / Software",
        summary:
          "KUKA and Microsoft are co-engineering AI and cloud solutions including iiQWorks.Copilot for natural-language robot programming and faster simulation workflows.",
        why:
          "KUKA is already AI-mature, so Bardin should position around deployment knowledge and application judgment rather than generic AI assistance.",
        source:
          "https://www.kuka.com/en-de/company/iimagazine/2026/04/kuka-hannover-messe-2026",
      },
      {
        date: "10 Feb 2026",
        title: "AMR Interoperability Arena",
        category: "Partner Ecosystem",
        summary:
          "At LogiMAT, KUKA demonstrated mixed fleets and stationary robotics with partners such as SYNAOS, WIFERION, and FPT Robotik.",
        why:
          "Interoperable systems increase the number of interfaces, deployment choices, and support questions across organizational boundaries.",
        source:
          "https://www.kuka.com/en-de/company/press/news/2026/01/kuka-auf-der-logimat-2026",
      },
    ],
    scoreBreakdown: [
      {
        label: "Technical product complexity",
        score: 19,
        max: 20,
        reason:
          "Industrial robots, AMRs, controls, software, simulation, safety, and systems integration create very high technical complexity.",
      },
      {
        label: "Application engineering dependency",
        score: 19,
        max: 20,
        reason:
          "KUKA publicly hires application engineers for customer-specific planning, commissioning, technical support, training, and related work.",
      },
      {
        label: "International / partner sales",
        score: 19,
        max: 20,
        reason:
          "KUKA operates globally and relies on system integrators, technology partners, and customer-specific deployment ecosystems.",
      },
      {
        label: "Growth and change signals",
        score: 16,
        max: 20,
        reason:
          "KUKA is actively evolving its AI, software, simulation, AMR, and partner-led deployment capabilities.",
      },
      {
        label: "Evidence of current pain",
        score: 14,
        max: 20,
        reason:
          "Public job descriptions show substantial expert work across technical assessment, commissioning, support, training, and customer communication, but not a confirmed bottleneck.",
      },
    ],
    hypothesis:
      "KUKA's broad portfolio and global partner ecosystem may create repeated application-engineering work across robot selection, AMR planning, software integration, simulation, commissioning, and support. The opportunity for Bardin would be to make proven engineering judgment available earlier and more consistently across customer-facing teams and partners.",
    discoveryQuestion:
      "Across AMR and robotics projects, which customer questions still require an experienced application engineer to step in before the team can confidently scope, configure, or troubleshoot the solution?",
    actions: [
      {
        title: "Choose a narrow deployment domain",
        text:
          "AMR application scoping is a strong starting point because KUKA publicly shows dedicated application-engineering work and complex partner integration.",
      },
      {
        title: "Map escalation points",
        text:
          "Identify where sales, partners, project teams, or support must wait for specialized application expertise.",
      },
      {
        title: "Separate Bardin from generic copilots",
        text:
          "Position around verified deployment judgment, project history, and reusable engineering decisions rather than natural-language AI alone.",
      },
      {
        title: "Pilot with real project questions",
        text:
          "Use past AMR or robot-deployment cases to test whether Bardin can reproduce expert reasoning with traceable sources.",
      },
    ],
    outreach: {
      angle:
        "KUKA is already investing in AI and copilots. The pitch must therefore be specific: Bardin is not another chatbot; it is a way to capture and reuse application-engineering judgment across deployment, partner, and support workflows.",
      targets: [
        "AMR / Robotics Application Engineering leadership",
        "Technical Sales leadership",
        "Digital / Software product leadership",
        "Service & Support leadership",
      ],
      firstTouch:
        "KUKA is clearly making automation easier through iiQKA, simulation, and AI. One area I would be interested in understanding is the part that still depends on experienced application engineers: the customer-specific judgment needed to scope, integrate, commission, and support a real deployment.",
      pilot:
        "Pick one AMR workflow such as initial application scoping or recurring post-deployment support. Ground Bardin in approved technical material plus selected resolved project cases, then compare answer quality, engineering escalations, and time-to-response.",
      caution:
        "Avoid a broad 'AI for KUKA' pitch. Microsoft and KUKA already have strong AI initiatives. The wedge must be application judgment and deployment workflow.",
    },
  },

  {
    slug: "festo",
    name: "Festo",
    shortName: "Festo",
    homepage: "https://www.festo.com/de/de/",
    companyType: "Automation Component OEM",
    location: "Esslingen, Germany",
    reviewed: "27 Aug 2026",
    logo: "/bardin/logo-festo.svg",
    logoPlaceholder: "FESTO",
    totalScore: 90,
    growth: "Medium",
    complexity: "Very High",
    urgency: "High",
    rankReason:
      "An unusually strong structural Bardin fit: tens of thousands of products, huge variant complexity, custom solutions, global technical sales, and explicit public acknowledgement of fragmented engineering information.",
    mainInsight:
      "Festo may be the clearest structural fit of the three. Its automation portfolio spans around 36,000 catalogue products in hundreds of thousands of variants, plus roughly 10,000 customized solutions per year. Festo has also publicly described the burden of fragmented technical information and launched its own AI Virtual Assistant.",
    pressure: [
      {
        label: "Configuration complexity",
        value: "Very High",
        text:
          "A massive product and variant portfolio creates constant component-selection, sizing, compatibility, and application questions.",
      },
      {
        label: "Knowledge scale",
        value: "Very High",
        text:
          "Festo serves hundreds of thousands of industrial customers globally across many industries and technical domains.",
      },
      {
        label: "GTM urgency",
        value: "High",
        text:
          "Festo is actively simplifying the digital customer experience and has explicitly invested in AI to reduce time spent searching fragmented technical information.",
      },
    ],
    signals: [
      {
        date: "17 Jul 2026",
        title: "Bosch Preferred Supplier for New Projects",
        category: "Complex Sales",
        summary:
          "Festo was again named Bosch's Preferred Supplier for pneumatic components and positioned as a first point of contact for new machine and plant projects.",
        why:
          "New machine and plant projects require fast, credible application support across standard and complex components.",
        source:
          "https://press.festo.com/en/node/5217",
      },
      {
        date: "8 Jun 2026",
        title: "GripperAI Launch",
        category: "AI / Robotics",
        summary:
          "Festo introduced GripperAI, software that helps robots handle mixed and unfamiliar products with reduced specialist programming and vision integration.",
        why:
          "Festo is expanding from components into software and AI-enabled application outcomes, increasing cross-domain knowledge requirements.",
        source:
          "https://press.festo.com/en/node/5214",
      },
      {
        date: "30 Apr 2026",
        title: "AI-Powered Virtual Assistant",
        category: "Knowledge Access",
        summary:
          "Festo launched an AI assistant to help engineers access technical answers across data sheets, manuals, engineering tools, and other verified data sources.",
        why:
          "Festo explicitly says engineers face increasing complexity and fragmented information. That validates the underlying knowledge-access problem, even though Festo is already addressing part of it internally.",
        source:
          "https://press.festo.com/index.php/en-gb/node/5204",
      },
      {
        date: "31 Mar 2026",
        title: "Eichenberger Fully Integrated",
        category: "Knowledge Integration",
        summary:
          "Festo fully integrated Swiss screw-drive specialist Eichenberger to strengthen expertise and expand its electrical automation portfolio.",
        why:
          "Acquired specialist know-how and expanded product portfolios create a concrete knowledge-integration challenge across sales and engineering.",
        source:
          "https://press.festo.com/en-gb/node/5185",
      },
      {
        date: "4 Mar 2026",
        title: "Seamless Automation Strategy",
        category: "Digital Experience",
        summary:
          "Festo presented a strategy combining pneumatic and electric automation, software, AI, connectivity, and an intuitive digital customer experience.",
        why:
          "The strategic goal is explicitly to turn a very broad solution portfolio into a simpler customer journey, directly adjacent to Bardin's value proposition.",
        source:
          "https://press.festo.com/de/node/5173",
      },
    ],
    scoreBreakdown: [
      {
        label: "Technical product complexity",
        score: 20,
        max: 20,
        reason:
          "Festo reports around 36,000 catalogue products in several hundred thousand variants plus roughly 10,000 customized solutions per year.",
      },
      {
        label: "Application engineering dependency",
        score: 19,
        max: 20,
        reason:
          "Sizing, component selection, standards, compatibility, troubleshooting, and custom automation solutions require substantial technical judgment.",
      },
      {
        label: "International / partner sales",
        score: 20,
        max: 20,
        reason:
          "Festo serves more than 300,000 industrial customers through a global sales and distribution footprint.",
      },
      {
        label: "Growth and change signals",
        score: 15,
        max: 20,
        reason:
          "Festo is integrating new expertise, expanding software and AI, and reshaping its digital customer experience.",
      },
      {
        label: "Evidence of current pain",
        score: 16,
        max: 20,
        reason:
          "Festo itself states that engineers face increasingly complex systems and technical information spread across multiple tools and sources.",
      },
    ],
    hypothesis:
      "Festo's enormous product and variant complexity creates a recurring need to connect product data with real application judgment. Its Virtual Assistant addresses verified technical information retrieval; Bardin's potential wedge would be one level deeper: reusable scoping, configuration, deployment, and troubleshooting judgment based on how experienced engineers have solved real applications.",
    discoveryQuestion:
      "Your Virtual Assistant already makes verified technical information easier to access. Where do customers or sales engineers still need an experienced application engineer because the answer depends on judgment across multiple products, constraints, or prior application experience rather than simply finding the right document?",
    actions: [
      {
        title: "Respect the existing AI investment",
        text:
          "Start by acknowledging the Festo Virtual Assistant and understanding exactly which problems it already solves.",
      },
      {
        title: "Find the judgment gap",
        text:
          "Look for workflows where product documentation is necessary but insufficient: sizing, configuration, feasibility, cross-product design, and non-standard applications.",
      },
      {
        title: "Pick one complex product family",
        text:
          "Electric automation, end-of-arm tooling, or another highly configurable domain could provide a bounded pilot.",
      },
      {
        title: "Measure engineering leverage",
        text:
          "Track time-to-answer, technical escalation rate, configuration accuracy, and the amount of expert intervention required.",
      },
    ],
    outreach: {
      angle:
        "Festo is not a greenfield AI prospect. Its own Virtual Assistant proves both the pain and internal capability. Bardin should complement it by focusing on application-engineering judgment and workflow, not document retrieval.",
      targets: [
        "Application Engineering leadership",
        "DACH / Global Technical Sales",
        "Digital Customer Experience",
        "Service / Technical Support",
      ],
      firstTouch:
        "The Festo Virtual Assistant is a strong answer to fragmented technical information. I would be interested in the next layer: the questions where the correct documents are available but a sales or service engineer still needs an experienced application engineer to combine constraints, select a configuration, or judge feasibility.",
      pilot:
        "Choose one highly configurable product family. Use a controlled set of verified product data plus anonymized resolved application cases. Test whether Bardin can reproduce expert application reasoning for sales or support while remaining source-grounded.",
      caution:
        "Never pitch Bardin as a replacement for Festo's Virtual Assistant. Position it as a complementary layer for application judgment, project context, and repeatable workflows.",
    },
  },
];

export const companiesBySlug = Object.fromEntries(
  companies.map((company) => [company.slug, company])
);
