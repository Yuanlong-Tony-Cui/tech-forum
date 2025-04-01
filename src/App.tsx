import { useState } from 'react';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
      {selectedId ? (
        <BlogPost id={selectedId} onBack={() => setSelectedId(null)} />
      ) : (
        <BlogList onSelect={setSelectedId} />
      )}
    </div>
  );
}

export default App;
