import { useState, useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

const contactContent = {
  es: {
    title: "Hablemos",
    subtitle: "¿Tienes un proyecto en mente?",
    description: "Actualmente estoy abierto a nuevas oportunidades laborales, trabajos freelance y colaboraciones en proyectos desafiantes.",
    emailLabel: "Email",
    phoneLabel: "WhatsApp / Teléfono",
    locationLabel: "Ubicación",
    locationValue: "Lima, Perú",
    formName: "Nombre",
    formNamePlaceholder: "Ej. John Doe",
    formEmail: "Correo",
    formEmailPlaceholder: "john@empresa.com",
    formMessage: "Mensaje",
    formMessagePlaceholder: "Hola Francisco, me gustaría hablar contigo sobre...",
    btnSending: "Enviando...",
    btnSubmit: "Enviar Mensaje",
    msgSuccess: "¡Mensaje enviado con éxito! Te responderé lo antes posible.",
    msgError: "Ocurrió un error al enviar el mensaje. Por favor, intenta usar los enlaces de contacto directo."
  },
  en: {
    title: "Let's Talk",
    subtitle: "Have a project in mind?",
    description: "I am currently open to new job opportunities, freelance work, and collaborations on challenging projects.",
    emailLabel: "Email",
    phoneLabel: "WhatsApp / Phone",
    locationLabel: "Location",
    locationValue: "Lima, Peru",
    formName: "Name",
    formNamePlaceholder: "E.g. John Doe",
    formEmail: "Email",
    formEmailPlaceholder: "john@company.com",
    formMessage: "Message",
    formMessagePlaceholder: "Hi Francisco, I'd like to talk to you about...",
    btnSending: "Sending...",
    btnSubmit: "Send Message",
    msgSuccess: "Message sent successfully! I will get back to you ASAP.",
    msgError: "An error occurred while sending the message. Please try using the direct contact links."
  }
};

export const Contact = () => {
  const { i18n } = useTranslation(); // <-- Obtenemos el idioma actual
  // Determinamos qué idioma usar (por defecto 'es')
  const currentLang = (i18n.language || "es") as "es" | "en";
  const t = contactContent[currentLang] || contactContent["es"]; // <-- Extraemos los textos

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
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-aurora-purple"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 animate-slide-up">
          <div>
            <h3 className="text-2xl font-bold text-gray-200 mb-6">
              {t.subtitle}
            </h3>
            <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
              {t.description}
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
                  <p className="text-sm font-mono text-gray-500 mb-1">{t.emailLabel}</p>
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
                    {t.phoneLabel}
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
                    {t.locationLabel}
                  </p>
                  <p className="font-semibold text-gray-200">{t.locationValue}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-dark-bg border border-aurora-purple-dark opacity-65">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="user_name"
                    className="text-sm font-mono text-gray-400"
                  >
                    {t.formName}
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full bg-transparent border border-[#23293b] text-gray-200 p-3 focus:outline-none focus:border-aurora-purple transition-colors placeholder-gray-600"
                    placeholder={t.formNamePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="user_email"
                    className="text-sm font-mono text-gray-400"
                  >
                    {t.formEmail}
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full bg-transparent border border-[#23293b] text-gray-200 p-3 focus:outline-none focus:border-aurora-purple transition-colors placeholder-gray-600"
                    placeholder={t.formEmailPlaceholder}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-mono text-gray-400"
                >
                  {t.formMessage}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border border-[#23293b] text-gray-200 p-3 focus:outline-none focus:border-aurora-purple transition-colors placeholder-gray-600 resize-none"
                  placeholder={t.formMessagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-transparent border border-aurora-purple text-white font-medium hover:bg-aurora-purple transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? t.btnSending : t.btnSubmit}</span>
                {!isSubmitting && <FaPaperPlane size={14} />}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-sm font-mono mt-4">
                  {t.msgSuccess}
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm font-mono mt-4">
                  {t.msgError}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};