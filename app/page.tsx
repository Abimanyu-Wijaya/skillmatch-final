const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Product", href: "#prototype" },
  { label: "Business", href: "#business-model" },
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
    text: "Job portal tradisional menampilkan terlalu banyak lowongan, sementara mahasiswa butuh prioritas berdasarkan match score dan skill tervalidasi.",
  },
];

const solutionSteps = [
  "Memetakan skill dari kampus, proyek, pengalaman organisasi, dan minat karier",
  "Memvalidasi kemampuan melalui AI Skill Assessment berbasis role",
  "Memberi rekomendasi karier, skill gap, dan lowongan dengan match score",
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
    text: "Mengurutkan lowongan berdasarkan skill match score, bukan hanya keyword di CV.",
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
    traditional: "Job portal tradisional mengandalkan keyword CV.",
    skillmatch: "SkillMatch ID menggunakan verified skill evidence.",
  },
  {
    traditional: "Platform umum menampilkan terlalu banyak lowongan tidak relevan.",
    skillmatch: "SkillMatch ID mengurutkan pekerjaan berdasarkan skill match score.",
  },
  {
    traditional: "Screening awal memakan waktu lebih lama.",
    skillmatch: "HR mendapat ranked shortlist dengan assessment evidence.",
  },
];

const prototypeScreens = [
  {
    title: "Splash screen",
    eyebrow: "Launch",
    mode: "brand",
    copy: "SkillMatch ID",
    detail: "Match Your Skills, Unlock Your Career.",
  },
  {
    title: "Onboarding",
    eyebrow: "Intro",
    mode: "list",
    copy: "Match Your Skills, Unlock Your Career",
    detail: "Dinda melihat alur analisis skill, portfolio otomatis, dan job matching.",
  },
  {
    title: "Login/Register",
    eyebrow: "Access",
    mode: "form",
    copy: "Masuk ke SkillMatch",
    detail: "Akses melalui email kampus, Google, atau akun kandidat.",
  },
  {
    title: "Role selection",
    eyebrow: "Persona",
    mode: "choice",
    copy: "Pilih peran",
    detail: "Dinda memilih Student, Bu Rina memilih HR.",
  },
  {
    title: "Profile setup",
    eyebrow: "Profile",
    mode: "profile",
    copy: "Dinda Prameswari",
    detail: "Mahasiswa akhir DKV di Yogyakarta menyiapkan profil karier.",
  },
  {
    title: "Skill selection",
    eyebrow: "Skills",
    mode: "chips",
    copy: "Pilih skill untuk divalidasi",
    detail: "UI Design, Figma, Visual Branding, User Research, Copywriting.",
  },
  {
    title: "AI skill assessment",
    eyebrow: "Assessment",
    mode: "quiz",
    copy: "Challenge UI/UX Designer Intern",
    detail: "Assessment berbasis brief desain, rubric, dan timer.",
  },
  {
    title: "Skill analysis result",
    eyebrow: "Result",
    mode: "score",
    copy: "UI/UX Designer Intern",
    detail: "Dinda mendapat 88 percent verified match dengan skill gap yang jelas.",
  },
  {
    title: "Job match home",
    eyebrow: "Matches",
    mode: "jobs",
    copy: "Lowongan cocok untuk Dinda",
    detail: "UI/UX Designer Intern, Social Media Designer, Junior Data Analyst.",
  },
  {
    title: "Job detail",
    eyebrow: "Opening",
    mode: "detail",
    copy: "UI/UX Designer Intern",
    detail: "Skill Dinda memenuhi 9 dari 10 sinyal kebutuhan startup.",
  },
  {
    title: "Apply job",
    eyebrow: "Apply",
    mode: "apply",
    copy: "Kirim lamaran",
    detail: "Auto Portfolio dan ringkasan match dikirim ke Bu Rina.",
  },
  {
    title: "Application tracking",
    eyebrow: "Tracker",
    mode: "timeline",
    copy: "Lamaran diproses",
    detail: "Dinda melihat progress dari applied sampai interview.",
  },
  {
    title: "Auto portfolio",
    eyebrow: "Portfolio",
    mode: "portfolio",
    copy: "Dinda Prameswari",
    detail: "Portfolio otomatis berisi proyek desain, badge, dan verified score.",
  },
  {
    title: "Career roadmap",
    eyebrow: "Roadmap",
    mode: "roadmap",
    copy: "Roadmap karier Dinda",
    detail: "Rencana 4 minggu untuk UX research, design system, dan portfolio case.",
  },
];

const dashboardCards = [
  {
    title: "HR dashboard",
    metric: "128 kandidat",
    text: "Bu Rina melihat funnel kandidat, match strength, assessment score, dan stage rekrutmen.",
    mode: "overview",
  },
  {
    title: "Post job",
    metric: "8 skill signal",
    text: "HR menentukan skill wajib, bobot kriteria, dan assessment untuk UI/UX Designer Intern.",
    mode: "post",
  },
  {
    title: "Candidate match list",
    metric: "92% top fit",
    text: "Shortlist kandidat diurutkan berdasarkan verified skill, domisili, availability, dan fit score.",
    mode: "list",
  },
  {
    title: "Candidate detail",
    metric: "Evidence ready",
    text: "Detail Dinda menampilkan portfolio, rubric assessment, proyek, interview notes, dan skill gap.",
    mode: "detail",
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

function MiniPhone({
  screen,
  index,
}: {
  screen: (typeof prototypeScreens)[number];
  index: number;
}) {
  return (
    <article className="group rounded-[2rem] border border-slate-200/80 bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(14,165,233,0.18)]">
      <div className="mx-auto max-w-[282px] rounded-[2.35rem] border-[8px] border-slate-950 bg-slate-950 p-2 shadow-[0_34px_90px_rgba(2,6,24,0.32)]">
        <div className="relative min-h-[590px] overflow-hidden rounded-[1.85rem] bg-slate-50">
          <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-slate-950 shadow-sm" />
          <div className="flex min-h-[590px] flex-col bg-[linear-gradient(145deg,#f8fafc_0%,#ecfeff_46%,#f0fdf4_100%)]">
            <div className="flex items-center justify-between px-5 pb-3 pt-4 text-[10px] font-bold text-slate-700">
              <span>09:41</span>
              <div className="flex items-center gap-1">
                <span className="h-2 w-3 rounded-sm bg-slate-700" />
                <span className="h-2 w-3 rounded-sm bg-slate-700" />
                <span className="h-2 w-4 rounded-sm border border-slate-700">
                  <span className="block h-full w-3 rounded-sm bg-slate-700" />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
              <span>{screen.eyebrow}</span>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
              <PhoneVisual mode={screen.mode} title={screen.copy} />
              {["brand", "list", "form", "choice"].includes(
                screen.mode,
              ) ? null : (
                <AppBottomNav active={screen.mode} />
              )}
              <div className="mt-4 border-t border-slate-200/80 pt-3">
                <h3 className="text-base font-semibold leading-tight text-slate-950">
                  {screen.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {screen.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function PhoneVisual({ mode, title }: { mode: string; title: string }) {
  if (mode === "brand") {
    return (
      <div className="flex min-h-[455px] flex-1 flex-col items-center justify-center text-center">
        <div className="mb-5 grid h-20 w-20 place-items-center rounded-3xl bg-slate-950 shadow-xl">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-300 via-emerald-300 to-white" />
        </div>
        <p className="text-2xl font-bold tracking-tight text-slate-950">
          {title}
        </p>
        <p className="mt-3 max-w-[190px] text-sm font-semibold leading-6 text-slate-600">
          Match Your Skills, Unlock Your Career
        </p>
        <div className="mt-8 h-2 w-32 overflow-hidden rounded-full bg-slate-200">
          <div className="animate-load h-full w-2/3 rounded-full bg-emerald-400" />
        </div>
      </div>
    );
  }

  if (mode === "list") {
    return (
      <div className="flex min-h-[455px] flex-1 flex-col">
        <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white shadow-xl">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300 text-slate-950">
            <span className="text-lg font-black">S</span>
          </div>
          <h4 className="mt-5 text-2xl font-bold leading-tight">{title}</h4>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Platform AI skill-based recruitment untuk mahasiswa dan fresh
            graduate Indonesia.
          </p>
        </div>
        <div className="mt-4 grid gap-3">
          {[
            ["Analisis skill", "Baca proyek dan pengalaman Dinda"],
            ["Verified Skill", "Assessment sesuai target role"],
            ["Auto Portfolio", "Portfolio siap dikirim ke HR"],
          ].map(([label, text]) => (
            <div className="rounded-2xl bg-white p-3 shadow-sm" key={label}>
              <p className="text-sm font-bold text-slate-950">{label}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === "form") {
    return (
      <div className="min-h-[455px] flex-1">
        <MockHeader
          subtitle="Gunakan akun kampus atau email pribadi."
          title={title}
        />
        <div className="mt-5 space-y-3">
          <InputMock label="Email" value="dinda@student.ac.id" />
          <InputMock label="Password" value="••••••••" />
          <button className="h-12 w-full rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-lg shadow-slate-950/15">
            Masuk
          </button>
          <button className="h-11 w-full rounded-2xl border border-cyan-200 bg-cyan-50 text-sm font-bold text-cyan-700">
            Daftar akun baru
          </button>
        </div>
      </div>
    );
  }

  if (mode === "choice") {
    return (
      <div className="min-h-[455px] flex-1">
        <MockHeader subtitle="Sesuaikan pengalaman produk." title={title} />
        <div className="mt-5 space-y-3">
          {["Student - Dinda", "Fresh graduate", "HR - Bu Rina"].map(
            (item, idx) => (
            <div
              className={`rounded-2xl border p-4 text-sm font-semibold ${
                idx === 0
                  ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                  : "border-slate-200 bg-white text-slate-600"
              }`}
              key={item}
            >
              {item}
            </div>
            ),
          )}
        </div>
      </div>
    );
  }

  if (mode === "chips") {
    return (
      <div className="min-h-[455px] flex-1">
        <MockHeader subtitle="Pilih skill utama DKV." title={title} />
        <div className="mt-5 flex flex-wrap gap-2">
          {["UI Design", "Figma", "Branding", "UX Research", "Canva", "Copy"].map(
            (item, idx) => (
              <span
                className={`rounded-full px-3 py-2 text-xs font-semibold ${
                  idx < 4
                    ? "bg-slate-950 text-white"
                    : "bg-white text-slate-600"
                }`}
                key={item}
              >
                {item}
              </span>
            ),
          )}
        </div>
        <div className="mt-6 rounded-2xl bg-cyan-50 p-4 text-xs leading-5 text-slate-600">
          AI menyarankan Dinda memvalidasi UI Design, Figma, dan UX Research
          terlebih dahulu.
        </div>
        <button className="mt-4 h-11 w-full rounded-2xl bg-emerald-400 text-sm font-bold text-slate-950">
          Mulai Assessment
        </button>
      </div>
    );
  }

  if (mode === "quiz") {
    return (
      <div className="min-h-[455px] flex-1">
        <MockHeader subtitle="12 menit tersisa" title={title} />
        <div className="mt-4 rounded-3xl bg-white p-4 shadow-sm">
          <div className="mb-4 h-2 rounded-full bg-slate-100">
            <div className="h-full w-7/12 rounded-full bg-cyan-400" />
          </div>
          <p className="text-sm font-bold leading-5 text-slate-950">
            Buat wireframe low-fidelity untuk onboarding aplikasi karier.
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Fokus pada user flow, hierarchy, dan CTA utama.
          </p>
          <div className="space-y-3">
            <div className="mt-4 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-3 text-xs font-semibold text-emerald-700">
              Layout jelas + alasan desain
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3 text-xs font-semibold text-slate-600">
              Layout visual saja
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3 text-xs font-semibold text-slate-600">
              Copywriting tanpa wireframe
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mode === "score") {
    return (
      <div className="min-h-[455px] flex-1">
        <MockHeader subtitle="Verified Skill Result" title={title} />
        <div className="mt-5 grid place-items-center">
          <div className="conic-ring grid h-36 w-36 place-items-center rounded-full text-center">
            <div className="grid h-28 w-28 place-items-center rounded-full bg-white">
              <div>
                <p className="text-3xl font-bold text-slate-950">88%</p>
                <p className="text-xs text-slate-500">match</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          <ScoreRow label="UI Design" score="92" width="w-11/12" />
          <ScoreRow
            color="bg-emerald-300"
            label="UX Research"
            score="84"
            width="w-10/12"
          />
          <ScoreRow
            color="bg-cyan-300"
            label="Design System"
            score="76"
            width="w-8/12"
          />
        </div>
      </div>
    );
  }

  if (mode === "jobs" || mode === "detail" || mode === "apply") {
    const jobs = [
      ["UI/UX Designer Intern", "Jogja Digital Lab", "92"],
      ["Social Media Designer", "Kreatif Nusantara", "87"],
      ["Digital Marketing Intern", "Sleman Startup Hub", "81"],
    ];

    return (
      <div className="min-h-[455px] flex-1">
        <MockHeader subtitle="Yogyakarta area" title={title} />
        <div className="mt-4 space-y-3">
          {jobs.map(([job, company, score], idx) => (
            <JobCard company={company} job={job} key={job} score={score}>
              {idx === 0 && mode === "apply" ? (
                <button className="mt-3 h-9 w-full rounded-xl bg-cyan-400 text-xs font-bold text-slate-950">
                  Kirim Auto Portfolio
                </button>
              ) : null}
              {idx === 0 && mode === "detail" ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Figma", "Prototype", "UX"].map((skill) => (
                    <span
                      className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : null}
            </JobCard>
          ))}
        </div>
      </div>
    );
  }

  if (mode === "timeline" || mode === "roadmap") {
    const steps =
      mode === "roadmap"
        ? ["UX Research", "Case Study", "Design System", "Mock Interview"]
        : ["Applied", "Assessment", "Shortlist", "Interview"];

    return (
      <div className="min-h-[455px] flex-1">
        <MockHeader
          subtitle={mode === "roadmap" ? "4-week plan" : "UI/UX Intern"}
          title={title}
        />
        <div className="mt-5 space-y-4">
          {steps.map((item, idx) => (
              <div className="flex gap-3" key={item}>
                <div className="flex flex-col items-center">
                  <div
                    className={`h-5 w-5 rounded-full ${
                      idx < 3 ? "bg-emerald-400" : "bg-slate-200"
                    }`}
                  />
                  {idx < 3 ? <div className="h-10 w-px bg-slate-200" /> : null}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item}</p>
                  <p className="text-xs text-slate-500">
                    {mode === "roadmap"
                      ? "Rekomendasi belajar"
                      : "Evidence updated"}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  if (mode === "portfolio" || mode === "profile" || mode === "list") {
    return (
      <div className="min-h-[455px] flex-1">
        <div className="rounded-3xl bg-slate-950 p-4 text-white">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300" />
          <p className="mt-4 text-lg font-semibold">{title}</p>
          <p className="mt-1 text-xs text-slate-300">
            DKV student - Yogyakarta
          </p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-3">
            <p className="text-lg font-bold text-slate-950">6</p>
            <p className="text-[10px] text-slate-500">project</p>
          </div>
          <div className="rounded-2xl bg-white p-3">
            <p className="text-lg font-bold text-slate-950">4</p>
            <p className="text-[10px] text-slate-500">badge</p>
          </div>
        </div>
        <div className="mt-4 rounded-2xl bg-white p-3 shadow-sm">
          <p className="text-sm font-bold text-slate-950">
            Portfolio highlight
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Rebranding UMKM, mobile app concept, social campaign design.
          </p>
        </div>
        <div className="mt-4 space-y-2">
          <Bar width="w-11/12" />
          <Bar width="w-7/12" color="bg-emerald-300" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[455px] flex-1">
      <MockHeader title={title} />
      <div className="mt-5 space-y-3">
        <Bar width="w-11/12" />
        <Bar width="w-8/12" color="bg-emerald-300" />
        <Bar width="w-6/12" color="bg-cyan-300" />
      </div>
    </div>
  );
}

function MockHeader({
  title,
  subtitle = "SkillMatch ID",
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-slate-950" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-xs font-bold text-slate-950 shadow-sm">
          D
        </div>
      </div>
      <p className="text-lg font-bold leading-tight text-slate-950">{title}</p>
    </div>
  );
}

function InputMock({ label, value }: { label: string; value: string }) {
  return (
    <label className="block rounded-2xl border border-slate-200 bg-white px-4 py-3">
      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </span>
      <span className="mt-1 block text-sm font-semibold text-slate-950">
        {value}
      </span>
    </label>
  );
}

function ScoreRow({
  label,
  score,
  width,
  color = "bg-slate-950",
}: {
  label: string;
  score: string;
  width: "w-8/12" | "w-10/12" | "w-11/12";
  color?: "bg-slate-950" | "bg-emerald-300" | "bg-cyan-300";
}) {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between text-xs font-bold">
        <span className="text-slate-700">{label}</span>
        <span className="text-slate-950">{score}</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-100">
        <Bar color={color} width={width} />
      </div>
    </div>
  );
}

function JobCard({
  job,
  company,
  score,
  children,
}: {
  job: string;
  company: string;
  score: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-bold leading-5 text-slate-950">{job}</p>
          <p className="mt-1 text-xs text-slate-500">{company}</p>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
          {score}% match
        </span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-slate-100">
        <div className="h-full w-10/12 rounded-full bg-emerald-300" />
      </div>
      {children}
    </div>
  );
}

function AppBottomNav({ active }: { active: string }) {
  const items = [
    ["jobs", "Jobs"],
    ["portfolio", "Portfolio"],
    ["roadmap", "Plan"],
  ];

  return (
    <div className="mt-auto grid grid-cols-3 gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
      {items.map(([key, label]) => (
        <div
          className={`rounded-xl px-2 py-2 text-center text-[10px] font-bold ${
            active === key || (active === "detail" && key === "jobs")
              ? "bg-slate-950 text-white"
              : "text-slate-500"
          }`}
          key={key}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

function Bar({
  width,
  color = "bg-slate-950",
}: {
  width: "w-6/12" | "w-7/12" | "w-8/12" | "w-10/12" | "w-11/12";
  color?: "bg-slate-950" | "bg-emerald-300" | "bg-cyan-300";
}) {
  const widthClass = {
    "w-6/12": "w-6/12",
    "w-7/12": "w-7/12",
    "w-8/12": "w-8/12",
    "w-10/12": "w-10/12",
    "w-11/12": "w-11/12",
  }[width];
  const colorClass = {
    "bg-slate-950": "bg-slate-950",
    "bg-emerald-300": "bg-emerald-300",
    "bg-cyan-300": "bg-cyan-300",
  }[color];

  return <div className={`h-2 rounded-full ${widthClass} ${colorClass}`} />;
}

function DashboardPreview({
  card,
}: {
  card: (typeof dashboardCards)[number];
}) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_20px_55px_rgba(15,23,42,0.10)]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            {card.title}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            {card.metric}
          </h3>
        </div>
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
          HR
        </div>
      </div>
      <DashboardVisual mode={card.mode} />
      <p className="mt-5 text-sm leading-6 text-slate-600">{card.text}</p>
    </article>
  );
}

function DashboardVisual({ mode }: { mode: string }) {
  if (mode === "overview") {
    return (
      <div className="rounded-3xl bg-slate-950 p-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-white/10 p-3">
            <p className="text-xl font-bold text-white">42</p>
            <p className="text-[10px] text-cyan-100">screened</p>
          </div>
          <div className="rounded-2xl bg-emerald-300 p-3">
            <p className="text-xl font-bold text-slate-950">18</p>
            <p className="text-[10px] text-slate-700">top fit</p>
          </div>
          <div className="rounded-2xl bg-cyan-300 p-3">
            <p className="text-xl font-bold text-slate-950">6</p>
            <p className="text-[10px] text-slate-700">hired</p>
          </div>
        </div>
        <div className="mt-4 flex h-28 items-end gap-2">
          {[40, 70, 54, 88, 65, 96, 78].map((height) => (
            <div
              className="flex-1 rounded-t-xl bg-white/25"
              key={height}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (mode === "post") {
    return (
      <div className="rounded-3xl bg-cyan-50 p-4">
        <div className="h-10 rounded-2xl bg-white" />
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="h-20 rounded-2xl bg-white" />
          <div className="h-20 rounded-2xl bg-white" />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Figma", "UX Research", "Branding", "Portfolio", "Interview"].map((skill) => (
            <span
              className="rounded-full bg-slate-950 px-3 py-2 text-xs font-semibold text-white"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (mode === "list") {
    return (
      <div className="rounded-3xl bg-slate-50 p-4">
        {[92, 89, 84].map((score, idx) => (
          <div
            className="mb-3 flex items-center gap-3 rounded-2xl bg-white p-3 last:mb-0"
            key={score}
          >
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300" />
            <div className="min-w-0 flex-1">
              <div className="h-2 w-24 rounded-full bg-slate-900" />
              <div className="mt-2 h-2 w-16 rounded-full bg-slate-200" />
            </div>
            <span
              className={`rounded-full px-2 py-1 text-xs font-bold ${
                idx === 0
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {score}%
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-slate-950 p-4 text-white">
      <div className="flex items-center gap-3">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300" />
        <div>
          <div className="h-3 w-28 rounded-full bg-white" />
          <div className="mt-2 h-2 w-20 rounded-full bg-white/30" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white/10 p-3">
          <p className="text-lg font-bold">88</p>
          <p className="text-[10px] text-cyan-100">assessment</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-3">
          <p className="text-lg font-bold">92</p>
          <p className="text-[10px] text-cyan-100">role fit</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-2 w-11/12 rounded-full bg-emerald-300" />
        <div className="h-2 w-8/12 rounded-full bg-cyan-300" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8fbff] text-slate-950">
      <section className="relative min-h-[92vh] px-5 pb-12 pt-5 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.28),transparent_26%),radial-gradient(circle_at_88%_12%,rgba(14,165,233,0.25),transparent_28%),linear-gradient(135deg,#ffffff_0%,#eff6ff_46%,#ecfdf5_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f8fbff]" />
        <div className="relative mx-auto flex max-w-7xl flex-col">
          <nav className="flex items-center justify-between gap-3 rounded-full border border-white/70 bg-white/70 px-3 py-3 shadow-sm backdrop-blur-xl sm:px-4">
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
              <span className="sm:hidden">Prototype</span>
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
                graduate menganalisis skill, membangun portfolio otomatis, dan
                melamar pekerjaan yang paling sesuai dengan kemampuan mereka.
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
            eyebrow="Problem"
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
              Solution
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
            eyebrow="Product"
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

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="competitive">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Competitive Advantage"
            title="Mengapa SkillMatch ID berbeda?"
            text="SkillMatch ID tidak berhenti di posting lowongan. Platform ini memberi bukti skill, match score, dan evidence yang bisa dipakai kandidat maupun HR."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {competitiveAdvantages.map((item, idx) => (
              <article
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-100"
                key={item.traditional}
              >
                <div className="border-b border-slate-100 bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Traditional portal
                  </p>
                  <p className="mt-3 min-h-20 text-lg font-semibold leading-7 text-slate-800">
                    {item.traditional}
                  </p>
                </div>
                <div className="bg-[linear-gradient(145deg,#020617_0%,#0f172a_65%,#063b45_100%)] p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                    SkillMatch ID
                  </p>
                  <p className="mt-3 min-h-20 text-lg font-semibold leading-7">
                    {item.skillmatch}
                  </p>
                  <div className="mt-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100">
                    Advantage 0{idx + 1}
                  </div>
                </div>
              </article>
            ))}
          </div>
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
              Business Model
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
                  <h3 className="font-semibold text-slate-950">
                    {model.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {model.text}
                  </p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="prototype">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Product Prototype"
            title="Mobile app journey Dinda dari analisis skill sampai apply job."
            text="Setiap layar dibuat seperti mobile app nyata: status bar, input, job cards, skill chips, match score badge, progress bar, dan bottom navigation."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {prototypeScreens.map((screen, index) => (
              <MiniPhone index={index} key={screen.title} screen={screen} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="dashboard">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="HR Dashboard Preview"
            title="Bu Rina mendapat shortlist kandidat yang sudah punya evidence."
            text="Dashboard perusahaan dirancang untuk mempercepat screening intern dan fresh graduate tanpa kehilangan konteks skill, portfolio, dan assessment."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {dashboardCards.map((card) => (
              <DashboardPreview card={card} key={card.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="roadmap">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Roadmap"
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
                  Closing CTA
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
