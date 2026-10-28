import { MapPin, BriefcaseBusiness, Bookmark, DollarSign } from 'lucide-react';
import type { TJob } from '../type';


type JobCardProp = {
    item : TJob
    HandleSaveJob : (job : TJob) => void
    saveJob : TJob[]
}



const JobCard = ({item, HandleSaveJob, saveJob} : JobCardProp) => {

    const isSaved = saveJob.some(elm => elm.id === item.id)
   
    return (
        <div
                       
                            className= {`rounded-xl border  ${!isSaved ? "border-base-300" : "border-primary"} bg-base-100 p-5 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-md `}
                        >

                            {/* Card header */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-bold md:text-xl">
                                        {item.title}
                                    </h3>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                            {item.fields}
                                        </span>

                                        <span className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium">
                                            {item.jobType}
                                        </span>
                                    </div>
                                </div>

                               <div className="mt-5 flex justify-end">
                                <button
                                onClick={() => HandleSaveJob(item)}
                                    type="button"
                                    className ={ `btn btn-sm ${!isSaved ? "btn-primary" : "btn-block"}`}

                                >
                                    <Bookmark size={15
                                    } /> Save
                                </button>
                            </div>
                            </div>

                            {/* Job details */}
                            <div className="mt-5 flex flex-col gap-3 border-t border-base-300 pt-4 text-sm text-slate-500 ">

                                <div className="flex gap-2">
                                    <MapPin size={17} />
                                    <span>{item.location}</span>
                                </div>

                                <div className="flex gap-2">
                                    <BriefcaseBusiness size={17} />
                                    <span>{item.jobType}</span>
                                </div>

                                <div className=" flex gap-2 font-semibold text-success">
                                    <DollarSign size={17} />
                                    <span>{item.salaryRange}</span>
                                </div>

                            </div>
                        </div>
    );
};

export default JobCard;