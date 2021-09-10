import { Dash } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'


const Index = () => (
  <>
    <Widget description={<span>Dashboard</span>}>
      <div className="text-base w-3/4 flex justify-center">
        <div>
          <p className="mb-2">The Portal dashboard gives the taxpayer an overview on their tax history.
            User can also access various menu on the left side bar.
          </p>
          <figure className='filter drop-shadow-xl md:drop-shadow-xl'>
            <Dash />
          </figure>
          <p>Menus available are;</p>
          <ul>
            <li>
              <strong>DASHBOARD</strong> – a summary report of transactions.
            </li>
            <li>
              <strong>PAYMENT</strong> – to initiate new payment, view payment history and unpaid assessments.
            </li>
            <li>
              <strong>FILE RETURNS</strong> – PAYE monthly (upload and view), WITHHOLDING (upload and view).
            </li>
            <li>
              <strong>USER GUIDE</strong>- link to user guide
            </li>
          </ul>

        </div>
      </div>
    </Widget>
  </>
)
export default Index