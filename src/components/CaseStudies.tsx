import { ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import hvac from "@/assets/hvac.png"
import plumber from "@/assets/plumber.png"
import elect from "@/assets/electrician.png"


const CaseStudies = () => {
  const case_studies = [
    {
      services: "HVAC Service",
      heading: "Case Study 1: HVAC Company Boosts Bookings by 40% with GrowClientsAI",
      problem: "Mark's HVAC business was missing up to 25% of incoming calls during peak hours, losing valuable repair and maintenance jobs every week. Follow-ups were manual and inconsistent, causing frustrated prospects to go elsewhere.",
      solution: "We implemented an AI assistant that instantly answers calls, books appointments, and sends automated SMS reminders. The system captured lead info 24/7, so no potential job slipped through.",
      results: [
        { label: "Booked jobs increased by 40% in the first 2 months" },
        { label: "No missed calls after hours" },
        { label: "Automated reminders reduced no-shows by 20%" },
        { label: "Max reclaimed over 10 hours/week previously spent on admin" },
      ],
      image: hvac,
    },
    {
      services: "Plumbing Service",
      heading: "Case Study 2: Plumbing Service Cuts Lead Response Time from Hours to Seconds",
      problem: "Sarah's plumbing company struggled with slow follow-up on web leads and missed calls, causing customers to lose interest and go to competitors.",
      solution: "Our AI workflows instantly engaged leads through text and phone, qualifying prospects and scheduling jobs without human delay. Web forms integrated seamlessly with the CRM, automating lead capture.",
      results: [
        { label: "Lead response time dropped from hours to under 30 seconds" },
        { label: "Job bookings increased by 35% within the first 6 weeks" },
        { label: "Customer satisfaction improved due to faster communication" },
        { label: "Staff freed up to focus on job delivery, not chasing leads" },
      ],
      image: plumber,
    },
    {
      services: "Electrical Service",
      heading: "Case Study 3: Electrician Business Automates Scheduling and Doubles Client Retention",
      problem: "Tom's electrician service relied heavily on manual appointment scheduling and follow-up calls, which limited his capacity and led to lost repeat business.",
      solution: "We set up an AI-driven booking assistant integrated with Google Calendar and SMS reminders to automate scheduling and client communication. Post-job follow-ups were automated to encourage repeat business.",
      results: [
        { label: "Client retention doubled in 3 months" },
        { label: "Appointment scheduling became fully automated, saving 15 hours/month" },
        { label: "Follow-up campaigns increased repeat bookings by 25%" },
        { label: "Tom was able to grow his business without hiring more staff" },
      ],
      image: elect,
    },
  ];

  const [modalIndex, setModalIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalIndex(null);
    };
    if (modalIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalIndex]);

  return (
    <section className="py-20 sm:py-32 gradient-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-navy-foreground mb-4">
              REAL RESULTS FROM <span className="text-primary">SERVICE BUSINESSES</span> LIKE YOURS
            </h2>
            <p className="font-inter text-lg text-navy-foreground/70 max-w-2xl mx-auto">
              Join hundreds of service businesses growing with GrowClientsAI
            </p>
          </div>

          {/* Case Study Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {case_studies.map((casestudy, index) => (
              <div
                key={index}
                className="glass-card rounded-xl overflow-hidden hover:shadow-glow-md transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards] group border-2 border-transparent hover:border-primary/50 flex flex-col h-full"
              // style={{ animationDelay: `${index * 150 + 400}ms` }}
              >
                {/* casestudy Image Placeholder with Hover Zoom */}
                <div className="aspect-video bg-muted/20 overflow-hidden relative">
                  <img
                    src={casestudy.image}
                    alt={casestudy.heading}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">

                  {/* casestudy Services */}
                  <span className="bg-primary text-primary-foreground text-xs font-inter font-medium px-2 py-1 rounded-full">{casestudy.services}</span>
                  {/* casestudy heading */}
                  <h3 className="text-3xl text-foreground group-hover:text-primary transition-colors font-bebas">
                    {casestudy.heading}
                  </h3>
                  {/* Links */}
                  <div className="flex gap-3 pt-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                      onClick={() => setModalIndex(index)}
                      aria-haspopup="dialog"
                      aria-expanded={modalIndex === index}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover:rotate-45" />
                      <span>View Details</span>
                    </Button>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          {/* Modal overlay for details */}
          {modalIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setModalIndex(null)}
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="case-study-title"
                className="relative bg-white dark:bg-navy-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 shadow-xl p-4 sm:p-6"
              >
                <button
                  className="absolute top-3 right-3 text-navy-foreground hover:text-primary"
                  onClick={() => setModalIndex(null)}
                  aria-label="Close"
                >
                  <X />
                </button>
                <h3 id="case-study-title" className="text-4xl sm:text-6xl text-primary">
                  {case_studies[modalIndex].heading}
                </h3>
                <h3 className="text-xl sm:text-3xl pt-5">The Problem:</h3>
                <p className="mt-2 text-sm sm:text-base">
                  {case_studies[modalIndex].problem}
                </p>
                <h3 className="text-xl sm:text-3xl pt-5">The GrowClientsAI Solution:</h3>
                <p className="mt-4 text-sm sm:text-base">{case_studies[modalIndex].solution}</p>
                <h3 className="text-xl sm:text-3xl pt-5">The Result:</h3>
                <ul className="mt-4 list-disc ml-5 space-y-2 text-sm sm:text-base">
                  {case_studies[modalIndex].results.map((r, i) => (
                    <li key={i}>{r.label}</li>
                  ))}
                </ul>
                <div className="text-xs pt-10">
          Results may vary based on business size & setup.
        </div>
                <div className="mt-6 flex justify-end">
                  <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-inter border-2 border-border bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-medium transition-all duration-300 h-14 px-10 py-4 text-base"
                    onClick={() => setModalIndex(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="footer text-center text-xs text-navy-foreground container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          Results may vary based on business size & setup.
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
