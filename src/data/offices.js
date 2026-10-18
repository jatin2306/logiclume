/** Office locations shown on contact, footer, and structured data (HQ = Noida). */

export const primaryOffice = {
  id: "noida",
  label: "India — Head office",
  line1: "Noida One, B-8, Block B, Industrial Area, Sector 62",
  line2: "Noida, Uttar Pradesh 201309",
  short: "Noida One, B-8, Sector 62, Noida, UP 201309",
  countryCode: "IN",
};

export const internationalOffices = [
  {
    id: "usa",
    label: "USA",
    line1: "1250 Broadway, Suite 3601",
    line2: "New York, NY 10001, United States",
    countryCode: "US",
  },
  {
    id: "uk",
    label: "United Kingdom",
    line1: "71-75 Shelton Street, Covent Garden",
    line2: "London WC2H 9JQ, United Kingdom",
    countryCode: "GB",
  },
];

export const allOffices = [...internationalOffices, primaryOffice];

export function formatOfficeBlock(office) {
  return `${office.line1}, ${office.line2}`;
}
