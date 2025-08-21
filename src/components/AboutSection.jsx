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
                       I’m an Information Systems graduate with a strong foundation in both technical development and business strategy. My experience includes leading an Odoo ERP migration, building a web-based POS system using PHP, and driving user acquisition and CRM initiatives that generated over $4,000 in monthly team revenue.
                    </p>

                    <p className="text-muted-foreground"> 
                       Beyond technical execution, I’ve demonstrated leadership by managing an E-Sports community of 400+ members and participating in business plan competitions that sharpened my strategic thinking.
                    </p>
                    <p className="text-muted-foreground"> 
                       I thrive at the intersection of technology and business translating complex systems into practical solutions that fuel growth. I'm excited to bring this hybrid skill set to impactful projects and collaborative teams.
                    </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        {""}
                        Get In Touch
                    </a>
                    <a href="https://drive.google.com/drive/folders/1jQSPxABGNK8wO71hxleNu52gd8lNMyws?usp=sharing" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" target="_blank">
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