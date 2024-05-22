export interface Testimonial {
    name: string;
    role: string;
    testimonial: string;
    picture: {
      filename: string;
    };
    show: boolean;
}

export type TestimonialsType = { testimonials: Testimonial[] };