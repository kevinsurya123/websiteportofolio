import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-4"
        >
            <div className="container mx-auto">
                {/* Wrapper untuk 2 kolom (teks dan gambar) */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    
                    {/* Kolom 1: Konten Teks */}
                    <div className="space-y-6 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1">
                                {""}
                                Kevin
                            </span>
                            <span className="text-foreground ml-2 opacity-0 animate-fade-in-delay-2">Surya</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3 md:text-justify">
                            An Information Systems graduate from Universitas Atma Jaya Yogyakarta with a 3.55 GPA, offering a unique 
                            blend of technical and business acumen. Experienced in ERP systems like Odoo and web development using 
                            PHP and React JS, complemented by hands-on experience in user acquisition and customer relationship management. A 
                            proactive problem-solver ready to bridge the gap between technical solutions and business growth.
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                View My Work
                            </a>
                        </div>
                    </div>

                    {/* Kolom 2: Gambar */}
                    <div className="flex justify-center md:justify-end opacity-0 animate-fade-in-delay-2">
                        {/* Ganti 'src' dengan path ke foto Anda */}
                        <img 
                            src="/projects/project4.jpg" // Contoh: /foto-profil.jpg atau /images/kevin.png
                            alt="Foto Kevin Surya"
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-lg animate-float"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2 font-bold"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};