import { FiAlertTriangle } from 'react-icons/fi';
import {
    Loginimg,
    OnboardSignup,
    Signinguppage,
    Submitonboard
} from '../components/Images/Images'
import SectionTitle from '../components/section-title'
import Widget from '../components/widget'


const Index = () => (
    <>
        <SectionTitle subtitle="Onboarding" />
        <Widget description={<h5>step by step guide to onboard</h5>} >
            <div className="text-base w-3/4 flex justify-center">
                <div>
                    <p>For first time users, one is expected to click on the “sign up” button, to enable the user create an account in the portal.</p>
                    <div>
                        <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                            <OnboardSignup />
                        </figure>
                    </div>

                    <div className="mt-5">
                        <p className="mb-1">The portal provides a signup page where user enters taxpayer ID and clicks on “submit”.</p>
                        <figure className='filter drop-shadow-xl md:drop-shadow-xl'>
                            <Submitonboard />
                        </figure>

                        <p>After which a token is sent via email/SMS to the registered email and phone number linked to the Tax Identification Number.</p>
                        <p className="flex mt-4"><span><FiAlertTriangle color={'#FFA500'} size={'2.5rem'} /></span></p>
                        <p className="mt-5 flex"><strong> User is required to have a valid Tax Identification Number to be able to sign up on the portal.</strong></p>
                        <p className="mt-5"><strong>Note:</strong> To register for a Tax Identification Number,
                            user can visit the State IRS <a href="https://irs.kg.gov.ng/" style={{ color: "blue" }}>website (self-service)</a> or click on Get KGTIN on the registration
                            menu on the signup page on the portal [INDIVIDUAL] or [BUSINESS] as it applies to you.
                        </p>
                    </div>
                    <div className="my-10">
                        <p className="mb-1">
                            After clicking on submit, a window like this will appear and you will have to
                            fill in all the necessary details;
                            create a password and enter the token sent to your phone/email. Once done click the “submit” button.
                        </p>
                        <figure className='filter drop-shadow-xl md:drop-shadow-xl'>
                            <Signinguppage />
                        </figure>
                        <p>On-boarding happens once. On subsequent visits, user just logs in.</p>
                    </div>
                    <div className="my-7">
                        <h3 className="mb-3">Login</h3>
                        <figure className='filter drop-shadow-xl md:drop-shadow-xl'>
                            <Loginimg />
                        </figure>
                        <p>This takes you straight to your dashboard, where you can see the total remittance, pending remittance and tax receipt.</p>
                    </div>
                </div>
            </div>

        </Widget>
    </>
)
export default Index