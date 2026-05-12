"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Award } from "lucide-react";

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

  <div id="about-body" data-section="about-body">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Us"
      title="Meet Adnan Fida"
      description="Founder & AI Automation Expert. Passionate about driving business efficiency through technology."
      subdescription="Our mission is to help companies bridge the gap between manual operations and AI potential."
      icon={Award}
      imageSrc="http://img.b2bpic.net/free-photo/man-portrait-posing-loft-modern-space_158595-5362.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="team-body" data-section="team-body">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "t1",
          name: "Adnan Fida",
          role: "AI Automation Expert",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-businessman-with-crossed-arms_23-2148242733.jpg",
        },
        {
          id: "t2",
          name: "Jameel",
          role: "Lead AI Engineer",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-inspector-suit-reviewing-solar-panel-production-showcasing-leadership-renewable_482257-135429.jpg",
        },
      ]}
      title="The AiViqo Core"
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
