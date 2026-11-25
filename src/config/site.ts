/**
 * Datos de la clínica: única fuente de verdad para toda la web.
 * Cualquier cambio de teléfono, email, horario, etc. se hace solo aquí.
 */

const PHONE_E164 = "+34982007791";
const WHATSAPP_E164 = "+34607096268";
const EMAIL = "contacto@clinicamartasampil.com";

export const site = {
  name: "Clínica Oftalmológica Dra. Marta Sampil",
  shortName: "Clínica Oftalmológica",
  doctor: "Dra. Marta Sampil",
  doctorFullName: "Dra. Marta Sampil González",
  domain: "clinicamartasampil.com",
  url: "https://clinicamartasampil.com",

  phone: {
    display: "982 007 791",
    href: `tel:${PHONE_E164}`,
  },
  email: {
    display: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  whatsapp: {
    href: `https://wa.me/${WHATSAPP_E164.slice(1)}?text=${encodeURIComponent(
      "Hola, me gustaría pedir una cita",
    )}`,
  },

  address: {
    street: "R. Roberto Baamonde, 24, 1º B",
    postalCode: "27400",
    city: "Monforte de Lemos",
    province: "Lugo",
    full: "R. Roberto Baamonde, 24, 1º B, 27400 Monforte de Lemos, Lugo",
  },

  map: {
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.6703288919775!2d-7.516596524236748!3d42.51981337117854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd301381d69522bd%3A0xb8d90070535dfe3f!2sCl%C3%ADnica%20Oftalmol%C3%B3gica%20Dra.%20Sampil!5e0!3m2!1ses!2ses!4v1762450225628!5m2!1ses!2ses",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Clínica Oftalmológica Dra. Sampil, Monforte de Lemos",
    )}`,
  },

  schedule: [
    { days: "Lunes a viernes", hours: "10:00 - 13:30" },
    { days: "Lunes, martes y jueves", hours: "16:00 - 19:30" },
  ],

  legal: {
    healthRegistry: "C-27-001390",
    medicalLicense: "273607051",
  },
} as const;
