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
            <div className="flex items-center gap-3">
              <Image
                src="/profile.jpg"
                alt="Mrunal Joshi"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h1 className="text-xl font-bold">Mrunal Joshi</h1>
            </div>
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-8">
                {['Skills', 'Projects', 'Experience', 'Testimonials'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                Contact Me
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Available for work
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                Software Engineer.
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-xl">
                Hi, I'm Mrunal Joshi, a software engineer who builds scalable, secure systems.
                I focus on cloud infrastructure, modern automation, and reliable software delivery.
              </p>
              <div className="flex gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:border-white hover:text-white transition-colors"
                >
                  See my works
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  Contact Me
                  <span>→</span>
                </button>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center border border-blue-500/30">
                  <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center border border-blue-500/30">
                  <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400/20 to-orange-600/20 flex items-center justify-center border border-orange-500/30">
                  <svg className="w-8 h-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                  </svg>
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 flex items-center justify-center border border-cyan-500/30">
                  <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/profile.jpg"
                alt="Mrunal Joshi"
                width={500}
                height={500}
                className="rounded-2xl"
                priority
              />
            </div>
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
              Software Engineering
            </span>
            <span className="px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg text-sm bg-blue-500/5">
              Cloud Infrastructure
            </span>
            <span className="px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg text-sm bg-blue-500/5">
              DevOps & Automation
            </span>
            <span className="px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg text-sm bg-blue-500/5">
              Distributed Systems
            </span>
          </div>

          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-16">
            Software Engineer with 4 years of experience building scalable systems.
            I specialize in cloud infrastructure, automation, and reliable software delivery.
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

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/30">
              <p className="text-gray-300 mb-6 text-lg">
                "Mrunal's expertise in cloud infrastructure and automation has been invaluable to our team.
                His ability to design and implement scalable solutions is outstanding."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full"></div>
                <div>
                  <p className="font-semibold">Team Lead</p>
                  <p className="text-gray-400 text-sm">Mendix, Siemens</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/30">
              <p className="text-gray-300 mb-6 text-lg">
                "A reliable engineer who consistently delivers high-quality work.
                His knowledge of Kubernetes and AWS has helped us build robust infrastructure."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full"></div>
                <div>
                  <p className="font-semibold">Senior Engineer</p>
                  <p className="text-gray-400 text-sm">Mendix, Siemens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12">
            Currently open to new opportunities in software engineering and cloud infrastructure roles.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="mailto:mrunalj1120@gmail.com"
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/mrunal-joshi2011"
              target="_blank"
              className="px-8 py-4 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:border-white hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mrunalbuilds"
              target="_blank"
              className="px-8 py-4 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:border-white hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-8 text-center text-gray-500">
          <p>&copy; 2026 Mrunal Joshi. Software Engineer. Built with Next.js and Tailwind CSS.</p>
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
