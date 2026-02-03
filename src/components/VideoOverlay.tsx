import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

function VideoOverlay({position, bg, content, align = "center", className = ""}) {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const alignmentClass = align === "bottom" ? "items-end pb-6" : "items-center";

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsVideoOpen(false);
    };

    return (
        <>
            <div className={`${position} inset-0 flex ${alignmentClass} justify-center ${bg} from-black/40 via-transparent to-transparent ${className}`}>
                <Button
                    size="default"
                    className="bg-purple hover:bg-purple/90 text-purple-foreground gap-3 glow-purple-sm hover:scale-105"
                    onClick={() => setIsVideoOpen(true)}
                >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                    </div>
                    {content}
                </Button>
            </div>

            {/* Video Overlay - rendered via portal to escape stacking context */}
            {isVideoOpen && createPortal(
                <div
                    className="fixed inset-0 bg-black/95 flex items-center justify-center animate-fade-in"
                    style={{ zIndex: 99999 }}
                    onClick={handleClose}
                >
                    <div
                        className="relative w-full max-w-4xl mx-4 aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src="https://growclientsai.com/assets/hvac-demo.mp4"
                            className="w-full h-full rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <button
                        className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2"
                        onClick={handleClose}
                        style={{ zIndex: 100000 }}
                    >
                        <X className="w-10 h-10" />
                    </button>
                </div>,
                document.body
            )}
        </>
    )
}

export default VideoOverlay
