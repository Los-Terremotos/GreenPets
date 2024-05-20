import styled from 'styled-components';
import { useAppSelector } from '../../Hooks/hooks.ts';
import { RootState } from '../../App/store.ts';
import ViewMoreBtn from './ViewMore.tsx';
import { DarkGreyGreen } from '../../themes.ts';
import { capitalizeFirst } from '../../utils/capitalize.tsx';
import Modal from '../Modal.tsx';

const Wrapper = styled.div`
	padding-top: 4em;
	margin-top: 45px;
	max-width: 100%;
	width: 100vw;
`;

const Name = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	// background: white;
	// border-radius: 4px;
	width: auto;
	text-wrap: wrap;
	height: 50px;
	color: floralwhite;
	font-weight: 200;
	// box-shadow: 1px 1px 4px black;
`;

const Card = styled.div`
	text-align: center;
	width: 25%;
	background-color: ${DarkGreyGreen.primary1.color};
	font-size: 1.2em;
	padding: 40px;
	border-radius: 10px;
	margin: 10px;
	box-shadow: 5px 5px 10px black;

	@media(max-width: 425px){
		width: 50%;
	}
`;

const Image = styled.img`
	border-radius: 10px;
	margin-top: 25px;
	box-shadow: 1px 1px 4px black;
	width: 90%;
`;

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

interface plant {
  id: string,
  common_name: string,
  default_image: {
    thumbnail?: string;
  };
}

export default function Results() {
	const queryResult = useAppSelector((state: RootState) => state.queryResult);
	const modalToggle = useAppSelector((state: RootState) => state.modalToggle);

	// console.log(`Results: modalToggle.isOpen: ${modalToggle.isOpen}`);

	return (
		<Wrapper>
			{modalToggle.isOpen && <Modal />}
			<CardContainer>
				{queryResult.map((plant: plant) => (
					<Card key={plant.id}>
						<Name>{capitalizeFirst(plant.common_name)}</Name>
						{plant.default_image && plant.default_image.thumbnail && (
							<Image
								src={plant.default_image.thumbnail}
								alt={plant.common_name}
							/>
						)}
						<ViewMoreBtn plantId={plant.id} />
					</Card>
				))}
			</CardContainer>
		</Wrapper>
	);
}
