import { AlertTriangle } from "lucide-react";
import "./PaymentWarningMarquee.css";

function PaymentWarningMarquee() {
  const message =
    "IMPORTANT NOTICE: NO PAYMENTS ARE ACCEPTED THROUGH THIS WEBSITE. SUBMIT YOUR ENQUIRY FORM ONLY. OUR TEAM WILL CONTACT YOU DIRECTLY TO DISCUSS COURSE DETAILS, FEES AND PAYMENT PROCEDURES.";

  return (
    <div className="payment-marquee" role="status">
      <div className="payment-marquee-track">
        {[1, 2, 3, 4].map((item) => (
          <div className="payment-marquee-item" key={item}>
            <AlertTriangle size={17} />
            <span>{message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentWarningMarquee;