export const VideoSection = () => {
  return (
    <div className="relative mx-auto mb-2 max-w-4xl">
      <img
        src="/2024/images/frame-laptop.png"
        alt="Laptop frame"
        data-testid="video-frame-image"
        className="w-full h-auto"
      />
      <div className="absolute w-[75%] h-[72%] top-[2.5%] left-[12.3%]">
        <iframe
          src="https://drive.google.com/file/d/1SOWSfd-LqIybnrQZ0TLn9C5lNXH9AaN-/preview"
          width="100%"
          height="100%"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};
