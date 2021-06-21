import Layout from '../../components/common/Layout/Layout'
import { HomeWrapper } from './styled'
import InputField from '../../components/ui/InputField/InputField'

function Home() {
  return (
    <Layout>
      <HomeWrapper>
        <InputField title="Name" />
        <InputField title="Surname" />
        <InputField title="DOB" />
        <InputField title="SSN" />
        <InputField title="Address" />
        <InputField title="Driver License" />
        <InputField title="JOBS" />
        <button type="submit">
          Submit
        </button>
      </HomeWrapper>
    </Layout>
  )
}

export default Home
