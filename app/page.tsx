'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold text-gradient">
              MJ
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-up">
              <p className="text-blue-600 font-semibold mb-4">Hi, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Mrunal Joshi
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                Cloud Platform Engineer
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I build production infrastructure and developer platforms on AWS.
                Specializing in Kubernetes, Terraform, GitOps, and AI/ML infrastructure.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                >
                  View My Work
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">4+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Services Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">21K+</div>
                  <div className="text-sm text-gray-600">Resources Migrated</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative animate-fade-in">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-30 animate-float"></div>
                <div className="relative rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="Mrunal Joshi"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Cloud Platform Engineer with <strong>4 years of experience</strong> building and operating
                production infrastructure at scale.
              </p>
              <p>
                Currently at <strong>Mendix (Siemens)</strong>, I manage multi-cloud infrastructure for 100+ services,
                operate core platform technologies, and build automation to reduce operational toil. I recently led a
                large-scale Crossplane migration for 21k+ AWS resources and designed multi-region Aurora GlobalCluster
                architecture.
              </p>
              <p>
                I specialize in Kubernetes (EKS), Infrastructure as Code (Terraform, Crossplane), GitOps workflows
                (Argo CD), and supporting AI/ML workload deployment. Passionate about building reliable, scalable
                platforms that empower development teams.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Kubernetes', 'Terraform', 'Argo CD', 'GitLab CI/CD', 'Python', 'Go', 'Docker', 'Crossplane', 'Prometheus', 'Grafana', 'Datadog'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
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
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>

          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Software Engineer</h3>
                  <p className="text-blue-600 font-semibold">Mendix, Siemens Digital Industry Software</p>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">Jul 2022 — Present</span>
              </div>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span>Provision and manage multi-cloud infrastructure (AWS) using Terraform for 100+ services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span>Built CI/CD pipelines with GitLab CI, reducing manual operations by 80%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span>Led Crossplane migration for 21k+ AWS resources (RDS, Aurora, S3)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span>Designed multi-region Aurora GlobalCluster with zero-downtime migration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span>Support AI inferencing infrastructure: AWS Bedrock, Lambda, DynamoDB</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Kubernetes', 'Terraform', 'ArgoCD', 'Python', 'Go'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Bachelor of Engineering</h3>
                  <p className="text-blue-600 font-semibold">Pune Institute of Computer Technology</p>
                  <p className="text-gray-600 mt-2">Computer Engineering • CGPA: 9.25/10</p>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">2018 — 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg card-hover">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="space-y-1 mb-4 text-sm text-gray-600">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-12 text-blue-100">
            Currently open to new opportunities in cloud platform engineering and DevOps roles.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:mrunalj1120@gmail.com"
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all card-hover"
            >
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-blue-100">mrunalj1120@gmail.com</p>
            </a>
            <a
              href="https://linkedin.com/in/mrunal-joshi2011"
              target="_blank"
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all card-hover"
            >
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-blue-100">Connect with me</p>
            </a>
            <a
              href="tel:+919325614521"
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all card-hover"
            >
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-blue-100">+91-9325614521</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2026 Mrunal Joshi. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    icon: '🚀',
    title: 'MxICE - AI Platform Infrastructure',
    description: 'Production AI assistant infrastructure supporting AWS Bedrock inferencing with event-driven Lambda architecture.',
    features: [
      'Built GitLab MCP Proxy for AI integration',
      'Deployed on AWS ECS Fargate',
      'Full Terraform IaC deployment',
    ],
    tags: ['AWS Lambda', 'Bedrock', 'Terraform', 'ECS', 'Python'],
  },
  {
    icon: '☸️',
    title: 'Platform Infrastructure Deployment',
    description: 'Manage platform deployments across multiple Kubernetes clusters using ArgoCD ApplicationSets.',
    features: [
      'Automated deployment hierarchical values',
      'Integrated Renovate for versions',
      'Built diff preview for MR validation',
    ],
    tags: ['Kubernetes', 'ArgoCD', 'Helm', 'GitOps'],
  },
  {
    icon: '⚡',
    title: 'Crossplane Infrastructure Migration',
    description: 'Led large-scale migration from imperative cloud broker to declarative Crossplane compositions.',
    features: [
      'Validated 10,000+ resources in production',
      'Custom Kubernetes Operator in Go',
      'Blue-green deployments with auto-rollback',
    ],
    tags: ['Crossplane', 'Kubernetes', 'AWS', 'Go'],
  },
  {
    icon: '🤖',
    title: 'AI Self-Review Assistant',
    description: 'AI-powered tool aggregating user activity across GitLab, Jira, and Slack for performance reviews.',
    features: [
      '30-day DynamoDB cache with TTL',
      'OAuth 2.0 with encrypted tokens',
      'Deployed on EKS with CronJob sync',
    ],
    tags: ['FastAPI', 'Bedrock', 'DynamoDB', 'Python'],
  },
  {
    icon: '🧠',
    title: 'Knowledge Augmentor',
    description: 'Unified knowledge management system combining graph data and vector embeddings using Amazon Neptune.',
    features: [
      'Hybrid search with semantic similarity',
      'Automatic markdown chunking',
      'Migrated to unified Neptune ML stack',
    ],
    tags: ['Neptune', 'Python', 'RAG', 'Gremlin'],
  },
  {
    icon: '🌍',
    title: 'Multi-Region Aurora GlobalCluster',
    description: 'Designed multi-region Aurora GlobalCluster architecture with cross-region replication.',
    features: [
      'Blue-green deployments',
      'Cross-region disaster recovery',
      'Zero-downtime migrations',
    ],
    tags: ['Aurora', 'Terraform', 'AWS', 'RDS'],
  },
];
