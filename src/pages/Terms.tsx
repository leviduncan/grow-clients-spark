import Header from "@/components/Header";
import Footer from "@/components/Footer2";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

const Terms = () => {
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
              TERMS OF <span className="text-primary">SERVICE</span>
            </h1>
            <p className="font-inter text-muted-foreground text-lg">Last Updated: February 5, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Agreement to Terms */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">AGREEMENT TO TERMS</h2>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and GrowClientsAI
                  ("Company," "we," "us," or "our") governing your access to and use of our website, platform, and
                  services.
                </p>
                <p className="font-inter text-muted-foreground leading-relaxed mt-4">
                  By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these
                  Terms, you may not access or use our services.
                </p>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* Description of Services */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">DESCRIPTION OF SERVICES</h2>
                <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                  GrowClientsAI provides AI-powered automation and communication services for businesses, including:
                </p>
                <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                  <li>Automated voice assistants and call handling</li>
                  <li>Missed call text-back automation</li>
                  <li>AI-powered SMS conversation management</li>
                  <li>Lead capture and customer relationship tools</li>
                  <li>Appointment scheduling automation</li>
                  <li>Workflow automation and integration services</li>
                </ul>
                <p className="font-inter text-muted-foreground mt-4 leading-relaxed">
                  Our services are designed for business use and are provided on a subscription basis.
                </p>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* Eligibility */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">ELIGIBILITY</h2>
                <p className="font-inter text-muted-foreground mb-4 leading-relaxed">To use our services, you must:</p>
                <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                  <li>Be at least 18 years old</li>
                  <li>Have the legal authority to bind yourself or your organization to these Terms</li>
                  <li>Operate a legitimate business</li>
                  <li>Provide accurate and complete registration information</li>
                  <li>Not be prohibited from using our services under applicable law</li>
                </ul>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* Account Registration and Security */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-6">
                  ACCOUNT REGISTRATION AND SECURITY
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Account Creation</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      To access our services, you must create an account and provide accurate, current, and complete
                      information. You agree to update your information promptly if it changes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Account Security</h3>
                    <p className="font-inter text-muted-foreground mb-3">You are responsible for:</p>
                    <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                      <li>Maintaining the confidentiality of your account credentials</li>
                      <li>All activities that occur under your account</li>
                      <li>Notifying us immediately of any unauthorized access or security breach</li>
                    </ul>
                    <p className="font-inter text-muted-foreground mt-3 leading-relaxed">
                      We reserve the right to suspend or terminate accounts that we reasonably believe have been
                      compromised.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* Acceptable Use Policy */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-6">ACCEPTABLE USE POLICY</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Permitted Use</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      You may use our services only for lawful business purposes in compliance with these Terms and all
                      applicable laws and regulations.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Prohibited Conduct</h3>
                    <p className="font-inter text-muted-foreground mb-3">You agree not to:</p>
                    <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                      <li>Use our services for any illegal purpose or in violation of any laws</li>
                      <li>Send unsolicited messages, spam, or communications to individuals who have not consented</li>
                      <li>
                        Transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or
                        otherwise objectionable
                      </li>
                      <li>Impersonate any person or entity or misrepresent your affiliation</li>
                      <li>Interfere with or disrupt our services or servers</li>
                      <li>Attempt to gain unauthorized access to our systems or networks</li>
                      <li>Use our services to collect or harvest personal information without consent</li>
                      <li>Violate the Telephone Consumer Protection Act (TCPA) or similar regulations</li>
                      <li>Send messages without proper consent or opt-out mechanisms</li>
                      <li>Use our services for any form of illegal telemarketing</li>
                      <li>Resell or redistribute our services without authorization</li>
                      <li>Reverse engineer, decompile, or disassemble our platform</li>
                      <li>Use automated means to access our services in a manner that exceeds reasonable use</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                      SMS and Communication Compliance
                    </h3>
                    <p className="font-inter text-muted-foreground mb-3">
                      When using our communication services, you must:
                    </p>
                    <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                      <li>Obtain proper consent before sending messages to end consumers</li>
                      <li>Include clear opt-out instructions in all messages</li>
                      <li>Honor opt-out requests immediately</li>
                      <li>Identify your business in all communications</li>
                      <li>Comply with all applicable telecommunications laws and regulations</li>
                      <li>Maintain records of consent for all message recipients</li>
                      <li>
                        Not send messages containing prohibited content (illegal goods/services, adult content, hate
                        speech, etc.)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* Fees and Payment */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-6">FEES AND PAYMENT</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Subscription Fees</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      Our services are provided on a subscription basis. Fees are based on your selected plan and usage.
                      Current pricing is available on our website or as quoted in your service agreement.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Payment Terms</h3>
                    <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                      <li>Fees are billed in advance on a monthly or annual basis</li>
                      <li>Payment is due upon receipt of invoice</li>
                      <li>We accept major credit cards and ACH payments</li>
                      <li>All fees are non-refundable except as expressly stated in these Terms</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Late Payments</h3>
                    <p className="font-inter text-muted-foreground mb-3">Late payments may result in:</p>
                    <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                      <li>Service suspension or termination</li>
                      <li>Late fees of 1.5% per month on outstanding balances</li>
                      <li>Collection costs and legal fees if collection action is required</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Price Changes</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      We may change our fees upon 30 days' notice. Continued use of our services after a price change
                      constitutes acceptance of the new fees.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* Intellectual Property */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-6">INTELLECTUAL PROPERTY</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Our Intellectual Property</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      GrowClientsAI and its licensors own all rights, title, and interest in our services, including all
                      software, content, trademarks, and intellectual property. These Terms do not grant you any
                      ownership rights in our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Your Content</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      You retain ownership of any content you provide through our services ("Your Content"). By using
                      our services, you grant us a limited license to use, store, and process Your Content solely to
                      provide our services to you.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Feedback</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      If you provide feedback, suggestions, or ideas about our services, you grant us the right to use
                      such feedback without restriction or compensation.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* Third-Party Services */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">THIRD-PARTY SERVICES</h2>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  Our platform integrates with third-party services (e.g., Twilio, calendar systems, CRM platforms).
                  Your use of these integrations is subject to the terms and policies of those third parties. We are not
                  responsible for third-party services or their content.
                </p>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* Data and Privacy */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-6">DATA AND PRIVACY</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Your Data</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      You retain ownership of your business data and customer information. We process this data only to
                      provide our services in accordance with our Privacy Policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Data Protection</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      We implement reasonable security measures to protect your data. However, you are responsible for
                      maintaining appropriate backups and security measures for your own systems.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Privacy Policy</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      Our collection and use of information is governed by our Privacy Policy, which is incorporated
                      into these Terms by reference.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* Disclaimer of Warranties */}
            <ScrollAnimation>
              <Card className="bg-primary/5 border-border">
                <CardContent className="p-8">
                  <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">DISCLAIMER OF WARRANTIES</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed uppercase text-sm">
                    OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER
                    EXPRESS, IMPLIED, OR STATUTORY.
                  </p>
                  <p className="font-inter text-muted-foreground mt-4 mb-3 uppercase text-sm">
                    WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4 uppercase text-sm">
                    <li>MERCHANTABILITY</li>
                    <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                    <li>NON-INFRINGEMENT</li>
                    <li>ACCURACY OR COMPLETENESS OF CONTENT</li>
                    <li>UNINTERRUPTED OR ERROR-FREE SERVICE</li>
                    <li>RESULTS OR OUTCOMES FROM USING OUR SERVICES</li>
                  </ul>
                  <p className="font-inter text-muted-foreground mt-4 leading-relaxed uppercase text-sm">
                    WE DO NOT WARRANT THAT OUR SERVICES WILL MEET YOUR REQUIREMENTS OR THAT ANY ERRORS WILL BE
                    CORRECTED.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <Separator />

            {/* Limitation of Liability */}
            <ScrollAnimation>
              <Card className="bg-primary/5 border-border">
                <CardContent className="p-8">
                  <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">LIMITATION OF LIABILITY</h2>
                  <p className="font-inter text-muted-foreground leading-relaxed uppercase text-sm mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4 uppercase text-sm">
                    <li>
                      IN NO EVENT SHALL GROWCLIENTSAI BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                      PUNITIVE DAMAGES
                    </li>
                    <li>
                      IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE FEES PAID BY YOU IN THE TWELVE (12) MONTHS
                      PRECEDING THE CLAIM
                    </li>
                    <li>WE SHALL NOT BE LIABLE FOR ANY LOSS OF DATA, PROFITS, REVENUE, OR BUSINESS OPPORTUNITIES</li>
                  </ul>
                  <p className="font-inter text-muted-foreground mt-4 leading-relaxed uppercase text-sm">
                    THESE LIMITATIONS APPLY REGARDLESS OF THE THEORY OF LIABILITY AND EVEN IF WE HAVE BEEN ADVISED OF
                    THE POSSIBILITY OF SUCH DAMAGES.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <Separator />

            {/* Indemnification */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">INDEMNIFICATION</h2>
                <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless GrowClientsAI and its officers, directors,
                  employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable
                  attorneys' fees) arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                  <li>Your use of our services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any applicable laws or regulations</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Any messages or communications sent through our platform</li>
                  <li>Any claims related to TCPA violations or improper consent</li>
                </ul>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* Term and Termination */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-6">TERM AND TERMINATION</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Term</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      These Terms remain in effect until terminated by either party.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Termination by You</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      You may terminate your account at any time by contacting us. You remain responsible for any fees
                      incurred prior to termination.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Termination by Us</h3>
                    <p className="font-inter text-muted-foreground mb-3">
                      We may suspend or terminate your access to our services:
                    </p>
                    <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                      <li>For violation of these Terms</li>
                      <li>For non-payment of fees</li>
                      <li>If required by law</li>
                      <li>If we discontinue our services</li>
                      <li>For any reason with 30 days' notice</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Effect of Termination</h3>
                    <p className="font-inter text-muted-foreground mb-3">Upon termination:</p>
                    <ul className="list-disc list-inside space-y-2 font-inter text-muted-foreground ml-4">
                      <li>Your right to use our services ceases immediately</li>
                      <li>We may delete your data after a reasonable retention period</li>
                      <li>
                        Provisions that by their nature should survive will survive (including indemnification,
                        limitation of liability, and dispute resolution)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* Dispute Resolution */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-6">DISPUTE RESOLUTION</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Informal Resolution</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      Before initiating formal proceedings, you agree to contact us and attempt to resolve any dispute
                      informally for at least 30 days.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Governing Law</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      These Terms are governed by the laws of the State of Delaware, without regard to conflict of law
                      principles.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Arbitration</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      Any disputes arising from these Terms or our services shall be resolved through binding
                      arbitration administered by the American Arbitration Association under its Commercial Arbitration
                      Rules. Arbitration shall take place in Delaware or remotely at our discretion.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Class Action Waiver</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed uppercase text-sm">
                      YOU AGREE THAT ANY CLAIMS WILL BE BROUGHT IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR
                      CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Exceptions</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      Notwithstanding the above, either party may seek injunctive relief in any court of competent
                      jurisdiction.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* General Provisions */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-6">GENERAL PROVISIONS</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Entire Agreement</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      These Terms, together with our Privacy Policy and any service agreements, constitute the entire
                      agreement between you and GrowClientsAI.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Severability</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      If any provision of these Terms is found unenforceable, the remaining provisions will continue in
                      full force and effect.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Waiver</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      Our failure to enforce any right or provision of these Terms does not constitute a waiver of that
                      right or provision.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Assignment</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      You may not assign these Terms without our written consent. We may assign these Terms without
                      restriction.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Notices</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      We may provide notices through your account, email, or posting on our website. You may contact us
                      at the address below.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">Force Majeure</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      We shall not be liable for any failure or delay in performance due to circumstances beyond our
                      reasonable control.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <Separator />

            {/* Changes to These Terms */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-4">CHANGES TO THESE TERMS</h2>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  We may modify these Terms at any time. We will notify you of material changes by email or through our
                  platform. Your continued use of our services after changes become effective constitutes acceptance of
                  the modified Terms.
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
                    <h2 className="font-bebas text-3xl sm:text-4xl text-foreground">CONTACT US</h2>
                  </div>
                  <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                    If you have questions about these Terms, please contact us:
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
                      <a
                        href="https://www.growclientsai.com"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.growclientsai.com
                      </a>
                    </p>
                  </div>
                  <p className="font-inter text-sm text-muted-foreground mt-6 italic">
                    These Terms of Service are provided for informational purposes. We recommend consulting with a
                    licensed attorney to ensure compliance with all applicable laws and regulations in your
                    jurisdiction.
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

export default Terms;
