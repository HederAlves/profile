import imgNG from '../../../../doc/images/ngi.png';
import Create from '../Create';
import { LayoutLoginRegister, SectionImageLoginRegister } from '../style';

const View = () => {

    return (
        <LayoutLoginRegister>
            <SectionImageLoginRegister>
                <img src={imgNG} />
            </SectionImageLoginRegister>
            <Create id={''} name={''} password={''} email={''} phone={''} />
        </LayoutLoginRegister>
    );
};

export default View;
