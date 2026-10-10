export const metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <div className="section-padding container-width">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl text-[var(--color-navy)] mb-4 text-center">Get in Touch</h1>
        <p className="text-[var(--color-muted)] mb-10 text-center">
          Have a question about a property or a development? We&apos;re here to help.
        </p>

        <div className="max-w-md mx-auto space-y-8 bg-[#eaf4f2] p-8 border border-[var(--color-border)]">
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-2">Office Address</h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              B 601 City Tower &amp; Shopping Mall<br />
              Gulistan E Jauhar Block 5<br />
              Karachi
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-2">Email Us</h3>
            <p className="text-sm text-[var(--color-teal)] font-medium">hr254478@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-2">Call Us</h3>
            <p className="text-sm text-[var(--color-teal)] font-medium">03332314334</p>
          </div>
        </div>
      </div>
    </div>
  );
}
