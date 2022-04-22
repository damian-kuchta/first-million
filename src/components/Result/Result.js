import ResultInfo from "./ResultInfo/ResultInfo";
import ResultControlPanel from "./ResultControl/ResultControlPanel";

const Result = (props) => {
  return (
    <section>
      <ResultInfo results={props.results} dateToMillion={props.dateToMillion} resultIsShown={props.resultIsShown}/>
      <ResultControlPanel
        showResult={props.showResult}
        showInitialPage={props.showInitialPage}
      />
    </section>
  );
};

export default Result;
