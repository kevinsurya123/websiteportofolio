import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate System Analyst & Business Development</h3>

                    <p className="text-muted-foreground"> 
                       As an Information Systems graduate, I have hands-on experience in both technical and business roles. 
                       I have supported an Odoo ERP migration , developed a web-based POS system using PHP , and executed user acquisition and CRM strategies that contributed to a team revenue of approximately $4,000/month. 
                       This is complemented by proven leadership skills from heading an E-Sports community of over 400 members
                    </p>

                    <p className="text-muted-foreground"> 
                       I am a proactive problem-solver, passionate about bridging the gap between technical solutions and business growth. 
                       This drive is demonstrated through my project work, achievements in business plan competitions , and my commitment to building an engaged E-Sports community. 
                       I am eager to apply my unique blend of technical and business acumen to create impactful results.
                    </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        {""}
                        Get In Touch
                    </a>
                    <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                    </a>
                </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">System Analyst</h4>
                                <p className="text-muted-foreground">analyzes and designs information systems to solve business problems and improve operational efficiency.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Business Analyst</h4>
                                <p className="text-muted-foreground">analyzes business processes and data to identify needs and recommend solutions that help stakeholders achieve their strategic goals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Business Development</h4>
                                <p className="text-muted-foreground">professional identifies and pursues new strategic opportunities and relationships to drive long-term business growth and increase revenue.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};