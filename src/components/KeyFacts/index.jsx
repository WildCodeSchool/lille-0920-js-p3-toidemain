import React from "react";

import { KeyFactsContainer, Fact } from "./style";

const KeyFacts = () => {
  return (
    <KeyFactsContainer>
      <Fact>
        <i class="far fa-comments"></i>
        <p>100%</p>
        <p>
          des jeunes recommandent à leurs copains de participer à notre stage.
        </p>
      </Fact>
      <Fact>
        <i class="fas fa-search"></i>
        <p>100%</p>
        <p>
          de nos partenaires estiment que notre formule de stage est bénéfique
          aussi bien pour les jeunes et leur entreprise.
        </p>
      </Fact>
      <Fact>
        <i class="fas fa-plus"></i>
        <p>100%</p>
        <p>
          des jeunes sont capables de présenter leur projet pro ou leur atouts à
          la fin de la semaine.
        </p>
      </Fact>
      <Fact>
        <i class="fas fa-check"></i>
        <p>100%</p>
        <p>de nos partenaires recommandent l’action à d’autres entreprises.</p>
      </Fact>
    </KeyFactsContainer>
  );
};

export default KeyFacts;
