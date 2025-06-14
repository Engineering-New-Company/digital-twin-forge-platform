
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, UploadCloud, Camera, MessageSquareText } from "lucide-react";

const actions = [
  {
    label: "Connect Custom Model",
    icon: UploadCloud,
    description: "Integrate your own PyTorch or TensorFlow model for advanced robotics applications.",
    onClick: () => {
      // Replace with actual integration workflow
      alert("Connect Custom Model coming soon!");
    }
  },
  {
    label: "Run Computer Vision",
    icon: Camera,
    description: "Apply deep learning models to camera streams or images for object detection and analysis.",
    onClick: () => {
      alert("Run Computer Vision coming soon!");
    }
  },
  {
    label: "Deploy NLP Module",
    icon: MessageSquareText,
    description: "Integrate natural language processing features for text-based or voice robotics control.",
    onClick: () => {
      alert("Deploy NLP Module coming soon!");
    }
  }
];

const DeveloperToolsPanel = () => (
  <section className="py-16 px-6">
    <div className="container mx-auto">
      <Card className="max-w-4xl mx-auto dark:bg-slate-800/80 shadow-lg animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Cpu className="h-6 w-6 text-emerald-600" />
            Developer Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-slate-600 dark:text-slate-300">
            Supercharge your Robot Twins with custom AI integrations. Connect your own ML models, run Computer Vision jobs, and deploy NLP modules — all from this unified developer panel.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {actions.map((action) => (
              <div
                key={action.label}
                className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-900/40 rounded-xl hover-scale shadow-sm transition hover:shadow-md"
              >
                <action.icon className="h-9 w-9 mb-4 text-emerald-500" />
                <div className="font-semibold text-slate-900 dark:text-white mb-2">
                  {action.label}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300 mb-4 text-center">
                  {action.description}
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={action.onClick}
                >
                  {action.label}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default DeveloperToolsPanel;
