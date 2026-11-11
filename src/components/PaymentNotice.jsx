import { AlertTriangle, ShieldCheck } from "lucide-react";
import "./PaymentNotice.css";

function PaymentNotice() {
  return (
    <section className="payment-notice">
      <div className="payment-notice-container">
        <div className="payment-notice-icon">
          <AlertTriangle size={26} />
        </div>

        <div className="payment-notice-content">
          <h3>Important Notice – No Online Payments</h3>

          <p>
            SR Tech Solutions does not accept or collect any payments
            through this website. The Enquiry Form is strictly for
            requesting information about our courses, training programs,
            internships and services.
          </p>

          <p>
            After receiving your enquiry, our team will contact you
            directly to discuss course details, fees and payment
            procedures.
          </p>

          <strong>
            Please do not make any payment through this website.
          </strong>
        </div>

        <ShieldCheck className="payment-notice-watermark" size={85} />
      </div>
    </section>
  );
}

export default PaymentNotice;