"use client";

import { useState } from "react";

const demoScreens = [
  {
    key: "splash",
    label: "Splash",
    eyebrow: "Launch",
    title: "SkillMatch ID",
    subtitle: "Match Your Skills, Unlock Your Career",
    explanation: "Dinda masuk ke SkillMatch ID dan melihat value utama produk.",
  },
  {
    key: "onboarding",
    label: "Onboarding",
    eyebrow: "Intro",
    title: "Karier pertama yang lebih tepat",
    subtitle: "Analisis skill, validasi kemampuan, lalu temukan pekerjaan cocok.",
    explanation:
      "Dinda memahami alur dari analisis kemampuan sampai job matching.",
  },
  {
    key: "login",
    label: "Login",
    eyebrow: "Access",
    title: "Masuk ke akun Dinda",
    subtitle: "Gunakan email kampus untuk mulai membangun portfolio.",
    explanation: "Dinda masuk menggunakan akun kampus untuk membuat profil.",
  },
  {
    key: "assessment",
    label: "Skill Assessment",
    eyebrow: "Verified Skill",
    title: "Challenge UI/UX Designer",
    subtitle: "Selesaikan brief desain untuk memvalidasi skill.",
    explanation: "Dinda memverifikasi skill desainnya lewat AI Skill Assessment.",
  },
  {
    key: "analysis",
    label: "Skill Analysis",
    eyebrow: "Result",
    title: "Match Score 88%",
    subtitle: "Dinda cocok untuk Junior UI/UX Designer.",
    explanation:
      "Dinda mendapat Match Score, Verified Skill, dan rekomendasi pengembangan.",
  },
  {
    key: "match",
    label: "Job Match",
    eyebrow: "Matches",
    title: "Lowongan cocok",
    subtitle: "Diurutkan berdasarkan Match Score dan Verified Skill.",
    explanation:
      "Dinda melihat lowongan dengan Match Score tertinggi dan paling relevan.",
  },
  {
    key: "detail",
    label: "Job Detail",
    eyebrow: "Opening",
    title: "UI/UX Designer Intern",
    subtitle: "Jogja Digital Lab - Yogyakarta",
    explanation:
      "Dinda mengecek detail role, kebutuhan skill, dan bukti kecocokan.",
  },
  {
    key: "apply",
    label: "Apply",
    eyebrow: "Apply",
    title: "Kirim Auto Portfolio",
    subtitle: "Ringkasan match dan evidence dikirim ke Bu Rina.",
    explanation:
      "Dinda melamar menggunakan Verified Skill dan Auto Portfolio.",
  },
  {
    key: "tracking",
    label: "Tracking",
    eyebrow: "Progress",
    title: "Lamaran diproses",
    subtitle: "Dinda memantau status lamaran secara jelas.",
    explanation: "Dinda memantau status lamaran dari applied sampai interview.",
  },
  {
    key: "portfolio",
    label: "Auto Portfolio",
    eyebrow: "Portfolio",
    title: "Dinda Prameswari",
    subtitle: "Mahasiswa akhir DKV - Yogyakarta",
    explanation:
      "Dinda memiliki Auto Portfolio profesional dari assessment dan proyek.",
  },
  {
    key: "roadmap",
    label: "Career Roadmap",
    eyebrow: "Roadmap",
    title: "Rencana 4 minggu",
    subtitle: "Fokus UX research, design system, dan case study.",
    explanation:
      "Dinda mendapat langkah pengembangan skill berikutnya lewat Career Roadmap.",
  },
];

const jobMatches = [
  ["UI/UX Designer Intern", "Jogja Digital Lab", "92"],
  ["Social Media Designer", "Kreatif Nusantara", "87"],
  ["Junior Creative Designer", "Studio Loka", "84"],
  ["Digital Marketing Intern", "Sleman Startup Hub", "79"],
];

export default function PrototypeDemo() {
  const [active, setActive] = useState(0);
  const screen = demoScreens[active];

  const goTo = (offset: number) => {
    setActive((current) =>
      (current + offset + demoScreens.length) % demoScreens.length,
    );
  };

  return (
    <div className="w-full max-w-full overflow-hidden rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-4xl sm:border sm:border-slate-200 sm:bg-white/80 sm:p-4 sm:shadow-[0_28px_90px_rgba(15,23,42,0.12)] sm:backdrop-blur-xl md:p-6">
      <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div className="mx-auto w-full max-w-[300px] sm:max-w-[330px]">
          <div className="mb-4 flex min-h-11 items-center justify-between gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm sm:px-4">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
              Step {active + 1} of {demoScreens.length}
            </span>
            <span className="text-right text-xs font-bold text-slate-500">
              {screen.label}
            </span>
          </div>
          <IPhoneFrame screen={screen} />
        </div>

        <div className="min-w-0 rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-sm sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
          <div className="mb-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
            Interactive product demo
          </div>
          <h3 className="text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            Klik tab untuk mempresentasikan flow utama SkillMatch ID.
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Demo ini mengikuti perjalanan Dinda dari onboarding sampai Career
            Roadmap, lengkap dengan Verified Skill, Match Score, job cards,
            timeline lamaran, dan Auto Portfolio.
          </p>
          <div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
              Narasi screen aktif
            </p>
            <p className="mt-2 text-base font-semibold leading-7 text-slate-800">
              {screen.explanation}
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:flex">
            <button
              className="min-h-11 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200"
              onClick={() => goTo(-1)}
              type="button"
            >
              Sebelumnya
            </button>
            <button
              className="min-h-11 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-cyan-700"
              onClick={() => goTo(1)}
              type="button"
            >
              Berikutnya
            </button>
          </div>

          <div className="horizontal-scroll -mx-1 mt-7 flex gap-2 overflow-x-auto scroll-smooth px-1 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 xl:grid-cols-3">
            {demoScreens.map((item, index) => (
              <button
                className={`min-h-11 min-w-[8.75rem] shrink-0 whitespace-nowrap rounded-2xl border px-4 py-3 text-left text-sm font-bold transition hover:-translate-y-0.5 sm:min-w-0 sm:whitespace-normal ${
                  index === active
                    ? "border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/15"
                    : "border-slate-200 bg-white text-slate-700 hover:border-cyan-200"
                }`}
                key={item.key}
                onClick={() => setActive(index)}
                type="button"
              >
                <span className="block text-[10px] uppercase tracking-[0.18em] opacity-70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function IPhoneFrame({ screen }: { screen: (typeof demoScreens)[number] }) {
  return (
    <div className="w-full max-w-full rounded-4xl border-[7px] border-slate-950 bg-slate-950 p-1.5 shadow-[0_40px_100px_rgba(2,6,23,0.35)] sm:rounded-[2.5rem] sm:border-[9px] sm:p-2">
      <div className="relative aspect-[9/16] h-auto overflow-hidden rounded-[1.6rem] bg-slate-50 sm:aspect-[9/17] sm:rounded-4xl">
        <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-950 sm:h-7 sm:w-32" />
        <div className="flex h-full min-h-0 flex-col bg-[linear-gradient(145deg,#f8fafc_0%,#ecfeff_46%,#f0fdf4_100%)]">
          <StatusBar />
          <div className="flex items-center justify-between gap-3 px-4 pt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700 sm:px-5 sm:tracking-[0.2em]">
            <span>{screen.eyebrow}</span>
            <span>SkillMatch</span>
          </div>
          <div className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5">
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
              <ScreenContent screen={screen} />
            </div>
            {["splash", "onboarding", "login"].includes(screen.key) ? null : (
              <BottomNav active={screen.key} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pb-3 pt-4 text-[10px] font-bold text-slate-700 sm:px-6">
      <span>09:41</span>
      <div className="flex items-center gap-1">
        <span className="h-2 w-3 rounded-sm bg-slate-700" />
        <span className="h-2 w-3 rounded-sm bg-slate-700" />
        <span className="h-2 w-4 rounded-sm border border-slate-700">
          <span className="block h-full w-3 rounded-sm bg-slate-700" />
        </span>
      </div>
    </div>
  );
}

function ScreenContent({ screen }: { screen: (typeof demoScreens)[number] }) {
  if (screen.key === "splash") {
    return (
      <div className="flex flex-1 flex-col items-center justify-start pt-16 text-center sm:justify-center sm:pt-0">
        <LogoMark size="large" />
        <h4 className="mt-6 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
          {screen.title}
        </h4>
        <p className="mt-3 max-w-[220px] text-sm font-semibold leading-6 text-slate-600">
          {screen.subtitle}
        </p>
        <div className="mt-10 h-2 w-36 overflow-hidden rounded-full bg-slate-200">
          <div className="animate-load h-full w-2/3 rounded-full bg-emerald-400" />
        </div>
      </div>
    );
  }

  if (screen.key === "onboarding") {
    return (
      <div className="flex flex-1 flex-col">
        <div className="rounded-3xl bg-slate-950 p-4 text-white shadow-xl sm:p-5">
          <LogoMark />
          <h4 className="mt-6 text-xl font-black leading-tight sm:text-2xl">
            {screen.title}
          </h4>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {screen.subtitle}
          </p>
        </div>
        <div className="mt-5 grid gap-3">
          {["Analisis kemampuan", "Verified Skill Assessment", "Auto Portfolio"].map(
            (item) => (
              <div className="rounded-2xl bg-white p-4 shadow-sm" key={item}>
                <p className="text-sm font-bold text-slate-950">{item}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Dirancang untuk mahasiswa tingkat akhir dan fresh graduate.
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  if (screen.key === "login") {
    return (
      <div className="flex-1">
        <AppHeader title={screen.title} subtitle={screen.subtitle} />
        <div className="mt-6 space-y-3">
          <InputMock label="Email" value="dinda@student.ac.id" />
          <InputMock label="Password" value="••••••••" />
          <button className="h-12 w-full rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-lg">
            Masuk
          </button>
          <button className="h-11 w-full rounded-2xl border border-cyan-200 bg-cyan-50 text-sm font-bold text-cyan-700">
            Daftar Kandidat
          </button>
        </div>
      </div>
    );
  }

  if (screen.key === "assessment") {
    return (
      <div className="flex-1">
        <AppHeader title={screen.title} subtitle={screen.subtitle} />
        <div className="mt-5 rounded-3xl bg-white p-4 shadow-sm">
          <Progress width="w-7/12" />
          <p className="mt-4 text-sm font-bold leading-5 text-slate-950">
            Buat konsep onboarding untuk aplikasi karier mahasiswa.
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Nilai: user flow, visual hierarchy, copy CTA, dan rationale.
          </p>
          <div className="mt-4 space-y-3">
            {["Wireframe + rationale", "Visual references", "Copy CTA"].map(
              (item, index) => (
                <div
                  className={`rounded-2xl border p-3 text-xs font-bold ${
                    index === 0
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
      </div>
    );
  }

  if (screen.key === "analysis") {
    return (
      <div className="flex-1">
        <AppHeader title={screen.title} subtitle={screen.subtitle} />
        <div className="mt-5 grid place-items-center">
          <div className="conic-ring grid size-36 place-items-center rounded-full sm:size-40">
            <div className="grid size-28 place-items-center rounded-full bg-white sm:size-30">
              <div className="text-center">
                <p className="text-4xl font-black text-slate-950">88%</p>
                <p className="text-xs font-bold text-slate-500">
                  Match Score
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          <ScoreRow label="UI Design" score="92" width="w-11/12" />
          <ScoreRow label="Figma" score="90" width="w-10/12" />
          <ScoreRow label="Copywriting" score="82" width="w-8/12" />
        </div>
      </div>
    );
  }

  if (screen.key === "match") {
    return (
      <div className="flex-1">
        <AppHeader title={screen.title} subtitle={screen.subtitle} />
        <div className="mt-5 space-y-3">
          {jobMatches.map(([role, company, score]) => (
            <JobCard company={company} key={role} role={role} score={score} />
          ))}
        </div>
      </div>
    );
  }

  if (screen.key === "detail") {
    return (
      <div className="flex-1">
        <AppHeader title={screen.title} subtitle={screen.subtitle} />
        <div className="mt-5 rounded-3xl bg-white p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-black text-slate-950">
                UI/UX Designer Intern
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Jogja Digital Lab - Hybrid
              </p>
            </div>
            <Badge text="92%" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Figma", "UI Design", "Canva", "Copywriting"].map((skill) => (
              <SkillChip key={skill} text={skill} />
            ))}
          </div>
          <button className="mt-5 h-11 w-full rounded-2xl bg-slate-950 text-sm font-bold text-white">
            Simpan lowongan
          </button>
        </div>
      </div>
    );
  }

  if (screen.key === "apply") {
    return (
      <div className="flex-1">
        <AppHeader title={screen.title} subtitle={screen.subtitle} />
        <PortfolioCard />
        <button className="mt-5 h-12 w-full rounded-2xl bg-cyan-400 text-sm font-black text-slate-950 shadow-lg">
          Kirim ke Bu Rina
        </button>
      </div>
    );
  }

  if (screen.key === "tracking") {
    return (
      <div className="flex-1">
        <AppHeader title={screen.title} subtitle={screen.subtitle} />
        <Timeline
          items={["Applied", "Assessment reviewed", "Shortlist", "Interview"]}
        />
      </div>
    );
  }

  if (screen.key === "portfolio") {
    return (
      <div className="flex-1">
        <AppHeader title={screen.title} subtitle={screen.subtitle} />
        <PortfolioCard />
        <div className="mt-4 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2">
          <Metric value="6" label="Project" />
          <Metric value="4" label="Verified Badge" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <AppHeader title={screen.title} subtitle={screen.subtitle} />
      <Timeline
        items={["UX Research", "Case Study", "Design System", "Mock Interview"]}
      />
    </div>
  );
}

function AppHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <LogoMark />
        <div className="grid size-10 place-items-center rounded-full bg-white text-sm font-black text-slate-950 shadow-sm">
          D
        </div>
      </div>
      <h4 className="text-2xl font-black leading-tight tracking-tight text-slate-950">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
    </div>
  );
}

function LogoMark({ size = "normal" }: { size?: "normal" | "large" }) {
  const boxClass = size === "large" ? "size-20 rounded-3xl" : "size-11 rounded-2xl";
  const markClass = size === "large" ? "size-9 rounded-xl" : "size-5 rounded-lg";

  return (
    <div className={`grid place-items-center bg-slate-950 ${boxClass}`}>
      <div className={`bg-gradient-to-br from-cyan-300 to-emerald-300 ${markClass}`} />
    </div>
  );
}

function InputMock({ label, value }: { label: string; value: string }) {
  return (
    <label className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </span>
      <span className="mt-1 block text-sm font-bold text-slate-950">
        {value}
      </span>
    </label>
  );
}

function SkillChip({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700">
      {text}
    </span>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
      {text}
    </span>
  );
}

function JobCard({
  role,
  company,
  score,
}: {
  role: string;
  company: string;
  score: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-black leading-5 text-slate-950">{role}</p>
          <p className="mt-1 text-xs text-slate-500">{company}</p>
        </div>
        <Badge text={`${score}%`} />
      </div>
      <div className="mt-3 h-2 rounded-full bg-slate-100">
        <div className="h-full w-10/12 rounded-full bg-emerald-300" />
      </div>
    </div>
  );
}

function PortfolioCard() {
  return (
    <div className="mt-5 rounded-3xl bg-slate-950 p-4 text-white shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-black">Dinda Prameswari</p>
          <p className="mt-1 text-xs text-slate-300">
            DKV - Yogyakarta
          </p>
        </div>
        <Badge text="Verified" />
      </div>
      <div className="mt-5 rounded-2xl bg-white/10 p-3">
        <p className="text-xs font-bold text-cyan-100">Portfolio Highlight</p>
        <p className="mt-2 text-sm font-semibold leading-5">
          Rebranding UMKM, mobile app concept, social campaign design.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Figma", "UI Design", "Canva", "Copywriting"].map((skill) => (
          <span
            className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-white"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Timeline({ items }: { items: string[] }) {
  return (
    <div className="mt-6 space-y-4">
      {items.map((item, index) => (
        <div className="flex gap-3" key={item}>
          <div className="flex flex-col items-center">
            <div
              className={`size-5 rounded-full ${
                index < 3 ? "bg-emerald-400" : "bg-slate-200"
              }`}
            />
            {index < items.length - 1 ? (
              <div className="h-10 w-px bg-slate-200" />
            ) : null}
          </div>
          <div>
            <p className="text-sm font-black text-slate-950">{item}</p>
            <p className="text-xs text-slate-500">
              {index < 3 ? "Evidence updated" : "Next step"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <p className="text-2xl font-black text-slate-950">{value}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
    </div>
  );
}

function Progress({ width }: { width: "w-7/12" }) {
  return (
    <div className="h-2 rounded-full bg-slate-100">
      <div className={`h-full rounded-full bg-cyan-400 ${width}`} />
    </div>
  );
}

function ScoreRow({
  label,
  score,
  width,
}: {
  label: string;
  score: string;
  width: "w-8/12" | "w-10/12" | "w-11/12";
}) {
  const widthClass = {
    "w-8/12": "w-8/12",
    "w-10/12": "w-10/12",
    "w-11/12": "w-11/12",
  }[width];

  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between text-xs font-black">
        <span className="text-slate-700">{label}</span>
        <span className="text-slate-950">{score}</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-100">
        <div className={`h-full rounded-full bg-emerald-300 ${widthClass}`} />
      </div>
    </div>
  );
}

function BottomNav({ active }: { active: string }) {
  const activeKey =
    active === "portfolio" ? "portfolio" : active === "roadmap" ? "roadmap" : "jobs";

  return (
    <div className="mt-auto grid grid-cols-3 gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
      {[
        ["jobs", "Jobs"],
        ["portfolio", "Portfolio"],
        ["roadmap", "Roadmap"],
      ].map(([key, label]) => (
        <div
          className={`rounded-xl px-2 py-2 text-center text-[10px] font-black ${
            key === activeKey ? "bg-slate-950 text-white" : "text-slate-500"
          }`}
          key={key}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
