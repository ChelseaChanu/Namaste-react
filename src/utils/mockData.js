const restaurants = [
  {
    info: {
      id: "225834",
      name: "Like Momo",
      cloudinaryImageId: "fgjvtqnfczr3qihjx86t",
      locality: "Kwakeithel Thingom Leikai",
      areaName: "Nepra Menjor Road",
      costForTwo: 220,
      cuisines: [
      "Indian",
      "Chinese"
      ],
      avgRating: 4.4,
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.9,
      },
    }
  },
  {
    info: {
      id: "248022",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "DM College",
      areaName: "Thangal Bazaar",
      costForTwo: 400,
      cuisines: [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
      ],
      avgRating: 4.4,
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
      },
    },
  },
  {
    info: {
      id: "595209",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Chingakham Leikam",
      areaName: "Keishamthong",
      costForTwo: 350,
      cuisines: [
      "Pizzas"
      ],
      avgRating: 4.3,
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
      },
    },
  },
  {
    info: {
      id: "359466",
      name: "One Bite",
      cloudinaryImageId: "xqkmypelvhgvb6sqr0pf",
      locality: "Majorkhul",
      areaName: "Sagolband",
      costForTwo: 200,
      cuisines: [
      "American"
      ],
      avgRating: 4.3,
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1,
      },
    }
  },
  {
    info: {
      id: "320988",
      name: "Tasty Tastes - Nagmapal",
      cloudinaryImageId: "uwdnqmilpyfaxzhkqdrr",
      locality: "Nagamapal Road",
      areaName: "Thangmeiband",
      costForTwo: 300,
      cuisines: [
      "Snacks"
      ],
      avgRating: 4.3,
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.2,
      },
    },
  },
  {
    info: {
      id: "491776",
      name: "Eden Lounge",
      cloudinaryImageId: "okd0jg0ywtvqroyddapw",
      locality: "Tera Lukram Leirak",
      areaName: "Sagolband",
      costForTwo: 300,
      cuisines: [
      "North Indian"
      ],
      avgRating: 4.5,
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.8,
      },
    },
  },
  {
    info: {
      id: "225833",
      name: "Samoxa",
      cloudinaryImageId: "lcuixpuktiqcdxsxzgry",
      locality: "Kwakeithel Thingom Leikai",
      areaName: "Nepra Menjor Road",
      costForTwo: 200,
      cuisines: [
      "Chaat"
      ],
      avgRating: 4.5,
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.9,
      },
    }
  },
  {
    info: {
      id: "295567",
      name: "ABC Fast Food",
      cloudinaryImageId: "df2ecvrtluksspusbsno",
      locality: "Nagamapal",
      areaName: "Thangmeiband",
      costForTwo: 300,
      cuisines: [
      "Indian",
      "North Indian",
      "Thai"
      ],
      avgRating: 4.5,
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.2,
      },
    }
  },
  {
    info: {
      id: "421750",
      name: "Kreams",
      cloudinaryImageId: "onx5nxmedx8gswe1y7pw",
      locality: "NG College Road",
      areaName: "Majorkhul",
      costForTwo: 1000,
      cuisines: [
      "Bakery"
      ],
      avgRating: 4.3,
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.5,
      },
    }
  },
  {
  info: {
    id: "450761",
    name: "Eikhoi Chakshang",
    cloudinaryImageId: "rupa27egzivnhutlxfp4",
    locality: "Wahengbam Leikai",
    areaName: "Majorkhul",
    costForTwo: 250,
    cuisines: [
    "Indian"
    ],
    avgRating: 4.3,
    totalRatingsString: "100+",
    sla: {
      deliveryTime: 17,
      lastMileTravel: 1.3,
      },
    }
  },
  {
    info: {
      id: "397478",
      name: "Haona Chao",
      cloudinaryImageId: "eew9x2c8s6bbcpb2lu62",
      locality: "Kangabam Leikai",
      areaName: "Majorkhul",
      costForTwo: 400,
      cuisines: [
      "Indian"
      ],
      avgRating: 4.1,
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.8,
      },
    }
  },
  {
    info: {
      id: "223744",
      name: "USPFC - US Pizza & Fried Chicken",
      cloudinaryImageId: "tc5f7rso8wslfi5rkmt9",
      locality: "Airport Road",
      areaName: "Chingamikha",
      costForTwo: 200,
      cuisines: [
      "Pizzas",
      "Italian-American",
      "Indian"
      ],
      avgRating: 4.4,
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
      },
    }
  },
  {
    info: {
      id: "386931",
      name: "New Blue Moon",
      cloudinaryImageId: "xhhjys4nyhrpr219pysj",
      locality: "Dharmasala Road",
      areaName: "Dharmasala",
      costForTwo: 200,
      cuisines: [
      "Sweets",
      "Snacks",
      "Indian",
      "South Indian",
      "Chinese"
      ],
      avgRating: 4.1,
      veg: true,
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.2,
      },
    }
  },
  {
    info: {
      id: "321997",
      name: "7th Heaven Cake Shop",
      cloudinaryImageId: "fhmalrl8lyllrbg4eh8q",
      locality: "Konjeng Hajari Leikai",
      areaName: "Sagolband",
      costForTwo: 1400,
      cuisines: [
      "Bakery"
      ],
      avgRating: 4.1,
      veg: true,
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.1,
      },
    }
  },
  {
    info: {
      id: "223747",
      name: "Dawat-E-Khas Sweets & Snacks",
      cloudinaryImageId: "tpgyan66yawcrvd3fpuf",
      areaName: "Thangal Bazaar",
      costForTwo: 100,
      cuisines: [
      "Sweets"
      ],
      avgRating: 3.8,
      veg: true,
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.3,
      },
    }
  },
  {
    info: {
      id: "235601",
      name: "Food Zilla",
      cloudinaryImageId: "oqlwrj1wlgldaxmwxesx",
      areaName: "Majorkhul",
      costForTwo: 200,
      cuisines: [
      "Chinese",
      "Indian",
      "Italian",
      "Korean",
      "Thai",
      "Italian-American"
      ],
      avgRating: 4.3,
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 3,
      },
    }
  },
  {
    info: {
      id: "593901",
      name: "Oppa Chicken",
      cloudinaryImageId: "ez99xbeee1b54gai6v0n",
      locality: "Keishampat",
      areaName: "Majorkhul",
      costForTwo: 220,
      cuisines: [
      "Snacks"
      ],
      avgRating: 4.7,
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 2.4,
      },
    }
  },
  {
    info: {
      id: "223748",
      name: "Dawat-E-Khas Restaurant",
      cloudinaryImageId: "rjtcawutepi5h7nokj2k",
      areaName: "Thangal Bazaar",
      costForTwo: 250,
      cuisines: [
      "North Indian",
      "Chinese"
      ],
      avgRating: 4.2,
      veg: true,
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.3,
      },
    }
  },
  {
    info: {
      id: "373063",
      name: "Naobas Chakhumang Restaurant",
      cloudinaryImageId: "eyifuwrbfkkyfaxrmvor",
      locality: "Jnims Road",
      areaName: "Majorkhul",
      costForTwo: 500,
      cuisines: [
      "Indian"
      ],
      avgRating: 3.8,
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.3,
      },
    }
  },
  {
    info: {
      id: "256155",
      name: "Sangai Continental",
      cloudinaryImageId: "krrkrrajqfcbcylhygvg",
      locality: "Sangai Continental",
      areaName: "Thangal Bazar",
      costForTwo: 1000,
      cuisines: [
      "American",
      "Asian",
      "Chinese",
      "Indian",
      "North Indian",
      "South Indian"
      ],
      avgRating: 4.5,
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.3,
      },
    }
  }
]

export default restaurants;