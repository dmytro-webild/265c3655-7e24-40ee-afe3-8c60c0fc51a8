"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Code, Database, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="blurBottom"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "Portfolio",
          id: "/portfolio",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="AiViqo"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "sparkles-gradient",
      }}
      title="Scale Your Business With AI Automation"
      description="AiViqo delivers high-performance AI solutions, workflow automation, and custom software to help your business operate at its full potential."
      buttons={[
        {
          text: "Book a Meeting",
          href: "https://calendly.com/visuallabstudios/30min?hide_event_type_details=1&hide_gdpr_banner=1",
        },
        {
          text: "Contact Us",
          href: "/contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tablet-with-applications_1134-123.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/geometric-abstract-phone-wallpaper-technology-concept-connecting-dots-design_53876-160212.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-fractal-background-with-plexus-effect_1048-8021.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-technology-background-concept_1194-617406.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-network-interconnected-nodes-lines-black-background_23-2151977502.jpg",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services-home" data-section="services-home">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          icon: Zap,
          title: "AI Automation",
          description: "Streamlining complex tasks with advanced AI logic.",
        },
        {
          icon: Code,
          title: "Web Development",
          description: "High-performing custom web and mobile apps.",
        },
        {
          icon: Database,
          title: "CRM Automation",
          description: "Data-driven customer lifecycle management.",
        },
      ]}
      title="Core Services"
      description="Comprehensive AI and development solutions for modern businesses."
    />
  </div>

  <div id="benefits" data-section="benefits">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "100+",
          title: "Processes Automated",
          items: [
            "Scalability",
            "Reliability",
            "Efficiency",
          ],
        },
        {
          id: "m2",
          value: "50+",
          title: "Projects Delivered",
          items: [
            "Quality",
            "Innovation",
            "Speed",
          ],
        },
        {
          id: "m3",
          value: "99%",
          title: "Client Satisfaction",
          items: [
            "Commitment",
            "Growth",
            "Result-Oriented",
          ],
        },
      ]}
      title="Why Partner With AiViqo"
      description="Measurable results driven by expert engineering."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "p1",
          badge: "Essential",
          price: "$1,500",
          subtitle: "Basic Workflow Automation",
          buttons: [
            {
              text: "Get Started",
              href: "/contact",
            },
          ],
          features: [
            "Workflow Analysis",
            "Bot Setup",
            "24/7 Support",
          ],
        },
        {
          id: "p2",
          badge: "Professional",
          price: "$3,500",
          subtitle: "Comprehensive Business AI",
          buttons: [
            {
              text: "Choose Pro",
              href: "/contact",
            },
          ],
          features: [
            "CRM Automation",
            "Lead Gen Systems",
            "Priority Support",
          ],
        },
        {
          id: "p3",
          badge: "Enterprise",
          price: "Custom",
          subtitle: "End-to-End Solutions",
          buttons: [
            {
              text: "Consult Us",
              href: "/contact",
            },
          ],
          features: [
            "Custom AI Models",
            "Full ERP Integration",
            "Dedicated Team",
          ],
        },
      ]}
      title="Automation Packages"
      description="Transparent plans for your digital growth."
    />
  </div>

  <div id="recent-projects" data-section="recent-projects">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "pr1",
          name: "AI Lead Gen System",
          price: "Tech-Stack: Python, AI",
          imageSrc: "http://img.b2bpic.net/free-photo/manager-watches-tablet-with-greenscreen_482257-76577.jpg",
        },
        {
          id: "pr2",
          name: "Dental WhatsApp Automation",
          price: "Tech-Stack: Twilio, Node",
          imageSrc: "http://img.b2bpic.net/free-photo/general-practitioner-discussing-with-doctor-video-conference-call_482257-123966.jpg",
        },
        {
          id: "pr3",
          name: "Logistics Platform",
          price: "Tech-Stack: AWS, React",
          imageSrc: "http://img.b2bpic.net/free-vector/business-infographic-with-photo_23-2148445277.jpg",
        },
        {
          id: "pr4",
          name: "Medical ERP",
          price: "Tech-Stack: SQL, Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/office-worker-analyzing-business-charts-laptop-using-paperwork-research-information-make-data-report-working-from-home-startup-analysis-with-web-graphs-browsing-internet_482257-50961.jpg",
        },
        {
          id: "pr5",
          name: "Email Campaign Bot",
          price: "Tech-Stack: SendGrid",
          imageSrc: "http://img.b2bpic.net/free-photo/doctors-nurses-review-radiography-scans-with-green-screen-desk_482257-123281.jpg",
        },
      ]}
      title="Portfolio Highlights"
      description="Innovative solutions that drive efficiency."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="AiViqo transformed our business workflow entirely. Their AI automation skills are truly unmatched in the industry."
      rating={5}
      author="Sarah Jenkins, CEO"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-young-businessman-with-thumb-up-tablet_1262-2010.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-mature-business-man-standing-office-cafe-leaning-counter-holding-jacket-shoulder-showing-thumb-up_74855-15159.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handshake-with-smiling-businessman_23-2147708181.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-successful-businessman-smiling-posing-with-crossed-arms-office_176420-914.jpg",
          alt: "Client 5",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How does AI automation work?",
          content: "We connect your business platforms with custom AI logic to automate repetitive workflows.",
        },
        {
          id: "f2",
          title: "What industries do you serve?",
          content: "We support healthcare, logistics, e-commerce, and B2B sales agencies.",
        },
        {
          id: "f3",
          title: "Is the solution scalable?",
          content: "Yes, our systems are built on robust cloud architectures to grow with you.",
        },
        {
          id: "f4",
          title: "How fast is delivery?",
          content: "Our typical setup for MVP solutions is within 2-4 weeks depending on complexity.",
        },
        {
          id: "f5",
          title: "What is the team expertise?",
          content: "We are a team of AI automation experts and dedicated software engineers.",
        },
        {
          id: "f6",
          title: "Do you offer support?",
          content: "Post-launch maintenance and optimization support is included with our packages.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="cta" data-section="cta">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Ready to Automate?"
      description="Book your 30-min strategy session now."
      inputs={[
        {
          name: "Name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "Email",
          type: "email",
          placeholder: "Email Address",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-rendering-abstract-black-white-background_23-2150914053.jpg"
      buttonText="Book Consultation"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="AiViqo"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "/about",
            },
            {
              label: "Portfolio",
              href: "/portfolio",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "AI Automation",
              href: "/services",
            },
            {
              label: "Dev Services",
              href: "/services",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "WhatsApp",
              href: "https://wa.me/923710993653",
            },
            {
              label: "Support",
              href: "mailto:support@aiviqo.com",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
