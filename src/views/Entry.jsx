import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEntries } from '../context/PlannerContext';

import styles from './Entry.css';

export default function Entry() {
  const { id } = useParams();
  const [entry, setEntry] = useState({});
  const { entries, getEntry, deleteEntry } = useEntries();

  useEffect(() => {
    setEntry(getEntry(id));
  }, [id, entries.length]);

  return (
    <>
      <Link to="/entries" className={styles.backButton}>
        &laquo; Back to Planner
      </Link>
      <article className={styles.entry}>
        <h1>{entry?.title}</h1>
        <p>Due: {entry?.date}</p>
        <p>{entry?.content}</p>
      </article>
      <button className={styles.editButton}>
        UPDATE
      </button>
      <button 
        className={styles.deleteButton}
        onClick={() => onDelete()}>
        DELETE
      </button>
    </>
  );
}
