export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: readonly GalleryImage[] = [
  { src: "/imgs/recepcion.webp", alt: "Recepción de la clínica" },
  { src: "/imgs/sala-consulta.webp", alt: "Sala de consulta equipada" },
  { src: "/imgs/despacho.webp", alt: "Despacho de la doctora" },
  { src: "/imgs/equipamiento.webp", alt: "Sala de pruebas diagnósticas" },
  { src: "/imgs/sala-espera.webp", alt: "Sala de espera" },
  {
    src: "/imgs/galeria-1.webp",
    alt: "La doctora revisa con un paciente una prueba de imagen de la retina",
  },
  { src: "/imgs/galeria-2.webp", alt: "Prueba de topografía corneal a un paciente" },
  {
    src: "/imgs/galeria-3.webp",
    alt: "La doctora explora a un paciente con la lámpara de hendidura",
  },
];
