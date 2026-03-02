import { Section, Badge } from "./UI";

export const Legal = ({ type }: { type: 'privacy' | 'terms' }) => {
  const content = type === 'privacy' ? {
    title: "Privacy Policy",
    sections: [
      {
        title: "Information We Collect",
        text: "We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and business details."
      },
      {
        title: "How We Use Your Information",
        text: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new products and services."
      },
      {
        title: "Data Sharing",
        text: "We do not share your personal information with third parties except as described in this policy, such as with your consent or to comply with legal obligations."
      },
      {
        title: "Your Rights",
        text: "You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights."
      }
    ]
  } : {
    title: "Terms of Service",
    sections: [
      {
        title: "Acceptance of Terms",
        text: "By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations."
      },
      {
        title: "Use of Services",
        text: "You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account."
      },
      {
        title: "Intellectual Property",
        text: "All content and materials available on our services are the property of GrowClientsAI and are protected by intellectual property laws."
      },
      {
        title: "Limitation of Liability",
        text: "GrowClientsAI shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services."
      }
    ]
  };

  return (
    <div className="pt-24">
      <Section className="max-w-3xl mx-auto">
        <Badge>{type.toUpperCase()}</Badge>
        <h1 className="mt-4 text-4xl md:text-6xl font-black text-primary dark:text-white mb-12">
          {content.title}
        </h1>
        
        <div className="space-y-12">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">{section.title}</h2>
              <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border dark:border-dark-border">
          <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
            Last updated: February 28, 2026
          </p>
        </div>
      </Section>
    </div>
  );
};
