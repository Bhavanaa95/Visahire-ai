'use client';

import React, { useEffect, useState } from 'react';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salaryRange: string;
};

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // run **once** on first render
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch('http://localhost:3001/api/jobs');

        if (!res.ok) {
          throw new Error(`API returned ${res.status}`);
        }

        const data: Job[] = await res.json();
        setJobs(data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Could not load jobs. Please check that the API is running on port 3001.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []); // 🔴 IMPORTANT: empty array so this runs only once, no flicker loop

  // --- RENDER ---

  if (loading) {
    return (
      <div style={{ padding: '40px' }}>
        <h1>Available Jobs</h1>
        <p>Loading jobs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '40px' }}>
        <h1>Available Jobs</h1>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>Available Jobs</h1>

      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {jobs.map((job) => (
            <div
              key={job.id}
              style={{
                padding: '16px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                background: '#fafafa',
              }}
            >
              <h2 style={{ margin: 0 }}>{job.title}</h2>
              <p style={{ margin: '6px 0' }}>
                <strong>Company:</strong> {job.company}
              </p>
              <p style={{ margin: '6px 0' }}>
                <strong>Location:</strong> {job.location}
              </p>
              <p style={{ margin: '6px 0' }}>
                <strong>Salary:</strong> {job.salaryRange}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}