import { MetadataRoute } from "next";

const BASE_URL = "https://taiwan-eats.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // --- Core navigation ---
    {
      url: `${BASE_URL}/`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/dishes`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cities`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/night-markets`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/experiences`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/subscribe`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/advertise`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/write-for-us`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "yearly",
      priority: 0.4,
    },

    // --- Dish guides ---
    {
      url: `${BASE_URL}/dishes/beef-noodle-soup-taipei`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dishes/bubble-tea-guide`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dishes/lu-rou-fan`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dishes/oyster-omelette`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dishes/scallion-pancake`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dishes/xiao-long-bao`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // --- City guides ---
    {
      url: `${BASE_URL}/cities/taipei`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/cities/tainan`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/cities/kaohsiung`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/cities/taichung`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // --- Night market guides ---
    {
      url: `${BASE_URL}/night-markets/shilin`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/night-markets/raohe`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/night-markets/shilin-vs-raohe`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/night-markets/huayuan`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/night-markets/liuhe`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
