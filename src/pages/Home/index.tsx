import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeComponent } from "./styles";

export function Home() {
    return (
        <HomeComponent>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em: </label>
                    <input id="task" type="text" />
                    
                    <label htmlFor="minutesAmount">durante</label>
                    <input id="minutesAmount" type="number" />

                    <span>minutos.</span>
                </FormContainer>
                <CountDownContainer>
                    <span>
                        0
                    </span>
                    <span>
                        0
                    </span>
                    <span>:</span>
                    <span>
                        0
                    </span>
                    <span>
                        0
                    </span>
                </CountDownContainer>

                <button type="submit"><Play size={24}/>Começar</button>
            </form>
        </HomeComponent>
    )
}