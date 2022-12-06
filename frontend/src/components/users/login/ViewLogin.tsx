import imgNG from '../../../../doc/images/ngi.png';
import { 
    ButtonLoginRegister,
    FormLoginRegister, 
    LayoutLoginRegister, 
    LiFormLoginRegister, 
    LinkCadastro, SectionForm, 
    SectionImageLoginRegister, 
    SectionImageTitleForm, 
    Title 
} from '../style';

const View = () => {

    return (
        <LayoutLoginRegister>
            <SectionImageLoginRegister>
                <img src={imgNG} />
            </SectionImageLoginRegister>
            <SectionForm>
                <SectionImageTitleForm>
                    <img src={imgNG} />
                    <Title>Bem vindo !</Title>
                </SectionImageTitleForm>
                <FormLoginRegister>
                    <p>Faça seu login</p>
                    <LiFormLoginRegister>
                        <label>Digite sua nome</label>
                        <input type="text" placeholder='nome' />
                    </LiFormLoginRegister>
                    <LiFormLoginRegister>
                        <label>Digite sua senha</label>
                        <input type="password" placeholder='senha' />
                    </LiFormLoginRegister>
                    <ButtonLoginRegister>Entrar</ButtonLoginRegister>
                </FormLoginRegister>
                <LinkCadastro>
                    <p>Faça já seu</p>
                    <a href='register'>Cadastro</a>
                </LinkCadastro>
            </SectionForm>
        </LayoutLoginRegister>
    );
};

export default View;
