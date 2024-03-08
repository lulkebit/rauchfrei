import { Component } from 'preact';
import Card from '../Cards/SavingGoalCard';
import TextInput from '../Inputs/TextInput';
import NumberInput from '../Inputs/NumberInput';

class NewCardComponent extends Component {
  constructor(props) {
    super(props);
    const storedCards = typeof window !== 'undefined' ? localStorage.getItem('cards') : null;
    this.state = {
      title: '',
      content: '',
      error: '',
      cards: storedCards ? JSON.parse(storedCards) : []
    };
  }  

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = () => {
    const { title, content } = this.state;

    if (!title || !content) {
      this.setState({ error: 'Bitte füllen Sie beide Felder aus.' });
      return;
    }

    const newCard = { id: Date.now(), title, content }; // Eindeutige ID für jede Karte
    const updatedCards = [...this.state.cards, newCard];

    this.setState({
      cards: updatedCards,
      title: '',
      content: '',
      error: ''
    }, () => {
      localStorage.setItem('cards', JSON.stringify(updatedCards));
    });
  };

  handleRemoveCard = (id) => {
    const updatedCards = this.state.cards.filter(card => card.id !== id);
    this.setState({ cards: updatedCards }, () => {
      localStorage.setItem('cards', JSON.stringify(updatedCards));
    });
  };

  render() {
    const { title, content, error, cards } = this.state;

    return (
      <div>
        <div className="form-group">
          <TextInput label="Ziel" placeHolder="Bsp.: Porsche" value={title} onChange={this.handleTitleChange} />
        </div>
        <div className="form-group">
          <NumberInput label="Preis (€)" placeHolder="200.000€" value={content} onChange={this.handleContentChange} />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="button" className="btn btn-block" style={{ backgroundColor: '#ACEB98', color: '#FFFFFF', marginBottom: '20px' }} onClick={this.handleSubmit}>
          Hinzufügen
        </button>
        {cards && cards.length > 0 && cards.map((card, index) => (
          <Card key={index} cardId={card.id} cardTitle={card.title} iconClass="fas fa-star" onRemove={() => this.handleRemoveCard(card.id)}>
            {card.content}
          </Card>
        ))}
      </div>
    );
  }
}

export default NewCardComponent;
