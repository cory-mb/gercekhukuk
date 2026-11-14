// GA4 olayı; gtag yoksa (kimlik tanımsız, engelleyici, geliştirme) sessizce atlanır.
export function track(name: string, params?: Record<string, string>) {
  (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", name, params);
}
