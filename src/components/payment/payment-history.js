import { NewPayment, Paymentconfirmation, Paymenthistory } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'



export const PayHistory = () => (
    <>
        <SectionTitle subtitle="Payments" />
        <Widget description={<span>Payment History</span>}>
            <div className="text-base w-3/4 flex justify-center">
                <div>
                    <p>This provides users with a view of payments made over time.</p>
                    <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                        <Paymenthistory />
                    </figure>
                </div>
            </div>
        </Widget>
    </>
)