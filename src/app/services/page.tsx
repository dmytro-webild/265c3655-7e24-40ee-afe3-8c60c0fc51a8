"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Code, Code2, Shield, Smartphone, User, Zap } from "lucide-react";

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

  <div id="services-body" data-section="services-body">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: Code2,
          title: "AI Automation",
          description: "Custom workflows tailored for your business.",
        },
        {
          icon: Smartphone,
          title: "Web & App Development",
          description: "High quality modern software development.",
        },
        {
          icon: User,
          title: "Sales Experts",
          description: "On-demand sales force integration.",
        },
      ]}
      title="All Services"
      description="Full-stack AI development and automation services."
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Why Choose Our AI Services?"
      description="Industry-leading automation for competitive advantage."
      features={[
        {
          icon: Zap,
          title: "Scalable Infrastructure",
          description: "Robust architecture built to handle growth.",
        },
        {
          icon: Code,
          title: "Performance Optimized",
          description: "Lean, high-speed code for maximum efficiency.",
        },
        {
          icon: Shield,
          title: "Secure Systems",
          description: "Enterprise-grade data protection.",
        },
      ]}
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
