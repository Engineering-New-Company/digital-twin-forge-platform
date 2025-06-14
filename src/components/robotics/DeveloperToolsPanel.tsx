import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, UploadCloud, Camera, MessageSquareText, FileText } from "lucide-react";
import RunCVModal from "./RunCVModal";

const actions = [
  {
    label: "Connect Custom Model",
    icon: UploadCloud,
    description: "Integrate your own PyTorch or TensorFlow model for advanced robotics applications.",
    onClick: (openCVModal: () => void, openDocs: () => void) => {
      alert("Connect Custom Model: See documentation below for extending ML integrations!");
      openDocs();
    }
  },
  {
    label: "Run Computer Vision",
    icon: Camera,
    description: "Apply deep learning models to camera streams or images for object detection and analysis.",
    onClick: (openCVModal: () => void) => {
      openCVModal();
    }
  },
  {
    label: "Deploy NLP Module",
    icon: MessageSquareText,
    description: "Integrate natural language processing features for text-based or voice robotics control.",
    onClick: (openCVModal: () => void, openDocs: () => void) => {
      alert("Deploy NLP Module: See developer docs for custom guidance and integration patterns.");
      openDocs();
    }
  },
];

const DeveloperToolsPanel = () => {
  const [cvOpen, setCVOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);

  const openCVModal = () => setCVOpen(true);
  const openDocs = () => setDocsOpen(true);

  return (
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
              {actions.map((action, idx) => (
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
                    onClick={() => {
                      if (action.label === "Run Computer Vision") {
                        openCVModal();
                      } else {
                        openDocs();
                      }
                    }}
                  >
                    {action.label}
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setDocsOpen(true)}
              >
                <FileText className="w-4 h-4" />
                Developer Contribution Guide
              </Button>
            </div>
            {/* Modal for Computer Vision */}
            <RunCVModal open={cvOpen} onOpenChange={setCVOpen} />
            {/* Modal for Docs */}
            {docsOpen && (
              <div className="fixed left-0 top-0 z-[1000] w-full h-full flex items-center justify-center bg-black/30">
                <div className="bg-white dark:bg-slate-900 text-sm max-w-2xl w-full rounded shadow-lg p-6 overflow-y-auto max-h-[80vh] border-2 border-emerald-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Robotics AI Integration Guide</span>
                    <Button size="sm" variant="ghost" onClick={() => setDocsOpen(false)}>Close</Button>
                  </div>
                  <div>
                    {/* Render Markdown - for now, simple formatting */}
                    <RoboticsDevDocs />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

// Simple Markdown component inline (for preview: could use ReactMarkdown for real parsing if needed)
function RoboticsDevDocs() {
  return (
    <div className="prose prose-sm max-w-none dark:prose-invert">
      <h2>Extending Robotics Developer Tools</h2>
      <p>
        This platform supports custom ML integrations by enabling API-based inference through Supabase Edge Functions or your own cloud endpoints.
      </p>
      <ul>
        <li>
          <b>Integrate Custom Model:</b> Create an HTTP endpoint (cloud function, server, or Supabase Edge Function) that takes input (text, image, etc) and returns JSON, image, or text response. Link or document your endpoint for the developer portal.
        </li>
        <li>
          <b>Run Computer Vision:</b> Use the built-in Computer Vision connector to call the Hugging Face endpoint with a text prompt. See <code>src/components/robotics/RunCVModal.tsx</code> for reference.
        </li>
        <li>
          <b>Deploy NLP Module:</b> Add an NLP model endpoint that accepts queries and responds with processed text, e.g., sentiment analysis, command parsing, summarization.
        </li>
      </ul>
      <h3>How to Contribute a New Integration</h3>
      <ol>
        <li>Create a REST API or function for your model inference (Python: Flask/FastAPI, Node.js: Express, Deno, etc).</li>
        <li>Add CORS headers so the Robotics UI can call your API from the browser.</li>
        <li>Return a consistent JSON or image output, following the example <code>huggingface-ai</code> edge function in <code>supabase/functions/huggingface-ai/index.ts</code>.</li>
        <li>Provide documentation about your API's input/output to help frontend integration.</li>
        <li>Contact the Robotics platform maintainers to get your model listed in the UI, or add UI triggers directly via PR (see <code>DeveloperToolsPanel.tsx</code>).</li>
      </ol>
      <h4>Resources</h4>
      <ul>
        <li><a href="https://supabase.com/docs/guides/functions" target="_blank" rel="noopener">Supabase Edge Functions Docs</a></li>
        <li><a href="https://huggingface.co/docs" target="_blank" rel="noopener">Hugging Face API Docs</a></li>
        <li><a href="https://platform.openai.com/docs/api-reference" target="_blank" rel="noopener">OpenAI API Reference</a></li>
      </ul>
      <p>
        <b>Note:</b> For images, use <code>data:image/png;base64,...</code> URLs. For text, return <code>{'{"result": "your-output"}'}</code>.
      </p>
    </div>
  );
}

export default DeveloperToolsPanel;
