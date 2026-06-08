"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Bed, ChefHat, Heart, Sparkles, Utensils, Wifi, Wine, BellRing } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="grid"
        cardStyle="gradient-radial"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Services",          id: "#features"},
        {
          name: "Sweets & Food",          id: "#products"},
        {
          name: "Offers",          id: "#pricing"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      button={{
        text: "Book Now",        href: "#contact"}}
      brandName="PUROHIT MISTHAN BHANDAR"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "radial-gradient"}}
      title="Experience the Tradition of Taste & Comfort"
      description="PUROHIT MISTHAN BHANDAR GOLUWALA offers the finest Indian sweets, authentic dining, and luxurious hotel stays. A legacy of quality, service, and warmth."
      buttons={[
        {
          text: "Explore Sweets",          href: "#products"},
        {
          text: "Book a Stay",          href: "#pricing"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/diwali-feast-traditional-indian-sweets-festive-decorations_23-2152002855.jpg",          imageAlt: "Assortment of traditional Indian sweets"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-table-12-persons-with-blue-chairs-fireplace-white-brick-walls-wide-window_140725-8456.jpg",          imageAlt: "Elegant interior of an Indian restaurant"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/notebook-pillows-lying-bed_23-2147737695.jpg",          imageAlt: "Comfortable and luxurious hotel room"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-cup-coffee_107420-12306.jpg",          imageAlt: "Friendly staff welcoming guests"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/indian-butter-chicken-black-bowl-wooden-table_123827-20634.jpg",          imageAlt: "Spread of delicious Indian dishes"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/udaipur-city-view-from-hotel-balcony-rajasthan-india_53876-65506.jpg",          imageAlt: "Exterior facade of Purohit Misthan Bhandar"},
      ]}
      mediaAnimation="opacity"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/cooking-meatballs-ready-mince-lies-by-roasting-kitchen-table_132075-8834.jpg",          alt: "Traditional Indian chef preparing sweets"
        },
        {
          type: "text",          content: "Our Legacy of Sweetness and Service"}
      ]}
      buttons={[
        {
          text: "Learn More",          href: "#"}
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Authentic Indian Sweets",          description: "Handcrafted with traditional recipes and premium ingredients, our sweets are a treat for every occasion.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/tray-full-appetizing-turkish-delight-marble-background-high-quality-photo_114579-36450.jpg",            imageAlt: "Display of various Indian sweets"},
          items: [
            {
              icon: Sparkles,
              text: "Traditional Recipes"},
            {
              icon: Award,
              text: "Finest Ingredients"},
            {
              icon: Heart,
              text: "Handcrafted Perfection"},
          ],
          reverse: false,
        },
        {
          title: "Exquisite Dining Experience",          description: "Savor a wide range of authentic Indian and regional cuisines prepared by expert chefs in our elegant restaurant.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/valentines-day-table-setting-romantic-dinner-marry-me-wedding-engagement-ring-box_114579-459.jpg",            imageAlt: "Elegant restaurant dining table"},
          items: [
            {
              icon: Utensils,
              text: "Diverse Menu"},
            {
              icon: ChefHat,
              text: "Expert Chefs"},
            {
              icon: Wine,
              text: "Refined Ambiance"},
          ],
          reverse: true,
        },
        {
          title: "Comfortable Hotel Stays",          description: "Relax and unwind in our well-appointed rooms, designed for comfort and convenience, whether for business or leisure.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/stair-pool_1203-2592.jpg",            imageAlt: "Modern hotel room with a comfortable bed"},
          items: [
            {
              icon: Bed,
              text: "Luxurious Rooms"},
            {
              icon: BellRing,
              text: "Attentive Service"},
            {
              icon: Wifi,
              text: "Modern Amenities"},
          ],
          reverse: false,
        },
      ]}
      title="Experience Our Signature Offerings"
      description="Discover the diverse delights and exceptional services that make Purohit Misthan Bhandar Goluwala a unique destination."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          brand: "Purohit's",          name: "Gulab Jamun",          price: "₹250/kg",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/lohri-celebration-india_23-2151099088.jpg",          imageAlt: "Delicious Gulab Jamun"},
        {
          id: "p2",          brand: "Purohit's",          name: "Rasgulla",          price: "₹220/kg",          rating: 4,
          reviewCount: "95",          imageSrc: "http://img.b2bpic.net/free-photo/biscuit-pop-cakes-plate-marble-table_114579-83774.jpg",          imageAlt: "Soft Rasgulla"},
        {
          id: "p3",          brand: "Purohit's",          name: "Crispy Samosa",          price: "₹30/piece",          rating: 5,
          reviewCount: "150",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-plate-with-pakistani-food_23-2148825158.jpg",          imageAlt: "Crispy Samosa"},
        {
          id: "p4",          brand: "Purohit's",          name: "Vegetarian Thali",          price: "₹350",          rating: 4,
          reviewCount: "80",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-assortment-different-pakistan-goodies_23-2148821568.jpg",          imageAlt: "Traditional Vegetarian Thali"},
        {
          id: "p5",          brand: "Purohit's",          name: "Special Biryani",          price: "₹420",          rating: 5,
          reviewCount: "110",          imageSrc: "http://img.b2bpic.net/free-photo/front-close-view-tasty-salad-with-mayonnaise-vegetables-cheese-dark-blue-background_140725-49042.jpg",          imageAlt: "Aromatic Biryani"},
        {
          id: "p6",          brand: "Purohit's",          name: "Hot Jalebi",          price: "₹180/250g",          rating: 4,
          reviewCount: "70",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-food-table-still-life_23-2150751961.jpg",          imageAlt: "Fresh Hot Jalebi"},
      ]}
      title="Our Signature Sweets & Dishes"
      description="Indulge in our most loved specialties, from mouth-watering sweets to savory restaurant delights."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "hotel-deluxe",          title: "Deluxe Room Stay",          price: "₹3,500",          period: "/night",          features: [
            "Comfortable Deluxe Room",            "Complimentary Breakfast",            "Free Wi-Fi Access",            "24/7 Room Service",            "Access to all amenities"],
          button: {
            text: "Book Now",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-breakfast-board-near-happy-woman-bed_23-2148007285.jpg",          imageAlt: "Deluxe Hotel Room"},
        {
          id: "hotel-suite",          title: "Luxury Suite Package",          price: "₹6,000",          period: "/night",          features: [
            "Spacious Luxury Suite",            "Gourmet Breakfast Included",            "High-Speed Internet",            "Personalized BellRing",            "Early Check-in/Late Check-out"],
          button: {
            text: "Book Suite",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-romantic-breakfast-bed-arrangement_23-2150956570.jpg",          imageAlt: "Luxury Hotel Suite"},
        {
          id: "catering-event",          title: "Event Catering Plan",          price: "Custom",          period: "/event",          features: [
            "Customized Menu Options",            "Professional Service Staff",            "Setup & Cleanup Included",            "Variety of Indian Cuisines",            "Suitable for all events"],
          button: {
            text: "Inquire Now",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/big-plate-with-variety-meat_8353-9865.jpg",          imageAlt: "Catering setup for an event"},
      ]}
      title="Exclusive Offers & Packages"
      description="Discover our special deals for hotel stays, catering services, and sweet bundles."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Purohit Misthan Bhandar is an absolute gem! Their sweets are divine, the restaurant food is authentic and delicious, and the hotel stay was incredibly comfortable. A truly delightful experience every time."
      rating={5}
      author="Ramesh Kumar - Satisfied Customer"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/feedback-comment-survey-support-response-bar-word_53876-127367.jpg",          alt: "Ramesh Kumar"},
        {
          src: "http://img.b2bpic.net/free-photo/signs-symbols-gestures-concept-cheerful-young-mixed-race-lady-with-long-straight-hair-smiling-broadly-showing-thumbs-up-gesture-as-sign-approval-respect-liking_344912-1033.jpg",          alt: "Priya Sharma"},
        {
          src: "http://img.b2bpic.net/free-photo/indian-man-city-male-traditional-turban-hinduist-summer-city_1157-41025.jpg",          alt: "Anil Singh"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-using-mobile-phone-holding-cookie-hand_23-2148137425.jpg",          alt: "Deepika Patel"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-pretty-brunette-woman-points-front-with-two-hands-isolated-olive-green-wall_141793-65779.jpg",          alt: "Happy Customer"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Goluwala's Best Sweet Shop",        "Top Rated Restaurant",        "Preferred Hotel Partner",        "Culinary Excellence Award",        "Local Business Star",        "Customer Choice Award",        "Featured in Foodie Magazine"]}
      title="Trusted by Many, Awarded for Excellence"
      description="Our commitment to quality and service has earned us recognition and the trust of our valued customers and partners."
      buttons={[
        {
          text: "Read Reviews",          href: "#testimonials"},
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",          title: "Do you offer catering services for events?",          content: "Yes, we provide comprehensive catering services for weddings, corporate events, and private parties. Please contact us for customized menu options."},
        {
          id: "faq2",          title: "What are the check-in and check-out times for the hotel?",          content: "Standard check-in time is 2:00 PM and check-out is 12:00 PM. Early check-in or late check-out may be available upon request and subject to availability."},
        {
          id: "faq3",          title: "Can I place an order for sweets online or for delivery?",          content: "Currently, we offer in-store pickup and local delivery services within Goluwala. Online ordering is available through partner platforms. Please check our contact page for details."},
        {
          id: "faq4",          title: "Do you have vegetarian and vegan options in the restaurant?",          content: "Yes, our restaurant offers a wide array of vegetarian dishes and we are happy to accommodate vegan preferences upon request. Please inform our staff about your dietary needs."},
        {
          id: "faq5",          title: "Are pets allowed in the hotel rooms?",          content: "To ensure the comfort of all our guests, pets are generally not allowed. Please contact our reception directly if you have specific service animal requirements."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/joyful-young-blonde-call-centre-girl-wearing-headset-sitting-desk-with-work-tools-looking-side-showing-thumbs-up-isolated-pink-wall_141793-113253.jpg"
      imageAlt="Smiling hotel staff member greeting a guest"
      mediaAnimation="opacity"
      mediaPosition="right"
      title="Frequently Asked Questions"
      description="Find answers to common questions about our sweet shop, restaurant, and hotel services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Connect With Us"
      title="Visit, Dine, or Stay at Purohit Misthan Bhandar"
      description="We look forward to welcoming you to experience our hospitality. Contact us for reservations, inquiries, or any assistance."
      inputPlaceholder="Your Name or Email"
      buttonText="Send Message"
      termsText="By submitting this form, you agree to our privacy policy and terms of service."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="PUROHIT MISTHAN BHANDAR"
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Offerings",              href: "#features"},
            {
              label: "Sweets & Food",              href: "#products"},
            {
              label: "Special Offers",              href: "#pricing"},
          ],
        },
        {
          title: "Services",          items: [
            {
              label: "Hotel Booking",              href: "#pricing"},
            {
              label: "Restaurant Reservations",              href: "#contact"},
            {
              label: "Event Catering",              href: "#pricing"},
            {
              label: "Sweet Orders",              href: "#products"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Location: Goluwala",              href: "#contact"},
            {
              label: "Call: +91 12345 67890",              href: "tel:+911234567890"},
            {
              label: "Email: info@purohit.com",              href: "mailto:info@purohit.com"},
            {
              label: "FAQs",              href: "#faq"},
          ],
        },
      ]}
      copyrightText="© 2023 Purohit Misthan Bhandar Goluwala. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
