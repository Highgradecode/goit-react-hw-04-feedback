import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { AppWrapper } from "./AppWrapper.styled";
import { useEffect, useState } from "react";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState (0);
  const [bad, setBad] = useState (0);
  const [total, setTotal] = useState (0);
  const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] = useState ('');


  const feedbackOptions = {
    good: "good",
    neutral: "neutral",
    bad: "bad"
  };

  const addFeedback = (ev) => {
    const feedbackName = ev.target.dataset.feedbackName;

    const {good, neutral, bad} = feedbackOptions;

    switch (feedbackName) {
      
      case good:
        
        setGood(state => state + 1)
        break;

      case neutral:
        setNeutral(state => state + 1)
        break;

      case bad:
        setBad(state => state + 1)
        break;
    
      default:
        return;
    };
  };


  useEffect(()=>{
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);


  useEffect(()=>{
    const positivePercentage = Math.floor((good/total) * 100) + '%';
    setPositiveFeedbackPercentage(positivePercentage)
  }, [good, total]);



  return (
    <AppWrapper>
      <Section title="Please leave feedback">
          <FeedbackOptions options={feedbackOptions} onLeaveFeedback={addFeedback}/>
      </Section>

      <Section title="Statistics">
          {total === 0 
          ?
          <Notification message="There is no feedback"/>
          :
          <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total}
          positiveFeedbackPercentage={positiveFeedbackPercentage}/>
          }
      </Section>
    </AppWrapper>
  );
};

