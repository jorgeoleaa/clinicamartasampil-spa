const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/34607096268?text=Hola%2C%20me%20gustaría%20pedir%20una%20cita"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed right-5 bottom-5 z-50"
    >
      <img
        src="/imgs/whatsapp.png"
        alt="WhatsApp"
        className="w-14 h-14 object-contain hover:scale-110 transition"
      />
    </a>
  );
};

export default Whatsapp;
