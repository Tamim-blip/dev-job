
import { Suspense} from "react"
import MainComponent from "./components/mainComponent"
import type { TJob } from "./type"
import Footer from "./components/footer"

const jobsPromise : Promise<TJob[]> = fetch("/jobs.json").then(res => res.json())



function App() {
  
  return (
   <div>

    <Suspense fallback = "Loading...">
      <MainComponent jobsPromise = {jobsPromise} ></MainComponent>
    </Suspense>

    <Footer></Footer>

   </div>
  )
}

export default App
