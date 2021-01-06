import React from "react";

import { KeyFactsContainer, Fact } from "./style";

const KeyFacts = () => {
  return (
    <KeyFactsContainer>
      <Fact>
        <i class="far fa-comments"></i>
        <h2>100 %</h2>
        <p>
          des jeunes recommandent à leurs copains de participer à notre stage.
        </p>
      </Fact>
      <Fact>
        <i class="fas fa-search"></i>
        <h2>100 %</h2>
        <p>
          de nos partenaires estiment que notre formule de stage est bénéfique
          aussi bien pour les jeunes et leur entreprise.
        </p>
      </Fact>
      <Fact>
        <i class="fas fa-plus"></i>
        <h2>100 %</h2>
        <p>
          des jeunes sont capables de présenter leur projet pro ou leur atouts à
          la fin de la semaine.
        </p>
      </Fact>
      <Fact>
        <i class="fas fa-check"></i>
        <h2>100 %</h2>
        <p>de nos partenaires recommandent l’action à d’autres entreprises.</p>
      </Fact>
    </KeyFactsContainer>
  );
};

export default KeyFacts;
