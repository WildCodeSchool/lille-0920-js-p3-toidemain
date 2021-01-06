import courses from "./courses"

const Atelier = () => {
    return (
        <div>
            <img src="images/Atelier.jpg" alt="" width={"300px"}></img>
            <div>
                <div>
                    <h3>Toi Demain propose et organise des ateliers à destination des élèves afin de les accompagner 
                        dans leurs démarches professionnelles</h3>
                    <p>Afin d'aider les élèves dans leurs recherches d'emploi et de stage, l'association Toi Demain met en place des ateliers
                        d'aide à la préparation des candidatures (CV, lettre de motivation, préparation aux entretiens). Les élèves ont également
                        la possibilité de participer à des ateliers plus spécialisés
                    </p>
                    <div>
                        <ul>
                            <li>Orientation</li>
                            <li>Construction du projet professionnel</li>
                            <li>Confiance en soi</li>
                            <li>Préparation à l'oral</li>
                            <li>Methode de travail</li>
                            <li>Techniques de travail</li>
                        </ul>
                    </div>
                    <ul>
                        {courses.map((item) => (
                            <li item={item} key={item.name} name={item.name} logo={item.logo}></li>
                        ))}
                        </ul>   
                </div>
            </div>
        </div>
       
    )
}

export default Atelier
