import { useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactLinks } from "../data";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: `${form.firstName} ${form.lastName}`,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(() => {
      setSending(false);
      setSent(true);

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch((error) => {
      console.log(error);
      setSending(false);
    });
  };

  return (
    <section
      id="contact"
      className="
      py-24
      relative
      z-10

      bg-[#f8fafc]
      dark:bg-[#080c18]

      transition-all
      duration-500
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeader
          tag="Contact"
          title="Let's"
          highlight="Connect"
          subtitle="Open to freelance work, full-time roles, and exciting collaborations."
        />

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}

          <Reveal from="left">

            <div>

              <h3
                className="
                font-display
                font-bold
                text-2xl
                mb-3

                text-gray-900
                dark:text-white
                "
              >
                Have a project in mind?
              </h3>

              <p
                className="
                text-sm
                leading-relaxed
                mb-8

                text-slate-600
                dark:text-[#8891aa]
                "
              >
                I'm currently looking for new
                opportunities. Whether you have
                a project, a question, or just
                want to say hi.
              </p>

              <div className="flex flex-col gap-3">

                {contactLinks.map((link) => (

                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel="noreferrer"
                    className="
                    flex
                    items-center
                    gap-4
                    px-5
                    py-4
                    rounded-2xl

                    bg-white
                    dark:bg-white/5

                    border
                    border-gray-200
                    dark:border-white/10

                    shadow-md
                    dark:shadow-none

                    hover:translate-x-1
                    hover:border-cyan-400

                    transition-all
                    duration-300
                    "
                  >

                    <div
                      className="
                      w-11
                      h-11
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      text-lg
                      "
                      style={{
                        background: link.bg,
                        color: link.color,
                      }}
                    >
                      <i
                        className={`${link.fab ? "fab" : "fas"} ${link.icon}`}
                      />
                    </div>

                    <div className="flex-1">

                      <div
                        className="
                        text-xs

                        text-slate-500
                        dark:text-[#8891aa]
                        "
                      >
                        {link.label}
                      </div>

                      <div
                        className="
                        text-sm
                        font-medium

                        text-gray-900
                        dark:text-white
                        "
                      >
                        {link.value}
                      </div>

                    </div>

                    <i
                      className="
                      fas
                      fa-arrow-right

                      text-gray-400
                      dark:text-[#545c75]
                      "
                    />

                  </a>

                ))}

              </div>

            </div>

          </Reveal>

          {/* RIGHT FORM */}

          <Reveal delay={150}>

            {sent ? (

              <div
                className="
                rounded-2xl
                p-12
                text-center

                bg-cyan-50
                dark:bg-cyan-500/5

                border
                border-cyan-200
                dark:border-cyan-500/20
                "
              >

                <i
                  className="
                  fas
                  fa-check-circle
                  text-5xl
                  text-cyan-400
                  mb-4
                  "
                />

                <h4
                  className="
                  text-xl
                  font-bold
                  mb-2

                  text-gray-900
                  dark:text-white
                  "
                >
                  Message Sent!
                </h4>

                <p
                  className="
                  text-sm

                  text-slate-600
                  dark:text-[#8891aa]
                  "
                >
                  Thanks for reaching out.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="
                  mt-6
                  px-5
                  py-2
                  rounded-full
                  font-semibold

                  bg-cyan-100
                  dark:bg-cyan-500/10

                  text-cyan-500
                  "
                >
                  Send Another
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="
                flex
                flex-col
                gap-5
                "
              >

                <div className="grid grid-cols-2 gap-4">

                  <Input
                    label="First Name"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                  />

                  <Input
                    label="Last Name"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                  />

                </div>

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />

                <Input
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                />

                <div className="flex flex-col gap-2">

                  <label
                    className="
                    text-xs
                    font-medium
                    text-slate-600
                    dark:text-[#8891aa]
                    "
                  >
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Tell me about your project..."

                    className="
                    w-full
                    rounded-xl
                    px-4
                    py-3

                    bg-white
                    dark:bg-white/5

                    border
                    border-gray-200
                    dark:border-white/10

                    text-gray-900
                    dark:text-white

                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20

                    outline-none
                    resize-none
                    "
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="
                  py-4
                  rounded-xl
                  font-bold

                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500

                  text-[#050810]

                  hover:scale-[1.02]

                  transition-all
                  duration-300
                  "
                >
                  {sending
                    ? "Sending..."
                    : "Send Message"}
                </button>

              </form>

            )}

          </Reveal>

        </div>

      </div>
    </section>
  );
}

function Input({
  label,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">

      <label
        className="
        text-xs
        font-medium
        text-slate-600
        dark:text-[#8891aa]
        "
      >
        {label}
      </label>

      <input
        required
        {...props}
        className="
        w-full
        rounded-xl
        px-4
        py-3

        bg-white
        dark:bg-white/5

        border
        border-gray-200
        dark:border-white/10

        text-gray-900
        dark:text-white

        focus:border-cyan-400
        focus:ring-2
        focus:ring-cyan-400/20

        outline-none
        "
      />

    </div>
  );
}