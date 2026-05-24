import { MessageSquareText, SendHorizontal } from "lucide-react";
import { FormEvent, useState } from "react";
import { portfolioApi } from "../api/portfolioApi";
import { ContactPayload } from "../types/portfolio";

const initialForm: ContactPayload = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const updateField = (field: keyof ContactPayload, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage(null);

    try {
      const response = await portfolioApi.sendContactMessage(form);
      setStatus("success");
      setMessage(response.message ?? "Message sent successfully.");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setMessage("Unable to send message right now. Please try again later.");
    }
  };

  const inputClass =
    "rounded-2xl border-2 border-brand/25 bg-white px-4 py-3 font-normal text-ink shadow-inner outline-none transition placeholder:text-muted/60 hover:border-brand/45 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/15";

  return (
    <form onSubmit={handleSubmit} className="glass-panel grid gap-3.5 rounded-[1.75rem] p-5">
      <div className="mb-2 flex items-start justify-between gap-4">
        <div>
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-ink text-white shadow-soft">
            <MessageSquareText size={22} />
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-ink">Send a message</h2>
          <p className="mt-1.5 text-sm leading-6 text-muted">
            Share the role, product context, or problem you want help solving.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Name
          <input
            required
            minLength={2}
            placeholder="Your name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={inputClass}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Email
          <input
            required
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClass}
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-ink">
        Subject
        <input
          required
          minLength={3}
          placeholder="Role, project, or collaboration"
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          className={inputClass}
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink">
        Message
        <textarea
          required
          minLength={10}
          rows={6}
          placeholder="Tell me what you are hiring for or what you want to build..."
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={inputClass}
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="primary-action disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        <SendHorizontal size={16} />
      </button>
      {message && (
        <p className={`text-sm ${status === "error" ? "text-red-700" : "text-brand"}`}>{message}</p>
      )}
    </form>
  );
};
