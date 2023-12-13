const locales = "en-UK";

export const inboxDateFormat = new Intl.DateTimeFormat(locales, {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
});

export const chatboxDateFormat = new Intl.DateTimeFormat(locales, {
  hour: "numeric",
  minute: "numeric",
});

export const taskDateFormat = new Intl.DateTimeFormat(locales, {
  day: "numeric",
  month: "numeric",
  year: "numeric",
});
