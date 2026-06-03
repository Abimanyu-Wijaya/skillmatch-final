const navItems = [
  "Problem",
  "Solution",
  "Features",
  "Prototype",
  "Roadmap",
];

const problems = [
  {
    stat: "63%",
    title: "Fresh graduates feel under-matched",
    text: "Students often know their GPA and degree, but not which verified skills make them credible for specific roles.",
  },
  {
    stat: "4-8 weeks",
    title: "Hiring cycles move slowly",
    text: "Recruiters spend too much time screening resumes before seeing real evidence of ability.",
  },
  {
    stat: "Low signal",
    title: "Portfolios are inconsistent",
    text: "Final-year students rarely have a polished, role-specific portfolio ready when opportunities open.",
  },
];

const solutionSteps = [
  "Map academic, project, and self-declared skills",
  "Verify core abilities through adaptive assessment",
  "Recommend roles, learning gaps, and matched vacancies",
  "Generate portfolio proof for applications",
  "Surface verified candidates in an HR dashboard",
];

const features = [
  {
    title: "AI Skill Analyzer",
    text: "Turns projects, coursework, and experience into a structured competency graph.",
    tag: "Student insight",
  },
  {
    title: "Verified Assessment",
    text: "Role-based challenges validate ability before applications reach companies.",
    tag: "Proof layer",
  },
  {
    title: "Career Recommendation",
    text: "Suggests job families, missing skills, and next actions based on verified strengths.",
    tag: "AI guidance",
  },
  {
    title: "Auto Portfolio",
    text: "Builds a clean evidence page from assessments, projects, badges, and role fit.",
    tag: "Application asset",
  },
  {
    title: "Skill-Matched Jobs",
    text: "Ranks vacancies by verified fit instead of keyword-heavy resume parsing.",
    tag: "Better matching",
  },
  {
    title: "HR Match Dashboard",
    text: "Gives recruiters a ranked shortlist with competency detail and interview signals.",
    tag: "Recruiter workflow",
  },
];

const markets = [
  "Final-year university students",
  "Fresh graduates in Indonesia",
  "Career centers and faculties",
  "Companies hiring entry-level talent",
];

const businessModels = [
  {
    title: "B2B HR Subscription",
    text: "Companies pay monthly for verified candidate search, job posting, and match analytics.",
  },
  {
    title: "University Partnership",
    text: "Campuses license SkillMatch ID for graduate readiness, portfolio support, and placement reporting.",
  },
  {
    title: "Premium Candidate Tools",
    text: "Optional advanced portfolio exports, interview preparation, and personalized career coaching.",
  },
];

const prototypeScreens = [
  {
    title: "Splash screen",
    eyebrow: "Launch",
    mode: "brand",
    copy: "SkillMatch ID",
    detail: "Verified skills. Better careers.",
  },
  {
    title: "Onboarding",
    eyebrow: "Step 1",
    mode: "list",
    copy: "Discover roles that fit your proven skills.",
    detail: "Analyze, verify, match, and apply in one guided flow.",
  },
  {
    title: "Login/Register",
    eyebrow: "Access",
    mode: "form",
    copy: "Continue your career profile",
    detail: "Google, email, or campus account.",
  },
  {
    title: "Role selection",
    eyebrow: "Persona",
    mode: "choice",
    copy: "I am a student",
    detail: "Student, fresh graduate, or HR recruiter.",
  },
  {
    title: "Profile setup",
    eyebrow: "Profile",
    mode: "profile",
    copy: "Informatics graduate",
    detail: "Add campus, projects, target roles, and location.",
  },
  {
    title: "Skill selection",
    eyebrow: "Skills",
    mode: "chips",
    copy: "Select skills to verify",
    detail: "React, SQL, UI research, Python, teamwork.",
  },
  {
    title: "AI skill assessment",
    eyebrow: "Assessment",
    mode: "quiz",
    copy: "Build a data query for a hiring report.",
    detail: "Adaptive challenge, rubric, and timer.",
  },
  {
    title: "Skill analysis result",
    eyebrow: "Result",
    mode: "score",
    copy: "Product Analyst Fit",
    detail: "82 percent verified match with three skill gaps.",
  },
  {
    title: "Job match home",
    eyebrow: "Matches",
    mode: "jobs",
    copy: "12 verified-fit openings",
    detail: "Sorted by skill evidence, location, and growth path.",
  },
  {
    title: "Job detail",
    eyebrow: "Opening",
    mode: "detail",
    copy: "Junior Data Analyst",
    detail: "Your verified SQL and dashboard skills meet 8 of 10 signals.",
  },
  {
    title: "Apply job",
    eyebrow: "Apply",
    mode: "apply",
    copy: "Attach verified portfolio",
    detail: "AI prepares a concise match summary for HR.",
  },
  {
    title: "Application tracking",
    eyebrow: "Tracker",
    mode: "timeline",
    copy: "Screening complete",
    detail: "Assessment shared, interview pending.",
  },
  {
    title: "Auto portfolio",
    eyebrow: "Portfolio",
    mode: "portfolio",
    copy: "Alya Putri",
    detail: "Projects, badges, verified scores, and role fit.",
  },
  {
    title: "Career roadmap",
    eyebrow: "Roadmap",
    mode: "roadmap",
    copy: "From intern to analyst",
    detail: "Four-week skill plan for BI tools and case practice.",
  },
];

const dashboardCards = [
  {
    title: "HR dashboard",
    metric: "128 candidates",
    text: "Live funnel by role, match strength, assessment score, and hiring stage.",
    mode: "overview",
  },
  {
    title: "Post job",
    metric: "8 skill signals",
    text: "Define must-have abilities, weighted criteria, and assessment requirements.",
    mode: "post",
  },
  {
    title: "Candidate match list",
    metric: "92% top fit",
    text: "Ranked shortlist with verified badges, location, salary fit, and availability.",
    mode: "list",
  },
  {
    title: "Candidate detail",
    metric: "Evidence ready",
    text: "Portfolio, assessment rubric, projects, interview notes, and risk flags.",
    mode: "detail",
  },
];

const roadmap = [
  {
    phase: "Q1",
    title: "Campus Pilot",
    text: "Launch with selected Indonesian universities, career centers, and final-year cohorts.",
  },
  {
    phase: "Q2",
    title: "Assessment Library",
    text: "Expand verified skill tests for data, design, software, marketing, and operations roles.",
  },
  {
    phase: "Q3",
    title: "Employer Network",
    text: "Open HR dashboard access for companies hiring interns and fresh graduates.",
  },
  {
    phase: "Q4",
    title: "National Scale",
    text: "Add university analytics, portfolio exports, and regional job market intelligence.",
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
      <div className="mx-auto min-h-[520px] max-w-[250px] rounded-[2rem] border-[7px] border-slate-950 bg-slate-950 p-2 shadow-2xl">
        <div className="relative h-full min-h-[488px] overflow-hidden rounded-[1.55rem] bg-slate-50">
          <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-950" />
          <div className="flex h-full min-h-[488px] flex-col bg-[linear-gradient(145deg,#f8fafc_0%,#ecfeff_42%,#f0fdf4_100%)] px-4 pb-4 pt-10">
            <div className="mb-4 flex items-center justify-between text-[10px] font-bold text-slate-500">
              <span>{screen.eyebrow}</span>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <PhoneVisual mode={screen.mode} title={screen.copy} />
            <div className="mt-auto">
              <h3 className="text-lg font-semibold leading-tight text-slate-950">
                {screen.title}
              </h3>
              <p className="mt-2 text-sm leading-5 text-slate-600">
                {screen.detail}
              </p>
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
      <div className="flex min-h-72 flex-1 flex-col items-center justify-center text-center">
        <div className="mb-5 grid h-20 w-20 place-items-center rounded-3xl bg-slate-950 shadow-xl">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-300 via-emerald-300 to-white" />
        </div>
        <p className="text-2xl font-bold tracking-tight text-slate-950">
          {title}
        </p>
        <div className="mt-8 h-2 w-32 overflow-hidden rounded-full bg-slate-200">
          <div className="animate-load h-full w-2/3 rounded-full bg-emerald-400" />
        </div>
      </div>
    );
  }

  if (mode === "form") {
    return (
      <div className="min-h-72 flex-1">
        <MockHeader title={title} />
        <div className="mt-5 space-y-3">
          <div className="h-11 rounded-2xl border border-slate-200 bg-white" />
          <div className="h-11 rounded-2xl border border-slate-200 bg-white" />
          <div className="h-11 rounded-2xl bg-slate-950" />
          <div className="h-10 rounded-2xl border border-cyan-200 bg-cyan-50" />
        </div>
      </div>
    );
  }

  if (mode === "choice") {
    return (
      <div className="min-h-72 flex-1">
        <MockHeader title={title} />
        <div className="mt-5 space-y-3">
          {["Student", "Fresh graduate", "HR recruiter"].map((item, idx) => (
            <div
              className={`rounded-2xl border p-3 text-sm font-semibold ${
                idx === 0
                  ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                  : "border-slate-200 bg-white text-slate-600"
              }`}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === "chips") {
    return (
      <div className="min-h-72 flex-1">
        <MockHeader title={title} />
        <div className="mt-5 flex flex-wrap gap-2">
          {["SQL", "React", "UX", "Python", "BI", "Teamwork", "Excel"].map(
            (item, idx) => (
              <span
                className={`rounded-full px-3 py-2 text-xs font-semibold ${
                  idx < 5
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
          AI suggests verifying SQL and dashboard storytelling first.
        </div>
      </div>
    );
  }

  if (mode === "quiz") {
    return (
      <div className="min-h-72 flex-1">
        <MockHeader title={title} />
        <div className="mt-4 rounded-3xl bg-white p-4 shadow-sm">
          <div className="mb-4 h-2 rounded-full bg-slate-100">
            <div className="h-full w-7/12 rounded-full bg-cyan-400" />
          </div>
          <div className="space-y-3">
            <div className="h-16 rounded-2xl bg-slate-100" />
            <div className="h-10 rounded-2xl border-2 border-emerald-300 bg-emerald-50" />
            <div className="h-10 rounded-2xl border border-slate-200 bg-white" />
          </div>
        </div>
      </div>
    );
  }

  if (mode === "score") {
    return (
      <div className="min-h-72 flex-1">
        <MockHeader title={title} />
        <div className="mt-6 grid place-items-center">
          <div className="conic-ring grid h-36 w-36 place-items-center rounded-full text-center">
            <div className="grid h-28 w-28 place-items-center rounded-full bg-white">
              <div>
                <p className="text-3xl font-bold text-slate-950">82%</p>
                <p className="text-xs text-slate-500">verified</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <Bar width="w-10/12" />
          <Bar width="w-8/12" color="bg-emerald-300" />
          <Bar width="w-6/12" color="bg-cyan-300" />
        </div>
      </div>
    );
  }

  if (mode === "jobs" || mode === "detail" || mode === "apply") {
    return (
      <div className="min-h-72 flex-1">
        <MockHeader title={title} />
        <div className="mt-4 space-y-3">
          {[92, 86, 79].map((score, idx) => (
            <div className="rounded-2xl bg-white p-3 shadow-sm" key={score}>
              <div className="flex items-center justify-between">
                <div className="h-8 w-8 rounded-xl bg-slate-950" />
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
                  {score}% fit
                </span>
              </div>
              <div className="mt-3 h-2 w-28 rounded-full bg-slate-200" />
              <div className="mt-2 h-2 w-20 rounded-full bg-slate-100" />
              {idx === 0 && mode === "apply" ? (
                <div className="mt-3 h-8 rounded-xl bg-cyan-400" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === "timeline" || mode === "roadmap") {
    return (
      <div className="min-h-72 flex-1">
        <MockHeader title={title} />
        <div className="mt-5 space-y-4">
          {["Profile", "Assessment", "Shortlist", "Interview"].map(
            (item, idx) => (
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
                  <p className="text-xs text-slate-500">Evidence updated</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  if (mode === "portfolio" || mode === "profile" || mode === "list") {
    return (
      <div className="min-h-72 flex-1">
        <div className="rounded-3xl bg-slate-950 p-4 text-white">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300" />
          <p className="mt-4 text-lg font-semibold">{title}</p>
          <p className="mt-1 text-xs text-slate-300">Verified portfolio</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-3">
            <p className="text-lg font-bold text-slate-950">5</p>
            <p className="text-[10px] text-slate-500">badges</p>
          </div>
          <div className="rounded-2xl bg-white p-3">
            <p className="text-lg font-bold text-slate-950">12</p>
            <p className="text-[10px] text-slate-500">projects</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <Bar width="w-11/12" />
          <Bar width="w-7/12" color="bg-emerald-300" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-72 flex-1">
      <MockHeader title={title} />
      <div className="mt-5 space-y-3">
        <Bar width="w-11/12" />
        <Bar width="w-8/12" color="bg-emerald-300" />
        <Bar width="w-6/12" color="bg-cyan-300" />
      </div>
    </div>
  );
}

function MockHeader({ title }: { title: string }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="h-9 w-9 rounded-2xl bg-slate-950" />
        <div className="h-9 w-9 rounded-full bg-white shadow-sm" />
      </div>
      <p className="text-lg font-bold leading-tight text-slate-950">{title}</p>
    </div>
  );
}

function Bar({
  width,
  color = "bg-slate-950",
}: {
  width: string;
  color?: string;
}) {
  return <div className={`h-2 rounded-full ${width} ${color}`} />;
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
          {["SQL", "BI", "Research", "Excel", "Storytelling"].map((skill) => (
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
    <main className="min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950">
      <section className="relative min-h-[92vh] px-5 pb-12 pt-5 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.28),transparent_26%),radial-gradient(circle_at_88%_12%,rgba(14,165,233,0.25),transparent_28%),linear-gradient(135deg,#ffffff_0%,#eff6ff_46%,#ecfdf5_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f8fbff]" />
        <div className="relative mx-auto flex max-w-7xl flex-col">
          <nav className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-xl">
            <a className="flex items-center gap-3" href="#top">
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
                  href={`#${item.toLowerCase()}`}
                  key={item}
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-cyan-700"
              href="#prototype"
            >
              View prototype
            </a>
          </nav>

          <div
            className="grid min-h-[calc(92vh-92px)] items-center gap-12 py-12 lg:grid-cols-[1.03fr_0.97fr]"
            id="top"
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                AI-powered recruitment for Indonesian graduates
              </div>
              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Verified skills become better career matches.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 md:text-xl">
                SkillMatch ID helps final-year students and fresh graduates
                analyze ability, prove competencies, build a portfolio, and
                apply to jobs that match what they can actually do.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="rounded-full bg-slate-950 px-6 py-4 text-center text-sm font-bold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-cyan-700"
                  href="#solution"
                >
                  Explore the pitch
                </a>
                <a
                  className="rounded-full border border-slate-200 bg-white px-6 py-4 text-center text-sm font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
                  href="#dashboard"
                >
                  See HR dashboard
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                {[
                  ["82%", "skill-fit signal"],
                  ["14", "prototype screens"],
                  ["2-sided", "student and HR"],
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
                  <p className="text-sm text-cyan-100">Recommended role</p>
                  <h2 className="mt-2 text-3xl font-semibold">
                    Junior Product Analyst
                  </h2>
                  <div className="mt-8 grid h-40 place-items-center rounded-full bg-[conic-gradient(from_90deg,#34d399_0_78%,rgba(255,255,255,0.15)_78%_100%)]">
                    <div className="grid h-28 w-28 place-items-center rounded-full bg-slate-950">
                      <div className="text-center">
                        <p className="text-3xl font-bold">78%</p>
                        <p className="text-xs text-cyan-100">match</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    ["Verified SQL", "91", "bg-emerald-300"],
                    ["Dashboard storytelling", "86", "bg-cyan-300"],
                    ["User research", "74", "bg-lime-300"],
                    ["Python basics", "68", "bg-sky-300"],
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
            title="Entry-level hiring still relies on noisy signals."
            text="Students need a clearer way to prove what they can do, while companies need faster evidence-based screening before interviews."
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
              A verified skill graph connecting students to companies.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              SkillMatch ID creates a shared language for capability: students
              receive guidance and proof, while HR teams see ranked talent based
              on evidence.
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
            eyebrow="Key features"
            title="One flow from self-discovery to verified hiring."
            text="Every feature stays focused on skill-based recruitment, career readiness, and faster entry-level hiring decisions."
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

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="target-market">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <GlassPanel className="p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600">
              Target market
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Built for Indonesia's graduate talent pipeline.
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
              Business model
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Multiple revenue paths without diluting the product.
            </h2>
            <div className="mt-7 space-y-4">
              {businessModels.map((model) => (
                <div className="rounded-3xl bg-white p-4" key={model.title}>
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
            eyebrow="Product prototype"
            title="A complete student mobile journey."
            text="The prototype showcases the core app flow from first launch to career roadmap, portfolio proof, and job applications."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {prototypeScreens.map((screen, index) => (
              <MiniPhone index={index} key={screen.title} screen={screen} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="dashboard">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="HR dashboard preview"
            title="Recruiters see verified fit before scheduling interviews."
            text="The company-side product is designed for fast entry-level hiring decisions with clear evidence and ranked candidates."
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
            title="Focused milestones toward national graduate matching."
            text="A practical path from university validation to employer adoption and broader Indonesian labor-market intelligence."
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
                  SkillMatch ID turns graduate potential into verified hiring
                  confidence.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Pilot with campuses, validate with employers, and help
                  students enter the workforce with evidence they can trust.
                </p>
              </div>
              <a
                className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-200"
                href="#top"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
