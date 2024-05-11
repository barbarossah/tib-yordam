import Answer from "../ui/Answer";
import CardHeader from "../ui/CardHeader";
import MoreAnswers from "../ui/MoreAnswers";
import Question from "../ui/Question";

// eslint-disable-next-line react/prop-types
function Card({ female }) {
  return (
    <article className="rounded-[18px] bg-white pb-4">
      <CardHeader />
      <div className="px-[18px]">
        <Question female={female} />
        <Answer />
        <MoreAnswers />
      </div>
    </article>
  );
}

export default Card;
