import CommonWrapper from "@/common/CommonWrapper";
import SvgBackgroundButton from "@/common/SvgBackgroundButton";
import VisualizeButton from "@/common/VisualizeButton";
import { Download } from "lucide-react";
import aiicon from "../../assets/homepage/AI Icon.svg";

const PromptArea = () => {
  return (
    <div className="pt-6 lg:px-0 px-5">
      <CommonWrapper>
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-4">
          <SvgBackgroundButton className="w-full md:w-auto">
            <Download className="inline-block text-white" />
            Upload Your Car Photo
          </SvgBackgroundButton>

          <SvgBackgroundButton className="w-full md:w-auto">
            Describe desired wrap style (e.g., "galaxy chrome with yellow flames")
          </SvgBackgroundButton>

          <VisualizeButton className="w-full md:w-auto">
            Generate
            <img src={aiicon} alt="AI Icon" className="inline-block w-5 h-5 ml-2" />
          </VisualizeButton>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default PromptArea;
