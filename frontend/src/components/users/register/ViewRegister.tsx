import { LayoutRow } from '../../../commonStyles';
import { SectionImage} from '../style';
import imgNG from '../../../../doc/images/ngi.png';
import Create from '../Create';

const View = () => {

	return (
		<LayoutRow>
			<SectionImage>
				<img src={imgNG} />
			</SectionImage>
			<Create id={''} name={''} password={''} email={''} phone={''} />
		</LayoutRow>
	);
};

export default View;
