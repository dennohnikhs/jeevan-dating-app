import React from "react";
import QuickBenefitsCard from "./QuickBenefitsCard";

function Benefits() {
  return (
    <div className="flex flex-col gap-4">
      <QuickBenefitsCard
        headline="Kundi Milan"
        description="Check compatibility with profiles & get a list of kundi matches"
        numberOfReports="40"
        amount="$9.99"
      />
      <QuickBenefitsCard
        headline="Spotlight"
        description="B shown to 5x more matches for 24hrs"
        numberOfReports="3"
        amount="$11.99"
      />
      <QuickBenefitsCard
        headline="Contact Views"
        description="Get contact details & communicate faster"
        numberOfReports="30"
        amount="$44.99"
      />
    </div>
  );
}

export default Benefits;
