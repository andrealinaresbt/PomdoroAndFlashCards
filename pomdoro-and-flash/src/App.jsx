import InfoCard from './components/Card.jsx';

function App() {
  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <InfoCard
        title="Pomodoro Timer"
        text="Stay focused with timed work sessions and breaks."
        image="https://via.placeholder.com/180"
        buttonText="Start Timer"
      />

      <InfoCard
        title="Flashcards"
        text="Quickly review your flashcards and test your memory."
        image="https://via.placeholder.com/180"
        buttonText="Review Cards"
      />
    </div>
  );
}

export default App;
