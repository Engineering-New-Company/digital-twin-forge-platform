
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Shield, Clock, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-blue-900/20"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <Badge className="mb-8 bg-emerald-900/50 text-emerald-400 border-emerald-700 text-sm px-4 py-2">
          Trusted by Fortune 500 Leaders
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Prevent Design Recalls with{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            AI Digital Twins
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          AI-powered platform that prevents $100M+ design flaws and accelerates product launches by 6+ months
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 text-lg">
            Start Free Trial
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-10 py-4 text-lg">
            <Play className="mr-2 h-6 w-6" />
            See Demo
          </Button>
        </div>

        {/* Visual Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="group">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-red-900/30 rounded-xl group-hover:bg-red-900/50 transition-colors">
                <Shield className="h-8 w-8 text-red-400" />
              </div>
            </div>
            <div className="text-4xl font-bold text-red-400 mb-2">90%</div>
            <div className="text-slate-400">Flaws Prevented</div>
          </div>

          <div className="group">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-blue-900/30 rounded-xl group-hover:bg-blue-900/50 transition-colors">
                <Clock className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2">6+ Months</div>
            <div className="text-slate-400">Faster Launch</div>
          </div>

          <div className="group">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-emerald-900/30 rounded-xl group-hover:bg-emerald-900/50 transition-colors">
                <Target className="h-8 w-8 text-emerald-400" />
              </div>
            </div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">2,000%</div>
            <div className="text-slate-400">3-Year ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
