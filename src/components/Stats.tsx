
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Rocket, Users, Target } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: "90%",
    label: "Design Flaws Prevented",
    color: "emerald"
  },
  {
    icon: Rocket,
    value: "6 Months",
    label: "Faster Time to Market",
    color: "blue"
  },
  {
    icon: Users,
    value: "30%",
    label: "Team Size Reduction",
    color: "purple"
  },
  {
    icon: Target,
    value: "2,000%+",
    label: "3-Year ROI",
    color: "orange"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real metrics from Fortune 500 manufacturing programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-700 text-center group hover:bg-slate-900/80 transition-all hover:scale-105">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className={`p-4 bg-${stat.color}-900/30 rounded-xl group-hover:bg-${stat.color}-900/50 transition-colors`}>
                    <stat.icon className={`h-10 w-10 text-${stat.color}-400`} />
                  </div>
                </div>
                <div className={`text-4xl font-bold text-${stat.color}-400 mb-3`}>{stat.value}</div>
                <div className="text-white font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
