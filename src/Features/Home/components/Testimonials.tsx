import Image from 'next/image';

import useTestimonialArea from '../../hooks/useTestimonialArea';

export default function Testimonials() {
  const { data: testimonialArea } = useTestimonialArea();

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>{testimonialArea?.title}</h2>
        </div>
        <div className="row">
          {testimonialArea?.testimonials.map(testimonial => (
            <div key={`${testimonial?.name}-${testimonial?.id}`} className="col-md-4">
              <div className="testimonial">
                <div className="testimonial-image">
                  <Image
                    src={testimonial?.image.url}
                    width={testimonial?.image.width}
                    height={testimonial?.image.height}
                    alt={testimonial?.name}
                  />
                </div>
                <div className="testimonial-content">
                  <p>{`"${testimonial?.statement}"`}</p>
                  <div className="testimonial-meta"> - {testimonial.name} </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
