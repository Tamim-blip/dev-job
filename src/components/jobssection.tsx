

import { Bookmark } from 'lucide-react';
import type { TJob } from '../type';

import JobCard from './jobCard';
import SavedJobCard from './savedJobCard';


type TJobSectionProps = {
    jobData: TJob[]
    saveJob: TJob[]
    setSaveJob: React.Dispatch<React.SetStateAction<TJob[]>>
}




const JobSection = ({ jobData, saveJob, setSaveJob }: TJobSectionProps) => {
    const HandleSaveJob = (job: TJob) => {

        const filterSaveJob = saveJob.filter(elm => elm.id !== job.id)

        setSaveJob([...filterSaveJob, job])

    }

    const HandleSavedRemove = (job : TJob) => {

        const filterRemove = saveJob.filter(elm => elm.id !== job.id)

        setSaveJob(filterRemove)

    }



    return (
        <div className="container mx-auto flex flex-col gap-8 px-4 py-8 md:flex-row">

            {/* Left side: Latest jobs */}
            <div className="w-full md:w-3/4">

                <div className="mb-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Latest Jobs</h2>
                    <p className="text-sm text-slate-400">{jobData.length} roles found</p>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    {jobData.map((item) => (
                        <JobCard key={item.id} item={item} HandleSaveJob={HandleSaveJob} saveJob = {saveJob}></JobCard>
                    ))}
                </div>

            </div>

            {/* Right side: Saved jobs */}
            <div className="w-full md:w-1/4">

                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Saved Jobs</h2>
                    <p className="text-sm text-slate-400">
                        {saveJob.length} saved {saveJob.length === 1 ? "job" : "jobs"}
                    </p>
                </div>

                <div className="mt-6 rounded-xl border border-base-300 bg-base-100 ">
                    {
                        saveJob.length === 0 ? <div className='p-6 text-center'>
                            <Bookmark size={32} className="mx-auto text-slate-400" />

                            <h3 className="mt-3 font-semibold">No saved jobs yet</h3>

                            <p className="mt-2 text-sm text-slate-500">
                                Save jobs that interest you to find them here later.
                            </p>

                        </div> : <div>
                            {
                                saveJob.map((item) => (
                                    <SavedJobCard key={item.id} item={item} HandleSavedRemove = {HandleSavedRemove}></SavedJobCard>
                                ))
                            }
                        </div>
                    }
                </div>

            </div>

        </div>
    );
};

export default JobSection;
