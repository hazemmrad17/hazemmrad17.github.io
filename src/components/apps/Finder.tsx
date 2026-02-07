"use client";

import React, { useState } from "react";
import {
    User,
    Briefcase,
    Code2,
    GraduationCap,
    Award,
    ShieldCheck,
    Building2,
    ChevronRight,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    Github,
    Linkedin
} from "lucide-react";

type Section = "personal" | "experience" | "projects" | "education" | "skills" | "certifications" | "organizations";

interface FinderProps {
    onOpenProject: (url: string) => void;
}

export default function FinderApp({ onOpenProject }: FinderProps) {
    const [activeSection, setActiveSection] = useState<Section>("personal");

    const sidebarItems: { id: Section; label: string; icon: any }[] = [
        { id: "personal", label: "Personal", icon: User },
        { id: "experience", label: "Experience", icon: Briefcase },
        { id: "projects", label: "Projects", icon: Code2 },
        { id: "education", label: "Education", icon: GraduationCap },
        { id: "skills", label: "Skills", icon: Award },
        { id: "certifications", label: "Certifications", icon: ShieldCheck },
        { id: "organizations", label: "Organizations", icon: Building2 },
    ];

    const renderContent = () => {
        switch (activeSection) {
            case "personal":
                return (
                    <div className="space-y-6">
                        <div className="flex items-start gap-6">
                            <div className="h-32 w-32 rounded-full bg-zinc-800 border-2 border-white/10 overflow-hidden shrink-0">
                                <div className="h-full w-full flex items-center justify-center bg-blue-500/10 text-blue-400">
                                    <User size={64} />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold text-white mb-2">Hazem Mrad</h1>
                                <p className="text-xl text-blue-400 font-medium mb-4">4th Year Data Science Engineering Student</p>

                                <div className="grid grid-cols-2 gap-y-2 text-sm text-zinc-400">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} className="text-zinc-500" />
                                        <span>Hammamet, Tunisia</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail size={14} className="text-zinc-500" />
                                        <span>hazem.mrad@esprit.tn</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone size={14} className="text-zinc-500" />
                                        <span>+216 94282894</span>
                                    </div>
                                    <div className="flex items-center gap-2 underline">
                                        <Linkedin size={14} className="text-zinc-500" />
                                        <a href="https://linkedin.com/in/hazem-mrad" target="_blank">in/hazem-mrad</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl bg-white/5 p-6 border border-white/10">
                            <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">About Me</h3>
                            <p className="text-sm leading-relaxed text-zinc-300">
                                Fourth-year engineering student at ESPRIT, specializing in Data Science (2nd year of the engineering cycle).
                                Passionate about unlocking the power of data through machine learning and advanced analytics.
                                I combine modeling expertise with software engineering skills to build intelligent, data-driven solutions.
                            </p>
                        </div>
                    </div>
                );

            case "experience":
                return (
                    <div className="space-y-4">
                        {[
                            {
                                date: "Summer 2025",
                                role: "AI Engineering Intern",
                                company: "CFTravel (Hammamet, Tunisia)",
                                desc: "Architecting a RAG (Retrieval-Augmented Generation) workflow for personalized travel recommendations, processing destination catalogues based on budget, location, and accommodation criteria."
                            },
                            {
                                date: "July 2024 - Sept 2024",
                                role: "Brandist and Graphic Designer",
                                company: "Dourbia Startup | Orange ODC",
                                desc: "Led a complete rebranding with visual data analysis, created graphic designs to enhance brand identity, and collaborated with marketing for impactful visuals."
                            },
                            {
                                date: "June 2023 - July 2023",
                                role: "IT Intern",
                                company: "Arab-Tunisian Bank",
                                desc: "Provided IT support to resolve technical issues and managed funds with transactional data analysis."
                            },
                            {
                                date: "June 2018 - August 2018",
                                role: "3D Modeler Intern",
                                company: "ID-Design",
                                desc: "Created 3D models for interior design projects and produced data-based visualizations for clients."
                            }
                        ].map((exp, i) => (
                            <div key={i} className="rounded-xl bg-white/5 p-4 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-white">{exp.role}</h4>
                                    <span className="text-xs text-blue-400 font-mono bg-blue-400/10 px-2 py-1 rounded">{exp.date}</span>
                                </div>
                                <p className="text-sm text-zinc-400 mb-2 font-medium">{exp.company}</p>
                                <p className="text-xs text-zinc-500 leading-relaxed">{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                );

            case "projects":
                return (
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            {
                                title: "MatchupZ",
                                tags: ["AI", "YOLOv11", "Next.js"],
                                image: "/images/matchupz1.png",
                                link: "/legacy_portfolio/matchupz.html",
                                desc: "Top 10 PI-Dev project (ESPRIT 2025). AI-powered football analysis with player tracking, Voronoi spatial influence, and real-time analytics."
                            },
                            {
                                title: "Dourbia Rebrand",
                                tags: ["Design", "Branding"],
                                image: "/images/dourbia1.png",
                                link: "/legacy_portfolio/dourbia.html",
                                desc: "Complete visual identity overhaul for a local startup, including illustration design and marketing assets."
                            },
                            {
                                title: "DeepFlow",
                                tags: ["AI", "Software"],
                                image: "/images/deepflow_rebrand.png",
                                link: "/legacy_portfolio/deepflow.html",
                                desc: "Intelligent workflow automation and data processing system for academic and industrial research."
                            },
                            {
                                title: "ArtHive",
                                tags: ["Web", "Community"],
                                image: "/images/project-3.jpg",
                                link: "/legacy_portfolio/arthive.html",
                                desc: "A collaborative platform for digital artists to showcase work and participate in community challenges."
                            }
                        ].map((project, i) => (
                            <div
                                key={i}
                                onClick={() => onOpenProject(project.link)}
                                className="group rounded-xl bg-white/5 overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer block"
                            >
                                <div className="h-24 w-full bg-zinc-800 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-white mb-2 flex items-center justify-between">
                                        {project.title}
                                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h4>
                                    <div className="flex gap-2 mb-3">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded italic">#{tag}</span>
                                        ))}
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">{project.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case "education":
                return (
                    <div className="space-y-6">
                        <div className="relative pl-6 border-l border-zinc-800 space-y-8">
                            <div className="relative">
                                <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-blue-500 border-4 border-zinc-900" />
                                <h4 className="font-bold text-white uppercase text-xs tracking-widest text-blue-400 mb-1">2022 - Present</h4>
                                <h3 className="text-lg font-bold text-white">Engineering in Computer Technologies</h3>
                                <p className="text-sm text-zinc-400">ESPRIT (Ariana, Tunisia)</p>
                                <p className="text-xs text-zinc-500 mt-2 italic">Specializing in Artificial Intelligence and Machine Learning.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-zinc-700 border-4 border-zinc-900" />
                                <h4 className="font-bold text-white uppercase text-xs tracking-widest text-zinc-500 mb-1">2022</h4>
                                <h3 className="text-lg font-bold text-white">Baccalaureate in Mathematics</h3>
                                <p className="text-sm text-zinc-400">Mohamed Boudhina High School (Hammamet, Tunisia)</p>
                            </div>
                        </div>
                    </div>
                );

            case "skills":
                return (
                    <div className="space-y-8 pb-4">
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { name: "AI & Machine Learning", level: 85, color: "bg-purple-500" },
                                { name: "Data Science", level: 80, color: "bg-blue-500" },
                                { name: "Graphic Design", level: 90, color: "bg-pink-500" },
                                { name: "Fullstack Development", level: 75, color: "bg-emerald-500" },
                            ].map((skill, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-xs font-medium">
                                        <span className="text-zinc-300">{skill.name}</span>
                                        <span className="text-zinc-500">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${skill.color} transition-all duration-1000`}
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <h3 className="text-[11px] font-bold text-zinc-500 mb-3 uppercase tracking-wider">AI / ML</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Rag", "LLMs", "Agentic AI", "Computer Vision", "Machine Learning", "PyTorch", "TensorFlow", "Keras", "scikit-learn"].map(t => (
                                        <span key={t} className="px-2 py-1 bg-purple-500/10 rounded text-[10px] text-purple-300 border border-purple-500/20">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[11px] font-bold text-zinc-500 mb-3 uppercase tracking-wider">Programming</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["C", "C++", "C#", "Python", "PHP", "Java", "R", "SQL", "HTML", "Javascript"].map(t => (
                                        <span key={t} className="px-2 py-1 bg-blue-500/10 rounded text-[10px] text-blue-300 border border-blue-500/20">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[11px] font-bold text-zinc-500 mb-3 uppercase tracking-wider">Design</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Photoshop", "Illustrator", "InDesign", "Figma"].map(t => (
                                        <span key={t} className="px-2 py-1 bg-pink-500/10 rounded text-[10px] text-pink-300 border border-pink-500/20">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[11px] font-bold text-zinc-500 mb-3 uppercase tracking-wider">Frameworks</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Symfony", "Streamlit", "Gradio"].map(t => (
                                        <span key={t} className="px-2 py-1 bg-emerald-500/10 rounded text-[10px] text-emerald-300 border border-emerald-500/20">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[11px] font-bold text-zinc-500 mb-3 uppercase tracking-wider">Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Git", "Linux", "PowerBI"].map(t => (
                                        <span key={t} className="px-2 py-1 bg-zinc-500/10 rounded text-[10px] text-zinc-300 border border-zinc-500/20">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[11px] font-bold text-zinc-500 mb-3 uppercase tracking-wider">Cloud & DevOps</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["AWS", "Kubernetes", "Docker", "MlFlow", "Kibana"].map(t => (
                                        <span key={t} className="px-2 py-1 bg-orange-500/10 rounded text-[10px] text-orange-300 border border-orange-500/20">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "certifications":
                return (
                    <div className="grid grid-cols-1 gap-3 pb-4">
                        {[
                            {
                                name: "Building LLM Applications With Prompt Engineering",
                                issuer: "NVIDIA",
                                date: "Jan 2025",
                                id: "3YlMsPazQQeGHpQSCAKtiQ",
                                link: "https://learn.nvidia.com/certificates?id=3YlMsPazQQeGHpQSCAKtiQ",
                                skills: ["Prompt Engineering", "LLM", "Agentic AI"],
                                icon: "/images/nvidia_logo.png"
                            },
                            {
                                name: "Evaluation and Light Customization of Large Language Models",
                                issuer: "NVIDIA",
                                date: "Jan 2025",
                                id: "hvaVnKPgSZesiGC_3YfDCA",
                                link: "https://learn.nvidia.com/certificates?id=hvaVnKPgSZesiGC_3YfDCA",
                                skills: ["Large Language Models (LLM)"],
                                icon: "/images/nvidia_logo.png"
                            },
                            {
                                name: "Rapid Application Development with Large Language Models (LLMs)",
                                issuer: "NVIDIA",
                                date: "Jan 2025",
                                id: "QCaSp38fQkqdkc43uh_P6g",
                                link: "https://learn.nvidia.com/certificates?id=QCaSp38fQkqdkc43uh_P6g",
                                skills: ["LLM", "Agentic AI"],
                                icon: "/images/nvidia_logo.png"
                            },
                            {
                                name: "Building Transformer-Based Natural Language Processing Applications",
                                issuer: "NVIDIA",
                                date: "Jan 2025",
                                id: "7frdMLXwQRW2vRQtmOREKA",
                                link: "https://learn.nvidia.com/certificates?id=7frdMLXwQRW2vRQtmOREKA",
                                skills: ["LLM", "Agentic AI"],
                                icon: "/images/nvidia_logo.png"
                            },
                            {
                                name: "Fundamentals of Deep Learning",
                                issuer: "NVIDIA",
                                date: "Jan 2024",
                                id: "yDs0KhrJSxqQMT3umJhk_g",
                                link: "https://learn.nvidia.com/certificates?id=yDs0KhrJSxqQMT3umJhk_g",
                                skills: ["Deep Learning"],
                                icon: "/images/nvidia_logo.png"
                            },
                            {
                                name: "Front End Development Libraries",
                                issuer: "freeCodeCamp",
                                date: "Jun 2023",
                                link: "https://www.freecodecamp.org/certification/hazemmrad/front-end-development-libraries",
                                icon: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
                            },
                            {
                                name: "Responsive Web Design",
                                issuer: "freeCodeCamp",
                                date: "Jun 2023",
                                link: "https://www.freecodecamp.org/certification/hazemmrad/responsive-web-design",
                                icon: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
                            }
                        ].map((cert, i) => (
                            <button
                                key={i}
                                onClick={() => cert.link && window.open(cert.link, "_blank")}
                                className="group flex flex-col p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all text-left w-full cursor-pointer hover:bg-white/10"
                            >
                                <div className="flex items-start justify-between mb-2 w-full">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center p-2 shrink-0">
                                            {cert.issuer === "NVIDIA" ? (
                                                <div className="text-[10px] font-bold text-emerald-500">NVIDIA</div>
                                            ) : (
                                                <div className="text-[10px] font-bold text-white">fCC</div>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm leading-tight group-hover:text-blue-400 transition-colors">{cert.name}</h4>
                                            <p className="text-[11px] text-zinc-500 mt-1">{cert.issuer} • {cert.date}</p>
                                        </div>
                                    </div>
                                    {cert.id && <span className="text-[9px] text-zinc-600 font-mono">ID: {cert.id}</span>}
                                </div>
                                {cert.skills && (
                                    <div className="flex flex-wrap gap-1.5 mt-2">
                                        {cert.skills.map(skill => (
                                            <span key={skill} className="text-[9px] px-1.5 py-0.5 bg-blue-500/10 text-blue-300 rounded border border-blue-500/20">{skill}</span>
                                        ))}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                );

            case "organizations":
                return (
                    <div className="space-y-6 pb-4">
                        <div className="flex items-center justify-between border-b border-white/5 pb-4">
                            <h3 className="text-lg font-bold text-white">Extracurricular Activities</h3>
                        </div>

                        <div className="relative pl-6 border-l-2 border-zinc-800 space-y-10">
                            {[
                                {
                                    role: "Media Manager",
                                    org: "DeepFlow AI Club",
                                    location: "ESPRIT",
                                    date: "July 2024 - March 2025",
                                    desc: "Increased social media reach by 20% by managing and optimizing club platforms (The first AI club in Tunisia).",
                                    active: true
                                },
                                {
                                    role: "General Secretary",
                                    org: "DeepFlow AI Club",
                                    location: "ESPRIT",
                                    date: "July 2023 - July 2024",
                                    desc: "Organized 2+ major events and coordinated a team of 10+ members to improve club operations."
                                },
                                {
                                    role: "Member",
                                    org: "DeepFlow AI Club",
                                    location: "ESPRIT",
                                    date: "October 2022 - July 2023",
                                    desc: "Focused on learning AI and Machine Learning fundamentals through practical club sessions."
                                }
                            ].map((item, i) => (
                                <div key={i} className="relative">
                                    <div className={`absolute -left-[33px] top-1.5 h-3.5 w-3.5 rounded-full border-4 border-zinc-900 ${item.active ? 'bg-blue-500' : 'bg-zinc-700'}`} />
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-bold text-white">{item.role}</h4>
                                            <span className="text-[10px] text-blue-400 font-mono bg-blue-400/10 px-2 py-0.5 rounded uppercase">{item.date}</span>
                                        </div>
                                        <h5 className="text-sm font-medium text-zinc-300">{item.org} <span className="text-zinc-500 text-xs">• {item.location}</span></h5>
                                        <p className="text-xs text-zinc-500 leading-relaxed mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="flex h-full text-zinc-300">
            {/* Sidebar */}
            <div className="w-48 shrink-0 border-r border-white/10 pr-4">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-wider text-zinc-500 px-2 pt-2">
                    Portfolio
                </div>
                <div className="space-y-1">
                    {sidebarItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full flex items-center gap-3 rounded-md px-2 py-1.5 text-sm transition-colors ${activeSection === item.id ? "bg-blue-600/90 text-white" : "hover:bg-white/10"
                                }`}
                        >
                            <item.icon className={`h-4 w-4 ${activeSection === item.id ? "text-white" : "text-blue-400"}`} />
                            <span className="font-medium">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto px-8 pb-8 pt-4">
                <div className="flex items-center gap-2 mb-8 text-[12px] text-zinc-500 font-medium">
                    <span>Portfolio</span>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-zinc-300">{sidebarItems.find(i => i.id === activeSection)?.label}</span>
                </div>

                {renderContent()}
            </div>
        </div>
    );
}
