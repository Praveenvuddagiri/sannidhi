import React, { useEffect } from 'react';

const TestimonialsCarousel = () => {
  useEffect(() => {
    // Load jQuery and Owl Carousel scripts dynamically
    const loadScripts = () => {
      const jQueryScript = document.createElement('script');
      jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      jQueryScript.onload = () => {
        const owlCarouselScript = document.createElement('script');
        owlCarouselScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
        owlCarouselScript.onload = () => {
          initCarousel();
        };
        document.body.appendChild(owlCarouselScript);
      };
      document.body.appendChild(jQueryScript);
    };

    // Function to initialize Owl Carousel
    const initCarousel = () => {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };

    // Load scripts and initialize carousel
    loadScripts();
  }, []);

  return (
    <div className="gtco-testimonials bg-aliceblue mt-10 px-4 md:px-0">
      <h2 className="text-center text-3xl text-gray-700 mb-10">Testimonials Carousel - Cards Comments</h2>
      <div className="owl-carousel owl-carousel1 owl-theme">
        {/* Testimonial cards go here */}
        {/* For each testimonial, create a similar card structure */}
        <div className="item">
          {/* Your card structure */}
        </div>
        {/* Repeat similar structure for other testimonials */}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

