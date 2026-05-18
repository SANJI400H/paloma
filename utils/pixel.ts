declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackWhatsAppClick = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact", {
      content_name: "WhatsApp Booking Click",
      content_category: "Booking",
    });
  }
};

export const trackServicesView = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: "Services Section",
      content_category: "Services",
    });
  }
};
