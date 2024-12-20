export default function About() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">About DevBlog</h1>
      <div className="prose max-w-none">
        <p className="text-gray-800 leading-relaxed mb-4">
          Welcome to DevBlog, your go-to resource for web development insights and tutorials. 
          We're passionate about sharing knowledge and helping developers grow in their journey.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Our team of experienced developers regularly publishes articles covering various topics 
          including React, JavaScript, CSS, and modern web development practices.
        </p>
      </div>
    </div>
  );
}