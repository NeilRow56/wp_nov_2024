export type Staff = {
  id: number;
  name: string;
  category:
    | "limited_company"
    | "partnership"
    | "sole_trader"
    | "charity"
    | "other";
  periodEnding: string;
  contactInfo: string;
  status: "awaiting_ml_checks" | "active" | "archived" | "stop_work";
  createdAt: string;
};
