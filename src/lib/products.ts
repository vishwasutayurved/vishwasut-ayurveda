export const products = [
  {
    id: 'triphala-guggulu',
    name: 'Triphala Guggulu',
    price: 15.99,
    image: 'https://placehold.co/600x600.png',
    hint: 'ayurvedic medicine bottle',
    description: 'A traditional Ayurvedic formula for detoxification and rejuvenation.',
    details: 'Triphala Guggulu is a classic Ayurvedic formulation that combines the detoxifying and rejuvenating actions of Triphala with the deeply penetrating and cleansing actions of Guggulu. It is particularly useful for weight management as it helps to maintain healthy metabolism and digestion.',
    ingredients: ['Amalaki', 'Bibhitaki', 'Haritaki', 'Guggulu', 'Pippali'],
    usage: '1-2 tablets, once or twice daily, or as directed by your health practitioner.',
    dosage: [
        { ageGroup: 'Adults (18+)', dailyDosage: '1-2 tablets, twice daily' },
        { ageGroup: 'Children (12-18)', dailyDosage: '1 tablet, twice daily' },
        { ageGroup: 'Below 12', dailyDosage: 'Consult a practitioner' },
    ]
  },
  {
    id: 'ashwagandha-churna',
    name: 'Ashwagandha Churna',
    price: 12.50,
    image: 'https://placehold.co/600x600.png',
    hint: 'ayurvedic powder jar',
    description: 'An adaptogenic herb that helps the body manage stress.',
    details: 'Ashwagandha is one of the most important herbs in Ayurveda. It is an adaptogen that helps the body cope with external and internal stress. It is also known to support energy levels, cognitive function, and a healthy immune system.',
    ingredients: ['Withania somnifera (Ashwagandha) root powder'],
    usage: '3-6 grams with warm milk or water, once or twice daily.',
    dosage: [
        { ageGroup: 'Adults (18+)', dailyDosage: '1 teaspoon with warm milk' },
        { ageGroup: 'Children (12-18)', dailyDosage: '1/2 teaspoon with warm milk' },
        { ageGroup: 'Below 12', dailyDosage: 'Not recommended' },
    ]
  },
  {
    id: 'brahmi-oil',
    name: 'Brahmi Oil',
    price: 18.00,
    image: 'https://placehold.co/600x600.png',
    hint: 'ayurvedic oil bottle',
    description: 'A medicated oil for scalp nourishment and mental clarity.',
    details: 'Brahmi Oil is a traditional Ayurvedic oil used to anoint the head and hair. It is known to calm the mind, promote mental clarity, and support healthy hair growth. Massaging the scalp with this oil can relieve stress and tension.',
    ingredients: ['Brahmi (Bacopa monnieri)', 'Sesame oil base'],
    usage: 'Gently massage into the scalp and hair. Leave on for at least 30 minutes before washing.',
    dosage: [
        { ageGroup: 'All Ages', dailyDosage: 'Apply externally as needed' },
    ]
  },
  {
    id: 'chyawanprash',
    name: 'Chyawanprash',
    price: 22.99,
    image: 'https://placehold.co/600x600.png',
    hint: 'ayurvedic jam jar',
    description: 'A powerful herbal jam for boosting immunity and overall vitality.',
    details: 'Chyawanprash is a delicious nutritive jam that has been used in Ayurveda for thousands of years. It is a potent blend of herbs, spices, and Amla fruit, which is a rich source of Vitamin C. It supports immune function, energy, and overall well-being.',
    ingredients: ['Amla', 'A-long-list-of-many-herbs'],
    usage: '1-2 teaspoons daily, followed by warm milk or water.',
    dosage: [
        { ageGroup: 'Adults (18+)', dailyDosage: '1-2 teaspoons, twice daily' },
        { ageGroup: 'Children (6-18)', dailyDosage: '1 teaspoon, twice daily' },
        { ageGroup: 'Below 6', dailyDosage: '1/2 teaspoon, once daily' },
    ]
  }
];

export type Product = (typeof products)[0];
