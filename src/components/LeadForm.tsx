import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://n8n.growclientsai.com/webhook/book-demo";

type LeadFormProps = {
  source: string;
  submitLabel?: string;
  showBusinessFields?: boolean;
};

export const LeadForm = ({
  source,
  submitLabel = "Send Message",
  showBusinessFields = false,
}: LeadFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    business: "",
    businessType: "",
    subject: "",
    sms: false,
    emailConsent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      toast({
        title: "Success",
        description: "We'll be in touch shortly.",
      });

      setFormData({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        business: "",
        businessType: "",
        subject: "",
        sms: false,
        emailConsent: false,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Please email darrin@darrinduncan.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <Input
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
      </div>

      {/* Contact */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>

      {/* Optional Business Fields */}
      {showBusinessFields && (
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            name="business"
            value={formData.business}
            onChange={handleChange}
            placeholder="Business Name"
            required
          />
          
          <Input
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            placeholder="Business Type"
            required
          />
        </div>
      )}

      {/* Subject */}
      <Input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
      />

      {/* Consents */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">
By submitting this form and checking the box below, you consent to receive SMS appointment confirmations and reminders from Grow Clients AI at the number provided. Message and data rates may apply. Message frequency varies. Reply STOP to opt out or HELP for assistance.
        </p>
        <div className="space-y-4">
          <label className="flex gap-3 items-start">
            <Checkbox className="rounded-none" required
              checked={formData.sms}
              onCheckedChange={v =>
                setFormData(p => ({ ...p, sms: !!v }))
              }
            />
            <span className="text-sm text-muted-foreground">
              <sup className="text-red-600">*</sup>I consent to receiving SMS messages.
            </span>
          </label>

          <label className="flex gap-3 items-start">
            <Checkbox className="rounded-none"
              checked={formData.emailConsent}
              onCheckedChange={v =>
                setFormData(p => ({ ...p, emailConsent: !!v }))
              }
            />
            <span className="text-sm text-muted-foreground">
              I consent to receiving email communications.
            </span>
          </label>
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowRight className="ml-2" />
          </>
        )}
      </Button>
    </form>
  );
};
