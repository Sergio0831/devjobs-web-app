import { Link } from 'react-router-dom';
import { DevJob } from '../../types';
import styles from './styles.module.css';

type JobCardProps = {
  job: DevJob;
};
function JobCard({ job }: JobCardProps) {
  const {
    postedAt,
    contract,
    position,
    company,
    id,
    location,
    logo,
    logoBackground,
  } = job;

  return (
    <Link to={`/${id}`}>
      <article className={styles.job}>
        <div
          style={{ backgroundColor: logoBackground }}
          className={`${styles.jobLogo} center`}
        >
          <img src={logo} alt={company} />
        </div>
        <div className={styles.jobDetails}>
          <span>{postedAt}</span>
          <span>{contract}</span>
        </div>
        <div className={styles.jobInfo}>
          <h2 className={`${styles.jobPosition} heading-3`}>{position}</h2>
          <span>{company}</span>
        </div>
        <span className="heading-4">{location}</span>
      </article>
    </Link>
  );
}

export default JobCard;
