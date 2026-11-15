import React, { useState, useMemo } from 'react';
import {
  Globe,
  Plane,
  Briefcase,
  FileCheck,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  Menu,
  X,
  Copy,
  Check,
  Award,
  Sparkles,
  CreditCard,
  Image as ImageIcon,
  MessageCircle,
  Home as HomeIcon,
  HardHat,
  UserCheck
} from 'lucide-react';

/**
 * ============================================================================
 * 1. COMPANY INFORMATION (EDIT YOUR CONTACT DETAILS HERE)
 * ============================================================================
 */
const COMPANY_INFO = {
  name: 'MB International Services Manpower Consultancy',
  shortName: 'MB INTERNATIONAL',
  tagline: 'Your Global Partner for Skilled Talent',
  subTagline: 'Global Recruitment • Travel • Passport • PCC',
  email: 'mbinternational1925@gmail.com',
  primaryWhatsAppDisplay: '+965 55461216',
  primaryWhatsAppRaw: '96555461216',
  secondaryWhatsAppDisplay: '+91 9225572897',
  secondaryWhatsAppRaw: '919225572897'
};

/**
 * ============================================================================
 * 2. JOB CIRCULARS & OPENINGS (ADD, EDIT, OR REMOVE POSTS HERE)
 * ============================================================================
 */
const JOB_CIRCULARS = [
  {
    id: 'dubai-realestate-01',
    urgentLabel: 'URGENT • MOL TOMORROW',
    category: 'Blue-Collar',
    location: 'Dubai, UAE',
    employer: 'Leading Real Estate Company in Dubai',
    title: 'Multi-Trade Real Estate & Facility Maintenance Crew',
    salary: 'AED 1,600 – 2,000 + Accommodation',
    quantity: '13 Vacancies',
    imageUrl: null,
    summary:
      'Confirm documents today and get MOL tomorrow. Direct employment visa with immediate joining for a leading real estate company in Dubai.',
    positions: [
      { role: 'AC Technician', qty: '02', salary: 'AED 1,600 + Accommodation' },
      { role: 'Furniture Carpenter', qty: '02', salary: 'AED 1,600 + Accommodation' },
      { role: 'Painter', qty: '02', salary: 'AED 1,600 + Accommodation' },
      { role: 'Swimming Pool Maintenance Worker', qty: '02', salary: 'AED 1,600 + Accommodation' },
      { role: 'Plumber cum Electrician', qty: '02', salary: 'AED 1,700 + Accommodation' },
      { role: 'Driver', qty: '02', salary: 'AED 1,800 + Accommodation' },
      { role: 'Team Leader / Supervisor', qty: '01', salary: 'AED 2,000 + Accommodation' }
    ],
    highlights: [
      'Direct Employment Visa',
      'Immediate Joining',
      '10 Hours Duty',
      'One Day Off in a Week',
      'Company Accommodation Provided'
    ]
  },
  {
    id: 'kuwait-chocolate-02',
    urgentLabel: 'INTERNATIONAL HIRING • KUWAIT',
    category: 'Blue-Collar',
    location: 'Kuwait City, Kuwait',
    employer: 'Confectionery & Food Production Facility',
    title: 'Chocolate Maker (06 Vacancies)',
    salary: '120 KWD + 20 KWD Food Allowance',
    quantity: '06 Vacancies',
    imageUrl: null,
    summary:
      'Direct overseas recruitment to Kuwait with monthly food allowance, free accommodation, free transportation, and company-provided joining tickets.',
    positions: [
      { role: 'Chocolate Maker', qty: '06', salary: '120 KWD + 20 KWD Food Allowance' }
    ],
    highlights: [
      'Food Allowance 20 KWD Provided by Company',
      'Free Accommodation Provided by Company',
      'Free Transportation Provided by Company',
      '9 Duty Hours',
      'Joining Tickets Provided by Company',
      'Remaining Terms as per Kuwait Labor Law'
    ]
  },
  {
    id: 'abudhabi-laundry-03',
    urgentLabel: 'ABU DHABI URGENT',
    category: 'Blue-Collar',
    location: 'Mussafah, Abu Dhabi, UAE',
    employer: 'Commercial Laundry & Garment Care Services',
    title: 'Laundry All-Rounder (Washing, Steam Pressing & Packing)',
    salary: 'AED 1,800 – 2,000 + Accommodation',
    quantity: 'Multiple Vacancies',
    imageUrl: null,
    summary:
      'Immediate hiring in Mussafah, Abu Dhabi for experienced laundry specialists proficient in washing, steam pressing, and packing. Arabic speaking mandatory.',
    positions: [
      { role: 'Laundry All-Rounder', qty: 'Multiple', salary: 'AED 1,800 – 2,000 + Accommodation' }
    ],
    highlights: [
      'Arabic Speaking Mandatory',
      'Visa, Medical & Accommodation Provided',
      'Prior Laundry & Gulf Experience Preferred',
      'Direct Employment Sponsorship'
    ]
  },
  {
    id: 'global-housemaid-04',
    urgentLabel: 'DOMESTIC & HOUSEHOLD STAFF',
    category: 'House Maid',
    location: 'Kuwait, UAE, Saudi Arabia & Qatar',
    employer: 'Verified Private Families & Residential Employers',
    title: 'House Maid, Nanny, Caregiver & Household Staff',
    salary: 'Competitive Tax-Free Package + Full Stay',
    quantity: 'Ongoing Placement',
    imageUrl: null,
    summary:
      'Safe, verified household placements for experienced House Maids, Childcare Nannies, Elderly Caregivers, and Household Cooks with complete visa and travel arrangements.',
    positions: [
      { role: 'All-Rounder House Maid', qty: 'Open', salary: 'Tax-Free Salary + Free Food & Stay' },
      { role: 'Childcare Nanny / Elderly Caregiver', qty: 'Open', salary: 'Tax-Free Salary + Free Food & Stay' },
      { role: 'Household Cook / Private Driver', qty: 'Open', salary: 'Tax-Free Salary + Free Food & Stay' }
    ],
    highlights: [
      '100% Verified & Screened Family Sponsors',
      'Free Food, Accommodation & Medical Coverage',
      'Joining Air Ticket Provided',
      'Complete Passport, PCC & Embassy Visa Assistance'
    ]
  },
  {
    id: 'global-whitecollar-05',
    urgentLabel: 'CORPORATE & MANAGEMENT',
    category: 'White-Collar',
    location: 'UAE, Kuwait, GCC & International',
    employer: 'Corporate Enterprises, Engineering, Retail & Hospitality',
    title: 'White-Collar Professionals (Engineers, Supervisors, Admin & Sales)',
    salary: 'Attractive Package Based on Qualification',
    quantity: 'Ongoing Placement',
    imageUrl: null,
    summary:
      'Global executive and professional placement for Engineers, Site Supervisors, Accountants, Document Controllers, Hospitality Leads, and Sales Executives.',
    positions: [
      { role: 'Site Engineer / Project Supervisor', qty: 'Open', salary: 'Competitive + Benefits' },
      { role: 'Accountant / Admin & HR Coordinator', qty: 'Open', salary: 'Competitive + Benefits' },
      { role: 'Hospitality & Retail Sales Specialist', qty: 'Open', salary: 'Competitive + Benefits' }
    ],
    highlights: [
      'Direct Employment Visa & Sponsorship',
      'Long-Term Career Growth with Leading Employers',
      'Streamlined Offer Letter & Mobilization Support'
    ]
  }
];

const MBLogo = ({ className = 'w-12 h-12', showText = true, darkText = false }) => (
  <div className="flex items-center gap-3 select-none">
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MB International Services Logo"
    >
      <defs>
        <linearGradient id="goldRing" x1="10" y1="10" x2="110" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9A7611" />
        </linearGradient>
        <linearGradient id="navyGrad" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A3B6E" />
          <stop offset="100%" stopColor="#09192F" />
        </linearGradient>
      </defs>

      <circle cx="60" cy="60" r="56" fill="#FFFFFF" stroke="url(#goldRing)" strokeWidth="4.5" />
      <circle cx="60" cy="60" r="50" stroke="#0B1F3A" strokeWidth="2" />

      <ellipse cx="60" cy="60" rx="22" ry="48" stroke="#C5A030" strokeWidth="1.5" strokeOpacity="0.65" />
      <ellipse cx="60" cy="60" rx="38" ry="48" stroke="#C5A030" strokeWidth="1.3" strokeOpacity="0.45" />
      <path d="M12 60H108" stroke="#C5A030" strokeWidth="1.5" strokeOpacity="0.65" />
      <path d="M18 38H102" stroke="#C5A030" strokeWidth="1.3" strokeOpacity="0.5" />
      <path d="M18 82H102" stroke="#C5A030" strokeWidth="1.3" strokeOpacity="0.5" />

      <path
        d="M24 80V40H35L46 61L57 40H68V80H58.5V56.5L46 78L33.5 56.5V80H24Z"
        fill="url(#goldRing)"
        stroke="#FFFFFF"
        strokeWidth="1"
      />

      <path
        d="M62 43H82C89.5 43 94.5 46.8 94.5 52.8C94.5 57.1 91.8 60.2 87.6 61.5C92.8 62.7 96.2 66.4 96.2 71.6C96.2 78.4 90.6 83 82.2 83H62V43ZM72 58.8H80.2C83.5 58.8 85.4 57.1 85.4 54.5C85.4 51.9 83.5 50.3 80.2 50.3H72V58.8ZM72 75.5H81.2C84.8 75.5 86.9 73.7 86.9 70.8C86.9 67.9 84.7 66.1 81.1 66.1H72V75.5Z"
        fill="url(#navyGrad)"
        stroke="#FFFFFF"
        strokeWidth="1.2"
      />

      <path d="M22 76C38 84 64 74 92 42" stroke="url(#goldRing)" strokeWidth="4" strokeLinecap="round" />
      <path d="M25 79C42 86 67 75 94 44" stroke="#0B1F3A" strokeWidth="2.5" strokeLinecap="round" />

      <g transform="translate(88, 24) rotate(-38)">
        <path
          d="M16 0L19 10L29 14V17L19 15.5L19 23L23 26V28.5L16 26.8L9 28.5V26L13 23L13 15.5L3 17V14L13 10L16 0Z"
          fill="#0B1F3A"
          stroke="#FFFFFF"
          strokeWidth="0.8"
        />
      </g>
    </svg>

    {showText && (
      <div className="leading-tight">
        <div className={`font-extrabold tracking-tight text-base sm:text-lg ${darkText ? 'text-[#0B1F3A]' : 'text-white'}`}>
          {COMPANY_INFO.shortName}
        </div>
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
          Services & Manpower
        </div>
      </div>
    )}
  </div>
);

const buildWhatsAppLink = (phoneRaw, jobTitle = '', location = '') => {
  const message = jobTitle
    ? `Hello MB International Services Manpower Consultancy,\n\nI would like to apply for: *${jobTitle}* (${location}).\nPlease let me know the next steps to share my CV and passport documents.`
    : `Hello MB International Services Manpower Consultancy,\n\nI would like to share my CV and inquire about international recruitment opportunities.`;
  return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(message)}`;
};

const buildEmailCvLink = (jobTitle = '', location = '') => {
  const subject = jobTitle
    ? `CV Application: ${jobTitle} (${location}) - MB International Services`
    : `CV Submission & Global Recruitment Inquiry - MB International Services`;
  const body = jobTitle
    ? `Dear MB International Services Team,\n\nPlease find my CV attached for the position of "${jobTitle}" (${location}).\n\nFull Name:\nNationality:\nContact / WhatsApp Number:\nYears of Experience:\n\nBest regards,`
    : `Dear MB International Services Team,\n\nPlease find my CV attached for suitable global job opportunities.\n\nFull Name:\nNationality:\nPreferred Sector (White-Collar / Blue-Collar / House Maid):\nContact / WhatsApp Number:\nYears of Experience:\n\nBest regards,`;
  return `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewFlyer, setPreviewFlyer] = useState(null);
  const [copiedKey, setCopiedKey] = useState('');

  const navigateTo = (page, category = null) => {
    if (category) setSelectedCategory(category);
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(''), 2000);
  };

  const filteredCirculars = useMemo(() => {
    return JOB_CIRCULARS.filter((post) => {
      const matchesCat =
        selectedCategory === 'ALL' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCat;

      const inTitle = post.title.toLowerCase().includes(q);
      const inLoc = post.location.toLowerCase().includes(q);
      const inEmployer = post.employer.toLowerCase().includes(q);
      const inPositions = post.positions.some((p) => p.role.toLowerCase().includes(q));
      return matchesCat && (inTitle || inLoc || inEmployer || inPositions);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#0B1F3A]">
      {/* Top Global Utility Bar */}
      <div className="bg-[#071426] text-slate-300 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-[#F3C64F] font-semibold">
              <Globe className="w-3.5 h-3.5" />
              {COMPANY_INFO.subTagline}
            </span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden md:inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              {COMPANY_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:+${COMPANY_INFO.primaryWhatsAppRaw}`}
              className="inline-flex items-center gap-1.5 hover:text-[#F3C64F] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{COMPANY_INFO.primaryWhatsAppDisplay}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`tel:+${COMPANY_INFO.secondaryWhatsAppRaw}`}
              className="inline-flex items-center gap-1.5 hover:text-[#F3C64F] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{COMPANY_INFO.secondaryWhatsAppDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#0B1F3A]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => navigateTo('home')}
              className="text-left focus:outline-none group"
            >
              <MBLogo className="w-12 h-12 transition-transform duration-300 group-hover:scale-105" />
            </button>

            {/* Desktop 3-Page Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Jobs & Services', badge: JOB_CIRCULARS.length },
                { id: 'contact', label: 'Contact' }
              ].map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-white/15 text-[#F3C64F] shadow-inner border border-[#D4AF37]/40'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge !== undefined && (
                      <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-[#D4AF37] text-[#0B1F3A]">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Direct CV & WhatsApp CTAs */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={buildEmailCvLink()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/60 text-[#F3C64F] hover:bg-[#D4AF37]/15 transition-all"
              >
                <Mail className="w-4 h-4" />
                Email CV
              </a>
              <a
                href={buildWhatsAppLink(COMPANY_INFO.primaryWhatsAppRaw)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-[#D4AF37] to-[#F3C64F] text-[#0B1F3A] shadow-md hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0E2647] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: `Jobs & Services (${JOB_CIRCULARS.length})` },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-base transition-colors ${
                  activePage === item.id
                    ? 'bg-[#D4AF37] text-[#0B1F3A]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 border-t border-white/10 grid grid-cols-1 gap-2.5">
              <a
                href={buildWhatsAppLink(COMPANY_INFO.primaryWhatsAppRaw)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ({COMPANY_INFO.primaryWhatsAppDisplay})
              </a>
              <a
                href={buildEmailCvLink()}
                className="w-full py-3 px-4 rounded-xl border border-[#D4AF37] text-[#F3C64F] font-bold text-sm flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send CV via Email
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ===================================================================== */}
      {/* PAGE 1: HOME                                                          */}
      {/* ===================================================================== */}
      {activePage === 'home' && (
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#071426] via-[#0B1F3A] to-[#153461] text-white">
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(#D4AF37 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '36px 36px',
                backgroundPosition: '0 0, 18px 18px'
              }}
            />
            <div className="absolute -right-24 -top-24 w-[480px] h-[480px] rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/40 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-[#F3C64F]" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F3C64F]">
                      {COMPANY_INFO.tagline}
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                    Global Recruitment Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3C64F] via-[#D4AF37] to-amber-200">
                      White-Collar, Blue-Collar & Domestic Talent
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                    <strong className="text-white">{COMPANY_INFO.name}</strong> bridges international talent across South Asia, Southeast Asia, Africa, and the Middle East with premier employers in{' '}
                    <strong className="text-white">UAE, Kuwait, Saudi Arabia, Qatar, Oman, Bahrain, and global markets</strong>—providing direct employment visas, rapid MOL approvals, travel ticketing, Passport, and PCC support.
                  </p>

                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {[
                      { label: 'White-Collar Professionals', cat: 'White-Collar' },
                      { label: 'Blue-Collar Technical & Trades', cat: 'Blue-Collar' },
                      { label: 'House Maid & Domestic Staff', cat: 'House Maid' }
                    ].map((pill) => (
                      <button
                        key={pill.cat}
                        onClick={() => navigateTo('services', pill.cat)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#132E53]/90 hover:bg-[#1C4073] border border-[#D4AF37]/40 text-xs sm:text-sm font-semibold text-slate-100 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F3C64F]" />
                        {pill.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
                    <button
                      onClick={() => navigateTo('services', 'ALL')}
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-[#D4AF37] to-[#F3C64F] text-[#0B1F3A] shadow-xl hover:brightness-105 transition-all"
                    >
                      <Briefcase className="w-5 h-5" />
                      View Active Openings
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <a
                      href={buildWhatsAppLink(COMPANY_INFO.primaryWhatsAppRaw)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Apply on WhatsApp
                    </a>

                    <a
                      href={buildEmailCvLink()}
                      className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-base font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm transition-all"
                    >
                      <Mail className="w-5 h-5 text-[#F3C64F]" />
                      Send CV via Email
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-5">
                      <MBLogo className="w-16 h-16" showText={false} />
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                          ● Worldwide Recruitment Open
                        </span>
                        <p className="text-xs text-slate-300 mt-1.5">UAE • Kuwait • GCC • Global</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3">
                      Featured International Openings
                    </h3>

                    <div className="space-y-3">
                      {JOB_CIRCULARS.slice(0, 3).map((job) => (
                        <div
                          key={job.id}
                          onClick={() => navigateTo('services', 'ALL')}
                          className="group cursor-pointer p-3.5 rounded-2xl bg-[#0B1F3A]/85 hover:bg-[#0B1F3A] border border-white/10 hover:border-[#D4AF37]/60 transition-all"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F3C64F]">
                              {job.location}
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-slate-200">
                              {job.category}
                            </span>
                          </div>
                          <p className="text-sm font-bold text-white mt-1 group-hover:text-[#F3C64F] transition-colors line-clamp-1">
                            {job.title}
                          </p>
                          <div className="flex items-center justify-between mt-2 text-xs text-slate-300">
                            <span>{job.salary}</span>
                            <span className="inline-flex items-center gap-1 text-[#F3C64F] font-semibold">
                              Details <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                      <span>Direct CV Desk:</span>
                      <a
                        href={buildEmailCvLink()}
                        className="font-bold text-[#F3C64F] hover:underline"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Advantages Strip */}
          <section className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
              {[
                {
                  icon: Globe,
                  title: 'Worldwide Sourcing',
                  desc: 'Connecting global talent with leading international employers'
                },
                {
                  icon: Clock,
                  title: 'Rapid MOL & Visas',
                  desc: 'Fast document verification, MOL approvals & visa stamping'
                },
                {
                  icon: ShieldCheck,
                  title: 'Verified Employers',
                  desc: 'Transparent salaries, accommodation & legal sponsorship'
                },
                {
                  icon: Plane,
                  title: 'Travel, Passport & PCC',
                  desc: 'End-to-end documentation, PCC & flight coordination'
                }
              ].map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#0B1F3A] text-[#F3C64F] flex items-center justify-center shrink-0 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">{stat.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{stat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 3 Core Recruitment Sectors Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B8901E]">
                International Manpower Divisions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] mt-2">
                Comprehensive Recruitment Across Three Core Sectors
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                From corporate leadership and skilled technical trades to dependable household staff, MB International Services delivers vetted global talent tailored to every employer requirement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                {
                  icon: UserCheck,
                  categoryKey: 'White-Collar',
                  tag: 'CORPORATE & SPECIALISTS',
                  title: 'White-Collar Recruitment',
                  description:
                    'Qualified engineers, supervisors, administrative coordinators, hospitality specialists, and corporate professionals placed across international enterprises.',
                  roles: [
                    'Engineers, Site Leaders & Project Supervisors',
                    'Admin, HR, Accounts & Document Controllers',
                    'Hospitality, Retail & Corporate Sales Leads'
                  ]
                },
                {
                  icon: HardHat,
                  categoryKey: 'Blue-Collar',
                  tag: 'TECHNICAL & INDUSTRIAL TRADES',
                  title: 'Blue-Collar Recruitment',
                  description:
                    'Certified and trade-tested technicians, operators, and maintenance crews for real estate, MEP, manufacturing, hospitality, and logistics.',
                  roles: [
                    'AC Technicians, Plumbers, Electricians & Carpenters',
                    'Painters, Swimming Pool & Facility Maintenance',
                    'Drivers, Chocolate Makers & Laundry All-Rounders'
                  ]
                },
                {
                  icon: HomeIcon,
                  categoryKey: 'House Maid',
                  tag: 'DOMESTIC & CAREGIVING',
                  title: 'House Maid & Domestic Staff',
                  description:
                    'Screened, polite, and experienced domestic professionals for private residences across the GCC and international households with full legal protection.',
                  roles: [
                    'Trained House Maids & Home Housekeeping',
                    'Childcare Nannies & Elderly Caregivers',
                    'Household Cooks & Private Family Drivers'
                  ]
                }
              ].map((sector) => {
                const IconComp = sector.icon;
                return (
                  <div
                    key={sector.categoryKey}
                    className="group bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/70 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0B1F3A] to-[#1A3B6E] text-[#F3C64F] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-extrabold tracking-wider text-[#B8901E]">
                          {sector.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2.5">{sector.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {sector.description}
                      </p>

                      <ul className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                        {sector.roles.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => navigateTo('services', sector.categoryKey)}
                      className="w-full py-3 px-4 rounded-xl bg-[#0B1F3A] group-hover:bg-[#153461] text-[#F3C64F] font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      Explore {sector.categoryKey} Jobs
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Visa, Travel, Passport & PCC Support Strip */}
          <section className="bg-[#0B1F3A] text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: FileCheck,
                    title: 'Direct Employment Visa & MOL',
                    desc: 'Fast offer letter issuance, Ministry of Labour (MOL) approvals, and embassy visa stamping.'
                  },
                  {
                    icon: CreditCard,
                    title: 'Passport & PCC Assistance',
                    desc: 'Complete guidance for Passport processing, Police Clearance Certificates (PCC), and document attestation.'
                  },
                  {
                    icon: Plane,
                    title: 'Travel & Joining Tickets',
                    desc: 'Seamless international air ticketing, travel clearance briefing, and arrival coordination.'
                  }
                ].map((item, i) => {
                  const IconC = item.icon;
                  return (
                    <div key={i} className="bg-[#112A4D] border border-white/10 rounded-3xl p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3C64F] flex items-center justify-center shrink-0">
                        <IconC className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="text-sm text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Direct WhatsApp & Email CV Submission Banner */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="bg-gradient-to-r from-[#0B1F3A] via-[#132E53] to-[#0B1F3A] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-[#D4AF37]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3C64F]">
                  Global Candidate & Employer Desk
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold">
                  Apply Today or Partner With Us for Global Hiring
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Share your CV, passport copy, or international manpower demand directly with our recruitment advisors via{' '}
                  <strong className="text-white">WhatsApp</strong> or <strong className="text-white">Email</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
                <a
                  href={buildWhatsAppLink(COMPANY_INFO.primaryWhatsAppRaw)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp ({COMPANY_INFO.primaryWhatsAppDisplay})
                </a>
                <a
                  href={buildWhatsAppLink(COMPANY_INFO.secondaryWhatsAppRaw)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#F3C64F]" />
                  WhatsApp ({COMPANY_INFO.secondaryWhatsAppDisplay})
                </a>
                <a
                  href={buildEmailCvLink()}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F3C64F] text-[#0B1F3A] font-extrabold text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Send CV via Email
                </a>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ===================================================================== */}
      {/* PAGE 2: JOBS & SERVICES                                               */}
      {/* ===================================================================== */}
      {activePage === 'services' && (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="bg-gradient-to-r from-[#0B1F3A] to-[#153461] rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F3C64F] text-xs font-bold mb-3">
                  <Briefcase className="w-3.5 h-3.5" />
                  Verified Global Job Circulars & Recruitment Sectors
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold">
                  Jobs & Manpower Services
                </h1>
                <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
                  Browse current international openings across <strong>Blue-Collar</strong>, <strong>White-Collar</strong>, and <strong>House Maid & Domestic</strong> categories. Share your CV directly via WhatsApp or Email.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={buildWhatsAppLink(COMPANY_INFO.primaryWhatsAppRaw)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Apply via WhatsApp
                </a>
                <a
                  href={buildEmailCvLink()}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F3C64F] text-[#0B1F3A] font-extrabold text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Send CV via Email
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              {[
                { id: 'ALL', label: `All Openings (${JOB_CIRCULARS.length})` },
                {
                  id: 'Blue-Collar',
                  label: `Blue-Collar (${JOB_CIRCULARS.filter((p) => p.category === 'Blue-Collar').length})`
                },
                {
                  id: 'White-Collar',
                  label: `White-Collar (${JOB_CIRCULARS.filter((p) => p.category === 'White-Collar').length})`
                },
                {
                  id: 'House Maid',
                  label: `House Maid (${JOB_CIRCULARS.filter((p) => p.category === 'House Maid').length})`
                }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    selectedCategory === tab.id
                      ? 'bg-[#0B1F3A] text-[#F3C64F] shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search job title, trade, or destination..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          {filteredCirculars.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
              <p className="text-lg font-bold text-slate-800">No matching openings found.</p>
              <button
                onClick={() => {
                  setSelectedCategory('ALL');
                  setSearchQuery('');
                }}
                className="mt-4 px-5 py-2.5 rounded-xl bg-[#0B1F3A] text-white text-sm font-semibold"
              >
                Show All Openings
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredCirculars.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-md overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="bg-gradient-to-r from-[#0B1F3A] via-[#132E53] to-[#0B1F3A] px-6 sm:px-8 py-5 text-white flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#F3C64F] text-[#0B1F3A]">
                        {post.urgentLabel}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-200">
                        <MapPin className="w-4 h-4 text-[#F3C64F]" />
                        {post.location}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-[#F3C64F] bg-white/10 px-3 py-1 rounded-lg">
                      {post.quantity}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className={post.imageUrl ? 'lg:col-span-8' : 'lg:col-span-12'}>
                      <div className="mb-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#B8901E] mb-1">
                          {post.employer}
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
                          {post.title}
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                          {post.summary}
                        </p>
                      </div>

                      <div className="mb-6 overflow-x-auto rounded-2xl border border-slate-200">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-extrabold uppercase text-slate-600">
                              <th className="py-3 px-4">#</th>
                              <th className="py-3 px-4">Position / Trade</th>
                              <th className="py-3 px-4">Qty</th>
                              <th className="py-3 px-4">Salary & Package</th>
                              <th className="py-3 px-4 text-right">Quick Apply</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-sm">
                            {post.positions.map((pos, idx) => (
                              <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                                <td className="py-3.5 px-4 font-bold text-slate-400">
                                  {String(idx + 1).padStart(2, '0')}
                                </td>
                                <td className="py-3.5 px-4 font-bold text-[#0B1F3A]">{pos.role}</td>
                                <td className="py-3.5 px-4">
                                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#0B1F3A]/10 text-[#0B1F3A] font-bold text-xs">
                                    {pos.qty}
                                  </span>
                                </td>
                                <td className="py-3.5 px-4 font-bold text-emerald-700">
                                  {pos.salary}
                                </td>
                                <td className="py-3.5 px-4 text-right">
                                  <a
                                    href={buildWhatsAppLink(
                                      COMPANY_INFO.primaryWhatsAppRaw,
                                      pos.role,
                                      post.location
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                                  >
                                    WhatsApp CV
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 mb-6">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0B1F3A] mb-2.5 flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-[#D4AF37]" />
                          Package Benefits & Terms
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {post.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                        <span className="text-xs font-semibold text-slate-500">
                          Submit your CV directly via WhatsApp or Email:
                        </span>

                        <div className="flex flex-wrap items-center gap-2.5">
                          <a
                            href={buildWhatsAppLink(
                              COMPANY_INFO.primaryWhatsAppRaw,
                              post.title,
                              post.location
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                          >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp ({COMPANY_INFO.primaryWhatsAppDisplay})
                          </a>

                          <a
                            href={buildWhatsAppLink(
                              COMPANY_INFO.secondaryWhatsAppRaw,
                              post.title,
                              post.location
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B1F3A] hover:bg-[#153461] text-[#F3C64F] font-bold text-xs sm:text-sm shadow-sm transition-all"
                          >
                            <Phone className="w-4 h-4" />
                            WhatsApp ({COMPANY_INFO.secondaryWhatsAppDisplay})
                          </a>

                          <a
                            href={buildEmailCvLink(post.title, post.location)}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F3C64F] text-[#0B1F3A] font-extrabold text-xs sm:text-sm shadow-sm hover:brightness-105 transition-all"
                          >
                            <Mail className="w-4 h-4" />
                            Send CV via Email
                          </a>
                        </div>
                      </div>
                    </div>

                    {post.imageUrl && (
                      <div className="lg:col-span-4 flex flex-col">
                        <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                          <ImageIcon className="w-4 h-4 text-[#D4AF37]" />
                          Official Recruitment Poster
                        </div>
                        <div
                          onClick={() => setPreviewFlyer(post.imageUrl)}
                          className="relative group cursor-pointer rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-[#D4AF37] transition-all bg-slate-100"
                        >
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-auto object-cover max-h-[430px]"
                          />
                          <div className="absolute inset-0 bg-[#0B1F3A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="px-4 py-2 rounded-xl bg-white text-[#0B1F3A] font-bold text-xs shadow-lg">
                              Click to Enlarge Poster
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      )}

      {/* ===================================================================== */}
      {/* PAGE 3: CONTACT                                                       */}
      {/* ===================================================================== */}
      {activePage === 'contact' && (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B8901E]">
              International Recruitment & Candidate Support Desks
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] mt-2">
              Contact MB International Services
            </h1>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Reach our global recruitment team directly via WhatsApp, phone call, or email to submit your CV or discuss international staffing requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 bg-gradient-to-br from-[#0B1F3A] to-[#153461] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <MBLogo className="w-16 h-16 mb-6" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {COMPANY_INFO.name}
                </h2>
                <p className="text-sm sm:text-base text-[#F3C64F] font-semibold mt-1.5">
                  {COMPANY_INFO.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-300 mt-5 leading-relaxed">
                  We specialize in global recruitment across{' '}
                  <strong className="text-white">White-Collar corporate roles</strong>,{' '}
                  <strong className="text-white">Blue-Collar technical & industrial trades</strong>, and{' '}
                  <strong className="text-white">House Maid & domestic staff</strong>—connecting skilled candidates worldwide with verified employers across the UAE, Kuwait, Saudi Arabia, Qatar, Oman, Bahrain, and international destinations.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="font-bold text-[#F3C64F]">Global Recruitment</div>
                  <div className="text-slate-300 mt-1">White-Collar, Blue-Collar & Domestic Staff</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="font-bold text-[#F3C64F]">Travel, Passport & PCC</div>
                  <div className="text-slate-300 mt-1">MOL Visas, Ticketing & Documentation</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-[#F3C64F] flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#B8901E]">
                        International Desk I • Calling & WhatsApp
                      </span>
                      <div className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] mt-0.5">
                        {COMPANY_INFO.primaryWhatsAppDisplay}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(COMPANY_INFO.primaryWhatsAppDisplay, 'primary')}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="Copy Number"
                  >
                    {copiedKey === 'primary' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppLink(COMPANY_INFO.primaryWhatsAppRaw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send CV on WhatsApp
                  </a>
                  <a
                    href={`tel:+${COMPANY_INFO.primaryWhatsAppRaw}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-[#0B1F3A] font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-[#F3C64F] flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#B8901E]">
                        International Desk II • Calling & WhatsApp
                      </span>
                      <div className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] mt-0.5">
                        {COMPANY_INFO.secondaryWhatsAppDisplay}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(COMPANY_INFO.secondaryWhatsAppDisplay, 'secondary')}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="Copy Number"
                  >
                    {copiedKey === 'secondary' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppLink(COMPANY_INFO.secondaryWhatsAppRaw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send CV on WhatsApp
                  </a>
                  <a
                    href={`tel:+${COMPANY_INFO.secondaryWhatsAppRaw}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-[#0B1F3A] font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-[#F3C64F] flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#B8901E]">
                        Official Email for CVs & Employer Demands
                      </span>
                      <div className="text-base sm:text-xl font-extrabold text-[#0B1F3A] mt-0.5 truncate">
                        {COMPANY_INFO.email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="mt-5">
                  <a
                    href={buildEmailCvLink()}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F3C64F] text-[#0B1F3A] font-extrabold text-sm shadow-md hover:brightness-105 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Compose & Send CV via Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {previewFlyer && (
        <div
          onClick={() => setPreviewFlyer(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setPreviewFlyer(null)}
              className="absolute -top-12 right-0 px-4 py-2 rounded-xl bg-white text-[#0B1F3A] font-bold text-xs flex items-center gap-1.5"
            >
              <X className="w-4 h-4" /> Close Poster
            </button>
            <img
              src={previewFlyer}
              alt="Full Size Recruitment Poster"
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      <footer className="bg-[#071426] text-slate-300 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2 space-y-4">
              <MBLogo className="w-14 h-14" />
              <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                <strong className="text-white">{COMPANY_INFO.name}</strong> — {COMPANY_INFO.tagline}. Global staffing solutions across White-Collar, Blue-Collar, and House Maid / Domestic sectors with complete Visa, Travel, Passport & PCC support.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#F3C64F] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('services', 'ALL')} className="hover:text-white transition-colors">
                    Jobs & Services ({JOB_CIRCULARS.length})
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('services', 'House Maid')} className="hover:text-white transition-colors">
                    House Maid & Domestic Staff
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#F3C64F] mb-4">
                Contact Desks
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={`tel:+${COMPANY_INFO.primaryWhatsAppRaw}`}
                    className="flex items-center gap-2 hover:text-[#F3C64F] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{COMPANY_INFO.primaryWhatsAppDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:+${COMPANY_INFO.secondaryWhatsAppRaw}`}
                    className="flex items-center gap-2 hover:text-[#F3C64F] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{COMPANY_INFO.secondaryWhatsAppDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={buildEmailCvLink()}
                    className="flex items-center gap-2 hover:text-[#F3C64F] transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
            <p className="text-[#D4AF37] font-semibold">{COMPANY_INFO.subTagline}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
