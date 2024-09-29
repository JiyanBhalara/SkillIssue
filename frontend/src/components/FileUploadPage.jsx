import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileInputComponent from "./FileInputComponent"; // Adjust the import path as necessary

function FileUploadPage() {
  const [jobDescriptionFile, setJobDescriptionFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [showResumeUpload, setShowResumeUpload] = useState(false);
  const navigate = useNavigate();

  const navigateToJobRecommendations = () => {
    if (jobDescriptionFile) {
      navigate("/jobRecommendations");
    } else {
      alert("Please upload a job description first.");
    }
  };

  const handleShowSkillGap = () => {
    if (jobDescriptionFile && resumeFile) {
      setShowResumeUpload(true);
    } else {
      alert("Please upload both job description and resume files first.");
    }
  };

  return (
    <div className="flex flex-col bg-cover items-center gap-10 justify-center min-h-screen ">
      <FileInputComponent
        label="Job Description"
        onFileChange={(file) => setJobDescriptionFile(file)}
      />
      <FileInputComponent
        label="Resume"
        onFileChange={(file) => setResumeFile(file)}
        style={{ display: showResumeUpload ? "block" : "none" }} // Hide or show based on state
      />

      <div className="flex gap-20">
        <button
          className="rounded border px-4 py-2 bg-blue-500 text-white"
          onClick={handleShowSkillGap}
        >
          Show Skill Gap
        </button>
        <button
          className="rounded border px-4 py-2 bg-blue-500 text-white"
          onClick={navigateToJobRecommendations}
        >
          Show Job Recommendations
        </button>
      </div>
    </div>
  );
}

export default FileUploadPage;
