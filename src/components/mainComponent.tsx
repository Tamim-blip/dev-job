
import NavBar from './navBar';
import FilterSection from './filterSection';
import JobSection from './jobssection';
import { use, useState } from 'react';
import type { TJob } from '../type';

type TMainComponentProps = {
    jobsPromise : Promise<TJob[]>
}

const MainComponent = ({jobsPromise} : TMainComponentProps) => {

    const data = use(jobsPromise)

    const [jobData, setJobData] = useState<TJob[]>(data)

    const [saveJob, setSaveJob] = useState<TJob[]>([])

    const HandleTabChange = (type : "all" | "frontend" | "backend" | "design") => {

        if(type === "frontend"){
            const filterData = data.filter(elm => elm.fields.toLowerCase() === "frontend")
            setJobData(filterData)
        }else if (type === "backend"){
            const filterData = data.filter(elm => elm.fields.toLowerCase() === "backend")
            setJobData(filterData)
        }else if (type === "design"){
            const filterData = data.filter(elm => elm.fields.toLowerCase() === "design")
            setJobData(filterData)
        }else {
            setJobData(data)
        } 

    }
    return (
        <div>
            <NavBar saveJob = {saveJob}></NavBar>
            <FilterSection HandleTabChange = {HandleTabChange}></FilterSection>
            <JobSection jobData = {jobData } saveJob = {saveJob} setSaveJob = {setSaveJob}></JobSection>
            
        </div>
    );
};

export default MainComponent;