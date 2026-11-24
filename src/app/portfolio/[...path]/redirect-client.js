"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function PortfolioPathRedirect() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const parts = Array.isArray(params.path) ? params.path : [];
    router.replace(parts.length ? `/work/${parts.join("/")}` : "/work");
  }, [params, router]);

  return null;
}
