"use client";

import { useEffect, useState } from "./hooks";

export function useClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  return isClient;
}
