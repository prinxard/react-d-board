import { NewPayment, Paymentconfirmation, Paymenthistory } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'



export const PayHistory = () => (
    <div id="payment-history">
            <div className="text-base" >
                <div>
                    <p className="mt-16 mb-4"><strong>Payment History</strong></p>
                    <p>This provides users with a view of payments made over time.</p>
                    <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                        <Paymenthistory />
                    </figure>
                </div>
            </div>
    </div>
)