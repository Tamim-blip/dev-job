
import type { TJob } from '../type';

type savedCardProp  = {
    item : TJob
    HandleSavedRemove : (job :TJob) => void
}


const SavedJobCard = ({item, HandleSavedRemove} : savedCardProp) => {
    return (
       <div
           
            className="border-b border-base-300 p-4 last:border-b-0 transition hover:bg-base-200/60"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <h3 className="font-semibold text-base-content wrap-break-word">
                        {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-base-content/60">
                        {item.jobType}
                    </p>
                </div>

                <button onClick={ () => HandleSavedRemove (item)}>❌</button>
            </div>
        </div>
    );
};

export default SavedJobCard;