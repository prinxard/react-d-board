import { AssessReciept, Choosebank, Downloadsteps, Interswitchpay, Paymentreciept, Paynowimg, Payynow, Recipt2, Selectmethod, Unpaidassessment } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'



export const UnpaidAs = () => (
    <>
        <Widget>
            <div className="text-base w-3/4 flex justify-center" id="unpaid-assesment">
                <div>
                    <p className="mb-4"><strong>Unpaid Assessment</strong> </p>
                    <p className="mb-1">This provides users with a view of all pending assessments.
                        Payments can be  initiated and completed by clicking on a particular assessment.
                    </p>
                    <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                        <Unpaidassessment />
                    </figure>
                </div>
            </div>
        </Widget>
    </>
)
