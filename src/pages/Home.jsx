import { Navbar } from "../components/Navbar";
import { ThemeTogle } from "../components/ThemeToggle";
import { StarBackground} from "@/components/StarBackground";
export const Home = () => {
    return ( 
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
            <ThemeTogle />
        {/* Background Effect */}
            <StarBackground />
        {/* Navbar */}
            <Navbar />
        {/* Main Content */}


        {/*Footer */}


    </div>
    );
};
