import { useState, useEffect } from "react";
import axios from "axios";
import { Axios } from "@/config/summaryAPI";

const fetchQualification = (apiUrl) => {
  const { url, method } = apiUrl;
  const [qualification, setQualification] = useState([]);
  const [qualificationLoader, setQualificationLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios({
          url,
          method,
          params: {
            token: "174462978804907-04-2025-17-48-11",
          },
        });
        setQualification(response.data.data.qualifications);
      } catch (err) {
      } finally {
        setQualificationLoader(false);
      }
    };

    if (apiUrl) {
      fetchData();
    }
  }, []);

  return { qualification, qualificationLoader };
};

const fetchSpecialization = (apiUrl) => {
  const { url, method } = apiUrl;
  const [specialization, setSpecialization] = useState([]);
  const [specializationLoader, setSpecializationLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios({
          url,
          method,
          params: {
            token: "174462978804907-04-2025-17-48-11",
          },
        });
        setSpecialization(response.data.data.specializations);
      } catch (err) {

      } finally {
        setSpecializationLoader(false);
      }
    };

    if (apiUrl) {
      fetchData();
    }
  }, []);

  return { specialization, specializationLoader };
};

export { fetchSpecialization,fetchQualification };
