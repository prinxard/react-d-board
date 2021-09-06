import { FiAlertTriangle } from 'react-icons/fi';
import {
    Loginimg,
    OnboardSignup,
    Signinguppage,
    Submitonboard
} from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'


// from '../components/section-title'

const Index = () => (
    <>
        <SectionTitle subtitle="Onboarding" />

        <Widget description={<h5>step by step guide to onboard</h5>} >
            <div className="text-base bg-grey-50">
                <p>For first time users, one is expected to click on the “sign up” button.</p>
                <div>
                    <OnboardSignup />
                </div>
                <p>The portal provides a signup page where user enters taxpayer ID and clicks on “submit”.</p>
                <div className="mt-5">
                    <Submitonboard  />
                    <p>After which a token is sent via email/SMS to the registered email and phone number linked to the Tax Identification Number.</p>
                    <p className="mt-5 flex"><span><FiAlertTriangle color={'#ffd700'} size={'2rem'} /></span> <strong> User is required to have a valid Tax Identification Number to be able to sign up on the portal.</strong></p>
                    <p className="mt-5"><strong>Note:</strong> To register for a Tax Identification Number, user can visit the State IRS website (self-service) or click on Get KGTIN of the registration menu on the signup page on the portal [INDIVIDUAL] or [BUSINESS] as it applies to you.</p>
                    <p className="mt-4">After clicking on submit, a window like this will appear and you will have to fill in all the necessary details; create a password and enter the token sent to your phone/email). Once done click the “submit” button.</p>
                </div>
                <div className="my-8">
                    <Signinguppage />
                    <p>On-boarding happens once. On subsequent visits, user just logs in.</p>
                </div>
                <div className="mt-3">
                    <h3 className="mb-3">Login</h3>
                    <Loginimg />
                    <p>This takes you straight to your dashboard.</p>
                </div>
            </div>

        </Widget>
    </>
)
export default Index