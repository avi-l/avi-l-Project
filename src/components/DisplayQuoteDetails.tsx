import { QuoteDetailsProps } from "../config/types";

export const DisplayQuoteDetails: React.FC<QuoteDetailsProps> = ({ quote }) => (
  <div className="ellipsis" title={quote.dialog}>
    Quote: {quote.dialog}
  </div>
);
