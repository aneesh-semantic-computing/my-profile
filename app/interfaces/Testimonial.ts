export interface Testimonial {
    name: string;
    role: string;
    testimonial: string;
    picture: {
      filename: string;
    };
    show: boolean;
}

export default interface AllTestimonials {
    testimonials: Testimonial[]
}