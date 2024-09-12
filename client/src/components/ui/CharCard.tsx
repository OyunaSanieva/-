import React, { useContext } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import type { CharacterType } from '../../types/character';
import { useAppDispatch } from '../../redux/hooks';
import charService from '../../services/charService';
import {
  deleteCharacter,
  setSelectedCharById,
} from '../../redux/slices/characters/slice';

type CharCardProps = {
  char: CharacterType;
  // handleDelete: (id: number) => void;
};

function CharCard({ char }: CharCardProps): JSX.Element {
  console.log('card render', char.id);
  const dispatch = useAppDispatch();
  const deleteCard = (): void => {
    charService
      .deleteCharById(char.id)
      .then(() => dispatch(deleteCharacter(char.id)))
      .catch(console.log);
  };
    // // Условие для проверки наличия факультета и ссылки на картинку
    // if (!char.house || !char.image) {
    //   return null; 
    // }
  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      <img alt="Sample" src={char.image} />
      <CardBody>
        <CardTitle tag="h5">{char.name}</CardTitle>
        <CardText>Факультет: {char.house}</CardText> {/* Отображение факультета */}

        <Button color="danger" onClick={deleteCard}>
          Удалить
        </Button>
        <Button
          color="primary"
          onClick={() => dispatch(setSelectedCharById(char.id))}
        >
          Изменить имя
        </Button>
      </CardBody>
    </Card>
  );
}

export default React.memo(CharCard);
