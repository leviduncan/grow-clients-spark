 import Header from "@/components/Header";
 import Footer from "@/components/Footer2";
 import ScrollAnimation from "@/components/ScrollAnimation";
 import { Card, CardContent } from "@/components/ui/card";
 import { Separator } from "@/components/ui/separator";
 import { Mail } from "lucide-react";
 
 const Privacy = () => {
   return (
     <div className="min-h-screen font-inter bg-background">
       <Header />
 
       {/* Hero Section */}
       <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 gradient-hero overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
 
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="max-w-4xl mx-auto text-center">
             <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
               PRIVACY <span className="text-primary">POLICY</span>
             </h1>
             <p className="font-inter text-muted-foreground text-lg">
               Last Updated: February 5, 2025
             </p>
           </div>
         </div>
       </section>
 
       {/* Content */}
       <section className="py-16 sm:py-24 bg-background">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto space-y-12">
             
             {/* Introduction */}
             <ScrollAnimation>
               <div>
                 <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">
                   INTRODUCTION
                 </h2>
                 <p className="font-inter text-muted-foreground leading-relaxed">
                   GrowClientsAI ("Company," "we," "us," or "our") is committed to protecting the privacy of individuals who interact with our platform and the businesses we serve. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, use our services, or communicate with businesses that use our platform.
                 </p>
                 <p className="font-inter text-muted-foreground leading-relaxed mt-4">
                   Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                 </p>
               </div>
             </ScrollAnimation>
 
             <Separator />
 
             {/* Who We Are */}
             <ScrollAnimation>
               <div>
                 <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">
                   WHO WE ARE
                 </h2>
                 <p className="font-inter text-muted-foreground leading-relaxed">
                   GrowClientsAI provides AI-powered automation and communication services to home service businesses, including but not limited to HVAC companies, plumbers, electricians, and other service providers. Our platform enables these businesses to communicate more effectively with their customers through automated voice, SMS, and digital communication tools.
                 </p>
               </div>
             </ScrollAnimation>
 
             <Separator />
 
             {/* Information We Collect */}
             <ScrollAnimation>
               <div>
                 <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-6">
                   INFORMATION WE COLLECT
                 </h2>
                 
                 <div className="space-y-8">
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       Information Collected from Business Clients
                     </h3>
                     <p className="font-inter text-muted-foreground mb-3">
                       When businesses sign up for our services, we collect:
                     </p>
                     <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                       <li>Business name and contact information</li>
                       <li>Business owner or representative name</li>
                       <li>Email address and phone number</li>
                       <li>Billing and payment information</li>
                       <li>Business address and service areas</li>
                       <li>Account credentials</li>
                     </ul>
                   </div>
 
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       Information Collected from End Consumers
                     </h3>
                     <p className="font-inter text-muted-foreground mb-3">
                       When consumers interact with businesses using our platform, we may collect:
                     </p>
                     <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                       <li>Phone number (from inbound calls or form submissions)</li>
                       <li>Call metadata (date, time, duration, call status)</li>
                       <li>SMS message content and delivery status</li>
                       <li>Name (if provided during conversation)</li>
                       <li>Service address (if provided during conversation)</li>
                       <li>Service requests and appointment details</li>
                       <li>Voice recordings or transcripts (if applicable)</li>
                       <li>IP address and device information (for web-based interactions)</li>
                     </ul>
                   </div>
 
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       Information Collected Automatically
                     </h3>
                     <p className="font-inter text-muted-foreground mb-3">
                       When you visit our website, we may automatically collect:
                     </p>
                     <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                       <li>Browser type and version</li>
                       <li>Operating system</li>
                       <li>IP address</li>
                       <li>Pages visited and time spent</li>
                       <li>Referring website</li>
                       <li>Cookies and similar tracking technologies</li>
                     </ul>
                   </div>
                 </div>
               </div>
             </ScrollAnimation>
 
             <Separator />
 
             {/* How We Use Your Information */}
             <ScrollAnimation>
               <div>
                 <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-6">
                   HOW WE USE YOUR INFORMATION
                 </h2>
                 
                 <div className="space-y-8">
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       For Business Clients
                     </h3>
                     <p className="font-inter text-muted-foreground mb-3">
                       We use business client information to:
                     </p>
                     <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                       <li>Provide and maintain our services</li>
                       <li>Process payments and manage accounts</li>
                       <li>Send service-related communications</li>
                       <li>Provide customer support</li>
                       <li>Improve our platform and develop new features</li>
                       <li>Comply with legal obligations</li>
                     </ul>
                   </div>
 
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       For End Consumers
                     </h3>
                     <p className="font-inter text-muted-foreground mb-3">
                       We use end consumer information to:
                     </p>
                     <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                       <li>Facilitate communication between consumers and our client businesses</li>
                       <li>Send follow-up messages on behalf of businesses (e.g., missed call text-backs)</li>
                       <li>Schedule appointments and service calls</li>
                       <li>Maintain conversation history for customer service purposes</li>
                       <li>Process opt-out requests</li>
                       <li>Comply with legal and regulatory requirements</li>
                     </ul>
                   </div>
                 </div>
               </div>
             </ScrollAnimation>
 
             <Separator />
 
             {/* SMS and Communication Services */}
             <ScrollAnimation>
               <div>
                 <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-6">
                   SMS AND COMMUNICATION SERVICES
                 </h2>
                 
                 <div className="space-y-8">
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       Consent
                     </h3>
                     <p className="font-inter text-muted-foreground leading-relaxed">
                       End consumers consent to receive SMS messages by initiating contact with businesses that use our platform. When a consumer calls a business phone number powered by GrowClientsAI, this inbound call serves as consent for follow-up communication related to their inquiry.
                     </p>
                   </div>
 
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       Message Frequency
                     </h3>
                     <p className="font-inter text-muted-foreground leading-relaxed">
                       Message frequency varies based on consumer engagement. Typically, consumers receive a single follow-up message after a missed call unless they choose to continue the conversation.
                     </p>
                   </div>
 
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       Opt-Out
                     </h3>
                     <p className="font-inter text-muted-foreground leading-relaxed">
                       Consumers may opt out of SMS communications at any time by replying <span className="font-semibold text-foreground">STOP</span> to any message. Upon receiving an opt-out request, we immediately cease SMS communications and add the phone number to our suppression list.
                     </p>
                   </div>
 
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       Message and Data Rates
                     </h3>
                     <p className="font-inter text-muted-foreground leading-relaxed">
                       Standard message and data rates may apply. Consumers should contact their mobile carrier for details about their messaging plan.
                     </p>
                   </div>
                 </div>
               </div>
             </ScrollAnimation>
 
             <Separator />
 
             {/* How We Share Your Information */}
             <ScrollAnimation>
               <div>
                 <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">
                   HOW WE SHARE YOUR INFORMATION
                 </h2>
                 <p className="font-inter text-muted-foreground mb-6">
                   We may share information in the following circumstances:
                 </p>
                 
                 <div className="space-y-8">
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       With Client Businesses
                     </h3>
                     <p className="font-inter text-muted-foreground leading-relaxed">
                       We share end consumer information with the specific business the consumer contacted. This includes call details, messages, and service requests necessary for the business to serve the customer.
                     </p>
                   </div>
 
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       With Service Providers
                     </h3>
                     <p className="font-inter text-muted-foreground mb-3">
                       We share information with third-party vendors who assist in operating our platform, including:
                     </p>
                     <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                       <li>Cloud hosting providers</li>
                       <li>Communication service providers (e.g., Twilio)</li>
                       <li>Payment processors</li>
                       <li>Analytics providers</li>
                       <li>Customer support tools</li>
                     </ul>
                     <p className="font-inter text-muted-foreground mt-3 leading-relaxed">
                       These providers are contractually obligated to protect your information and use it only for the services they provide to us.
                     </p>
                   </div>
 
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       For Legal Purposes
                     </h3>
                     <p className="font-inter text-muted-foreground leading-relaxed">
                       We may disclose information when required by law, court order, or government request, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
                     </p>
                   </div>
 
                   <div>
                     <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                       Business Transfers
                     </h3>
                     <p className="font-inter text-muted-foreground leading-relaxed">
                       If GrowClientsAI is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                     </p>
                   </div>
                 </div>
               </div>
             </ScrollAnimation>
 
             <Separator />
 
             {/* Data Retention */}
             <ScrollAnimation>
               <div>
                 <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">
                   DATA RETENTION
                 </h2>
                 <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                   We retain information for as long as necessary to provide our services and fulfill the purposes described in this Privacy Policy, unless a longer retention period is required by law.
                 </p>
                 <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                   <li><span className="font-semibold text-foreground">Business client data:</span> Retained for the duration of the business relationship plus 7 years for legal and tax purposes</li>
                   <li><span className="font-semibold text-foreground">End consumer communication records:</span> Retained for 3 years for compliance documentation</li>
                   <li><span className="font-semibold text-foreground">Opt-out records:</span> Retained indefinitely to ensure continued compliance</li>
                 </ul>
               </div>
             </ScrollAnimation>
 
             <Separator />
 
             {/* Data Security */}
             <ScrollAnimation>
               <div>
                 <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">
                   DATA SECURITY
                 </h2>
                 <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                   We implement appropriate technical and organizational measures to protect your information, including:
                 </p>
                 <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                   <li>Encryption of data in transit and at rest</li>
                   <li>Secure access controls and authentication</li>
                   <li>Regular security assessments</li>
                   <li>Employee training on data protection</li>
                   <li>Incident response procedures</li>
                 </ul>
                 <p className="font-inter text-muted-foreground mt-4 leading-relaxed">
                   However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                 </p>
               </div>
             </ScrollAnimation>
 
             <Separator />
 
             {/* Your Rights and Choices */}
             <ScrollAnimation>
               <div>
                 <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">
                   YOUR RIGHTS AND CHOICES
                 </h2>
                 <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                   Depending on your location, you may have the following rights:
                 </p>
                 <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                   <li><span className="font-semibold text-foreground">Access:</span> Request a copy of the information we hold about you</li>
                   <li><span className="font-semibold text-foreground">Correction:</span> Request correction of inaccurate information</li>
                   <li><span className="font-semibold text-foreground">Deletion:</span> Request deletion of your information, subject to legal retention requirements</li>
                   <li><span className="font-semibold text-foreground">Opt-Out:</span> Opt out of SMS communications by texting STOP</li>
                   <li><span className="font-semibold text-foreground">Do Not Sell:</span> We do not sell personal information to third parties</li>
                 </ul>
                 <p className="font-inter text-muted-foreground mt-4 leading-relaxed">
                   To exercise these rights, contact us at{" "}
                   <a href="mailto:info@growclientsai.com" className="text-primary hover:underline">
                     info@growclientsai.com
                   </a>.
                 </p>
               </div>
             </ScrollAnimation>
 
             <Separator />
 
             {/* Children's Privacy */}
             <ScrollAnimation>
               <div>
                 <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">
                   CHILDREN'S PRIVACY
                 </h2>
                 <p className="font-inter text-muted-foreground leading-relaxed">
                   Our services are not directed to children under the age of 16. We do not knowingly collect personal information from children. If we learn that we have collected information from a child under 16, we will delete it promptly.
                 </p>
               </div>
             </ScrollAnimation>
 
             <Separator />
 
             {/* California Privacy Rights */}
             <ScrollAnimation>
               <div>
                 <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">
                   CALIFORNIA PRIVACY RIGHTS
                 </h2>
                 <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                   California residents have additional rights under the California Consumer Privacy Act (CCPA):
                 </p>
                 <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                   <li>Right to know what personal information is collected</li>
                   <li>Right to know whether personal information is sold or disclosed</li>
                   <li>Right to opt out of the sale of personal information</li>
                   <li>Right to request deletion of personal information</li>
                   <li>Right to non-discrimination for exercising privacy rights</li>
                 </ul>
                 <p className="font-inter text-muted-foreground mt-4 leading-relaxed">
                   We do not sell personal information. To submit a request, contact us at{" "}
                   <a href="mailto:info@growclientsai.com" className="text-primary hover:underline">
                     info@growclientsai.com
                   </a>.
                 </p>
               </div>
             </ScrollAnimation>
 
             <Separator />
 
             {/* Changes to This Privacy Policy */}
             <ScrollAnimation>
               <div>
                 <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">
                   CHANGES TO THIS PRIVACY POLICY
                 </h2>
                 <p className="font-inter text-muted-foreground leading-relaxed">
                   We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.
                 </p>
               </div>
             </ScrollAnimation>
 
             <Separator />
 
             {/* Contact Us */}
             <ScrollAnimation>
               <Card className="border-primary/20 bg-primary/5">
                 <CardContent className="p-8">
                   <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                       <Mail className="w-6 h-6 text-primary" />
                     </div>
                     <h2 className="font-bebas text-3xl sm:text-4xl text-foreground">
                       CONTACT US
                     </h2>
                   </div>
                   <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                     If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                   </p>
                   <div className="space-y-3 font-inter">
                     <p className="text-foreground font-semibold">GrowClientsAI</p>
                     <p className="text-muted-foreground">
                       Email:{" "}
                       <a href="mailto:info@growclientsai.com" className="text-primary hover:underline">
                         info@growclientsai.com
                       </a>
                     </p>
                     <p className="text-muted-foreground">
                       Website:{" "}
                       <a href="https://www.growclientsai.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                         www.growclientsai.com
                       </a>
                     </p>
                   </div>
                   <p className="font-inter text-sm text-muted-foreground mt-6 italic">
                     This Privacy Policy is provided for informational purposes. We recommend consulting with a licensed attorney to ensure compliance with all applicable laws and regulations in your jurisdiction.
                   </p>
                 </CardContent>
               </Card>
             </ScrollAnimation>
 
           </div>
         </div>
       </section>
 
       <Footer />
     </div>
   );
 };
 
 export default Privacy;