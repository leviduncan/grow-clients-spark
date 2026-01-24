import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

function VideoOverlay({position, bg, content}) {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    return (
        <>
            <div className={`${position} inset-0 flex items-center justify-center ${bg} from-black/40 via-transparent to-transparent`}>
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

            {/* Video Overlay */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center cursor-pointer animate-fade-in"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div className="absolute w-full max-w-4xl mx-4 aspect-video">
                        <iframe
                            src="https://growclientsai.com/assets/hvac-demo.mp4"
                            className="w-full h-full rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                </div>
            )}
        </>
    )
}

export default VideoOverlay