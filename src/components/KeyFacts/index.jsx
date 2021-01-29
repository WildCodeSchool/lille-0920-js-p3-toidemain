import React from "react";

import { KeyFactsContainer, Fact } from "./style";

const KeyFacts = () => {
  return (
    <KeyFactsContainer>
      <Fact>
        <i className="far fa-comments"></i>
        <h2>100 %</h2>
        <p>de nos partenaires renouvellent l'action l'année suivante.</p>
      </Fact>
      <Fact>
        <i className="fas fa-search"></i>
        <h2>97 %</h2>
        <p>des stagiaires recommandent STAGE UP à leurs amis.</p>
      </Fact>
      <Fact>
        <i className="fas fa-plus"></i>
        <h2>96 %</h2>
        <p>des stagiaires sont capables de mener une présentation orale.</p>
      </Fact>
      <Fact>
        <i className="fas fa-check"></i>
        <h2>100 %</h2>
        <p>
          des stagiaires prennent conscience de leurs talents durant le stage.
        </p>
      </Fact>
    </KeyFactsContainer>
  );
};

export default KeyFacts;
