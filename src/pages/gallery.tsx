import ImageGallery from "../components/Images";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Gallery</h1>
      <ImageGallery />
    </div>
  );
};

export default Gallery;
