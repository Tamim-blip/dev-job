
import { Suspense} from "react"
import MainComponent from "./components/mainComponent"
import type { TJob } from "./type"

const jobsPromise : Promise<TJob[]> = fetch("/jobs.json").then(res => res.json())



function App() {
  
  return (
   <div>

    <Suspense fallback = "Loading...">
      <MainComponent jobsPromise = {jobsPromise} ></MainComponent>
    </Suspense>

   </div>
  )
}

export default App
