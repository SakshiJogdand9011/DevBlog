export default function PostImage({ src, alt, aspectRatio = "21/9" }) {
  return (
    <div className={`relative overflow-hidden rounded-xl mb-8`} style={{ aspectRatio }}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}