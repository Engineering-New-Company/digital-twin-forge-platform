
import React, { useState } from "react";

const SECTION_LABELS = [
  { key: "api", label: "API Reference" },
  { key: "integration", label: "Integration Steps" },
  { key: "contribution", label: "Contribution Process" },
  { key: "faq", label: "FAQ" },
];

export default function RoboticsDevDocs() {
  const [section, setSection] = useState("api");

  return (
    <div className="prose prose-sm max-w-none dark:prose-invert">
      <div className="flex gap-2 mb-5 border-b pb-2">
        {SECTION_LABELS.map((s) => (
          <button
            key={s.key}
            onClick={() => setSection(s.key)}
            className={`px-3 py-1 rounded text-sm font-semibold 
              ${section === s.key 
                ? "bg-emerald-600 text-white" 
                : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950"
              } transition`}
            style={{ outline: "none" }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {section === "api" && (
        <>
          <h2>API Reference</h2>
          <p>
            The Robotics Developer Tools support HTTP-based ML inference endpoints.
            These APIs are typically hosted on serverless platforms or cloud providers, and can be called by the Robotics UI.
          </p>
          <pre>
            <code>
{`POST /your-ml-endpoint`}
{`
Content-Type: application/json

{
  "input": "text or image data",
  ...
}
`}
            </code>
          </pre>
          <ul>
            <li><b>Request:</b> JSON-encoded input (text, image, etc).</li>
            <li><b>Response:</b>
              <ul>
                <li>For images: <code>data:image/png;base64,...</code></li>
                <li>For text: <code>{'{"result": "output-text"}'}</code></li>
              </ul>
            </li>
          </ul>
          <h4>Relevant Examples:</h4>
          <ul>
            <li><a href="https://supabase.com/docs/guides/functions" target="_blank" rel="noopener">Supabase Edge Functions Docs</a></li>
            <li><a href="https://huggingface.co/docs" target="_blank" rel="noopener">Hugging Face API Docs</a></li>
            <li><a href="https://platform.openai.com/docs/api-reference" target="_blank" rel="noopener">OpenAI API Reference</a></li>
          </ul>
        </>
      )}

      {section === "integration" && (
        <>
          <h2>Integration Steps</h2>
          <ol className="list-decimal pl-5">
            <li>
              <b>Build your ML model endpoint:</b> Use a Python (Flask/FastAPI), Node.js (Express), Deno, or Supabase Edge Function server to create an HTTP endpoint.
            </li>
            <li>
              <b>Handle CORS:</b> Allow cross-origin requests by setting CORS headers (see Supabase/HuggingFace docs).
            </li>
            <li>
              <b>Define a consistent API contract:</b> Accept JSON input/output (see API Reference).
            </li>
            <li>
              <b>Test from browser:</b> Ensure your endpoint can be called from the browser (check with <code>curl</code> or <code>fetch</code>).
            </li>
            <li>
              <b>Document your endpoint:</b> Describe request/response and usage for UI integration (open a PR if contributing directly).
            </li>
            <li>
              <b>Contact maintainers or submit a PR:</b> Get your model/endpoint integrated or linked in this developer panel.
            </li>
          </ol>
        </>
      )}

      {section === "contribution" && (
        <>
          <h2>Contribution Process</h2>
          <ol className="list-decimal pl-5">
            <li>
              Fork the repo or open a discussion with the Robotics platform team.
            </li>
            <li>
              Implement your ML integration following the API and integration steps.
            </li>
            <li>
              Update <code>DeveloperToolsPanel.tsx</code> to add triggers or documentation for your integration.
            </li>
            <li>
              Add or update documentation for your endpoint (request, response, example).
            </li>
            <li>
              Submit a PR and describe your changes and test instructions clearly.
            </li>
            <li>
              Respond to code reviews to ensure smooth integration.
            </li>
          </ol>
        </>
      )}

      {section === "faq" && (
        <>
          <h2>FAQ</h2>
          <ul>
            <li>
              <b>What ML models are supported?</b>
              <div>
                Any model/API that returns JSON, text, or base64 image. Hugging Face, OpenAI, or custom endpoints are all supported.
              </div>
            </li>
            <li>
              <b>Can I use protected endpoints?</b>
              <div>
                Yes, but you must handle authentication (API key, JWT, etc.) and document how to call your endpoint securely.
              </div>
            </li>
            <li>
              <b>How do I get my endpoint listed?</b>
              <div>
                Open a PR updating the Developer Tools panel, or contact maintainers to feature your integration.
              </div>
            </li>
            <li>
              <b>Where do I get help?</b>
              <div>
                Ask on the Robotics platform Discord or GitHub discussions.
              </div>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
