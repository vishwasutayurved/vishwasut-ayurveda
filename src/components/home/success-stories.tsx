'use client';
import { cn } from "@/lib/utils";

interface SuccessStoryProps {
  videoSrc: string;
  name: string;
  testimonial: string;
  className?: string;
}

export default function SuccessStories() {
  const stories: SuccessStoryProps[] = [
    {
      videoSrc: "/videos/video-1.mp4",
      name: "Pooja Sharma",
      testimonial: "I had been suffering from chronic back pain for years, and after just a few sessions at Pranaa, I feel like a new person! The personalized care and authentic Ayurvedic treatments worked wonders.",
    },
    {
      videoSrc: "/videos/video-2.mp4",
      name: "Rohan Verma",
      testimonial: "The team at Pranaa is incredibly knowledgeable and caring. They helped me manage my stress and anxiety with their holistic approach. I highly recommend their services to anyone seeking a healthier lifestyle.",
      // className: "lg:mt-16",
    },
    {
      videoSrc: "/videos/video-3.mp4",
      name: "Anjali Desai",
      testimonial: "I was struggling with digestive issues for a long time, but the dietary advice and herbal treatments from Pranaa have made a huge difference. I feel more energetic and balanced now.",
    },
    {
      videoSrc: "/videos/video-3.mp4",
      name: "Anjali Desai",
      testimonial: "I was struggling with digestive issues for a long time, but the dietary advice and herbal treatments from Pranaa have made a huge difference. I feel more energetic and balanced now.",
    }
  ];

  return (
    <section className="py-12 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h3 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Success Stories
          </h3>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">
            {/* Discover how we've made a difference in people's lives through our authentic Ayurvedic treatments. */}
            We are working on the success stories video reviews, It will be available soon.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {stories.map((story, index) => (
            <div key={index} className={cn("flex flex-col items-center", story.className)}>
              <div className="relative w-64 h-[480px] bg-white rounded-3xl border-4 border-gray-300 shadow-lg">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full"></div>
                <video
                  src={story.videoSrc}
                  controls
                  controlsList="nofullscreen"
                  playsInline
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="mt-6 text-center">
                <h4 className="font-bold text-lg text-primary">{story.name}</h4>
                <p className="mt-2 text-foreground/80">{story.testimonial}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
