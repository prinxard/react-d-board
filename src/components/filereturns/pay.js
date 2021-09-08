import { AssessReciept, Choosebank, Downloadsteps, Interswitchpay, Paymentreciept, Paynowimg, Payynow, Recipt2, Selectmethod } from '../Images/Images'
import SectionTitle from '../section-title'
import Widget from '../widget'



export const MonthlyRem = () => (
    <>
        <SectionTitle subtitle="Payments" />
        <Widget description={<span>Payment History</span>}>
            <div className="text-base w-3/4 flex justify-center">
                <div>
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

                    <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                        <Selectmethod />
                    </figure>

                    <p className="my-3"><strong>For Online</strong> - Click on “Pay Now”<br /> (1) to enter your email and Phone number, then Click on “Select Payment Channel”<br /> (2) to select the available online payment channel and Click on “Confirm Payment” <br /> (3) to pay.</p>
                    <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                        <Interswitchpay />
                    </figure>
                    <p className="mt-3">Upon successful payment, you will be redirected to your dashboard.</p>
                    <p className="my-5"><strong>For Bank branch</strong> - Click on “Pay Now” to enter your email and Phone number.</p>
                    <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                        <Paynowimg />
                    </figure>

                    <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                        <Payynow />
                    </figure>
                    <p className="my-6">Now click on “Select Payment Channel” select “Bank” and Click on “Confirm Payment” to generate Assessment PDF.</p>
                    <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                        <Choosebank />
                    </figure>
                    <p className="my-6">Print Assessment and take to the bank for payment</p>
                    <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                        <AssessReciept />
                    </figure>
                    <p><strong>Printed assessment (SAMPLE).</strong></p>

                    <div className="mt-8">
                        <h4>DOWNLOAD/ PRINT RECEIPT</h4>
                        <p className="mb-7">After successful payment, taxpayer can download and print out receipt.</p>
                        <p className="mb-5">To do this, on the side menu –click on “Payments”(1) <br /> “Payment history”(2) click on payment reference number(3) to open payment detail.</p>
                        <figure>
                            <Downloadsteps />
                        </figure>
                        <p className="my-8">Then click Download Receipt(4)</p>
                        <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                            <Recipt2 />
                        </figure>

                        <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                            <Paymentreciept />
                        </figure>
                        <p><strong>Printed receipt (SAMPLE)</strong></p>
                    </div>

                </div>
            </div>

        </Widget>
    </>
)