import React from 'react';
import TopSection from "./TopSection";
import OptionsGrid from "./Optionsgrid";
import YourGoalsSection from "./YourGoalsSection";
import VictoryStories from "./VictoryStories";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import GoPremium from "./GoPremium";
import Footer from "./Footer";


export default function PremiumRoute() {
  return (
    <div>

    <TopSection/>
      <OptionsGrid/>
      <YourGoalsSection/>
      <VictoryStories/>
      <FrequentlyAskedQuestions/>
      <GoPremium/>
      <Footer/>
    </div>
  )
}

