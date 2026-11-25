import { Mail, Phone } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/Section";
import { site } from "@/config/site";
import { MapEmbed } from "../components/MapEmbed";

// overflow-wrap: el email largo puede partirse en pantallas de 320 px en lugar de desbordar
const contactButton = (variant: "primary" | "secondary") =>
  buttonStyles({ variant, className: "gap-3 px-5 sm:px-6 [overflow-wrap:anywhere]" });

export function ContactSection({ id }: { id: string }) {
  return (
    <Section id={id} tone="sand">
      <Container className="max-w-3xl text-center">
        <h2 className="mb-3 text-3xl font-medium">Pedir cita</h2>
        <p className="mb-6 text-muted">
          Solicita tu consulta de manera rápida y sencilla. Puedes llamarnos o escribir por
          WhatsApp.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a href={site.phone.href} className={contactButton("secondary")}>
            <Phone className="size-4 shrink-0" aria-hidden /> {site.phone.display}
          </a>
          <a href={site.email.href} className={contactButton("secondary")}>
            <Mail className="size-4 shrink-0" aria-hidden /> {site.email.display}
          </a>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className={contactButton("primary")}
          >
            <img src="/imgs/whatsapp-icon.png" alt="" width={16} height={16} className="size-4" />
            WhatsApp
          </a>
        </div>

        <MapEmbed />
      </Container>
    </Section>
  );
}
