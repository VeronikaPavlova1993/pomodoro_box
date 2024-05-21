
import { StatBlocks } from './StatBlock/StatBlock';
import { StatHeader } from './StatHeader/StatHeader';
import '../layout.css';

export function StatPage() {
  return (
    <main className='main'>
      <div className='container'>
        <StatHeader />
        <StatBlocks />
      </div>
    </main>
  );
}