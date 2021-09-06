import { AssessReciept, Choosebank, Downloadsteps, Interswitchpay, Paymentreciept, Paynowimg, Payynow, Recipt2, Selectmethod, Unpaidassessment } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'



const Index = () => (
    <>
        <SectionTitle subtitle="Payments" />
        <Widget description={<span>Unpaid Assessment</span>}>
            <div className="text-base bg-grey-50">
                <p className="mb-4">This provides users with a view of all pending assessments.  Payments <br /> can be  initiated and completed by clicking on a particular assessment.</p>
                <Unpaidassessment />

                <h4 className="mt-7">PAY MONTHLY REMITTANCE</h4>
                <div className="mb-4">
                    <p>Click on an unpaid assessment to use one of two means of payment;</p>
                    <ol>
                        <li>
                            1. Online (with debit card)
                        </li>
                        <li>
                            2. Pay at bank branch.
                        </li>
                    </ol>
                </div>

                <Selectmethod />
                <p className="my-3"><strong>For Online</strong> - Click on “Pay Now”<br /> (1) to enter your email and Phone number, then Click on “Select Payment Channel”<br /> (2) to select the available online payment channel and Click on “Confirm Payment” <br /> (3) to pay.</p>

                <Interswitchpay />
                <p className="mt-3">Upon successful payment, you will be redirected to your dashboard.</p>
                <p className="my-5"><strong>For Bank branch</strong> - Click on “Pay Now” to enter your email and Phone number.</p>
                <div className="mb-6">
                    <Paynowimg />
                </div>
                <Payynow />
                <p className="my-6">Now click on “Select Payment Channel” select “Bank” and Click on “Confirm Payment” to generate Assessment PDF.</p>

                <Choosebank />
                <p className="my-6">Print Assessment and take to the bank for payment</p>
                <div className="flex justify-center">
                    <AssessReciept />
                </div>
                <p className="flex justify-center"><strong>Printed assessment (SAMPLE).</strong></p>

                <div className="mt-8">
                    <h4>DOWNLOAD/ PRINT RECEIPT</h4>
                    <p className="mb-7">After successful payment, taxpayer can download and print out receipt.</p>
                    <p className="mb-5">To do this, on the side menu – <br />click on “Payments”(1) <br /> “Payment history”(2) <br /> click on payment reference number  (3) to open payment detail.</p>
                    <Downloadsteps />
                    <p className="my-8">Then click Download Receipt(4)</p>
                    <Recipt2 />
                    <div className="mt-6 flex justify-center">
                        <Paymentreciept />
                    </div>
                    <p className="flex justify-center"><strong>Printed receipt (SAMPLE)</strong></p>
                </div>

            </div>



        </Widget>
    </>
)
export default Index