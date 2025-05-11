import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styling/TestimonialSwiper.css";
import { useRef, useEffect, useState } from "react";

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  className = "",
}) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Calculate mouse position relative to the container center
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      
      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`testimonial-slider ${className}`}  //testimonial-slider-container
      style={{
        perspective: '1000px',
      }}
    >
      {/* 3D Background Elements */}
      <div className="testimonial-bg-wrapper">
        <div 
          className="testimonial-bg-element bg-element-1"
          style={{
            transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -15}px, 0) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`
          }}
        ></div>
        <div 
          className="testimonial-bg-element bg-element-2"
          style={{
            transform: `translate3d(${mousePosition.x * -25}px, ${mousePosition.y * -25}px, 0) rotateX(${mousePosition.y * 8}deg) rotateY(${mousePosition.x * -8}deg)`
          }}
        ></div>
        <div 
          className="testimonial-bg-element bg-element-3"
          style={{
            transform: `translate3d(${mousePosition.x * -5}px, ${mousePosition.y * -5}px, 0) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * -2}deg)`
          }}
        ></div>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{
          el: ".testimonial-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="testimonial-swiper"
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div 
              className="testimonial-card"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * -3}deg) rotateY(${mousePosition.x * 3}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <p className="testimonial-quote">
                {testimonial.content}
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                  />
                </div>
                <div>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="testimonial-controls">
          <div ref={prevRef} className="testimonial-button-prev testimonial-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </svg>
          </div>
          
          <div className="testimonial-pagination-wrapper">
            <div className="testimonial-pagination"></div>
          </div>
          
          <div ref={nextRef} className="testimonial-button-next testimonial-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;