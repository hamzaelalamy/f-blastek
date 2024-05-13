import InterestSelectionCard from "../../components/register/client/InterestSelectionCard";
import babysitting from "../../assets/babysitting.png"
import menage from "../../assets/menage.png"
import soutien from "../../assets/cours.png"
import aide from "../../assets/aide.png"

function InterestSelectionPage() {
    return (
        <div className="flex flex-col items-center pt-20">
            <h1 className="text-[#FF5C1A] text-5xl font-bold">Bienvenue !</h1>
            <h1 className="mt-10 text-4xl text-[#20B486] font-semibold outline-8">Quel service vous intéresse en priorité ?</h1>
            <div className="flex justify-center mt-6">
                <div className="flex flex-wrap justify-center">
                    <InterestSelectionCard title={"Babysitting"} description={"Une baby-sitter, nounou"} nav={"/register/Client"} icon={babysitting} />
                    <InterestSelectionCard title={"Soutien scolaire"} description={"Une baby-sitter, nounou"} nav={"/register/client"} icon={soutien} />
                    <InterestSelectionCard title={"Ménage"} description={"Une baby-sitter, nounou"} nav={"/register/client"} icon={menage} />
                    <InterestSelectionCard title={"Aide aux dépendants"} description={"Une baby-sitter, nounou"} nav={"/register/client"} icon={aide} />
                    {/* <InterestSelectionCard title={"Babysitting"} description={"Une baby-sitter, nounou"} nav={"/register/client"} /> */}
                </div>
            </div>
        </div>
    );
}

export default InterestSelectionPage;
