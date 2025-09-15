import { PlayCircle } from "lucide-react";

export const VideoSection = () => {
  return (
    <div className="preview-video-frame mx-auto mb-2">
      <img src="/2024/images/frame-laptop.png" alt="Laptop frame" data-testid="video-frame-image" />
      <iframe
        src="https://www.youtube.com/embed/YUlzxZVRHy8"
        id="iframe-preview"
      ></iframe>
    </div>
  );
};
