import Image from "next/image";
import PrototypeDemo from "./PrototypeDemo";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Product", href: "#prototype" },
  { label: "Business", href: "#business-model" },
  { label: "Competitor", href: "#competitor-analysis" },
  { label: "Advantage", href: "#competitive" },
  { label: "Roadmap", href: "#roadmap" },
];

const problems = [
  {
    stat: "CV-first",
    title: "Skill mahasiswa sulit terlihat",
    text: "Mahasiswa seperti Dinda punya proyek desain dan riset pengguna, tetapi bukti skill sering tenggelam di CV yang terlalu umum.",
  },
  {
    stat: "4-8 minggu",
    title: "Screening kandidat masih lambat",
    text: "HR seperti Bu Rina perlu memilah banyak lamaran sebelum menemukan kandidat fresh graduate yang benar-benar sesuai kebutuhan role.",
  },
  {
    stat: "Low signal",
    title: "Lowongan sering tidak relevan",
    text: "Job portal tradisional menampilkan terlalu banyak lowongan, sementara mahasiswa butuh prioritas berdasarkan Match Score dan skill tervalidasi.",
  },
];

const solutionSteps = [
  "Memetakan skill dari kampus, proyek, pengalaman organisasi, dan minat karier",
  "Memvalidasi kemampuan melalui AI Skill Assessment berbasis role",
  "Memberi rekomendasi karier, skill gap, dan lowongan dengan Match Score",
  "Membangun Auto Portfolio berisi bukti proyek, badge, dan hasil assessment",
  "Menampilkan ranked shortlist kandidat tervalidasi di HR Dashboard",
];

const features = [
  {
    title: "AI Skill Analyzer",
    text: "Mengubah proyek kuliah, pengalaman magang, dan aktivitas organisasi menjadi peta kompetensi yang mudah dipahami.",
    tag: "Student insight",
  },
  {
    title: "Verified Skill Assessment",
    text: "Challenge berbasis role membantu membuktikan kemampuan sebelum lamaran dikirim ke perusahaan.",
    tag: "Proof layer",
  },
  {
    title: "Career Recommendation",
    text: "AI memberi rekomendasi role, skill gap, dan langkah berikutnya berdasarkan kekuatan Dinda yang sudah tervalidasi.",
    tag: "AI guidance",
  },
  {
    title: "Auto Portfolio",
    text: "Menyusun portfolio otomatis dari proyek, badge, score assessment, dan ringkasan kecocokan role.",
    tag: "Application asset",
  },
  {
    title: "AI Skill Matching",
    text: "Mengurutkan lowongan berdasarkan Match Score, bukan hanya keyword di CV.",
    tag: "Better matching",
  },
  {
    title: "HR Match Dashboard",
    text: "Membantu Bu Rina melihat shortlist kandidat dengan bukti skill, portfolio, dan assessment evidence.",
    tag: "Recruiter workflow",
  },
];

const markets = [
  "Mahasiswa tingkat akhir",
  "Fresh graduate Indonesia",
  "Career center universitas",
  "Startup dan perusahaan entry-level hiring",
];

const businessModels = [
  {
    title: "B2B HR Subscription",
    text: "Perusahaan berlangganan untuk akses HR Dashboard, posting lowongan, kandidat tervalidasi, dan match analytics.",
  },
  {
    title: "Pay-per-Hire",
    text: "Fee berbasis keberhasilan ketika perusahaan merekrut kandidat dari shortlist SkillMatch ID.",
  },
  {
    title: "Premium Candidate Tools",
    text: "Fitur tambahan untuk mahasiswa seperti portfolio export, interview preparation, dan career coaching berbasis AI.",
  },
  {
    title: "University Partnership",
    text: "Kemitraan kampus untuk graduate readiness, career center analytics, dan laporan kesiapan kerja mahasiswa.",
  },
];

const competitors = [
  {
    name: "LinkedIn",
    positioning: "Professional networking & global recruitment platform",
    strength:
      "Strong professional network, recruiter tools, employer branding, large talent pool.",
    gap: "Fresh graduates often have limited experience and unverified skills, making it harder to stand out only through profile and work history.",
    response:
      "Focus on Verified Skill, assessment evidence, and Auto Portfolio for early-career talent.",
  },
  {
    name: "JobStreet",
    positioning: "Large job portal for general job search in Indonesia",
    strength:
      "Strong job listing coverage, wide awareness, trusted by many job seekers and employers.",
    gap: "Job seekers may face too many listings and limited guidance on which jobs truly match their skills.",
    response:
      "Rank opportunities using Match Score based on verified skills and career interest.",
  },
  {
    name: "Glints",
    positioning:
      "Career discovery and hiring platform for young professionals and startups",
    strength:
      "Relevant for young talent, startup jobs, internships, and career content.",
    gap: "Career discovery is strong, but skill verification and structured career roadmap can be more deeply integrated.",
    response:
      "Combine AI Skill Assessment, job matching, and personal Career Roadmap in one flow.",
  },
  {
    name: "Dealls",
    positioning:
      "Indonesian job portal and career platform with mentoring and employer tools",
    strength:
      "Strong career development features, CV review, mentoring, and recruitment tools.",
    gap: "Still relies heavily on career profile and recruitment workflow, while verified skill evidence and Auto Portfolio can become stronger differentiation.",
    response:
      "Build an end-to-end skill-first journey from onboarding, assessment, Auto Portfolio, job match, to HR shortlist.",
  },
];

const comparisonRows = [
  {
    feature: "Job listing",
    linkedin: "Strong",
    jobstreet: "Strong",
    glints: "Strong",
    dealls: "Strong",
    skillmatch: "Medium",
  },
  {
    feature: "Professional networking",
    linkedin: "Strong",
    jobstreet: "Limited",
    glints: "Medium",
    dealls: "Medium",
    skillmatch: "Not focus",
  },
  {
    feature: "Fresh graduate focus",
    linkedin: "Medium",
    jobstreet: "Medium",
    glints: "Strong",
    dealls: "Strong",
    skillmatch: "Strong",
  },
  {
    feature: "AI skill matching",
    linkedin: "Medium",
    jobstreet: "Limited",
    glints: "Medium",
    dealls: "Medium",
    skillmatch: "Strong",
  },
  {
    feature: "Skill verification / assessment",
    linkedin: "Limited",
    jobstreet: "Limited",
    glints: "Medium",
    dealls: "Medium",
    skillmatch: "Strong",
  },
  {
    feature: "Auto portfolio builder",
    linkedin: "Limited",
    jobstreet: "Not focus",
    glints: "Limited",
    dealls: "Medium",
    skillmatch: "Strong",
  },
  {
    feature: "Personal career roadmap",
    linkedin: "Limited",
    jobstreet: "Limited",
    glints: "Medium",
    dealls: "Medium",
    skillmatch: "Strong",
  },
  {
    feature: "HR shortlist based on verified skills",
    linkedin: "Medium",
    jobstreet: "Limited",
    glints: "Medium",
    dealls: "Medium",
    skillmatch: "Strong",
  },
  {
    feature: "Campus-first acquisition",
    linkedin: "Limited",
    jobstreet: "Limited",
    glints: "Medium",
    dealls: "Medium",
    skillmatch: "Strong",
  },
];

const positioningPoints = [
  {
    name: "JobStreet",
    note: "General Job Portal",
    x: "17%",
    y: "54%",
    featured: false,
  },
  {
    name: "LinkedIn",
    note: "Professional network",
    x: "30%",
    y: "47%",
    featured: false,
  },
  {
    name: "Glints",
    note: "Career discovery",
    x: "56%",
    y: "33%",
    featured: false,
  },
  {
    name: "Dealls",
    note: "Career platform",
    x: "63%",
    y: "29%",
    featured: false,
  },
  {
    name: "SkillMatch ID",
    note: "Skill-Based Recruitment",
    x: "78%",
    y: "15%",
    featured: true,
  },
];

const mvpScope = [
  {
    title: "Tahap Awal",
    items: [
      "Registrasi talent dan HR",
      "Setup profil dan skill",
      "AI Skill Assessment sederhana",
      "Match Score pekerjaan",
      "Auto Portfolio dasar",
      "HR Dashboard kandidat",
      "Tracking lamaran",
    ],
  },
  {
    title: "Tahap Lanjutan",
    items: [
      "Integrasi career center kampus",
      "Advanced AI recommendation",
      "Premium HR analytics",
      "Partnership bootcamp",
      "Company subscription",
      "University partnership dashboard",
    ],
  },
];

const goToMarketSteps = [
  {
    step: "01",
    title: "Pilot Market Yogyakarta",
    text: "Fokus pada mahasiswa tingkat akhir, fresh graduate, dan startup lokal.",
  },
  {
    step: "02",
    title: "Campus Activation",
    text: "Kerja sama dengan career center, komunitas mahasiswa, webinar karier, dan booth kampus.",
  },
  {
    step: "03",
    title: "B2B Outreach",
    text: "Mengajak startup, UMKM, dan perusahaan yang membutuhkan kandidat fresh graduate berbasis skill.",
  },
  {
    step: "04",
    title: "Scale Up",
    text: "Ekspansi ke Jakarta, Bandung, Surabaya, dan kota besar dengan populasi mahasiswa tinggi.",
  },
];

const successMetrics = [
  {
    value: "5.000",
    label: "pengguna aktif tahun pertama",
  },
  {
    value: "500",
    label: "talent menyelesaikan assessment",
  },
  {
    value: "100",
    label: "perusahaan terdaftar",
  },
  {
    value: "1.000",
    label: "lamaran berbasis Match Score",
  },
  {
    value: "60%",
    label: "waktu screening HR lebih hemat",
  },
  {
    value: "30%",
    label: "peningkatan relevansi kandidat",
  },
];

const presentationGuide = [
  "Masalah: fresh graduate sulit membuktikan skill, HR sulit screening kandidat.",
  "Solusi: SkillMatch ID mencocokkan talent dan perusahaan berdasarkan skill tervalidasi.",
  "Demo Talent: Dinda mengisi profil, mengikuti AI Skill Assessment, dan mendapat Match Score.",
  "Demo Apply: Dinda melamar pekerjaan menggunakan Verified Skill dan Auto Portfolio.",
  "Demo HR: Bu Rina melihat shortlist kandidat dengan Match Score dan bukti skill.",
  "Bisnis: pendapatan dari HR Subscription, Pay-per-Hire, Premium Tools, dan University Partnership.",
];

const howItWorks = [
  {
    title: "Lengkapi profil & pilih skill",
    text: "Dinda mengisi profil DKV, target role, domisili, dan skill utama.",
  },
  {
    title: "Ikuti AI Skill Assessment",
    text: "Assessment berbasis role memvalidasi kemampuan desain dan komunikasi.",
  },
  {
    title: "Dapatkan Match Score & Career Roadmap",
    text: "AI memberi skor kecocokan, skill gap, dan langkah pengembangan.",
  },
  {
    title: "Lamar pekerjaan dengan Auto Portfolio",
    text: "Dinda mengirim portfolio otomatis berisi evidence dan verified badge.",
  },
  {
    title: "HR menerima shortlist kandidat tervalidasi",
    text: "Bu Rina melihat kandidat berperingkat dengan assessment evidence.",
  },
];

const beforeAfter = [
  {
    before: "Mahasiswa bingung menentukan karier",
    after: "Job match berbasis skill tervalidasi",
  },
  {
    before: "HR screening CV secara manual",
    after: "HR mendapat shortlist kandidat otomatis",
  },
  {
    before: "Lowongan sering tidak relevan",
    after: "Auto Portfolio membuat profil kandidat lebih profesional",
  },
  {
    before: "Portfolio kandidat tidak standar",
    after: "Career Roadmap membantu talent berkembang",
  },
];

const competitiveAdvantages = [
  {
    traditional: "Rely on CV and keyword matching.",
    skillmatch: "Uses verified skill evidence.",
  },
  {
    traditional: "Show too many irrelevant jobs.",
    skillmatch: "Ranks jobs by Match Score.",
  },
  {
    traditional: "Require manual HR screening.",
    skillmatch: "Gives HR a verified candidate shortlist.",
  },
  {
    traditional: "Candidate portfolio quality is inconsistent.",
    skillmatch: "Builds Auto Portfolio from assessment and projects.",
  },
  {
    traditional: "Students still lack career direction.",
    skillmatch: "Provides personal Career Roadmap.",
  },
];

const roadmap = [
  {
    phase: "Q1",
    title: "Campus Pilot",
    text: "Pilot bersama universitas di Yogyakarta dan cohort mahasiswa tingkat akhir.",
  },
  {
    phase: "Q2",
    title: "Assessment Library",
    text: "Menambah assessment untuk design, data, marketing, software, dan operations.",
  },
  {
    phase: "Q3",
    title: "Employer Network",
    text: "Membuka HR Dashboard untuk startup dan perusahaan entry-level hiring.",
  },
  {
    phase: "Q4",
    title: "National Scale",
    text: "Menambah analytics kampus, portfolio export, dan insight pasar kerja regional.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-500">
        {eyebrow}
      </p>
      <h2 className="text-balance break-words text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-7 text-slate-600 md:text-lg">
        {text}
      </p>
    </div>
  );
}

function GlassPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-4xl border border-white/60 bg-white/75 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function NextSectionButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className="mt-10 flex justify-center">
      <a
        className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-center text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50"
        href={href}
      >
        Next Section: {label}
      </a>
    </div>
  );
}

function SignalBadge({ value }: { value: string }) {
  const signalStyles: Record<string, string> = {
    Strong: "bg-emerald-100 text-emerald-800 ring-emerald-200",
    Medium: "bg-cyan-100 text-cyan-800 ring-cyan-200",
    Limited: "bg-slate-100 text-slate-600 ring-slate-200",
    "Not focus": "bg-slate-950 text-white ring-slate-800",
  };

  return (
    <span
      className={`inline-flex min-w-20 justify-center whitespace-normal rounded-full px-3 py-1.5 text-center text-xs font-black ring-1 ${
        signalStyles[value] ?? signalStyles.Limited
      }`}
    >
      {value}
    </span>
  );
}

function HRDashboardShowcase() {
  return (
    <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
      <div className="grid border-b border-slate-200 bg-slate-950 p-5 text-white md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
            HR Dashboard - Bu Rina
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Startup Digital Yogyakarta
          </h3>
        </div>
        <button className="mt-5 min-h-11 rounded-full bg-emerald-300 px-5 py-3 text-sm font-black text-slate-950 shadow-lg md:mt-0">
          Shortlist Kandidat
        </button>
      </div>

      <div className="grid gap-5 bg-slate-50 p-5 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-5">
          <div className="rounded-3xl bg-[linear-gradient(145deg,#020617_0%,#0f172a_62%,#064e5f_100%)] p-5 text-white shadow-xl shadow-slate-950/15">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-300">
              Business KPI
            </p>
            <p className="mt-4 text-4xl font-black tracking-tight">
              60%
            </p>
            <p className="mt-2 text-lg font-semibold">
              waktu screening lebih hemat
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Bu Rina bisa fokus pada kandidat yang sudah punya Match Score dan
              assessment evidence.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2">
            {[
              ["128", "Total kandidat"],
              ["42", "Screened"],
              ["18", "Top match"],
              ["6", "Interview"],
            ].map(([value, label]) => (
              <div className="rounded-2xl bg-white p-4 shadow-sm" key={label}>
                <p className="text-2xl font-black text-slate-950">{value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
              Job posting
            </p>
            <h4 className="mt-3 text-xl font-semibold text-slate-950">
              UI/UX Designer Intern
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Role magang untuk produk digital dengan fokus Figma, UI Design,
              Canva, dan Copywriting.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Figma", "UI Design", "Canva", "Copywriting"].map((skill) => (
                <span
                  className="rounded-full bg-slate-950 px-3 py-2 text-xs font-bold text-white"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
              Ranked candidate list
            </p>
            <div className="mt-4 space-y-3">
              {[
                ["Dinda Prameswari", "DKV - Yogyakarta", "92"],
                ["Rafi Nugraha", "Informatika - Sleman", "86"],
                ["Maya Laras", "Komunikasi - Bantul", "82"],
              ].map(([name, meta, score], idx) => (
                <div
                  className={`rounded-2xl border p-4 ${
                    idx === 0
                      ? "border-emerald-300 bg-emerald-50"
                      : "border-slate-200 bg-white"
                  }`}
                  key={name}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-slate-950">{name}</p>
                      <p className="mt-1 text-xs text-slate-500">{meta}</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-emerald-700 shadow-sm">
                      {score}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Candidate detail
                </p>
                <h4 className="mt-3 text-2xl font-semibold">Dinda</h4>
                <p className="mt-1 text-sm text-slate-300">
                  Mahasiswa akhir DKV, Yogyakarta
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-300 p-4 text-center text-slate-950">
                <p className="text-2xl font-black">92%</p>
                <p className="text-[10px] font-bold uppercase">Match Score</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-white/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
                Verified Skills
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Figma", "UI Design", "Canva", "Copywriting"].map((skill) => (
                  <span
                    className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xl font-black">88</p>
                <p className="text-[10px] text-cyan-100">Assessment</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xl font-black">6</p>
                <p className="text-[10px] text-cyan-100">Portfolio project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8fbff] text-slate-950">
      <section className="relative min-h-[92vh] px-4 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.28),transparent_26%),radial-gradient(circle_at_88%_12%,rgba(14,165,233,0.25),transparent_28%),linear-gradient(135deg,#ffffff_0%,#eff6ff_46%,#ecfdf5_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f8fbff]" />
        <div className="relative mx-auto flex max-w-7xl flex-col">
          <nav className="fixed inset-x-3 top-4 z-50 mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-full border border-white/70 bg-white/85 px-3 py-3 shadow-sm backdrop-blur-xl sm:inset-x-5 sm:top-5 sm:gap-3 sm:px-4">
            <a className="flex min-w-0 items-center gap-2 sm:gap-3" href="#top">
              <span className="grid h-9 w-[118px] shrink-0 place-items-center overflow-hidden rounded-2xl bg-slate-950 p-1.5 sm:h-10 sm:w-[138px]">
                <Image
                  alt="SkillMatch ID Logo"
                  className="size-full object-contain"
                  height={40}
                  priority
                  src="/skillmatch-logo.png"
                  width={138}
                />
              </span>
              <span className="sr-only">SkillMatch ID</span>
            </a>
            <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              {navItems.map((item) => (
                <a
                  className="transition hover:text-slate-950"
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              className="min-h-11 shrink-0 rounded-full bg-slate-950 px-3 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-cyan-700 sm:px-4"
              href="#prototype"
            >
              <span className="hidden sm:inline">Lihat Prototype</span>
              <span className="sm:hidden">Demo</span>
            </a>
          </nav>

          <div
            className="grid min-h-[calc(92vh-92px)] items-center gap-12 py-12 lg:grid-cols-[1.03fr_0.97fr]"
            id="top"
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                Match Your Skills, Unlock Your Career
              </div>
              <h1 className="max-w-4xl text-balance break-words text-3xl font-semibold leading-[1.08] tracking-tight text-slate-950 min-[380px]:text-4xl sm:text-6xl sm:leading-[1.02] lg:text-7xl">
                Temukan pekerjaan yang sesuai dengan skill tervalidasi.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 md:text-xl">
                SkillMatch ID membantu mahasiswa tingkat akhir dan fresh
                graduate menganalisis kemampuan, membangun portfolio otomatis,
                dan melamar pekerjaan yang paling cocok dengan skill mereka.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="min-h-11 rounded-full bg-emerald-300 px-5 py-3.5 text-center text-sm font-black text-slate-950 shadow-xl shadow-emerald-300/30 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:px-6 sm:py-4"
                  href="#problem"
                >
                  Start Presentation
                </a>
                <a
                  className="min-h-11 rounded-full bg-slate-950 px-5 py-3.5 text-center text-sm font-bold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-cyan-700 sm:px-6 sm:py-4"
                  href="#prototype"
                >
                  Lihat Prototype
                </a>
                <a
                  className="min-h-11 rounded-full border border-slate-200 bg-white px-5 py-3.5 text-center text-sm font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 sm:px-6 sm:py-4"
                  href="#dashboard"
                >
                  Lihat Dashboard HR
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  ["88%", "verified match Dinda"],
                  ["14", "layar prototype"],
                  ["2 persona", "student dan HR"],
                ].map(([value, label]) => (
                  <div
                    className="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur"
                    key={value}
                  >
                    <p className="text-2xl font-bold text-slate-950">
                      {value}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <GlassPanel className="relative mx-auto w-full max-w-xl p-5">
              <div className="absolute -right-6 -top-6 size-24 rounded-4xl bg-emerald-300/80 blur-2xl" />
              <div className="relative grid gap-4 md:grid-cols-[0.72fr_1fr]">
                <div className="rounded-4xl bg-slate-950 p-4 text-white">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-11 w-36 place-items-center overflow-hidden rounded-2xl bg-black p-1.5">
                      <Image
                        alt="SkillMatch ID Logo"
                        className="size-full object-contain"
                        height={44}
                        src="/skillmatch-logo.png"
                        width={144}
                      />
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                      Live fit
                    </span>
                  </div>
                  <p className="text-sm text-cyan-100">Role rekomendasi</p>
                  <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                    UI/UX Designer Intern
                  </h2>
                  <div className="mt-8 grid h-40 place-items-center rounded-full bg-[conic-gradient(from_90deg,#34d399_0_78%,rgba(255,255,255,0.15)_78%_100%)]">
                    <div className="grid size-28 place-items-center rounded-full bg-slate-950">
                      <div className="text-center">
                        <p className="text-3xl font-bold">88%</p>
                        <p className="text-xs text-cyan-100">match</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    ["UI Design", "92", "bg-emerald-300"],
                    ["Figma Prototype", "88", "bg-cyan-300"],
                    ["UX Research", "84", "bg-lime-300"],
                    ["Visual Branding", "80", "bg-sky-300"],
                  ].map(([label, score, color]) => (
                    <div
                      className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm"
                      key={label}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-slate-800">
                          {label}
                        </p>
                        <span className="text-sm font-bold text-slate-950">
                          {score}
                        </span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${color}`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="problem">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="01 Problem"
            title="Mahasiswa punya potensi, tetapi bukti skill belum mudah dipercaya."
            text="BMC SkillMatch ID berangkat dari dua persona utama: Dinda sebagai kandidat fresh graduate, dan Bu Rina sebagai HR yang membutuhkan shortlist lebih cepat."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {problems.map((item) => (
              <article
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                key={item.title}
              >
                <p className="text-4xl font-bold tracking-tight text-cyan-600">
                  {item.stat}
                </p>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
          <NextSectionButton href="#solution" label="Solution" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="solution">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-500">
              02 Solution
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              AI skill-based recruitment yang menghubungkan bukti skill dengan kebutuhan perusahaan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              SkillMatch ID membuat bahasa yang sama antara mahasiswa dan HR:
              kandidat mendapat rekomendasi karier dan portfolio otomatis,
              sementara HR melihat ranked shortlist berbasis evidence.
            </p>
          </div>
          <GlassPanel className="p-5">
            <div className="grid gap-3">
              {solutionSteps.map((step, idx) => (
                <div
                  className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-4"
                  key={step}
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <p className="font-semibold text-slate-800">{step}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
        <NextSectionButton href="#features" label="Product" />
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="features">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="03 Product"
            title="Satu alur dari analisis skill sampai lamaran yang siap dinilai HR."
            text="Fitur tetap fokus pada AI skill-based recruitment, skill verification, Auto Portfolio, career recommendation, job matching, dan HR Dashboard."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100"
                key={feature.title}
              >
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                  {feature.tag}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
              </article>
            ))}
          </div>
          <NextSectionButton href="#how-it-works" label="Cara Kerja" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="how-it-works">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="03 Product Flow"
            title="Cara kerja SkillMatch ID"
            text="Flow ini bisa dipresentasikan sebagai alur utama dari BMC: kandidat membuktikan skill, sistem memberi rekomendasi, HR menerima kandidat tervalidasi."
          />
          <div className="relative grid gap-5 lg:grid-cols-5">
            <div className="absolute left-6 right-6 top-10 hidden h-px bg-gradient-to-r from-cyan-200 via-emerald-300 to-cyan-200 lg:block" />
            {howItWorks.map((step, idx) => (
              <article
                className="relative rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-100"
                key={step.title}
              >
                <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-slate-950 text-lg font-black text-emerald-300 shadow-lg shadow-slate-950/15">
                  {idx + 1}
                </div>
                <div className="mb-5 size-10 rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300" />
                <h3 className="text-lg font-semibold leading-7 text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
          <NextSectionButton href="#prototype" label="Product Demo" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="prototype">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="03 Product Demo"
            title="Mobile app journey Dinda dari analisis skill sampai apply job."
            text="Setiap layar dibuat seperti mobile app nyata: status bar, input, job cards, skill chips, Match Score badge, progress bar, dan bottom navigation."
          />
          <PrototypeDemo />
          <NextSectionButton href="#dashboard" label="HR Dashboard" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="dashboard">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="03 HR Dashboard"
            title="Bu Rina mendapat shortlist kandidat yang sudah punya evidence."
            text="Dashboard perusahaan dirancang untuk mempercepat screening intern dan fresh graduate tanpa kehilangan konteks skill, portfolio, dan assessment."
          />
          <HRDashboardShowcase />
          <NextSectionButton href="#business-model" label="Business Model" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="business-model">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassPanel className="p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600">
              Target market
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Fokus pada ekosistem kampus dan hiring fresh graduate di Indonesia.
            </h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {markets.map((market) => (
                <div
                  className="rounded-3xl border border-slate-100 bg-white p-4 font-semibold text-slate-700"
                  key={market}
                >
                  {market}
                </div>
              ))}
            </div>
          </GlassPanel>
          <GlassPanel className="p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-500">
              04 Business Model
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Empat revenue stream yang tetap relevan dengan BMC SkillMatch ID.
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {businessModels.map((model) => (
                <div
                  className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm"
                  key={model.title}
                >
                  <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-emerald-300">
                    {model.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <h3 className="font-semibold text-slate-950">{model.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {model.text}
                  </p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
        <NextSectionButton
          href="#competitor-analysis"
          label="Analisis Kompetitor"
        />
      </section>

      <section
        className="px-4 py-16 text-white sm:px-8 md:py-20 lg:px-10"
        id="competitor-analysis"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[linear-gradient(145deg,#020617_0%,#0f172a_56%,#053d4c_100%)] px-4 py-10 shadow-[0_32px_100px_rgba(15,23,42,0.22)] sm:rounded-[2.25rem] sm:px-8 sm:py-12 lg:px-10">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
              05 Competitor Analysis
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Analisis Kompetitor
            </h2>
            <p className="mt-5 text-pretty text-base leading-7 text-slate-300 md:text-lg">
              SkillMatch ID tidak bersaing sebagai job portal biasa. SkillMatch
              ID mengambil posisi sebagai platform rekrutmen berbasis skill
              yang membantu talent membuktikan kemampuan dan membantu HR
              menemukan kandidat yang lebih relevan.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {competitors.map((competitor) => (
              <article
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.12]"
                key={competitor.name}
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {competitor.name}
                  </h3>
                  <span className="size-3 rounded-full bg-gradient-to-br from-cyan-300 to-emerald-300" />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200">
                      Positioning
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-100">
                      {competitor.positioning}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-200">
                      Strength
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {competitor.strength}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Gap / Opportunity
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {competitor.gap}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-200">
                      SkillMatch ID Response
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white">
                      {competitor.response}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-4xl border border-white/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
                Feature comparison
              </p>
            </div>
            <div className="horizontal-scroll overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left md:min-w-[920px]">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    <th className="px-5 py-4">Feature</th>
                    <th className="px-4 py-4">LinkedIn</th>
                    <th className="px-4 py-4">JobStreet</th>
                    <th className="px-4 py-4">Glints</th>
                    <th className="px-4 py-4">Dealls</th>
                    <th className="px-4 py-4 text-emerald-700">
                      SkillMatch ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      className="border-b border-slate-100 last:border-0"
                      key={row.feature}
                    >
                      <td className="px-5 py-4 text-sm font-bold text-slate-950">
                        {row.feature}
                      </td>
                      <td className="px-4 py-4">
                        <SignalBadge value={row.linkedin} />
                      </td>
                      <td className="px-4 py-4">
                        <SignalBadge value={row.jobstreet} />
                      </td>
                      <td className="px-4 py-4">
                        <SignalBadge value={row.glints} />
                      </td>
                      <td className="px-4 py-4">
                        <SignalBadge value={row.dealls} />
                      </td>
                      <td className="bg-emerald-50/70 px-4 py-4">
                        <SignalBadge value={row.skillmatch} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-4xl border border-white/10 bg-white/[0.08] p-6">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-300">
                Positioning Map
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Skill-first, campus-first, dan lebih personal untuk early-career talent.
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Peta ini menunjukkan arah positioning: SkillMatch ID tidak
                mengejar skala listing terbesar, tetapi memperkuat personalisasi
                dan evidence skill untuk mahasiswa tingkat akhir dan fresh
                graduate.
              </p>
              <div className="mt-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="text-sm font-bold leading-7 text-cyan-50">
                  Kesimpulan: SkillMatch ID tidak perlu menjadi job portal
                  terbesar. Keunggulan utamanya adalah menjadi platform paling
                  relevan untuk early-career talent yang membutuhkan bukti
                  skill, arahan karier, dan akses lowongan yang benar-benar
                  sesuai.
                </p>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-4xl border border-white/10 bg-white/[0.08] p-4 sm:min-h-[420px] sm:p-5">
              <div className="absolute inset-6 rounded-3xl border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:25%_25%]" />
              <div className="absolute bottom-12 left-12 right-8 h-px bg-cyan-200/45" />
              <div className="absolute bottom-12 left-12 top-8 w-px bg-cyan-200/45" />
              <span className="absolute bottom-5 left-8 max-w-24 text-[10px] font-black uppercase tracking-[0.14em] text-slate-400 sm:left-10 sm:max-w-28 sm:tracking-[0.18em]">
                General Job Portal
              </span>
              <span className="absolute bottom-5 right-4 max-w-28 text-right text-[10px] font-black uppercase tracking-[0.14em] text-emerald-200 sm:right-5 sm:max-w-32 sm:tracking-[0.18em]">
                Skill-Based Recruitment
              </span>
              <span className="absolute left-4 top-8 max-w-28 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200">
                High Personalization
              </span>
              <span className="absolute bottom-16 left-4 max-w-24 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Low Personalization
              </span>

              {positioningPoints.map((point) => (
                <div
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  key={point.name}
                  style={{ left: point.x, top: point.y }}
                >
                  <div
                    className={`w-max max-w-[8.25rem] rounded-2xl border px-3 py-2 text-center shadow-lg ${
                      point.featured
                        ? "border-emerald-200 bg-emerald-300 text-slate-950 shadow-emerald-950/20"
                        : "border-white/20 bg-slate-950/90 text-white"
                    }`}
                  >
                    <p className="text-xs font-black">
                      {point.name}
                    </p>
                    <p
                      className={`mt-1 text-[10px] leading-4 ${
                        point.featured ? "text-slate-700" : "text-slate-300"
                      }`}
                    >
                      {point.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <NextSectionButton
            href="#strategic-conclusion"
            label="Strategic Conclusion"
          />
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-8 md:py-20 lg:px-10"
        id="strategic-conclusion"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_32px_100px_rgba(15,23,42,0.22)] sm:rounded-[2.25rem] sm:p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(45,212,191,0.28),transparent_26%),radial-gradient(circle_at_84%_22%,rgba(52,211,153,0.22),transparent_24%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  06 Strategic Conclusion
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                  Kesimpulan Strategis
                </h2>
              </div>
              <div className="rounded-4xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-pretty text-lg font-semibold leading-8 text-slate-100 md:text-xl">
                  SkillMatch ID tidak perlu menjadi job portal terbesar. Fokus
                  utamanya adalah menjadi platform rekrutmen berbasis skill yang
                  paling relevan untuk mahasiswa tingkat akhir dan fresh
                  graduate. Keunggulan SkillMatch ID terletak pada Verified
                  Skill, Match Score, Auto Portfolio, Career Roadmap, dan HR
                  Shortlist berbasis bukti kemampuan.
                </p>
              </div>
            </div>
          </div>
          <NextSectionButton href="#mvp-scope" label="MVP SkillMatch ID" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="mvp-scope">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="07 MVP Scope"
            title="MVP SkillMatch ID"
            text="Ruang lingkup MVP dipisahkan antara fitur yang harus membuktikan value awal dan fitur lanjutan untuk skala kemitraan."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {mvpScope.map((scope, scopeIdx) => (
              <article
                className={`rounded-4xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  scopeIdx === 0
                    ? "border-emerald-200 bg-white hover:shadow-emerald-100"
                    : "border-slate-200 bg-slate-950 text-white hover:shadow-slate-300"
                }`}
                key={scope.title}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className={`grid size-12 place-items-center rounded-2xl text-sm font-black ${
                      scopeIdx === 0
                        ? "bg-emerald-300 text-slate-950"
                        : "bg-white text-slate-950"
                    }`}
                  >
                    {scopeIdx + 1}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {scope.title}
                  </h3>
                </div>
                <div className="grid gap-3">
                  {scope.items.map((item) => (
                    <div
                      className={`flex items-center gap-3 rounded-2xl p-4 text-sm font-semibold ${
                        scopeIdx === 0
                          ? "bg-slate-50 text-slate-700"
                          : "bg-white/10 text-slate-100"
                      }`}
                      key={item}
                    >
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-cyan-300 to-emerald-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <NextSectionButton href="#go-to-market" label="Strategi Masuk Pasar" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="go-to-market">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="08 Go-To-Market"
            title="Strategi Masuk Pasar"
            text="Strategi awal dibuat campus-first agar akuisisi talent dan validasi HR berjalan dari ekosistem yang paling dekat dengan pengguna utama."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {goToMarketSteps.map((item) => (
              <article
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100"
                key={item.title}
              >
                <div className="mb-8 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-emerald-300 transition group-hover:bg-cyan-700 group-hover:text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <NextSectionButton href="#success-metrics" label="Indikator Keberhasilan" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="success-metrics">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="09 Success Metrics"
            title="Indikator Keberhasilan"
            text="KPI awal menilai traction kandidat, bukti validasi skill, adopsi perusahaan, dan efisiensi screening HR."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {successMetrics.map((metric) => (
              <article
                className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-100"
                key={metric.label}
              >
                <div className="absolute right-0 top-0 size-24 rounded-bl-[3rem] bg-gradient-to-br from-cyan-100 to-emerald-100" />
                <p className="relative text-4xl font-black tracking-tight text-slate-950">
                  {metric.value}
                </p>
                <p className="relative mt-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
          <NextSectionButton href="#before-after" label="Before vs After" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="before-after">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="10 Transformation"
            title="Sebelum dan sesudah SkillMatch ID"
            text="Slide ini memperlihatkan perubahan pengalaman untuk Dinda sebagai talent dan Bu Rina sebagai HR."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-slate-500">
                Before
              </p>
              <div className="mt-6 space-y-4">
                {beforeAfter.map((item) => (
                  <div
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    key={item.before}
                  >
                    {item.before}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-4xl bg-slate-950 p-6 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-300">
                After
              </p>
              <div className="mt-6 space-y-4">
                {beforeAfter.map((item) => (
                  <div
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-semibold leading-6 text-slate-100"
                    key={item.after}
                  >
                    {item.after}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <NextSectionButton href="#competitive" label="Competitive Advantage" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="competitive">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="11 Competitive Advantage"
            title="Mengapa SkillMatch ID berbeda?"
            text="SkillMatch ID tidak berhenti di posting lowongan. Platform ini memberi bukti skill, Match Score, dan evidence yang bisa dipakai kandidat maupun HR."
          />
          <div className="grid gap-5 lg:grid-cols-5">
            {competitiveAdvantages.map((item, idx) => (
              <article
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-100"
                key={item.traditional}
              >
                <div className="border-b border-slate-100 bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Traditional
                  </p>
                  <p className="mt-3 min-h-24 text-base font-semibold leading-7 text-slate-800">
                    {item.traditional}
                  </p>
                </div>
                <div className="bg-[linear-gradient(145deg,#020617_0%,#0f172a_65%,#063b45_100%)] p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                    SkillMatch ID
                  </p>
                  <p className="mt-3 min-h-24 text-base font-semibold leading-7">
                    {item.skillmatch}
                  </p>
                  <div className="mt-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100">
                    0{idx + 1}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <NextSectionButton href="#roadmap" label="Roadmap" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="roadmap">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="12 Roadmap"
            title="Roadmap menuju platform matching lulusan yang tervalidasi."
            text="Tahap pengembangan dimulai dari pilot kampus, assessment library, employer network, sampai skala nasional."
          />
          <div className="grid gap-5 md:grid-cols-4">
            {roadmap.map((item) => (
              <article
                className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                key={item.phase}
              >
                <div className="absolute right-0 top-0 size-24 rounded-bl-[3rem] bg-gradient-to-br from-cyan-100 to-emerald-100" />
                <p className="relative text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
                  {item.phase}
                </p>
                <h3 className="relative mt-8 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <NextSectionButton
            href="#presentation-guide"
            label="Alur Presentasi 3 Menit"
          />
        </div>
      </section>

      <section
        className="px-4 py-14 sm:px-8 md:py-16 lg:px-10"
        id="presentation-guide"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600">
                  Speaker Notes
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                  Alur Presentasi 3 Menit
                </h2>
              </div>
              <span className="w-fit rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                6 poin utama
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {presentationGuide.map((point, idx) => (
                <article
                  className="flex gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:shadow-lg hover:shadow-cyan-100"
                  key={point}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-emerald-300">
                    {idx + 1}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {point}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <NextSectionButton href="#closing" label="Closing" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-20 lg:px-10" id="closing">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:rounded-4xl sm:p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.25),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(52,211,153,0.22),transparent_24%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  13 Closing
                </p>
                <h2 className="mt-4 max-w-3xl text-balance break-words text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">
                  SkillMatch ID hadir untuk mengubah proses rekrutmen dari
                  sekadar melihat CV menjadi memahami kemampuan nyata kandidat.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Pilot bersama kampus, validasi bersama HR, dan bantu Dinda
                  serta ribuan fresh graduate lain membuka karier pertama
                  dengan confidence.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="min-h-11 rounded-full bg-emerald-300 px-5 py-3.5 text-center text-sm font-black text-slate-950 shadow-xl shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:px-6 sm:py-4"
                    href="#prototype"
                  >
                    Lihat Prototype
                  </a>
                  <a
                    className="min-h-11 rounded-full bg-white px-5 py-3.5 text-center text-sm font-black text-slate-950 shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-100 sm:px-6 sm:py-4"
                    href="#dashboard"
                  >
                    Coba HR Dashboard
                  </a>
                  <a
                    className="min-h-11 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-center text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white/15 sm:px-6 sm:py-4"
                    href="mailto:hello@skillmatch.id"
                  >
                    Hubungi Tim SkillMatch ID
                  </a>
                </div>
              </div>
              <div className="w-full">
                <div className="rounded-3xl border border-white/15 bg-white p-5 text-center text-slate-950 shadow-2xl shadow-slate-950/25">
                  <div className="mx-auto mb-4 grid h-12 w-40 place-items-center overflow-hidden rounded-2xl bg-black p-2">
                    <Image
                      alt="SkillMatch ID Logo"
                      className="size-full object-contain"
                      height={48}
                      src="/skillmatch-logo.png"
                      width={160}
                    />
                  </div>
                  <p className="text-base font-black tracking-tight">
                    Scan untuk membuka prototype
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Buka interactive pitch deck dan prototype SkillMatch ID
                    langsung dari perangkat Anda.
                  </p>
                  <div className="mx-auto mt-5 grid size-[170px] place-items-center rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:size-[200px]">
                    <Image
                      alt="QR Code SkillMatch ID Prototype"
                      className="size-full rounded-2xl object-contain"
                      height={200}
                      sizes="(max-width: 640px) 170px, 200px"
                      src="/qrcode_358096001_26ebb73ca4fbac75189978bb4b701405.png"
                      width={200}
                    />
                  </div>
                  <p className="mt-4 text-xs font-semibold leading-5 text-slate-500">
                    Arahkan kamera HP ke QR Code untuk membuka web.
                  </p>
                </div>
                <a
                  className="mt-4 inline-flex min-h-11 w-full justify-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-200 sm:px-7 sm:py-4"
                  href="#top"
                >
                  Kembali ke atas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
