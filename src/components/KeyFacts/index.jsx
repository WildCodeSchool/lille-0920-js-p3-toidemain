import React from "react";

import { KeyFactsContainer, Fact } from "./style";

const KeyFacts = () => {
  return (
    <KeyFactsContainer>
      <Fact>
        <img src="/images/icons/bulles.png" alt="bulles" />
        <p>100%</p>
        <p>
          des jeunes recommandent à leurs copains de participer à notre stage.
        </p>
      </Fact>
      <Fact>
        <img src="/images/icons/loupe.png" alt="loupe" />
        <p>100%</p>
        <p>
          de nos partenaires estiment que notre formule de stage est bénéfique
          aussi bien pour les jeunes et leur entreprise.
        </p>
      </Fact>
      <Fact>
        <img src="/images/icons/plus.png" alt="plus" />
        <p>100%</p>
        <p>
          des jeunes sont capables de présenter leur projet pro ou leur atouts à
          la fin de la semaine.
        </p>
      </Fact>
      <Fact>
        <img src="/images/icons/coche.png" alt="coche" />
        <p>100%</p>
        <p>de nos partenaires recommandent l’action à d’autres entreprises.</p>
      </Fact>
    </KeyFactsContainer>
  );
};

export default KeyFacts;
