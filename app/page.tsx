'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorFollowerPos, setCursorFollowerPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      setTimeout(() => {
        setCursorFollowerPos({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Custom Cursors */}
      <div
        className="cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: isHovering ? '40px' : '20px',
          height: isHovering ? '40px' : '20px',
        }}
      />
      <div
        className="cursor-follower"
        style={{
          left: `${cursorFollowerPos.x}px`,
          top: `${cursorFollowerPos.y}px`,
        }}
      />

      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-20 md:w-24 bg-black/50 backdrop-blur-md border-r border-white/10 z-40 flex flex-col items-center justify-between py-8">
        <a href="#home" className="text-2xl font-bold text-gradient">
          MJ
        </a>

        <nav className="flex flex-col gap-8">
          {[
            { id: 'home', icon: '🏠', label: 'Home' },
            { id: 'about', icon: '👤', label: 'About' },
            { id: 'experience', icon: '💼', label: 'Experience' },
            { id: 'projects', icon: '🚀', label: 'Projects' },
            { id: 'contact', icon: '📧', label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`group relative text-2xl transition-all hover:scale-125 ${
                activeSection === item.id ? 'text-blue-500' : 'text-gray-500'
              }`}
              title={item.label}
            >
              {item.icon}
              {activeSection === item.id && (
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex flex-col gap-4 text-gray-500">
          <a
            href="https://linkedin.com/in/mrunal-joshi2011"
            target="_blank"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="hover:text-blue-500 transition-colors text-xl"
          >
            💼
          </a>
          <a
            href="mailto:mrunalj1120@gmail.com"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="hover:text-blue-500 transition-colors text-xl"
          >
            ✉️
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-20 md:ml-24">
        {/* Hero Section - Split Screen */}
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

          <div className="container mx-auto px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text */}
              <div className="animate-slide-in-left">
                <div className="text-blue-500 text-lg mb-4 font-mono">Hi, I'm</div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                  <span className="text-white">Mrunal</span>
                  <br />
                  <span className="text-gradient">Joshi</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
                  Cloud Platform Engineer
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
                  Building production infrastructure and developer platforms on AWS.
                  Specializing in Kubernetes, Terraform, GitOps, and AI/ML infrastructure.
                </p>

                <div className="flex gap-4 mb-12">
                  <button
                    onClick={() => scrollToSection('contact')}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                  >
                    Get In Touch
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="px-8 py-4 glass hover:bg-white/10 text-white rounded-lg transition-all hover:scale-105"
                  >
                    View Projects
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: '4+', label: 'Years' },
                    { number: '100+', label: 'Services' },
                    { number: '21K+', label: 'Resources' },
                  ].map((stat, i) => (
                    <div key={i} className="glass p-4 rounded-lg">
                      <div className="text-3xl font-bold text-gradient">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="animate-slide-in-right flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-30 animate-float" />
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-20 blur-2xl" />
                    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/50 glow">
                      <Image
                        src="/profile.jpg"
                        alt="Mrunal Joshi"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Full Screen */}
        <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
          <div className="container mx-auto px-8 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
              About <span className="text-gradient">Me</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="animate-fade-in-up">
                  Cloud Platform Engineer with <span className="text-blue-400 font-semibold">4 years of experience</span> building
                  and operating production infrastructure at scale.
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Currently at <span className="text-blue-400 font-semibold">Mendix (Siemens)</span>, I manage multi-cloud
                  infrastructure for 100+ services, operate core platform technologies, and build automation to reduce
                  operational toil.
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  Recently led a large-scale Crossplane migration for 21k+ AWS resources and designed multi-region Aurora
                  GlobalCluster architecture with zero-downtime migration strategies.
                </p>
              </div>

              <div className="glass p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-2xl font-bold mb-6 text-gradient">Core Competencies</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'AWS', 'Kubernetes', 'Terraform', 'Argo CD', 'GitLab CI/CD',
                    'Python', 'Go', 'Docker', 'Crossplane', 'Prometheus',
                    'Grafana', 'Datadog', 'EKS', 'Lambda', 'Aurora'
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 rounded-lg transition-all hover:scale-105"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center py-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="container mx-auto px-8 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
              <span className="text-gradient">Experience</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="glass p-8 rounded-2xl hover:bg-white/10 transition-all group"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gradient transition-all">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 font-mono mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  {exp.description && (
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                  )}

                  {exp.highlights && (
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="text-blue-500 mr-3 mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - Grid Layout */}
        <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
          <div className="container mx-auto px-8 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
              Featured <span className="text-gradient">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group hover:scale-105"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-400">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Full Screen */}
        <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10" />

          <div className="container mx-auto px-8 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
              Currently open to new opportunities in cloud platform engineering and DevOps roles.
              Let's build something amazing together.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: '✉️',
                  title: 'Email',
                  value: 'mrunalj1120@gmail.com',
                  href: 'mailto:mrunalj1120@gmail.com'
                },
                {
                  icon: '💼',
                  title: 'LinkedIn',
                  value: 'Connect with me',
                  href: 'https://linkedin.com/in/mrunal-joshi2011'
                },
                {
                  icon: '📱',
                  title: 'Phone',
                  value: '+91-9325614521',
                  href: 'tel:+919325614521'
                },
              ].map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  target={contact.href.includes('http') ? '_blank' : undefined}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="glass p-8 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                    {contact.title}
                  </h3>
                  <p className="text-gray-400 break-all">{contact.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 border-t border-white/10">
          <div className="container mx-auto text-center text-gray-500">
            <p>&copy; 2026 Mrunal Joshi. Built with Next.js + Tailwind CSS.</p>
          </div>
        </footer>
      </main>
    </>
  );
}

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Mendix, Siemens Digital Industry Software',
    period: 'Jul 2022 — Present',
    highlights: [
      'Provision and manage multi-cloud infrastructure (AWS) using Terraform for 100+ services',
      'Built CI/CD pipelines with GitLab CI, reducing manual operations by 80%',
      'Led Crossplane migration for 21k+ AWS resources (RDS, Aurora, S3)',
      'Designed multi-region Aurora GlobalCluster with zero-downtime migration',
      'Support AI inferencing infrastructure: AWS Bedrock, Lambda, DynamoDB',
    ],
    tags: ['AWS', 'Kubernetes', 'Terraform', 'ArgoCD', 'Python', 'Go'],
  },
  {
    title: 'Bachelor of Engineering',
    company: 'Pune Institute of Computer Technology',
    period: '2018 — 2022',
    description: 'Computer Engineering • CGPA: 9.25/10',
    tags: ['Computer Engineering', 'Cloud Computing', 'DevOps'],
  },
];

const projects = [
  {
    icon: '🚀',
    title: 'MxICE - AI Platform',
    description: 'Production AI assistant infrastructure supporting AWS Bedrock inferencing.',
    features: [
      'GitLab MCP Proxy integration',
      'AWS ECS Fargate deployment',
      'Terraform IaC'
    ],
    tags: ['Lambda', 'Bedrock', 'Terraform', 'ECS'],
  },
  {
    icon: '☸️',
    title: 'Platform Infrastructure',
    description: 'Manage deployments across multiple Kubernetes clusters using ArgoCD.',
    features: [
      'Automated deployments',
      'Renovate integration',
      'MR diff previews'
    ],
    tags: ['Kubernetes', 'ArgoCD', 'Helm'],
  },
  {
    icon: '⚡',
    title: 'Crossplane Migration',
    description: 'Large-scale migration to declarative Crossplane compositions.',
    features: [
      '10K+ resources validated',
      'Custom K8s Operator',
      'Blue-green deployments'
    ],
    tags: ['Crossplane', 'K8s', 'Go'],
  },
  {
    icon: '🤖',
    title: 'AI Self-Review',
    description: 'AI-powered tool for performance reviews via Slack.',
    features: [
      'DynamoDB cache with TTL',
      'OAuth 2.0 integration',
      'EKS deployment'
    ],
    tags: ['FastAPI', 'Bedrock', 'DynamoDB'],
  },
  {
    icon: '🧠',
    title: 'Knowledge Augmentor',
    description: 'Unified knowledge management with graph and vector embeddings.',
    features: [
      'Hybrid semantic search',
      'Markdown chunking',
      'Neptune ML stack'
    ],
    tags: ['Neptune', 'RAG', 'Python'],
  },
  {
    icon: '🌍',
    title: 'Multi-Region Aurora',
    description: 'Multi-region Aurora GlobalCluster with cross-region replication.',
    features: [
      'Blue-green deployments',
      'Disaster recovery',
      'Zero-downtime migration'
    ],
    tags: ['Aurora', 'Terraform', 'AWS'],
  },
];
