import PrototypeDemo from "./PrototypeDemo";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Product", href: "#prototype" },
  { label: "Business", href: "#business-model" },
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
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
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
      className={`rounded-[2rem] border border-white/60 bg-white/75 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function HRDashboardShowcase() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
      <div className="grid border-b border-slate-200 bg-slate-950 p-5 text-white md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
            HR Dashboard - Bu Rina
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">
            Startup Digital Yogyakarta
          </h3>
        </div>
        <button className="mt-5 rounded-full bg-emerald-300 px-5 py-3 text-sm font-black text-slate-950 shadow-lg md:mt-0">
          Shortlist Kandidat
        </button>
      </div>

      <div className="grid gap-5 bg-slate-50 p-5 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-3">
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

            <div className="mt-5 grid grid-cols-2 gap-3">
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
      <section className="relative min-h-[92vh] px-5 pb-12 pt-28 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.28),transparent_26%),radial-gradient(circle_at_88%_12%,rgba(14,165,233,0.25),transparent_28%),linear-gradient(135deg,#ffffff_0%,#eff6ff_46%,#ecfdf5_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f8fbff]" />
        <div className="relative mx-auto flex max-w-7xl flex-col">
          <nav className="fixed inset-x-5 top-5 z-50 mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-white/70 bg-white/80 px-3 py-3 shadow-sm backdrop-blur-xl sm:px-4">
            <a className="flex min-w-0 items-center gap-2 sm:gap-3" href="#top">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950">
                <span className="h-5 w-5 rounded-lg bg-gradient-to-br from-cyan-300 to-emerald-300" />
              </span>
              <span className="text-sm font-bold tracking-tight text-slate-950 sm:text-base">
                SkillMatch ID
              </span>
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
              className="shrink-0 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-cyan-700"
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
              <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl sm:leading-[1.02] lg:text-7xl">
                Temukan pekerjaan yang sesuai dengan skill tervalidasi.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 md:text-xl">
                SkillMatch ID membantu mahasiswa tingkat akhir dan fresh
                graduate menganalisis kemampuan, membangun portfolio otomatis,
                dan melamar pekerjaan yang paling cocok dengan skill mereka.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="rounded-full bg-slate-950 px-6 py-4 text-center text-sm font-bold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-cyan-700"
                  href="#prototype"
                >
                  Lihat Prototype
                </a>
                <a
                  className="rounded-full border border-slate-200 bg-white px-6 py-4 text-center text-sm font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
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
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-[2rem] bg-emerald-300/80 blur-2xl" />
              <div className="relative grid gap-4 md:grid-cols-[0.72fr_1fr]">
                <div className="rounded-[2rem] bg-slate-950 p-4 text-white">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300" />
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                      Live fit
                    </span>
                  </div>
                  <p className="text-sm text-cyan-100">Role rekomendasi</p>
                  <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                    UI/UX Designer Intern
                  </h2>
                  <div className="mt-8 grid h-40 place-items-center rounded-full bg-[conic-gradient(from_90deg,#34d399_0_78%,rgba(255,255,255,0.15)_78%_100%)]">
                    <div className="grid h-28 w-28 place-items-center rounded-full bg-slate-950">
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

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="problem">
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
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="solution">
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
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <p className="font-semibold text-slate-800">{step}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="features">
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
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="prototype">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="03 Product Demo"
            title="Mobile app journey Dinda dari analisis skill sampai apply job."
            text="Setiap layar dibuat seperti mobile app nyata: status bar, input, job cards, skill chips, Match Score badge, progress bar, dan bottom navigation."
          />
          <PrototypeDemo />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="dashboard">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="03 HR Dashboard"
            title="Bu Rina mendapat shortlist kandidat yang sudah punya evidence."
            text="Dashboard perusahaan dirancang untuk mempercepat screening intern dan fresh graduate tanpa kehilangan konteks skill, portfolio, dan assessment."
          />
          <HRDashboardShowcase />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="business-model">
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
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-emerald-300">
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
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="competitive">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="05 Competitive Advantage"
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
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="roadmap">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="06 Roadmap"
            title="Roadmap menuju platform matching lulusan yang tervalidasi."
            text="Tahap pengembangan dimulai dari pilot kampus, assessment library, employer network, sampai skala nasional."
          />
          <div className="grid gap-5 md:grid-cols-4">
            {roadmap.map((item) => (
              <article
                className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                key={item.phase}
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-gradient-to-br from-cyan-100 to-emerald-100" />
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
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.25),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(52,211,153,0.22),transparent_24%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  07 Closing
                </p>
                <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                  SkillMatch ID membantu potensi mahasiswa berubah menjadi
                  bukti skill yang dipercaya perusahaan.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Pilot bersama kampus, validasi bersama HR, dan bantu Dinda
                  serta ribuan fresh graduate lain membuka karier pertama
                  dengan confidence.
                </p>
              </div>
              <a
                className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-200"
                href="#top"
              >
                Kembali ke atas
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
