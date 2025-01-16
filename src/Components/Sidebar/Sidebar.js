import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
const Sidebar = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Fetch patient data
    const credentials = btoa("coalition:skills-test");
    const fetchPatients = async () => {
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            method: "GET",
            headers: {
              Authorization: `Basic ${credentials}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setPatients(data); // Assuming data is an array of patient objects
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="sidebar patientslist">
      <div>
        <div className="PatientsHeader">
          <div>
            <h3>Patients</h3>
          </div>
          <div>
            <CiSearch />
          </div>
        </div>
      </div>

      <div className="patient-list">
        {patients.map((patient, index) => (
          <li key={index}>{patient.name}</li>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
