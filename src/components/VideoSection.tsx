export const VideoSection = () => {
  return (
    <div className="relative mx-auto mb-2 max-w-4xl">
      <img
        src="/2024/images/frame-laptop.png"
        alt="Laptop frame"
        data-testid="video-frame-image"
        className="w-full h-auto"
      />
      <iframe
        className="absolute w-[75.5%] h-[77%] top-[7.5%] left-[12.3%]"
        src="https://www.youtube.com/embed/YUlzxZVRHy8"
        id="iframe-preview"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
