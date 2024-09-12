export type CharacterType = {
    id: number;
    name: string;
    house: string;
    image: string;
  };
  
  export type AddCharacterForm = {
    name: string;
    image: string;
    house: string;
  
  };
  
  export type CharacterStateType = {
    chars: CharacterType[];
    selectedChar: CharacterType | null;
    favorites: CharacterType[];
  };
  