"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';

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

  <div id="portfolio-body" data-section="portfolio-body">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p-item-1",
          name: "AI Lead Gen",
          price: "Automated",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-boardroom-computer-screen-showcases-business-data-statistics-aiding-executives_482257-133141.jpg",
        },
        {
          id: "p-item-2",
          name: "WhatsApp Automation",
          price: "Scaling",
          imageSrc: "http://img.b2bpic.net/free-photo/medic-expert-uses-thermometer-find-right-diagnostic-symptoms_482257-122834.jpg",
        },
        {
          id: "p-item-3",
          name: "Logistics Solution",
          price: "Optimized",
          imageSrc: "http://img.b2bpic.net/free-vector/data-visualization-particle-dynamic-wave-pattern-vector_53876-43479.jpg",
        },
        {
          id: "p-item-4",
          name: "Smart CRM",
          price: "Enhanced",
          imageSrc: "http://img.b2bpic.net/free-vector/five-analytics-charts-templates-set_1262-4123.jpg",
        },
        {
          id: "p-item-5",
          name: "Global ERP",
          price: "Integrated",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-supply-chain-representation_23-2149827291.jpg",
        },
      ]}
      title="Our Success Stories"
      description="Delivering excellence through technical expertise."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Featured Case Studies"
      description="Deep dive into real-world transformations."
      products={[
        {
          id: "ps-1",
          name: "Smart Factory Workflow",
          price: "Optimization",
          imageSrc: "http://img.b2bpic.net/free-photo/engineers-optimizing-manufacture-robot-arm-conveyor-belt_482257-126835.jpg",
        },
        {
          id: "ps-2",
          name: "Healthcare Digital Portal",
          price: "Compliance",
          imageSrc: "http://img.b2bpic.net/free-photo/healthcare-professionals-review-mri-scan-test-results-neurology-x-rays_482257-123104.jpg",
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
