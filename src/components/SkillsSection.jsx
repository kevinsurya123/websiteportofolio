import { useState } from "react";
import { cn } from "../lib/utils";


const skills = [
{name: "SQL", level: 80, category: "Technical Skills"},
{name: "SDLC Knowledge", level: 90, category: "Technical Skills"},
{name: "System Architecture", level: 75, category: "Technical Skills"},
{name: "ERP Tools", level: 80, category: "Technical Skills"},
{name: "Power BI", level: 80, category: "Technical Skills"},
{name: "Technical Documentation", level: 90, category: "Technical Skills"},
{name: "PHP", level: 75, category: "Technical Skills"},
{name: "React", level: 75, category: "Technical Skills"},
{name: "Java Script", level: 75, category: "Technical Skills"},
    
{name: "System Modeling & Design", level: 80, category: "Analytical Skills"},
{name: "Requirement Analysis", level: 90, category: "Analytical Skills"},
{name: "Critical Thinking", level: 85, category: "Analytical Skills"},
{name: "Problem Solving", level: 85, category: "Analytical Skills"},
{name: "Business Process Analysis", level: 80, category: "Analytical Skills"},
{name: "Business Acumen", level: 95, category: "Analytical Skills"},
{name: "Business Case Development", level: 85, category: "Analytical Skills"},
{name: "Data Visualization", level: 80, category: "Analytical Skills"},
{name: "Market Analysis", level: 85, category: "Analytical Skills"},
{name: "Strategic Planning", level: 90, category: "Analytical Skills"},

{name: "Communication", level: 90, category: "Soft Skills"},
{name: "Facilitation & Negotiation", level: 95, category: "Soft Skills"},
{name: "Stakeholder Management", level: 90, category: "Soft Skills"},
{name: "Relationship Management", level: 95, category: "Soft Skills"}
];


const categories = ["all", "Technical Skills", "Analytical Skills", "Soft Skills"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")


    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} 
                    onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) =>(
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-large"> {skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out"
                        style={{width: skill.level + "%"}}
                        />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>         
        </div>
    </section>;
};