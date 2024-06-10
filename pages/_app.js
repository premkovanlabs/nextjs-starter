import '../styles/reset.css';
import '../styles/main.css';

// This default export is required in a new `pages/_app.js` file.
// changed on 10th June 2024
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
