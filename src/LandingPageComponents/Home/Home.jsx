import React from 'react';
import 'firebase/compat/firestore';
import { db } from '../../firebase';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';


const Home = () => {

    const [value, loading, error] = useCollection(
        collection(db, 'charities'),
      );

    return (
      <>
        {error && <strong>Error</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <>
            {value.docs.map((item) => (
              <h1>
                  {item.data().name}
              </h1>
            ))}
          </>
        )}
      </>
    );
}

export default Home;