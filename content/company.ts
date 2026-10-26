export const company = {
    name: "Renova",
    tagline: "Ремонт квартир і будинків під ключ",
    phone: "+49 160 1234567890",
    email: "info@example.com",
    address: {
      street: "Behringstr 17",
      city: "Bautzen",
      country: "Deutschland",
    },
    
    logo: {
      light: "/images/logo/logo-light.png",
      dark: "/images/logo/logo-dark.png",
      alt: "Renova",
      width: 393,
      height: 70,
    },
  
    // Мобільний логотип
    logoMobile: {
      light: "/images/logo/logo-mobile-light.png",
      dark: "/images/logo/logo-mobile-dark.png",
      alt: "Renova",
      width: 70,
      height: 70,
    },
    workingHours: "Mo-Fr: 9:00-19:00",
    socials: {
      instagram: "https://instagram.com/...",
      facebook: "https://facebook.com/...",
    },
  } as const;