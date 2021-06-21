import Layout from '../../components/common/Layout/Layout'
import { HomeWrapper } from './styled'
import InputField from '../../components/ui/InputField/InputField'
import Button from '../../components/ui/Button/Button'
import InputDate from '../../components/ui/InputDate/InputDate'
import InputFile from '../../components/ui/InputFile/InputFile'

function Home() {
  return (
    <Layout>
      <HomeWrapper>
        <form>
          <InputField title="Name" />
          <InputField title="Surname" />
          <InputDate title="DOB" />
          <InputField title="SSN" />
          <InputField title="Address" />
          <InputFile title="Driver License" />
          <InputField title="JOBS" />
          <Button>Submit</Button>
          <Button>Reset</Button>
        </form>
      </HomeWrapper>
    </Layout>
  )
}

export default Home
