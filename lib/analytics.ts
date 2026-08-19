export type ConversionEventName =
  | "call_click"
  | "whatsapp_click"
  | "appointment_click"
  | "contact_form_submit";

type AnalyticsParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: AnalyticsParams
    ) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  eventName: ConversionEventName,
  params?: AnalyticsParams
) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
    return;
  }

  window.dataLayer?.push({
    event: eventName,
    ...params,
  });
}
