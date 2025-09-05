// js/details.js

// ==== SERVICES DATA ====
const services = {
  "structural-fabrication": {
    title: "Structural Fabrication",
    images: [
      "img/structural-fabrication-3.jpg",
      "img/structural-fabrication-2.jpg",
      "img/structural-fabrication-1.jpg"
    ],
    description: "Precision fabrication of steel structures for buildings, bridges, and industrial applications. Our team uses advanced techniques to ensure high-quality, durable structures that meet international standards. This service includes design consultation, material selection, cutting, bending, assembly, and final inspection to guarantee safety and longevity in all projects."
  },
  "steel-welding": {
    title: "Steel Welding",
    images: [
      "img/steel-welding-2.jpg",
      "img/steel-welding-3.jpg",
      "img/steel-welding-1.jpg"
    ],
    description: "Durable and high-quality welding solutions for industrial, commercial, and infrastructure projects. We employ certified welders and modern equipment to deliver strong, reliable welds that withstand extreme conditions. Services cover MIG, TIG, arc welding, and more, with emphasis on quality control, non-destructive testing, and compliance with safety regulations."
  },
  "pipeline-welding": {
    title: "Pipeline Welding",
    images: [
      "img/pipeline-welding-2.jpg",
      "img/pipeline-welding-3.jpg",
      "img/pipeline-welding-1.png"
    ],
    description: "Expert pipeline welding and installation services for oil, gas, and water systems. Our process involves precise alignment, welding, and testing to prevent leaks and ensure efficient flow. We handle projects of all sizes, incorporating corrosion protection, pressure testing, and adherence to environmental and industry standards for long-term performance."
  },
  "custom-fabrication": {
    title: "Custom Fabrication",
    images: [
      "img/custom-fabrication-4.jpg",
      "img/custom-fabrication-3.jpg",
      "img/custom-fabrication-2.jpg"
    ],
    description: "Tailored fabrication services to meet unique designs, client requirements, and project standards. From concept to completion, we collaborate with clients to create bespoke metal components using CAD design, prototyping, and precision manufacturing. Ideal for specialized machinery, architectural elements, and innovative engineering solutions."
  },
  "mechanical-engineering": {
    title: "Mechanical Engineering",
    images: [
      "img/mechanical-engineering-2.jpg",
      "img/mechanical-engineering-1.jpg",
      "img/mechanical-engineering-3.jpg"
    ],
    description: "Professional mechanical engineering design, installation, and maintenance solutions. Our engineers provide comprehensive services including system design, component selection, installation oversight, and routine maintenance to optimize performance and extend equipment lifespan in industrial settings."
  },
  "metal-works": {
    title: "Metal Works",
    images: [
      "img/metal-works-2.jpg",
      "img/metal-works-1.jpg",
      "img/service-6.jpg"
    ],
    description: "Complete range of metal works for construction, manufacturing, and custom engineering needs. This includes sheet metal fabrication, forging, casting, and finishing services. We focus on versatility, using various metals to create products that are both functional and aesthetically pleasing, backed by rigorous quality assurance."
  },
  "industrial-maintenance": {
    title: "Industrial Maintenance",
    images: [
      "img/industrial-maintainance-3.jpg",
      "img/industrial-maintainance-2.jpg",
      "img/industrial-maintainance-1.jpg"
    ],
    description: "Reliable maintenance and repair solutions to ensure continuous industrial operations. Our preventive and corrective maintenance programs minimize downtime, including regular inspections, lubrication, parts replacement, and emergency repairs, all performed by experienced technicians to maintain peak efficiency."
  },
  "pipe-fabrication": {
    title: "Pipe Fabrication",
    images: [
      "img/pipeline-welding-3.jpg",
      "img/pipeline-welding-2.jpg",
      "img/steel-welding-3.jpg"
    ],
    description: "Custom-designed pipe fabrication and welding solutions built to meet global standards. We specialize in creating piping systems for various industries, involving cutting, bending, welding, and assembly, with thorough testing for pressure, leaks, and durability to ensure safe and efficient fluid transport."
  },
  "water-works": {
    title: "Water Works",
    images: [
      "img/water-works-4.jpg",
      "img/water-works-3.jpg",
      "img/carousel/120CM Water Reservoir Tank Constructed at Kinuuka - Lyantonde under Water and Sanitation Development Facility South Western Branch.jpg"
    ],
    description: "Pipeline installation, water treatment systems, borehole drilling, and infrastructure. Our comprehensive water management services include site assessment, system design, installation of treatment plants, distribution networks, and ongoing monitoring to provide clean, reliable water supply while promoting sustainability."
  },
  "cnc-fabrication": {
    title: "CNC Fabrication",
    images: [
      "img/cnc-fabrication-2.jpg",
      "img/cnc.jpg",
      "img/cnc-plasma-system-13.png"
    ],
    description: "Precision CNC machining: cutting, shaping, drilling, and milling. Utilizing computer numerical control technology, we produce high-accuracy parts with tight tolerances for aerospace, automotive, and medical industries, offering rapid prototyping and large-scale production with consistent quality."
  },
  "solar-solutions": {
    title: "Solar Solutions",
    images: [
      "img/solar-solutions-1.jpg",
      "img/solar-solutions-3.jpg",
      "img/solar-solutions-2.jpg"
    ],
    description: "Solar pumping systems, energy solutions, and long-term maintenance services. We design and install photovoltaic systems for off-grid and hybrid applications, including panels, inverters, batteries, and controls, with maintenance plans to ensure optimal energy output and system longevity."
  },
  "civil-construction": {
    title: "Civil Construction",
    images: [
      "img/civil-construction-2.jpg",
      "img/civil-construction-1.jpg",
      "img/civil-construction-4.jpg"
    ],
    description: "Roads, bridges, and infrastructure built with international standards and expertise. Our civil engineering team handles site preparation, foundation work, structural building, and finishing, incorporating sustainable practices and advanced materials for resilient, long-lasting public and private infrastructure projects."
  },
  "heavy-equipment-hire": {
    title: "Heavy Equipment Hire",
    images: [
      "img/equipment-hire-2.jpg",
      "img/equipment-hire-4.jpg",
      "img/equipment-hire-3.jpg"
    ],
    description: "Wide range of heavy machinery and equipment available for hire with skilled operators. From excavators and cranes to bulldozers and loaders, we provide well-maintained equipment for construction, mining, and logistics projects, including short-term and long-term rentals with on-site support."
  }
};

// ==== PROJECTS DATA ====
const projects = {
  project1: {
    title: "Arise Nursery & Primary School – Nakivale",
    images: ["img/projects/project1-1.jpg","img/projects/project1-2.jpg","img/projects/project1-3.jpg"],
    description: `
      Construction of 3 four-classroom blocks, an administration block, a kitchen,
      and 2 four-stance latrines at Arise Nursery & Primary School in Nakivale Refugee Settlement. This project aimed to enhance educational facilities for refugee children, incorporating durable materials, proper ventilation, and accessible designs to support learning in challenging environments. Completed on time with community involvement for sustainability.
    `
  },
  project2: {
    title: "Maratatu Primary School – Kyangwali",
    images: ["img/projects/project2-1.jpg","img/projects/project2-2.jpg","img/projects/project2-3.jpg"],
    description: `
      Construction of a four-classroom block, a three-classroom block, office, store,
      kitchen, and ordinary pit latrine for boys at Maratatu Primary School. The project focused on improving educational infrastructure with robust construction techniques, ensuring safety and functionality. Community training was provided to maintain facilities long-term.
    `
  },
  project3: {
    title: "School Facility Rehabilitation – Albertine Region",
    images: ["img/projects/project3-1.jpg","img/projects/project3-2.jpg","img/projects/project3-3.jpg"],
    description: `
      Rehabilitation of the existing two-classroom block and Teacher’s Residence Block,
      plus upgrading of Community Health Centres II in the Albertine Region. This project enhanced learning and healthcare environments through structural repairs, modernized facilities, and energy-efficient upgrades, improving community access to essential services.
    `
  },
  project4: {
    title: "Okol East Water Scheme – Kitgum",
    images: ["img/projects/project4-1.jpg","img/projects/project4-2.jpg","img/projects/project4-3.jpg"],
    description: `
      Construction of a piped water scheme including pumping station, pumping main,
      guard house, control room, and mechanical & electrical works. This project delivered clean water to rural communities, incorporating solar-powered systems and durable infrastructure to ensure reliability and low maintenance costs.
    `
  },
  project5: {
    title: "GRP Tanks – Awach, Omoro & Lalogi",
    images: ["img/projects/project5-1.jpg","img/projects/project5-2.jpg","img/projects/project5-3.jpg"],
    description: `
      Supply and installation of three 40m³ GRP tanks at Awach (Gulu),
      Loajonga (Omoro), and Lalogi Health Centre III. These corrosion-resistant tanks were installed with precision to support water storage needs, complemented by training for local operators to ensure proper upkeep.
    `
  },
  project6: {
    title: "Imvepi Settlement – Terego (GIZ)",
    images: ["img/projects/project6-1.jpg","img/projects/project6-2.jpg","img/projects/project6-3.jpg"],
    description: `
      Rehabilitation of four solar-powered water systems in Imvepi Settlement,
      awarded by GIZ for Zone 1 and Zone 2 sites in Terego District. The project restored reliable water access through system upgrades, solar panel maintenance, and community training for sustainable operation.
    `
  },
  project7: {
    title: "Pressed Steel Tanks – Aboke & Adiaka",
    images: ["img/projects/project7-1.jpg","img/projects/project7-2.jpg","img/projects/project7-3.jpg"],
    description: `
      Construction and installation of 30m³ and 40m³ pressed steel tanks in Aboke and Adiaka,
      subcontracted by Allianz Ltd in 2023. These tanks were designed for durability, with elevated towers and secure fittings to support local water distribution systems effectively.
    `
  },
  project8: {
    title: "Ocea Rhino Camp – OXFAM",
    images: ["img/projects/project8-1.jpg","img/projects/project8-2.jpg","img/projects/project8-3.jpg"],
    description: `
      Construction of a 45m³ pressed steel tank, tower, and chlorine dosing house
      at Ocea, Rhino Camp in Terego District, awarded by OXFAM in 2022. The project ensured safe drinking water through advanced chlorination and robust infrastructure, benefiting thousands of residents.
    `
  },
  project9: {
    title: "Otuke Health Centre – Ggoli Ltd",
    images: ["img/projects/project9-1.jpg","img/projects/project9-2.jpg","img/projects/project9-3.jpg"],
    description: `
      Construction and installation of a 40m³ pressed steel tank in Otuke Health Centre,
      awarded by Ggoli Limited in 2022. The project included a sturdy tower and plumbing works, enhancing water availability for healthcare services with minimal maintenance needs.
    `
  },
  project10: {
    title: "Arua – Eden IV (Malteser International)",
    images: ["img/projects/project10-1.jpg","img/projects/project10-2.jpg","img/projects/project10-3.jpg"],
    description: `
      Construction of a 32.58m³ pressed steel tank, tower, and fittings
      for Eden IV water scheme in Rhino Camp, Arua, awarded in 2022. The system was designed for efficient water storage and distribution, supporting community needs with reliable infrastructure.
    `
  },
  project11: {
    title: "Dokolo Health Centre – Alcom",
    images: ["img/projects/project11-1.jpg","img/projects/project11-2.jpg","img/projects/project11-3.jpg"],
    description: `
      Construction and installation of a 40m³ pressed steel tank at Dokolo Health Centre,
      awarded by Alcom Investment Limited in 2022. This project improved water access for medical facilities, incorporating high-quality materials and safety features for long-term reliability.
    `
  },
  project12: {
    title: "Otuke & Amuru – Allianz",
    images: ["img/projects/project12-1.jpg","img/projects/project12-2.jpg","img/projects/project12-3.jpg"],
    description: `
      Construction and installation of multiple water storage systems in Otuke and Amuru,
      subcontracted by Allianz Ltd. The project involved pressed steel tanks, towers, and distribution networks, designed to provide sustainable water access with community training for maintenance.
    `
  },
  project15: {
    title: "Kibaale Town Water & Sanitation",
    images: ["img/projects/project15-1.jpg","img/projects/project15-2.jpg","img/projects/project15-3.jpg"],
    description: `
      Improvement of Kibaale Town Water Supply and Sanitation System,
      awarded by the Ministry of Water and Environment (2020/21). The project included extensive pipeline networks, treatment facilities, and public sanitation infrastructure to enhance community health and access to clean water.
    `
  },
  project16: {
    title: "Umbrella North – Multiple Sites",
    images: ["img/projects/project16-1.jpg","img/projects/project16-2.jpg","img/projects/project16-3.jpg"],
    description: `
      Replacement and construction of tanks and towers at Otwal, Anyomolyec,
      and Palenga under Umbrella North in 2020. This initiative upgraded water storage and distribution systems, ensuring reliable access with modern, durable materials and community training.
    `
  },
  project17: {
    title: "Owori Memorial WASH – Merikit, Tororo",
    images: ["img/projects/project17-1.jpg","img/projects/project17-2.jpg","img/projects/project17-3.jpg"],
    description: `
      WASH project in Merikit Sub County, Tororo District:
      solar-powered well, 108,000L reservoir, piped water system,
      13 drainable toilets, kiosks, and training of water-user committees. The project improved sanitation and water access, with sustainable systems and local capacity building.
    `
  },
  project18: {
    title: "Kinuuka Town Water Supply – Lyantonde",
    images: ["img/projects/project18-1.jpg","img/projects/project18-2.jpg","img/projects/project18-3.jpg"],
    description: `
      Construction of water supply system: transmission (1km), distribution (12km),
      120m³ concrete reservoir, pumps, generator, office, and public tap stands. This project enhanced water access for urban and rural areas, incorporating energy-efficient systems and community engagement.
    `
  },
  project19: {
    title: "K-Fire Crew Ltd – Prefab Offices",
    images: ["img/projects/project19-1.jpg","img/projects/project19-2.jpg","img/projects/project19-3.jpg"],
    description: `
      Supply and installation of prefabricated houses for K-Fire Crew Ltd operational offices in Uganda. These modular structures were designed for rapid deployment, durability, and comfort, meeting the client’s operational needs with minimal environmental impact.
    `
  },
  project20: {
    title: "K-Fire Crew Ltd – Prefab Houses & Biogas",
    images: ["img/projects/project20-1.jpg","img/projects/project20-2.jpg","img/projects/project20-3.jpg"],
    description: `
      Construction of ten prefabricated houses connected to a 15m³ biogas digester tank,
      producing energy for cooking, plus installation of an incinerator for solid waste. This eco-friendly project promoted sustainable energy and waste management, tailored to client specifications.
    `
  },
  project21: {
    title: "Water Supply & Sanitation – Bar-Lonyo & Aloi",
    images: ["img/projects/project21-1.jpg","img/projects/project21-2.jpg","img/projects/project21-3.jpg"],
    description: `
      Construction of two boreholes, solar pump systems, 40m³ reservoirs, HDPE pipelines,
      12 stand taps, 26 latrines, rainwater harvesting tanks, and biogas digesters. This comprehensive WASH project improved water and sanitation access, with sustainable systems and community training.
    `
  },
  project22: {
    title: "Ayilo 1 Settlement – Adjumani",
    images: ["img/projects/project22-1.jpg","img/projects/project22-2.jpg","img/projects/project22-3.jpg"],
    description: `
      Supply, installation, and erection of a 36m³ pressed steel tank on a tower,
      including plumbing works for the water supply system. The project ensured reliable water distribution for the settlement, using high-quality materials and efficient design.
    `
  },
  project23: {
    title: "Kalungi Water Supply – Nakasongola",
    images: ["img/projects/project23-1.jpg","img/projects/project23-2.jpg","img/projects/project23-3.jpg"],
    description: `
      Construction of a piped water supply system in Kalungi:
      transmission (3.2km), distribution (1.8km), 50m³ pressed steel tank,
      pumps, office, kiosks, and yard connections. This project improved water access with a focus on durability and community usability.
    `
  },
  project24: {
    title: "Twin Staff House – Adagnyeko P/S",
    images: ["img/projects/project24-1.jpg","img/projects/project24-2.jpg","img/projects/project24-3.jpg"],
    description: `
      Construction of twin staff house at Adagnyeko Primary School:
      substructure, superstructure, roofing, doors, and paint works. The project provided comfortable housing for teachers, enhancing educational support with quality construction.
    `
  },
  project25: {
    title: "5 Classroom Block – Amonoloco P/S",
    images: ["img/projects/project25-1.jpg","img/projects/project25-2.jpg","img/projects/project25-3.jpg"],
    description: `
      Construction of a five-classroom block with roofing, doors,
      finishing and painting works at Amonoloco Primary School. This project expanded educational capacity, using durable materials and modern design for a conducive learning environment.
    `
  },
  project26: {
    title: "VIP Pit Latrines – Various Schools",
    images: ["img/projects/project26-1.jpg","img/projects/project26-2.jpg","img/projects/project26-3.jpg"],
    description: `
      Construction of multiple four-stance VIP pit latrines
      across schools in Uganda to improve sanitation facilities. These latrines were designed for durability and hygiene, with ventilation systems to enhance user comfort and health.
    `
  },
  project27: {
    title: "Juru Primary School & Health Centre – Nakivale",
    images: ["img/projects/project27-1.jpg","img/projects/project27-2.jpg","img/projects/project27-3.jpg"],
    description: `
      Extension of water pipeline to Juru Primary School and Health Centre,
      construction of pump house, generator installation, and treatment works. This project improved water access for education and healthcare, with sustainable systems and community training.
    `
  },
  project28: {
    title: "Rwenkobwa Water Supply & Sanitation",
    images: ["img/projects/project28-1.jpg","img/projects/project28-2.jpg","img/projects/project28-3.jpg"],
    description: `
      Borehole, transmission and distribution lines, 120m³ concrete tank,
      pumps, office, kiosks, toilets, and 165 yard connections. This comprehensive project enhanced water and sanitation access, incorporating eco-friendly designs and community engagement.
    `
  },
  project29: {
    title: "Kinogozi Town Water Supply – Hoima",
    images: ["img/projects/project29-1.jpg","img/projects/project29-2.jpg","img/projects/project29-3.jpg"],
    description: `
      Transmission (1km), distribution (12km), 100m³ steel tank on 12m tower,
      pumps, office, 10 public taps, and 100 yard connections. The project delivered reliable water supply with modern infrastructure, designed for scalability and low maintenance.
    `
  },
  project30: {
    title: "Agweng RGC Water Supply",
    images: ["img/projects/project30-1.jpg","img/projects/project30-2.jpg","img/projects/project30-3.jpg"],
    description: `
      Construction of water supply system in Agweng:
      distribution pipelines, 100m³ steel tank, pumps, office,
      public taps, and yard connections. This project improved community water access with robust, sustainable infrastructure and local training.
    `
  },
  project31: {
    title: "Lokitelaebu RGC – Kotido",
    images: ["img/projects/project31-1.jpg","img/projects/project31-2.jpg","img/projects/project31-3.jpg"],
    description: `
      Construction of Lokitelaebu Rural Growth Centre water supply system:
      distribution lines, steel panel tank, reinforced concrete base,
      pumps, wiring, and alarm system. The project ensured reliable water delivery with advanced monitoring and durable construction.
    `
  },
  project32: {
    title: "Improvement of Water Quality – Lira",
    images: ["img/projects/project32-1.jpg","img/projects/project32-2.jpg","img/projects/project32-3.jpg"],
    description: `
      Improvement of quality of water at various learning centres in Lira District
      through sample collection, water treatment, and installation of systems. Our team conducted thorough assessments, implemented filtration and purification technologies, and trained local staff on maintenance, resulting in safer drinking water and reduced health risks for students and teachers.
    `
  }
};

// ==== ROUTING LOGIC ====
const params = new URLSearchParams(window.location.search);
const type = params.get("type"); // service | project
const id = params.get("id");

const container = document.getElementById("detail-container");

// Update page title and breadcrumb dynamically
const pageTitle = document.getElementById("page-title");
const breadcrumbParent = document.getElementById("breadcrumb-parent");
const breadcrumbCurrent = document.getElementById("breadcrumb-current");

let data;
let parentPage = "";
let parentLink = "";

if (type === "project") {
  data = projects[id];
  parentPage = "Projects";
  parentLink = "projects.html";
} else {
  data = services[id];
  parentPage = "Services";
  parentLink = "service.html";
}

if (data) {
  // Update document title
  document.title = `${data.title} - Awico Engineering`;

  // Update page header title
  if (pageTitle) pageTitle.textContent = data.title;

  // Update breadcrumb
  if (breadcrumbParent) {
    breadcrumbParent.innerHTML = `<a class="text-white" href="${parentLink}">${parentPage}</a>`;
  }
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = data.title;

  // Grab up to 3 images (recycle if fewer provided)
  const imgs = data.images || [];
  const img1 = imgs[0] || "img/placeholder.jpg";
  const img2 = imgs[1] || img1;
  const img3 = imgs[2] || img1;

  container.innerHTML = `
    <div class="row g-3 mb-4">
      <div class="col-md-4">
        <img src="${img1}" class="img-fluid rounded shadow-sm mb-3" alt="${data.title}">
        <img src="${img2}" class="img-fluid rounded shadow-sm" alt="${data.title}">
      </div>
      <div class="col-md-8">
        <img src="${img3}" class="img-fluid rounded shadow-sm h-100 w-100" alt="${data.title}">
      </div>
    </div>
    <div class="col-12">
      <h1 class="display-6 text-uppercase mb-4">${data.title}</h1>
      <p>${data.description}</p>
      <a href="${parentLink}" 
         class="btn btn-primary mt-3">Back to ${parentPage}</a>
    </div>
  `;
} else {
  container.innerHTML = `<h2 class="text-danger">Item not found</h2>`;
}