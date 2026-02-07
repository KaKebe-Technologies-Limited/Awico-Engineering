// js/details.js

// ==== SERVICES DATA ====
const services = {
  "steel-tanks": {
    title: "Galvanized Pressed Steel Tanks",
    images: [
      "img/products/steel/steel-tank-main.jpg",
      "img/products/steel-tank-1.jpg",
      "img/products/steel-tank-2.jpg",
    ],
    description:
      "Our galvanized pressed steel tanks are constructed from hot-pressed cold-rolled steel panels (1m x 1m and 1.22m x 1.22m). These tanks offer superior tensile strength and are engineered for the African climate, maintaining structural integrity in temperatures exceeding 40°C. They are ideal for firefighting, rainwater harvesting, and large-scale irrigation schemes.",
  },
  "grp-tanks": {
    title: "GRP (Glass Reinforced Plastic) Water Tanks",
    images: [
      "img/products/grp/grp-tank-main.jpg",
      "img/products/grp/grp-internal.jpg",
      "img/products/grp/grp-panels-stack.jpg",
    ],
    description:
      "GRP tanks are a hygienic solution for water storage, manufactured using the high-strength SMC (Sheet Moulding Composite) process. The panels block light to prevent the growth of bacteria and algae. With a corrosion-proof internal structure and optional thermal insulation, they are perfect for hospitals, schools, and residential potable water systems.",
  },
  "agricultural-products": {
    title: "Agricultural Machinery & Equipment",
    images: ["img/1.jpeg", "img/2.jpeg", "img/3.jpeg", "img/4.jpeg"],
    description:
      "AWICO We provide high-performance post-harvest and processing machinery designed to improve farming efficiency and value addition. From precision thrashing to consistent feed blending, our equipment is built to withstand industrial use while ensuring maximum crop yield and quality for Ugandan farmers and agribusinesses.",
  },
  "tank-accessories": {
    title: "Tank Accessories & Components",
    images: [
      "img/products/accessories/flanges.jpg",
      "img/products/accessories/ladder.jpg",
      "img/products/accessories/bolts-nuts.jpg",
      "img/products/accessories/level-meter.jpg",
    ],
    description:
      "We provide a comprehensive range of accessories to ensure successful installation and longevity of your storage systems. For potable water, we supply Stainless Steel (SS304/316) internal accessories; for irrigation, Hot-Dipped Galvanized (HDG) components are provided. Our inventory includes internal and external ladders, water level meters, high-grade sealants (glass cement and sealing tapes), internal tie rods, and HDG flanges/tie pieces.",
  },
  "solar-solutions": {
    title: "Solar Water & Lighting Systems",
    images: [
      "img/products/solar/solar-pump-system.jpg",
      "img/solar-solutions-1.jpg",
      "img/solar-solutions-2.jpg",
    ],
    description:
      "Sustainable energy solutions for water pumping and community infrastructure. We design and install solar-powered borehole and irrigation systems, as well as high-efficiency solar street lighting for public and private use.",
  },
  // Existing structural fabrication and other services...
  "structural-fabrication": {
    title: "Structural Fabrication",
    images: [
      "img/structural-fabrication-3.jpg",
      "img/structural-fabrication-2.jpg",
      "img/structural-fabrication-1.jpg",
    ],
    description:
      "Precision fabrication of steel structures for buildings, bridges, and industrial applications using advanced techniques to ensure quality and safety.",
  },
  "steel-welding": {
    title: "Steel Welding",
    images: [
      "img/steel-welding-2.jpg",
      "img/steel-welding-3.jpg",
      "img/steel-welding-1.jpg",
    ],
    description:
      "Durable and high-quality welding solutions for industrial, commercial, and infrastructure projects. We employ certified welders and modern equipment to deliver strong, reliable welds that withstand extreme conditions. Services cover MIG, TIG, arc welding, and more, with emphasis on quality control, non-destructive testing, and compliance with safety regulations.",
  },
  "pipeline-welding": {
    title: "Pipeline Welding",
    images: [
      "img/pipeline-welding-2.jpg",
      "img/pipeline-welding-3.jpg",
      "img/pipeline-welding-1.png",
    ],
    description:
      "Expert pipeline welding and installation services for oil, gas, and water systems. Our process involves precise alignment, welding, and testing to prevent leaks and ensure efficient flow. We handle projects of all sizes, incorporating corrosion protection, pressure testing, and adherence to environmental and industry standards for long-term performance.",
  },
  "custom-fabrication": {
    title: "Custom Fabrication",
    images: [
      "img/custom-fabrication-4.jpg",
      "img/custom-fabrication-3.jpg",
      "img/custom-fabrication-2.jpg",
    ],
    description:
      "Tailored fabrication services to meet unique designs, client requirements, and project standards. From concept to completion, we collaborate with clients to create bespoke metal components using CAD design, prototyping, and precision manufacturing. Ideal for specialized machinery, architectural elements, and innovative engineering solutions.",
  },
  "mechanical-engineering": {
    title: "Mechanical Engineering",
    images: [
      "img/mechanical-engineering-2.jpg",
      "img/mechanical-engineering-1.jpg",
      "img/mechanical-engineering-3.jpg",
    ],
    description:
      "Professional mechanical engineering design, installation, and maintenance solutions. Our engineers provide comprehensive services including system design, component selection, installation oversight, and routine maintenance to optimize performance and extend equipment lifespan in industrial settings.",
  },
  "metal-works": {
    title: "Metal Works",
    images: [
      "img/metal-works-2.jpg",
      "img/metal-works-1.jpg",
      "img/service-6.jpg",
    ],
    description:
      "Complete range of metal works for construction, manufacturing, and custom engineering needs. This includes sheet metal fabrication, forging, casting, and finishing services. We focus on versatility, using various metals to create products that are both functional and aesthetically pleasing, backed by rigorous quality assurance.",
  },
  "industrial-maintenance": {
    title: "Industrial Maintenance",
    images: [
      "img/industrial-maintainance-3.jpg",
      "img/industrial-maintainance-2.jpg",
      "img/industrial-maintainance-1.jpg",
    ],
    description:
      "Reliable maintenance and repair solutions to ensure continuous industrial operations. Our preventive and corrective maintenance programs minimize downtime, including regular inspections, lubrication, parts replacement, and emergency repairs, all performed by experienced technicians to maintain peak efficiency.",
  },
  "pipe-fabrication": {
    title: "Pipe Fabrication",
    images: [
      "img/pipeline-welding-3.jpg",
      "img/pipeline-welding-2.jpg",
      "img/steel-welding-3.jpg",
    ],
    description:
      "Custom-designed pipe fabrication and welding solutions built to meet global standards. We specialize in creating piping systems for various industries, involving cutting, bending, welding, and assembly, with thorough testing for pressure, leaks, and durability to ensure safe and efficient fluid transport.",
  },
  "water-works": {
    title: "Water Works",
    images: [
      "img/water-works-4.jpg",
      "img/water-works-3.jpg",
      "img/carousel/120CM Water Reservoir Tank Constructed at Kinuuka - Lyantonde under Water and Sanitation Development Facility South Western Branch.jpg",
    ],
    description:
      "Pipeline installation, water treatment systems, borehole drilling, and infrastructure. Our comprehensive water management services include site assessment, system design, installation of treatment plants, distribution networks, and ongoing monitoring to provide clean, reliable water supply while promoting sustainability.",
  },
  "cnc-fabrication": {
    title: "CNC Fabrication",
    images: [
      "img/cnc-fabrication-2.jpg",
      "img/cnc.jpg",
      "img/cnc-plasma-system-13.png",
    ],
    description:
      "Precision CNC machining: cutting, shaping, drilling, and milling. Utilizing computer numerical control technology, we produce high-accuracy parts with tight tolerances for aerospace, automotive, and medical industries, offering rapid prototyping and large-scale production with consistent quality.",
  },
  "solar-solutions": {
    title: "Solar Solutions",
    images: [
      "img/solar-solutions-1.jpg",
      "img/solar-solutions-2.jpg",
      "img/carousel/SOLARS INSTALLED TO PUMP WATER.JPG",
    ],
    description:
      "Solar pumping systems, energy solutions, and long-term maintenance services. We design and install photovoltaic systems for off-grid and hybrid applications, including panels, inverters, batteries, and controls, with maintenance plans to ensure optimal energy output and system longevity.",
  },
  "civil-construction": {
    title: "Civil Construction",
    images: [
      "img/civil-construction-2.jpg",
      "img/civil-construction-1.jpg",
      "img/civil-construction-4.jpg",
    ],
    description:
      "Roads, bridges, and infrastructure built with international standards and expertise. Our civil engineering team handles site preparation, foundation work, structural building, and finishing, incorporating sustainable practices and advanced materials for resilient, long-lasting public and private infrastructure projects.",
  },
  "heavy-equipment-hire": {
    title: "Heavy Equipment Hire",
    images: [
      "img/equipment-hire-2.jpg",
      "img/equipment-hire-4.jpg",
      "img/equipment-hire-3.jpg",
    ],
    description:
      "Wide range of heavy machinery and equipment available for hire with skilled operators. From excavators and cranes to bulldozers and loaders, we provide well-maintained equipment for construction, mining, and logistics projects, including short-term and long-term rentals with on-site support.",
  },
  "crane-works": {
    title: "Crane Works",
    images: [
      "img/equipment-hire-2.jpg",
      "img/crane-works-2.jpg",
      "img/crane-works-1.jpg",
    ],
    description:
      "Comprehensive crane hire and lifting solutions for construction and industrial projects. Our certified operators and modern cranes ensure safe, efficient handling of heavy materials, with services covering site assessment, lift planning, rigging, and on-site support for projects of any scale.",
  },
};

// ==== PROJECTS DATA (Abbreviated) ====
const projects = {
  project1: {
    title: "Arise Nursery & Primary School – Nakivale",
    images: [
      "img/projects/project1-1.jpg",
      "img/projects/project1-2.jpg",
      "img/projects/project1-3.jpg",
    ],
    description:
      "Construction of classroom blocks and sanitation facilities at Nakivale Refugee Settlement.",
  },
  // Add your other projects here...
};

// ==== ROUTING LOGIC ====
const params = new URLSearchParams(window.location.search);
const type = params.get("type");
const id = params.get("id");

const container = document.getElementById("detail-container");
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
  document.title = `${data.title} | Awico Engineering Ltd`;
  if (pageTitle) pageTitle.textContent = data.title;

  if (breadcrumbParent) {
    breadcrumbParent.innerHTML = `<a class="text-white" href="${parentLink}">${parentPage}</a>`;
  }
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = data.title;

  const imgs = data.images || [];
  const img1 = imgs[0] || "img/awico/ART02777.jpg";
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
      <a href="${parentLink}" class="btn btn-primary mt-3">Back to ${parentPage}</a>
    </div>
  `;
} else {
  container.innerHTML = `<h2 class="text-danger text-center py-5">Item not found</h2>`;
}
