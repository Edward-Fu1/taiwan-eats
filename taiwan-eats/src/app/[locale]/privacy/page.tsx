import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Taiwan Trip Advice",
  description: "How Taiwan Trip Advice collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />
        <h1 className="font-serif text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: May 2026</p>
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>
            Taiwan Trip Advice (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your
            privacy. This policy explains what information we collect, how we use it, and your rights.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900">Information we collect</h2>
          <p>
            We collect information you provide directly, such as your email address when you subscribe to our
            newsletter. We also collect limited analytics data (page views, referral sources) to understand
            how readers find and use the site. We do not sell or share this data with third parties for
            advertising purposes.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900">Newsletter</h2>
          <p>
            If you subscribe to our weekly brief, we store your email address to send you the newsletter.
            You can unsubscribe at any time using the link in any email we send. We use{" "}
            <a href="https://resend.com" className="text-coral-600 underline" rel="noopener noreferrer">Resend</a>{" "}
            to manage our mailing list, which stores your email on their servers subject to their own privacy policy.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900">Cookies</h2>
          <p>
            We use minimal cookies for essential site functionality. We do not use tracking cookies or
            third-party advertising cookies. Analytics are privacy-preserving and do not track individual users.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900">Third-party links</h2>
          <p>
            Our guides contain links to restaurants, markets, and external services. We are not responsible
            for the privacy practices of these third parties. We recommend reviewing their privacy policies
            before providing any personal information.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900">Your rights</h2>
          <p>
            You have the right to access, correct, or delete any personal information we hold about you. To
            exercise these rights, contact us at{" "}
            <a href="mailto:hello@taiwaneats.com" className="text-coral-600 underline">hello@taiwaneats.com</a>.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date at the top of the page reflects the most
            recent revision. Continued use of the site after changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900">Contact</h2>
          <p>
            Questions about this privacy policy? Email{" "}
            <a href="mailto:hello@taiwaneats.com" className="text-coral-600 underline">hello@taiwaneats.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
