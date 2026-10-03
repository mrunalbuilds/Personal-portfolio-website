'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  DownloadSimple,
  ArrowRight,
  Code,
} from '@phosphor-icons/react';

/* ── motion helper ─────────────────────────────────────────────────── */

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.52, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── terminal components ────────────────────────────────────────────── */

function TerminalWindow({ children, command }: { children: React.ReactNode; command: string }) {
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/80">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        <span className="ml-3 text-xs text-zinc-600">bash</span>
      </div>
      <div className="px-5 py-4">
        <p className="text-zinc-500 mb-3">
          <span className="text-emerald-400">$</span> {command}
        </p>
        {children}
      </div>
    </div>
  );
}

/* ── data ───────────────────────────────────────────────────────────── */

const stats = [
  { value: '4+', label: 'Years in production' },
  { value: '100+', label: 'Services owned on AWS' },
  { value: '21k+', label: 'Cloud resources managed' },
  { value: '80%', label: 'Reduction in manual ops' },
];

const skillRows = [
  { ns: 'cloud',         name: 'aws',          age: '4y' },
  { ns: 'cloud',         name: 'eks',          age: '3y' },
  { ns: 'cloud',         name: 'aurora',       age: '3y' },
  { ns: 'cloud',         name: 'lambda',       age: '3y' },
  { ns: 'cloud',         name: 'bedrock',      age: '1y' },
  { ns: 'cloud',         name: 'cloudwatch',   age: '3y' },
  { ns: 'containers',    name: 'kubernetes',   age: '3y' },
  { ns: 'containers',    name: 'docker',       age: '4y' },
  { ns: 'containers',    name: 'argo-cd',      age: '2y' },
  { ns: 'containers',    name: 'helm',         age: '3y' },
  { ns: 'iac',           name: 'terraform',    age: '4y' },
  { ns: 'iac',           name: 'crossplane',   age: '2y' },
  { ns: 'iac',           name: 'kustomize',    age: '2y' },
  { ns: 'programming',   name: 'go',           age: '3y' },
  { ns: 'programming',   name: 'python',       age: '4y' },
  { ns: 'programming',   name: 'bash',         age: '4y' },
  { ns: 'programming',   name: 'sql',          age: '3y' },
  { ns: 'ci-cd',         name: 'gitlab-ci',    age: '3y' },
  { ns: 'ci-cd',         name: 'gitops',       age: '2y' },
  { ns: 'observability', name: 'datadog',      age: '3y' },
  { ns: 'observability', name: 'prometheus',   age: '2y' },
  { ns: 'observability', name: 'grafana',      age: '2y' },
  { ns: 'observability', name: 'pagerduty',    age: '2y' },
  { ns: 'ai-infra',      name: 'aws-bedrock',  age: '1y' },
  { ns: 'ai-infra',      name: 'rag',          age: '1y' },
  { ns: 'ai-infra',      name: 'langfuse',     age: '1y' },
];

const experience = [
  {
    role: 'Software Engineer',
    org: 'Mendix, Siemens Digital Industry Software',
    period: 'Jan 2025 - Present',
    accent: true,
    bullets: [
      'Led Crossplane migration managing 21,000+ AWS resources (RDS, Aurora, S3) with declarative compositions. Replaced imperative cloud broker; enabled self-service infrastructure provisioning for engineering teams.',
      'Built MxICE - production AI assistant infrastructure using AWS Bedrock, Lambda, DynamoDB, RAG content retrieval, and a custom GitLab MCP Proxy for AI agent integration. Deployed on ECS Fargate with Terraform IaC.',
      'Won Honorable Mention at MxHackathon (100+ participants) for an AI-powered customer support platform using LLMs.',
      'Mentor junior engineers on Kubernetes best practices, GitOps workflows, and infrastructure-as-code patterns. Conduct technical interviews and lead design reviews.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    org: 'Mendix, Siemens Digital Industry Software',
    period: 'Jan 2023 - Dec 2024',
    accent: false,
    bullets: [
      'Designed and executed multi-region Aurora GlobalCluster migration with cross-region replication, automated failover, and zero-downtime cutover.',
      'Developed custom Kubernetes Operators in Go for OIDC workflows, Crossplane composition functions, admission webhooks for RBAC enforcement, and reconciliation controllers across multi-region environments.',
      'Defined SLIs and SLOs across 100+ production services. Established proactive alerting with PagerDuty and built Datadog/Prometheus/Grafana observability dashboards. Achieved 80% reduction in manual operational tasks.',
      'Designed and maintained CI/CD pipelines using GitLab CI. Enabled multiple daily deployments with health-gated promotions and automated rollbacks.',
    ],
  },
  {
    role: 'Graduate Trainee Engineer',
    org: 'Mendix, Siemens Digital Industry Software',
    period: 'Jul 2022 - Dec 2022',
    accent: false,
    bullets: [
      'Provisioned and managed AWS cloud infrastructure using Terraform. Built reusable modules for EKS, RDS, and S3 deployments.',
      'Authored and maintained Helm charts for internal platform services across multiple environments.',
      'Configured GitLab CI/CD pipelines for automated build, test, and deployment workflows.',
    ],
  },
];

const featuredProject = {
  title: 'MxICE - AI Platform Infrastructure',
  period: '2025 - present',
  description:
    'Production AI assistant infrastructure: AWS Bedrock for inferencing, Lambda for event-driven compute, DynamoDB for session persistence, and a custom GitLab MCP Proxy enabling AI agent integration. Deployed on ECS Fargate with Terraform IaC. Includes RAG content retrieval and full Langfuse observability.',
  tags: ['Python', 'AWS Lambda', 'Bedrock', 'Terraform', 'ECS Fargate', 'DynamoDB', 'RAG'],
};

const projects = [
  {
    title: 'Crossplane Infrastructure Migration',
    description:
      'Migrated 21,000+ AWS resources (RDS, Aurora, S3) from imperative cloud broker to declarative Crossplane compositions. Reduced API load by 99%. GitOps-native self-service provisioning.',
    tags: ['Crossplane', 'Go', 'AWS RDS', 'Aurora'],
  },
  {
    title: 'AI-Powered Self-Review Assistant',
    description:
      'Aggregates GitLab, Jira, and Slack activity for 1:1 prep via Slack slash command. Deployed on EKS with CronJob background sync and DynamoDB TTL-managed storage.',
    tags: ['FastAPI', 'AWS Bedrock', 'DynamoDB', 'Kubernetes'],
  },
  {
    title: 'Multi-Region Aurora GlobalCluster',
    description:
      'Architected Aurora GlobalCluster with cross-region replication, automated failover, and zero-downtime migration from a single-region setup.',
    tags: ['Aurora', 'Terraform', 'AWS', 'Multi-region'],
  },
  {
    title: 'Kubernetes Operators in Go',
    description:
      'Custom Operators for OIDC workflows, Crossplane composition functions, admission webhooks for RBAC enforcement, and reconciliation controllers managing state across multi-region environments.',
    tags: ['Go', 'Kubernetes', 'OIDC', 'RBAC'],
  },
];

const hobbies = [
  {
    title: 'Reading',
    note: 'Non-fiction mostly, the occasional novel',
    image: '/books.png',
    tint: 'bg-blue-400/10',
    rotate: '-2deg',
  },
  {
    title: 'Running',
    note: '5k routes as thinking time',
    image: '/running.png',
    tint: 'bg-green-400/12',
    rotate: '1.5deg',
  },
  {
    title: 'Travel',
    note: 'New places, different perspectives',
    image: '/travel.jpg',
    tint: 'bg-orange-400/10',
    rotate: '-1deg',
  },
  {
    title: 'Badminton',
    note: 'On the court most weekends',
    image: '/badminton.jpeg',
    tint: 'bg-yellow-400/12',
    rotate: '2deg',
  },
];

/* ── page ───────────────────────────────────────────────────────────── */

export default function Home() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-zinc-950 text-zinc-100">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
          <span className="font-mono text-sm text-zinc-500 tracking-wider">mrunal.joshi</span>
          <div className="hidden md:flex items-center gap-8">
            {['Experience', 'Skills', 'Projects', 'Hobbies'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 px-4 py-2 text-sm border border-zinc-700 rounded-lg text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 transition-colors active:scale-[0.97]"
          >
            <DownloadSimple size={14} />
            Resume
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-[100dvh] flex items-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <p className="font-mono text-sm text-blue-400 uppercase tracking-[0.2em] mb-6">
                Software Engineer
              </p>
              <h1 className="text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.04] mb-8">
                Mrunal<br />Joshi
              </h1>

              {/* Terminal block */}
              <div className="mb-8">
                <TerminalWindow command="cat README.md">
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-zinc-100 font-semibold text-base"># Mrunal Joshi</p>
                      <p className="text-zinc-400 mt-0.5">Software Engineer</p>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      Building platform tooling at scale<br />with an AI-first mindset.
                    </p>
                    <div>
                      <p className="text-blue-400 text-xs mb-1">## Stack</p>
                      <p className="text-zinc-300">Go · Python · Kubernetes · Terraform · AWS</p>
                    </div>
                    <div>
                      <p className="text-blue-400 text-xs mb-1">## Status</p>
                      <p className="text-emerald-400">● Available for new opportunities</p>
                    </div>
                    <p className="text-zinc-700 pt-1 select-none">▋</p>
                  </div>
                </TerminalWindow>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={() => scrollTo('projects')}
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors active:scale-[0.98]"
                >
                  View Projects
                  <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="flex items-center gap-2 px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 rounded-lg text-sm font-medium transition-colors active:scale-[0.98]"
                >
                  <EnvelopeSimple size={15} />
                  Get in touch
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                Open to new opportunities
              </div>
            </div>

            {/* Right: photo */}
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="absolute -inset-6 bg-blue-500/8 rounded-3xl blur-2xl pointer-events-none" />
                <Image
                  src="/profile.jpg"
                  alt="Mrunal Joshi"
                  width={400}
                  height={400}
                  className="relative rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <p className="font-mono text-3xl font-bold text-blue-400">{s.value}</p>
              <p className="text-zinc-500 text-sm mt-1">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Experience */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <h2 className="text-4xl font-bold mb-16">Experience</h2>
          </Reveal>

          <div className="relative">
            <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-800" />
            <div className="space-y-14 pl-8">

              {experience.map((job) => (
                <Reveal key={job.role}>
                  <div className="relative">
                    <div className={`absolute -left-[33px] top-1.5 w-3 h-3 rounded-full ring-4 ring-zinc-950 ${job.accent ? 'bg-blue-500' : 'bg-zinc-600'}`} />
                    <div className="flex flex-wrap gap-3 justify-between items-start mb-5">
                      <div>
                        <h3 className="text-xl font-bold">{job.role}</h3>
                        <p className="text-blue-400 text-sm mt-1">{job.org}</p>
                      </div>
                      <span className="font-mono text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                          <span className="text-zinc-700 mt-1 shrink-0">-</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}

              <Reveal>
                <div className="relative">
                  <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-zinc-950" />
                  <div className="flex flex-wrap gap-3 justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">B.E. Computer Engineering</h3>
                      <p className="text-zinc-400 text-sm mt-1">Pune Institute of Computer Technology</p>
                    </div>
                    <span className="font-mono text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                      2018 - 2022
                    </span>
                  </div>
                  <p className="text-zinc-600 text-sm">CGPA: 9.25 / 10</p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="mt-16 pt-10 border-t border-zinc-900 flex flex-wrap gap-3">
              <span className="font-mono text-xs text-zinc-500 border border-zinc-800 rounded-full px-4 py-2">
                AWS Certified Cloud Practitioner
              </span>
              <span className="font-mono text-xs text-zinc-500 border border-zinc-800 rounded-full px-4 py-2">
                Honorable Mention, MxHackathon
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills — kubectl get style */}
      <section id="skills" className="py-24 bg-zinc-900/25">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <h2 className="text-4xl font-bold mb-16">Technical Skills</h2>
          </Reveal>
          <Reveal>
            <TerminalWindow command="kubectl get skills --all-namespaces">
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-mono min-w-[480px]">
                  <thead>
                    <tr className="text-zinc-500 border-b border-zinc-800">
                      <th className="text-left pb-3 pr-6 font-normal tracking-wider text-xs">NAMESPACE</th>
                      <th className="text-left pb-3 pr-6 font-normal tracking-wider text-xs">NAME</th>
                      <th className="text-left pb-3 pr-6 font-normal tracking-wider text-xs">STATUS</th>
                      <th className="text-left pb-3 font-normal tracking-wider text-xs">AGE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skillRows.map((row, i) => {
                      const prevNs = i > 0 ? skillRows[i - 1].ns : null;
                      return (
                        <tr
                          key={`${row.ns}-${row.name}`}
                          className={`border-b border-zinc-900/60 hover:bg-zinc-800/30 transition-colors ${prevNs !== row.ns && i !== 0 ? 'border-t border-t-zinc-800/60' : ''}`}
                        >
                          <td className="py-2 pr-6 text-zinc-500">{row.ns}</td>
                          <td className="py-2 pr-6 text-zinc-100">{row.name}</td>
                          <td className="py-2 pr-6">
                            <span className="text-emerald-400">Running</span>
                          </td>
                          <td className="py-2 text-zinc-500">{row.age}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </TerminalWindow>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl font-bold">Projects</h2>
              <a
                href="https://github.com/mrunalbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-100 transition-colors"
              >
                <GithubLogo size={15} />
                mrunalbuilds
                <ArrowUpRight size={13} />
              </a>
            </div>
          </Reveal>

          <Reveal>
            <a
              href="https://github.com/mrunalbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="group block mb-6 p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-blue-500/50 transition-all"
            >
              <div className="flex flex-wrap gap-4 items-start justify-between mb-3">
                <div>
                  <p className="font-mono text-xs text-blue-400 mb-2">{featuredProject.period}</p>
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                    {featuredProject.title}
                  </h3>
                </div>
                <ArrowUpRight size={20} className="text-zinc-700 group-hover:text-blue-400 transition-colors mt-1 shrink-0" />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-[80ch]">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <motion.a
                  href="https://github.com/mrunalbuilds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-semibold group-hover:text-blue-400 transition-colors pr-4 leading-snug">
                      {p.title}
                    </h3>
                    <ArrowUpRight size={15} className="text-zinc-700 group-hover:text-blue-400 transition-colors shrink-0 mt-0.5" />
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies — sticky notes */}
      <section id="hobbies" className="py-24 bg-zinc-900/25">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <h2 className="text-4xl font-bold mb-16">Away from the keyboard</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.07}>
                <div
                  className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-zinc-800"
                  style={{ transform: `rotate(${h.rotate})` }}
                >
                  <Image
                    src={h.image}
                    alt={h.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 ${h.tint} backdrop-blur-[1px]`} />
                  <div className="relative z-10 p-5 flex flex-col justify-end h-full bg-gradient-to-t from-zinc-950/80 to-transparent">
                    <p className="font-mono text-sm font-bold text-zinc-100 leading-tight">
                      {h.title}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{h.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl font-bold mb-4">Let's build something.</h2>
            <p className="text-zinc-400 mb-10">
              Open to software, platform, and infra engineering roles. Remote or on-site.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:mrunalj1120@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors active:scale-[0.98]"
              >
                <EnvelopeSimple size={15} />
                Email me
              </a>
              <a
                href="https://linkedin.com/in/mrunal-joshi2011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 rounded-lg text-sm font-medium transition-colors active:scale-[0.98]"
              >
                <LinkedinLogo size={15} />
                LinkedIn
              </a>
              <a
                href="https://github.com/mrunalbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 rounded-lg text-sm font-medium transition-colors active:scale-[0.98]"
              >
                <GithubLogo size={15} />
                GitHub
              </a>
              <a
                href="https://leetcode.com/u/mrunal240/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 rounded-lg text-sm font-medium transition-colors active:scale-[0.98]"
              >
                <Code size={15} />
                LeetCode
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap gap-4 items-center justify-between">
          <p className="font-mono text-xs text-zinc-700">Mrunal Joshi, 2026</p>
          <p className="font-mono text-xs text-zinc-700">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}