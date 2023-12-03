/* eslint-disable operator-linebreak */
import { QueryClient, useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';
import { DevJob } from '../types';
import Skeleton from '../components/Skeleton';
import JobCard from '../components/JobCard';

const jobsQuery = () => ({
  queryKey: ['jobs'],
  queryFn: async (): Promise<DevJob[]> => {
    const response = await customFetch.get('/');
    return response.data;
  },
});

export const loader = (queryClient: QueryClient) => async () => {
  const query = jobsQuery();
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

function Home() {
  // const { jobs } = useLoaderData();
  const { data: jobs, isLoading } = useQuery(jobsQuery());

  return (
    <div className="wrapper">
      <div>form</div>

      {isLoading ? (
        <div className="grid-container">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="grid-container">
          {jobs && jobs.map((job) => <JobCard key={job.id} job={job} />)}
        </div>
      )}
    </div>
  );
}

export default Home;
