
import { Elements } from '@stripe/react-stripe-js'
import SectionTitle from '../../../../components/sectiontitle/SectionTitle'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
export default function Payment() {
  return (
     <div>
        <SectionTitle  Heading="payment method"  subHeading="have a good payment"   >
           
        </SectionTitle>
         <div>
                <Elements stripe={stripePromise}>
                    
                </Elements>
            </div>
    </div>
  )
}
