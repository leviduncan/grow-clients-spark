const Video = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            See It In Action
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Watch How We Transform Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI-powered marketing solutions help businesses like yours attract more clients and grow revenue.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-background shadow-2xl border border-border">
            {/* Replace the src with your actual video URL */}
            <video
              className="w-full h-full object-cover"
              controls
              poster="/placeholder.svg"
            >
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Placeholder overlay - remove when adding actual video */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                <svg
                  className="w-8 h-8 text-primary-foreground ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
