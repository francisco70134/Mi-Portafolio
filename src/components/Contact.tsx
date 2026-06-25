import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (formRef.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          setSubmitStatus("success");
          formRef.current?.reset();
        })
        .catch((error) => {
          console.error("Error enviando el correo:", error);
          setSubmitStatus("error");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section id="contact" className="py-24 relative ">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Hablemos
          </h2>
          <div className="w-20 h-1 bg-aurora-purple"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 animate-slide-up">
          <div>
            <h3 className="text-2xl font-bold text-gray-200 mb-6">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
              Actualmente estoy abierto a nuevas oportunidades laborales,
              trabajos freelance y colaboraciones en proyectos desafiantes.
            </p>

            <div className="space-y-6 ">
              <a
                href="mailto:francisco.olortegui1@gmail.com"
                className="flex items-center space-x-4 text-gray-400 hover:text-aurora-purple transition-colors group"
              >
                <div className="p-4 border border-[#23293b] group-hover:border-aurora-purple transition-colors">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-500 mb-1">Email</p>
                  <p className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                    francisco.olortegui1@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/51941795983"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-400 hover:text-aurora-pink transition-colors group"
              >
                <div className="p-4 border border-[#23293b] group-hover:border-aurora-pink transition-colors">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-500 mb-1">
                    WhatsApp / Teléfono
                  </p>
                  <p className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                    +51 941 795 983
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-4 text-gray-400">
                <div className="p-4 border border-[#23293b]">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-500 mb-1">
                    Ubicación
                  </p>
                  <p className="font-semibold text-gray-200">Lima, Perú</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-dark-bg border border-aurora-purple-dark">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="user_name"
                    className="text-sm font-mono text-gray-400"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full bg-transparent border border-[#23293b] text-gray-200 p-3 focus:outline-none focus:border-aurora-purple transition-colors placeholder-gray-600"
                    placeholder="Ej. John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="user_email"
                    className="text-sm font-mono text-gray-400"
                  >
                    Correo
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full bg-transparent border border-[#23293b] text-gray-200 p-3 focus:outline-none focus:border-aurora-purple transition-colors placeholder-gray-600"
                    placeholder="john@empresa.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-mono text-gray-400"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border border-[#23293b] text-gray-200 p-3 focus:outline-none focus:border-aurora-purple transition-colors placeholder-gray-600 resize-none"
                  placeholder="Hola Francisco, me gustaría hablar contigo sobre..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-transparent border border-aurora-purple text-white font-medium hover:bg-aurora-purple transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? "Enviando..." : "Enviar Mensaje"}</span>
                {!isSubmitting && <FaPaperPlane size={14} />}
              </button>

              {/* Mensajes de feedback */}
              {submitStatus === "success" && (
                <p className="text-green-400 text-sm font-mono mt-4">
                  ¡Mensaje enviado con éxito! Te responderé lo antes posible.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm font-mono mt-4">
                  Ocurrió un error al enviar el mensaje. Por favor, intenta usar
                  los enlaces de contacto directo.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
