export interface Education {
  title: string;
  year: string;
}

export interface Experience {
  period: string;
  role: string;
  place: string;
}

export const education: readonly Education[] = [
  {
    title: "Licenciada en Medicina y Cirugía por la Universidad de Santiago de Compostela",
    year: "2010",
  },
  {
    title:
      "Estancia formativa en Unidad de Superficie e Inflamación Ocular en el Hospital Clínico San Carlos de Madrid",
    year: "2014",
  },
  {
    title:
      "Estancia formativa en la Unidad de Retina Quirúrgica y Tumores Intraoculares del Adulto en el Complejo Hospitalario Universitario de Santiago de Compostela",
    year: "2015",
  },
  { title: "Master Universitario en Investigación en Ciencias de la Visión", year: "2014" },
  { title: "Especialista en Oftalmología", year: "2017" },
  { title: "Master Propio en Oftalmología", year: "2019" },
  { title: "Experta Universitaria en Cirugía Oftalmológica", year: "2019" },
  { title: "Experta Universitaria en Glaucoma y Patología Ocular Pediátrica", year: "2019" },
  { title: "Experta Universitaria en Uveítis y Retina", year: "2019" },
  { title: "Master en Peritaje Médico y Valoración del Daño Corporal", year: "en curso" },
];

export const experience: readonly Experience[] = [
  {
    period: "2012 - 2016",
    role: "Médico Interno Residente de Oftalmología",
    place: "Complejo Hospitalario Universitario de Pontevedra",
  },
  {
    period: "2017 - 2018",
    role: "Facultativa Especialista de Área de Oftalmología",
    place:
      "Complejo Hospitalario Universitario de Ourense (con especial dedicación a oftalmología pediátrica y uveítis)",
  },
  {
    period: "2018 - 2025",
    role: "Facultativa Especialista de Área de Oftalmología",
    place: "Hospital Comarcal de Monforte de Lemos",
  },
  {
    period: "2025 - actualidad",
    role: "Fundadora y responsable médica",
    place: "Clínica Oftalmológica Dra. Marta Sampil",
  },
];

export const merits: readonly string[] = [
  "Miembro de la Sociedad Gallega de Oftalmología.",
  "Miembro de la Sociedad Española de Retina y Vítreo.",
  "Coautora de artículos científicos en publicaciones de alto impacto.",
  "Participación activa en congresos y cursos de actualización continuada.",
];
