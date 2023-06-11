import { QuoteDetailsProps } from "../config/types";

export const DisplayQuoteDetails: React.FC<QuoteDetailsProps> = ({ quote }) => (
  <div>Quote: {quote.dialog}</div>
);
