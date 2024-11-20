import { HomeContainer, Image } from './styles';
import gitHub from '../../assets/gitHub.png'
import { Input } from '../../components/Input';

export function Home() {
    return (
        <HomeContainer>
            <Image src={gitHub} />
            <Input />
        </HomeContainer>
    );
}