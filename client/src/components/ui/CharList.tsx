
import React, { useState } from 'react';
import { Col, Row, Button } from 'reactstrap';
import CharCard from './CharCard';
import { useAppSelector } from '../../redux/hooks';
import '../../styles.css';

const ITEMS_PER_PAGE = 6; 

export default function CharList(): JSX.Element {
  const characters = useAppSelector((store) => store.characters.chars);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentCharacters = characters.slice(startIndex, endIndex);

  const totalPages = Math.ceil(characters.length / ITEMS_PER_PAGE);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Row>
        {Array.isArray(currentCharacters) && currentCharacters.map((char) => (
          <Col xs="4" key={char.id}>
            <CharCard char={char} />
          </Col>
        ))}
      </Row>

      <div className="pagination-controls">
        <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
          назад
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          вперед
        </Button>
      </div>
    </div>
  );
}
