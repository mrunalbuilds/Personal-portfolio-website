'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Indicator */}
      <div className="fixed right-0 top-0 w-1 h-screen bg-gray-900 z-50">
        <div
          className="bg-blue-500 w-full transition-all duration-300"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-900 z-40">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Mrunal Joshi</h1>
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="inline-block px-4 py-2 border border-gray-700 rounded-lg text-gray-400 text-sm mb-8">
            Available for Work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I am <span className="text-blue-500">Mrunal Joshi</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I am a cloud platform engineer, who can build scalable and secure infrastructure that can operate effectively.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/resume.pdf"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
            <a
              href="https://github.com/mrunalbuilds"
              target="_blank"
              className="px-8 py-3 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mrunal-joshi2011"
              target="_blank"
              className="px-8 py-3 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-blue-500 text-sm font-semibold tracking-wider mb-4">ABOUT ME</p>
            <h2 className="text-5xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400 text-lg mb-8">Here's me, but in short.</p>
          </div>

          <div className="flex gap-3 flex-wrap justify-center mb-12">
            <span className="px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg text-sm bg-blue-500/5">
              Cloud Platform Engineering
            </span>
            <span className="px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg text-sm bg-blue-500/5">
              Infrastructure as Code
            </span>
            <span className="px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg text-sm bg-blue-500/5">
              DevOps
            </span>
            <span className="px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg text-sm bg-blue-500/5">
              AI/ML Infrastructure
            </span>
          </div>

          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-16">
            Cloud Platform Engineer with 4 years of experience, who can engineer systems that scale beautifully,
            follow modern-day security standards and operate with high reliability.
          </p>

          <h3 className="text-3xl font-bold mb-8">Core Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Scalability',
                description: 'Creating consistent and optimized systems that perform well under load'
              },
              {
                title: 'Security',
                description: 'Building systems that are security first'
              },
              {
                title: 'Communication',
                description: 'Ensuring that systems communicate properly'
              },
              {
                title: 'Engineering',
                description: 'Designing and testing systems in a disciplined and timely manner'
              }
            ].map((skill, i) => (
              <div
                key={i}
                className="p-6 border border-gray-800 rounded-xl bg-gray-900/30 hover:border-blue-500/30 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2 text-blue-400">{skill.title}</h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-4">Skills And Tech</h2>
          <p className="text-gray-400 text-lg mb-12">Here's all the tech I have used in my journey.</p>

          <h3 className="text-2xl font-bold text-blue-500 mb-8">Cloud & Infrastructure</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { name: 'AWS', level: 5 },
              { name: 'Kubernetes', level: 5 },
              { name: 'Terraform', level: 5 },
              { name: 'Docker', level: 5 },
              { name: 'ArgoCD', level: 4 },
              { name: 'Crossplane', level: 4 },
            ].map((skill, i) => (
              <div key={i} className="p-6 border border-gray-800 rounded-lg bg-gray-900/30">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index < skill.level ? 'bg-blue-500' : 'bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-blue-500 mb-8">Programming & Automation</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { name: 'Python', level: 5 },
              { name: 'Go', level: 4 },
              { name: 'Bash', level: 5 },
              { name: 'SQL', level: 4 },
            ].map((skill, i) => (
              <div key={i} className="p-6 border border-gray-800 rounded-lg bg-gray-900/30">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index < skill.level ? 'bg-blue-500' : 'bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-blue-500 mb-8">Observability & Tools</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Prometheus', level: 4 },
              { name: 'Grafana', level: 4 },
              { name: 'Datadog', level: 5 },
              { name: 'GitLab CI/CD', level: 5 },
            ].map((skill, i) => (
              <div key={i} className="p-6 border border-gray-800 rounded-lg bg-gray-900/30">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index < skill.level ? 'bg-blue-500' : 'bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-12">Experience</h2>

          <div className="space-y-8">
            <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/30">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Software Engineer</h3>
                  <p className="text-blue-500 text-lg">Mendix, Siemens Digital Industry Software</p>
                </div>
                <span className="text-gray-400">Jul 2022 — Present</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▹</span>
                  <span>Provision and manage multi-cloud infrastructure (AWS) using Terraform for 100+ services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▹</span>
                  <span>Built CI/CD pipelines with GitLab CI, reducing manual operations by 80%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▹</span>
                  <span>Led Crossplane migration for 21k+ AWS resources (RDS, Aurora, S3)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▹</span>
                  <span>Designed multi-region Aurora GlobalCluster with zero-downtime migration</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/30">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">Bachelor of Engineering</h3>
                  <p className="text-blue-500 text-lg">Pune Institute of Computer Technology</p>
                  <p className="text-gray-400 mt-2">Computer Engineering • CGPA: 9.25/10</p>
                </div>
                <span className="text-gray-400">2018 — 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="border border-gray-800 rounded-xl p-8 bg-gray-900/30 hover:border-blue-500/30 transition-colors">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12">
            Currently open to new opportunities in cloud platform engineering and DevOps roles.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="mailto:mrunalj1120@gmail.com"
              className="px-8 py-4 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/mrunal-joshi2011"
              target="_blank"
              className="px-8 py-4 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="tel:+919325614521"
              className="px-8 py-4 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              Phone
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-8 text-center text-gray-500">
          <p>&copy; 2026 Mrunal Joshi. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: 'MxICE - AI Platform Infrastructure',
    description: 'Production AI assistant infrastructure supporting AWS Bedrock inferencing with event-driven Lambda architecture and RAG content retrieval.',
    tags: ['AWS Lambda', 'Bedrock', 'Terraform', 'ECS', 'Python'],
  },
  {
    title: 'Platform Infrastructure Deployment',
    description: 'Manage platform infrastructure deployments across multiple Kubernetes clusters using ArgoCD ApplicationSets.',
    tags: ['Kubernetes', 'ArgoCD', 'Helm', 'GitOps'],
  },
  {
    title: 'Crossplane Infrastructure Migration',
    description: 'Led large-scale migration from imperative cloud broker to declarative Crossplane compositions for 21k+ AWS resources.',
    tags: ['Crossplane', 'Kubernetes', 'AWS', 'Go'],
  },
  {
    title: 'AI Self-Review Assistant',
    description: 'AI-powered tool aggregating user activity across GitLab, Jira, and Slack for performance reviews via Slack.',
    tags: ['FastAPI', 'Bedrock', 'DynamoDB', 'Python'],
  },
  {
    title: 'Knowledge Augmentor',
    description: 'Unified knowledge management system combining graph data and vector embeddings using Amazon Neptune.',
    tags: ['Neptune', 'Python', 'RAG', 'Gremlin'],
  },
  {
    title: 'Multi-Region Aurora GlobalCluster',
    description: 'Designed multi-region Aurora GlobalCluster architecture with cross-region replication and zero-downtime migration.',
    tags: ['Aurora', 'Terraform', 'AWS', 'RDS'],
  },
];
