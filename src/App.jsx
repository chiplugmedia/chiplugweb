import React, { useState, useEffect, useMemo } from "react";

// SVG Icon Component
const Icon = ({ name, className = "w-5 h-5" }) => {
  const icons = {
    zap: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    sun: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
    moon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    ),
    download: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    ),
    check: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M5 13l4 4L19 7"
      />
    ),
    arrowRight: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    ),
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
    mail: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    mapPin: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
    ),
    whatsapp: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
    menu: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    ),
    close: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    ),
  };

  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {icons[name] || null}
    </svg>
  );
};

const BUSINESS = {
  name: "Chi Plug Media",
  tagline: "Your Ultimate Plug for Digital Growth & Brand Dominance",
  location: "Victoria Island, Lagos, Nigeria",
  phone: "+234 810 283 9845",
  phoneRaw: "+2348102839845",
  email: "chiplugtv@gmail.com",
  whatsapp: "2348102839845",
};

const SERVICES = [
  {
    id: "smm",
    category: "Marketing",
    name: "Social Media Growth & Management",
    badge: "High Growth",
    desc: "Tailored content strategies, high-engagement reels, community management, and weekly analytics on IG, TikTok, and LinkedIn.",
    features: [
      "Content Calendar & Strategy",
      "TikTok & Reel Production",
      "Active Community Engagement",
      "Weekly Performance Reports",
    ],
  },
  {
    id: "brand",
    category: "Design",
    name: "Brand Identity & Visual Systems",
    badge: "Essential",
    desc: "Distinctive logo design, corporate typography systems, brand guidelines, and high-impact social media assets.",
    features: [
      "Logo Design & Visual Assets",
      "Typography & Color Palettes",
      "Comprehensive Brand Guidelines",
      "Marketing Collateral & Templates",
    ],
  },
  {
    id: "video",
    category: "Media",
    name: "Video Commercials & Motion Production",
    badge: "Trending",
    desc: "Cinematic promotional commercials, event recap videos, studio podcast editing, and scroll-stopping motion design.",
    features: [
      "4K Video Production",
      "Motion Graphics & 3D Elements",
      "Sound Design & Voiceovers",
      "Social-First Vertical Edits",
    ],
  },
  {
    id: "web",
    category: "Web",
    name: "Vite + React Web Applications",
    badge: "Vite Powered",
    desc: "Ultra-fast, mobile-responsive web applications, conversion-focused landing pages, and customized e-commerce solutions.",
    features: [
      "Vite + React Single-Page Engine",
      "Tailwind CSS Design Systems",
      "SEO & Speed Optimization",
      "Custom API Integrations",
    ],
  },
  {
    id: "ads",
    category: "Marketing",
    name: "Performance Ads & Paid Acquisition",
    badge: "ROI Driven",
    desc: "Targeted advertising campaigns across Meta, Google, and TikTok crafted to generate qualified leads and sales conversions.",
    features: [
      "Audience Research & Profiling",
      "A/B Testing Creatives & Copy",
      "Conversion Pixel Setup",
      "Real-Time ROI Dashboards",
    ],
  },
  {
    id: "photo",
    category: "Media",
    name: "Product & Studio Photography",
    badge: "Studio",
    desc: "High-resolution product shoots, corporate team headshots, and event media coverage with professional retouching.",
    features: [
      "Indoor Studio & Location Shoots",
      "High-End Photo Retouching",
      "E-Commerce Ready Catalog Assets",
      "Creative Direction",
    ],
  },
];

function Navbar({ route, setRoute, isDark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navs = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/85 dark:bg-[#08080A]/85 backdrop-blur-xl border-b border-slate-200 dark:border-[#262633]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setRoute("home")}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-[#FB7507] to-[#FFB800] flex items-center justify-center text-black shadow-lg group-hover:scale-105 transition-transform">
            <Icon name="zap" className="w-6 h-6" />
          </div>
          <div>
            <span className="font-display text-xl font-black tracking-tight text-slate-900 dark:text-white block leading-none">
              Chi Plug
            </span>
            <span className="text-[10px] font-extrabold text-[#FB7507] uppercase tracking-widest block mt-0.5">
              Media Agency
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-[#181820]/80 p-1.5 rounded-2xl border border-slate-200 dark:border-[#262633]">
          {navs.map((item) => (
            <button
              key={item.id}
              onClick={() => setRoute(item.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${route === item.id ? "bg-[#FB7507] text-black shadow-md" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-white/5"}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-3 bg-slate-100 dark:bg-[#181820] border border-slate-200 dark:border-[#262633] rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            title="Toggle Theme"
          >
            <Icon name={isDark ? "sun" : "moon"} />
          </button>

          <button
            onClick={() => setRoute("contact")}
            className="px-5 py-2.5 bg-gradient-to-r from-[#FB7507] to-[#FFB800] text-black font-extrabold text-sm rounded-xl hover:opacity-95 transition-all shadow-[0_0_35px_-5px_rgba(251,117,7,0.35)]"
          >
            Get Started
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 bg-slate-100 dark:bg-[#181820] border border-slate-200 dark:border-[#262633] rounded-xl text-slate-700 dark:text-slate-200"
          >
            <Icon name={isDark ? "sun" : "moon"} className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 bg-slate-100 dark:bg-[#181820] border border-slate-200 dark:border-[#262633] rounded-xl text-slate-900 dark:text-white"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#181820] border-b border-slate-200 dark:border-[#262633] px-6 py-6 space-y-3 animate-fadeIn">
          {navs.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setRoute(item.id);
                setMenuOpen(false);
              }}
              className={`block w-full text-left py-3 px-4 rounded-xl text-base font-bold ${route === item.id ? "bg-[#FB7507] text-black" : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#111116]"}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setRoute("contact");
              setMenuOpen(false);
            }}
            className="w-full py-3.5 bg-gradient-to-r from-[#FB7507] to-[#FFB800] text-black font-extrabold rounded-xl text-center block mt-4"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

function HomePage({ setRoute }) {
  return (
    <div className="space-y-24 pb-20">
      <section className="relative pt-12 md:pt-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FB7507]/15 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08]">
                We plug your business into{" "}
                <span className="bg-gradient-to-r from-[#FB7507] to-[#FFB800] bg-clip-text text-transparent">
                  high-ROI
                </span>{" "}
                digital channels.
              </h1>

              <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Chi Plug Media designs conversion-focused brand identities,
                high-speed Vite/React web apps, viral video campaigns, and paid
                acquisition funnels built to scale across Africa and beyond.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setRoute("contact")}
                  className="px-8 py-4 bg-gradient-to-r from-[#FB7507] to-[#FFB800] text-black font-extrabold text-base rounded-2xl hover:opacity-95 transition-all shadow-[0_0_35px_-5px_rgba(251,117,7,0.35)] flex items-center gap-2"
                >
                  <span>Start Your Project</span>
                  <Icon name="arrowRight" className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setRoute("services")}
                  className="px-8 py-4 bg-slate-100 dark:bg-[#181820] border border-slate-200 dark:border-[#262633] hover:border-slate-400 dark:hover:border-slate-500 text-slate-900 dark:text-white font-bold text-base rounded-2xl transition-colors"
                >
                  Explore Capabilities
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-[#262633]/80 grid grid-cols-3 gap-6 text-center lg:text-left">
                <div>
                  <div className="font-display text-3xl font-black text-slate-900 dark:text-white">
                    120+
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                    Brands Plugged In
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-black text-slate-900 dark:text-white">
                    4.9★
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                    Client Satisfaction
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-black text-slate-900 dark:text-white">
                    &lt; 100ms
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                    Vite App Speed
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-100/70 dark:bg-[#181820]/70 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-[#262633] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    chi-plug-ecosystem.js
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-[#262633] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="p-2.5 bg-[#FB7507]/10 text-[#FB7507] rounded-xl">
                        ⚡
                      </span>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          Vite + React Core
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Ultra Fast Frontend
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-500 dark:text-emerald-400 font-bold">
                      100/100 Lighthouse
                    </span>
                  </div>

                  <div className="p-4 bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-[#262633] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="p-2.5 bg-[#FB7507]/10 text-[#FB7507] rounded-xl">
                        📱
                      </span>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          Social Media Scaling
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Content + Target Ads
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#FB7507] font-bold">
                      +310% Reach
                    </span>
                  </div>

                  <div className="p-4 bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-[#262633] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="p-2.5 bg-[#FB7507]/10 text-[#FB7507] rounded-xl">
                        🎬
                      </span>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          4K Video Commercials
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          High-End Production
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-purple-500 dark:text-purple-400 font-bold">
                      Studio Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#FB7507] font-display font-bold text-sm uppercase tracking-wider">
              What We Excel At
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-2">
              Plug & Play Services
            </h2>
          </div>
          <button
            onClick={() => setRoute("services")}
            className="mt-4 md:mt-0 text-[#FB7507] font-bold text-sm hover:underline flex items-center gap-1"
          >
            <span>View all services</span>
            <Icon name="arrowRight" className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="bg-slate-100/70 dark:bg-[#181820]/70 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 dark:border-[#262633] hover:border-[#FB7507]/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 bg-[#FB7507]/10 text-[#FB7507] rounded-full font-bold">
                    {service.category}
                  </span>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                    {service.badge}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#FB7507] transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <button
                onClick={() => setRoute("contact")}
                className="mt-6 pt-4 border-t border-slate-200 dark:border-[#262633] text-xs font-bold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white flex items-center justify-between"
              >
                <span>Request pricing quote</span>
                <Icon name="arrowRight" className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ServicesPage({ setRoute }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Marketing", "Design", "Media", "Web"];

  const filtered = useMemo(() => {
    if (activeCategory === "All") return SERVICES;
    return SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      <div>
        <span className="text-[#FB7507] font-display font-bold text-sm uppercase tracking-wider">
          Solutions Catalog
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-black text-slate-900 dark:text-white mt-2">
          Digital & Media Capabilities
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg mt-4 max-w-2xl">
          Filter through our core specialized services designed to scale
          corporate brands and startups in Nigeria.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${activeCategory === cat ? "bg-[#FB7507] text-black shadow-lg shadow-[#FB7507]/20" : "bg-slate-100 dark:bg-[#181820] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-[#262633]"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((service) => (
          <div
            key={service.id}
            className="bg-slate-100/70 dark:bg-[#181820]/70 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 dark:border-[#262633] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 bg-[#FB7507]/10 text-[#FB7507] rounded-full font-bold">
                  {service.category}
                </span>
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                  {service.badge}
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                {service.name}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-4 leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-6 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Key Deliverables:
                </div>
                <ul className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <Icon
                        name="check"
                        className="w-3.5 h-3.5 text-[#FB7507]"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-[#262633] flex justify-between items-center">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Custom Naira Quotes
              </span>
              <button
                onClick={() => setRoute("contact")}
                className="px-5 py-2.5 bg-gradient-to-r from-[#FB7507] to-[#FFB800] text-black font-extrabold text-xs rounded-xl"
              >
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#FB7507] font-display font-bold text-sm uppercase tracking-wider">
            Who We Are
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-slate-900 dark:text-white mt-2">
            Amplifying African digital stories to global standards.
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg mt-6 leading-relaxed">
            Chi Plug Media was established in Lagos to provide high-performance
            digital agency services. We believe brand stories should not only
            look modern but also drive measurable revenue and active customer
            engagement.
          </p>
        </div>

        <div className="bg-slate-100 dark:bg-[#181820] border border-slate-200 dark:border-[#262633] p-8 rounded-3xl space-y-6">
          <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
            Agency Guarantees
          </h3>

          <div className="p-4 bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-[#262633]">
            <div className="font-bold text-[#FB7507]">
              1. Speed & Modern Tech
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              We utilize Vite + React for lightning-fast web projects that load
              under a second.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-[#262633]">
            <div className="font-bold text-[#FB7507]">
              2. Cultural Relevance
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Deep insight into Nigerian consumer trends combined with
              international design standards.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-[#262633]">
            <div className="font-bold text-[#FB7507]">3. Direct ROI Focus</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Every media campaign or line of code is measured against your
              bottom line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Social Media Growth & Management",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mailtoLink = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(`New Project Inquiry - ${form.service}`)}&body=${encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`)}`;
  const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi Chi Plug Media, I am interested in ${form.service}. My name is ${form.name}.`)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <span className="text-[#FB7507] font-display font-bold text-sm uppercase tracking-wider">
          Let's Connect
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mt-2">
          Get Your Project Plugged In
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base mt-2">
          Send us a direct message or connect via phone or WhatsApp.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-4 mb-8">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="p-4 bg-slate-100 dark:bg-[#181820] border border-slate-200 dark:border-[#262633] rounded-2xl flex items-center gap-3 text-slate-700 dark:text-slate-200 hover:border-[#FB7507]/40"
          >
            <Icon name="phone" className="text-[#FB7507]" />
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">
                Call Us
              </div>
              <div className="text-xs font-bold">{BUSINESS.phone}</div>
            </div>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-slate-100 dark:bg-[#181820] border border-slate-200 dark:border-[#262633] rounded-2xl flex items-center gap-3 text-slate-700 dark:text-slate-200 hover:border-[#FB7507]/40"
          >
            <Icon
              name="whatsapp"
              className="text-emerald-500 dark:text-emerald-400"
            />
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">
                WhatsApp
              </div>
              <div className="text-xs font-bold">Chat Live</div>
            </div>
          </a>

          <a
            href={`mailto:${BUSINESS.email}`}
            className="p-4 bg-slate-100 dark:bg-[#181820] border border-slate-200 dark:border-[#262633] rounded-2xl flex items-center gap-3 text-slate-700 dark:text-slate-200 hover:border-[#FB7507]/40"
          >
            <Icon name="mail" className="text-[#FB7507]" />
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">
                Email
              </div>
              <div className="text-xs font-bold truncate">{BUSINESS.email}</div>
            </div>
          </a>
        </div>

        <div className="bg-slate-100/70 dark:bg-[#181820]/70 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 dark:border-[#262633]">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FB7507] to-[#FFB800] rounded-full flex items-center justify-center text-black mx-auto">
                <Icon name="check" className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                Inquiry Sent!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
                Thank you, {form.name}. We have received your project details
                and will reply within 24 hours.
              </p>
              <div className="flex justify-center gap-3 mt-4">
                <a
                  href={mailtoLink}
                  className="px-5 py-2.5 bg-white dark:bg-[#111116] border border-slate-200 dark:border-[#262633] rounded-xl text-xs font-bold text-slate-900 dark:text-white"
                >
                  Send via Email App
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-[#FB7507] text-black rounded-xl text-xs font-bold"
                >
                  New Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white dark:bg-[#111116] border border-slate-200 dark:border-[#262633] rounded-xl p-3.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#FB7507]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+234..."
                    className="w-full bg-white dark:bg-[#111116] border border-slate-200 dark:border-[#262633] rounded-xl p-3.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#FB7507]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full bg-white dark:bg-[#111116] border border-slate-200 dark:border-[#262633] rounded-xl p-3.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#FB7507]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Target Service
                </label>
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="w-full bg-white dark:bg-[#111116] border border-slate-200 dark:border-[#262633] rounded-xl p-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#FB7507]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Project Scope & Budget
                </label>
                <textarea
                  required
                  rows="4"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Provide details about your goals and expected timeline..."
                  className="w-full bg-white dark:bg-[#111116] border border-slate-200 dark:border-[#262633] rounded-xl p-3.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#FB7507]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#FB7507] to-[#FFB800] text-black font-extrabold text-base rounded-2xl hover:opacity-90 shadow-[0_0_35px_-5px_rgba(251,117,7,0.35)] transition-all"
              >
                Submit Project Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function LegalDocPage({ docType }) {
  const titles = {
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    refund: "Refund Policy",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-display text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
        {titles[docType]}
      </h1>
      <div className="bg-slate-100/70 dark:bg-[#181820]/70 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 dark:border-[#262633] space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <p>
          <strong>Effective Date:</strong> January 1, 2026
        </p>
        <p>
          At <strong>Chi Plug Media</strong>, operating in Victoria Island,
          Lagos, Nigeria, we prioritize transparency and client satisfaction
          across all digital and media engagements.
        </p>
        {docType === "privacy" && (
          <>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              1. Information Collection
            </h3>
            <p>
              We collect contact information submitted via inquiry forms to
              prepare project estimates and deliver media services.
            </p>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              2. Data Security
            </h3>
            <p>
              Client information is stored securely and never sold to
              third-party ad networks.
            </p>
          </>
        )}
        {docType === "terms" && (
          <>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              1. Service Agreements
            </h3>
            <p>
              All projects commence upon formal receipt of an initial deposit as
              outlined in individual proposals.
            </p>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              2. Intellectual Property
            </h3>
            <p>
              Final source code, design collateral, and master video renders
              belong to the client upon full payment settlement.
            </p>
          </>
        )}
        {docType === "refund" && (
          <>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              1. Milestones
            </h3>
            <p>
              Refunds for creative services are evaluated based on milestone
              completion prior to final delivery approval.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function Footer({ setRoute }) {
  return (
    <footer className="bg-slate-100 dark:bg-[#111116] border-t border-slate-200 dark:border-[#262633] mt-20 pt-16 pb-12 text-sm text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-[#262633]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/data/chiplugmedia.png"
              alt={BUSINESS.name}
              className="w-8 h-8 rounded-xl object-cover"
            />
            <span className="font-display text-lg font-bold text-slate-900 dark:text-white">
              {BUSINESS.name}
            </span>
          </div>
          <p className="mt-4 text-xs leading-relaxed">
            Chi Plug Media is a leading digital media brand specializing in
            delivering the latest in entertainment, updates, and breaking news.
            We provide our audience with a dynamic mix of high-quality content
            that ranges from celebrity gossip, trending entertainment stories,
            and music releases to critical global news, tech updates, and
            cultural insights. Our platform is designed to keep you in the know,
            whether you're looking for the latest viral video, a deep dive into
            current events, or updates on your favorite TV shows and
            movies.{" "}
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => setRoute("home")}
                className="hover:text-[#FB7507]"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setRoute("services")}
                className="hover:text-[#FB7507]"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => setRoute("about")}
                className="hover:text-[#FB7507]"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => setRoute("contact")}
                className="hover:text-[#FB7507]"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">
            Legal Documentation
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => setRoute("privacy")}
                className="hover:text-[#FB7507]"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => setRoute("terms")}
                className="hover:text-[#FB7507]"
              >
                Terms & Conditions
              </button>
            </li>
            <li>
              <button
                onClick={() => setRoute("refund")}
                className="hover:text-[#FB7507]"
              >
                Refund Policy
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <div>
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </div>
        <div>Designed by chiplugmedia</div>
      </div>
    </footer>
  );
}

export default function App() {
  const [route, setRoute] = useState("home");
  const [isDark, setIsDark] = useState(true);

  // Apply theme class on mount and whenever isDark changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, [isDark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-[#08080A] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div>
        <Navbar
          route={route}
          setRoute={setRoute}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        <main>
          {route === "home" && <HomePage setRoute={setRoute} />}
          {route === "services" && <ServicesPage setRoute={setRoute} />}
          {route === "about" && <AboutPage />}
          {route === "contact" && <ContactPage />}
          {["privacy", "terms", "refund"].includes(route) && (
            <LegalDocPage docType={route} />
          )}
        </main>
      </div>

      <Footer setRoute={setRoute} />
    </div>
  );
}
