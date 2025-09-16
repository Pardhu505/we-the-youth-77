export const VideoSection = () => {
  return (
    <div className="relative mx-auto mb-2 max-w-4xl">
      <img
        src="/2024/images/frame-laptop.png"
        alt="Laptop frame"
        data-testid="video-frame-image"
        className="w-full h-auto"
      />
     <div className="absolute w-[75%] h-[72%] top-[2.5%] left-[11.3%] bg-white flex items-center justify-center">
        <p className="text-black text-2xl font-bold">Video coming soon</p>
      </div>
    </div>
  );
};
