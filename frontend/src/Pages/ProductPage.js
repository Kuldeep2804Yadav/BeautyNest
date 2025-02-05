import React, { useEffect } from "react";
import Card from "../component/Card";
import { useParams } from "react-router";

const ProductPage = () => {
  const { categoryName } = useParams();

  const productsByCategory = [
    {
      id: 1,
      name: "CeraVe Hydrating Facial Cleanser",
      price: "$15",
      category: "skincare",

      image:
        "https://images-static.nykaa.com/media/catalog/product/f/8/f81ce043337875597326_7.jpg?tr=w-500",
      description:
        "A gentle cleanser for dry skin, packed with ceramides and hydrating ingredients.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Neutrogena Hydro Boost Water Gel",
      price: "$25",
      category: "skincare",
      image:
        "https://m.media-amazon.com/images/I/31TNSGTPE3L._SX300_SY300_QL70_FMwebp_.jpg",
      description:
        "A lightweight moisturizer that absorbs quickly to hydrate and plump skin.",
      rating: 4.8,
    },
    {
      id: 3,
      name: "La Roche-Posay Toleriane Double Repair Moisturizer",
      price: "$30",
      category: "skincare",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZS1hFoT0bw-ih4im1qSLFL8E5isRIzNRrkQ&s",
      description:
        "Restores the skin’s moisture barrier and helps prevent future damage.",
      rating: 4.6,
    },
    {
      id: 4,
      name: "EltaMD UV Clear Broad-Spectrum SPF 46",
      price: "$36",
      category: "skincare",

      image: "https://m.media-amazon.com/images/I/61DRya8fwTL.jpg",
      description:
        "A sunscreen formulated with niacinamide to calm and protect sensitive skin.",
      rating: 5,
    },
    {
      id: 5,
      name: "Aveeno Daily Moisturizing Lotion",
      price: "$12",
      category: "skincare",

      image:
        "https://images.ctfassets.net/aub2fvcyp2t8/2dDq3g71dNVbV0oXDqEERl/e0b7d46096bf2aa0be2be9c93d5f3506/image-dm-lotion-01b-en-in",
      description:
        "A daily moisturizer that soothes and hydrates the skin for 24 hours.",
      rating: 4.3,
    },
    {
      id: 6,
      name: "Olay Regenerist Micro-Sculpting Cream",
      price: "$40",
      category: "skincare",

      image:
        "https://images-static.nykaa.com/media/catalog/product/0/f/0f128974902430736428a_ab6.jpg?tr=w-500",
      description:
        "Anti-aging cream that visibly firms skin and reduces fine lines.",
      rating: 4.7,
    },
    {
      id: 7,
      name: "First Aid Beauty Ultra Repair Cream",
      price: "$34",
      category: "skincare",

      image:
        "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000494262427/34NnbtrY2W-000000000494262427_1.jpg",
      description:
        "A rich, fast-absorbing moisturizer to hydrate, heal, and calm distressed skin.",
      rating: 4.9,
    },
    {
      id: 8,
      name: "Clinique Moisture Surge 72-Hour Auto-Replenishing Hydrator",
      price: "$39",
      category: "skincare",

      image:
        "https://hips.hearstapps.com/hmg-prod/images/1x1-1-6703efac86609.jpg",
      description:
        "A refreshing gel-cream that provides an instant moisture boost.",
      rating: 4.8,
    },
    {
      id: 9,
      name: "Kiehl’s Ultra Facial Cream",
      price: "$32",
      category: "skincare",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Aok1x4c2xmALz8JihPeQ03G9ugyqmOIjhg&s",
      description:
        "A rich facial cream that helps skin retain moisture for 24 hours.",
      rating: 4.6,
    },
    {
      id: 10,
      name: "Tatcha The Dewy Skin Cream",
      price: "$68",
      category: "skincare",

      image:
        "https://assets.tatcha.com/desktop/images/product-images/moisturizers/TAT24_SITE_PPAGE_MOIS-PP01RefillsDSC_MainImage.jpg?sw=960&sh=960&q=100",
      description:
        "A rich, anti-aging moisturizer that delivers a dewy, glowing finish.",
      rating: 4.9,
    },

    {
      id: 11,
      name: "Maybelline Fit Me Matte + Poreless Foundation",
      price: "$8",
      category: "makeup",

      image: "https://m.media-amazon.com/images/I/71gnzWc8XwL.jpg",
      description:
        "A foundation that mattifies and refines pores for a natural, seamless finish.",
      rating: 4.5,
    },
    {
      id: 12,
      name: "Fenty Beauty Pro Filt'r Soft Matte Longwear Foundation",
      price: "$36",
      category: "makeup",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTgkAZKd8uDpVP9EmOA7fhDKL6datkd9uyA&s",
      description:
        "A long-wearing foundation that gives a soft matte finish and buildable coverage.",
      rating: 4.7,
    },
    {
      id: 13,
      name: "NARS Radiant Creamy Concealer",
      price: "$30",
      category: "makeup",

      image:
        "https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45012252/A23NARS45012252_A23NARS45012252_3.jpg",
      description:
        "A creamy concealer with a radiant finish that covers imperfections.",
      rating: 4.8,
    },
    {
      id: 14,
      name: "Too Faced Better Than Sex Mascara",
      price: "$26",
      category: "makeup",

      image:
        "https://incibeauty.com/photos/products/large/2/8/e/28ed27ae7927479f10152b616652e5ac.jpg",
      description: "A volumizing mascara that creates dramatic lashes.",
      rating: 4.6,
    },
    {
      id: 15,
      name: "Urban Decay Naked Heat Eyeshadow Palette",
      price: "$54",
      category: "makeup",

      image:
        "https://images.squarespace-cdn.com/content/v1/532cddfde4b0ed181e2301c2/1499725062140-6SVEPRHHSS9T3QB4YKO7/Urban+Decay+Heat+Palette+-+swatches+and+honest+review_9962_2.jpg",
      description: "A heat-themed palette of warm neutrals for bold eye looks.",
      rating: 4.9,
    },
    {
      id: 16,
      name: "Charlotte Tilbury Pillow Talk Lipstick",
      price: "$34",
      category: "makeup",

      image:
        "https://images-static.nykaa.com/media/catalog/product/b/1/b13841c5060542728485.jpg?tr=w-500",
      description:
        "A creamy, long-lasting lipstick in a universally flattering nude-pink shade.",
      rating: 5,
    },
    {
      id: 17,
      name: "Benefit Hoola Bronzer",
      price: "$32",
      category: "makeup",

      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/e/8e79020602004138620_1.jpg",
      description: "A bronzer that gives you a natural, sun-kissed glow.",
      rating: 4.8,
    },
    {
      id: 18,
      name: "MAC Cosmetics Matte Lipstick",
      price: "$19",
      category: "makeup",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBLsgAjv-yFtLa9IlBwv5axm1dyszRqwDuw&s",
      description: "A highly-pigmented lipstick with a smooth matte finish.",
      rating: 4.7,
    },
    {
      id: 19,
      name: "Tarte Shape Tape Concealer",
      price: "$27",
      category: "makeup",

      image:
        "https://tartecosmetics.com/dw/image/v2/BJRL_PRD/on/demandware.static/-/Sites-master-catalog-tarte/default/dw309e2212/836/RECTANGLE_MAIN/836-shape-tape-concealer-35N-mdm-MAIN2-0.jpg?sw=2000",
      description:
        "A full-coverage concealer with a matte finish that won't crease or fade.",
      rating: 4.9,
    },
    {
      id: 20,
      name: "Anastasia Beverly Hills Modern Renaissance Palette",
      price: "$42",
      category: "makeup",

      image:
        "https://media.allure.com/photos/58c6e0c74a6ae84b57eb6eec/16:9/w_1280,c_limit/ABH%20MR%20Palette%202%20copy.jpg",
      description:
        "A palette of warm, earthy tones with a mix of matte and shimmer finishes.",
      rating: 4.8,
    },

    {
      id: 21,
      name: "Olaplex Hair Perfector No. 3",
      price: "$28",
      category: "haircare",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzNi6huZmCajRY2Yrl50eVcQPT6O5CkPCww&s",
      description: "A bond-building treatment that repairs damaged hair.",
      rating: 4.9,
    },
    {
      id: 22,
      name: "Moroccanoil Treatment",
      price: "$44",
      category: "haircare",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQepIEPnv8UBPoYRpWWFBDlysTu60kII3xg&s",
      description: "A lightweight oil that nourishes and revitalizes hair.",
      rating: 4.8,
    },
    {
      id: 23,
      name: "Living Proof Perfect Hair Day Shampoo",
      price: "$28",
      category: "haircare",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4EpxQ4COWyLo1MGPb5JBgi4DEPpX0Yzf9Q&s",
      description:
        "A shampoo that cleanses and nourishes for healthy, shiny hair.",
      rating: 4.7,
    },
    {
      id: 24,
      name: "Aveda Damage Remedy Restructuring Shampoo",
      price: "$30",
      category: "haircare",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbohXp70YNAWYlaOpHrj3-_7LTnLQT7RAPyA&s",
      description:
        "A strengthening shampoo that helps repair hair's natural shine.",
      rating: 4.6,
    },
    {
      id: 25,
      name: "Briogeo Don’t Despair, Repair! Deep Conditioning Mask",
      price: "$36",
      category: "haircare",

      image: "https://m.media-amazon.com/images/I/51gXklsDtmL.jpg",
      description:
        "A hydrating mask that restores moisture and strengthens hair.",
      rating: 4.8,
    },
    {
      id: 26,
      name: "Redken Extreme Strengthening Shampoo",
      price: "$22",
      category: "haircare",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYjXeoJw5yNWHpg-se5NNCDL5K5g7C_JMFw&s",
      description:
        "A strengthening shampoo that helps fortify and repair distressed hair.",
      rating: 4.5,
    },
    {
      id: 27,
      name: "SheaMoisture Jamaican Black Castor Oil Strengthen & Restore Shampoo",
      price: "$15",
      category: "haircare",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VGU2EQp8GmpdLWsu4Y59bXg5NM8i3yLhYA&s",
      description: "A sulfate-free shampoo that strengthens and restores hair.",
      rating: 4.6,
    },
    {
      id: 28,
      name: "Kerastase Elixir Ultime Oil Serum",
      price: "$55",
      category: "haircare",

      image:
        "https://www.kerastase.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-kerastase-master-catalog/en_IN/dwc8aad33d/2024/KER_00303/75ml/KER_00303_75ml_Packshot_Image1.jpg",
      description:
        "A luxurious oil serum that nourishes and adds shine to hair.",
      rating: 4.7,
    },
    {
      id: 29,
      name: "Paul Mitchell Tea Tree Special Shampoo",
      price: "$22",
      category: "haircare",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVLMXdTKq6gJ5YcsXyM1l3OGDl-sSqGU9vQ&s",
      description:
        "A revitalizing shampoo with tea tree oil for a fresh, invigorating feel.",
      rating: 4.6,
    },

    {
      id: 30,
      name: "Chanel No. 5 Eau de Parfum",
      price: "$140",
      category: "fragrances",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0KxEg5GvqC8ms3-_Zc6skJcIk1b46P2Pyg&s",
      description:
        "The iconic floral fragrance with notes of rose and jasmine.",
      rating: 5,
    },
    {
      id: 31,
      name: "Dior Sauvage Eau de Toilette",
      price: "$100",
      category: "fragrances",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08EJ_H1VGAFXeySXdzkYzzWhe4L-ETdvC5g&s",
      description:
        "A fresh and woody fragrance with notes of bergamot and ambroxan.",
      rating: 4.9,
    },
    {
      id: 32,
      name: "Tom Ford Black Orchid Eau de Parfum",
      price: "$132",
      category: "fragrances",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Hpw_KzrQ54MVOkSS7fuQT44zBbQsctJw0Q&s",
      description:
        "A rich, oriental fragrance with notes of black orchid and vanilla.",
      rating: 4.8,
    },
    {
      id: 33,
      name: "Yves Saint Laurent Black Opium",
      price: "$115",
      category: "fragrances",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpRfILQ_2SXkMzaUDyWckmBU9KFp_jKKc1w&s",
      description:
        "A sensual fragrance with coffee, vanilla, and white flowers.",
      rating: 4.7,
    },
    {
      id: 34,
      name: "Jo Malone London English Pear & Freesia Cologne",
      price: "$135",
      category: "fragrances",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYCppB6earbJrAA1zgJ8Dk0zDtTz9P2BQWw&s",
      description:
        "A light, fruity fragrance with notes of pear, freesia, and patchouli.",
      rating: 4.9,
    },
    {
      id: 35,
      name: "Creed Aventus Eau de Parfum",
      price: "$325",
      category: "fragrances",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNY0wLkzFOj8DCpgjlldFKV7QbU0Xf_jfLGA&s",
      description:
        "A bold, masculine fragrance with notes of pineapple, birch, and musk.",
      rating: 5,
    },
    {
      id: 36,
      name: "Giorgio Armani Acqua di Gio",
      price: "$78",
      category: "fragrances",

      image: "https://m.media-amazon.com/images/I/51TWBd6rSwL.jpg",
      description:
        "A fresh, aquatic fragrance with notes of citrus and jasmine.",
      rating: 4.8,
    },
    {
      id: 37,
      name: "Viktor & Rolf Flowerbomb",
      price: "$115",
      category: "fragrances",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzY7QBAq1Yej3uuy8jffND2qXfGTVbP3WBw&s",
      description:
        "A floral fragrance with notes of jasmine, orange blossom, and patchouli.",
      rating: 4.9,
    },
    {
      id: 38,
      name: "Bvlgari Omnia Crystalline Eau de Toilette",
      price: "$85",
      category: "fragrances",

      image:
        "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000493396222/OYcBlSzPDy8-000000000493396222_1.jpg",
      description:
        "A refreshing and feminine fragrance with notes of bamboo and pear.",
      rating: 4.6,
    },
    {
      id: 39,
      name: "Hermès Terre d’Hermès Eau de Toilette",
      price: "$125",
      category: "fragrances",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRp7B-3__ZcJEbEDQ7oCfdrrIJJtFNuA6ug&s",
      description:
        "A woody, earthy fragrance with notes of orange, vetiver, and cedar.",
      rating: 4.7,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  return (
    <div className="min-h-screen  bg-[white] py-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-12 tracking-wide">
          Explore Our <span className="capitalize">{categoryName}</span>{" "}
          Collection
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {productsByCategory[categoryName].map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
