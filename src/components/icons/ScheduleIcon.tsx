type ScheduleIconType = {
  colorFill?: string; // Tailwind fill color
};

export default function ScheduleIcon({
  colorFill = "fill-primary-gray",
}: ScheduleIconType) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${colorFill}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2508 0.514648C6.31048 0.514648 0.690308 6.1474 0.690308 13.0877C0.690308 20.0281 6.31048 25.6608 13.2508 25.6608C20.2038 25.6608 25.8365 20.0281 25.8365 13.0877C25.8365 6.1474 20.2038 0.514648 13.2508 0.514648ZM13.2637 23.1462C7.70636 23.1462 3.20519 18.6451 3.20519 13.0878C3.20519 7.53045 7.70636 3.02928 13.2637 3.02928C18.821 3.02928 23.3221 7.53045 23.3221 13.0878C23.3221 18.6451 18.821 23.1462 13.2637 23.1462ZM12.0061 6.80121H13.8921V13.4021L19.55 16.7591L18.607 18.3056L12.0061 14.3451V6.80121Z"
      />
    </svg>
  );
}
