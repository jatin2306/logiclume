/** Office locations shown on contact, footer, and structured data (HQ = Noida). */

export const primaryOffice = {
  id: "noida",
  label: "India — Head office",
  line1: "8, B-Block, Sector 62",
  line2: "Noida, Uttar Pradesh 201309",
  short: "8, B-Block, Sector 62, Noida, UP 201309",
  countryCode: "IN",
};

export const internationalOffices = [
  {
    id: "singapore",
    label: "Singapore",
    line1: "160 Robinson Road, #14-04",
    line2: "Singapore 068914",
    countryCode: "SG",
  },
  {
    id: "uae",
    label: "United Arab Emirates",
    line1: "Dubai Internet City",
    line2: "Dubai, United Arab Emirates",
    countryCode: "AE",
  },
];

export const allOffices = [primaryOffice, ...internationalOffices];

export function formatOfficeBlock(office) {
  return `${office.line1}, ${office.line2}`;
}
