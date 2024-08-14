import TagLine from "./TagLine";

// TestimonialCard Component
const TestimonialCard = ({ imgSrc, altText, userName, testimonialText }) => {
  return (
    <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
      <div className="flex space-x-3 mb-4">
        <img className="w-12 h-12 rounded-full" src={imgSrc} alt={altText} />
        <p>{userName}</p>
      </div>
      <p className="text-sm space-y-4 font-bold">
        <span>{testimonialText}</span>
      </p>
    </div>
  );
};

// Testimonial Component
const Testimonial = () => {
  const testimonials = [
    {
      imgSrc: "/testimonials/1.png",
      altText: "User 1",
      userName: "User 1",
      testimonialText:
        "The AI Builders platform is incredibly intuitive and powerful. It allowed us to build and deploy models with ease, even with complex data sets. Highly recommended for any AI projects.",
    },
    {
      imgSrc: "/testimonials/2.png",
      altText: "User 2",
      userName: "User 2",
      testimonialText:
        "AI Builders' scalability is remarkable. We handled large-scale data processing effortlessly, and the performance remained top-notch.",
    },
    {
      imgSrc: "/testimonials/3.png",
      altText: "User 3",
      userName: "User 3",
      testimonialText:
        "The user-friendly interface of AI Builders is excellent for both beginners and experts. ",
    },
    {
      imgSrc: "/testimonials/4.png",
      altText: "User 4",
      userName: "User 4",
      testimonialText:
        "AI Builders has completely transformed our approach to AI development. The flexibility and support for various models and data types are unmatched. Highly recommended for any AI projects. Highly recommended for any AI projects.",
    },
    {
      imgSrc: "/testimonials/5.png",
      altText: "User 5",
      userName: "User 5",
      testimonialText:
        "One of the best things about AI Builders is how seamlessly it integrates with our existing tools. It has become an essential part of our workflow, saving us a lot of time and effort.",
    },
    {
      imgSrc: "/testimonials/6.png",
      altText: "User 6",
      userName: "User 6",
      testimonialText:
        "The customer support from AI Builders is simply outstanding. Their team is always ready to assist with any issues or questions, which has been a lifesaver during tight project deadlines.  Highly recommended for any AI projects. Highly recommended for any AI projects.",
    },
    {
      imgSrc: "/testimonials/7.png",
      altText: "User 7",
      userName: "User 7",
      testimonialText:
        "Since switching to AI Builders, we’ve seen a significant boost in our model performance.",
    },
    {
      imgSrc: "/testimonials/8.png",
      altText: "User 8",
      userName: "User 8",
      testimonialText:
        "The documentation and tutorials provided by AI Builders are extremely comprehensive. They made it easy for our team to get up to speed quickly and start building models right away.",
    },
    {
      imgSrc: "/testimonials/9.png",
      altText: "User 9",
      userName: "User 9",
      testimonialText:
        "AI Builders has been a game-changer for our company. The platform's reliability and consistent performance are second to none, and we couldn't be happier with the results. ",
    },
  ];

  return (
    <section className="container mx-auto text-center p-6">
      <TagLine>Testimonials</TagLine>
      <h2 className="text-3xl font-bold text-center mt-3 mb-8">
        What builders say about us
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-items-center max-w-screen-xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            imgSrc={testimonial.imgSrc}
            altText={testimonial.altText}
            userName={testimonial.userName}
            testimonialText={testimonial.testimonialText}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
