import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Linkedin, 
  Mail, 
  ChevronRight, 
  Award, 
  ExternalLink,
  Globe,
  Download,
  Terminal,
  Settings,
  ShieldCheck,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [language, setLanguage] = useState<Language>('es');

  const data = PORTFOLIO_DATA[language];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');

  const skillCategories = {
    languages: { icon: <Terminal size={18} />, label: language === 'es' ? 'Lenguajes' : 'Languages' },
    tools: { icon: <Settings size={18} />, label: language === 'es' ? 'Herramientas' : 'Tools' },
    qa: { icon: <ShieldCheck size={18} />, label: 'QA / Testing' },
    soft: { icon: <Star size={18} />, label: 'Soft Skills' }
  };

  const groupedSkills = data.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof data.skills>);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-[#0f172a] text-slate-100' : 'bg-[#f0f7ff] text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isDarkMode ? 'bg-[#0f172a]/70 border-slate-800' : 'bg-white/70 border-blue-100'} border-b glass h-20`}>
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-default"
          >
            <img 
              src="Logo.png" 
              alt="Logo LM" 
              className="w-10 h-10 rounded-xl shadow-lg shadow-blue-500/30 group-hover:rotate-6 transition-transform object-cover bg-white"
            />
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">Leonardo E. Muñoz</span>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className={`px-4 py-2 rounded-xl transition-all hover:scale-105 flex items-center gap-2 text-sm font-bold ${isDarkMode ? 'hover:bg-slate-800 bg-slate-900/50 text-slate-300' : 'hover:bg-blue-100 bg-white border border-blue-200 text-blue-900 shadow-sm'}`}
            >
              <Globe size={16} className="text-blue-600" />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all hover:scale-110 ${isDarkMode ? 'hover:bg-slate-800 bg-slate-900/50' : 'hover:bg-blue-100 bg-white border border-blue-200 shadow-md shadow-blue-500/10'}`}
            >
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-700" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-40 pb-20">
        
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold transition-all ${isDarkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-white text-blue-700 border border-blue-200 shadow-sm'}`}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {language === 'es' ? 'Analista Programador' : 'Programming Analyst'}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              {language === 'es' ? '¡Hola! Soy ' : "Hi! I'm "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400">
                Leonardo E. Muñoz
              </span>
            </h1>
            <p className={`text-xl md:text-2xl font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>
              Analista Programador Computacional de Chile <sub className="text-xs uppercase opacity-60">cl.</sub>
              <br />
              <span className="text-lg opacity-80 mt-2 block">{language === 'es' ? 'Especializado en QA y Mejora Continua' : 'Specialized in QA & Continuous Improvement'}</span>
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <a 
                href="#contact" 
                className={`px-10 py-4 font-bold rounded-2xl shadow-xl transition-all hover:-translate-y-1 active:scale-95 text-lg ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30'}`}
              >
                {language === 'es' ? 'Contáctame' : 'Contact Me'}
              </a>
              <div className="flex gap-4">
                <a href={data.linkedin} target="_blank" className={`p-4 rounded-2xl border transition-all hover:-translate-y-1 ${isDarkMode ? 'border-slate-800 bg-slate-900/50 hover:bg-slate-800' : 'border-blue-200 bg-white hover:bg-blue-50 shadow-lg shadow-blue-500/5'}`}>
                  <Linkedin size={26} className="text-blue-600" />
                </a>
                <a href={`mailto:${data.email}`} className={`p-4 rounded-2xl border transition-all hover:-translate-y-1 ${isDarkMode ? 'border-slate-800 bg-slate-900/50 hover:bg-slate-800' : 'border-blue-200 bg-white hover:bg-blue-50 shadow-lg shadow-blue-500/5'}`}>
                  <Mail size={26} className="text-rose-500" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className={`absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur-2xl opacity-20 transition duration-1000`}></div>
            <div className={`relative w-72 h-80 md:w-[420px] md:h-[500px] rounded-[2.5rem] overflow-hidden border-4 p-2 transition-transform duration-700 hover:scale-[1.02] shadow-2xl ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100 shadow-blue-200/50'}`}>
               <img 
                 src="/Leonardo.png" 
                 alt="Leonardo E. Muñoz" 
                 className="w-full h-full object-cover rounded-[2rem] bg-slate-200"
                 onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.style.display = 'none';
                 }} 
               />
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-40">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-16 h-1 bg-blue-600 rounded-full mb-6"></div>
            <h2 className="text-4xl font-extrabold mb-4">{language === 'es' ? 'Habilidades' : 'Skills'}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.div 
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl border transition-all ${isDarkMode ? 'bg-[#1e293b]/30 border-slate-800 hover:border-blue-500/20' : 'bg-white border-blue-100 shadow-lg shadow-blue-500/5 hover:shadow-xl'}`}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-extrabold text-lg">{category.label}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {groupedSkills[key]?.map((skill, i) => (
                    <div 
                      key={i}
                      className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-transform hover:scale-105 ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-blue-50/50 text-blue-900 border border-blue-100 shadow-sm'}`}
                    >
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-40">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-16 h-1 bg-indigo-600 rounded-full mb-6"></div>
            <h2 className="text-4xl font-extrabold mb-4">{language === 'es' ? 'Trayectoria Profesional' : 'Professional Journey'}</h2>
          </div>
          
          <div className="space-y-12 max-w-4xl mx-auto relative">
             <div className={`absolute left-[40px] top-4 bottom-4 w-1 hidden md:block rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-blue-100'}`}></div>
             
             {data.experience.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-0 md:pl-24"
              >
                <div className={`absolute left-[34px] top-10 w-4 h-4 rounded-full border-4 z-10 hidden md:block ${isDarkMode ? 'bg-blue-600 border-[#0f172a]' : 'bg-blue-600 border-blue-50'}`}></div>
                
                <div className={`p-8 md:p-10 rounded-3xl border transition-all flex flex-col md:flex-row gap-8 items-start ${isDarkMode ? 'bg-[#1e293b]/20 border-slate-800 hover:border-blue-500/30' : 'bg-white border-blue-100 shadow-xl shadow-blue-200/20 hover:border-blue-300'}`}>
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl border shrink-0 overflow-hidden flex items-center justify-center p-2 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-blue-50 border-blue-100 shadow-inner'}`}>
                    {/* Aquí está el cambio clave para las imágenes: aceptamos http O rutas relativas (/) */}
                    {(exp.logo && (exp.logo.startsWith('http') || exp.logo.startsWith('/'))) ? (
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-3xl font-black text-blue-600">{exp.logo || exp.company[0]}</span>
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-black">{exp.role}</h3>
                        <p className="text-blue-600 font-extrabold text-lg">{exp.company}</p>
                      </div>
                      <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'}`}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                          <ChevronRight size={18} className="text-blue-600 shrink-0 mt-0.5" />
                          <span className={isDarkMode ? 'text-slate-400' : 'text-slate-700'}>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
             ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-40">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-16 h-1 bg-amber-500 rounded-full mb-6"></div>
            <h2 className="text-4xl font-extrabold mb-4">{language === 'es' ? 'Certificaciones' : 'Certifications'}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.certifications.map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border flex items-center gap-5 transition-all ${isDarkMode ? 'bg-[#1e293b]/40 border-slate-800 hover:border-amber-500/20' : 'bg-white border-blue-100 shadow-lg shadow-blue-500/5 hover:shadow-xl'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-inner ${isDarkMode ? 'bg-amber-500/10 text-amber-500' : 'bg-amber-50 text-amber-600'}`}>
                  <Award size={24} />
                </div>
                <p className="font-bold text-sm leading-tight">{cert}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-40">
           <div className="flex flex-col items-center text-center mb-16">
            <div className="w-16 h-1 bg-cyan-500 rounded-full mb-6"></div>
            <h2 className="text-4xl font-extrabold mb-4">{language === 'es' ? 'Proyectos' : 'Projects'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {data.projects.map((project, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className={`group flex flex-col rounded-[2.5rem] border transition-all duration-300 relative overflow-hidden ${isDarkMode ? 'bg-[#1e293b]/30 border-slate-800 hover:border-blue-500/30' : 'bg-white border-blue-100 shadow-xl hover:border-blue-300 shadow-blue-500/5'}`}
              >
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-black mb-4 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className={`text-xs px-4 py-1.5 rounded-xl font-bold tracking-tight ${isDarkMode ? 'bg-slate-800 text-blue-300' : 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" className="mt-8 inline-flex items-center gap-2 text-blue-600 font-black hover:gap-4 transition-all uppercase text-sm tracking-widest group">
                      {language === 'es' ? 'Ver Repositorio' : 'View Repository'} <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-16 md:p-24 rounded-[3.5rem] border text-center space-y-12 relative overflow-hidden transition-all shadow-2xl ${isDarkMode ? 'bg-[#1e293b]/50 border-slate-800' : 'bg-white border-blue-100 shadow-blue-500/10'}`}
          >
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">{language === 'es' ? '¿Listo para colaborar?' : "Ready to collaborate?"}</h2>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a 
                href={`mailto:${data.email}`}
                className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-5 bg-blue-600 text-white rounded-[2rem] font-black text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-2xl shadow-blue-500/20"
              >
                <Mail size={24} />
                {data.email}
              </a>
              <a 
                href={data.linkedin}
                target="_blank"
                className={`w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-5 border rounded-[2rem] font-black text-lg transition-all hover:scale-105 ${isDarkMode ? 'border-slate-800 bg-slate-800/50 hover:bg-slate-800' : 'border-blue-200 bg-white hover:bg-blue-50 shadow-lg shadow-blue-500/5 text-blue-900'}`}
              >
                <Linkedin size={24} className="text-blue-600" />
                LinkedIn
              </a>
            </div>

            <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center gap-10">
               <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity">
                <Download size={20} /> CV (PDF)
               </button>
               <a href="https://github.com/srLeon23" target="_blank" className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity">
                 GITHUB
               </a>
            </div>
          </motion.div>
        </section>

      </main>

      <footer className={`py-16 border-t text-center ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-blue-100 shadow-inner'}`}>
        <p className={`text-xs font-bold tracking-widest uppercase opacity-40 mb-3`}>
          {language === 'es' ? 'DISEÑADO Y DESARROLLADO POR' : 'DESIGNED & DEVELOPED BY'}
        </p>
        <p className="text-xl font-black tracking-tighter">
          Leonardo E. Muñoz &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;