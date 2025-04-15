// // @/lib/products.ts
// export { eclipsSeriesProducts } from "./eclipsSeriesProducts";
// export { endurancePlusSeriesProducts } from "./endurancePlusSeriesProducts";
// export { alexenderSeriesProducts } from "./alexenderSeriesProducts";
// export { ironSeriesProducts } from "./ironSeriesProducts";

// Define a common product type for consistency (optional, for TypeScript)
export type Product = {
  id: number;
  sku: string;
  name: string;
  image: string;
  category: string;
  description: string;
  featured: boolean;
};

// Eclips Series Products
export const eclipsSeriesProducts: Product[] = [
  {
    id: 1,
    name: "Gymline U2005C Lateral Raise",
    sku: "U2005C",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/LateralRaiseU2005CA-grey-2.png?v=1735626690",
    category: "Eclips Series",
    description: `Net Weight: 178KG 
     Weight Stack: 52KG 
     Product Dimension: 980*1290*1490MM`,
    featured: false,
  },
  {
    id: 2,
    name: "Gymline U2006C Shoulder Press",
    sku: "U2006C",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/ShoulderPressU2006CA-grey-11.png?v=1735626715",
    category: "Eclips Series",
    description: `Net Weight: 297KG 
     Weight Stack: 110KG 
     Product Dimension: 1750*1350*1490MM`,
    featured: false,
  },
  {
    id: 3,
    name: "Gymline U2008C Vertical Press",
    sku: "U2008C",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/U2008CA-grey-VerticalPress.png?v=1735626779",
    category: "Eclips Series",
    description: `Net Weight: 235KG 
     Weight Stack: 110KG 
     Product Dimension: 1510*1059*1814MM`,
    featured: false,
  },
  {
    id: 4,
    name: "Gymline U2008C Vertical Press",
    sku: "U2008C",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/U2008CA-grey-VerticalPress.png?v=1735626779",
    category: "Eclips Series",
    description: `Net Weight: 235KG 
     Weight Stack: 110KG 
     Product Dimension: 1510*1059*1814MM`,
    featured: false,
  },
  {
    id: 5,
    name: "Gymline U2005C Lateral Raise",
    sku: "U2005C",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/LateralRaiseU2005CA-grey-2.png?v=1735626690",
    category: "Eclips Series",
    description: `Net Weight: 178KG 
     Weight Stack: 52KG 
     Product Dimension: 980*1290*1490MM`,
    featured: false,
  },
  {
    id: 6,
    name: "Gymline U2006C Shoulder Press",
    sku: "U2006C",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/ShoulderPressU2006CA-grey-11.png?v=1735626715",
    category: "Eclips Series",
    description: `Net Weight: 297KG 
     Weight Stack: 110KG 
     Product Dimension: 1750*1350*1490MM`,
    featured: false,
  },
  {
    id: 7,
    name: "Gymline U2008C Vertical Press",
    sku: "U2008C",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/U2008CA-grey-VerticalPress.png?v=1735626779",
    category: "Eclips Series",
    description: `Net Weight: 235KG 
     Weight Stack: 110KG 
     Product Dimension: 1510*1059*1814MM`,
    featured: false,
  },
  {
    id: 8,
    name: "Gymline U2008C Vertical Press",
    sku: "U2009C",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/U2008CA-grey-VerticalPress.png?v=1735626779",
    category: "Eclips Series",
    description: `Net Weight: 235KG 
     Weight Stack: 110KG 
     Product Dimension: 1510*1059*1814MM`,
    featured: false,
  },
];
// Alexender Series Products
export const alexenderSeriesProducts: Product[] = [
  {
    id: 1,
    name: "Gymline S-6738 Pec Fly Rear Delt with Iron Cover",
    sku: "S6738",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/S6738pecfly.png?v=1736330915",
    category: "Alexzender Series",
    description:
      "Net Weight: 229 kg, Weight stack: 100 kg, Product Dimension: 1250*1300*2022mm",
    featured: false,
  },
  {
    id: 2,
    name: "Gymline S6763 Multi Press with Iron Cover",
    sku: "S6763",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/S6763multipress.png?v=1736331282",
    category: "Alexzender Series",
    description:
      "Net Weight: 279 kg, Weight stack: 100 kg, Product Dimension: 1927*1347*1580mm",
    featured: false,
  },
  {
    id: 3,
    name: "Gymline S6759 Low Row/Lat Pull Down with Iron Cover",
    sku: "S6759",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/S6759latpulldown_lowrow.png?v=1736331525",
    category: "Alexzender Series",
    description:
      "Net Weight: 252 kg, Weight stack: 100 kg, Product Dimension: 2086*1220*2200mm",
    featured: false,
  },
  {
    id: 4,
    name: "Gymline S6761 Adductor/Abductor with Iron Cover",
    sku: "S6761",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/S6761abductor_adductor.png?v=1736331708",
    category: "Alexzender Series",
    description:
      "Net Weight: 204 kg, Weight stack: 100 kg, Product Dimension: 1694*625*1580mm",
    featured: false,
  },
  {
    id: 5,
    name: "Gymline S6764 Leg Extension/Prone Leg Curl with Iron Cover",
    sku: "S6764",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/S6764legextension_pronelegcurl.png?v=1736331847",
    category: "Alexzender Series",
    description:
      "Net Weight: 234 kg, Weight stack: 100 kg, Product Dimension: 1710*1008*1580mm",
    featured: false,
  },
];

// Endurance Plus Series Products
export const endurancePlusSeriesProducts: Product[] = [
  {
    id: 1,
    name: "Gymline EP7001 Chest Press",
    sku: "EP7001",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/AM7-001ChestPress.png?v=1735629245",
    category: "Endurance Plus Series",
    description:
      "Net Weight: 203 KG, Weight Stack: 80 KG, Product Dimension: 1390*1220*1560 MM",
    featured: false,
  },
  {
    id: 2,
    name: "Gymline EP7002A Pec Fly Rear Delt",
    sku: "EP7002A",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/AM7-002APecFlyRearDelt.png?v=1735629261",
    category: "Endurance Plus Series",
    description:
      "Net Weight: 208 KG, Weight Stack: 80 KG, Product Dimension: 1460*1305*2030 MM",
    featured: false,
  },
  {
    id: 3,
    name: "Gymline EP7003 Shoulder Press",
    sku: "EP7003",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/AM7-003ShoulderPress.png?v=1735629278",
    category: "Endurance Plus Series",
    description:
      "Net Weight: 180 KG, Weight Stack: 80 KG, Product Dimension: 1445*1370*1560 MM",
    featured: false,
  },
  {
    id: 4,
    name: "Gymline EP7004 Seated Row",
    sku: "EP7004",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/AM7-004SeatedRow.png?v=1735629291",
    category: "Endurance Plus Series",
    description:
      "Net Weight: 186 KG, Weight Stack: 80 KG, Product Dimension: 1450*910*1560 MM",
    featured: false,
  },
  {
    id: 5,
    name: "Gymline EP7006 Tricep Press",
    sku: "EP7006",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/AM7-007TricepPress.png?v=1735629303",
    category: "Endurance Plus Series",
    description:
      "Net Weight: 198 KG, Weight Stack: 80 KG, Product Dimension: 1415*1160*1560 MM",
    featured: false,
  },
  {
    id: 6,
    name: "Gymline EP7008 Assisted Chin/Dip",
    sku:   "EP7008",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/AM7-008AssistedChinDip.png?v=1735629337",
    category: "Endurance Plus Series",
    description:
      "Net Weight: 315 KG, Weight Stack: 80 KG, Product Dimension: 1310*1320*2435 MM",
    featured: false,
  },
  {
    id: 7,
    name: "Gymline EP7012A Seated Horizontal Pulley",
    sku: "EP7012A",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/AM7-012ASeatedHorizontalPulley.png?v=1735629367",
    category: "Endurance Plus Series",
    description:
      "Net Weight: 194 KG, Weight Stack: 80 KG, Product Dimension: 1790*1020*1700 MM",
    featured: false,
  },
  {
    id: 8,
    name: "Gymline EP7013 Seated Leg Curl",
    sku: "EP7013",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/AM7-014ASeatedLegCurl.png?v=1735629387",
    category: "Endurance Plus Series",
    description:
      "Net Weight: 211 KG, Weight Stack: 80 KG, Product Dimension: 1670*1050*1560 MM",
    featured: false,
  },
  {
    id: 9,
    name: "Gymline EP7013A Horizontal Leg Curl",
    sku: "EP7013A",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/AM7-013AHorizontalLegCurl.png?v=1735629410",
    category: "Endurance Plus Series",
    description:
      "Net Weight: 181 KG, Weight Stack: 80 KG, Product Dimension: 1660*1035*1560 MM",
    featured: false,
  },
  {
    id: 10,
    name: "Gymline EP7014 Leg Extension",
    sku:    "EP7014",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/AM7-014LegExtension.png?v=1735629458",
    category: "Endurance Plus Series",
    description:
      "Net Weight: 215 KG, Weight Stack: 80 KG, Product Dimension: 1425*1035*1560 MM",
    featured: false,
  },
];

// Iron Series Products
export const ironSeriesProducts: Product[] = [
  {
    id: 1,
    name: "Gymline JGE6738 Pec Fly/Rear Delt",
    sku: "JGE6738",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/E6738pecfly.png?v=1735628870",
    category: "Iron Series",
    description:
      "Net Weight: 229 KG, Weight stack: 100 KG, Product Dimension: 1250*1300*2022 MM",
    featured: false,
  },
  {
    id: 2,
    name: "Gymline JGE6759 Low Row/Lat Pull Down",
    sku:    "JGE6759",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/E6759latpulldown_lowrow.png?v=1735628918",
    category: "Iron Series",
    description:
      "Net Weight: 252 KG, Weight stack: 100 KG, Product Dimension: 2086*1220*2200 MM",
    featured: false,
  },
  {
    id: 3,
    name: "Gymline JGE6761 Adductor/Abductor",
    sku: "JGE6761",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/E6761abductor_adductor.png?v=1735628973",
    category: "Iron Series",
    description:
      "Net Weight: 204 KG, Weight stack: 100 KG, Product Dimension: 1694*625*1580 MM",
    featured: false,
  },
  {
    id: 4,
    name: "Gymline JGE6763 Multi Press",
    sku: "JGE6763",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/E6763multipress.png?v=1735628935",
    category: "Iron Series",
    description:
      "Net Weight: 279 KG, Weight stack: 100 KG, Product Dimension: 1927*1347*1580 MM",
    featured: false,
  },
  {
    id: 5,
    name: "Gymline JGE6760 Bicep/Tricep",
    sku: "JGE6760",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/E6760bicep_tricep.png?v=1735628893",
    category: "Iron Series",
    description:
      "Net Weight: 214 KG, Weight stack: 100 KG, Product Dimension: 1250*1072*1580 MM",
    featured: false,
  },
  {
    id: 6,
    name: "Gymline JGE6764 Leg Extension/Prone Leg Curl",
    sku: "JGE6764",
    image:
      "https://cdn.shopify.com/s/files/1/0634/4359/9509/files/E6764legextension_pronelegcurl.png?v=1735628957",
    category: "Iron Series",
    description:
      "Net Weight: 234 KG, Weight stack: 100 KG, Product Dimension: 1710*1008*1580 MM",
    featured: false,
  },
];

// Optional: Export all products combined for dynamic route lookup
export const allProducts: Product[] = [
  ...alexenderSeriesProducts,
  ...eclipsSeriesProducts,
  ...endurancePlusSeriesProducts,
  ...ironSeriesProducts,
];
