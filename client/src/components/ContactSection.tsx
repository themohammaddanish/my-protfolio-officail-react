import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError("");
    setConfirmationMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.message || "Failed to send message");
      }

      if (payload.confirmationSent) {
        setConfirmationMessage("Your message was sent and a confirmation email was delivered to your inbox.");
      } else {
        setConfirmationMessage("Your message was sent, but the confirmation email could not be delivered.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", type: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-14 sm:px-6 md:px-16 lg:px-20 lg:py-20 bg-white border-t border-black/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-10 lg:space-y-12">
            <div>
              <span className="block text-xs uppercase tracking-[0.4em] mb-4 opacity-40 font-black">
                Availability / 2026
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-8xl font-display font-black uppercase tracking-tighter">
                LET'S<br />
                <span className="text-accent-blue">CONNECT</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-neutral-500 max-w-sm leading-relaxed">
              Currently open to select freelance collaborations and technical consulting opportunities worldwide.
            </p>
            <div className="space-y-6 pt-4">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] font-black opacity-30">Email</span>
                <a
                  href="mailto:danishbrtnp@gmail.com"
                  className="mt-2 inline-block text-base sm:text-lg font-black tracking-tight hover:text-accent-blue transition-colors break-all"
                >
                  danishbrtnp@gmail.com
                </a>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] font-black opacity-30">Phone</span>
                <a
                  href="tel:+9779767384214"
                  className="mt-2 inline-block text-base sm:text-lg font-black tracking-tight hover:text-accent-blue transition-colors"
                >
                  +977 9767384214
                </a>
              </div>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <div className="p-8 bg-black text-white">
                <iconify-icon icon="lucide:check-circle" class="text-2xl text-accent-blue mb-3 block"></iconify-icon>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">Message Sent!</h3>
                <p className="text-white/60 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                {confirmationMessage ? (
                  <p className="mt-3 text-sm text-white/80 leading-relaxed">{confirmationMessage}</p>
                ) : null}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 lg:space-y-12">
                <div className="group">
                  <label className="text-[10px] uppercase tracking-widest font-black opacity-30 group-focus-within:opacity-100 transition-opacity">
                    01 / Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="input-minimal"
                    required
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] uppercase tracking-widest font-black opacity-30 group-focus-within:opacity-100 transition-opacity">
                    02 / Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="input-minimal"
                    required
                  />
                </div>
                <div className="space-y-6">
                  <label className="text-[10px] uppercase tracking-widest font-black opacity-30 block">
                    03 / Project Type
                  </label>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {["UI/UX Design", "Development", "Consulting"].map((type) => (
                      <label key={type} className="cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value={type}
                          checked={formData.type === type}
                          onChange={handleChange}
                          className="peer hidden"
                        />
                        <span className="px-4 sm:px-6 py-2.5 sm:py-3 border border-black/5 rounded-full text-[10px] font-black uppercase tracking-widest peer-checked:bg-accent-blue peer-checked:text-white transition-all block">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="group">
                  <label className="text-[10px] uppercase tracking-widest font-black opacity-30 group-focus-within:opacity-100 transition-opacity">
                    04 / Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    className="input-minimal resize-none h-32"
                    required
                  />
                </div>
                {submitError ? (
                  <p className="text-sm font-medium text-red-600" role="alert">
                    {submitError}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full lg:w-auto bg-black text-white px-10 sm:px-16 py-5 sm:py-6 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-accent-blue transition-colors duration-500 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
