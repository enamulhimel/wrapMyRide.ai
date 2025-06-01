import img1 from '../../assets/cars/carPic/car-1.png';
import img2 from '../../assets/cars/carPic/car-2.png';
import img3 from '../../assets/cars/carPic/car-3.png';
import img4 from '../../assets/cars/carPic/car-4.png';
import img5 from '../../assets/cars/carPic/car-5.png';
import img6 from '../../assets/cars/carPic/car-6.png';
import img7 from '../../assets/cars/carPic/car-7.png';

const images = [img1, img2, img3, img4, img5, img6, img7];

const CarWrapGallery = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">See What's Possible</h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="group overflow-hidden rounded-lg shadow-lg">
            <img
              src={img}
              alt={`car-${idx + 1}`}
              className="w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarWrapGallery;
