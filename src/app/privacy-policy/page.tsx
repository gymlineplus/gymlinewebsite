// components/PrivacyPolicy.tsx
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className=" py-16 px-6 text-center mt-12">
        <h1 className="text-4xl sm:text-5xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Your trust matters to us. Here’s how we handle your data with care and responsibility.
        </p>
      </div>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="shadow-lg border-none">
          <CardContent>
            <ScrollArea className="h-[600px] p-6 space-y-8">
              {policySections.map((section, index) => (
                <section key={index}>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
                    {section.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </section>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const policySections = [
  {
    title: "1. Introduction",
    content:
      "Welcome to Gymline. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We may collect personal details like your name, email, phone number, and any information you provide when using our services or filling forms on our website.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "We use your data to provide services, respond to inquiries, improve our platform, and communicate with you regarding updates, offers, or important information.",
  },
  {
    title: "4. Data Sharing & Security",
    content:
      "We do not sell your data. Information may be shared with trusted partners under strict confidentiality. We implement robust security measures to keep your data safe.",
  },
  {
    title: "5. Your Rights",
    content:
      "You can request access, correction, or deletion of your personal information by contacting us. We respect your right to privacy and ensure compliance with applicable laws.",
  },
  {
    title: "6. Changes to This Policy",
    content:
      "This Privacy Policy may be updated occasionally. Please review it periodically. Changes will be effective immediately upon posting on this page.",
  },
  {
    title: "7. Contact Us",
    content:
      'If you have any questions or concerns about this Privacy Policy, feel free to reach out to us at contact@gymlineplus.com.',
  },
];

export default PrivacyPolicy;
