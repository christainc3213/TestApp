import './App.css';
import { useEffect, useState } from 'react';
import basketballTeams from './CollegeBasketballTeams.json'; // Import JSON directly

// Define the Team type
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (<h1>College Basketball Teams</h1>);
}

function TeamCard({ school, name, city, state }: Team) {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <p>Location: {city}, {state}</p>
    </div>
  );
}

function TeamList() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    setTeams(basketballTeams.teams); // Use imported JSON directly
  }, []);

  return (
    <div className="team-list">
      {teams.map((team, index) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;