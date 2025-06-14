
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type RunCVModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const HUGGINGFACE_FN_ROUTE = "https://kqvztkscyeezhocpvdtr.supabase.co/functions/v1/huggingface-ai";

const RunCVModal: React.FC<RunCVModalProps> = ({ open, onOpenChange }) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setImage(null);
    try {
      const resp = await fetch(HUGGINGFACE_FN_ROUTE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "image-generation", prompt }),
      });
      const data = await resp.json();
      if (!data.success || !data.image) {
        setError(data.error || "Generation failed.");
      } else {
        setImage(data.image);
      }
    } catch (e) {
      setError("Error connecting to ML API.");
    } finally {
      setLoading(false);
    }
  };

  const closeAndReset = () => {
    setPrompt("");
    setImage(null);
    setError(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={closeAndReset}>
      <DialogContent className="max-w-md sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Run Computer Vision (Image Generation Demo)</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-2">
          <Input
            placeholder="Describe a robot, e.g. cute robot in a factory"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            disabled={loading}
            maxLength={120}
          />
          <Button disabled={!prompt || loading} onClick={handleGenerate}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Image
          </Button>
        </div>
        {error && <div className="text-sm text-red-500">{error}</div>}
        {image && (
          <div className="mt-4 flex flex-col items-center gap-2">
            <img
              src={image}
              alt="AI generated robot"
              className="max-w-xs max-h-64 rounded border"
            />
            <a href={image} download="robot-vision.png" className="text-xs text-blue-700 underline">
              Download Image
            </a>
          </div>
        )}
        <DialogFooter>
          <Button variant="ghost" onClick={closeAndReset}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RunCVModal;
