


// import './App.css'
// import { useState } from 'react';
// // You can add your profile image in public folder or assets
// // For now, using a placeholder


// // مكون بطاقة المشروع مع معرض الصور
// const ProjectCard = ({ project }: { project: any }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
//   };

//   return (
//     <div className="project-card">
//       <div className="project-image-container">
//         {/* زر السابق */}
//         {project.images.length > 1 && (
//           <button className="nav-btn prev" onClick={prevImage}>❮</button>
//         )}
        
//         <img 
//           src={project.images[currentImageIndex]} 
//           alt={`${project.title} screenshot ${currentImageIndex + 1}`} 
//           className="project-screenshot"
//         />

//         {/* زر التالي */}
//         {project.images.length > 1 && (
//           <button className="nav-btn next" onClick={nextImage}>❯</button>
//         )}

//         {/* مؤشرات الصور (Dots) */}
//         <div className="image-dots">
//           {project.images.map((_: any, index: number) => (
//             <span 
//               key={index} 
//               className={`dot ${index === currentImageIndex ? 'active' : ''}`}
//               onClick={() => setCurrentImageIndex(index)}
//             ></span>
//           ))}
//         </div>
//       </div>

//       <div className="project-info">
//         <h3>{project.title}</h3>
//         <p>{project.description}</p>
//         <div className="project-tech">
//           {project.techStack.map((tech: string, index: number) => (
//             <span key={index}>{tech}</span>
//           ))}
//         </div>
//         <div className="project-links">
//           <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="link-demo">
//             🚀 Live Demo
//           </a>
//           <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-github">
//             🔗 View Code
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
// function App() {
//   const [activeSection, setActiveSection] = useState('home')

//   const scrollToSection = (sectionId: string) => {
//     setActiveSection(sectionId)
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }


  

//   return (
//     <>
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="nav-container">
//           <h1 className="logo">YS</h1>
//           <ul className="nav-links">
//             <li>
//               <button 
//                 className={activeSection === 'home' ? 'active' : ''}
//                 onClick={() => scrollToSection('home')}
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button 
//                 className={activeSection === 'about' ? 'active' : ''}
//                 onClick={() => scrollToSection('about')}
//               >
//                 About
//               </button>
//             </li>
//             <li>
//               <button 
//                 className={activeSection === 'skills' ? 'active' : ''}
//                 onClick={() => scrollToSection('skills')}
//               >
//                 Skills
//               </button>
//             </li>
//             <li>
//               <button 
//                 className={activeSection === 'projects' ? 'active' : ''}
//                 onClick={() => scrollToSection('projects')}
//               >
//                 Projects
//               </button>
//             </li>
//             <li>
//               <button 
//                 className={activeSection === 'contact' ? 'active' : ''}
//                 onClick={() => scrollToSection('contact')}
//               >
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="hero-section">
//         <div className="hero-content">
//           <div className="hero-text">
//             <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
//             <h2>Full-Stack Developer</h2>
//             <p>Building modern web and mobile applications with .NET, Flutter, and React</p>
//             <div className="hero-buttons">
//               <button className="btn-primary" onClick={() => scrollToSection('projects')}>
//                 View My Work
//               </button>
//               <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
//                 Get In Touch
//               </button>
//             </div>
//           </div>
//           <div className="hero-image">
//             {/* Replace with your actual photo */}
//             <div className="profile-placeholder">
//               <span>👨‍💻</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="section">
//         <h2 className="section-title">About Me</h2>
//         <div className="about-content">
//           <p>
//             I'm a passionate full-stack developer with expertise in building scalable 
//             applications using modern technologies. I specialize in creating seamless 
//             user experiences with Flutter for mobile and .NET for backend services.
//           </p>
//           <p>
//             My journey in software development has led me to work on diverse projects 
//             including real estate applications, sports data management systems, and 
//             secure authentication workflows. I'm committed to writing clean, maintainable 
//             code and following best practices in software architecture.
//           </p>
//           <div className="stats">
//             <div className="stat-item">
//               <h3>3+</h3>
//               <p>Years Experience</p>
//             </div>
//             <div className="stat-item">
//               <h3>10+</h3>
//               <p>Projects Completed</p>
//             </div>
//             <div className="stat-item">
//               <h3>5+</h3>
//               <p>Technologies</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="section">
//         <h2 className="section-title">Technical Skills</h2>
//         <div className="skills-grid">
//           <div className="skill-category">
//             <h3>Backend Development</h3>
//             <div className="skill-tags">
//               <span className="skill-tag">.NET / C#</span>
//               <span className="skill-tag">RESTful APIs</span>
//               <span className="skill-tag">Entity Framework</span>
//               <span className="skill-tag">ASP.NET Core</span>
//             </div>
//           </div>

//           <div className="skill-category">
//             <h3>Frontend Development</h3>
//             <div className="skill-tags">
//               <span className="skill-tag">Flutter / Dart</span>
//               <span className="skill-tag">React / TypeScript</span>
//               <span className="skill-tag">HTML/CSS</span>
//               <span className="skill-tag">Responsive Design</span>
//             </div>
//           </div>

//           <div className="skill-category">
//             <h3>Database & ORM</h3>
//             <div className="skill-tags">
//               <span className="skill-tag">PostgreSQL</span>
//               <span className="skill-tag">Prisma</span>
//               <span className="skill-tag">SQL</span>
//               <span className="skill-tag">Database Design</span>
//             </div>
//           </div>

//           <div className="skill-category">
//             <h3>Tools & Technologies</h3>
//             <div className="skill-tags">
//               <span className="skill-tag">Git & GitHub</span>
//               <span className="skill-tag">VS Code</span>
//               <span className="skill-tag">Docker</span>
//               <span className="skill-tag">CI/CD</span>
//             </div>
//           </div>
//         </div>
//       </section>

     
//            {/* Projects Section */}
      
//                  {/* Projects Section */}
//       <section id="projects" className="section">
//         <h2 className="section-title">Featured Projects</h2>
//         <div className="projects-grid">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </section>
//       {/* Contact Section */}
//       <section id="contact" className="section">
//         <h2 className="section-title">Get In Touch</h2>
//         <div className="contact-content">
//           <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          
//           <div className="contact-links">
//             <a href="mailto:your.email@example.com" className="contact-item">
//               <span className="contact-icon">📧</span>
//               <span>Email Me</span>
//             </a>
            
//             <a href="https://github.com/ysukkar2" target="_blank" rel="noopener noreferrer" className="contact-item">
//               <span className="contact-icon">💻</span>
//               <span>GitHub Profile</span>
//             </a>
            
//             <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-item">
//               <span className="contact-icon">💼</span>
//               <span>LinkedIn</span>
//             </a>
            
//             <a href="#" target="_blank" rel="noopener noreferrer" className="contact-item">
//               <span className="contact-icon">🐦</span>
//               <span>Twitter</span>
//             </a>
//           </div>

//           <div className="cta-section">
//             <h3>Let's Build Something Amazing Together!</h3>
//             <p>Feel free to reach out for collaborations or just a friendly hello</p>
//             <a href="mailto:your.email@example.com" className="btn-primary">
//               Send Message
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>© 2026 Your Name. Built with React & Vite</p>
//         <p>Hosted on GitHub Pages 🚀</p>
//       </footer>
//     </>
//   )
// }

// export default App


import './App.css'
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
// تعريف نوع البيانات
interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  demoLink?: string;
  githubLink?: string;
  images: string[];
}



// بيانات المشاريع مباشرة هنا
const projectsData: Project[] = [
  {
    id: 1,
    title: "MatchPulse",
    description: "A Sports App.",
    techStack: ["Flutter", "Nestjs", "PostgreSQL" , "Admin Dashboard Flutter"],
    //demoLink: "https://real-eastate-web.pages.dev/",
    //githubLink: "https://github.com/ysukkar2?tab=repositories",
    images: ["/images/12.jpeg",
        "/images/13.jpeg",
        "/images/14.jpeg",
        "/images/15.jpeg",
        "/images/16.jpeg",
        "/images/17.jpeg",
        "/images/18.jpeg",
        "/images/19.jpeg",
        "/images/20.jpeg",
        "/images/21.png",
    ] // تأكد أن هذه الصورة موجودة في public/images
  },
  {
    id: 2,
    title: "RealState Website",
    description: "RealState",
    techStack: ["Reactjs", "CSS/Vite"],
    demoLink: "https://real-eastate-web.pages.dev/",
    //githubLink: "https://github.com/ysukkar2?tab=repositories",
    images: [ "/images/real.png"]
  },



  {
    id: 3,
    title: "New Lirti",
    description: "A comprehensive Syrian currency converter app featuring real-time exchange rates for SYP (new/old), USD, EUR, and TRY. Includes bilingual financial news feed (Arabic/English) from major sources like Bloomberg and Reuters, plus a built-in calculator for quick conversions.",

    techStack: ["ReactNative", "TypeScript/Expo"],
    demoLink: "https://play.google.com/store/apps/details?id=com.yazan.lirti",
    
    images: ["/images/1.jpeg", "/images/2.jpeg",
    "/images/3.jpeg","/images/4.jpeg",
    "/images/5.jpeg","/images/6.jpeg",
    "/images/7.jpeg","/images/8.jpeg",
    "/images/9.jpeg","/images/10.jpeg",
    "/images/11.jpeg"

    ]
  }
];

// مكون بطاقة المشروع
// const ProjectCard = ({ project }: { project: Project }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
//   };

//   return (
//     <div className="project-card">
//       <div className="project-image-container">
//         {project.images.length > 1 && (
//           <button className="nav-btn prev" onClick={prevImage}>❮</button>
//         )}
        
//         <img 
//           src={project.images[currentImageIndex]} 
//           alt={`${project.title} screenshot`} 
//           className="project-screenshot"
//           onError={(e) => {
//             // إخفاء الصورة إذا لم توجد لتجنب شكلها المكسور
//             (e.target as HTMLImageElement).style.display = 'none';
//             // إظهار نص بديل إذا أردت
//             e.currentTarget.parentElement!.innerHTML += '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#666;">No Image Available</div>';
//           }}
//         />

//         {project.images.length > 1 && (
//           <button className="nav-btn next" onClick={nextImage}>❯</button>
//         )}

//         <div className="image-dots">
//           {project.images.map((_, index: number) => (
//             <span 
//               key={index} 
//               className={`dot ${index === currentImageIndex ? 'active' : ''}`}
//               onClick={() => setCurrentImageIndex(index)}
//             ></span>
//           ))}
//         </div>
//       </div>

//       <div className="project-info">
//         <h3>{project.title}</h3>
//         <p>{project.description}</p>
//         <div className="project-tech">
//           {project.techStack.map((tech, index) => (
//             <span key={index}>{tech}</span>
//           ))}
//         </div>
//         <div className="project-links">
//           <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="link-demo">
//             🚀 Live Demo
//           </a>
//           <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-github">
//             🔗 View Code
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };




const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showGallery]);

  return (
    <div className="project-card">
      <div className="project-image-container">
        {project.images.length > 1 && (
          <button className="nav-btn prev" onClick={prevImage}>❮</button>
        )}
        
        <img 
          src={project.images[currentImageIndex]} 
          alt={`${project.title} screenshot`} 
          className="project-screenshot"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            e.currentTarget.parentElement!.innerHTML += '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#666;">No Image Available</div>';
          }}
        />

        {project.images.length > 1 && (
          <button className="nav-btn next" onClick={nextImage}>❯</button>
        )}

        <div className="image-dots">
          {project.images.map((_, index: number) => (
            <span 
              key={index} 
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>


        <div className="project-links">
  {project.demoLink?.includes('play.google.com') ? (
    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="link-demo google-play">
      <svg className="play-store-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
      </svg>
      Google Play
    </a>
  ) : (
    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="link-demo">
      🚀 Live Demo
    </a>
  )}

{project.githubLink && (
  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-github">
    🔗 View Code
  </a>
)}
  {/* <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-github">
    🔗 View Code
  </a> */}
  {project.images.length > 0 && (
    <button 
      onClick={() => setShowGallery(true)} 
      className="link-screenshots"
    >
      📸 View Screenshots
    </button>
  )}
</div>
        {/* <div className="project-links">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="link-demo">
            🚀 Live Demo
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-github">
            🔗 View Code
          </a>
          {project.images.length > 0 && (
            <button 
              onClick={() => setShowGallery(true)} 
              className="link-screenshots"
            >
              📸 View Screenshots
            </button>
          )}
        </div> */}
      </div>

      {/* Gallery Modal - Optimized */}
      {showGallery && createPortal(
        <div 
          className="gallery-modal" 
          onClick={() => setShowGallery(false)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="gallery-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-gallery" 
              onClick={() => setShowGallery(false)}
              aria-label="Close gallery"
            >
              ✕
            </button>
            <h3>{project.title} - Screenshots</h3>
            <div className="gallery-images">
              {project.images.map((image, index) => (
                <div key={index} className="gallery-image-item">
                  <img 
                    src={image} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">YS</h1>
          <ul className="nav-links">
            <li><button className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</button></li>
            <li><button className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Yazan Sukkar</span></h1>
            <h2>Full-Stack Developer</h2>
            <p>Building modern web and mobile applications with Nestjs, Flutter, and React</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>View My Work</button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>Get In Touch</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder"><span>👨‍💻</span></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>I'm a passionate full-stack developer with expertise in building scalable applications using modern technologies. I specialize in creating seamless user experiences with Flutter for mobile and Nestjs for backend services.</p>
          <p>My journey in software development has led me to work on diverse projects including real estate applications, sports data management systems, and secure authentication workflows.</p>
          <div className="stats">
            <div className="stat-item"><h3>3+</h3><p>Years Experience</p></div>
            <div className="stat-item"><h3>10+</h3><p>Projects Completed</p></div>
            <div className="stat-item"><h3>5+</h3><p>Technologies</p></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skill-tags">
              <span className="skill-tag">Nestjs / Nodejs</span>
              <span className="skill-tag">RESTful APIs</span>
              <span className="skill-tag">Entity Framework</span>
              <span className="skill-tag">ASP.NET Core</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skill-tags">
              <span className="skill-tag">Flutter / Dart</span>
              <span className="skill-tag">React / TypeScript / ReactNative</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Database & ORM</h3>
            <div className="skill-tags">
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Prisma</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Database Design</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">CI/CD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Using Local Data */}
      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <div className="contact-links">
            <a href="mailto:dev.yz1992@gmail.com" className="contact-item"><span className="contact-icon">📧</span><span>Email Me</span></a>
            <a href="https://github.com/ysukkar2" target="_blank" rel="noopener noreferrer" className="contact-item"><span className="contact-icon">💻</span><span>GitHub Profile</span></a>
            <a href="https://www.linkedin.com/in/yazansukkar-31b0a5112/" target="_blank" rel="noopener noreferrer" className="contact-item"><span className="contact-icon">💼</span><span>LinkedIn</span></a>
          </div>
          <div className="cta-section">
            <h3>Let's Build Something Amazing Together!</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
            <a href="mailto:dev.yz1992@gmail.com" className="btn-primary">Send Message</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Yazan Sukkar. Built with React & Vite</p>
        <p>Hosted on GitHub Pages 🚀</p>
      </footer>
    </>
  )
}

export default App