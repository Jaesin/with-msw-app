"use client";

export default function ClientOnly() {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    console.log("[Layout] Mocking enabled.");
    require("../../mocks");
  }

  return null;
}
