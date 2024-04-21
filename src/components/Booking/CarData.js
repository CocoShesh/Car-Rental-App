const type = [
  "Audi A1S-Line",
  "Vw Golf 6",
  "Toyota Camry",
  " BMW 320 ModernLine",
  "Mercedes-Benz GLk",
  "VW Passat CC",
];

const pickUp = ["Sucat", "Taguig", "Alabang", "Bicutan", "Makati"];

const dropOf = ["Taguig", "Sucat", "Bicutan", "Makati", "Alabang"];

export { type, pickUp, dropOf };

export const Cars = [
  { carName: "Audi A1S-Line", src: "../images/Audi.jpg" },
  { carName: "Vw Golf 6", src: "../images/Golf.jpg" },
  { carName: "Toyota Camry", src: "../images/toyotacamry.jpg" },
  { carName: " BMW 320 ModernLine", src: "../images/ModernLine.jpg" },
  { carName: "Mercedes-Benz GLk", src: "../images/Mercedes.jpg" },
  { carName: "VW Passat CC", src: "../images/Passat.jpg" },
];

export const inputFields = [
  {
    label: "First Name",
    name: "firstName",
    placeholder: "Enter your first name",
  },
  {
    label: "Last Name",
    name: "lastName",
    placeholder: "Enter your last name",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    placeholder: "Enter your phone number",
  },
  { label: "Age", name: "age", placeholder: "Enter your age" },
  { label: "Email", name: "email", placeholder: "Enter your email address" },
  { label: "Address", name: "address", placeholder: "Enter your address" },
  { label: "City", name: "city", placeholder: "Enter your city" },
  { label: "Zip Code", name: "zipCode", placeholder: "Enter your zip code" },
];
