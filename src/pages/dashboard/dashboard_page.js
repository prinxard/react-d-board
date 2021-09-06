import { Dash } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'

// from '../components/section-title'

const Index = () => (
  <>
    <SectionTitle title="Dashboard" />
    <Widget description={<span>Dashboard</span>}>
      <div className="text-base bg-grey-50">
        <p className="mb-2">The Portal dashboard gives the taxpayer an overview on their tax history. User can also access various menu on the left side bar.</p>
        <div>
          <Dash />
        </div>
        <p>Menus available are;</p>
        <ul>
          <li>
            DASHBOARD – a summary report of transactions.
          </li>
          <li>
            PAYMENT – to initiate new payment, view payment history and unpaid assessments.
          </li>
          <li>
            FILE RETURNS – PAYE monthly (upload and view), WITHHOLDING (upload and view).
          </li>
          <li>
            USER GUIDE- link to user guide
          </li>
        </ul>
      </div>
    </Widget>
  </>
)
export default Index