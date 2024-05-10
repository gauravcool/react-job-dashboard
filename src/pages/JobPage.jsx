import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
    const [job, setJob] = useState(null);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
              const res = await fetch(`/api/jobs/${id}`);
              const data = await res.json();
              setJob(data);
            } catch (error) {
              console.log(error);
            } finally {
              setLoading(false);
            }
          };
          fetchJob();
    }, []);

  return (
    <div>
        {loading ? <Spinner loading={loading} /> : <h1>{job.title}</h1>}
    </div>
  )
}

export default JobPage