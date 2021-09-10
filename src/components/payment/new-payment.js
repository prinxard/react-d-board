import { NewPayment, Paymentconfirmation } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'


export const NewPay = () => (
    <div id="new-payments">
        <Widget>
            <div className="text-base w-3/4 flex justify-center">
                <div>
                    <div>
                        <p className="mb-4"><strong>New Payments</strong> </p>
                        <p className="mb-1">This menu gives you the option to initiate payments for MDAs and every associate revenue items.</p>
                        <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                            <NewPayment />
                        </figure>
                        <ul className="mt-1">
                            <li>
                                1. Click on “Select MDA”and choose the MDA you wish to make payment to
                            </li>
                            <li>
                                2. Click on “Select Item” to choose the item you wish to pay for
                            </li>
                            <li>
                                3. Select your Tax Station (if highlighted one is not correct)
                            </li>
                            <li>
                                4. Enter the Amount you wish to pay
                            </li>
                            <li>
                                5.  Click on the “Select Payment Channel” which will drop down all the available payment
                                 channels (Interswitch, Bank, Remita and eTransact).
                            </li>
                            <li>
                                6.  After all these is done, click on “Make Payment”
                            </li>
                        </ul>
                    </div>

                    <div className="my-10">
                        <p>Click on Confirm Payment, which will either direct you to generate a payment assessment
                            for Bank payment or to the Online (Debit card) payment channel.
                        </p>
                        <figure className='filter drop-shadow-xl md:drop-shadow-xl'>
                            <Paymentconfirmation />
                        </figure>
                    </div>
                </div>
            </div>

        </Widget>
    </div>
)