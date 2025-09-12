import { PlayCircle } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="bg-background/50 aspect-video max-w-4xl mx-auto rounded-lg shadow-lg flex items-center justify-center border-2 border-dashed">
          <div className="text-center text-muted-foreground">
            <PlayCircle className="mx-auto mb-4 h-16 w-16" />
            <h3 className="text-xl font-semibold">Video Coming Soon</h3>
            <p>This space is reserved for a future video.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
