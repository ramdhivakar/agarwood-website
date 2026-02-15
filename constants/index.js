const navLinks = [
 {
	id: "cocktails",
	title: "Collection",
 },
 {
	id: "about",
	title: "Heritage",
 },
 {
	id: "art",
	title: "The Craft",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Tenno Kyara Supreme",
	detail: "Imperial Temple Resin – 40+ Year Formation",
	price: "$28,000/kg"
},
{
	name: "Saigon Imperial Kynam",
	detail: "Oil-Saturated Black Core",
	price: "$22,500/kg"
},
{
	name: "Ranjatai Sacred Relic",
	detail: "Historic Ceremonial Grade",
	price: "By Private Acquisition"
},
{
	name: "Mandalay Royal Black",
	detail: "Dense Balsamic Heartwood",
	price: "$18,900/kg"
},

];

const mockTailLists = [
 {
	name: "Phnom Heritage Reserve",
	detail: "Sweet Resin with Silken Smoke",
	price: "$11,800/kg"
},
{
	name: "Assam Noir Estate",
	detail: "Dark Resin Veins – Aged Stock",
	price: "$9,400/kg"
},
{
	name: "Chengxiang Gold Crest",
	detail: "Layered Sweet Earth Tones",
	price: "$12,200/kg"
},
{
	name: "Siam Crown Vintage",
	detail: "Spiced Honey Resin Core",
	price: "$8,700/kg"
},
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Slow, controlled burning quality",
 "Balanced aromatic depth",
 "Zero artificial enhancement",
 "Preserved in climate care",
];

const goodLists = [
 "Hand-selected resin cores",
 "Naturally aged heartwood",
 "Traditional grading methods",
 "Precision hand-cut finishing",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
{
	id: 1,
	name: "Tenno Kyara",
	image: "/images/drink1.png",
	title: "The Pinnacle of Resin Rarity",
	detail:
	 "Extremely limited formation. Reserved for private collectors and ceremonial burning.",
},
{
	id: 2,
	name: "Imperial Kynam",
	image: "/images/drink2.png",
	title: "Depth Forged by Time",
	detail:
	 "Rare resin concentration. Offered only to discerning connoisseurs.",
},
{
	id: 3,
	name: "Assam Noir Estate",
	image: "/images/drink3.png",
	title: "Dark, Earthy Elegance",
	detail:
	 "Aged heartwood of exceptional density. Available in strictly curated quantities.",
},
{
	id: 4,
	name: "Cambodian Heritage",
	image: "/images/drink4.png",
	title: "Sweetness in Sacred Smoke",
	detail:
	 "Select formation. Intended for refined ritual and private reserve collections.",
},

];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};
