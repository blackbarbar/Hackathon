import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";

const Testimonials = () => {
    return (
        <section className="bg-gray-50 py-24 overflow-hidden">
            <div className="max-w-[120rem] mx-auto text-center">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
                    What Our Customers Say
                </h2>
                <div className="relative w-full overflow-hidden py-2">
                    <div className="flex animate-scroll gap-12 w-max">
                        {[...Array(2)].flatMap((_, i) => (
                            [
                                {
                                    name: "Daniel F.",
                                    image: "/testimonials/first.jpg",
                                    quote: "“I drink Neo every morning — clean boost, no crash. And the lime flavor is absolutely 🔥.”"
                                },
                                {
                                    name: "Sophie M.",
                                    image: "/testimonials/second.jpg",
                                    quote: "“Finally an energy drink that doesn’t taste artificial. Neo is smooth, tasty and feels good.”"
                                },
                                {
                                    name: "Elena R.",
                                    image: "/testimonials/third.jpg",
                                    quote: "“I swapped coffee for Neo and I’m not going back. Instant focus, no jitters.”"
                                },
                                {
                                    "name": "Liam T.",
                                    "image": "/testimonials/fourth.jpg",
                                    "quote": "“Neo powers my workouts and my study sessions. It’s the perfect balance of energy and clarity.”"
                                }
                            ].map((testimonial, index) => (
                                <Card key={`${i}-${index}`} className="flex flex-col items-center text-center w-[30rem]">
                                    <CardBody>
                                        <Image
                                            src={testimonial.image}
                                            alt={`Customer ${index + 1}`}
                                            className="w-24 h-24 rounded-full mb-4 object-cover"
                                        />
                                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                        <p className="mt-3 text-gray-600">{testimonial.quote}</p>
                                    </CardBody>
                                </Card>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
