import React, { useEffect } from "react";
import Card from "../component/Card";
import { useParams } from "react-router";

const ProductPage = () => {
  const { categoryName } = useParams();
  const productsByCategory = {
    skincare: [
      {
        id: 1,
        name: "CeraVe Hydrating Facial Cleanser",
        price: "$15",
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
        image: "https://m.media-amazon.com/images/I/61DRya8fwTL.jpg",
        description:
          "A sunscreen formulated with niacinamide to calm and protect sensitive skin.",
        rating: 5,
      },
      {
        id: 5,
        name: "Aveeno Daily Moisturizing Lotion",
        price: "$12",
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
        image:
          "https://assets.tatcha.com/desktop/images/product-images/moisturizers/TAT24_SITE_PPAGE_MOIS-PP01RefillsDSC_MainImage.jpg?sw=960&sh=960&q=100",
        description:
          "A rich, anti-aging moisturizer that delivers a dewy, glowing finish.",
        rating: 4.9,
      },
    ],
    makeup: [
      {
        id: 11,
        name: "Maybelline Fit Me Matte + Poreless Foundation",
        price: "$8",
        image: "https://m.media-amazon.com/images/I/71gnzWc8XwL.jpg",
        description:
          "A foundation that mattifies and refines pores for a natural, seamless finish.",
        rating: 4.5,
      },
      {
        id: 12,
        name: "Fenty Beauty Pro Filt'r Soft Matte Longwear Foundation",
        price: "$36",
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
        image:
          "https://incibeauty.com/photos/products/large/2/8/e/28ed27ae7927479f10152b616652e5ac.jpg",
        description: "A volumizing mascara that creates dramatic lashes.",
        rating: 4.6,
      },
      {
        id: 15,
        name: "Urban Decay Naked Heat Eyeshadow Palette",
        price: "$54",
        image:
          "https://images.squarespace-cdn.com/content/v1/532cddfde4b0ed181e2301c2/1499725062140-6SVEPRHHSS9T3QB4YKO7/Urban+Decay+Heat+Palette+-+swatches+and+honest+review_9962_2.jpg",
        description:
          "A heat-themed palette of warm neutrals for bold eye looks.",
        rating: 4.9,
      },
      {
        id: 16,
        name: "Charlotte Tilbury Pillow Talk Lipstick",
        price: "$34",
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
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/e/8e79020602004138620_1.jpg",
        description: "A bronzer that gives you a natural, sun-kissed glow.",
        rating: 4.8,
      },
      {
        id: 18,
        name: "MAC Cosmetics Matte Lipstick",
        price: "$19",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBLsgAjv-yFtLa9IlBwv5axm1dyszRqwDuw&s",
        description: "A highly-pigmented lipstick with a smooth matte finish.",
        rating: 4.7,
      },
      {
        id: 19,
        name: "Tarte Shape Tape Concealer",
        price: "$27",
        image: "https://tartecosmetics.com/dw/image/v2/BJRL_PRD/on/demandware.static/-/Sites-master-catalog-tarte/default/dw309e2212/836/RECTANGLE_MAIN/836-shape-tape-concealer-35N-mdm-MAIN2-0.jpg?sw=2000",
        description:
          "A full-coverage concealer with a matte finish that won't crease or fade.",
        rating: 4.9,
      },
      {
        id: 20,
        name: "Anastasia Beverly Hills Modern Renaissance Palette",
        price: "$42",
        image:
          "https://media.allure.com/photos/58c6e0c74a6ae84b57eb6eec/16:9/w_1280,c_limit/ABH%20MR%20Palette%202%20copy.jpg",
        description:
          "A palette of warm, earthy tones with a mix of matte and shimmer finishes.",
        rating: 4.8,
      },
    ],
    haircare: [
      {
        id: 21,
        name: "Olaplex Hair Perfector No. 3",
        price: "$28",
        image: "https://www.olaplex.com/images/hair-perfector-no-3.jpg",
        description: "A bond-building treatment that repairs damaged hair.",
        rating: 4.9,
      },
      {
        id: 22,
        name: "Moroccanoil Treatment",
        price: "$44",
        image: "https://www.moroccanoil.com/images/moroccanoil-treatment.jpg",
        description: "A lightweight oil that nourishes and revitalizes hair.",
        rating: 4.8,
      },
      {
        id: 23,
        name: "Living Proof Perfect Hair Day Shampoo",
        price: "$28",
        image:
          "https://www.livingproof.com/images/perfect-hair-day-shampoo.jpg",
        description:
          "A shampoo that cleanses and nourishes for healthy, shiny hair.",
        rating: 4.7,
      },
      {
        id: 24,
        name: "Aveda Damage Remedy Restructuring Shampoo",
        price: "$30",
        image: "https://www.aveda.com/images/damage-remedy-shampoo.jpg",
        description:
          "A strengthening shampoo that helps repair hair's natural shine.",
        rating: 4.6,
      },
      {
        id: 25,
        name: "Briogeo Don’t Despair, Repair! Deep Conditioning Mask",
        price: "$36",
        image:
          "https://www.briogeohaircare.com/images/dont-despair-repair-mask.jpg",
        description:
          "A hydrating mask that restores moisture and strengthens hair.",
        rating: 4.8,
      },
      {
        id: 26,
        name: "Redken Extreme Strengthening Shampoo",
        price: "$22",
        image:
          "https://www.redken.com/images/extreme-strengthening-shampoo.jpg",
        description:
          "A strengthening shampoo that helps fortify and repair distressed hair.",
        rating: 4.5,
      },
      {
        id: 27,
        name: "SheaMoisture Jamaican Black Castor Oil Strengthen & Restore Shampoo",
        price: "$15",
        image:
          "https://www.sheamoisture.com/images/jamaican-black-castor-oil-shampoo.jpg",
        description:
          "A sulfate-free shampoo that strengthens and restores hair.",
        rating: 4.6,
      },
      {
        id: 28,
        name: "Kerastase Elixir Ultime Oil Serum",
        price: "$55",
        image: "https://www.kerastase.com/images/elixir-ultime-oil-serum.jpg",
        description:
          "A luxurious oil serum that nourishes and adds shine to hair.",
        rating: 4.7,
      },
      {
        id: 29,
        name: "Paul Mitchell Tea Tree Special Shampoo",
        price: "$22",
        image: "https://www.paulmitchell.com/images/tea-tree-shampoo.jpg",
        description:
          "A revitalizing shampoo with tea tree oil for a fresh, invigorating feel.",
        rating: 4.6,
      },
    ],
    fragrances: [
      {
        id: 30,
        name: "Chanel No. 5 Eau de Parfum",
        price: "$140",
        image: "https://www.chanel.com/images/no-5-eau-de-parfum.jpg",
        description:
          "The iconic floral fragrance with notes of rose and jasmine.",
        rating: 5,
      },
      {
        id: 31,
        name: "Dior Sauvage Eau de Toilette",
        price: "$100",
        image: "https://www.dior.com/images/sauvage-eau-de-toilette.jpg",
        description:
          "A fresh and woody fragrance with notes of bergamot and ambroxan.",
        rating: 4.9,
      },
      {
        id: 32,
        name: "Tom Ford Black Orchid Eau de Parfum",
        price: "$132",
        image: "https://www.tomford.com/images/black-orchid-eau-de-parfum.jpg",
        description:
          "A rich, oriental fragrance with notes of black orchid and vanilla.",
        rating: 4.8,
      },
      {
        id: 33,
        name: "Yves Saint Laurent Black Opium",
        price: "$115",
        image: "https://www.yslbeauty.com/images/black-opium.jpg",
        description:
          "A sensual fragrance with coffee, vanilla, and white flowers.",
        rating: 4.7,
      },
      {
        id: 34,
        name: "Jo Malone London English Pear & Freesia Cologne",
        price: "$135",
        image: "https://www.jomalone.com/images/english-pear-freesia.jpg",
        description:
          "A light, fruity fragrance with notes of pear, freesia, and patchouli.",
        rating: 4.9,
      },
      {
        id: 35,
        name: "Creed Aventus Eau de Parfum",
        price: "$325",
        image: "https://www.creed.com/images/aventus-eau-de-parfum.jpg",
        description:
          "A bold, masculine fragrance with notes of pineapple, birch, and musk.",
        rating: 5,
      },
      {
        id: 36,
        name: "Giorgio Armani Acqua di Gio",
        price: "$78",
        image: "https://www.giorgioarmanibeauty.com/images/acqua-di-gio.jpg",
        description:
          "A fresh, aquatic fragrance with notes of citrus and jasmine.",
        rating: 4.8,
      },
      {
        id: 37,
        name: "Viktor & Rolf Flowerbomb",
        price: "$115",
        image: "https://www.viktor-rolf.com/images/flowerbomb.jpg",
        description:
          "A floral fragrance with notes of jasmine, orange blossom, and patchouli.",
        rating: 4.9,
      },
      {
        id: 38,
        name: "Bvlgari Omnia Crystalline Eau de Toilette",
        price: "$85",
        image: "https://www.bvlgari.com/images/omnia-crystalline.jpg",
        description:
          "A refreshing and feminine fragrance with notes of bamboo and pear.",
        rating: 4.6,
      },
      {
        id: 39,
        name: "Hermès Terre d’Hermès Eau de Toilette",
        price: "$125",
        image: "https://www.hermes.com/images/terre-d-hermes.jpg",
        description:
          "A woody, earthy fragrance with notes of orange, vetiver, and cedar.",
        rating: 4.7,
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  return (
    <div className="min-h-screen  bg-[white] py-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-12 tracking-wide">
          Explore Our Exclusive Collection
        </h1>

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




