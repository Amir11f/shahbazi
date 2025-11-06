import CounselingIntroduction from "@/components/CounselingIntroduction";
import CounselingOnlineMeeting from "@/components/CounselingOnlineMeeting";
import CounsellingForm from "@/components/CounsellingForm";
import React from "react";

export default function page() {
  return (
    <div>
      <CounselingIntroduction />
      <CounselingOnlineMeeting />
      <CounsellingForm />
    </div>
  );
}
