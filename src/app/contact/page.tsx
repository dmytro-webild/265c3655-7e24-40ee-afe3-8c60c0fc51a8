"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

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
        { name: "Home", id: "/" },
        { name: "About", id: "/about" },
        { name: "Services", id: "/services" },
        { name: "Portfolio", id: "/portfolio" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="AiViqo"
      button={{ text: "Get Started", href: "/contact" }}
    />
  </div>

  <div id="contact-body" data-section="contact-body">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Inquire Today"
      description="Send us your project brief."
      inputs={[
        { name: "Name", type: "text", placeholder: "Full Name" },
        { name: "Email", type: "email", placeholder: "Email" },
      ]}
      textarea={{ name: "Description", placeholder: "Describe your project..." }}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-geometric-background-with-futuristic-design_1048-5529.jpg"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Schedule a Discovery Call"
      description="Let's explore your automation roadmap together."
      inputs={[
        { name: "Name", type: "text", placeholder: "Full Name" },
        { name: "Phone", type: "tel", placeholder: "Phone Number" },
      ]}
      textarea={{ name: "Note", placeholder: "Your timeline/goals..." }}
      imageSrc="http://img.b2bpic.net/free-photo/modern-geometrical-background-with-copy-space_23-2148811526.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="AiViqo"
      columns={[
        { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Portfolio", href: "/portfolio" }] },
        { title: "Services", items: [{ label: "AI Automation", href: "/services" }, { label: "Dev Services", href: "/services" }] },
        { title: "Contact", items: [{ label: "WhatsApp", href: "https://wa.me/923710993653" }, { label: "Support", href: "mailto:support@aiviqo.com" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
