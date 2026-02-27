"use client";

import { useState } from "react";
import { BiEnvelope, BiUser, BiMessageDetail, BiSend } from "react-icons/bi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Créer le lien mailto
    const mailtoLink = `mailto:churlet.sylvain@gmail.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    // Ouvrir le client mail
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <div className="max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium dark:text-zinc-300 text-zinc-700 mb-2"
            >
              Nom complet
            </label>
            <div className="relative">
              <BiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 dark:text-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="Votre nom"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-zinc-300 text-zinc-700 mb-2"
            >
              Email
            </label>
            <div className="relative">
              <BiEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 dark:text-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="votre@email.com"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium dark:text-zinc-300 text-zinc-700 mb-2"
          >
            Sujet
          </label>
          <div className="relative">
            <BiMessageDetail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 dark:text-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Sujet de votre message"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium dark:text-zinc-300 text-zinc-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 dark:text-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
            placeholder="Décrivez votre projet ou votre demande..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          {isSubmitting ? (
            "Envoi en cours..."
          ) : (
            <>
              <BiSend className="text-lg" />
              Envoyer le message
            </>
          )}
        </button>

        {submitStatus === "success" && (
          <p className="text-green-500 text-sm">
            ✓ Votre client email va s&apos;ouvrir avec le message pré-rempli.
          </p>
        )}
      </form>

      <div className="mt-12 p-6 dark:bg-zinc-800/50 bg-zinc-100 rounded-xl">
        <h3 className="text-lg font-semibold mb-4 dark:text-white text-zinc-900">
          Autres moyens de contact
        </h3>
        <div className="space-y-3">
          <a
            href="mailto:churlet.sylvain@gmail.com"
            className="flex items-center gap-3 dark:text-zinc-300 text-zinc-600 hover:text-blue-500 transition-colors"
          >
            <BiEnvelope className="text-xl" />
            churlet.sylvain@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
