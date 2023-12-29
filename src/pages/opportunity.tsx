import { useParams } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";

const Opportunity = () => {
  const { id } = useParams();
  return (
    <MainLayout>
      <p>
        Opportunity Opportunity Opportunity Opportunity Opportunity Opportunity
        Opportunity Opportunity Opportunity Opportunity Opportunity Opportunity
        Opportunity Opportunity Opportunity Opportunity Opportunity Opportunity
        Opportunity Opportunity Opportunity Opportunity Opportunity Opportunity
      </p>
    </MainLayout>
  );
};

export default Opportunity;
