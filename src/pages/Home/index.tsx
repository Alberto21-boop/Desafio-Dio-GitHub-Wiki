import { HomeContainer, Image } from './styles';
import gitHub from '../../assets/gitHub.png'

export function Home() {
    return (
        <HomeContainer>
            <Image src={gitHub} />
        </HomeContainer>
    );
}