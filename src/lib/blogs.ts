export interface Blog {
  slug: string;
  title: string;
  description: string;
  image: string;
  hint: string;
  content: string;
  isFeatured: boolean;
}

const allBlogs: Blog[] = [
  {
    slug: 'the-power-of-turmeric',
    title: 'The Power of Turmeric',
    description: 'A deep dive into the benefits of this golden spice in Ayurvedic medicine.',
    image: 'https://placehold.co/400x400.png',
    hint: 'ayurvedic herbs',
    content: `Turmeric is a bright yellow spice that has been used for centuries in Ayurvedic medicine. It contains a powerful compound called curcumin, which is responsible for most of its health benefits. Curcumin is a natural anti-inflammatory, and it can help to reduce pain and swelling. It is also a powerful antioxidant, and it can help to protect cells from damage. Turmeric has been shown to be effective in treating a variety of conditions, including arthritis, digestive problems, and skin conditions.`,
    isFeatured: true,
  },
  {
    slug: 'understanding-your-dosha',
    title: 'Understanding Your Dosha',
    description: 'Learn about the three doshas (Vata, Pitta, and Kapha) and how they relate to your health.',
    image: 'https://placehold.co/400x400.png',
    hint: 'dosha illustration',
    content: `In Ayurveda, the three doshas are Vata, Pitta, and Kapha. These doshas are made up of the five elements: earth, water, fire, air, and ether. Each person has a unique combination of these doshas, and this combination determines their physical and mental characteristics. Understanding your dosha can help you to make lifestyle choices that will support your health and well-being.`,
    isFeatured: true,
  },
  {
    slug: 'daily-rituals-for-a-balanced-life',
    title: 'Daily Rituals for a Balanced Life',
    description: 'Simple Ayurvedic practices you can incorporate into your daily routine for better health.',
    image: 'https://placehold.co/400x400.png',
    hint: 'morning routine',
    content: `Ayurveda is a system of medicine that emphasizes the importance of living in balance with nature. One of the best ways to do this is to incorporate daily rituals into your routine. These rituals can help you to stay grounded, centered, and connected to your body and mind. Some simple Ayurvedic practices you can incorporate into your daily routine include tongue scraping, oil pulling, and self-massage.`,
    isFeatured: true,
  },
  {
    slug: 'the-importance-of-agni',
    title: 'The Importance of Agni (Digestive Fire)',
    description: 'Discover how to maintain a strong digestive fire for optimal health and well-being.',
    image: 'https://placehold.co/400x400.png',
    hint: 'digestive system',
    content: `In Ayurveda, agni is the digestive fire that is responsible for transforming food into energy. When agni is strong, we are able to digest our food properly and absorb all of the nutrients. When agni is weak, we may experience digestive problems such as gas, bloating, and constipation. There are many things you can do to maintain a strong digestive fire, including eating a healthy diet, exercising regularly, and managing stress.`,
    isFeatured: false,
  },
  {
    slug: 'herbs-for-a-healthy-heart',
    title: 'Herbs for a Healthy Heart',
    description: 'Explore Ayurvedic herbs that support cardiovascular health.',
    image: 'https://placehold.co/400x400.png',
    hint: 'heart health',
    content: `There are many Ayurvedic herbs that can help to support cardiovascular health. Some of the most effective herbs include arjuna, ashwagandha, and guggul. Arjuna is a powerful heart tonic that can help to strengthen the heart muscle and improve circulation. Ashwagandha is an adaptogenic herb that can help to reduce stress and anxiety, which can have a positive impact on heart health. Guggul is a resin that can help to lower cholesterol and triglycerides.`,
    isFeatured: false,
  },
  {
    slug: 'ayurvedic-skin-care',
    title: 'Ayurvedic Skin Care',
    description: 'Natural ways to achieve radiant and healthy skin.',
    image: 'https://placehold.co/400x400.png',
    hint: 'skin care',
    content: `Ayurveda offers a holistic approach to skin care that can help you to achieve radiant and healthy skin. Ayurvedic skin care is based on the principle of balancing the three doshas. When the doshas are in balance, the skin will be healthy and glowing. Some of the most effective Ayurvedic skin care practices include using natural oils and herbs, eating a healthy diet, and managing stress.`,
    isFeatured: false,
  }
];

export function getBlogs() {
  return allBlogs;
}

export function getFeaturedBlogs() {
  return allBlogs.filter((blog) => blog.isFeatured);
}

export async function getBlogBySlug(slug: string) {
  return allBlogs.find((blog) => blog.slug === slug);
}
