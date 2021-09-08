import { AssessReciept, Choosebank, Downloadsteps, Interswitchpay, Paymentreciept, Paynowimg, Payynow, Recipt2, Selectmethod } from '../Images/Images'
import SectionTitle from '../section-title'
import Widget from '../widget'



export const MonthlyRem = () => (
    <>
        <SectionTitle subtitle="Payments" />
        <Widget description={<span>Pay Monthly remmittance</span>}>
            <div className="text-base w-3/4 flex justify-center">
                <div>

                    <div className="mb-4">
                        <h4 className="mb-1">PAY MONTHLY REMITTANCE</h4>
                        <p>Click on an unpaid assessment to use one of two means of payment;</p>
                        <ol className="mb-5">
                            <li>
                                1. Online (with debit card)
                            </li>
                            <li>
                                2. Pay at bank branch.
                            </li>
                        </ol>
                        <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                            <Selectmethod />
                        </figure>
                        <p className="mb-7"><strong>For Online</strong> - Click on “Pay Now”<sup>(1)</sup> to enter your
                            email and Phone number,
                            then Click on “Select Payment Channel”<sup>(2)</sup> to select the
                            available online payment channel and Click on “Confirm Payment” <sup>(3)</sup> to pay.
                        </p>
                    </div>

                    <div>

                        <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                            <Interswitchpay />
                        </figure>
                        <p className="mt-3">Upon successful payment, you will be redirected to your dashboard.</p>
                    </div>

                    <div className="my-10">
                        <p><strong>For Bank branch</strong> - Click on “Pay Now” to enter your email and Phone number.</p>
                        <figure className="mb-7 filter drop-shadow-xl md:drop-shadow-xl">
                            <Paynowimg />
                        </figure>

                        <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                            <Payynow />
                        </figure>
                    </div>
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
                        <p className="mb-5">To do this, on the side menu –click on “Payments”
                            <sup> (1) </sup> “Payment history” <sup> (2) </sup>
                            click on payment reference number <sup> (3) </sup> to open payment detail.
                        </p>
                        <figure>
                            <Downloadsteps />
                        </figure>
                        <p className="my-8">Then click on download receipt to download Receipt</p>
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