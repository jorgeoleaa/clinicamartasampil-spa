import { site } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir cita por WhatsApp"
      title="Pedir cita por WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full"
    >
      <img
        src="/imgs/whatsapp.png"
        alt=""
        width={56}
        height={56}
        className="size-14 transition-transform hover:scale-110 motion-reduce:transition-none"
      />
    </a>
  );
}
